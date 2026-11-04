import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir, rm, cp, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { languages, productDocuments, reports } from '../content/shared.mjs';
import { renderPage } from './page.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist');
const documentHashes = JSON.parse(await readFile(path.join(root, 'documents.sha256.json'), 'utf8'));

function shape(value) {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === 'object') return Object.fromEntries(Object.keys(value).sort().map((key) => [key, shape(value[key])]));
  return typeof value;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function digest(file) {
  return createHash('sha256').update(await readFile(file)).digest('hex');
}

const sourceDocuments = [...productDocuments, ...reports.flatMap((report) => Object.values(report.files))];
const locales = {};

for (const language of languages) {
  const file = path.join(root, 'content', `${language.code}.json`);
  locales[language.code] = JSON.parse(await readFile(file, 'utf8'));
  assert(JSON.stringify(shape(locales[language.code])) === JSON.stringify(shape(locales.en)), `Locale structure differs: ${language.code}`);
  const strings = JSON.stringify(locales[language.code]);
  assert(!/\b(?:TODO|TBD)\b|Lorem ipsum|\{\{/.test(strings), `Untranslated placeholder found: ${language.code}`);
}

assert(Object.keys(documentHashes).length === sourceDocuments.length, 'Document hash manifest is out of date');
for (const document of sourceDocuments) {
  const local = path.join(root, 'documents', document.file);
  assert(await digest(local) === documentHashes[document.file], `Document differs from source: ${document.file}`);
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, 'src', 'assets'), path.join(output, 'assets'), { recursive: true });
await cp(path.join(root, 'src', 'styles.css'), path.join(output, 'assets', 'styles.css'));
await cp(path.join(root, 'src', 'app.js'), path.join(output, 'assets', 'app.js'));
await cp(path.join(root, 'documents'), path.join(output, 'documents'), { recursive: true });

const pages = [];
for (const language of languages) {
  const directory = language.code === 'en' ? output : path.join(output, language.code);
  await mkdir(directory, { recursive: true });
  const file = path.join(directory, 'index.html');
  await writeFile(file, renderPage(language.code, locales[language.code]));
  pages.push(file);
}
await writeFile(path.join(output, 'robots.txt'), 'User-agent: *\nAllow: /\n');

let referenceCount = 0;
for (const page of pages) {
  const html = await readFile(page, 'utf8');
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  assert(new Set(ids).size === ids.length, `Duplicate element ID in ${page}`);
  const idSet = new Set(ids);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const reference = match[1];
    if (reference.startsWith('#')) {
      assert(idSet.has(reference.slice(1)), `Missing anchor ${reference} in ${page}`);
      referenceCount += 1;
      continue;
    }
    if (/^(?:https?:|data:|mailto:|tel:)/.test(reference)) continue;
    const clean = decodeURIComponent(reference.split('#')[0].split('?')[0]);
    if (!clean) continue;
    let target = path.resolve(path.dirname(page), clean);
    assert(target === output || target.startsWith(`${output}${path.sep}`), `Reference leaves site root: ${reference}`);
    let targetStat = await stat(target).catch(() => null);
    if (targetStat?.isDirectory()) {
      target = path.join(target, 'index.html');
      targetStat = await stat(target).catch(() => null);
    }
    assert(targetStat?.isFile(), `Missing local resource ${reference} in ${page}`);
    referenceCount += 1;
  }
}

console.log(`Built ${pages.length} localized pages with ${sourceDocuments.length} source-verified PDFs.`);
console.log(`Validated ${referenceCount} local links, assets and anchors.`);
console.log(`Output: ${output}`);

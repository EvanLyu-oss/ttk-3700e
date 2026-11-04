import { chartData, languages, reports, sceneOrder } from '../content/shared.mjs';
import { mediaCopy, sceneMedia } from '../content/media.mjs';
import { contactChannels, whatsappCopy } from '../content/channels.mjs';

const escapeMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const e = (value) => String(value).replace(/[&<>"']/g, (character) => escapeMap[character]);
const json = (value) => JSON.stringify(value).replace(/</g, '\\u003c');

const skipLabels = {
  en: 'Skip to content',
  'zh-cn': '跳至正文',
  es: 'Ir al contenido',
  de: 'Zum Inhalt springen',
  ja: '本文へ移動'
};

function icon(name, className = '') {
  return `<svg class="icon ${e(className)}" aria-hidden="true" focusable="false"><use href="#i-${e(name)}"></use></svg>`;
}

function brand() {
  return `<span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><path d="m4 11 15-8 16 8-16 9Z" fill="currentColor"/><path d="m4 18 15 9 16-9v7l-16 9-15-9Z" fill="currentColor" opacity=".72"/><path d="m4 28 15 9 16-9v5l-16 7-15-7Z" fill="currentColor" opacity=".4"/></svg></span><span class="brand-type"><strong>POLYTREND</strong><small>MATERIAL INNOVATION</small></span>`;
}

function symbols() {
  return `<svg class="svg-sprite" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M4 12h15m-6-6 6 6-6 6"/></symbol>
    <symbol id="i-arrow-up" viewBox="0 0 24 24"><path d="M6 18 18 6M6 6h12v12"/></symbol>
    <symbol id="i-chevron" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></symbol>
    <symbol id="i-download" viewBox="0 0 24 24"><path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4"/></symbol>
    <symbol id="i-check" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></symbol>
    <symbol id="i-file" viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6Z M14 3v5h4M9 12h6M9 16h6"/></symbol>
    <symbol id="i-layers" viewBox="0 0 24 24"><path d="m3 7 9-4 9 4-9 4Z M3 12l9 4 9-4M3 17l9 4 9-4"/></symbol>
    <symbol id="i-flow" viewBox="0 0 24 24"><path d="M4 7h11m-4-4 4 4-4 4M20 17H9m4-4-4 4 4 4"/></symbol>
    <symbol id="i-shield" viewBox="0 0 24 24"><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z"/><path d="m8 12 2.5 2.5L16 9"/></symbol>
    <symbol id="i-info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v.5"/></symbol>
    <symbol id="i-copy" viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="13" rx="1"/><path d="M16 8V3H4v13h4"/></symbol>
    <symbol id="i-lock" viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></symbol>
    <symbol id="i-flask" viewBox="0 0 24 24"><path d="M9 3h6M10 3v6l-6 10a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2L14 9V3M8 15h8"/></symbol>
    <symbol id="i-chat" viewBox="0 0 24 24"><path d="M4 4h16v12H9l-5 4Z"/><path d="M8 8h8M8 12h5"/></symbol>
    <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 6 9 7 9-7"/></symbol>
  </svg>`;
}

function heading(content) {
  return `<div class="section-heading"><h2>${e(content.title)}</h2><p class="section-intro">${e(content.intro)}</p></div>`;
}

function sceneImage(scene, code, { descriptive = false, eager = false, className = '' } = {}) {
  const media = sceneMedia[scene];
  const prefix = code === 'en' ? './' : '../';
  const classAttribute = className ? ` class="${e(className)}"` : '';
  return `<img${classAttribute} src="${e(`${prefix}assets/${media.src}`)}" width="${media.width}" height="${media.height}" loading="${eager ? 'eager' : 'lazy'}" decoding="async" alt="${descriptive ? e(mediaCopy[code].alts[scene]) : ''}">`;
}

function applications(t, code) {
  const a = t.applications;
  const m = mediaCopy[code];
  const tabs = sceneOrder.map((key, index) => `<button class="scenario-tab" id="tab-${key}" type="button" role="tab" aria-selected="${index === 0}" aria-controls="panel-${key}" tabindex="${index === 0 ? 0 : -1}" data-scene-tab="${key}">${sceneImage(key, code, { className: 'scenario-thumb' })}<span class="scenario-tab-text">${e(a.scenes[key].tab)}</span>${icon('arrow')}</button>`).join('');
  const panels = sceneOrder.map((key, index) => {
    const scene = a.scenes[key];
    const media = sceneMedia[key];
    return `<article class="scenario-panel" id="panel-${key}" role="tabpanel" aria-labelledby="tab-${key}" data-scene="${key}" ${index === 0 ? 'data-default="true"' : ''}>
      <div class="scenario-content"><div class="scenario-heading"><span class="status-badge">${icon(key === 'hygiene' || key === 'protective' ? 'check' : 'info')}${e(scene.status)}</span><h3>${e(scene.title)}</h3><p>${e(scene.description)}</p></div>
      <ol class="scenario-products">${scene.products.map((item) => `<li><div><h4>${e(item.name)}</h4><p>${e(item.detail)}</p></div></li>`).join('')}</ol></div>
      <div class="scenario-visual"><figure class="scene-photo">${sceneImage(key, code, { descriptive: true })}<figcaption><span>${e(m.photoNotice)}</span><a href="${e(media.source)}" target="_blank" rel="noopener">Pexels</a></figcaption></figure><div class="scene-focus"><p>${e(scene.focusLabel)}</p><ul>${scene.focus.map((item) => `<li>${e(item)}</li>`).join('')}</ul></div><div class="scenario-note">${icon(key === 'hygiene' || key === 'protective' ? 'info' : 'shield')}<p>${e(scene.note)}</p></div></div>
    </article>`;
  }).join('');
  return `<section class="section applications-section" id="applications"><div class="container">${heading(a)}<div class="scenario-tabs" role="tablist" aria-label="${e(a.tabsLabel)}">${tabs}</div><div class="scenario-panels">${panels}</div><div class="other-applications"><h3>${e(a.otherTitle)}</h3><div>${a.other.map((item, index) => `<article>${icon(index === 0 ? 'layers' : 'flow')}<h4>${e(item.title)}</h4><p>${e(item.text)}</p></article>`).join('')}</div></div></div></section>`;
}

function chart(p) {
  const left = 62;
  const right = 718;
  const top = 28;
  const bottom = 268;
  const x = (day) => left + (day / 30) * (right - left);
  const y = (value) => top + ((46 - value) / 8) * (bottom - top);
  const points = chartData.days.map((day, index) => `${x(day)},${y(chartData.product[index])}`).join(' ');
  const grid = [38, 40, 42, 44, 46].map((value) => `<g><line x1="${left}" y1="${y(value)}" x2="${right}" y2="${y(value)}" class="chart-grid"/><text x="${left - 15}" y="${y(value) + 4}" text-anchor="end" class="chart-label">${value}</text></g>`).join('');
  const xTicks = chartData.days.map((day) => `<g><line x1="${x(day)}" y1="${bottom}" x2="${x(day)}" y2="${bottom + 6}" class="chart-tick"/><text x="${x(day)}" y="${bottom + 27}" text-anchor="middle" class="chart-label">${day}</text></g>`).join('');
  const dots = chartData.days.map((day, index) => `<circle cx="${x(day)}" cy="${y(chartData.product[index])}" r="5" class="chart-dot"><title>${day}: ${chartData.product[index]} mN/m</title></circle>`).join('');
  const rows = chartData.days.map((day, index) => `<tr><th scope="row">${day === 0 ? e(p.initialLabel) : day}</th><td>${chartData.product[index]}</td><td>${chartData.comparator[index]}</td></tr>`).join('');
  return `<div class="chart-card"><div class="chart-header"><div><p class="chart-overline">${e(p.chartSubtitle)}</p><h3>${e(p.chartTitle)}</h3></div>${icon('flow')}</div><svg class="corona-chart" viewBox="0 0 760 330" role="img" aria-labelledby="corona-title corona-description"><title id="corona-title">${e(p.chartTitle)}</title><desc id="corona-description">${e(p.chartDescription)}</desc>${grid}<line x1="${left}" y1="${bottom}" x2="${right}" y2="${bottom}" class="chart-axis"/>${xTicks}<polyline points="${points}" class="chart-comparator"/><polyline points="${points}" class="chart-product"/>${dots}<text x="${left}" y="14" class="chart-unit">mN/m</text></svg><div class="chart-axis-label">${e(p.daysLabel)}</div><div class="chart-legend"><span><i class="legend-product"></i>${e(p.productLegend)}</span><span><i class="legend-comparator"></i>${e(p.comparatorLegend)}</span></div><details class="chart-data"><summary>${e(p.chartDataSummary)}${icon('chevron')}</summary><div class="table-scroll"><table><caption class="sr-only">${e(p.chartDescription)}</caption><thead><tr><th>${e(p.dayLabel)}</th><th>${e(p.productLegend)}</th><th>${e(p.comparatorLegend)}</th></tr></thead><tbody>${rows}</tbody></table></div></details></div>`;
}

function performance(t) {
  const p = t.performance;
  return `<section class="section performance-section" id="performance"><div class="container">${heading(p)}<div class="performance-grid">${chart(p)}<aside class="performance-result"><p class="kicker">TDS / 30 DAYS</p><strong>${e(p.resultValue)}</strong><h3>${e(p.resultLabel)}</h3><p>${e(p.resultNote)}</p><div class="result-comparison"><span>${e(p.productLegend)}</span><span>${e(p.comparatorLegend)}</span></div></aside></div><div class="film-metrics"><div class="metrics-heading"><h3>${e(p.metricsTitle)}</h3><span>${e(p.before)} → ${e(p.after)}</span></div><div class="metric-grid">${p.metrics.map((metric) => `<article><h4>${e(metric.label)} <small>${e(metric.unit)}</small></h4><dl><div><dt>${e(p.before)}</dt><dd>${e(metric.before)}<small>${e(metric.unit)}</small></dd></div><div><dt>${e(p.after)}</dt><dd>${e(metric.after)}<small>${e(metric.unit)}</small></dd></div></dl></article>`).join('')}</div><p class="data-conditions">${e(p.conditions)}</p><p class="data-conclusion">${e(p.conclusion)}</p></div></div></section>`;
}

function compliance(t, doc, code) {
  const c = t.compliance;
  const m = mediaCopy[code];
  const prefix = code === 'en' ? './' : '../';
  return `<section class="section compliance-section" id="compliance"><div class="container">${heading(c)}<div class="compliance-grid">${c.cards.map((card) => {
    const report = reports.find((item) => item.id === card.id);
    const file = doc(report);
    return `<article class="compliance-card"><a class="report-preview" href="${e(doc(report, true))}" target="_blank" rel="noopener" aria-label="${e(`${card.link} — ${file.id}`)}"><img src="${e(`${prefix}assets/images/report-${report.id}${code === 'zh-cn' ? '-cn' : ''}.jpg`)}" width="720" height="1018" loading="lazy" decoding="async" alt="${e(`${m.reportAlt}${card.title}`)}"></a><div class="compliance-content"><div class="compliance-card-top">${icon('flask')}<span>SGS / ${e(report.date)}</span></div><strong class="compliance-metric">${e(card.metric)}</strong><h3>${e(card.title)}</h3><p class="compliance-result">${icon('check')}${e(card.result)}</p><p class="compliance-method">${e(card.method)}</p><div class="compliance-reference"><span>${e(file.id)}</span><a href="${e(doc(report, true))}" target="_blank" rel="noopener">${e(card.link)}${icon('arrow-up')}</a></div></div></article>`;
  }).join('')}</div><div class="declaration-row"><h3>${e(c.declarationTitle)}</h3><ul>${c.declarations.map((item) => `<li>${icon('check')}${e(item)}</li>`).join('')}</ul></div><aside class="evidence-note">${icon('info')}<div><h3>${e(c.noteTitle)}</h3><p>${e(c.note)}</p></div></aside></div></section>`;
}

function process(t) {
  const p = t.process;
  return `<section class="section process-section" id="process"><div class="container">${heading(p)}<div class="process-layout"><ol class="process-steps">${p.steps.map((step, index) => `<li><span class="step-number">0${index + 1}</span><div><h3>${e(step.title)}</h3><p>${e(step.text)}</p></div></li>`).join('')}</ol><aside class="packaging-card">${icon('layers')}<h3>${e(p.packTitle)}</h3><dl>${p.pack.map((item) => `<div><dt>${e(item.label)}</dt><dd>${e(item.value)}</dd></div>`).join('')}</dl></aside></div><p class="process-note">${icon('info')}${e(p.note)}</p></div></section>`;
}

function resources(t, docPath) {
  const r = t.resources;
  const download = (file, label, title) => `<a class="download-link" href="${e(docPath(file))}" download aria-label="${e(`${r.download}: ${title} — ${label}`)}">${e(label)}${icon('download')}</a>`;
  return `<section class="section resources-section" id="resources"><div class="container">${heading(r)}<div class="primary-documents"><article class="primary-document"><div class="document-icon">${icon('file')}</div><div><p class="kicker">${e(r.primaryBadge)}</p><h3>${e(r.tdsTitle)}</h3><p>${e(r.tdsDescription)}</p><div class="document-actions">${download('ttk-3700e-tds-en.pdf', r.downloadEn, r.tdsTitle)}${download('ttk-3700e-tds-cn.pdf', r.downloadCn, r.tdsTitle)}</div></div></article><article class="primary-document"><div class="document-icon">${icon('flow')}</div><div><p class="kicker">TTK-3700E / DATA</p><h3>${e(r.performanceTitle)}</h3><p>${e(r.performanceDescription)}</p><div class="document-actions">${download('ttk-3700e-performance-en.pdf', r.downloadEn, r.performanceTitle)}${download('ttk-3700e-performance-cn.pdf', r.downloadCn, r.performanceTitle)}</div></div></article></div><div class="report-library"><h3>${e(r.reportsTitle)}</h3>${t.compliance.cards.map((card) => {
    const report = reports.find((item) => item.id === card.id);
    return `<article class="report-row"><div class="report-name"><span>SGS</span><h4>${e(card.title)}</h4></div><div class="report-meta"><span>${e(report.files.en.id)} / EN</span><span>${e(report.files.zh.id)} / CN</span><time datetime="${e(report.date)}">${e(r.dateLabel)} ${e(report.date)}</time></div><div class="report-actions">${download(report.files.en.file, r.downloadEn, card.title)}${download(report.files.zh.file, r.downloadCn, card.title)}</div></article>`;
  }).join('')}</div><div class="resource-notes"><aside><h3>${e(r.sourceNoteTitle)}</h3><p>${e(r.sourceNote)}</p></aside><aside class="safety-note">${icon('shield')}<div><h3>${e(r.safetyTitle)}</h3><p>${e(r.safety)}</p></div></aside></div></div></section>`;
}

function contact(t, code) {
  const c = t.contact;
  const w = whatsappCopy[code];
  const whatsappNumber = contactChannels.whatsappNumber.replace(/\D/g, '');
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`TTK-3700E — ${t.hero.intro}`)}`;
  const emailHref = `mailto:${contactChannels.email}?subject=${encodeURIComponent(c.briefTitle)}&body=${encodeURIComponent(`TTK-3700E — ${t.hero.intro}`)}`;
  const optional = `<span class="optional">${e(c.optional)}</span>`;
  const options = sceneOrder.map((key) => {
    const scene = t.applications.scenes[key];
    return `<option value="${e(key)}" data-note="${e(scene.note)}">${e(scene.tab)}</option>`;
  }).join('');
  const processOptions = Object.entries(c.processOptions).map(([value, label]) => `<option value="${e(value)}">${e(label)}</option>`).join('');
  const config = {
    briefTitle: c.briefTitle,
    generatedNote: c.generatedNote,
    applicationNote: c.applicationNote,
    labels: { name: c.name, company: c.company, region: c.region, application: c.application, process: c.process, resin: c.resin, challenge: c.challenge },
    copied: c.copied,
    copyFallback: c.copyFallback,
    whatsappNumber,
    email: contactChannels.email
  };
  return `<section class="section contact-section" id="contact"><div class="container contact-layout"><div class="contact-copy"><p class="kicker">${e(c.kicker)}</p><h2>${e(c.title)}</h2><p>${e(c.intro)}</p><div class="manufacturer"><span>${e(c.companyLabel)}</span><strong>${e(c.manufacturer)}</strong><p>Foshan · China</p></div><a class="button button-whatsapp manufacturer-whatsapp" href="${e(whatsappHref)}" target="_blank" rel="noopener">${icon('chat')}${e(w.label)}</a><a class="manufacturer-email" href="${e(emailHref)}">${icon('mail')}${e(contactChannels.email)}</a></div><div class="brief-card"><h3>${e(c.formTitle)}</h3><form id="technical-brief"><div class="form-grid"><div class="field"><label for="brief-name">${e(c.name)} ${optional}</label><input id="brief-name" name="name" type="text" autocomplete="name" placeholder="${e(c.namePlaceholder)}" maxlength="120"></div><div class="field"><label for="brief-company">${e(c.company)} ${optional}</label><input id="brief-company" name="company" type="text" autocomplete="organization" placeholder="${e(c.companyPlaceholder)}" maxlength="160"></div><div class="field"><label for="brief-region">${e(c.region)} ${optional}</label><input id="brief-region" name="region" type="text" autocomplete="country-name" placeholder="${e(c.regionPlaceholder)}" maxlength="120"></div><div class="field"><label for="brief-resin">${e(c.resin)} ${optional}</label><input id="brief-resin" name="resin" type="text" placeholder="${e(c.resinPlaceholder)}" maxlength="180"></div><div class="field"><label for="brief-application">${e(c.application)}</label><select id="brief-application" name="application" required><option value="" selected disabled>${e(c.selectOption)}</option>${options}</select></div><div class="field"><label for="brief-process">${e(c.process)}</label><select id="brief-process" name="process" required><option value="" selected disabled>${e(c.selectOption)}</option>${processOptions}</select></div><div class="field field-full"><label for="brief-challenge">${e(c.challenge)}</label><textarea id="brief-challenge" name="challenge" rows="4" required maxlength="1800" placeholder="${e(c.challengePlaceholder)}"></textarea></div></div><button class="button button-dark form-submit" type="submit"><span>${e(c.submit)}</span>${icon('arrow')}</button><p class="form-privacy">${icon('lock')}${e(c.privacy)}</p></form><div class="brief-result" id="brief-result" hidden><label for="brief-output">${e(c.resultTitle)}</label><textarea id="brief-output" rows="12" readonly></textarea><div class="brief-result-actions"><button class="button button-dark" id="copy-brief" type="button">${icon('copy')}${e(c.copy)}</button><a class="button button-whatsapp" id="whatsapp-brief" href="${e(whatsappHref)}" target="_blank" rel="noopener">${icon('chat')}${e(w.label)}</a><a class="button button-email" id="email-brief" href="${e(emailHref)}">${icon('mail')}${e(w.emailLabel)}</a><p id="copy-status" role="status"></p></div><p class="whatsapp-note">${e(w.notice)}</p><p class="channel-note">${e(w.emailNotice)}</p></div></div></div><script type="application/json" id="brief-config">${json(config)}</script></section>`;
}

export function renderPage(code, t) {
  const prefix = code === 'en' ? './' : '../';
  const asset = (file) => `${prefix}assets/${file}`;
  const docPath = (file) => `${prefix}documents/${file}`;
  const languageUrl = (target) => target === 'en' ? prefix : `${prefix}${target}/`;
  const preferredReport = (report, href = false) => {
    const file = code === 'zh-cn' ? report.files.zh : report.files.en;
    return href ? docPath(file.file) : file;
  };
  const languageLinks = languages.map((language) => `<a href="${e(languageUrl(language.code))}" hreflang="${e(language.code)}" lang="${e(language.code)}" data-language-link ${language.code === code ? 'aria-current="page"' : ''}><span>${e(language.name)}</span>${language.code === code ? icon('check') : ''}</a>`).join('');
  const alternateLinks = languages.map((language) => `<link rel="alternate" hreflang="${e(language.code)}" href="${e(languageUrl(language.code))}">`).join('\n  ');
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'TTK-3700E',
    description: t.hero.intro,
    category: 'Polymer processing aid masterbatch',
    brand: { '@type': 'Brand', name: 'POLYTREND' },
    manufacturer: { '@type': 'Organization', name: 'Foshan Polytrend New Material Co., Ltd.' },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Active content', value: '5.00%' },
      { '@type': 'PropertyValue', name: 'Carrier resin', value: 'LDPE' },
      { '@type': 'PropertyValue', name: 'Form', value: 'Milky-white pellets' }
    ]
  };
  const h = t.hero;
  return `<!doctype html>
<html lang="${code === 'zh-cn' ? 'zh-CN' : code}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${e(t.meta.title)}</title>
  <meta name="description" content="${e(t.meta.description)}">
  <meta name="theme-color" content="#10233f">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${e(t.meta.title)}">
  <meta property="og:description" content="${e(t.meta.description)}">
  <meta property="og:locale" content="${e(languages.find((language) => language.code === code).locale)}">
  ${alternateLinks}
  <link rel="alternate" hreflang="x-default" href="${e(languageUrl('en'))}">
  <link rel="icon" href="${e(asset('favicon.svg'))}" type="image/svg+xml">
  <link rel="stylesheet" href="${e(asset('styles.css'))}">
  <script>document.documentElement.classList.add('js');</script>
  <script type="module" src="${e(asset('app.js'))}"></script>
  <script type="application/ld+json">${json(structuredData)}</script>
</head>
<body id="top" class="locale-${e(code)}">
  <a class="skip-link" href="#main">${e(skipLabels[code])}</a>
  ${symbols()}
  <header class="site-header" data-menu-open="false"><div class="container nav-shell"><a class="brand" href="#top" aria-label="POLYTREND">${brand()}</a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span class="sr-only">${e(t.nav.menu)}</span><span class="menu-lines" aria-hidden="true"><i></i><i></i></span></button><nav class="nav-links" id="site-nav" aria-label="${e(t.nav.menu)}"><a href="#product">${e(t.nav.product)}</a><a href="#applications">${e(t.nav.applications)}</a><a href="#performance">${e(t.nav.performance)}</a><a href="#resources">${e(t.nav.resources)}</a></nav><div class="nav-actions"><details class="language-picker"><summary aria-label="${e(t.languageLabel)}"><span>${code === 'zh-cn' ? '中文' : code.toUpperCase()}</span>${icon('chevron')}</summary><nav class="language-menu" aria-label="${e(t.languageLabel)}">${languageLinks}</nav></details><a class="nav-cta" href="#contact">${e(t.nav.contact)}${icon('arrow-up')}</a></div></div></header>
  <main id="main">
    <section class="hero"><div class="container hero-grid"><div class="hero-copy"><h1>${h.title.map((line, index) => `<span class="${index === 1 ? 'accent-title' : ''}">${e(line)}</span>`).join('')}</h1><p class="hero-product-line">${e(h.eyebrow)}</p><p class="hero-intro">${e(h.intro)}</p><div class="hero-actions"><a class="button button-accent" href="#applications">${e(h.primaryCta)}${icon('arrow')}</a><a class="button button-ghost" href="${e(docPath(code === 'zh-cn' ? 'ttk-3700e-tds-cn.pdf' : 'ttk-3700e-tds-en.pdf'))}" download>${e(h.secondaryCta)}${icon('download')}</a></div><a class="hero-proof" href="#compliance">${icon('shield')}<span>${e(h.reportBadge)}</span>${icon('arrow-up')}</a></div><figure class="sample-evidence"><div class="sample-image"><img src="${e(asset('images/sample-sgs.jpg'))}" width="835" height="626" alt="${e(mediaCopy[code].sampleAlt)}" fetchpriority="high"></div><figcaption class="sample-caption"><strong class="sample-label">${e(mediaCopy[code].sampleLabel)}</strong><code>CAN26-0133305-0001.C001</code><p>${e(h.visualCaption)}</p><a href="${e(preferredReport(reports.find((report) => report.id === 'fluorine'), true))}" target="_blank" rel="noopener">${e(t.compliance.cards[1].link)}${icon('arrow-up')}</a></figcaption></figure></div><div class="container"><div class="hero-filmstrip" role="group" aria-label="${e(mediaCopy[code].applicationsLabel)}">${sceneOrder.map((key) => `<a class="hero-scene" href="#applications" data-scene-link="${key}" aria-label="${e(t.applications.scenes[key].tab)}">${sceneImage(key, code, { eager: true })}<span><strong>${e(t.applications.scenes[key].tab)}</strong><small>${e(t.applications.scenes[key].status)}</small></span></a>`).join('')}</div><dl class="hero-metrics">${h.metrics.map((metric) => `<div><dt>${e(metric.label)}</dt><dd>${e(metric.value)}</dd></div>`).join('')}</dl></div></section>
    <div class="proof-strip"><div class="container">${t.proof.map((item) => `<span>${icon('check')}${e(item)}</span>`).join('')}</div></div>
    <section class="section product-section" id="product"><div class="container">${heading(t.product)}<div class="benefit-grid">${t.product.benefits.map((benefit, index) => `<article>${icon(index === 0 ? 'flow' : index === 1 ? 'layers' : 'shield')}<h3>${e(benefit.title)}</h3><p>${e(benefit.text)}</p></article>`).join('')}</div><div class="product-data-layout"><div class="spec-card"><div class="spec-header"><h3>${e(t.product.specsTitle)}</h3><span>TTK-3700E</span></div><dl>${t.product.specs.map((spec) => `<div><dt>${e(spec.label)}</dt><dd>${e(spec.value)}</dd></div>`).join('')}</dl><p>${e(t.product.specsNote)}</p></div><aside class="dosage-card"><h3>${e(t.product.dosageTitle)}</h3><strong>${e(t.product.dosageValue)}</strong><p class="dosage-label">${e(t.product.dosageLabel)}</p><p class="dosage-tds">${e(t.product.dosageTds)}</p><div class="dosage-note">${e(t.product.dosageNote)}</div><a href="#process">${e(t.product.dosageLink)}${icon('arrow')}</a></aside></div></div></section>
    ${applications(t, code)}
    ${performance(t)}
    ${compliance(t, preferredReport, code)}
    ${process(t)}
    ${resources(t, docPath)}
    ${contact(t, code)}
  </main>
  <footer class="site-footer"><div class="container footer-top"><a class="brand" href="#top" aria-label="POLYTREND">${brand()}</a><p>${e(t.footer.tagline)}</p><a class="back-to-top" href="#top">${e(t.footer.backToTop)}${icon('arrow-up')}</a></div><div class="container footer-bottom"><p>${e(t.footer.copyright)}</p><p>${e(t.resources.safety)}</p></div></footer>
</body>
</html>`;
}

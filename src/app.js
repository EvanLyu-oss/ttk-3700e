const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const languagePicker = document.querySelector('.language-picker');

function setMenu(open) {
  if (!header || !menuToggle) return;
  header.dataset.menuOpen = String(open);
  menuToggle.setAttribute('aria-expanded', String(open));
}

menuToggle?.addEventListener('click', () => {
  setMenu(header.dataset.menuOpen !== 'true');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

window.matchMedia('(min-width: 961px)').addEventListener('change', (event) => {
  if (event.matches) setMenu(false);
});

function preserveCurrentSection() {
  document.querySelectorAll('[data-language-link]').forEach((link) => {
    const path = link.getAttribute('href').split('#')[0];
    link.setAttribute('href', `${path}${window.location.hash}`);
  });
}

preserveCurrentSection();
window.addEventListener('hashchange', preserveCurrentSection);
languagePicker?.addEventListener('toggle', preserveCurrentSection);

document.addEventListener('click', (event) => {
  if (languagePicker?.open && !languagePicker.contains(event.target)) {
    languagePicker.removeAttribute('open');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (header?.dataset.menuOpen === 'true') {
    setMenu(false);
    menuToggle?.focus();
  }
  if (languagePicker?.open) {
    languagePicker.removeAttribute('open');
    languagePicker.querySelector('summary')?.focus();
  }
});

const tabs = [...document.querySelectorAll('[data-scene-tab]')];
const panels = [...document.querySelectorAll('.scenario-panel')];

function activateTab(tab, moveFocus = false) {
  const scene = tab.dataset.sceneTab;
  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  panels.forEach((panel) => {
    panel.hidden = panel.dataset.scene !== scene;
  });
  if (moveFocus) tab.focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', (event) => {
    let target;
    if (['ArrowRight', 'ArrowDown'].includes(event.key)) target = (index + 1) % tabs.length;
    if (['ArrowLeft', 'ArrowUp'].includes(event.key)) target = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') target = 0;
    if (event.key === 'End') target = tabs.length - 1;
    if (target === undefined) return;
    event.preventDefault();
    activateTab(tabs[target], true);
  });
});

if (tabs.length) activateTab(tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0]);

document.querySelectorAll('[data-scene-link]').forEach((link) => {
  link.addEventListener('click', () => {
    const tab = tabs.find((item) => item.dataset.sceneTab === link.dataset.sceneLink);
    if (tab) activateTab(tab);
  });
});

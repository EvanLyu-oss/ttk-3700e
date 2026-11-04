export const languages = [
  { code: 'en', name: 'English', locale: 'en_US' },
  { code: 'zh-cn', name: '简体中文', locale: 'zh_CN' },
  { code: 'es', name: 'Español', locale: 'es_ES' },
  { code: 'de', name: 'Deutsch', locale: 'de_DE' },
  { code: 'ja', name: '日本語', locale: 'ja_JP' }
];

export const sceneOrder = ['hygiene', 'protective', 'food', 'medical'];

export const chartData = {
  days: [0, 3, 7, 14, 21, 30],
  product: [45, 42, 40, 40, 40, 40],
  comparator: [45, 42, 40, 40, 40, 40]
};

export const reports = [
  {
    id: 'pfas',
    date: '2026-05-28',
    lab: 'SGS',
    files: {
      en: { id: 'CANEC26013330501', file: 'ttk-3700e-targeted-pfas-en.pdf', source: 'TTK-3700E-靶向氟测试报告-EN.pdf' },
      zh: { id: 'CANEC26013330502', file: 'ttk-3700e-targeted-pfas-cn.pdf', source: 'TTK-3700E-靶向氟测试报告-CN.pdf' }
    }
  },
  {
    id: 'fluorine',
    date: '2026-05-28',
    lab: 'SGS',
    files: {
      en: { id: 'CANEC26013330503', file: 'ttk-3700e-total-fluorine-en.pdf', source: 'TTK-3700E-全氟测试报告-EN.pdf' },
      zh: { id: 'CANEC26013330504', file: 'ttk-3700e-total-fluorine-cn.pdf', source: 'TTK-3700E-全氟测试报告-CN.pdf' }
    }
  },
  {
    id: 'rohs',
    date: '2026-05-28',
    lab: 'SGS',
    files: {
      en: { id: 'CANEC26013330505', file: 'ttk-3700e-rohs-en.pdf', source: 'TTK-3700E-ROHS报告-EN.pdf' },
      zh: { id: 'CANEC26013330506', file: 'ttk-3700e-rohs-cn.pdf', source: 'TTK-3700E-ROHS报告-CN.pdf' }
    }
  }
];

export const productDocuments = [
  { id: 'tds-en', file: 'ttk-3700e-tds-en.pdf', source: 'TTK-3700E英文  TDS.pdf' },
  { id: 'tds-cn', file: 'ttk-3700e-tds-cn.pdf', source: 'TTK-3700E  TDS.pdf' },
  { id: 'performance-en', file: 'ttk-3700e-performance-en.pdf', source: 'TTK-3700E_Performance_EN.pdf' },
  { id: 'performance-cn', file: 'ttk-3700e-performance-cn.pdf', source: 'TTK-3700E_Performance_CN.pdf' }
];

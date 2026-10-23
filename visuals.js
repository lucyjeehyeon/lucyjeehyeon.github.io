/** Native, theme-aware case-study figures. All figure copy is treated as text. */
const COPY = {
  en: {
    analysis: 'Analysis', source: 'Source', noSource: 'Source not specified.',
    table: 'Data table', unavailable: 'Not available',
    autoScale: 'Scale begins at zero; the upper bound is set from the values shown.',
    negative: 'The values are listed in a table because they include negative values.'
  },
  ko: {
    analysis: '분석', source: '출처', noSource: '출처 미기재.',
    table: '데이터 표', unavailable: '값 없음',
    autoScale: '축은 0에서 시작하며, 상한은 표시된 값에 맞추어 설정했습니다.',
    negative: '음수가 포함되어 있어 값을 표로 표시했습니다.'
  }
};

function escape(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[character]));
}

function text(value, language) {
  if (typeof value === 'string' || typeof value === 'number') return String(value);
  if (!value || typeof value !== 'object' || Array.isArray(value)) return '';
  const localized = value[language] ?? value.en ?? value.ko;
  return typeof localized === 'string' || typeof localized === 'number' ? String(localized) : '';
}

function safeHref(value) {
  if (typeof value !== 'string' || !value.trim() || /[\u0000-\u001f\u007f]/.test(value)) return '';
  try {
    const parsed = new URL(value, 'https://portfolio.invalid/');
    return ['https:', 'http:'].includes(parsed.protocol) ? value : '';
  } catch { return ''; }
}

function number(value, language, precision = 20) {
  const digits = Number.isInteger(precision) ? Math.min(20, Math.max(0, precision)) : 20;
  return new Intl.NumberFormat(language === 'ko' ? 'ko-KR' : 'en-US', {
    maximumFractionDigits: digits
  }).format(value);
}

function unitText(unit, language) {
  const value = text(unit, language);
  return value === 'pp' && language === 'ko' ? '%p' : value;
}

function valueText(row, visual, language) {
  const displayed = text(row.display, language);
  if (displayed) return displayed;
  if (typeof row.value !== 'number' || !Number.isFinite(row.value)) return COPY[language].unavailable;
  const unit = unitText(visual.unit, language);
  const separator = !unit || unit === '%' || unit === '%p' ? '' : ' ';
  return `${number(row.value, language, visual.precision)}${separator}${unit}`;
}

function heading(visual, language) {
  const title = text(visual.title, language) || COPY[language].analysis;
  const description = text(visual.description, language);
  return `<figcaption class="case-visual-heading"><h3>${escape(title)}</h3>${description ? `<p>${escape(description)}</p>` : ''}</figcaption>`;
}

function footer(visual, language, extraNote = '') {
  const note = text(visual.note, language);
  const source = text(visual.source, language).replace(/^(?:Source|출처)\s*:\s*/i, '') || COPY[language].noSource;
  const href = safeHref(visual.sourceHref);
  const sourceCopy = href ? `<a href="${escape(href)}" target="_blank" rel="noopener noreferrer">${escape(source)}</a>` : escape(source);
  return `<div class="case-visual-caption">${note ? `<p class="case-visual-note">${escape(note)}</p>` : ''}${extraNote ? `<p class="case-visual-note">${escape(extraNote)}</p>` : ''}<p class="case-visual-source"><span>${COPY[language].source}</span> ${sourceCopy}</p></div>`;
}

function bar(visual, language) {
  const rows = Array.isArray(visual.rows) ? visual.rows.filter(row => row && typeof row === 'object') : [];
  if (!rows.length) return '';
  const numeric = rows.map(row => row.value).filter(value => typeof value === 'number' && Number.isFinite(value));
  if (numeric.some(value => value < 0)) {
    return table({
      ...visual,
      headers: [{ en: 'Measure', ko: '항목' }, { en: 'Value', ko: '값' }],
      rows: rows.map(row => [row.label, valueText(row, visual, language)]),
      note: [text(visual.note, language), COPY[language].negative].filter(Boolean).join(' ')
    }, language);
  }
  const largest = Math.max(0, ...numeric);
  const suppliedMax = typeof visual.max === 'number' && Number.isFinite(visual.max) && visual.max > 0 && visual.max >= largest;
  const max = suppliedMax ? visual.max : Math.max(1, Math.ceil(largest));
  const title = text(visual.title, language) || COPY[language].analysis;
  const upper = valueText({ value: max }, visual, language);
  const bars = rows.map(row => {
    const valid = typeof row.value === 'number' && Number.isFinite(row.value);
    const width = valid ? Math.min(100, Math.max(0, row.value / max * 100)) : 0;
    const note = text(row.note, language);
    return `<div class="case-visual-bar-row" role="listitem"><div class="case-visual-bar-label"><span>${escape(text(row.label, language))}</span><strong>${escape(valueText(row, visual, language))}</strong></div><div class="case-visual-bar-track" aria-hidden="true"><span style="width:${width.toFixed(4)}%"></span></div>${note ? `<p class="case-visual-row-note">${escape(note)}</p>` : ''}</div>`;
  }).join('');
  return `<figure class="case-visual case-visual-bar">${heading(visual, language)}<div class="case-visual-bars" role="list" aria-label="${escape(title)}">${bars}</div><div class="case-visual-axis" aria-hidden="true"><span>0</span><span>${escape(upper)}</span></div><span class="sr-only">${escape(`0 — ${upper}`)}</span>${footer(visual, language, suppliedMax ? '' : COPY[language].autoScale)}</figure>`;
}

function table(visual, language) {
  const headers = Array.isArray(visual.headers) ? visual.headers : [];
  const rows = Array.isArray(visual.rows) ? visual.rows.filter(Array.isArray) : [];
  if (!headers.length || !rows.length) return '';
  const title = text(visual.title, language) || COPY[language].analysis;
  const minimumWidth = Math.max(280, Math.min(640, headers.length * 130));
  const body = rows.map(row => `<tr>${headers.map((_, index) => index === 0 ? `<th scope="row">${escape(text(row[index], language))}</th>` : `<td>${escape(text(row[index], language))}</td>`).join('')}</tr>`).join('');
  return `<figure class="case-visual case-visual-table-figure">${heading(visual, language)}<div class="case-visual-table-scroll" role="region" aria-label="${escape(`${title} · ${COPY[language].table}`)}" tabindex="0"><table class="case-visual-table" style="min-width:${minimumWidth}px"><caption class="sr-only">${escape(title)}</caption><thead><tr>${headers.map(label => `<th scope="col">${escape(text(label, language))}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table></div>${footer(visual, language)}</figure>`;
}

function flow(visual, language) {
  const steps = Array.isArray(visual.steps) ? visual.steps.filter(step => step && typeof step === 'object') : [];
  if (!steps.length) return '';
  return `<figure class="case-visual case-visual-flow-figure">${heading(visual, language)}<ol class="case-visual-flow">${steps.map((step, index) => `<li><span class="case-visual-step-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><div><h4>${escape(text(step.label, language))}</h4>${text(step.detail, language) ? `<p>${escape(text(step.detail, language))}</p>` : ''}</div></li>`).join('')}</ol>${footer(visual, language)}</figure>`;
}

/** @param {Array<object>} visuals @param {'en'|'ko'} language */
export function renderVisuals(visuals, language = 'en') {
  const locale = language === 'ko' ? 'ko' : 'en';
  const renderers = { bar, table, flow };
  if (!Array.isArray(visuals)) return '';
  return visuals.map(visual => {
    if (!visual || typeof visual !== 'object') return '';
    const renderer = Object.prototype.hasOwnProperty.call(renderers, visual.type) ? renderers[visual.type] : null;
    return renderer ? renderer(visual, locale) : '';
  }).join('');
}

import { projects, profile } from './content.js?v=20261025-company-initials';
import { projectAssets, resumeAssets } from './assets.js?v=20261025-resume';
import { caseStudies } from './case-studies.js?v=20261025-company-initials';
import { renderVisuals } from './visuals.js';
import { initOrbit } from './orbit.js';
import { featuredProjectIds, projectHighlights } from './project-highlights.js?v=20261025-company-initials';

const root = document.documentElement;
const main = document.querySelector('#main');
const header = document.querySelector('#header');
const footer = document.querySelector('#footer');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const orbit = initOrbit(document.querySelector('#orbit'));
let language = root.lang === 'ko' ? 'ko' : 'en';
let filter = 'all';
let search = '';
let paused = false;
try { paused = localStorage.getItem('jl-motion') === 'paused'; } catch {}
orbit.setPaused(paused);

const words = {
  en: {
    about: 'About', projects: 'Projects', research: 'Research', resume: 'Résumé',
    home: 'Home', menu: 'Open menu', close: 'Close menu', navigation: 'Main navigation',
    skip: 'Skip to content', dark: 'Switch to dark mode', light: 'Switch to light mode',
    pause: 'Pause motion', play: 'Resume motion', reduced: 'Reduced motion',
    eyebrow: 'DATA ANALYST · PRODUCT & CUSTOMER ANALYTICS',
    statement: 'Data analyst.<br><em>From behavior to decisions.</em>',
    intro: 'I use SQL and Python to analyze service logs, identify conversion and retention patterns, and propose next steps for products and customer experiences.',
    explore: 'Explore projects', aLittle: 'A little about me', recent: 'Selected analytics projects',
    keyContribution: 'My key contribution', supportingEvidence: 'Evidence', proposedDirection: 'Proposed action',
    viewAll: `View all ${projects.length} projects`, interests: 'What I’m curious about', mindset: 'How I work',
    mindsetText: 'Start with the question. Check what the numbers really mean. Make the next step concrete.',
    mindsetTitle: 'Mindset', mindsetIntro: 'The perspectives I return to when thinking about what makes analysis useful.',
    readMore: 'More about my approach', archive: 'A growing body of work.',
    archiveDescription: `${projects.length} projects across data analysis, research, app development, and service planning. Open any project to read the story here.`,
    all: 'All work', product: 'Product analytics', researchCategory: 'Research', development: 'Development', service: 'Service planning',
    search: 'Search projects', count: 'projects', empty: 'No projects match your search.', reset: 'Clear filters',
    back: 'All projects', overview: 'The question', role: 'My contribution', approach: 'Approach',
    findings: 'What I found', next: 'Where it leads', limitations: 'Scope & limitations',
    materials: 'Materials', gallery: 'A closer look', previous: 'Previous', following: 'Next project',
    caseOverview: 'Summary & problem', caseRole: 'My contribution', caseData: 'Data & environment',
    caseProcess: 'Analysis & design process', caseInsights: 'Insights & actions', caseReflection: 'Reflection & limitations',
    oneLine: 'In one line', problem: 'Problem definition', observedInsights: 'Key insights',
    proposedActions: 'Proposed actions & next steps', reflectiveNotes: 'Reflection', scopeLimits: 'Scope & limitations',
    dashboard: 'Dashboard',
    open: 'Open PDF', download: 'Download PDF', pdfNote: 'Original project documents are in Korean. If the preview is unavailable, open or download the PDF.',
    aboutTitle: 'A little about me.', education: 'Education & training', tools: 'Tools I’ve worked with',
    contact: 'Let’s connect', contactText: 'Interested in data analyst roles, especially where product decisions and customer behavior meet.',
    researchTitle: 'Questions worth exploring.', researchDescription: 'A conference paper, applied research, and early experiments with public-interest data. Each project states the evidence it uses—and what it cannot yet claim.',
    publication: 'CONFERENCE PAPER · 2025', readStudy: 'Read the case study', related: 'Applied research & exploration',
    resumeTitle: 'Résumé.', resumeNote: 'English · PDF · Current résumé', resumeDescription: 'View or download my résumé in English.',
    unknown: 'This page has drifted out of orbit.', unknownText: 'The page may have moved. You can explore all projects or return home.',
    undergraduate: 'University', email: 'Email', backHome: 'Back home'
  },
  ko: {
    about: '소개', projects: '프로젝트', research: '연구', resume: '이력서',
    home: '홈', menu: '메뉴 열기', close: '메뉴 닫기', navigation: '주요 메뉴',
    skip: '본문으로 건너뛰기', dark: '다크 모드로 전환', light: '라이트 모드로 전환',
    pause: '배경 멈추기', play: '배경 움직이기', reduced: '움직임 최소화',
    eyebrow: '데이터 분석가 · 제품·고객 분석',
    statement: '사용자 행동을 읽는<br><em>데이터 분석가.</em>',
    intro: 'SQL·Python으로 서비스 로그를 분석해 전환·리텐션의 단서를 찾고, 제품과 고객 경험의 개선 방향을 제안합니다.',
    explore: '프로젝트 살펴보기', aLittle: '저를 소개합니다', recent: '대표 분석 프로젝트',
    keyContribution: '나의 핵심 기여', supportingEvidence: '분석 근거', proposedDirection: '제안한 방향',
    viewAll: `프로젝트 ${projects.length}개 모두 보기`, interests: '관심을 두고 있는 것', mindset: '일하는 방식',
    mindsetText: '질문에서 시작하고, 숫자의 의미를 확인합니다. 그리고 다음 행동을 구체화합니다.',
    mindsetTitle: '마인드셋', mindsetIntro: '좋은 분석이 무엇인지 고민할 때, 잊지 않으려는 기준들입니다.',
    readMore: '분석을 대하는 태도', archive: '쌓아 온 작업들.',
    archiveDescription: `데이터 분석, 연구, 앱 개발, 서비스 기획까지 ${projects.length}개의 프로젝트를 모았습니다. 프로젝트를 누르면 이 사이트 안에서 자세히 읽을 수 있습니다.`,
    all: '전체', product: '제품·고객 분석', researchCategory: '연구', development: '개발', service: '서비스 기획',
    search: '프로젝트 검색', count: '개 프로젝트', empty: '검색 조건에 맞는 프로젝트가 없습니다.', reset: '필터 초기화',
    back: '전체 프로젝트', overview: '시작한 질문', role: '내가 맡은 역할', approach: '접근 과정',
    findings: '발견한 것', next: '다음으로 이어갈 것', limitations: '범위와 한계',
    materials: '원본 자료', gallery: '산출물 자세히 보기', previous: '이전 프로젝트', following: '다음 프로젝트',
    caseOverview: '요약·문제 정의', caseRole: '내가 맡은 역할', caseData: '데이터·환경',
    caseProcess: '분석·기획 과정', caseInsights: '인사이트·액션', caseReflection: '회고·한계',
    oneLine: '한 줄 요약', problem: '문제 정의', observedInsights: '주요 인사이트',
    proposedActions: '제안한 액션·다음 단계', reflectiveNotes: '회고', scopeLimits: '범위와 한계',
    dashboard: '대시보드',
    open: 'PDF 열기', download: 'PDF 다운로드', pdfNote: '원본 자료는 한국어입니다. 미리보기가 표시되지 않으면 PDF를 직접 열거나 다운로드할 수 있습니다.',
    aboutTitle: '저를 소개합니다.', education: '학력과 교육', tools: '사용해 본 도구',
    contact: '연락하기', contactText: '제품의 의사결정과 고객 행동이 만나는 데이터 분석가 직무에 관심이 있습니다.',
    researchTitle: '더 깊이 들여다본 질문.', researchDescription: '학술대회 논문부터 응용 연구, 공공·사회 데이터의 탐색까지. 어떤 근거를 사용했는지, 아직 무엇을 말할 수 없는지 함께 담았습니다.',
    publication: '학술대회 논문 · 2025', readStudy: '프로젝트 자세히 보기', related: '응용 연구와 탐색',
    resumeTitle: '이력서.', resumeNote: '한국어 · PDF · 현재 이력서', resumeDescription: '한국어 이력서를 확인하거나 다운로드할 수 있습니다.',
    unknown: '궤도 밖의 페이지입니다.', unknownText: '페이지가 이동했을 수 있습니다. 전체 프로젝트를 살펴보거나 홈으로 돌아가세요.',
    undergraduate: '학부', email: '이메일', backHome: '홈으로 돌아가기'
  }
};
const t = key => words[language][key] || key;
const tr = value => typeof value === 'string' ? value : value?.[language] ?? value?.en ?? '';
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const paths = {
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  back: '<path d="M20 12H5m6-6-6 6 6 6"/>',
  external: '<path d="M7 17 17 7M7 7h10v10"/>',
  moon: '<path d="M21 12.8A9 9 0 0 1 11.2 3a9 9 0 1 0 9.8 9.8Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5"/>',
  pause: '<path d="M9 5v14M15 5v14"/>',
  play: '<path d="m9 5 10 7-10 7Z"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>'
};
const icon = key => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[key] || paths.arrow}</svg>`;
const categoryName = category => t(category === 'research' ? 'researchCategory' : category);
const projectURL = project => `#/projects/${project.id}`;
const year = project => project.year === 'Undergraduate' ? t('undergraduate') : project.year;
const external = (url, label, css = 'material-link') => `<a class="external-link ${css}" href="${esc(url)}" target="_blank" rel="noopener noreferrer"><span>${esc(label)}</span>${icon('external')}</a>`;
const action = (url, label, css = 'text-action') => `<a class="${css}" href="${esc(url)}">${esc(label)} ${icon('arrow')}</a>`;

function imageFigure(image, css = '', eager = false) {
  if (!image) return '';
  return `<figure class="${css}"><img src="${esc(image.src)}" data-layout="${esc(image.layout || 'cover')}" alt="${esc(tr(image.alt))}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"><figcaption class="image-caption">${esc(tr(image.caption))}</figcaption></figure>`;
}

function projectRow(project, index, compact = false, featured = false) {
  const image = !compact && projectAssets[project.id]?.image;
  const highlight = featured && projectHighlights[project.id];
  const preview = highlight ? `<div class="featured-preview"><p><span>${t('keyContribution')}</span> ${esc(tr(highlight.home))}</p><p><span>${t('supportingEvidence')}</span> ${esc(tr(highlight.homeEvidence))}</p></div>` : `<p class="project-row-desc">${esc(tr(project.subtitle))}</p>`;
  return `<a class="project-row${highlight ? ' project-row-featured' : ''}" href="${projectURL(project)}"><span class="row-index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><div><h3 class="project-row-title">${esc(tr(project.title))}</h3>${preview}<p class="row-tags">${esc(project.tags.slice(0, 3).join(' · '))}</p></div>${image ? `<img class="row-thumb" src="${esc(image.src)}" data-layout="${esc(image.layout || 'cover')}" alt="" loading="lazy" decoding="async">` : ''}<span class="row-year">${esc(year(project))}</span><span class="row-arrow">${icon('arrow')}</span></a>`;
}

function routeName() {
  const path = location.hash.replace(/^#/, '') || '/';
  return path.split('?')[0].replace(/\/$/, '') || '/';
}

function save(key, value) { try { localStorage.setItem(key, value); } catch {} }

function setMenu(open) {
  header.classList.toggle('menu-open', open);
  const button = document.querySelector('#menu-toggle');
  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-label', t(open ? 'close' : 'menu'));
  button.innerHTML = icon(open ? 'close' : 'menu');
}

function updateHeader() {
  document.querySelector('.wordmark').setAttribute('aria-label', `${tr(profile.name)} — ${t('home')}`);
  document.querySelector('#navigation').setAttribute('aria-label', t('navigation'));
  document.querySelector('.skip-link').textContent = t('skip');
  document.querySelector('.language-control').setAttribute('aria-label', language === 'ko' ? '언어 선택' : 'Select language');
  for (const button of document.querySelectorAll('[data-language]')) {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
    button.setAttribute('aria-label', button.dataset.language === 'ko' ? '한국어' : 'English');
  }
  const path = routeName();
  for (const link of document.querySelectorAll('[data-nav]')) {
    link.textContent = t(link.dataset.nav);
    if (path.startsWith(`/${link.dataset.nav}`)) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  const dark = root.dataset.theme === 'dark';
  const themeButton = document.querySelector('#theme-toggle');
  themeButton.innerHTML = icon(dark ? 'sun' : 'moon');
  themeButton.setAttribute('aria-label', t(dark ? 'light' : 'dark'));
  themeButton.title = t(dark ? 'light' : 'dark');
  document.querySelector('meta[name="theme-color"]').content = dark ? '#111c21' : '#f4f2ec';
  setMenu(false);
}

function renderFooter() {
  const motionText = t(reducedMotion.matches ? 'reduced' : paused ? 'play' : 'pause');
  footer.innerHTML = `<div class="footer-name">${esc(tr(profile.name))}<span>© ${new Date().getFullYear()}</span></div><div class="footer-links">${external(profile.contact.github, 'GitHub', '')}${external(profile.contact.linkedin, 'LinkedIn', '')}<a href="mailto:${esc(profile.contact.email)}">${t('email')} ${icon('external')}</a><a href="#/resume">${t('resume')} ${icon('arrow')}</a></div><button type="button" class="motion-button" id="motion-toggle" aria-pressed="${paused || reducedMotion.matches}" ${reducedMotion.matches ? 'disabled' : ''}>${icon(paused || reducedMotion.matches ? 'play' : 'pause')}<span>${motionText}</span></button>`;
}

function renderHome() {
  const featuredProjects = featuredProjectIds.map(id => projects.find(project => project.id === id)).filter(Boolean);
  return `<section class="hero content-width"><p class="eyebrow">${t('eyebrow')}</p><h1>${esc(tr(profile.name))}</h1><p class="hero-statement">${t('statement')}</p><p class="hero-description">${t('intro')}</p><div class="hero-actions">${action('#/projects', t('explore'))}${action('#/about', t('aLittle'), 'quiet-action')}</div></section><section class="home-archive content-width" aria-labelledby="recent-title"><div class="section-heading"><h2 id="recent-title">${t('recent')}</h2>${action('#/projects', t('viewAll'), 'quiet-action')}</div>${featuredProjects.map((p, i) => projectRow(p, i, false, true)).join('')}</section><section class="home-bottom content-width"><div><h2>${t('interests')}</h2><div class="interest-list">${profile.interests[language].map(item => `<span>${esc(item)}</span>`).join('')}</div></div><div><h2>${t('mindset')}</h2><p>${t('mindsetText')}</p>${action('#/about', t('readMore'), 'quiet-action')}</div></section><section class="home-mindset content-width" aria-labelledby="mindset-title"><div class="mindset-intro"><h2 id="mindset-title">${t('mindsetTitle')}</h2><p>${t('mindsetIntro')}</p></div><dl class="mindset-list">${profile.mindset.map(item => `<div class="mindset-entry"><dt>${esc(tr(item.label))}</dt><dd><h3>${esc(tr(item.title))}</h3><p>${esc(tr(item.description))}</p></dd></div>`).join('')}</dl></section>`;
}

function renderArchive() {
  return `<section class="page content-width"><p class="eyebrow">${t('projects')} / 01—${String(projects.length).padStart(2, '0')}</p><h1 class="page-title">${t('archive')}</h1><p class="page-description">${t('archiveDescription')}</p><div class="archive-toolbar"><div class="filter-list" role="group" aria-label="${language === 'ko' ? '프로젝트 분야' : 'Project category'}">${['all', 'product', 'research', 'development', 'service'].map(key => `<button type="button" class="filter-button" data-filter="${key}" aria-pressed="${filter === key}">${key === 'all' ? t('all') : categoryName(key)}</button>`).join('')}</div><label class="search-box">${icon('search')}<span class="sr-only">${t('search')}</span><input id="project-search" type="search" placeholder="${t('search')}" value="${esc(search)}" autocomplete="off"></label></div><div id="archive-results" aria-live="polite" aria-atomic="false"></div></section>`;
}

function updateArchive() {
  const results = document.querySelector('#archive-results');
  if (!results) return;
  const normalized = search.trim().toLocaleLowerCase();
  const matches = projects.filter(project => {
    const haystack = [project.id, project.title.en, project.title.ko, project.subtitle.en, project.subtitle.ko, ...project.tags, categoryName(project.category)].join(' ').toLocaleLowerCase();
    return (filter === 'all' || project.category === filter) && (!normalized || haystack.includes(normalized));
  });
  results.innerHTML = `<p class="result-count">${matches.length} ${t('count')}</p>${matches.length ? matches.map(p => projectRow(p, projects.indexOf(p))).join('') : `<p class="archive-empty">${t('empty')}<button type="button" data-clear>${t('reset')}</button></p>`}`;
  for (const button of document.querySelectorAll('[data-filter]')) button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
}

function caseText(body) {
  if (!body || (Array.isArray(body) && !body.length)) return '';
  return Array.isArray(body) ? `<ul>${body.map(item => `<li>${esc(item)}</li>`).join('')}</ul>` : `<p>${esc(body)}</p>`;
}

function caseSection(id, label, content, css = '') {
  return `<section class="case-section ${css}" id="case-${id}"><h2>${t(label)}</h2>${content}</section>`;
}

function caseMaterials(project, assets) {
  const links = project.links.map(link => external(link.url, tr(link.label))).join('');
  const reports = (assets.pdfs || []).map(pdf => `<details class="report-viewer" data-report><summary>${esc(tr(pdf.label))}</summary><p class="image-caption">${t('pdfNote')}</p><div class="report-tools">${external(pdf.src, t('open'), '')}<a href="${esc(pdf.src)}" download>${t('download')} ${icon('download')}</a></div><iframe data-src="${esc(pdf.src)}#view=FitH" title="${esc(tr(pdf.label))}" loading="lazy"></iframe></details>`).join('');
  return `${links ? `<div class="material-list">${links}</div>` : ''}${reports}`;
}

function renderProject(project) {
  const assets = projectAssets[project.id] || {};
  const evidence = caseStudies[project.id] || {};
  const highlight = projectHighlights[project.id];
  const index = projects.indexOf(project);
  const hasMaterials = project.links.length > 0 || (assets.pdfs?.length || 0) > 0;
  const sections = [['overview', 'caseOverview'], ['role', 'caseRole'], ['data', 'caseData'], ['process', 'caseProcess'], ['insights', 'caseInsights'], ['reflection', 'caseReflection'], ['materials', 'materials']].filter(([key]) => key !== 'materials' || hasMaterials);
  const dashboard = ['shared-office', 'subway', 'seoul-locker'].includes(project.id) && assets.gallery?.length ? `<div class="case-dashboard"><h3 class="case-subheading">${t('dashboard')}</h3>${assets.gallery.map(image => imageFigure(image)).join('')}</div>` : '';
  const overview = highlight
    ? `<p class="case-kicker">${t('keyContribution')}</p><p class="case-one-line">${esc(tr(highlight.contribution))}</p><dl class="case-summary-facts"><div><dt>${t('supportingEvidence')}</dt><dd>${esc(tr(highlight.evidence))}</dd></div><div><dt>${t('proposedDirection')}</dt><dd>${esc(tr(highlight.action))}</dd></div></dl><h3 class="case-subheading">${t('problem')}</h3>${caseText(tr(project.question))}`
    : `<p class="case-kicker">${t('oneLine')}</p><p class="case-one-line">${esc(tr(evidence.oneLine || project.summary))}</p><h3 class="case-subheading">${t('problem')}</h3>${caseText(tr(project.question))}`;
  const data = `<dl class="case-data">${(evidence.data || []).map(item => `<div><dt>${esc(tr(item.label))}</dt><dd>${esc(tr(item.value))}</dd></div>`).join('')}</dl>`;
  const process = `${caseText(tr(project.approach))}${renderVisuals(evidence.visuals, language)}${dashboard}`;
  const insights = `<h3 class="case-subheading">${t('observedInsights')}</h3>${caseText(tr(project.findings))}<h3 class="case-subheading">${t('proposedActions')}</h3>${caseText(tr(project.next))}`;
  const reflection = `<h3 class="case-subheading">${t('reflectiveNotes')}</h3>${caseText(tr(evidence.reflection))}<h3 class="case-subheading">${t('scopeLimits')}</h3>${caseText(tr(project.limitations))}`;
  const bodies = { overview, role: caseText(tr(project.role)), data, process, insights, reflection, materials: caseMaterials(project, assets) };
  return `<article class="page content-width"><a class="back-link" href="#/projects">${icon('back')} ${t('back')}</a>
    <header class="project-heading"><p class="eyebrow">${esc(categoryName(project.category))} · ${esc(year(project))}</p><h1>${esc(tr(project.title))}</h1><div class="project-tag-list">${project.tags.map(tag => `<span>${esc(tag)}</span>`).join('')}</div>${project.context ? `<p class="project-context">${esc(tr(project.context))}</p>` : ''}</header>
    <div class="case-layout"><nav class="case-navigation" aria-label="${language === 'ko' ? '프로젝트 목차' : 'Case study sections'}">${sections.map(([key, label]) => `<a href="#case-${key}" data-section="case-${key}">${t(label)}</a>`).join('')}</nav><div class="case-body">${sections.map(([key, label]) => caseSection(key, label, bodies[key])).join('')}</div></div>
    <nav class="project-footer" aria-label="${language === 'ko' ? '이전·다음 프로젝트' : 'Adjacent projects'}">${index > 0 ? `<a href="${projectURL(projects[index - 1])}">${icon('back')}<span>${t('previous')}<br>${esc(tr(projects[index - 1].title))}</span></a>` : '<span></span>'}${index < projects.length - 1 ? `<a href="${projectURL(projects[index + 1])}"><span>${t('following')}<br>${esc(tr(projects[index + 1].title))}</span>${icon('arrow')}</a>` : action('#/projects', t('back'))}</nav></article>`;
}

function renderAbout() {
  return `<section class="page content-width"><div class="about-intro"><p class="eyebrow">${t('about')}</p><h1 class="page-title">${t('aboutTitle')}</h1><p class="page-description">${esc(tr(profile.bio))}</p>${action('#/resume', t('resume'))}</div><div class="about-grid"><section class="about-section"><h2>${t('mindset')}</h2>${profile.principles[language].map(item => `<div class="principle"><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></div>`).join('')}</section><section class="about-section"><h2>${t('education')}</h2>${profile.education.map(item => `<div class="education-entry"><time>${esc(item.period)}</time><h3>${esc(tr(item.title))}</h3><p>${esc(tr(item.detail))}</p></div>`).join('')}</section><section class="about-section"><h2>${t('interests')}</h2><div class="interest-list">${profile.interests[language].map(item => `<span>${esc(item)}</span>`).join('')}</div></section><section class="about-section"><h2>${t('tools')}</h2><dl class="tool-groups">${profile.toolGroups.map(group => `<div><dt>${esc(tr(group.label))}</dt><dd class="skill-list">${group.items.map(item => `<span>${esc(item)}</span>`).join('')}</dd></div>`).join('')}</dl></section></div><section class="about-section"><h2>${t('contact')}</h2><p>${t('contactText')}</p><div class="contact-line"><a href="mailto:${esc(profile.contact.email)}">${esc(profile.contact.email)}</a>${external(profile.contact.github, 'GitHub', '')}${external(profile.contact.linkedin, 'LinkedIn', '')}</div></section></section>`;
}

function renderResearch() {
  const paper = projects.find(p => p.id === 'pothole');
  const image = projectAssets.pothole?.image;
  return `<section class="page content-width"><p class="eyebrow">${t('research')}</p><h1 class="page-title">${t('researchTitle')}</h1><p class="page-description">${t('researchDescription')}</p><article class="research-feature"><div><div class="research-type">${t('publication')}</div><h2>${esc(tr(paper.title))}</h2><p>${esc(tr(paper.summary))}</p>${action(projectURL(paper), t('readStudy'))}</div>${image ? `<a href="${projectURL(paper)}" aria-label="${esc(tr(paper.title))}"><img src="${esc(image.src)}" alt="${esc(tr(image.alt))}" loading="lazy"></a>` : ''}</article><section class="research-related"><div class="section-heading"><h2>${t('related')}</h2></div>${projects.filter(p => p.category === 'research' && p.id !== 'pothole').map((p, i) => projectRow(p, i, true)).join('')}</section></section>`;
}

function renderResume() {
  const resume = resumeAssets[language];
  return `<section class="page content-width"><p class="eyebrow">${t('resume')}</p><div class="resume-heading"><h1 class="page-title">${t('resumeTitle')}</h1><p class="resume-note">${t('resumeNote')}</p></div><p class="page-description">${t('resumeDescription')}</p><div class="material-list">${external(resume, t('open'))}<a class="material-link" href="${esc(resume)}" download="Jeehyeon_Lee_Resume_${language.toUpperCase()}.pdf">${t('download')} ${icon('download')}</a></div><iframe class="resume-embed" src="${esc(resume)}#view=FitH" title="${language === 'ko' ? '이지현 한국어 이력서' : 'Jeehyeon Lee — English résumé'}"></iframe></section>`;
}

function render(focus = false) {
  const path = routeName();
  const project = path.startsWith('/projects/') && projects.find(p => `/projects/${p.id}` === path);
  let title = '';
  root.lang = language;
  if (path === '/') { main.innerHTML = renderHome(); document.body.dataset.route = 'home'; }
  else {
    document.body.dataset.route = 'inner';
    if (path === '/projects') { main.innerHTML = renderArchive(); updateArchive(); title = t('projects'); }
    else if (project) { main.innerHTML = renderProject(project); title = tr(project.title); }
    else if (path === '/about') { main.innerHTML = renderAbout(); title = t('about'); }
    else if (path === '/research') { main.innerHTML = renderResearch(); title = t('research'); }
    else if (path === '/resume') { main.innerHTML = renderResume(); title = t('resume'); }
    else { main.innerHTML = `<section class="not-found content-width"><p class="eyebrow">404</p><h1 class="page-title">${t('unknown')}</h1><p class="page-description">${t('unknownText')}</p><div class="hero-actions">${action('#/', t('backHome'))}${action('#/projects', t('projects'), 'quiet-action')}</div></section>`; title = '404'; }
  }
  document.title = title ? `${title} — ${tr(profile.name)} — Data, Product & People` : `${tr(profile.name)} — ${language === 'ko' ? '데이터 분석가' : 'Data Analyst'}`;
  document.querySelector('meta[name="description"]').content = project ? tr(project.summary) : path === '/' ? t('intro') : tr(profile.bio);
  updateHeader();
  renderFooter();
  if (focus) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    main.focus({ preventScroll: true });
  }
}

document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => {
  const next = button.dataset.language;
  if (next === language) return;
  language = next;
  save('jl-language', language);
  const scrollY = window.scrollY;
  render();
  window.scrollTo({ top: scrollY, behavior: 'instant' });
}));

document.querySelector('#theme-toggle').addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  save('jl-theme', root.dataset.theme);
  updateHeader();
  orbit.refresh();
});

document.querySelector('#menu-toggle').addEventListener('click', () => setMenu(!header.classList.contains('menu-open')));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && header.classList.contains('menu-open')) {
    setMenu(false);
    document.querySelector('#menu-toggle').focus();
  }
});
document.addEventListener('click', event => {
  // The menu swaps its SVG on click; use the original event path, not the detached icon.
  if (!event.composedPath().includes(header) && header.classList.contains('menu-open')) setMenu(false);
  const section = event.target.closest('[data-section]');
  if (section) {
    event.preventDefault();
    const target = document.getElementById(section.dataset.section);
    if (target) {
      target.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
      const heading = target.querySelector('h2');
      heading?.setAttribute('tabindex', '-1');
      heading?.focus({ preventScroll: true });
    }
  }
  if (event.target.closest('.skip-link')) { event.preventDefault(); main.focus(); }
  if (event.target.closest('#motion-toggle') && !reducedMotion.matches) {
    paused = !paused;
    save('jl-motion', paused ? 'paused' : 'running');
    orbit.setPaused(paused);
    renderFooter();
    document.querySelector('#motion-toggle').focus({ preventScroll: true });
  }
  const filterButton = event.target.closest('[data-filter]');
  if (filterButton) { filter = filterButton.dataset.filter; updateArchive(); }
  if (event.target.closest('[data-clear]')) {
    filter = 'all'; search = '';
    const input = document.querySelector('#project-search');
    if (input) input.value = '';
    updateArchive();
    input?.focus();
  }
});
main.addEventListener('input', event => {
  if (event.target.id === 'project-search') { search = event.target.value; updateArchive(); }
});
main.addEventListener('toggle', event => {
  const details = event.target;
  if (details.matches('[data-report]') && details.open) {
    const frame = details.querySelector('iframe[data-src]');
    if (frame && !frame.src) frame.src = frame.dataset.src;
  }
}, true);
reducedMotion.addEventListener('change', renderFooter);
window.addEventListener('hashchange', () => render(true));
window.addEventListener('pagehide', () => orbit.setPaused(true));
window.addEventListener('pageshow', () => orbit.setPaused(paused));
render();

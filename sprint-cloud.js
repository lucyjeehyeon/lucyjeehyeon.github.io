const t = (en, ko) => ({ en, ko });
const repo = 'https://github.com/lucyjeehyeon/codeit-sprint-missions/tree/main/mission17-seoul-locker-analysis';
const field = (en, ko, valueEn, valueKo) => ({ label: t(en, ko), value: t(valueEn, valueKo) });

export const cloudProjects = [{
  id: 'seoul-locker', year: '2026', category: 'product',
  tags: ['GCP', 'BigQuery', 'dbt', 'Looker Studio'],
  links: [
    { label: t('GitHub repository', 'GitHub 저장소'), url: repo, type: 'github' },
    { label: t('Looker Studio dashboard', 'Looker Studio 대시보드'), url: 'https://datastudio.google.com/reporting/69393b88-93db-4c2f-afa5-f4650a152ad4', type: 'dashboard' },
  ],
  title: t('Seoul Parcel Locker Analytics on GCP', 'GCP 기반 서울시 안심택배함 수요·공급 분석'),
  subtitle: t('A public-data pipeline connecting GCS, BigQuery, dbt, Python, and Looker Studio', 'GCS·BigQuery·dbt·Python·Looker Studio를 연결한 공공데이터 분석 파이프라인'),
  summary: t('Built a cloud analytics pipeline to diagnose demand, supply, utilization, and long-term trends in Seoul’s public parcel lockers, then translated district-level evidence into operating priorities.', '서울시 안심택배함의 수요·공급·활용도·장기 추세를 결합하는 클라우드 분석 파이프라인을 구축하고 자치구별 운영 우선순위를 제안했습니다.'),
  context: t('Individual learning project · Codeit Sprint Mission 17 · August 2026', '개인 학습 프로젝트 · 코드잇 스프린트 미션 17 · 2026.08'),
  role: t('I collected and cleaned public data, loaded it into GCS and BigQuery, and implemented SQL and dbt models. I analyzed utilization and facility-level variation in Python and built a five-page Looker Studio dashboard.', '공공데이터를 수집·정제해 GCS와 BigQuery에 적재하고 SQL·dbt 모델을 구현했습니다. Python으로 활용도와 시설별 편차를 분석하고 5개 화면의 Looker Studio 대시보드를 구성했습니다.'),
  question: t('Which Seoul districts warrant a parcel-locker expansion review, and which need an investigation of declining use or operating conditions first?', '어떤 지역에서 안심택배함 증설을 검토하고, 어떤 지역에서 이용 감소와 운영 여건을 먼저 점검해야 할까?'),
  approach: {
    en: [
      'Collected all 232 current locations through API pagination, corrected missing address/district fields with provenance flags, and reconciled facility keys across the operating records. Kept one conflicting installation year as a quality issue rather than overwriting it.',
      'Loaded data into GCS and BigQuery and modeled staging, intermediate, and mart layers in dbt. Defined uniqueness, grain, reconciliation, and final-decision quality checks.',
      'Normalized the partial 2026 period by observed months and used a balanced panel of the same facilities for 2021–2025 trends. Compared supply pressure, current utilization, trend, and data coverage at a 25-district grain.',
      'Examined facility-level variation in Python, wrote the 25-row summary back to BigQuery, and prepared geographic boundaries for Looker Studio. Connected the findings to overview, district, trend, facility, and action views.',
    ],
    ko: [
      'API 페이지네이션으로 현재 위치 232곳을 수집하고, 주소·자치구 누락을 보완한 근거를 플래그로 남겼습니다. 운영 실적 간 시설 키를 대조하고 설치연도 충돌 1건은 임의 수정하지 않고 품질 이슈로 남겼습니다.',
      'GCS와 BigQuery에 데이터를 적재하고 dbt의 staging–intermediate–mart 계층을 구현했습니다. 중복·분석 단위·원천 집계와의 일치 여부·최종 판단의 정합성을 검사하는 규칙을 정의했습니다.',
      '2026년 상반기 자료는 관측 개월 수로 나눠 월평균으로 환산하고, 2021–2025년 동일 시설을 추적하는 패널로 장기 추세를 비교했습니다. 자치구 25개 단위로 공급 압력·현재 활용도·장기 추세·자료 포함 범위를 결합했습니다.',
      'Python에서 시설별 편차를 분석한 뒤 자치구 요약 25행을 BigQuery에 재적재하고 지도용 경계를 가공했습니다. 개요·지역·추세·시설·액션의 5개 대시보드 화면으로 분석 결과를 연결했습니다.',
    ],
  },
  findings: {
    en: [
      'One-person households per facility had a stronger observed association with current monthly usage per compartment (Spearman ρ = 0.596) than the total number of one-person households (ρ = 0.264).',
      'Gangnam and Gwanak both showed high supply pressure and current use, but their 2021–2025 balanced-panel changes were +0.7% and −17.6%. The diagnosis therefore separated expansion review from investigating declining use.',
      'Facility-level analysis covered 214 facilities with usable compartment counts. Variation within a district supported a second, site-level review rather than applying one district-wide action to every facility.',
    ],
    ko: [
      '현재 함당 월평균 이용량과 시설당 1인가구 수의 관측 상관은 Spearman ρ=0.596으로, 전체 1인가구 수의 상관 ρ=0.264보다 높았습니다.',
      '강남구와 관악구는 공급 압력과 현재 활용도가 모두 높았지만, 2021–2025년 동일 시설 이용 변화는 각각 +0.7%, −17.6%였습니다. 이에 증설 우선 검토와 이용 감소 원인 점검을 구분했습니다.',
      '보관함 칸 수가 확인되는 214개 시설을 분석해 자치구 내부의 활용 편차를 확인했습니다. 자치구별 방향을 정한 뒤 개별 시설의 입지와 운영을 다시 살펴볼 필요가 있었습니다.',
    ],
  },
  next: {
    en: ['Prioritize site-level demand and access checks before an expansion decision; investigate declining utilization before adding capacity.', 'Monitor updated data and evaluate specific operating interventions with actual service outcomes.'],
    ko: ['증설 결정 전 시설별 실제 수요와 접근성을 확인하고, 이용 감소 지역은 기존 시설의 감소 원인을 먼저 점검합니다.', '갱신 데이터를 모니터링하고 구체적인 운영 개입 이후의 실제 서비스 지표로 효과를 평가합니다.'],
  },
  limitations: {
    en: ['An individual educational analysis, not an implemented Seoul policy or a production-operated pipeline. No cost savings or service improvements were measured.', 'The exploratory correlations use only 25 districts and are not causal. The balanced panel excludes openings and closures, and source dates differ across location, usage, household, and boundary data.'],
    ko: ['개인 학습 분석이며 서울시 정책으로 실행되거나 운영 환경에서 상시 가동되는 파이프라인은 아닙니다. 비용 절감이나 서비스 개선 효과는 측정하지 않았습니다.', '자치구 25개 단위의 탐색적 상관으로 인과관계를 의미하지 않습니다. 동일 시설 패널은 신규·철거 시설의 변화를 직접 반영하지 않으며, 위치·이용·가구·경계 자료의 기준 시점도 다릅니다.'],
  },
}];

export const cloudEvidence = {
  'seoul-locker': {
    oneLine: t('Connected public data to a GCP analytics pipeline and a dashboard for parcel-locker operating decisions.', '공공데이터를 GCP 분석 파이프라인과 대시보드로 연결해 안심택배함의 운영 판단 근거를 구성했습니다.'),
    data: [
      field('Sources', '데이터 출처', 'Seoul Open Data Plaza locations and usage records; KOSIS one-person households; district SHP boundaries.', '서울 열린데이터광장 시설 위치·이용 실적, KOSIS 1인가구, 시군구 경계 SHP 공공데이터를 활용했습니다.'),
      field('Coverage', '규모·분석 단위', '232 current locations; 276 historical operating-record facilities across six periods (1,656 rows); final mart: 25 districts.', '현재 위치 232곳, 운영 실적 기준 과거 시설 276곳·6개 기간의 1,656행을 정리했습니다. 최종 분석 마트는 자치구당 한 행으로 구성했습니다(25개 자치구).'),
      field('Reference dates', '기준 시점', 'Locations collected 26 August 2026; usage through June 2026; household and boundary data: 2025.', '위치는 2026.08.26 수집, 이용 실적은 2026.06까지, 가구·경계 데이터는 2025년 기준입니다.'),
      field('Comparability', '비교 기준', '2026 H1 usage normalized by six months; 2021–2025 long-term trends use a same-facility balanced panel.', '2026년 상반기는 6개월 기준으로 월평균을 산출하고, 2021–2025년 장기 변화는 동일 시설 패널로 비교했습니다.'),
      field('Facility analysis', '시설별 분석 범위', '215 current facilities with observed usage; 214 with usable compartment counts for efficiency analysis.', '현재 시설 중 이용 관측 215곳, 함 수 결측 1곳을 제외한 효율 분석 214곳입니다.'),
      field('Tools', '사용 도구·환경', 'GCP · GCS · BigQuery · dbt · Python / pandas / GeoPandas · Looker Studio', 'GCP · GCS · BigQuery · dbt · Python·pandas·GeoPandas · Looker Studio'),
    ],
    reflection: {
      en: ['A reproducible analytical mart needs a clear grain, stable keys, and source-quality flags before dashboard design. A finished chart cannot resolve inconsistent source definitions.', 'Current utilization and long-term trends led to different recommendations. Combining them produced more specific action priorities than ranking districts by facility count alone.'],
      ko: ['재현 가능한 분석 마트를 만들려면 대시보드 디자인에 앞서 분석 단위, 안정적인 키, 원천 품질 플래그가 필요했습니다. 차트의 완성도만으로 원천 정의의 차이를 해결할 수는 없었습니다.', '현재 활용도와 장기 추세는 서로 다른 판단 근거였습니다. 두 관점을 연결하면서 시설 수만으로 순위를 매길 때보다 구체적인 운영 우선순위를 제안할 수 있었습니다.'],
    },
    visuals: [
      {
        type: 'flow', title: t('A public-data pipeline for operational analysis', '운영 분석을 위한 공공데이터 파이프라인'),
        steps: [
          { label: t('Collect & validate', '수집·품질검사'), detail: t('API pagination, file cleaning, stable facility keys and source-conflict flags.', 'API 페이지네이션·파일 정제·시설 키 정합성·원천 충돌 플래그 관리') },
          { label: t('GCS → BigQuery', 'GCS → BigQuery'), detail: t('Store source/processed files and load analytical tables.', '원천·정제 파일 보관과 분석 테이블 적재') },
          { label: t('dbt modeling', 'dbt 모델링'), detail: t('Staging → intermediate → mart; grain, uniqueness and reconciliation checks.', 'staging → intermediate → mart와 분석 단위·중복·대조 검사 규칙') },
          { label: t('Python → BigQuery', 'Python → BigQuery'), detail: t('Facility-level comparisons and a 25-row district summary written back to the warehouse.', '시설별 비교 분석 후 자치구 요약 25행 재적재') },
          { label: t('Looker Studio', 'Looker Studio'), detail: t('Five views connecting overview, district diagnosis, trends, facilities and actions.', '개요·지역 진단·이용 추세·시설 진단·Action Center의 5개 화면') },
        ],
        note: t('Implemented as a learning project. The diagram does not imply a scheduled production service or independently verified ongoing cloud operation.', '학습 프로젝트에서 구현한 구조입니다. 정기 운영 서비스나 현재 클라우드의 상시 가동을 보장하는 구조도로 해석하지 않습니다.'),
        source: t('Mission 17 notebook, SQL and dbt models', '미션 17 Notebook·SQL·dbt 모델'), sourceHref: repo,
      },
      {
        type: 'bar', title: t('Supply pressure was more informative than household totals', '가구 수 자체보다 시설당 수요에 주목했습니다'),
        description: t('Selected positive Spearman correlations with current monthly usage per compartment.', '현재 함당 월평균 이용량과의 양의 Spearman 상관 중 주요 세 지표입니다.'),
        unit: t('Spearman ρ', 'Spearman ρ'), max: 1, precision: 3,
        rows: [
          { label: t('Total one-person households', '전체 1인가구 수'), value: 0.264, note: t('p = 0.2025', 'p = 0.2025') },
          { label: t('One-person households per facility', '시설당 1인가구 수'), value: 0.596, note: t('p = 0.0017', 'p = 0.0017') },
          { label: t('2021–2025 usage change', '2021–2025 동일 시설 이용 변화율'), value: 0.615, note: t('p = 0.0011', 'p = 0.0011') },
        ],
        note: t('Exploratory district-level associations, n = 25. These are selected positive coefficients, not all tested variables, and do not establish independent or causal effects.', '자치구 25개의 탐색적 연관입니다. 전체 검토 변수 중 양의 상관 세 항목을 선택했으며 독립적인 효과나 인과관계를 입증한 결과가 아닙니다.'),
        source: t('Analysis report · p. 2', '분석 보고서 · 2쪽'), sourceHref: './assets/seoul-locker-report.pdf#page=2',
      },
      {
        type: 'table', title: t('Similar current pressure, different next actions', '현재 상황이 비슷해도 다음 액션은 달랐습니다'),
        headers: [t('District', '자치구'), t('Households / facility', '시설당 1인가구'), t('Monthly use / compartment', '함당 월 이용'), t('2021–2025 change', '동일 시설 장기 변화'), t('Proposed direction', '제안한 방향')],
        rows: [
          [t('Gangnam', '강남구'), t('≈9,919', '약 9,919가구'), t('≈13.5', '약 13.5건'), t('+0.7%', '+0.7%'), t('Prioritize expansion review', '증설 우선 검토')],
          [t('Gwanak', '관악구'), t('≈11,333', '약 11,333가구'), t('≈9.33', '약 9.33건'), t('−17.6%', '−17.6%'), t('Investigate decline before expanding', '증설 전 이용 감소 원인 점검')],
        ],
        note: t('Rounded district-weighted utilization values from the report. They differ from simple means across individual facilities. Actions are analytical recommendations, not implemented policy outcomes.', '보고서의 자치구 가중 활용도 값을 반올림해 제시했습니다. 시설별 단순 평균과는 다릅니다. 액션은 분석 제안이며 실제 정책 실행 성과가 아닙니다.'),
        source: t('Analysis report · p. 5', '분석 보고서 · 5쪽'), sourceHref: './assets/seoul-locker-report.pdf#page=5',
      },
    ],
  },
};

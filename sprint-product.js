// Individual Codeit Sprint learning missions, not live company deployments.
// Reviewed against the public mission READMEs, supplied PDFs, and saved notebook
// outputs. No notebook cells, experiment, or marketing campaign were executed.
// Mission 13 source filenames are reversed relative to their document titles:
// credit_card_clustering_report.pdf = strategy (6 pages), while
// credit_card_segment_strategy_report.pdf = modeling (8 pages).
const t = (en, ko) => ({ en, ko });
const base = 'https://github.com/lucyjeehyeon/codeit-sprint-missions/tree/main/';
const abDir = 'mission10_ab-test-membership-pricing/';
const cardDir = 'mission13_credit-card-segmentation/';
const datum = (en, ko, enValue, koValue) => ({ label: t(en, ko), value: t(enValue, koValue) });

export const sprintProductProjects = [
  {
    id: 'membership-ab-test', year: '2026', category: 'product',
    tags: ['Python', 'A/B Testing', 'Welch t-test', 'Guardrail metrics'],
    context: t('Individual learning mission · Codeit Sprint Data Analytics · Mission 10', '코드잇 스프린트 데이터 분석 · 개인 학습 미션 10'),
    links: [{ label: t('GitHub repository', 'GitHub 저장소'), url: base + abDir, type: 'github' }],
    title: t('Membership Pricing A/B Test & Guardrail Analysis', '멤버십 가격 표현 A/B 테스트와 가드레일 분석'),
    subtitle: t('A learning exercise comparing subscription choices, revenue, and refund inquiries', '실습 데이터 기반 구독 선택·매출·환불 문의 비교'),
    summary: t('Designed and analyzed a membership-pricing experiment using supplied practice data. Weighed the higher revenue metric against increased refund inquiries and proposed further validation before rollout.', '제공된 실습 데이터로 멤버십 가격 표현 실험을 설계·분석하고, 매출 지표 상승과 환불 문의 증가를 함께 고려해 후속 검증 방향을 제안했습니다.'),
    role: t('I defined the experiment hypothesis and primary, secondary, and guardrail metrics. I preprocessed and joined user-level data, calculated the metrics, performed statistical tests, and wrote the analysis and follow-up experiment proposal.', '실험 가설과 핵심·보조·가드레일 지표를 정의했습니다. 사용자 단위 데이터를 전처리·병합하고 지표 산출과 통계 검정을 수행했으며, 분석 보고서와 후속 실험안을 작성했습니다.'),
    question: t('Does emphasizing the monthly equivalent of an annual plan improve revenue, and what customer-risk signals should limit the rollout decision?', '연간 멤버십의 월 환산 가격을 강조하면 매출 지표가 어떻게 달라질까? 도입 판단에서 어떤 고객 리스크를 함께 확인해야 할까?'),
    approach: {
      en: [
        'Compared A, which displayed monthly and annual plan prices, with B, which emphasized the annual plan’s monthly equivalent. Defined ARPU as the primary metric and cancellation and refund inquiries as guardrails before interpreting results.',
        'Reviewed five supplied tables: users, daily behavior, payments, subscriptions, and support inquiries. Removed duplicate payment records, retained successful payments, and filtered inquiries to the supplied two-week experiment window.',
        'Aggregated daily behavior and inquiries to one row per user before joining, avoiding a many-to-many join. The main analytical table contained 2,500 users: A 1,277 and B 1,223.',
        'Used Welch t-tests for revenue metrics and two-proportion Z-tests for conversion and guardrails. Distinguished all assigned users from subscribed-user denominators and separated core results from exploratory subgroup comparisons.'
      ],
      ko: [
        '월간·연간 가격을 단순 비교한 A안과 연간 멤버십의 월 환산 가격을 강조한 B안을 비교했습니다. 결과 해석에 앞서 ARPU를 핵심 지표로, 구독 취소율·환불 문의율을 가드레일로 정의했습니다.',
        '제공된 사용자·일자별 행동·결제·구독·고객센터 문의의 5개 테이블을 검토했습니다. 중복 결제를 정리하고 성공한 결제만 분석 대상으로 남겼으며, 문의는 실습 데이터의 2주 실험 기간으로 한정했습니다.',
        '다대다 병합을 피하기 위해 일자별 행동과 문의를 사용자당 한 행으로 집계한 뒤 결합했습니다. 핵심 분석 테이블은 A 1,277명·B 1,223명으로 총 2,500명입니다.',
        '매출 지표에는 Welch t-검정, 전환·가드레일 비율에는 모비율 Z-검정을 사용했습니다. 전체 배정 사용자와 결제자의 분모를 구분하고 핵심 결과와 탐색적 세그먼트 비교를 나눠 해석했습니다.'
      ]
    },
    findings: {
      en: [
        'In the supplied exercise data, ARPU was 56.82 for A and 88.78 for B; the report’s Welch test gave p < 0.001. The currency is not documented, so these values are shown in dataset revenue units rather than dollars or won.',
        'Overall subscription conversion was 36.02% versus 37.04% (p = 0.597). Annual-plan conversion was 17.07% versus 29.27%, while monthly-plan conversion was 18.95% versus 7.77%. The pattern was consistent with a plan-choice shift rather than demonstrated growth in total subscribers.',
        'Refund inquiries among subscribers were 9/460 = 1.96% for A and 20/453 = 4.42% for B (reported p = 0.034). This was an inquiry signal, not a measured refund loss or proof of customer misunderstanding.'
      ],
      ko: [
        '실습 데이터의 ARPU는 A 56.82, B 88.78이었고 보고서의 Welch 검정 결과는 p < 0.001이었습니다. 통화가 명시되지 않아 원·달러가 아닌 데이터 내 매출 단위로 표시합니다.',
        '전체 구독 전환율은 36.02%와 37.04%로 유의한 차이를 확인하지 못했습니다(p = 0.597). 연간 구독은 17.07%와 29.27%, 월간 구독은 18.95%와 7.77%였습니다. 전체 구독자가 늘었다기보다 연간·월간 구독 사이의 선택이 달라진 패턴으로 해석했습니다.',
        '결제자 중 환불 문의율은 A 9/460명 = 1.96%, B 20/453명 = 4.42%였습니다(보고된 p = 0.034). 실제 환불 손실이나 오해의 원인을 확정한 결과가 아니라 문의 증가 신호로 해석했습니다.'
      ]
    },
    next: {
      en: [
        'Proposed a follow-up C variant that retains the monthly-equivalent display while clearly showing the total annual charge, billing cycle, and the exercise’s stated refund conditions near the payment action.',
        'Evaluate whether the revised copy can preserve revenue while reducing refund inquiries. Predefine guardrail thresholds and inspect confidence intervals, skewed-revenue robustness, and longer-term renewal before a rollout decision.'
      ],
      ko: [
        '월 환산 가격은 유지하되 결제 버튼 주변에 연간 총 결제금액·결제 주기·실습에서 제시한 환불 조건을 명확히 보여주는 C안을 제안했습니다.',
        '매출 지표를 유지하면서 환불 문의를 줄일 수 있는지 후속 실험으로 확인합니다. 도입 전 가드레일 임계값을 정하고 신뢰구간, 치우친 매출 분포에서의 검정 안정성, 장기 갱신을 점검합니다.'
      ]
    },
    limitations: {
      en: [
        'An individual bootcamp exercise using supplied data and a planned experiment scenario, not an experiment I deployed or operated in a live service. The 15–28 January 2026 data window is not the date I completed the mission.',
        'The two-week window cannot establish long-term retention, renewal, customer trust, or realized business impact. Refund inquiries do not equal completed refunds, and cancellation means opting out of the next renewal rather than an immediate refund.',
        'Secondary and subgroup comparisons are exploratory; the reported tests are unadjusted for multiple comparisons. Repeated-visit click ratios and user-device subgroup tables should not be interpreted as independent user-level outcomes.'
      ],
      ko: [
        '제공 데이터와 실험 시나리오를 활용한 개인 부트캠프 실습이며 실제 서비스에 실험을 배포·운영한 경험은 아닙니다. 데이터의 2026.01.15–28은 실제 미션 수행 기간과 구분합니다.',
        '2주 자료만으로 장기 유지·갱신·고객 신뢰·실제 사업 효과를 확인할 수 없습니다. 환불 문의는 실제 환불과 다르며, 구독 취소는 즉시 환불이 아니라 다음 자동 갱신을 중단하는 의미입니다.',
        '보조·세그먼트 비교는 탐색적이며 보고된 검정은 다중 비교를 보정하지 않았습니다. 반복 방문의 클릭 비율이나 사용자-기기 중복 집계는 독립적인 사용자 단위 결과로 해석하지 않습니다.'
      ]
    }
  },
  {
    id: 'credit-card-segmentation', year: '2026', category: 'product',
    tags: ['Python', 'PCA', 'K-means', 'Customer segmentation', 'CRM'],
    context: t('Individual learning mission · Codeit Sprint Data Analytics · Mission 13', '코드잇 스프린트 데이터 분석 · 개인 학습 미션 13'),
    links: [{ label: t('GitHub repository', 'GitHub 저장소'), url: base + cardDir, type: 'github' }],
    title: t('Credit-Card Behavior Segmentation & CRM Strategy', '신용카드 이용행동 세그먼테이션과 CRM 전략 설계'),
    subtitle: t('A learning exercise balancing cluster separation, stability, and actionable customer groups', '실습 데이터 기반 군집 분리도·안정성·활용 가능성 비교'),
    summary: t('Segmented 8,950 credit-card customer records, compared preprocessing and clustering alternatives, and translated five behavioral groups into CRM hypotheses with customer-protection guardrails.', '신용카드 고객 8,950명의 이용행동을 세분화하고 전처리·군집화 대안을 비교했습니다. 5개 행동 집단을 고객 보호 가드레일을 포함한 CRM 가설로 연결했습니다.'),
    role: t('I audited the data and compared preprocessing, dimensionality reduction, and clustering alternatives. I evaluated cluster sizes and resampling stability, interpreted the customer profiles, and designed segment-level CRM proposals, KPIs, and guardrails.', '데이터를 점검하고 전처리·차원축소·군집화 대안을 비교했습니다. 군집 규모와 재표본 안정성을 평가하고 고객 프로파일을 해석했으며, 세그먼트별 CRM 방안과 KPI·가드레일을 설계했습니다.'),
    question: t('Which credit-card usage patterns form interpretable customer groups, and how should separation, group size, and stability inform a usable segmentation?', '신용카드 이용행동을 어떤 고객 집단으로 구분할 수 있을까? 분리도·집단 규모·안정성을 어떻게 함께 고려해야 활용 가능한 세그먼트가 될까?'),
    approach: {
      en: [
        'Audited 8,950 customer-level rows and 18 columns. Excluded CUST_ID from the 17 model inputs and median-imputed missing minimum-payment and credit-limit values, preserving valid zeros that represented no activity.',
        'Compared standardization, winsorization, log transformation, robust scaling, and PCA settings. Applied log1p to 10 amount/transaction-count variables, RobustScaler to the inputs, and PCA retaining at least 90% of variance: 17 variables became six components.',
        'Compared K-means, Gaussian Mixture Models, and Birch. Selected five K-means groups by balancing separation, cluster-size concentration, and interpretable behaviors instead of selecting the largest silhouette score alone.',
        'Repeated 80% subsampling 20 times and refit K-means in the fixed transformed space to assess assignment consistency. Interpreted raw-unit profiles and proposed segment-specific objectives, KPIs, holdouts, and customer-protection reviews.'
      ],
      ko: [
        '고객 단위 8,950행·18개 컬럼을 점검했습니다. 식별자 CUST_ID를 제외한 17개 변수를 입력으로 사용하고 최소결제금액·신용한도의 결측을 중앙값으로 대체했으며, 이용 내역이 없음을 나타내는 유효한 0은 유지했습니다.',
        '표준화·윈저화·로그 변환·Robust scaling·PCA 조합을 비교했습니다. 금액·거래횟수 10개 변수에 log1p, 입력 변수에 RobustScaler, 누적 설명분산 90% 기준 PCA를 적용해 17개 변수를 6개 축으로 줄였습니다.',
        'K-means·GMM·Birch를 비교했습니다. 실루엣 최대값만 고르지 않고 분리도·군집 쏠림·행동 해석 가능성을 함께 고려해 K-means의 5개 군집을 선택했습니다.',
        '고정된 변환 공간에서 80% 비복원 재표본으로 K-means를 재학습하는 과정을 20회 반복해 배정 일치도를 확인했습니다. 원단위 프로파일을 해석하고 세그먼트별 목표·KPI·통제군·고객 보호 검토를 제안했습니다.'
      ]
    },
    findings: {
      en: [
        'Six PCA components retained 90.7% of variance. At k = 5, the reported silhouette improved from 0.188 with raw standardization to 0.322 with the selected preprocessing.',
        'K = 3 had a higher silhouette of 0.435 but concentrated 71.5% of customers in one group. K = 5 reduced the largest group to 41.9% and retained groups of at least 6.6%, making different behavioral patterns easier to discuss.',
        'The five profiles distinguished high-purchase full payers, everyday spenders carrying balances, cash-advance-heavy users, shorter-tenure cash-advance users, and low-activity users. These were descriptive behavioral labels, not validated credit grades or true customer types.',
        'The saved resampling output reported mean ARI 0.9947, with a range of 0.9880–0.9980. This indicates consistency under the tested K-means resampling setup, not future campaign effectiveness or stability under a changing customer population.'
      ],
      ko: [
        '6개 PCA 축이 분산의 90.7%를 보존했습니다. k = 5의 실루엣은 원자료에 표준화만 적용했을 때 0.188, 선택한 전처리 조합에서는 0.322였습니다.',
        'k = 3의 실루엣은 0.435로 더 높았지만 한 군집에 71.5%가 모였습니다. k = 5에서는 최대 군집이 41.9%, 최소 군집이 6.6%로, 서로 다른 행동을 구분해 논의하기에 더 적합하다고 판단했습니다.',
        '전액결제·고구매형, 생활결제·잔액유지형, 현금서비스 중심형, 이용기간이 짧은 현금서비스형, 저활동형의 5개 프로파일을 구분했습니다. 검증된 신용등급이나 객관적인 고객 분류 체계가 아니라 관측한 행동을 설명하는 이름입니다.',
        '재표본 검증의 ARI 평균은 0.9947, 범위는 0.9880–0.9980이었습니다. 검토한 K-means 재표본 조건에서의 배정 일치도를 의미하며, 미래 캠페인 효과나 고객 구성이 변할 때의 안정성을 보장하지 않습니다.'
      ]
    },
    next: {
      en: [
        'Proposed loyalty and everyday-payment support for the purchasing groups, repayment-oriented support rather than cash-advance upselling for cash-advance groups, and low-cost reactivation tests for low-activity users.',
        'Validate each proposal with within-segment randomized holdouts, measuring incremental value alongside costs, complaints, and repayment-related guardrails. Review low-confidence assignments before using them to personalize offers.'
      ],
      ko: [
        '구매 집단에는 고객 유지·생활결제 지원, 현금서비스 집단에는 추가 대출 판매보다 상환 지원, 저활동 집단에는 저비용 재활성화 실험을 제안했습니다.',
        '세그먼트 내 무작위 통제군을 두고 증분 가치와 비용·민원·상환 관련 가드레일을 함께 평가합니다. 배정 신뢰도가 낮은 고객은 개인화 제안을 적용하기 전에 별도로 검토합니다.'
      ]
    },
    limitations: {
      en: [
        'An individual learning exercise on a supplied aggregate snapshot, not a bank deployment or executed CRM campaign. The original provider, currency, and precise transaction aggregation window are not documented in the reviewed files.',
        'No transaction timestamps, profitability, delinquency, or demographic information were available. Shorter tenure can reduce cumulative totals, and clusters must not be treated as automatic credit-risk decisions.',
        'The stability check refit K-means on subsamples of a fixed full-data preprocessing/PCA representation; it did not refit the complete preprocessing pipeline per sample or validate future customers. High ARI does not establish causal marketing effects.'
      ],
      ko: [
        '제공된 집계 스냅샷을 활용한 개인 학습 프로젝트이며 은행 운영 배포나 실행된 CRM 캠페인이 아닙니다. 검토 자료에는 원 제공기관·통화·정확한 거래 집계 기간이 명시되지 않았습니다.',
        '거래 시점·수익성·연체 여부·인구통계 정보가 없고 이용기간이 짧으면 누적 금액이 낮아질 수 있습니다. 군집을 자동 신용위험 판단의 근거로 사용하지 않습니다.',
        '안정성 검증은 전체 데이터에서 고정한 전처리·PCA 공간의 재표본으로 K-means를 재학습한 방식입니다. 표본마다 전체 전처리 파이프라인을 다시 학습하거나 미래 고객을 검증한 결과가 아니며, 높은 ARI가 마케팅 인과 효과를 의미하지 않습니다.'
      ]
    }
  }
];

export const sprintProductEvidence = {
  'membership-ab-test': {
    oneLine: t('A pricing experiment exercise connecting revenue, plan choice, and customer-risk guardrails.', '가격 표현 실험의 매출·구독 유형 선택·고객 리스크를 함께 판단한 개인 실습입니다.'),
    data: [
      datum('Context and source', '실습·데이터 출처', 'Codeit Sprint Mission 10; five supplied practice tables for users, behavior, payments, subscriptions, and inquiries.', '코드잇 스프린트 미션 10. 제공된 유저·행동·결제·구독·문의의 5개 실습 테이블을 사용했습니다.'),
      datum('Analytical population', '분석 규모', '2,500 assigned users: A 1,277 and B 1,223. Successful subscribers: A 460 and B 453.', '배정 사용자 2,500명: A 1,277명·B 1,223명. 성공 결제자는 A 460명·B 453명입니다.'),
      datum('Data window', '데이터 내 실험 기간', '15–28 January 2026, a supplied two-week experiment scenario. It is not the mission-completion period.', '2026.01.15–28의 2주 실험 시나리오 데이터입니다. 실제 미션 수행 시기와 구분합니다.'),
      datum('Practice record', '실습 기록 시점', 'Design and report PDF exports are dated 20–21 May 2026; exact start and completion dates are not stated.', '설계서·분석 보고서의 PDF 생성일은 2026.05.20–21입니다. 정확한 수행 시작·종료일은 명시되지 않았습니다.'),
      datum('Metric definitions', '지표 기준', 'ARPU: revenue per assigned user. Conversion: subscribers / assigned users. Refund inquiries: in-window inquiry users / subscribers. Currency is unspecified.', 'ARPU는 배정 사용자당 매출, 전환율은 배정 사용자 중 결제자, 환불 문의율은 결제자 중 기간 내 문의 사용자 비율입니다. 통화는 명시되지 않았습니다.'),
      datum('Tools', '사용 도구·환경', 'Python, pandas, NumPy, SciPy, statsmodels; Google Colab notebook, Welch t-tests, and two-proportion Z-tests.', 'Python·pandas·NumPy·SciPy·statsmodels, Google Colab 노트북, Welch t-검정과 모비율 Z-검정을 사용했습니다.')
    ],
    reflection: {
      en: [
        'A primary metric can improve while a customer-risk metric worsens. The decision should preserve that trade-off rather than reduce every result to a single winning variant.',
        'Denominators changed the meaning of the guardrails: refund inquiries were measured among subscribers, while subscription conversion used all assigned users.',
        'The follow-up design needs explicit guardrail thresholds, uncertainty intervals, and robust revenue analysis; the exercise’s observed difference is not a realized business outcome.'
      ],
      ko: [
        '핵심 지표가 좋아져도 고객 리스크가 함께 커질 수 있습니다. 한쪽을 최종안으로 단정하기보다 그 상충 관계를 도입 판단에 반영하는 것이 중요했습니다.',
        '가드레일의 분모를 확인해야 의미가 명확해졌습니다. 구독 전환은 전체 배정 사용자, 환불 문의는 결제자 기준으로 구분했습니다.',
        '후속 설계에는 가드레일 임계값·신뢰구간·강건한 매출 분석이 필요합니다. 실습에서 관측한 차이를 실제 사업 성과와 구분했습니다.'
      ]
    },
    visuals: [
      {
        type: 'bar', title: t('Revenue per assigned user was higher in B', 'B안의 사용자당 매출 지표가 높았습니다'),
        description: t('ARPU in supplied exercise data; currency is not documented.', '제공 실습 데이터의 ARPU이며 통화는 명시되지 않았습니다.'),
        unit: t('dataset revenue units / user', '데이터 내 매출 단위 / 명'), max: 100, precision: 2,
        rows: [
          { label: t('A · simple monthly/annual comparison', 'A · 월간·연간 가격 단순 비교'), value: 56.82, display: t('56.82', '56.82'), note: t('1,277 assigned users', '배정 사용자 1,277명') },
          { label: t('B · annual plan’s monthly equivalent', 'B · 연간 멤버십 월 환산 가격 강조'), value: 88.78, display: t('88.78', '88.78'), note: t('1,223 assigned users', '배정 사용자 1,223명') }
        ],
        note: t('Denominator: all assigned users, A n = 1,277 and B n = 1,223. Reported Welch t-test p < 0.001. Values are rounded from saved outputs 56.822240 and 88.779231. This is a practice-data comparison, not revenue uplift from a live rollout.', '분모는 전체 배정 사용자로 A 1,277명·B 1,223명입니다. 보고된 Welch t-검정 p < 0.001. 저장 출력 56.822240·88.779231을 반올림했습니다. 실습 데이터 비교이며 실제 서비스 도입의 매출 개선 성과가 아닙니다.'),
        source: t('Analysis report p. 1; notebook cells 139, 154 and 214.', '분석 보고서 1쪽·노트북 셀 139·154·214.'),
        sourceHref: './assets/membership-ab-test-report.pdf#page=1'
      },
      {
        type: 'table', title: t('Plan choice changed more clearly than overall conversion', '전체 전환보다 구독 유형 선택의 차이가 컸습니다'),
        headers: [t('Metric', '지표'), t('A', 'A'), t('B', 'B'), t('Reported test', '보고된 검정')],
        rows: [
          [t('Overall subscription', '전체 구독 전환'), t('36.02% · 460/1,277', '36.02% · 460/1,277명'), t('37.04% · 453/1,223', '37.04% · 453/1,223명'), t('p = 0.597', 'p = 0.597')],
          [t('Annual plan', '연간 구독 전환'), t('17.07% · 218/1,277', '17.07% · 218/1,277명'), t('29.27% · 358/1,223', '29.27% · 358/1,223명'), t('p < 0.001', 'p < 0.001')],
          [t('Monthly plan', '월간 구독 전환'), t('18.95% · 242/1,277', '18.95% · 242/1,277명'), t('7.77% · 95/1,223', '7.77% · 95/1,223명'), t('p < 0.001', 'p < 0.001')]
        ],
        note: t('All three rates use assigned users as the denominator. Reported two-proportion Z-tests are unadjusted for multiple comparisons. The non-significant overall difference does not prove equal conversion; it means this analysis did not establish a difference at the stated threshold.', '3개 비율 모두 배정 사용자 기준입니다. 보고된 모비율 Z-검정은 다중 비교를 보정하지 않았습니다. 전체 전환의 비유의 결과는 전환율이 같다는 증명이 아니라 해당 기준에서 차이를 확인하지 못했다는 의미입니다.'),
        source: t('Analysis report p. 1; notebook cells 165, 171–174 and 229–237.', '분석 보고서 1쪽·노트북 셀 165·171–174·229–237.'),
        sourceHref: './assets/membership-ab-test-report.pdf#page=1'
      },
      {
        type: 'bar', title: t('The refund-inquiry guardrail moved in the opposite direction', '환불 문의 가드레일은 반대 방향으로 움직였습니다'),
        description: t('Users making a refund inquiry during the supplied window, divided by subscribers.', '실습 기간 내 환불 문의 사용자 수를 결제자 수로 나눈 비율입니다.'),
        unit: '%', max: 5, precision: 2,
        rows: [
          { label: t('A · 9 of 460 subscribers', 'A · 결제자 460명 중 9명'), value: 1.96 },
          { label: t('B · 20 of 453 subscribers', 'B · 결제자 453명 중 20명'), value: 4.42 }
        ],
        note: t('Reported two-proportion Z-test p = 0.034, unadjusted for multiple comparisons. The denominator is subscribers, not all 2,500 assigned users. An inquiry is not a completed refund, and its cause was not directly measured.', '보고된 모비율 Z-검정 p = 0.034이며 다중 비교를 보정하지 않았습니다. 분모는 전체 2,500명이 아닌 각 그룹의 결제자입니다. 문의는 실제 환불이 아니며 문의 원인을 직접 측정하지 않았습니다.'),
        source: t('Analysis report p. 1; notebook cells 199–201 and 259–262.', '분석 보고서 1쪽·노트북 셀 199–201·259–262.'),
        sourceHref: './assets/membership-ab-test-report.pdf#page=1'
      }
    ]
  },
  'credit-card-segmentation': {
    oneLine: t('A customer-segmentation exercise that balances model separation, stability, and CRM decision boundaries.', '분리도·안정성·CRM 활용 범위를 함께 고려한 고객 세그먼테이션 개인 실습입니다.'),
    data: [
      datum('Context and source', '실습·데이터 출처', 'Codeit Sprint Mission 13; supplied credit_card.csv customer-usage snapshot. Original provider and precise aggregation window are not documented in the reviewed files.', '코드잇 스프린트 미션 13의 제공 credit_card.csv 고객 이용행동 스냅샷입니다. 검토 자료에는 원 제공기관과 정확한 집계 기간이 명시되지 않았습니다.'),
      datum('Scale and unit', '규모·분석 단위', '8,950 customers, one row per customer, 18 columns including ID; 17 model inputs after excluding CUST_ID.', '고객당 한 행으로 8,950명·식별자 포함 18개 컬럼이며, CUST_ID 제외 후 17개 변수를 모델 입력으로 사용했습니다.'),
      datum('Analysis record', '분석 기록 시점', 'The reports state 14 September 2026 as the analysis date and were exported on 15 September. These are practice records, not transaction-period dates.', '보고서에 분석일 2026.09.14가 명시되어 있고 PDF 생성일은 09.15입니다. 실습 기록 시점이며 거래 관찰 기간과는 다릅니다.'),
      datum('Missing values', '결측 처리', 'MINIMUM_PAYMENTS: 313 missing; CREDIT_LIMIT: 1 missing. Median imputation; valid zero-activity values retained.', 'MINIMUM_PAYMENTS 313건·CREDIT_LIMIT 1건의 결측을 중앙값으로 대체하고 유효한 무행동 값 0은 보존했습니다.'),
      datum('Model and validation', '모델·검증 기준', 'log1p → RobustScaler → PCA, six components retaining 90.7% variance → K-means k = 5. Twenty 80% K-means subsample checks in the fixed transformed space.', 'log1p → RobustScaler → 분산 90.7%를 보존한 PCA 6개 축 → K-means k = 5. 고정 변환 공간에서 80% 재표본 K-means 검증 20회를 수행했습니다.'),
      datum('Tools', '사용 도구·환경', 'Python, pandas, NumPy, scikit-learn, SciPy, Matplotlib, Seaborn, joblib; a Colab-compatible notebook with saved local execution outputs.', 'Python·pandas·NumPy·scikit-learn·SciPy·Matplotlib·Seaborn·joblib를 사용했습니다. Colab 호환 노트북에 로컬 실행 결과가 저장되어 있습니다.')
    ],
    reflection: {
      en: [
        'The highest silhouette did not automatically produce the most usable segmentation. Cluster sizes and distinct action hypotheses changed the model-choice decision.',
        'Stable assignments do not mean profitable campaigns or validated risk groups. Segment names describe observed behavior, and customer-protection review should precede personalization for cash-advance-heavy groups.',
        'A stronger validation would refit the complete preprocessing pipeline on each sample and test later customer cohorts; campaign hypotheses still require randomized holdouts.'
      ],
      ko: [
        '실루엣이 가장 높은 모델이 반드시 활용하기 좋은 세그먼트를 만들지는 않았습니다. 군집 규모와 서로 다른 행동에 대한 개입 가설을 함께 고려해 모델을 선택했습니다.',
        '배정이 안정적이라는 사실이 수익성 있는 캠페인이나 검증된 위험 집단을 의미하지는 않습니다. 군집명은 행동 설명이며 현금서비스 중심 집단의 개인화에는 고객 보호 검토가 우선입니다.',
        '후속 검증에서는 재표본마다 전체 전처리 파이프라인을 다시 학습하고 이후 고객 코호트를 평가해야 합니다. 캠페인 가설은 무작위 통제군으로 확인해야 합니다.'
      ]
    },
    visuals: [
      {
        type: 'bar', title: t('Five behavioral groups retained meaningful sample sizes', '5개 행동 집단의 고객 규모를 확인했습니다'),
        description: t('Final K-means profiles; group labels describe behavior rather than creditworthiness.', '최종 K-means의 행동 프로파일이며 신용도를 판정하는 이름이 아닙니다.'),
        unit: t('customers', '명'), max: 4000, precision: 0,
        rows: [
          { label: t('S1 · high-purchase full payers', 'S1 · 전액결제·고구매형'), value: 1194 },
          { label: t('S2 · everyday spenders carrying balances', 'S2 · 생활결제·잔액유지형'), value: 3748 },
          { label: t('S3 · cash-advance-heavy users', 'S3 · 현금서비스 중심형'), value: 2300 },
          { label: t('S4 · shorter-tenure cash-advance users', 'S4 · 이용기간이 짧은 현금서비스형'), value: 594 },
          { label: t('S5 · low-activity users', 'S5 · 저활동형'), value: 1114 }
        ],
        note: t('The five segments contain 8,950 customers in total. Labels describe observed behavior, not ground-truth customer types or grounds for automatic credit decisions. Campaign lift was not measured.', '5개 세그먼트의 고객 수 합계는 8,950명입니다. 집단명은 관측한 행동을 요약한 탐색적 명칭이며, 신용등급이나 자동 신용 판단의 근거로 사용하지 않습니다. 캠페인 개선 효과는 측정하지 않았습니다.'),
        source: t('Segment strategy report p. 1; notebook cell 23.', '세그먼트 전략 보고서 1쪽·노트북 셀 23.'),
        sourceHref: './assets/credit-card-strategy-report.pdf#page=1'
      },
      {
        type: 'table', title: t('Model choice balanced separation with cluster concentration', '분리도와 군집 쏠림을 함께 보고 선택했습니다'),
        description: t('K-means alternatives using the same log–robust–PCA90 representation; k = 5 was selected as a working segmentation for CRM planning.', '동일한 log–Robust–PCA90 공간의 K-means 대안을 비교하고, CRM 기획에 활용할 세그먼트로 k = 5를 선택했습니다.'),
        headers: [t('Criterion', '비교 기준'), t('k = 3', 'k = 3'), t('k = 5 · selected', 'k = 5 · 선택')],
        rows: [
          [t('Silhouette · higher is better', '실루엣 · 높을수록 우수'), t('0.435', '0.435'), t('0.322', '0.322')],
          [t('Davies–Bouldin · lower is better', 'Davies–Bouldin · 낮을수록 우수'), t('0.960', '0.960'), t('1.016', '1.016')],
          [t('Largest cluster share', '최대 군집 비중'), t('71.5%', '71.5%'), t('41.9%', '41.9%')],
          [t('Smallest cluster share', '최소 군집 비중'), t('13.8%', '13.8%'), t('6.6%', '6.6%')]
        ],
        note: t('Rounded report values. K = 3 performs better on these internal separation metrics; k = 5 was chosen to reduce concentration and support clearer action hypotheses, not because it led on every metric. The k = 5 resampling ARI mean was 0.9947 (range 0.9880–0.9980), evaluated by refitting K-means only in the fixed transformed space.', '보고서의 반올림 수치입니다. 내부 분리도 지표는 k = 3이 우수하며, k = 5는 모든 지표에서 앞서서가 아니라 쏠림 완화와 행동별 개입의 해석 가능성을 고려한 선택입니다. k = 5 재표본 검증의 ARI 평균은 0.9947(0.9880–0.9980)이며, 고정 변환 공간에서 K-means만 다시 학습한 검증입니다.'),
        source: t('Modeling report p. 4; notebook cells 17 and 21.', '모델링 보고서 4쪽·노트북 셀 17·21.'),
        sourceHref: './assets/credit-card-clustering-report.pdf#page=4'
      }
    ]
  }
};

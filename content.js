// Content edited from the public bilingual portfolio and the supplied project records.
// Product recommendations and educational prototypes are not claimed as deployed outcomes.
import { cloudProjects } from './sprint-cloud.js';
import { sprintProductProjects } from './sprint-product.js';
import { forecastProjects } from './sprint-forecast.js';
const text = (en, ko) => ({ en, ko });
const repo = (url, en = 'GitHub repository', ko = 'GitHub 저장소') => ({ label: text(en, ko), url, type: 'github' });

export const profile = {
  name: text('Jeehyeon Lee', '이지현'),
  bio: text(
    'I study how people use services, where they get stuck, and what could make the next step easier. My work connects data analysis with product questions, service ideas, and clear decisions.',
    '사람들이 서비스를 어떻게 이용하고, 어디에서 멈추며, 다음 행동을 더 쉽게 만들려면 무엇이 필요한지 살펴봅니다. 데이터 분석을 제품의 질문, 서비스 아이디어, 명확한 의사결정으로 연결합니다.'
  ),
  interests: {
    en: ['Product & customer analytics', 'Conversion & retention', 'User behavior', 'Service planning', 'Public-interest data'],
    ko: ['제품·고객 분석', '전환·리텐션', '사용자 행동', '서비스 기획', '공공·사회 데이터']
  },
  principles: {
    en: [
      { title: 'Start with a useful question.', text: 'Turn an ambiguous service problem into a question that data can actually help answer.' },
      { title: 'Know what the number means.', text: 'Check definitions, observation windows, and denominators before drawing a conclusion. Separate what happened from why it happened.' },
      { title: 'Make the next step concrete.', text: 'Connect findings to a decision, a service flow, or an experiment—and make clear what still needs to be tested.' }
    ],
    ko: [
      { title: '쓸모 있는 질문에서 시작합니다.', text: '막연한 서비스의 문제를 데이터로 답할 수 있는 구체적인 질문으로 바꿉니다.' },
      { title: '숫자의 의미부터 확인합니다.', text: '정의·관찰 기간·분모를 점검한 뒤 해석합니다. 관찰한 사실과 그 원인에 대한 설명을 구분합니다.' },
      { title: '다음 행동을 구체화합니다.', text: '분석을 의사결정, 서비스 흐름, 실험으로 연결하고 앞으로 검증할 부분을 명확히 밝힙니다.' }
    ]
  },
  education: [
    { title: text('Seoul Women’s University', '서울여자대학교'), period: '2022.03 – 2026.02', detail: text('B.S., Data Science', '데이터사이언스 전공 · 학사 졸업') },
    { title: text('Codeit Sprint · Data Analytics, Cohort 15', '코드잇 스프린트 데이터 분석 15기'), period: '2026.03 – 2026.10', detail: text('Completed training in SQL, Python, Tableau, and applied analytics projects.', 'SQL·Python·Tableau 및 데이터 분석 프로젝트 과정 수료') },
  ],
  mindset: [
    { label: text('People', '사람'), title: text('Look beyond the average.', '평균 너머의 맥락'), description: text('A single metric rarely captures the different reasons people use a service.', '같은 지표 안에도 서비스를 이용하는 서로 다른 이유와 상황이 있다고 생각합니다.') },
    { label: text('Evidence', '근거'), title: text('Stay open to being wrong.', '설명보다 검증'), description: text('A convincing story is a starting point for a test, not a substitute for one.', '설득력 있는 설명도 검증하기 전에는 하나의 가설로 남겨둡니다.') },
    { label: text('Uncertainty', '불확실성'), title: text('Be clear about what is unknown.', '모르는 것까지 명확하게'), description: text('The limits of an analysis are part of its answer, not a footnote to hide.', '분석이 답하지 못한 범위도 결과의 일부로 솔직하게 전달하려 합니다.') },
    { label: text('Learning', '배움'), title: text('Revise the idea, keep the question.', '생각은 유연하게, 질문은 꾸준하게'), description: text('New evidence is a reason to refine a view and ask a better next question.', '새로운 근거를 만나면 해석을 고치고, 더 나은 다음 질문을 찾습니다.') }
  ],
  toolGroups: [
    { label: text('Analysis', '데이터 분석'), items: ['SQL', 'Python', 'pandas'] },
    { label: text('Cloud & transformation', '클라우드·데이터 변환'), items: ['GCP', 'Cloud Storage (GCS)', 'BigQuery', 'dbt'] },
    { label: text('Modeling', '모델링'), items: ['Machine Learning', 'scikit-learn', 'Clustering', 'Time-series forecasting'] },
    { label: text('Visualization & collaboration', '시각화·협업'), items: ['Tableau', 'Looker Studio', 'GitHub'] }
  ],
  contact: { github: 'https://github.com/lucyjeehyeon', url: 'https://www.linkedin.com/in/lucyjeehyeon/', linkedin: 'https://www.linkedin.com/in/lucyjeehyeon/', email: 'lucy567888@gmail.com' }
};

export const projects = [
  {
    id: 'viral-to-value', year: '2026', category: 'product',
    tags: ['SQL', 'Python', 'User behavior', 'UI/UX prototype'],
    links: [repo('https://github.com/codeit-team7/team7'), { label: text('Try the prototype', '프로토타입 체험'), url: 'https://lucyjeehyeon.github.io/ping-demo/', type: 'demo' }],
    title: text('Viral to Value', 'Viral to Value'),
    subtitle: text('Teen social-app log analysis and service redesign', '청소년 SNS 로그 데이터 기반 이용 행동 분석 및 서비스 재설계'),
    summary: text('We analyzed question supply, semantic repetition, and post-completion behavior in a school-based social app, then translated the findings into a service redesign and an interactive prototype.', '학교 네트워크 소셜 앱의 질문 공급, 의미 반복, 완료 이후 행동을 분석하고 서비스 재설계와 체험형 프로토타입으로 연결했습니다.'),
    role: text('I led the project and oversaw the overall analysis. I built analytical marts, preprocessed data, conducted Content & Interaction and other analyses, and worked on text modeling. I explored predictive modeling, which was not included in the final reported results. I handled service-redesign planning, AI-assisted prototyping, presentation, and Q&A.', '프로젝트 리더로 분석 전반을 총괄했습니다. 데이터 마트를 구축하고 전처리를 수행했으며, 콘텐츠·인터랙션을 포함한 여러 분석과 텍스트 모델링을 진행했습니다. 예측 모델링을 시도했으나 최종 발표 결과에는 포함하지 않았습니다. 서비스 재설계 기획과 AI 활용 프로토타입 구현, 발표·Q&A를 담당했습니다.'),
    question: text('Does a large question library give each user a varied experience—and what happens after a question round ends?', '질문 목록이 많으면 사용자도 다양한 질문을 경험할까? 질문을 완료한 뒤에는 어떤 행동으로 이어질까?'),
    approach: {
      en: [
        'I joined service tables with Hackle logs and distinguished user, school, question, and visit units. As the analytical scope expanded, I built and maintained a structure using 23 analytical tables.',
        'I analyzed 3,898 normalized question phrases across 10 schools, examining supply concentration, new phrases, semantic repetition, and shared versus school-specific content.',
        'I defined completion and subsequent-start metrics with separate denominators. Completion was measured as 149,038 / 202,072 question-start visits; same-visit restart was measured as 3,162 / 149,038 completion visits.',
        'I worked on text modeling and explored predictive modeling. The predictive work remained exploratory and was not included in the final reported results.',
        'I proposed seven analytical perspectives and connected the team’s findings to four stages of the user experience. I specified screen flows and used AI assistance to implement and refine an HTML, CSS, and JavaScript prototype comprising 198 screens and states.'
      ],
      ko: [
        '서비스 테이블과 Hackle 로그를 연결하고 사용자·학교·질문·방문별 분석 단위를 구분했습니다. 분석 범위가 확장되면서 23개 분석용 테이블을 활용하는 구조를 구축·관리했습니다.',
        '10개 학교의 정규화 질문 문구 3,898개를 대상으로 공급 집중도, 신규 문구, 의미 반복, 학교별 공통·고유 질문을 분석했습니다.',
        '완료 전환과 완료 후 재시작의 분모를 구분했습니다. 질문 시작 방문 202,072건 중 149,038건이 완료로 이어졌고, 완료 방문 149,038건 중 3,162건에서 같은 방문 내 질문 재시작이 관측됐습니다.',
        '텍스트 모델링을 수행하고 예측 모델링을 탐색했습니다. 예측 모델링은 탐색 단계의 시도이며 최종 발표 결과와 구분했습니다.',
        '7개 분석 관점을 제안하고 팀의 결과를 4단계 경험 흐름으로 연결했습니다. 화면 흐름을 정의한 뒤 AI를 활용해 198개 화면·상태의 HTML·CSS·JavaScript 프로토타입을 구현·검토·수정했습니다.'
      ]
    },
    findings: {
      en: [
        'The top 10% of question phrases accounted for 53.0% of generated or assigned question records. Semantic repetition reached 34.42% in the segment with 501+ cumulative records per user.',
        '73.75% of question-start visits reached completion, but only 2.12% of completion visits contained a subsequent question-start event within the same visit.',
        'The prototype illustrated school-life questions, reviewed user-submitted questions, skip-reason collection, and routes to received results. The team placed first in the final-project peer vote.'
      ],
      ko: [
        '상위 10% 질문 문구가 생성·배정된 질문조각의 53.0%를 차지했습니다. 사용자별 누적 질문조각 501개 이상 구간의 의미 반복률은 34.42%였습니다.',
        '질문 시작 방문의 73.75%가 완료로 이어졌지만, 완료 방문 중 같은 방문 안에서 질문 시작이 다시 관측된 비율은 2.12%였습니다.',
        '학교생활 질문, 사용자 질문 제안의 검토, 건너뛰기 사유 수집, 받은 결과 확인 흐름을 프로토타입 화면으로 구체화했습니다. 팀은 최종 프로젝트 단체 투표 1위를 기록했습니다.'
      ]
    },
    next: {
      en: ['A follow-up experiment should test semantic-repeat controls and per-user exposure intervals.', 'Further testing should examine whether optional access to received results after completion improves subsequent participation without forcing another round.'],
      ko: ['의미 중복 관리와 개인별 재노출 간격을 실험으로 검증합니다.', '완료 후 실제 도착한 결과를 선택적으로 보여주는 흐름이 추가 참여를 강요하지 않으면서 이후 참여를 개선하는지 검증합니다.']
    },
    limitations: {
      en: ['Generated or assigned records are not verified views, and repetition was not established as a cause of churn.', '2.12% is a same-visit event-sequence metric, not retention or a restart verified by distinct Question Set IDs. Populations and observation periods differ across analyses.', 'The prototype is a demonstration. Retention and engagement improvements have not been tested in a live service.'],
      ko: ['질문조각은 생성·배정 기록으로 실제 열람과 다르며, 반복이 이탈의 원인이라는 인과관계를 확인한 것은 아닙니다.', '2.12%는 같은 방문 안의 이벤트 순서 지표이며 리텐션이나 서로 다른 Question Set ID를 확인한 재시작률이 아닙니다. 분석별 모집단과 관찰 기간도 다릅니다.', '프로토타입은 시연용이며 실제 서비스의 유지율·참여율 개선 효과는 검증 전입니다.']
    }
  },
  {
    id: 'shared-office', year: '2026', category: 'product',
    tags: ['Python', 'Funnel analysis', 'Landmark modeling', 'Tableau'],
    links: [repo('https://github.com/lucyjeehyeon/shared-office-trial-conversion-analysis'), { label: text('Tableau dashboard', 'Tableau 대시보드'), url: 'https://public.tableau.com/app/profile/.79502505/viz/_17854259361800/2', type: 'dashboard' }],
    title: text('Shared Office Trial-to-Paid Conversion Analysis', '공유오피스 무료체험 고객의 결제 전환 분석'),
    subtitle: text('Free-trial behavior and conversion analysis using company visit and payment logs', '실제 기업 방문·결제 로그 기반 무료체험 고객 행동·전환 분석'),
    summary: text('We examined the decline in free-trial payment conversion through visit behavior, timing, and branch context. Repeat visits across dates showed a more consistent association with payment than one long stay.', '방문 행동과 시점, 지점 환경을 결합해 무료체험 고객의 결제 전환 하락을 진단했습니다. 한 번의 긴 체류보다 여러 날짜에 걸친 반복 방문이 결제 전환과 더 일관되게 연결됐습니다.'),
    role: text('I coordinated the team’s meetings and responsibilities. I compared stay duration with repeat visits across dates and used D0/D1/D2 landmark models to examine when conversion signals emerged. I combined visit behavior with external context to diagnose differences and bottlenecks across branches, and handled external-data integration, preprocessing, and Q&A.', '팀장으로 회의와 역할을 조율했습니다. ‘긴 체류보다 반복 방문’에서는 체류시간과 여러 날짜에 걸친 방문을 비교하고, D0·D1·D2 랜드마크 모델링으로 전환 신호가 드러나는 시점을 살폈습니다. ‘같은 서비스, 다른 성과’에서는 이용 행동과 외부 환경을 결합해 지점별 성과 차이와 병목을 진단했습니다. 외부 데이터 병합·전처리와 Q&A를 맡았습니다.'),
    question: text('Why did payment conversion fall while applications and visits stayed stable, and which trial behaviors suggest a useful intervention point?', '신청과 방문은 안정적인데 결제 전환은 왜 낮아졌을까? 어떤 체험 행동과 시점이 개입의 단서가 될까?'),
    approach: {
      en: [
        'The team analyzed data for 9,624 applicants and 6,026 visitors, broke down the application → visit → payment funnel, and examined changes in conversion over time.',
        'We built variables for visit dates, stay duration, check-ins, time of day, and multi-branch usage. We used stratified comparisons and logistic regression to distinguish repeat-visit signals from multi-branch usage.',
        'I modeled cumulative D0, D1, and D2 behavior to examine when useful conversion signals emerged, and integrated subway foot traffic, nearby infrastructure, and map/blog reviews within 1 km of branches.',
        'I combined visit behavior with external data to diagnose branch-level bottlenecks in acquisition, experience, and conversion. I coordinated the team’s meetings and responsibilities.'
      ],
      ko: [
        '팀은 신청자 9,624명과 방문자 6,026명의 신청 → 방문 → 결제 퍼널을 분해하고 시계열 변화점을 확인했습니다.',
        '방문일수, 체류시간, 체크인 수, 대표 이용 시간대, 다지점 이용 변수를 만들고 층화 비교와 로지스틱 회귀로 반복 방문과 다지점 이용의 관계를 구분했습니다.',
        'D0·D1·D2 누적 행동으로 전환 신호가 나타나는 시점을 모델링했습니다. 지점 반경 1km의 지하철 유동인구·주변 인프라·지도·블로그 리뷰를 병합했습니다.',
        '지점별 비교에서는 이용 행동과 외부 환경을 결합해 같은 서비스의 성과 차이를 유입·경험·전환 병목으로 구분했습니다. 회의와 역할을 조율했습니다.'
      ]
    },
    findings: {
      en: ['Conversion fell from 39.6% before the change point to 25.8% after it; the bottleneck was at visit → payment.', 'Among single-branch users, repeat visitors across dates had an 8.38 percentage-point higher observed payment rate than one-day visitors.', 'Users who made shorter visits across multiple dates had an observed payment rate 22.02 percentage points higher than users who made one long visit. The payment-rate advantage observed for multi-branch users in the unadjusted comparison became smaller after behavioral intensity was taken into account.', 'Signals strengthened after D1 behavior was included, highlighting the second-day visit as a candidate intervention point. These findings informed branch-specific action proposals for different funnel bottlenecks.'],
      ko: ['변화점 전후 결제 전환율은 39.6%에서 25.8%로 하락했으며 병목은 방문 → 결제 단계에 있었습니다.', '단일 지점 이용자 안에서도 여러 날짜에 걸쳐 방문한 사용자의 결제율이 1일 방문자보다 8.38%p 높게 관찰됐습니다.', '여러 날짜에 짧게 이용한 집단의 결제율은 하루에 길게 이용한 집단보다 22.02%p 높게 관찰됐습니다. 단순 비교에서 나타난 다지점 이용자의 결제율 우위는 행동량을 보정한 뒤 크게 줄었습니다.', 'D1 행동을 추가했을 때 전환 신호가 강화되어 두 번째 날짜 방문을 개입 후보 시점으로 해석했습니다. 지점별 전략은 각 지점의 퍼널 병목에 맞춰 구분했습니다.']
    },
    next: {
      en: ['A follow-up experiment should test an Evening Return Pass that combines D1 rebooking with a reward after the return visit.', 'Branch strategies should distinguish acquisition, onboarding and monetization, structural review, and operating-model standardization.'],
      ko: ['D1 재방문 예약과 행동 완료 후 보상을 결합한 Evening Return Pass를 검증합니다.', '지점별 유입 포착, 온보딩·수익화, 구조 재검토, 운영 모델 표준화 전략을 구분해 적용·평가합니다.']
    },
    limitations: {
      en: ['The analysis is observational. Repeat visitors may differ in motivation and other unmeasured attributes; higher payment rates do not establish the effect of inducing a repeat visit.', 'External foot traffic and reviews provide branch context, not a direct measure of each applicant’s access or experience. Proposed interventions were not tested.'],
      ko: ['관찰 데이터 분석입니다. 반복 방문자는 동기 등 측정되지 않은 특성에서도 다를 수 있으므로, 높은 결제율이 재방문 유도의 인과 효과를 의미하지는 않습니다.', '외부 유동인구와 리뷰는 지점의 맥락이며 개별 신청자의 접근성·경험을 직접 측정하지 않습니다. 제안한 개입은 실험으로 검증하지 않았습니다.']
    }
  },
  {
    id: 'subscription', year: '2026', category: 'product',
    tags: ['Python', 'Activation', 'Segmentation', 'Experiment design'],
    links: [repo('https://github.com/lucyjeehyeon/subscription-conversion-retention-analysis')],
    title: text('Subscription Education Conversion & Retention Analysis', '구독형 교육 서비스 전환·리텐션 분석'),
    subtitle: text('Conversion and renewal analysis using company-provided learning and payment data', '기업 제공 학습·결제 데이터 기반 전환·갱신 행동 분석'),
    summary: text('We analyzed early-learning and post-payment behavior in a subscription education service and used behavioral segments to propose onboarding and learning-routine experiments.', '구독형 교육 서비스의 초기 학습과 결제 이후 행동을 분석하고, 행동 세그먼트를 온보딩·학습 루틴 실험 제안으로 연결했습니다.'),
    role: text('I analyzed early-learning funnels and built analytical tables for the first seven days after signup. I examined a candidate activation threshold, defined behavioral user segments, and assessed content-improvement priorities. I co-presented the findings.', '초기 학습 퍼널을 분석하고 가입 후 7일 기준의 분석 테이블을 구축했습니다. 활성화 기준 후보를 검토하고 행동 기반 유저 세그먼트를 정의했으며, 콘텐츠 개선 우선순위를 분석했습니다. 최종 발표를 공동으로 진행했습니다.'),
    question: text('After the free trial was removed, which early behaviors were associated with a first payment, and which learning patterns accompanied renewal?', '무료체험 폐지 이후 어떤 초기 행동이 첫 결제와 연결됐고, 어떤 학습 패턴에서 갱신율 차이가 나타났을까?'),
    approach: {
      en: ['I reviewed user, content, and event definitions and established preprocessing rules and analytical tables for the first seven days after signup. I examined the lesson-entry-to-completion funnel and users’ actions after their first completion.', 'I counted lesson-completion events within seven days of signup, including only events before the first payment. I compared the counts with first-payment outcomes within 30 days of signup, considering both conversion rates and user counts when selecting a candidate activation threshold.', 'I defined inactive, explorer, weak-learner, and strong-learner segments. I assessed beginner-content improvement priorities using the numbers of users who started content and those who did not complete a lesson.', 'The team compared renewal rates across active-learning-day groups among 3,323 post-trial-removal users with at least 60 days of observable follow-up, and proposed onboarding tests and revenue scenarios.'],
      ko: ['유저·콘텐츠·이벤트 정의를 확인하고 가입 후 7일을 기준으로 전처리 규칙과 분석 테이블을 만들었습니다. 레슨 진입 → 완료 퍼널과 첫 완료 이후 행동을 살펴봤습니다.', '가입 후 7일 중 첫 결제 이전의 레슨 완료 이벤트 수와 30일 내 첫 결제를 비교하고, 전환율과 사용자 규모를 함께 고려해 활성화 후보를 정했습니다.', '무행동형·탐색형·약한 학습형·강한 학습형을 정의했습니다. 콘텐츠 시작 사용자 수와 레슨 미완료 사용자 수를 함께 고려해 입문 난이도(beginner) 콘텐츠의 개선 우선순위를 검토했습니다.', '팀은 무료체험 폐지 후 60일 관찰이 가능한 3,323명의 학습 활동일수별 갱신율을 비교하고 온보딩 실험과 매출 시나리오를 제안했습니다.']
    },
    findings: {
      en: ['Seven or more lesson-completion events emerged as an exploratory activation threshold—not a proven causal target.', 'Observed first-payment conversion was 1.08% for inactive users and 10.98% for explorers. The difference suggested that onboarding messages should distinguish content experience rather than treat all users with no completed lessons alike.', 'Renewal was 48.62%, 59.72%, and 64.10% for groups with 0–4, 5–13, and 14+ active learning days, respectively. The number of active learning days provided useful context alongside total learning volume.'],
      ko: ['레슨 완료 이벤트 7회 이상을 탐색적 활성화 후보로 정했습니다. 인과적으로 검증된 목표 수치는 아닙니다.', '무행동형과 탐색형의 첫 결제율은 각각 1.08%, 10.98%였습니다. 레슨 완료가 없는 사용자도 콘텐츠 경험 여부에 따라 구분해 온보딩 메시지를 설계할 필요가 있었습니다.', '활동일수 0–4일, 5–13일, 14일 이상 그룹의 갱신율은 각각 48.62%, 59.72%, 64.10%였습니다. 학습량과 함께 학습 활동일수를 살펴볼 필요가 있었습니다.']
    },
    next: {
      en: ['A follow-up test should evaluate a one-click first-content experience for inactive users and next-action guidance for weak learners.', 'Further experiments should examine whether rewards and repeat-visit mechanisms help paid users build a learning routine, and assess their effects on payment and renewal.'],
      ko: ['무행동형에게 첫 콘텐츠를 한 번에 시작할 수 있는 흐름을 제공하고, 약한 학습형에게는 다음 학습 행동을 안내하는 실험을 제안합니다.', '보상·반복 방문 장치가 결제자의 학습 루틴 형성에 도움이 되는지 실험하고 결제·갱신 효과를 검증합니다.']
    },
    limitations: {
      en: ['Acquisition-channel data was unavailable, and some event definitions were inconsistent. The content-experience segments may include behavior after payment within the full seven-day window.', 'The supplied activity-day field reaches 32 days. Its exact aggregation boundaries and plan-specific renewal rules require verification against the original mart SQL and billing policies.', 'The observed relationships do not establish causation. The proposed A/B test and simulated revenue changes are not evidence of realized uplift.'],
      ko: ['유입 채널 데이터가 없고 일부 이벤트 정의가 일관되지 않았습니다. 콘텐츠 경험 세그먼트에는 가입 후 7일 중 결제 이후 행동이 포함될 수 있습니다.', '제공된 활동일수 필드의 최댓값은 32일입니다. 정확한 경계와 플랜별 갱신 정의는 원본 마트 SQL·결제 정책 확인이 필요합니다.', '행동과 결제의 관계는 상관입니다. 제안한 A/B 테스트와 매출 시뮬레이션은 실제 성과 개선을 입증하지 않습니다.']
    }
  },
  {
    id: 'subway', year: '2026', category: 'research',
    tags: ['Python', 'Public data', 'Safety', 'Tableau'],
    links: [repo('https://github.com/lucyjeehyeon/seoul-subway-safety-analysis'), { label: text('Tableau dashboard', 'Tableau 대시보드'), url: 'https://public.tableau.com/app/profile/.79502505/viz/_17859187213230/1?publish=yes', type: 'dashboard' }],
    title: text('Seoul Subway Accident Patterns & Safety Recommendations', '서울시 지하철 사고 패턴 분석과 안전 개선 제안'),
    subtitle: text('Public-data analysis of subway accidents and safety recommendations', '공공데이터 기반 서울시 지하철 사고 패턴 분석 및 안전 개선 제안'),
    summary: text('We integrated five years of accident data with passenger, facility, and weather data to examine patterns by accident type and propose targeted safety improvements.', '최근 5년의 안전사고에 이용량·시설·기상 정보를 결합해 사고 유형별 패턴을 분석하고 맞춤형 안전 개선 방향을 제안했습니다.'),
    role: text('I led the project and participated in shared preprocessing. I analyzed escalator and elevator accidents, co-presented the findings, and answered questions.', '프로젝트 리더로 공동 전처리에 참여하고 승강설비 사고 분석을 맡았습니다. 최종 발표를 공동으로 진행하고 Q&A를 담당했습니다.'),
    question: text('Which combinations of time, station context, and equipment characteristics deserve attention for each accident type?', '사고 유형별로 어떤 시간대·역사 환경·설비 특성의 조합을 우선 살펴봐야 할까?'),
    approach: {
      en: ['The team standardized station names and merged accident records with ridership, congestion, platform geometry and gaps, construction year, screen doors, escalators/elevators, and weather.', 'We examined 12 hypotheses by accident type and distinguished raw accident counts from hourly accident density when comparing time periods.', 'I coordinated analytical direction and roles and examined escalator/elevator accidents against station scale, equipment age, rainfall, and other external conditions.', 'We worked together to prioritize recommendations and prepare the presentation. The project included a Tableau dashboard for exploring patterns under selected conditions.'],
      ko: ['팀은 역명 기준을 맞추고 사고 기록에 승하차 인원, 혼잡도, 승강장 선형·간격, 준공연도, 안전문, 승강설비, 기상을 병합했습니다.', '사고 유형별 12개 가설을 살펴보고 시간대 비교에서 단순 건수와 시간당 사고 밀도를 구분했습니다.', '분석 방향과 역할을 조율하고 승강설비 사고를 개인 분석으로 맡아 역사 규모·설비 노후도·강수 등 외부 조건과의 관계를 살펴봤습니다.', '팀과 개선 우선순위를 논의하고 발표 내용을 정리했습니다. 프로젝트 산출물에는 조건별 사고 패턴을 탐색하는 Tableau 대시보드가 포함됐습니다.']
    },
    findings: {
      en: ['Morning-commute periods and major transfer stations stood out in the team’s on-board and in-station accident analyses. Platform-gap accident patterns varied with platform curvature and station age.', 'The escalator/elevator analysis considered facility scale, equipment age, and rainfall together rather than explaining all accidents through passenger volume.', 'The resulting recommendations differed by accident type: staffing and passenger-flow management, platform-gap guidance, and weather-linked equipment checks.'],
      ko: ['팀의 열차 내·역 구내 분석에서는 출근 시간대와 주요 환승역의 사고 패턴이 두드러졌습니다. 발빠짐 사고의 분포는 승강장 선형과 역사 노후도에 따라 달랐습니다.', '승강설비 사고는 이용량뿐 아니라 시설 규모·노후도·강수를 함께 고려해 해석했습니다.', '시간대별 인력·동선 관리, 연단 간격 안내, 날씨 연동 설비 점검 등 사고 유형에 맞춰 제안을 구분했습니다.']
    },
    next: {
      en: ['Follow-up work should prioritize equipment-specific preventive checks and evaluate outcomes after implementation.', 'Further analysis should refine the definitions of passenger exposure and congestion and focus on clearly supported findings.'],
      ko: ['설비별 예방 점검 우선순위를 정하고 적용 이후의 결과를 평가합니다.', '이용 노출·혼잡도의 정의를 보완하고 근거가 분명한 핵심 결과를 중심으로 전달합니다.']
    },
    limitations: {
      en: ['Observed accident patterns do not establish causes. Raw counts and hourly density are not equivalent to passenger-level accident risk.', 'Measures such as congestion and complex passenger flows depend on their definitions. The safety proposals were not evaluated as interventions.'],
      ko: ['관찰된 사고 패턴만으로 원인을 확정할 수 없습니다. 단순 건수나 시간당 밀도는 승객 1인당 사고 위험과 다릅니다.', '혼잡도·복잡 동선 등의 측정 방식에 따라 결과가 달라질 수 있습니다. 안전 개선안의 실제 효과는 검증하지 않았습니다.']
    }
  },
  ...cloudProjects,
  ...sprintProductProjects,
  ...forecastProjects,
  {
    id: 'toxmod', year: '2025', category: 'research', tags: ['AI ethics', 'Privacy', 'Fairness', 'Policy research'], links: [],
    title: text('ToxMod Ethics Assessment', 'ToxMod AI 윤리 영향평가'),
    subtitle: text('User protection, voice data, and the right to challenge a decision', '이용자 보호, 음성 데이터, 판단에 이의를 제기할 권리'),
    summary: text('A document-based qualitative assessment of voice-moderation AI, examining privacy, fairness, transparency, and the implications of enforcement for user rights and trust.', '음성 중재 AI를 프라이버시·공정성·투명성 관점에서 검토하고, 제재 과정에서 발생할 수 있는 이용자 권리와 신뢰 문제를 정리했습니다.'),
    role: text('I proposed ToxMod as the assessment subject and reviewed international documentation and academic research. I examined its ethical implications and co-authored the impact-assessment report.', 'ToxMod를 평가 대상으로 제안하고 해외 공식문서와 학술자료를 조사했습니다. 서비스의 윤리적 쟁점을 검토하고 영향평가 보고서를 공동 작성했습니다.'),
    question: text('How should a voice-moderation service protect users while respecting consent, context, and meaningful appeals?', '음성 중재 서비스가 이용자를 보호하면서 동의·발화 맥락·실질적인 이의제기 권리를 어떻게 보장할 수 있을까?'),
    approach: { en: ['Reviewed official policies, FAQs, technical documents, academic studies and guidelines available during the course project.', 'Mapped stakeholders and examined separate consent for voice-data collection, children’s protection, risks of errors related to accent or context, and transparency in sanction procedures.'], ko: ['수업 프로젝트 당시의 공식 정책·FAQ·기술 문서·학술 연구·가이드라인을 조사했습니다.', '이해관계자를 정리하고 음성 데이터 수집에 대한 별도 동의, 아동 보호, 억양·발화 맥락에 따른 오류 위험, 제재 절차의 투명성을 검토했습니다.'] },
    findings: { en: ['The assessment identified consent, group-level error risks, explanations and appeals as issues that require review alongside detection performance.', 'The report proposed staged human review, clearer explanations of sanction decisions and external verification.'], ko: ['영향평가의 핵심 쟁점은 탐지 성능과 함께 동의, 집단별 오류 위험, 판단 설명, 이의제기 절차를 검토하는 것이었습니다.', '단계별 담당자 검토, 구체적인 제재 사유 제공, 외부 검증을 제안했습니다.'] },
    next: { en: ['Convert the recommendations into reviewable governance and appeal-process criteria.'], ko: ['개선안을 거버넌스와 이의제기 절차의 점검 기준으로 구체화합니다.'] },
    limitations: { en: ['This document-based course assessment did not directly audit internal models, measure actual group-level error rates or verify current legal compliance.'], ko: ['공개 문헌을 검토한 수업 프로젝트로, 내부 모델이나 실제 집단별 오류율을 직접 검증하지 않았습니다. 현재의 법규 준수 여부를 감사한 결과도 아닙니다.'] }
  },
  {
    id: 'steam', year: '2025', category: 'research', tags: ['Orange3', 'Decision tree', 'Classification'], links: [],
    title: text('Classifying Popular Steam Games from Game Attributes', '게임 속성 기반 Steam 인기 게임 분류'),
    subtitle: text('Classifying download-based popularity using game attributes', '게임 속성을 활용한 다운로드 수 기준 인기 그룹 분류'),
    summary: text('An individual university project using Orange3 to classify the top quartile by download count in a dataset of 2,380 Steam games.', 'Steam 게임 2,380개의 속성을 바탕으로 다운로드 수 상위 25% 여부를 Orange3에서 분류한 개인 수업 프로젝트입니다.'),
    role: text('I carried out this individual project from problem definition through evaluation. I cleaned the data, defined the classification target, and built and evaluated the modeling workflow in Orange3.', '개인 프로젝트로 문제 정의부터 평가까지 수행했습니다. 데이터를 정제하고 분류 타깃을 정의했으며, Orange3에서 모델링 워크플로를 구성하고 평가했습니다.'),
    question: text('How well can structured game attributes distinguish games in the top quartile by download count in this dataset?', '이 데이터에서 구조화된 게임 속성으로 다운로드 상위 25% 게임을 얼마나 구분할 수 있을까?'),
    approach: { en: ['Used Kaggle’s Best-Selling Steam Games of All Time and defined a binary top_downloaded target.', 'Compared Logistic Regression and Decision Tree in an Orange3 workflow using price, reviews, ratings, difficulty, age restriction, and other attributes.'], ko: ['Kaggle의 Best-Selling Steam Games of All Time을 활용하고 top_downloaded 이진 타깃을 정의했습니다.', '가격·리뷰·평점·난이도·연령 제한 등 속성을 활용해 Orange3에서 로지스틱 회귀와 의사결정나무를 비교했습니다.'] },
    findings: { en: ['The report gives a Decision Tree ROC-AUC of approximately 0.96. Its stated accuracy of approximately 86% differs from the 89.64% calculated from the recorded confusion matrix. The evaluation conditions need to be reconciled.', 'The recorded confusion matrix contains TN 477, FP 52, FN 22 and TP 163.'], ko: ['원문은 의사결정나무 ROC-AUC를 약 0.96으로 기록했습니다. 보고된 정확도 약 86%와 혼동행렬로 계산한 정확도 89.64%가 일치하지 않아 평가 조건의 재확인이 필요합니다.', '원문 혼동행렬에는 TN 477, FP 52, FN 22, TP 163이 기록되어 있습니다.'] },
    next: { en: ['Review when each feature becomes available and the validation design before using the model for release or marketing decisions. Explore review text and user tags as potential extensions.'], ko: ['출시·마케팅 의사결정에 활용하기 전에 각 변수의 관측 시점과 평가 설계를 점검합니다. 리뷰 텍스트와 사용자 태그는 후속 분석으로 탐색합니다.'] },
    limitations: { en: ['This is an educational classifier on a selected dataset. Reviews and ratings may have been observed after release, so these results do not establish pre-launch predictive performance.'], ko: ['선정된 데이터셋을 활용한 학습용 분류 모델입니다. 리뷰·평점 등은 출시 후 관측될 수 있으므로 결과를 출시 전 예측 성능으로 해석하지 않습니다.'] }
  },
  {
    id: 'pothole', year: '2024–25', category: 'research', tags: ['Python', 'Spatial data', 'LightGBM', 'Conference paper'],
    links: [repo('https://github.com/lucyjeehyeon/pothole-risk-factor-analysis'), { label: text('Conference paper', '학술대회 논문'), url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12132267', type: 'publication' }],
    title: text('Analysis of the Key Factors of Potholes Using Tree-Based Machine Learning Techniques', '트리 기반 머신러닝 기법을 활용한 포트홀 발생 주요 요인 분석'),
    subtitle: text('Published in the 2025 KICS Winter Conference proceedings · Feb 2025 · pp. 1015–1016', '2025 한국통신학회 동계종합학술발표회 논문집 게재 · 2025.02 · 1015–1016쪽'),
    summary: text('A capstone research project integrating road, traffic, and weather data to compare tree-based models and interpret variables associated with pothole occurrence.', '도로·교통·기상 데이터를 통합해 트리 기반 모델을 비교하고 포트홀 발생과 연관된 변수를 해석한 캡스톤 연구입니다.'),
    role: text('I used GIS to process SHP spatial data and collected and preprocessed road-network, road-characteristic, weather, and other relevant data. I compared, tuned, and interpreted tree-based models. I led the paper writing and participated in the academic conference.', 'GIS를 활용해 SHP 형식의 공간자료를 처리하고, 도로 네트워크·도로 특성·기상 상태 등 관련 데이터를 수집·전처리했습니다. 트리 기반 모델의 비교·튜닝·해석을 수행했습니다. 논문 작성을 주도하고 학술대회에 참여했습니다.'),
    question: text('Can integrated road, traffic, and weather records help identify road sections associated with pothole occurrence?', '도로·교통·기상 기록을 결합해 포트홀 발생과 연관된 구간과 요인을 살펴볼 수 있을까?'),
    approach: { en: ['Used GIS to process SHP spatial data and mapped Seoul pothole addresses to coordinates and road links. Integrated the records for December 2022–January 2024 at a monthly level.', 'Created an integrated dataset of 333,858 records and 37 variables, handled missing values and encoded categorical variables, then applied 1:1 undersampling.', 'Compared and tuned XGBoost, LightGBM and CatBoost. Reviewed decision thresholds using precision–recall curves and interpreted feature importance.'], ko: ['GIS로 SHP 공간자료를 처리하고 서울시 포트홀 주소를 좌표와 도로 링크에 매핑했습니다. 2022년 12월부터 2024년 1월까지의 기록을 월 단위로 통합했습니다.', '333,858건·37개 변수로 통합한 데이터의 결측값과 범주형 변수를 전처리한 뒤 1:1 언더샘플링을 적용했습니다.', 'XGBoost·LightGBM·CatBoost를 비교·튜닝했습니다. Precision–Recall 곡선으로 임계값을 검토하고 변수 중요도를 해석했습니다.'] },
    findings: { en: ['LightGBM reported 78% accuracy and a pothole-class F1-score of 0.81 in the project evaluation.', 'The feature-importance analysis highlighted wind speed, inbound/outbound traffic, bus-route count and other weather variables. The study was published in the 2025 KICS Winter Conference proceedings.'], ko: ['프로젝트 평가에서 LightGBM은 정확도 78%, 포트홀 발생 클래스 F1 0.81을 기록했습니다.', '변수 중요도에서 풍속·유입·유출 교통량·버스 노선 수와 기상 변수가 두드러졌습니다. 연구 결과를 2025 한국통신학회 동계종합학술발표회 논문집에 게재했습니다.'] },
    next: { en: ['Validate using time- and location-based holdouts and check probability calibration at real-world occurrence rates before operational use.'], ko: ['실무 적용 전 시간·공간을 분리한 평가를 수행하고, 실제 발생 비율을 반영한 확률 보정을 점검합니다.'] },
    limitations: { en: ['Feature importance indicates model contribution, not causal effects. Undersampled evaluation metrics do not directly establish performance at real-world prevalence or across unseen roads and periods.'], ko: ['변수 중요도는 모델 내 기여도이며 인과 효과가 아닙니다. 언더샘플링된 평가만으로 실제 발생 비율이나 미관측 도로·기간에서의 성능을 보장할 수 없습니다.'] }
  },
  {
    id: 'kida', year: '2024', category: 'development', tags: ['Kotlin', 'Android', 'SQLite', 'Team project'],
    links: [repo('https://github.com/lucyjeehyeon/kida-android-challenge-app')],
    title: text('KidA — Android Challenge & To-Do App Development', 'KidA — 챌린지·할 일 관리 Android 앱 개발'),
    subtitle: text('Challenges and daily to-dos in one Android app', '챌린지와 날짜별 할 일을 연결한 Android 앱'),
    summary: text('A Programming GURU2 team app combining challenge discovery, participation, and calendar-based task management with local SQLite storage.', '챌린지 탐색·참여와 캘린더 기반 할 일 관리를 SQLite 로컬 저장소로 연결한 Programming GURU2 팀 앱입니다.'),
    role: text('I proposed the challenge-app idea, contributed to database work, and helped implement the Android app with the team.', '챌린지 앱 아이디어를 제안하고 데이터베이스 작업과 Android 앱 공동 구현을 맡았습니다.'),
    context: text('Team project completed during Programming GURU2, an intensive coding course organized by the SW-Centered University Project Office at Seoul Women’s University.', '서울여자대학교 SW중심대학추진사업단 주관 SW사관학교 Programming GURU2 집중코딩과정 이수 중 수행한 팀 프로젝트입니다.'),
    question: text('How could challenge discovery and everyday task management share a simple mobile flow?', '챌린지 발견과 일상적인 할 일 관리를 하나의 모바일 흐름으로 연결할 수 있을까?'),
    approach: { en: ['The team used Kotlin and XML layouts to build account, challenge and calendar screens with tab navigation.', 'SQLite supported local registration and login, together with date-based task creation, editing and completion-state updates.'], ko: ['팀은 Kotlin과 XML 레이아웃으로 계정·챌린지·캘린더 화면과 탭 이동 구조를 구현했습니다.', 'SQLite 기반으로 로컬 회원가입·로그인과 날짜별 할 일 추가·수정·완료 처리를 구현했습니다.'] },
    findings: { en: ['The team connected home, challenges, ranking, and profile screens and implemented core local task-management flows.'], ko: ['팀은 홈·챌린지·랭킹·마이페이지를 연결하고 로컬 할 일 관리의 주요 흐름을 구현했습니다.'] },
    next: { en: ['Complete persistence for personal challenges and stamp states, and replace sample ranking data with actual usage records.'], ko: ['개인 챌린지·도장 상태를 저장하는 흐름을 보완하고, 랭킹이 실제 이용 기록을 반영하도록 개선합니다.'] },
    limitations: { en: ['This is an educational app, not a production service. Ranking uses sample data, and some personal-challenge and stamp-state persistence flows remain incomplete.'], ko: ['교육용 앱으로 실제 운영 서비스는 아닙니다. 랭킹은 샘플 데이터를 사용하며, 일부 개인 챌린지·도장 상태의 저장 흐름은 보완이 필요합니다.'] }
  },
  {
    id: 'watcha', year: '2023', category: 'product', tags: ['Survey', 'Customer research', 'OTT', 'Strategy'], links: [],
    title: text('WATCHA Customer Research', '왓챠 소비층 확보 방안'),
    subtitle: text('Survey-based customer research and acquisition strategy for an OTT service', '설문조사 기반 OTT 이용자 인식 분석 및 신규 이용자 확보 전략'),
    summary: text('A team study using 97 survey responses and external statistics to explore why people used or avoided WATCHA and propose customer-acquisition directions.', '설문 97건과 외부 통계로 왓챠의 이용·비이용 이유를 살펴보고 소비층 확보 방향을 제안한 팀 리서치입니다.'),
    role: text('I analyzed the research data, benchmarked competing OTT services, and developed marketing proposals for customer acquisition.', '조사 데이터를 분석하고 경쟁 OTT 서비스를 벤치마킹했으며, 신규 이용자 확보를 위한 마케팅 방안을 기획했습니다.'),
    question: text('What keeps potential customers from choosing WATCHA, and which service differences are worth communicating?', '잠재 고객이 왓챠를 선택하지 않는 이유는 무엇이며 어떤 차별점을 전달할 필요가 있을까?'),
    approach: { en: ['Analyzed awareness, subscription intent, usage reasons, content preferences, and awareness of supplementary features.', 'Compared age/gender patterns, benchmarked content and marketing examples from Netflix and TVING, and developed customer-acquisition marketing proposals.'], ko: ['인지도·구독 의향·이용 이유·콘텐츠 선호·부가서비스 인식을 분석했습니다.', '연령·성별 패턴과 넷플릭스·티빙의 콘텐츠·마케팅 사례를 비교하고 신규 이용자 확보를 위한 마케팅 방안을 기획했습니다.'] },
    findings: { en: ['The team proposed promoting the service’s recommendation, rating and supplementary features more clearly, alongside stronger content and audience-specific messaging.'], ko: ['콘텐츠와 타깃별 메시지를 강화하고, 추천·평가·부가서비스의 차별점을 홍보에 반영하는 방안을 제안했습니다.'] },
    next: { en: ['Test messaging with a broader sample and assess whether awareness of differentiated features changes subscription consideration.'], ko: ['더 넓은 표본에서 메시지를 검증하고 차별 기능 인지가 구독 고려에 미치는 영향을 실험으로 확인합니다.'] },
    limitations: { en: ['This small survey and course strategy proposal do not represent the whole market or demonstrate the effects of an acquisition campaign. Findings reflect the 2023 study period.'], ko: ['소규모 설문 결과는 시장 전체를 대표하지 않으며, 제안한 유입 전략의 효과도 검증하지 않았습니다. 2023년 조사 당시의 맥락을 반영한 수업 프로젝트입니다.'] }
  },
  {
    id: 'voice-phishing', year: '2022–23', category: 'research', tags: ['Python', 'Crawling', 'KoNLPy', 'Text analysis'],
    links: [repo('https://github.com/lucyjeehyeon/voicefishing_analysis')],
    title: text('Voice Phishing Patterns', '보이스피싱 패턴 분석'),
    subtitle: text('Voice-phishing case collection, preprocessing, and Korean text-pattern analysis', '보이스피싱 사례 데이터 수집·전처리 및 한국어 텍스트 패턴 분석'),
    summary: text('An initial capstone and follow-up practice project collecting phishing-case scripts and YouTube metadata, then refining document conversion, preprocessing, and exploratory text analysis.', '초기 캡스톤과 후속 실습에서 보이스피싱 사례 스크립트·YouTube 데이터를 수집하고 문서 변환·전처리·탐색적 텍스트 분석을 보완했습니다.'),
    role: text('In a two-person capstone design project, I proposed the topic and wrote crawling code to collect case scripts and related video metadata. I preprocessed the scripts and metadata, co-created the presentation, and presented the findings.', '2인 캡스톤디자인 프로젝트에서 주제를 제안하고 크롤링 코드를 작성해 사례 스크립트와 관련 영상 메타데이터를 수집했습니다. 수집한 스크립트와 메타데이터를 전처리하고, 발표자료를 공동 제작해 분석 결과를 발표했습니다.'),
    question: text('How can unstructured case scripts and video metadata become a dataset for exploring recurring phishing language?', '사례 스크립트와 영상 메타데이터를 반복되는 보이스피싱 언어를 탐색할 수 있는 데이터로 바꾸려면 무엇이 필요할까?'),
    approach: { en: ['Collected 185 case-script documents in .doc format and related YouTube video titles, descriptions and keywords. Converted and merged the documents into a DataFrame.', 'The project workflow included Korean text cleaning, stopword removal, filtering irrelevant videos and noun extraction with KoNLPy. The team explored patterns through word clouds and sentiment analysis and reviewed a keyword-based prediction prototype.'], ko: ['사례 스크립트가 담긴 .doc 문서 185개와 관련 YouTube 영상의 제목·설명·키워드를 수집하고, 문서를 변환·병합해 DataFrame으로 정리했습니다.', '프로젝트의 분석 과정에서는 한글 텍스트 정제·불용어 제거·비관련 영상 필터링과 KoNLPy 명사 추출을 수행했습니다. 팀은 워드클라우드·감성 분석으로 패턴을 탐색하고 키워드 기반 예측 프로토타입을 검토했습니다.'] },
    findings: { en: ['Documented a text-analysis workflow from collection through document conversion, cleaning, noun extraction and visualization.', 'Revisiting the initial capstone placed greater emphasis on preprocessing and checking source relevance.'], ko: ['수집부터 문서 변환·정제·명사 추출·시각화로 이어지는 텍스트 분석 절차를 정리했습니다.', '초기 캡스톤을 후속 실습에서 보완하며 전처리 기준과 수집 자료의 관련성 점검에 중점을 뒀습니다.'] },
    next: { en: ['Before extending the prototype into a detection or classification model, validate labeled evaluation data and the suitability of Korean sentiment-analysis methods.'], ko: ['탐지·분류 모델로 확장하려면 라벨이 있는 평가 데이터와 한국어 감성 분석 방법의 적합성을 검증해야 합니다.'] },
    limitations: { en: ['This is an exploratory text-analysis workflow and educational prototype, not a deployed phishing detector. Keyword frequency and word clouds alone do not establish detection rules, and sentiment methods require language validation.'], ko: ['탐색적 텍스트 분석과 학습용 프로토타입으로, 운영 중인 보이스피싱 탐지 시스템은 아닙니다. 키워드 빈도와 워드클라우드만으로 사기 판별 규칙을 확립한 것은 아니며, 감성 분석 결과도 한국어 적합성 검증이 필요합니다.'] }
  },
  {
    id: 'ficord', year: '2022', category: 'service', tags: ['Service planning', 'User flow', 'Public safety'], links: [],
    title: text('Ficord — Voice-Phishing Reporting App Service Planning', 'Ficord — 보이스피싱 신고 앱 서비스 기획'),
    subtitle: text('A simpler path to reporting suspected voice phishing', '의심스러운 통화를 더 간편하게 신고하는 서비스 기획'),
    summary: text('A university team project proposing a service concept and initial user flow to reduce friction when reporting suspected voice phishing.', '보이스피싱 의심 통화를 신고하는 과정의 번거로움을 줄이기 위해 서비스 개념과 초기 사용자 흐름을 제안한 학부 팀 기획입니다.'),
    role: text('I proposed the voice-phishing reporting service idea and handled service planning.', '보이스피싱 신고 서비스 아이디어를 제안하고 서비스 기획을 맡았습니다.'),
    question: text('How could the reporting process be easier to access during a suspicious call?', '의심스러운 통화 중에도 사용자가 신고 절차에 쉽게 진입하도록 하려면 어떻게 설계해야 할까?'),
    approach: { en: ['Defined evidence collection and lengthy report forms as sources of friction, then proposed a reporting entry point accessible during a call.', 'The team outlined a flow from reporting to recording and agency support, with a concept for subsequent warnings.'], ko: ['증빙 자료 수집과 신고 양식 작성의 번거로움을 문제로 정의하고, 통화 중 접근하기 쉬운 신고 진입점을 제안했습니다.', '팀은 신고 버튼에서 녹음·기관 지원으로 이어지는 이용 흐름과 후속 경고 기능의 개념을 정리했습니다.'] },
    findings: { en: ['Documented a service concept and initial user flow intended to make reporting easier to start.'], ko: ['신고 절차에 쉽게 진입할 수 있도록 서비스 개념과 초기 이용 흐름을 문서로 정리했습니다.'] },
    next: { en: ['Validate reporting needs with users and responsible agencies. Review consent, recording permissions, agency handoff and technical feasibility to define a prototype scope.'], ko: ['사용자와 신고 담당 기관의 요구를 확인합니다. 동의·통화 녹음 권한·기관 접수 연결·기술적 실행 가능성을 검토해 프로토타입 범위를 정합니다.'] },
    limitations: { en: ['This is a planning concept. No working app, agency integration, voice-identification accuracy or impact on reporting or crime reduction was demonstrated.'], ko: ['기획 단계의 서비스 개념입니다. 동작하는 앱이나 기관 연동을 구현하지 않았으며, 음성 식별 정확도와 신고율·범죄 감소 효과를 검증한 결과는 없습니다.'] }
  }
];

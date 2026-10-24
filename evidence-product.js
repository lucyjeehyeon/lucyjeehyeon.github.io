// Native charts and tables rebuilt from verified team outputs and metric reviews.
// Company identifiers and row-level records are deliberately omitted.
const t = (en, ko) => ({ en, ko });
const field = (enLabel, koLabel, enValue, koValue) => ({ label: t(enLabel, koLabel), value: t(enValue, koValue) });

export const productEvidence = {
  'viral-to-value': {
    data: [
      field('Source', '데이터 출처', 'Real-world data from Company A, a teen social-app provider, supplied through the bootcamp: service DB, analytical marts, and Hackle visit logs. Company A is an anonymized label.', '부트캠프에서 제공받은 A사(청소년 SNS)의 실제 서비스 DB·분석 마트·Hackle 방문 로그를 활용했습니다. A사는 기업명을 익명 처리한 표기입니다.'),
      field('Population', '전체 분석 범위', '677,081 regular users and 5,551 observed schools in the overall diagnosis; each analysis uses its own eligible population.', '전체 진단의 일반 가입자 677,081명·관측 학교 5,551개. 세부 분석에서는 해당 조건에 맞는 모집단을 별도로 사용했습니다.'),
      field('Content sample', '콘텐츠 분석 표본', '10 schools and 3,898 normalized question phrases. Question records represent generation or assignment, not verified screen views.', '10개 학교·정규화 질문 문구 3,898개. 질문조각은 생성·배정 기록이며 실제 화면 열람과 구분합니다.'),
      field('Visit-log window', '방문 로그 관찰 기간', 'Hackle: 18 July–10 August 2023. This is the Interaction window, not the period of the entire project dataset.', 'Hackle: 2023.07.18–08.10. Interaction 분석의 관찰 기간이며 프로젝트 전체 데이터 기간은 아닙니다.'),
      field('Data design', '분석 단위와 구조', '23 analytical marts; user, school, question, visit, and user-day units were distinguished rather than merged into a single funnel.', '23개 분석용 마트를 활용하고 사용자·학교·질문·방문·사용자-일 단위를 구분했습니다.'),
      field('Tools', '사용 도구·환경', 'SQL / MySQL / DuckDB, Python / pandas / scikit-learn, Kiwi / Sentence Transformers, Jupyter / Colab; HTML, CSS, and JavaScript for the prototype.', 'SQL·MySQL·DuckDB, Python·pandas·scikit-learn, Kiwi·Sentence Transformers, Jupyter·Colab. 프로토타입은 HTML·CSS·JavaScript로 구현했습니다.')
    ],
    reflection: {
      en: [
        'A large content catalog did not guarantee a varied individual experience. Supply concentration and semantic repetition needed to be measured separately from the number of available phrases.',
        'A complete question round and a reason to continue were different product problems. Keeping their denominators separate made the redesign focus on received results and optional next actions, not another forced round.',
        'The next evaluation should preserve school-level network effects, compare actual exposure rather than assigned records where possible, and track safety reports alongside participation.'
      ],
      ko: [
        '질문 목록의 크기만으로 개인이 경험하는 다양성을 설명할 수 없었습니다. 문구 수와 별도로 공급 집중도·의미 반복을 확인해야 했습니다.',
        '질문을 끝내는 것과 다음 행동을 선택하는 것은 다른 문제였습니다. 분모를 구분하면서 추가 참여를 강요하기보다 받은 결과와 선택 가능한 다음 행동을 연결하는 방향으로 재설계했습니다.',
        '후속 검증에서는 학교 안의 상호 영향을 고려하고, 가능한 경우 배정 기록보다 실제 노출을 측정하며, 참여와 함께 안전 사유 신고를 확인해야 합니다.'
      ]
    },
    visuals: [
      {
        type: 'bar', title: t('Question supply was concentrated in a small part of the catalog', '질문 공급은 일부 문구에 집중됐습니다'),
        description: t('Cumulative share of generated or assigned question records, ordered by phrase frequency.', '문구별 공급 빈도 순으로 집계한 생성·배정 질문조각의 누적 비중입니다.'),
        unit: '%', max: 100, precision: 1,
        rows: [
          { label: t('Top 10% of phrases · 390 phrases', '상위 10% 문구 · 390개'), value: 53.0 },
          { label: t('Top 20% of phrases · 780 phrases', '상위 20% 문구 · 780개'), value: 74.0 }
        ],
        note: t('10 schools; 3,898 normalized phrases. These are nested cumulative shares, not separate groups. Supply records are not verified views.', '10개 학교·정규화 문구 3,898개. 서로 포함되는 누적 비중이며 독립된 집단이 아닙니다. 공급 기록은 실제 열람 횟수와 다릅니다.'),
        source: t('Team presentation · p. 22', '팀 발표자료 · 22쪽'), sourceHref: './assets/viral-to-value-presentation.pdf#page=22'
      },
      {
        type: 'bar', title: t('Semantic repetition increased across cumulative-use groups', '누적 질문조각이 많은 구간에서 의미 반복률이 높았습니다'),
        description: t('Semantic repetition rate by each user’s cumulative question-record range.', '사용자별 누적 질문조각 구간에 따른 의미 반복률입니다.'),
        unit: '%', max: 40, precision: 2,
        rows: [
          { label: t('1–10 records', '1–10개'), value: 0.41 },
          { label: t('11–20 records', '11–20개'), value: 2.33 },
          { label: t('21–50 records', '21–50개'), value: 5.98 },
          { label: t('51–100 records', '51–100개'), value: 12.19 },
          { label: t('101–200 records', '101–200개'), value: 20.50 },
          { label: t('201–500 records', '201–500개'), value: 29.14 },
          { label: t('501+ records', '501개 이상'), value: 34.42 }
        ],
        note: t('10-school content sample. The grouping is based on cumulative assigned/generated records. This does not establish that repetition caused churn or that the same user’s rate rose by the plotted amount over time.', '10개 학교 콘텐츠 표본의 누적 생성·배정 기록 기준 구간입니다. 반복이 이탈을 유발했다거나 동일 사용자의 반복률이 시간에 따라 이 수치만큼 상승했음을 입증한 결과는 아닙니다.'),
        source: t('Team presentation · p. 24', '팀 발표자료 · 24쪽'), sourceHref: './assets/viral-to-value-presentation.pdf#page=24'
      },
      {
        type: 'bar', title: t('Completion and the next start were different transitions', '질문 완료와 완료 후 재시작을 구분했습니다'),
        description: t('Two event-sequence metrics with different denominators—not a retention curve or a continuous funnel.', '분모가 서로 다른 두 이벤트 순서 지표이며, 리텐션 곡선이나 하나의 연속 퍼널이 아닙니다.'),
        unit: '%', max: 100, precision: 2,
        rows: [
          { label: t('Question start → completion', '질문 시작 → 완료'), value: 73.75, note: t('149,038 / 202,072 question-start visits', '질문 시작 방문 202,072건 중 149,038건') },
          { label: t('Completion → another question start in the same visit', '완료 → 같은 방문 내 질문 재시작'), value: 2.12, note: t('3,162 / 149,038 completion visits', '완료 방문 149,038건 중 3,162건') }
        ],
        note: t('Hackle, 18 July–10 August 2023. Completion: 149,038 / 202,072 question-start visits. Subsequent start: 3,162 / 149,038 completion visits. The latter is an event-sequence metric within the same visit, not retention or a restart verified using distinct Question Set IDs.', 'Hackle, 2023.07.18–08.10. 완료율은 질문 시작 방문 202,072건 중 149,038건, 재시작은 완료 방문 149,038건 중 3,162건입니다. 후자는 같은 방문 안의 이벤트 순서 지표이며 리텐션이나 서로 다른 Question Set ID로 확인한 재시작률이 아닙니다.'),
        source: t('Team presentation · p. 26; repository metric definitions', '팀 발표자료 · 26쪽 및 저장소 지표 정의'), sourceHref: './assets/viral-to-value-presentation.pdf#page=26'
      }
    ]
  },
  'shared-office': {
    data: [
      field('Source', '데이터 출처', 'Real-world data from Company B, a shared-office provider, supplied through the bootcamp: trial registration, visits/access, payments, and branches. Company B is an anonymized label; row-level records are not disclosed.', '부트캠프에서 제공받은 B사(공유오피스)의 실제 무료체험 신청·방문·출입·결제·지점 데이터를 활용했습니다. B사는 기업명을 익명 처리한 표기이며, 개인 단위 원본은 공개하지 않습니다.'),
      field('Period', '분석 대상 기간', 'May 2021–January 2024. The conversion change-point comparison uses May 2021–August 2023 versus September–December 2023.', '2021.05–2024.01. 전환 변화점 비교는 2021.05–2023.08과 2023.09–12를 구분했습니다.'),
      field('Population', '분석 규모', '9,624 applicants, 6,026 visitors, and 9 branches. Stay-time comparisons exclude 3 visitors with missing durations where specified.', '신청자 9,624명·방문자 6,026명·9개 지점. 체류시간 비교에서는 명시된 분석에 한해 체류시간 결측 3명을 제외했습니다.'),
      field('Behavior window', '행동 관찰 기준', 'Three-day free trial, D0–D2. Used visits across dates, stay duration, check-ins, time of day, and branch usage; exact payment timestamps were unavailable.', '3일 무료체험의 D0–D2를 기준으로 방문일수·체류시간·체크인·이용 시간대·이용 지점을 구성했습니다. 정확한 결제 시각은 제공되지 않았습니다.'),
      field('External context', '외부 데이터', 'Subway foot traffic and nearby infrastructure within 1 km of each branch; 82 map reviews and 360 blog posts.', '지점 반경 1km의 지하철 유동인구·주변 인프라와 지도 리뷰 82건·블로그 게시글 360건을 연결했습니다.'),
      field('Tools', '사용 도구·환경', 'Python / pandas, logistic regression and D0/D1/D2 landmark comparisons; Tableau for branch exploration.', 'Python·pandas, 로지스틱 회귀와 D0·D1·D2 랜드마크 비교, 지점 탐색용 Tableau 대시보드를 활용했습니다.')
    ],
    reflection: {
      en: [
        'Total stay duration, repeat dates, and visiting multiple branches describe different behaviors. Stratified comparisons helped avoid treating a multi-branch correlation as the mechanism itself.',
        'A branch could be strong in demand acquisition but weak in monetization. Separating location, experience, and conversion made recommendations more useful than a single branch ranking.',
        'The next step is a randomized return-visit intervention with timestamped payments, so a predictive association can be separated from an intervention’s actual effect.'
      ],
      ko: [
        '체류시간 총량, 여러 날짜에 걸친 방문, 다지점 이용은 서로 다른 행동입니다. 층화 비교를 통해 다지점 이용의 단순 상관을 전환 메커니즘으로 해석하지 않도록 했습니다.',
        '한 지점이 수요 확보에서는 강점이 있어도 수익화에서는 병목을 가질 수 있었습니다. 하나의 순위보다 입지·경험·전환을 구분한 진단이 실행 방향을 구체화하는 데 유용했습니다.',
        '후속 검증에서는 결제 시각을 확보하고 재방문 유도 실험을 무작위 배정해, 관찰된 전환 신호와 실제 개입 효과를 구분해야 합니다.'
      ]
    },
    visuals: [
      {
        type: 'bar', title: t('Repeat visits across dates showed a clearer signal than one long stay', '한 번의 긴 체류보다 여러 날짜에 걸친 방문에 주목했습니다'),
        description: t('Observed payment conversion for two explicitly defined behavioral groups.', '행동 기준이 다른 두 집단의 관측 결제 전환율을 비교했습니다.'),
        unit: '%', max: 60, precision: 2,
        rows: [
          { label: t('One visit date · top 30% stay duration', '1일 방문 · 체류시간 상위 30%'), value: 31.36, note: t('At least 8.64 hours', '8.64시간 이상') },
          { label: t('2+ visit dates · bottom 50% stay duration', '2일 이상 방문 · 체류시간 하위 50%'), value: 53.38, note: t('At most 4.06 hours per day', '일평균 4.06시간 이하') }
        ],
        note: t('Observed difference: +22.02 percentage points. The groups differ in both visit pattern and duration. Separately, among single-branch users, payment was 35.05% for one-day users versus 43.43% for repeat-date users. Neither comparison establishes that inducing another visit causes payment.', '관측 격차는 +22.02%p입니다. 두 집단은 방문 패턴과 체류시간 조건이 함께 다릅니다. 별도로 단일 지점 이용자 안에서도 1일만 이용한 사용자의 결제율은 35.05%, 여러 날짜에 걸쳐 이용한 사용자의 결제율은 43.43%로 관찰됐습니다. 어느 비교도 재방문 유도의 인과 효과를 입증하지는 않습니다.'),
        source: t('Team presentation · pp. 14 and 17', '팀 발표자료 · 14·17쪽'), sourceHref: './assets/shared-office-presentation.pdf#page=14'
      },
      {
        type: 'bar', title: t('The conversion signal strengthened after D1', 'D1 행동을 포함하면서 전환 신호가 강화됐습니다'),
        description: t('PR-AUC as cumulative trial behavior was added to the landmark comparison.', '관측 가능한 체험 행동을 누적 추가한 랜드마크 비교의 PR-AUC입니다.'),
        unit: t('PR-AUC', 'PR-AUC'), max: 0.5, precision: 4,
        rows: [
          { label: t('M0 · trial-start information', 'M0 · 체험 시작 시점 정보'), value: 0.3840 },
          { label: t('M1 · through D0', 'M1 · D0 행동까지'), value: 0.3961 },
          { label: t('M2 · through D1', 'M2 · D1 행동까지'), value: 0.4250 },
          { label: t('M3 · through D2', 'M3 · D2 행동까지'), value: 0.4590 }
        ],
        note: t('D0 is the first trial date; D1 and D2 are the following dates. M3 ROC-AUC was 0.5653, so this is evidence about when signals accumulated—not a production-ready individual payment predictor. Exact payment timestamps were unavailable.', 'D0는 체험 첫날, D1·D2는 이후 날짜입니다. M3의 ROC-AUC는 0.5653으로, 개인 결제를 정확히 예측하는 운영 모델이 아니라 신호가 쌓이는 시점을 살펴본 결과입니다. 정확한 결제 시각은 제공되지 않았습니다.'),
        source: t('Team presentation · p. 18', '팀 발표자료 · 18쪽'), sourceHref: './assets/shared-office-presentation.pdf#page=18'
      },
      {
        type: 'table', title: t('Different branch bottlenecks called for different actions', '같은 서비스에서도 지점별 병목을 구분했습니다'),
        description: t('A diagnostic framework integrating location, experience, and observed behavior across nine branches.', '9개 지점의 입지·공간 경험·이용 행동을 연결한 진단 틀입니다.'),
        headers: [t('Bottleneck', '병목 유형'), t('Diagnostic question', '진단 질문'), t('Proposed action', '제안한 우선 조치')],
        rows: [
          [t('Demand capture', '유입 포착'), t('Is actual demand low relative to location potential?', '입지 잠재력에 비해 실제 수요가 낮은가?'), t('Review search visibility, targeting, messaging, and visit routes.', '검색 노출·타깃·메시지·방문 동선을 점검합니다.')],
          [t('Experience monetization', '경험 수익화'), t('Are demand and space experience stronger than payment conversion?', '수요·공간 경험에 비해 결제 전환이 낮은가?'), t('Prioritize D1 rebooking, product guidance, and payment CTA tests.', 'D1 재방문 예약·상품 안내·결제 CTA를 우선 검증합니다.')],
          [t('Timing mismatch', '시간대 불일치'), t('Do local weekday/weekend flows match trial demand?', '상권의 평일·주말 유동 패턴과 체험 수요가 맞는가?'), t('Adapt campaigns and operating hours to local demand timing.', '지역 수요가 움직이는 시점에 캠페인·운영 시간을 맞춥니다.')]
        ],
        note: t('Diagnostic categories and proposed priorities, not measured intervention results. Location and review signals are branch context, not each visitor’s directly measured experience.', '병목을 구분한 진단과 우선순위 제안이며 실행 효과를 측정한 결과는 아닙니다. 입지·리뷰는 지점의 맥락으로, 개별 방문자의 경험을 직접 측정한 값과 구분합니다.'),
        source: t('Team presentation · p. 27', '팀 발표자료 · 27쪽'), sourceHref: './assets/shared-office-presentation.pdf#page=27'
      }
    ]
  },
  subscription: {
    data: [
      field('Source', '데이터 출처', 'Real-world data and analytical marts from Company C, a subscription-education provider, supplied through the bootcamp. Company C is an anonymized label; row-level user records are not disclosed.', '부트캠프에서 제공받은 C사(구독형 교육 서비스)의 실제 데이터·분석 마트를 활용했습니다. C사는 기업명을 익명 처리한 표기이며, 개인 단위 원본은 공개하지 않습니다.'),
      field('Signup cohorts', '가입 코호트·규모', '73,598 users: 27,543 before trial removal (May–November 2022) and 46,055 after removal (May–November 2023).', '가입자 73,598명: 무료체험 폐지 전 2022.05–11의 27,543명과 폐지 후 2023.05–11의 46,055명입니다.'),
      field('First-payment definition', '첫 결제 분석 기준', 'Lesson-completion events within the first seven days of signup and before the first payment; outcome is first payment within 30 days of signup.', '가입 후 7일 범위 중 첫 결제 이전의 레슨 완료 이벤트를 기준으로, 가입 후 30일 내 첫 결제와의 관계를 분석했습니다.'),
      field('Renewal population', '갱신 분석 모집단', '3,323 post-removal users with 60 days of observable follow-up: 905 low-activity, 1,234 active, and 1,184 highly active users.', '무료체험 폐지 후 60일 관찰이 가능한 3,323명: 저활동 905명·활동 1,234명·고활동 1,184명입니다.'),
      field('Definition checks', '집계·해석 범위', 'Content experience can include post-payment behavior within the seven-day window. The supplied activity-day field reaches 32 days, so its exact aggregation boundary remains to be verified.', '콘텐츠 경험에는 가입 후 7일 중 결제 이후 행동이 포함될 수 있습니다. 제공된 활동일수 필드의 최댓값은 32일로, 정확한 집계 경계는 추가 확인이 필요합니다.'),
      field('Tools', '사용 도구·환경', 'Python / pandas / NumPy, SQL, statsmodels, Matplotlib / Seaborn / Plotly; Google Colab and Jupyter Notebook.', 'Python·pandas·NumPy, SQL, statsmodels, Matplotlib·Seaborn·Plotly와 Google Colab·Jupyter Notebook을 활용했습니다.')
    ],
    reflection: {
      en: [
        'Users with no completed lesson were not one homogeneous group: content exploration distinguished two very different observed conversion patterns. Definitions were more useful than a single “inactive” label.',
        'Renewal rates depended on cohort and follow-up eligibility. Restricting the comparison to post-removal users with 60 days of observable follow-up kept denominators consistent.',
        'For a follow-up onboarding test, assign users at signup and measure the eligible population’s baseline before setting the minimum detectable effect; do not select the experiment using behavior observed after assignment.'
      ],
      ko: [
        '레슨 완료가 없는 사용자를 하나의 비활성 집단으로 묶기 어려웠습니다. 콘텐츠 경험 여부에 따라 관측 전환 패턴이 달라, 단순한 이름보다 행동 기준을 명확히 정의하는 것이 중요했습니다.',
        '가입 코호트와 관찰 가능 조건에 따라 갱신율이 달라졌습니다. 무료체험 폐지 후 60일 관찰 가능한 모집단으로 분모를 통일해 비교했습니다.',
        '온보딩 후속 실험은 가입 시점에 배정하고 대상 모집단의 기준율을 먼저 측정한 뒤 최소검출효과를 정해야 합니다. 배정 이후 관측한 행동으로 실험 대상을 선정하지 않도록 설계해야 합니다.'
      ]
    },
    visuals: [
      {
        type: 'bar', title: t('More signups did not translate into a higher first-payment rate', '가입자 증가가 첫 결제율 상승으로 이어지지는 않았습니다'),
        description: t('First payment within 30 days of signup, before and after removal of the free trial.', '무료체험 폐지 전후 가입 코호트의 가입 후 30일 내 첫 결제율입니다.'),
        unit: '%', max: 20, precision: 2,
        rows: [
          { label: t('Before removal · May–November 2022', '폐지 전 · 2022.05–11'), value: 10.07, note: t('2,773 / 27,543 users', '27,543명 중 2,773명') },
          { label: t('After removal · May–November 2023', '폐지 후 · 2023.05–11'), value: 6.05, note: t('2,788 / 46,055 users', '46,055명 중 2,788명') }
        ],
        note: t('Separate signup cohorts: 2,773/27,543 before versus 2,788/46,055 after. Channel, user mix, and policy changes were not controlled, so the difference is not the causal effect of removing the trial.', '서로 다른 가입 코호트로, 폐지 전 2,773/27,543명과 폐지 후 2,788/46,055명입니다. 채널·유저 구성·정책 변화를 통제하지 않았으므로 차이를 무료체험 폐지의 인과 효과로 해석하지 않습니다.'),
        source: t('Reviewed metric aggregation · activation_cohorts', '후속 수치 검토 · activation_cohorts'), sourceHref: 'https://github.com/lucyjeehyeon/subscription-conversion-retention-analysis/blob/main/results/key_metrics.json'
      },
      {
        type: 'table', title: t('Four early-learning segments connected behavior to action', '초기 학습 행동을 네 가지 세그먼트로 구분했습니다'),
        description: t('Post-removal cohort, n = 46,055. Seven completions is an exploratory activation candidate, not a proven causal threshold.', '무료체험 폐지 후 가입자 46,055명. 7회 완료는 탐색적 활성화 후보이며 인과적으로 검증한 기준이 아닙니다.'),
        headers: [t('Segment', '세그먼트'), t('Behavior definition', '행동 기준'), t('Users', '유저 수'), t('First-payment rate', '첫 결제율')],
        rows: [
          [t('Inactive', '무행동형'), t('No content experience · 0 lesson completions', '콘텐츠 경험 없음 · 레슨 완료 0회'), t('21,137', '21,137명'), t('1.08%', '1.08%')],
          [t('Explorer', '탐색형'), t('Content experience · 0 lesson completions', '콘텐츠 경험 있음 · 레슨 완료 0회'), t('12,419', '12,419명'), t('10.98%', '10.98%')],
          [t('Weak learner', '약한 학습형'), t('1–6 lesson completions', '레슨 완료 1–6회'), t('6,973', '6,973명'), t('3.37%', '3.37%')],
          [t('Strong learner', '강한 학습형'), t('7+ lesson completions', '레슨 완료 7회 이상'), t('5,526', '5,526명'), t('17.41%', '17.41%')]
        ],
        note: t('Lesson completion counts are events within the first seven days of signup and before first payment. Content experience uses browsing/view/start behavior and may include post-payment activity within that window. Outcome: first payment within 30 days. Rates are observed associations, not expected uplift from moving users between groups.', '레슨 완료는 가입 후 7일 범위 중 첫 결제 이전의 완료 이벤트 수입니다. 콘텐츠 경험은 탐색·조회·시작 여부이며 같은 7일 안의 결제 이후 행동이 포함될 수 있습니다. 결과 지표는 30일 내 첫 결제입니다. 집단 간 차이는 사용자를 이동시켰을 때의 개선 효과가 아니라 관찰된 연관입니다.'),
        source: t('Team presentation · pp. 11–12; reviewed segment aggregation', '팀 발표자료 · 11–12쪽 및 후속 세그먼트 재집계'), sourceHref: 'https://github.com/lucyjeehyeon/subscription-conversion-retention-analysis/blob/main/results/key_metrics.json'
      },
      {
        type: 'bar', title: t('Renewal differed across learning-activity-day groups', '학습 활동일수 구간에 따라 갱신율이 달랐습니다'),
        description: t('Reviewed 60-day renewal rates among post-removal users with sufficient observable follow-up.', '무료체험 폐지 후 60일 관찰 가능 조건으로 통일해 재집계한 갱신율입니다.'),
        unit: '%', max: 100, precision: 2,
        rows: [
          { label: t('0–4 activity days', '활동일수 0–4일'), value: 48.62, note: t('440 / 905 users', '905명 중 440명') },
          { label: t('5–13 activity days', '활동일수 5–13일'), value: 59.72, note: t('737 / 1,234 users', '1,234명 중 737명') },
          { label: t('14+ activity days', '활동일수 14일 이상'), value: 64.10, note: t('759 / 1,184 users', '1,184명 중 759명') }
        ],
        note: t('n = 3,323. Denominators: 440/905, 737/1,234, 759/1,184. These reviewed figures supersede the mixed populations shown in the original PDF; they were reaggregated from supplied marts, not reconstructed from raw logs. The activity-day field reaches 32 days; exact window and plan-specific renewal rules still need verification. Association is not causal.', '총 3,323명, 각 집단은 440/905명·737/1,234명·759/1,184명입니다. 원본 PDF의 혼재된 모집단 대신 후속 검토에서 제공 마트를 재집계한 수치를 사용했으며 원시 로그에서 마트를 재구축한 결과는 아닙니다. 활동일수는 최대 32일로, 정확한 경계와 플랜별 갱신 정의는 추가 확인이 필요합니다. 인과 효과가 아닌 관측 연관입니다.'),
        source: t('Reviewed metrics · post_removal_observable_60d', '후속 수치 검토 · 폐지 후·60일 관찰 가능 조건'), sourceHref: 'https://github.com/lucyjeehyeon/subscription-conversion-retention-analysis/blob/main/results/key_metrics.json'
      }
    ]
  },
  subway: {
    data: [
      field('Source', '데이터 출처', 'Public records from Seoul Metro, Seoul Open Data Plaza, the Public Data Portal, and the Korea Meteorological Administration.', '서울교통공사·서울 열린데이터광장·공공데이터포털·기상청의 공공데이터를 활용했습니다.'),
      field('Period and scale', '기간·규모', '2,281 recorded safety accidents from January 2021 through June 2025.', '2021.01–2025.06에 발생한 안전사고 2,281건을 분석했습니다.'),
      field('Integrated context', '결합 데이터', 'Ridership and congestion, station area and construction year, elevators/escalators, screen doors, platform geometry/gaps, and rainfall.', '승하차 인원·혼잡도, 역사 면적·준공연도, 승강설비·안전문, 승강장 선형·연단 간격, 강수를 결합했습니다.'),
      field('Join and units', '결합 기준·분석 단위', 'Standardized station names; station/time joins for ridership and accident-date joins for weather. Kept raw counts, station summaries, and hourly density distinct.', '역명을 표준화하고 이용량은 역·시간대, 기상은 사고 발생일 기준으로 연결했습니다. 단순 건수·역별 집계·시간당 밀도를 구분했습니다.'),
      field('Analytical scope', '분석 범위', '12 hypotheses across four domains: on-board, in-station, door/platform-gap, and escalator/elevator accidents.', '열차 내·역 구내·출입문·발빠짐·승강설비를 4개 분석 영역으로 묶어 12개 가설을 검토했습니다.'),
      field('Tools', '사용 도구·환경', 'Python / pandas / NumPy for preprocessing and EDA; correlation and hypothesis comparisons; Tableau dashboard.', 'Python·pandas·NumPy로 전처리·EDA를 수행하고 상관관계·가설 비교와 Tableau 대시보드를 활용했습니다.')
    ],
    reflection: {
      en: [
        'Accident counts and passenger-level risk answer different questions. A heavily used station can have more events without demonstrating a higher risk per passenger; consistent exposure denominators remain important.',
        'Station age, size, equipment counts, and passenger volume overlap. The equipment analysis supported a multi-factor inspection framework, not a single-variable causal explanation.',
        'A follow-up analysis should resolve accident-location-level exposure and evaluate outcomes after a specific safety intervention, rather than infer preventive effectiveness from historical patterns alone.'
      ],
      ko: [
        '사고 건수와 승객 1인당 위험은 다른 질문입니다. 이용객이 많은 역의 사고가 많다는 사실만으로 개인별 위험이 더 높다고 판단할 수 없어, 일관된 노출 분모가 중요했습니다.',
        '노후도·역사 규모·설비 수·이용량은 서로 연결되어 있었습니다. 승강설비 분석은 단일 원인을 확정하기보다 여러 조건을 함께 보는 점검 체계의 필요성을 보여줬습니다.',
        '후속 분석에서는 실제 사고 지점의 이용 노출을 보완하고, 구체적인 안전 조치 적용 이후의 변화를 평가해야 합니다. 과거 패턴만으로 예방 효과를 확정하지 않습니다.'
      ]
    },
    visuals: [
      {
        type: 'bar', title: t('Different accident types required separate analytical questions', '사고 유형별로 분석 질문을 구분했습니다'),
        description: t('Recorded accidents from January 2021 through June 2025; total n = 2,281.', '2021.01–2025.06의 기록 사고 총 2,281건입니다.'),
        unit: t('accidents', '건'), max: 800, precision: 0,
        rows: [
          { label: t('Door-related', '출입문 관련'), value: 771 },
          { label: t('In-station', '역 구내 사고'), value: 518 },
          { label: t('On-board', '열차 내 사고'), value: 423 },
          { label: t('Platform-gap', '발빠짐'), value: 341 },
          { label: t('Escalator/elevator-related', '승강설비 관련'), value: 207 },
          { label: t('Other', '기타'), value: 21 }
        ],
        note: t('Counts sum to 2,281. These are recorded event counts, not exposure-adjusted rates or a comparison of risk per passenger.', '합계 2,281건. 기록된 사고 건수로, 이용량을 보정한 사고율이나 승객 1인당 위험 비교가 아닙니다.'),
        source: t('Project repository · Accident Overview', '프로젝트 저장소 · 사고 유형별 현황'), sourceHref: 'https://github.com/lucyjeehyeon/seoul-subway-safety-analysis#accident-overview'
      },
      {
        type: 'bar', title: t('Equipment accidents showed no single dominant correlation', '승강설비 사고는 여러 조건을 함께 살펴봤습니다'),
        description: t('Reported station-level correlations with escalator/elevator accident counts.', '역별 승강설비 사고 건수와 각 변수의 보고된 상관계수입니다.'),
        unit: t('correlation coefficient', '상관계수'), max: 1, precision: 2,
        rows: [
          { label: t('Elevator/escalator count', '승강기 개수'), value: 0.31 },
          { label: t('Daily passenger count', '일간 총승객'), value: 0.20 },
          { label: t('Station area', '역사 면적'), value: 0.18 },
          { label: t('Station age', '역사 노후도'), value: 0.10 }
        ],
        note: t('Rounded coefficients from the original correlation matrix. Station area and equipment count themselves correlated at 0.72. These are unadjusted associations, not independent effects; a low overall coefficient can coexist with nonlinear patterns and a small number of high-accident stations.', '원본 상관계수 행렬의 소수 둘째 자리 값입니다. 역사 면적과 승강기 개수 사이의 상관계수는 0.72였습니다. 보정되지 않은 연관이며 독립적인 효과가 아닙니다. 전체 상관이 낮더라도 비선형 패턴이나 일부 다발 역의 집중은 별도로 살펴봐야 합니다.'),
        source: t('Team presentation · p. 43', '팀 발표자료 · 43쪽'), sourceHref: './assets/subway-presentation.pdf#page=43'
      }
    ]
  }
};

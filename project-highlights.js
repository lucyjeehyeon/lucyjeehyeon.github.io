// Curated reading path, not a chronological sort or a replacement for the archive.
// Ownership: content.js roles and approaches. Metric scope: evidence-product.js.
// Actions remain proposals; none of these summaries claims measured rollout impact.
const text = (en, ko) => ({ en, ko });

export const featuredProjectIds = [
  'viral-to-value',
  'shared-office',
  'subscription',
];

export const projectHighlights = {
  'viral-to-value': {
    contribution: text(
      'I led the overall analysis and separated user, question, and visit units. I analyzed content supply, semantic repetition, and post-completion behavior to establish the basis for the service redesign.',
      '분석 전반을 총괄하며 사용자·질문·방문의 분석 단위를 구분했습니다. 콘텐츠 공급·의미 반복과 완료 이후 행동을 분석해 서비스 재설계의 근거를 정리했습니다.'
    ),
    evidence: text(
      'Across the 10-school content sample, the top 10% of phrases accounted for 53.0% of generated or assigned question records. A subsequent question-start event appeared in 2.12% of completion visits within the same visit—not a retention measure.',
      '10개 학교에서 상위 10% 문구가 생성·배정 질문 기록의 53.0%를 차지했습니다. 완료 방문의 2.12%에서 같은 방문 내 후속 질문 시작 이벤트가 관측됐으며, 리텐션과는 다릅니다.'
    ),
    action: text(
      'Proposed semantic-repeat controls, exposure intervals, and optional access to received results after completion. Their effects remain to be tested.',
      '의미 중복·재노출 간격을 조정하고 완료 후 받은 결과를 확인하는 흐름을 제안했습니다. 효과는 후속 실험으로 검증할 과제입니다.'
    ),
    home: text(
      'Using real-world teen social-app logs from Company H, I separated question supply from the individual experience and connected content and post-completion analysis to the service redesign.',
      'H사의 실제 청소년 SNS 로그에서 질문 공급량과 개인의 경험을 구분하고, 콘텐츠·완료 이후 행동 분석을 서비스 재설계로 연결했습니다.'
    ),
    homeEvidence: text(
      'A subsequent question-start event appeared in 2.12% of completion visits within the same visit.',
      '완료 방문 중 같은 방문 내 후속 질문 시작 이벤트가 관측된 비율은 2.12%였습니다.'
    ),
  },
  'shared-office': {
    contribution: text(
      'I distinguished stay duration from repeat visits and modeled cumulative D0/D1/D2 behavior to locate conversion signals. I combined branch-level behavior with external context to diagnose acquisition, experience, and conversion bottlenecks.',
      '체류시간과 반복 방문을 구분하고 D0·D1·D2 누적 행동으로 전환 신호의 시점을 분석했습니다. 지점별 행동·외부 환경을 결합해 유입·경험·전환 병목을 진단했습니다.'
    ),
    evidence: text(
      'Among single-branch users, repeat-date visitors had an 8.38 percentage-point higher observed payment rate than one-day visitors; the conversion signal strengthened when D1 behavior was included. Neither establishes the causal effect of inducing another visit.',
      '단일 지점 이용자에서 여러 날짜 방문자의 결제율이 1일 방문자보다 8.38%p 높게 관측됐고, D1 행동을 포함하면서 전환 신호가 강화됐습니다. 재방문 유도의 인과 효과를 확인한 결과는 아닙니다.'
    ),
    action: text(
      'Proposed testing D1 rebooking with a reward after the return visit, and setting branch-specific priorities for acquisition, onboarding, and operating reviews.',
      'D1 재방문 예약과 방문 후 보상을 결합한 실험을 제안했습니다. 지점별 병목에 맞춰 유입·온보딩·운영 점검의 우선순위를 구분했습니다.'
    ),
    home: text(
      'Using real-world shared-office visit and payment logs from Company J, I distinguished long stays from repeat visits to examine conversion signals, branch bottlenecks, and a candidate intervention time.',
      'J사의 실제 공유오피스 방문·결제 로그에서 긴 체류와 반복 방문을 구분해 전환 신호를 분석하고, 지점별 병목과 개입 후보 시점을 진단했습니다.'
    ),
    homeEvidence: text(
      'Among single-branch users, repeat-date visitors had an 8.38 percentage-point higher observed payment rate than one-day visitors.',
      '단일 지점 이용자에서 반복 방문 집단의 관측 결제율은 1일 방문 집단보다 8.38%p 높았습니다.'
    ),
  },
  subscription: {
    contribution: text(
      'I built first-seven-day analytical tables and analyzed the early-learning funnel. I separated users with no completed lessons by content experience, examined an activation candidate, and assessed content-improvement priorities.',
      '가입 후 7일 분석 테이블을 구축하고 초기 학습 퍼널을 분석했습니다. 레슨 완료가 없는 사용자도 콘텐츠 경험에 따라 구분하고, 활성화 후보와 콘텐츠 개선 우선순위를 검토했습니다.'
    ),
    evidence: text(
      'In the post-trial-removal cohort, users with 7+ pre-payment lesson completions in their first seven days had an observed 30-day first-payment rate of 17.41%, versus 3.37% for 1–6. This informed an exploratory activation candidate, not a causal target.',
      '무료체험 폐지 후 가입자의 첫 7일 중 결제 전 레슨 완료가 7회 이상인 집단의 30일 내 첫 결제율은 17.41%, 1–6회 집단은 3.37%였습니다. 관찰 비교에 따른 활성화 후보이며 인과 효과는 검증 전입니다.'
    ),
    action: text(
      'Proposed follow-up tests of first-content access for inactive users and next-action guidance for weak learners. Conversion and renewal effects have not been validated.',
      '무행동형의 첫 콘텐츠 진입과 약한 학습형의 다음 행동 안내를 후속 실험으로 제안했습니다. 전환·갱신 개선은 검증 전입니다.'
    ),
    home: text(
      'Using real-world subscription-education data from Company C, I defined the first-seven-day learning funnel and behavioral segments, then assessed an activation candidate and content-improvement priorities.',
      'C사의 실제 구독형 교육 서비스 데이터로 가입 첫 7일 학습 퍼널과 행동 세그먼트를 정의하고, 활성화 후보·콘텐츠 개선 우선순위를 검토했습니다.'
    ),
    homeEvidence: text(
      'In the post-trial-removal cohort, the observed 30-day first-payment rate was 17.41% for 7+ pre-payment lesson completions in the first seven days, versus 3.37% for 1–6.',
      '무료체험 폐지 후 가입자에서 첫 7일의 결제 전 레슨 완료 7회 이상 집단은 30일 내 첫 결제율 17.41%, 1–6회 집단은 3.37%로 관측됐습니다.'
    ),
  },
};

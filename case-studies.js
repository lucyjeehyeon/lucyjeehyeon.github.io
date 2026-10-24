import { productEvidence } from './evidence-product.js?v=20261025-company-labels';
import { otherEvidence } from './evidence-other.js';
import { cloudEvidence } from './sprint-cloud.js';
import { sprintProductEvidence } from './sprint-product.js';
import { forecastEvidence } from './sprint-forecast.js';

const text = (en, ko) => ({ en, ko });
const summaries = {
  'viral-to-value': text('Analyzed teen social-app logs to redesign the question experience and the flow after completion.', '청소년 SNS 로그를 분석해 질문 경험과 완료 이후의 서비스 흐름을 재설계했습니다.'),
  'shared-office': text('Examined repeat visits and payment conversion in free-trial logs and proposed branch-specific interventions.', '무료체험 로그에서 반복 방문과 결제 전환의 관계를 검토하고 지점별 개입 방향을 제안했습니다.'),
  subscription: text('Analyzed early learning and renewal behavior to propose onboarding experiments for behavioral segments.', '초기 학습과 구독 갱신 행동을 분석해 행동 세그먼트별 온보딩 실험을 제안했습니다.'),
  subway: text('Integrated public subway data to examine accident patterns and propose safety improvements.', '서울 지하철 공공데이터를 통합해 사고 패턴을 진단하고 안전 개선 방향을 제안했습니다.'),
  toxmod: text('Reviewed consent, fairness, and appeals in game voice-moderation AI through published evidence.', '공개 문헌을 기반으로 게임 음성 모더레이션 AI의 동의·공정성·이의제기 체계를 평가했습니다.'),
  steam: text('Built an Orange3 workflow to classify games in the top quartile by download count.', 'Steam 게임의 다운로드 상위 25% 여부를 분류하는 Orange3 분석 워크플로를 구축했습니다.'),
  pothole: text('Studied pothole risk factors using integrated road, traffic, and weather data; published in the 2025 KICS Winter Conference proceedings.', '도로·교통·기상 데이터 기반 포트홀 발생 요인 연구로, 2025 한국통신학회 동계종합학술발표회 논문집에 게재됐습니다.'),
  kida: text('Co-developed a Kotlin and SQLite Android app connecting challenges with date-based task management.', '챌린지와 날짜별 할 일 관리를 연결한 Kotlin·SQLite 기반 Android 앱을 공동 개발했습니다.'),
  watcha: text('A team study of 97 survey responses examining WATCHA awareness and customer-acquisition directions.', '설문 97건을 활용해 왓챠 이용자 인식과 신규 이용자 확보 전략을 검토한 팀 연구입니다.'),
  'voice-phishing': text('Collected and cleaned case documents and video metadata to explore Korean-language phishing patterns.', '보이스피싱 사례 문서와 영상 메타데이터를 수집·전처리해 한국어 텍스트 패턴을 탐색했습니다.'),
  ficord: text('Planned an app concept and user flow to reduce friction when reporting suspected voice phishing.', '보이스피싱 신고 과정의 불편을 줄이기 위한 앱 서비스 아이디어와 이용 흐름을 기획했습니다.'),
};

export const caseStudies = Object.fromEntries(
  Object.entries({ ...productEvidence, ...otherEvidence, ...cloudEvidence, ...sprintProductEvidence, ...forecastEvidence }).map(([id, evidence]) => [id, { ...evidence, oneLine: summaries[id] ?? evidence.oneLine }])
);

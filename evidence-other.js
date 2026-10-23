// Native case-study evidence, reconstructed from the supplied project records.
// Qualitative matrices are not performance scores; quantitative values retain their source definitions.
const t = (en, ko) => ({ en, ko });
const datum = (enLabel, koLabel, enValue, koValue) => ({ label: t(enLabel, koLabel), value: t(enValue, koValue) });

export const otherEvidence = {
  toxmod: {
    data: [
      datum('Sources', '자료 출처', 'Official policies, FAQs, technical documents, academic literature and guidelines', '공식 정책·FAQ·기술 문서·학술 연구·가이드라인'),
      datum('Scope', '평가 범위', 'Document-based qualitative assessment · 20-page team report', '문헌 기반 정성 평가 · 팀 보고서 20쪽'),
      datum('Period', '프로젝트 시기', 'September–December 2025', '2025.09–12'),
      datum('Method', '검토 방법', 'Stakeholder analysis and principle-based document review; no direct model testing', '이해관계자 분석·윤리 원칙별 문헌 검토 · 모델 직접 실험 없음')
    ],
    reflection: {
      en: [
        'A vendor’s description of safeguards is evidence of its stated policy, not independent confirmation that the safeguard works. The assessment needs to keep these levels of evidence separate.',
        'Recommendations become more useful when translated into reviewable criteria: what is disclosed, who reviews a sanction, and how a user can challenge it.'
      ],
      ko: [
        '기업이 공개한 보호 조치는 정책의 존재를 보여주는 자료이며, 실제 작동 효과를 독립적으로 검증한 결과와는 구분해야 합니다.',
        '개선안을 정보 공개 항목, 제재 검토 주체, 이의제기 절차처럼 확인 가능한 기준으로 구체화해야 후속 평가에 활용할 수 있습니다.'
      ]
    },
    visuals: [
      {
        type: 'table',
        title: t('From ethical principles to review questions', '윤리 원칙을 운영 점검 질문으로 전환'),
        description: t('Issues and proposed improvements under the report’s three assessment principles.', '보고서의 세 가지 평가 원칙에 따른 쟁점과 개선 방향입니다.'),
        headers: [t('Principle', '평가 원칙'), t('Question examined', '검토한 쟁점'), t('Proposed direction', '개선 방향')],
        rows: [
          [t('Privacy & data governance', '프라이버시·데이터 거버넌스'), t('Voice-data consent, children’s protection, retention and deletion', '음성 데이터 동의·아동 보호·보관 및 삭제 기준'), t('Separate and clear consent; disclose data-management rules', '명확한 별도 동의와 데이터 관리 기준 공개')],
          [t('Fairness', '공정성'), t('Accent, language and context may affect errors and sanctions', '억양·언어·발화 맥락에 따른 오탐·제재 위험'), t('Review group-level error risks and preserve human review', '집단별 오류 위험 점검과 인간 검토 절차 마련')],
          [t('Transparency', '투명성'), t('Can users understand and challenge a sanction?', '이용자가 제재 사유를 이해하고 이의를 제기할 수 있는가'), t('Explain specific reasons and provide a meaningful appeal route', '구체적인 제재 사유와 실질적인 이의제기 경로 제공')]
        ],
        note: t('A qualitative assessment framework, not measured group-level error rates or a current compliance audit.', '정성적 평가 틀이며, 실제 집단별 오류율 측정이나 현재 법규 준수 감사 결과가 아닙니다.'),
        source: t('team ethics impact assessment report, sections III–V, December 2025.', '팀 윤리 영향 평가 보고서 III–V장 · 2025.12.')
      }
    ]
  },
  steam: {
    data: [
      datum('Source', '데이터 출처', 'Kaggle · Best-Selling Steam Games of All Time', 'Kaggle · Best-Selling Steam Games of All Time'),
      datum('Scale', '데이터 규모', '2,380 games · 7 selected predictor variables', '게임 2,380개 · 주요 설명 변수 7개'),
      datum('Target', '분석 타깃', 'top_downloaded: top 25% by download count in the dataset', 'top_downloaded: 데이터 내 다운로드 수 상위 25% 여부'),
      datum('Period', '프로젝트 시기', 'March–June 2025 · individual course project', '2025.03–06 · 개인 수업 프로젝트'),
      datum('Tools', '사용 도구', 'Orange3 · Logistic Regression · Decision Tree', 'Orange3 · 로지스틱 회귀 · 의사결정나무')
    ],
    reflection: {
      en: [
        'Performance metrics and the confusion matrix need to use the same evaluation dataset and configuration. The report’s accuracy discrepancy must be resolved before a headline score can be used.',
        'Reviews and ratings may be available only after release. Models based on existing games need feature-timing checks and a separate validation design before they can support pre-launch decisions.'
      ],
      ko: [
        '성능 수치와 혼동행렬이 같은 평가 데이터와 설정에서 산출됐는지 확인해야 합니다. 원문의 정확도와 혼동행렬이 일치하지 않아 대표 성능 수치를 사용하기 전에 평가 조건을 재확인할 필요가 있습니다.',
        '리뷰·평점은 출시 후에 형성될 수 있습니다. 이 변수를 출시 전 의사결정에 활용하려면 관측 시점과 검증 설계를 별도로 점검해야 합니다.'
      ]
    },
    visuals: [
      {
        type: 'flow', title: t('The Orange3 classification workflow', 'Orange3 분류 워크플로'),
        steps: [
          { label: t('Define the label', '타깃 정의'), detail: t('Download-count top quartile → top_downloaded', '다운로드 수 상위 25% → top_downloaded') },
          { label: t('Select attributes', '속성 선택'), detail: t('Price, reviews, ratings, difficulty, age restriction and other selected attributes', '가격·리뷰·평점·난이도·연령 제한 등 주요 속성') },
          { label: t('Compare models', '모델 비교'), detail: t('Logistic Regression and Decision Tree → Test & Score', '로지스틱 회귀·의사결정나무 → Test & Score') },
          { label: t('Inspect results', '평가 확인'), detail: t('Confusion Matrix and ROC Curve', '혼동행렬·ROC 곡선 확인') }
        ],
        note: t('The course project’s analysis pipeline, not a deployed recommendation or forecasting system.', '수업 프로젝트의 분석 절차이며, 운영 중인 추천·예측 시스템은 아닙니다.'),
        source: t('individual data-analysis project report, steps 2–4.', '개인 데이터 분석 프로젝트 보고서 STEP 2–4.')
      },
      {
        type: 'table', title: t('Decision Tree · reported confusion matrix', '의사결정나무 · 원본 혼동행렬'),
        headers: [t('Actual class', '실제 분류'), t('Predicted 0 · outside top quartile', '예측 0 · 상위 25% 외'), t('Predicted 1 · top quartile', '예측 1 · 상위 25%')],
        rows: [
          [t('0 · outside top quartile', '0 · 상위 25% 외'), t('477 · true negatives', '477 · TN'), t('52 · false positives', '52 · FP')],
          [t('1 · top quartile', '1 · 상위 25%'), t('22 · false negatives', '22 · FN'), t('163 · true positives', '163 · TP')]
        ],
        note: t('The four cells total 714 cases and imply 89.64% accuracy: (477 + 163) / 714. The report text states approximately 86%, so the evaluation setting needs reconciliation. The separate ROC figure reports AUC 0.96.', '4개 셀의 합은 714건이며 계산상 정확도는 (477 + 163) / 714 = 89.64%입니다. 보고서 본문의 약 86%와 차이가 있어 평가 설정의 재확인이 필요합니다. 별도 ROC 그림에는 AUC 0.96이 표기되어 있습니다.'),
        source: t('individual data-analysis project report, attached Decision Tree confusion matrix and ROC figure.', '개인 데이터 분석 프로젝트 보고서의 의사결정나무 혼동행렬·ROC 그림.')
      }
    ]
  },
  pothole: {
    data: [
      datum('Sources', '데이터 출처', 'Seoul pothole records, road networks, traffic, bus operations and weather data', '서울시 포트홀·도로 네트워크·교통량·버스 운행·기상 공공 데이터'),
      datum('Scale', '통합 규모', '333,858 records · 37 variables', '333,858건 · 37개 변수'),
      datum('Observation window', '관찰 기간', 'December 2022–January 2024', '2022.12–2024.01'),
      datum('Analysis unit', '분석 단위', 'Road-link and month-level records · binary label for pothole occurrence', '도로 링크·월 단위 기록 · 포트홀 발생 여부 이진 타깃'),
      datum('Tools', '사용 도구', 'GIS · SHP spatial data · Python · XGBoost · LightGBM · CatBoost · GridSearchCV', 'GIS · SHP 공간자료 · Python · XGBoost · LightGBM · CatBoost · GridSearchCV')
    ],
    reflection: {
      en: [
        'Matching records to a common road link and month was as important as selecting a model: the prediction target and every explanatory variable need consistent spatial and temporal units.',
        'The three models had similar accuracy. Model selection should consider the precision–recall trade-off for the pothole class and operating costs. Validation at real occurrence rates is needed before practical use.'
      ],
      ko: [
        '모델 선택만큼 도로 링크와 월 단위의 일관된 결합이 중요합니다. 타깃과 설명 변수가 같은 공간·시간 단위에서 정의되는지 먼저 확인해야 합니다.',
        '세 모델의 정확도는 유사했습니다. 포트홀 발생 클래스의 정밀도·재현율 균형과 운영 비용을 함께 고려해 모델을 선택하고, 실제 발생 비율에서 추가로 검증해야 합니다.'
      ]
    },
    visuals: [
      {
        type: 'bar', title: t('Pothole-class F1 across tree-based models', '트리 기반 모델별 포트홀 발생 클래스 F1'),
        description: t('Class 1 performance from the published paper. All three models report 0.78 accuracy.', '게재 논문에 수록된 발생 클래스(Class 1) 평가 결과입니다. 세 모델의 정확도는 모두 0.78입니다.'),
        unit: t('F1 · 0–1', 'F1 · 0–1'), max: 1, precision: 2,
        rows: [
          { label: t('XGBoost', 'XGBoost'), value: 0.80 },
          { label: t('LightGBM', 'LightGBM'), value: 0.81 },
          { label: t('CatBoost', 'CatBoost'), value: 0.80 }
        ],
        note: t('The paper used 1:1 undersampling and an 80:20 train/test split. These results do not directly estimate performance under the real-world prevalence of potholes.', '논문은 1:1 언더샘플링과 학습·평가 8:2 분할을 적용했습니다. 실제 포트홀 발생 비율에서의 성능을 직접 추정한 수치는 아닙니다.'),
        source: t('2025 KICS Winter Conference paper, p. 1016, Table 2.', '2025 한국통신학회 동계종합학술발표회 논문집 1016쪽 · 표 2.'),
        sourceHref: './assets/pothole-paper.pdf#page=2'
      },
      {
        type: 'table', title: t('Compare the trade-offs, not just accuracy', '정확도 외의 성능 균형 비교'),
        headers: [t('Model', '모델'), t('Class 1 precision', '발생 정밀도'), t('Class 1 recall', '발생 재현율'), t('ROC-AUC', 'ROC-AUC')],
        rows: [
          [t('XGBoost', 'XGBoost'), t('0.73', '0.73'), t('0.89', '0.89'), t('0.86', '0.86')],
          [t('LightGBM', 'LightGBM'), t('0.73', '0.73'), t('0.90', '0.90'), t('0.84', '0.84')],
          [t('CatBoost', 'CatBoost'), t('0.73', '0.73'), t('0.90', '0.90'), t('0.86', '0.86')]
        ],
        note: t('LightGBM has the highest reported class-1 F1 (0.81); XGBoost and CatBoost have higher reported AUC (0.86). Feature importance indicates model contribution, not a causal effect.', 'LightGBM의 발생 클래스 F1(0.81)이 가장 높고, AUC는 XGBoost·CatBoost(0.86)가 더 높습니다. 변수 중요도는 모델 내 기여도이며 인과 효과가 아닙니다.'),
        source: t('published conference paper, p. 1016, Table 2 and Figure 1.', '게재 학술대회 논문 1016쪽 · 표 2 및 그림 1.'),
        sourceHref: './assets/pothole-paper.pdf#page=2'
      }
    ]
  },
  kida: {
    data: [
      datum('Context', '프로젝트 환경', 'Programming GURU2 intensive coding course · Seoul Women’s University SW-Centered University Project Office', '서울여자대학교 SW중심대학추진사업단 주관 SW사관학교 Programming GURU2 집중코딩과정'),
      datum('Period', '개발 시기', 'January–February 2024', '2024.01–02'),
      datum('Stack', '개발 도구', 'Kotlin · Android XML layouts · SQLite local storage', 'Kotlin · Android XML 레이아웃 · SQLite 로컬 저장소'),
      datum('Evidence', '검토 자료', 'Team source code and recorded app demonstration', '팀 소스 코드·앱 시연 영상')
    ],
    reflection: {
      en: [
        'Screen navigation and persistent state need separate verification. Task creation, edits and completion states should remain consistent when users revisit a date.',
        'Sample ranking data and incomplete challenge/stamp persistence need to be documented separately from the local task-management functions already implemented. This makes the demonstration scope and remaining development work clear.'
      ],
      ko: [
        '화면 이동과 데이터 저장은 각각 검증해야 합니다. 날짜를 다시 선택해도 할 일의 내용과 완료 상태가 유지되는지가 핵심 확인 항목입니다.',
        '랭킹의 샘플 데이터와 개인 챌린지·도장 상태의 미완성 저장 흐름은 구현된 로컬 할 일 관리 기능과 구분해 기록해야 합니다. 이를 바탕으로 시연 범위와 후속 개발 범위를 명확히 정할 수 있습니다.'
      ]
    },
    visuals: [
      {
        type: 'flow', title: t('A date-based task-management flow', '날짜별 할 일 관리의 주요 흐름'),
        steps: [
          { label: t('Account', '계정'), detail: t('Local registration and login', '로컬 회원가입·로그인') },
          { label: t('Calendar', '캘린더'), detail: t('Choose a date and view its tasks', '날짜 선택·해당 날짜의 할 일 조회') },
          { label: t('Task actions', '할 일 관리'), detail: t('Create, edit and update completion state', '추가·수정·완료 상태 변경') },
          { label: t('Local storage', '로컬 저장'), detail: t('Read and update task records with SQLite', 'SQLite 레코드 조회·갱신') }
        ],
        note: t('The date-based task flow uses local storage. Cloud synchronization and production-grade authentication were not implemented.', '날짜별 할 일의 로컬 저장 흐름입니다. 클라우드 동기화나 운영 수준의 인증 시스템을 구현한 것은 아닙니다.'),
        source: t('KidA Android team repository and recorded demonstration, 2024.', 'KidA Android 팀 저장소·시연 영상 · 2024.'),
        sourceHref: 'https://github.com/lucyjeehyeon/kida-android-challenge-app'
      },
      {
        type: 'table', title: t('Implementation boundaries', '구현한 범위와 보완할 범위'),
        headers: [t('Area', '영역'), t('Verified scope', '확인한 범위'), t('Further work', '보완할 내용')],
        rows: [
          [t('Navigation', '화면 이동'), t('Home, challenges, ranking and profile are connected', '홈·챌린지·랭킹·마이페이지 연결'), t('Review end-to-end edge cases', '전체 사용자 흐름의 예외 상황 점검')],
          [t('Calendar tasks', '캘린더 할 일'), t('Local task creation, editing and completion state', '로컬 할 일 추가·수정·완료 상태 관리'), t('Check consistency after date changes and app restarts', '날짜 전환·재실행 시 상태 일관성 점검')],
          [t('Challenge & ranking', '챌린지·랭킹'), t('Demonstration screens; ranking uses sample data', '시연 화면 구성 · 랭킹 샘플 데이터'), t('Complete personal-challenge and stamp persistence', '개인 챌린지·도장 상태 저장 흐름 보완')]
        ],
        note: t('This is a scope comparison, not a user test or measured usage outcome.', '구현 범위를 정리한 표이며 사용자 테스트나 실제 이용 성과가 아닙니다.'),
        source: t('KidA team source review and demo.', 'KidA 팀 소스 코드 검토·시연 영상.'),
        sourceHref: 'https://github.com/lucyjeehyeon/kida-android-challenge-app'
      }
    ]
  },
  watcha: {
    data: [
      datum('Sources', '데이터 출처', 'Team survey, KOSIS statistics and OTT content/marketing references', '팀 설문·KOSIS 통계·OTT 콘텐츠 및 마케팅 사례'),
      datum('Scale', '조사 규모', '97 survey responses · question-specific respondent groups', '전체 설문 응답 97건 · 문항별 응답 대상은 다름'),
      datum('Period', '조사 시기', 'March–June 2023', '2023.03–06'),
      datum('Method', '분석 방법', 'Awareness and usage comparisons, customer research and competitor benchmarking', '인지·이용 특성 비교·고객 리서치·경쟁 서비스 벤치마킹')
    ],
    reflection: {
      en: [
        'Awareness, experience and subscription intent measure different things. A service can be well known without giving users a clear reason to choose it or keep using it.',
        'Small-sample survey percentages need the question, respondent group and denominator to be stated. Broader sampling or experiments are needed before the strategy is generalized.'
      ],
      ko: [
        '인지도·사용 경험·구독 의향은 구분해 해석해야 합니다. 서비스 이름을 알고 있다는 사실만으로는 선택과 지속 이용의 이유를 설명할 수 없습니다.',
        '소규모 설문의 비율은 각 문항의 응답 대상과 분모를 함께 확인해야 합니다. 전략을 일반화하기 전에는 더 넓은 표본이나 실험으로 검증할 필요가 있습니다.'
      ]
    },
    visuals: [
      {
        type: 'bar', title: t('Former users’ reported reasons for cancelling WATCHA', '과거 이용자의 왓챠 해지 사유'),
        description: t('Percentages explicitly reported for the former-user group in the team presentation.', '팀 발표자료에 명시된 과거 이용자 집단의 응답 비율입니다.'),
        unit: '%', max: 100, precision: 1,
        rows: [
          { label: t('Other OTT services are more attractive', '다른 OTT 플랫폼이 더 매력적'), value: 56.4 },
          { label: t('Preferred content is unavailable', '선호하는 콘텐츠 부재'), value: 30.8 },
          { label: t('The range of genres is narrow', '제공 콘텐츠 장르 폭이 좁음'), value: 23.1 }
        ],
        note: t('The full survey has 97 responses, but the presentation does not state this question’s subgroup size or response format. These percentages are not a distribution summing to 100% and are not population estimates.', '전체 설문은 97건이지만 이 문항의 하위 집단 크기와 응답 방식은 자료에 명시되지 않았습니다. 합계 100%의 구성비나 시장 전체의 추정치로 해석하지 않습니다.'),
        source: t('WATCHA team presentation, p. 5, 2023.', '왓챠 팀 발표자료 5쪽 · 2023.'),
        sourceHref: './assets/watcha-presentation.pdf#page=5'
      },
      {
        type: 'table', title: t('Research findings translated into strategy hypotheses', '조사 결과를 전략 가설로 연결'),
        headers: [t('Evidence', '조사에서 확인한 내용'), t('Proposed action', '제안한 액션'), t('Validation needed', '후속 검증')],
        rows: [
          [t('Content gaps and stronger competing services', '콘텐츠 부족·경쟁 서비스의 매력'), t('Strengthen distinctive content and audience-specific messaging', '차별 콘텐츠 강화·타깃별 메시지 설계'), t('Test which content messages change consideration', '콘텐츠 메시지별 서비스 고려 변화 검증')],
          [t('Awareness of WATCHA does not by itself explain continued use', '서비스 인지도만으로 지속 이용을 설명하기 어려움'), t('Communicate recommendation, rating and supplementary features', '추천·평가·부가서비스 차별점 전달'), t('Compare comprehension and intent before and after exposure', '메시지 노출 전후 이해도·이용 의향 비교')],
          [t('Competitor content and promotion practices', '경쟁 서비스의 콘텐츠·프로모션 사례'), t('Benchmark content promotion and service experience', '콘텐츠 홍보·서비스 경험 벤치마킹'), t('Validate suitability for WATCHA’s users and resources', '왓챠 이용자·운영 자원에 대한 적합성 검토')]
        ],
        note: t('Strategy proposals from the 2023 study, not executed acquisition experiments.', '2023년 리서치의 전략 제안이며 실행된 유입 실험 결과가 아닙니다.'),
        source: t('team presentation, pp. 15 and 22–23.', '팀 발표자료 15·22–23쪽.'),
        sourceHref: './assets/watcha-presentation.pdf#page=23'
      }
    ]
  },
  'voice-phishing': {
    data: [
      datum('Sources', '자료 출처', 'Phishing-case scripts and related YouTube metadata', '보이스피싱 사례 스크립트·관련 YouTube 메타데이터'),
      datum('Corpus', '수집 범위', '185 case-script documents in .doc format, plus video titles, descriptions and keywords', '사례 스크립트 .doc 문서 185개·영상 제목·설명·키워드'),
      datum('Period', '프로젝트 시기', '2022–2023 · initial capstone and follow-up practice', '2022–2023 · 초기 캡스톤·후속 실습'),
      datum('Team', '프로젝트 구성', 'Two-person capstone design project', '2인 팀 캡스톤디자인 프로젝트'),
      datum('Tools', '사용 도구', 'Python · crawling · pandas · KoNLPy', 'Python · 크롤링 · pandas · KoNLPy')
    ],
    reflection: {
      en: [
        'Keyword searches can collect commentary, entertainment and reenactments alongside relevant cases. Source relevance and document-conversion quality need to be reviewed before interpreting a word-frequency chart.',
        'Words identified through exploration are not validated detection rules. A detection model requires labeled evaluation data and methods suited to the language being analyzed.'
      ],
      ko: [
        '키워드로 수집한 자료에는 해설·오락·재연 콘텐츠도 섞입니다. 단어 빈도를 해석하기 전에 자료의 관련성과 문서 변환 품질을 확인하는 과정이 필요합니다.',
        '탐색 과정에서 확인한 단어를 곧바로 탐지 규칙으로 사용할 수는 없습니다. 키워드·감성 분석을 탐지 모델로 확장하려면 라벨이 있는 평가 데이터와 한국어에 적합한 분석 방법을 검증해야 합니다.'
      ]
    },
    visuals: [
      {
        type: 'flow', title: t('From unstructured sources to exploratory text analysis', '비정형 자료를 텍스트 분석 데이터로 전환'),
        steps: [
          { label: t('Collect', '수집'), detail: t('Case scripts and video titles, descriptions and keywords', '사례 문서·영상 제목·설명·키워드 확보') },
          { label: t('Convert & merge', '변환·병합'), detail: t('Convert document formats and organize a DataFrame', '문서 형식 변환·DataFrame 구성') },
          { label: t('Check relevance', '관련성 점검'), detail: t('Remove duplicates and irrelevant or entertainment-oriented videos', '중복·비관련·오락성 영상 필터링') },
          { label: t('Clean & tokenize', '정제·형태소 처리'), detail: t('Korean text cleaning, stopwords and noun extraction', '한글 정제·불용어 처리·명사 추출') },
          { label: t('Explore', '탐색'), detail: t('Word frequency, word clouds and prototype analyses', '단어 빈도·워드클라우드·분석 프로토타입') }
        ],
        note: t('The analysis procedure spans the initial project and follow-up practice. The 185 documents are a collected source count, not the size of a labeled validation dataset.', '초기 프로젝트와 후속 실습에서 수행한 분석 절차입니다. 185개는 수집 문서 수이며 라벨이 부여된 검증 데이터 수가 아닙니다.'),
        source: t('voice-phishing project repository and final presentation, especially preprocessing on p. 9.', '보이스피싱 프로젝트 저장소·최종 발표자료, 특히 9쪽 전처리 과정.'),
        sourceHref: 'https://github.com/lucyjeehyeon/voicefishing_analysis'
      },
      {
        type: 'table', title: t('Separate what each source can support', '자료별로 분석 가능한 범위 구분'),
        headers: [t('Source', '자료'), t('Useful for', '분석에 활용한 부분'), t('Boundary', '해석 시 주의점')],
        rows: [
          [t('Case-script documents', '사례 스크립트 문서'), t('Recurring language and case descriptions', '반복되는 언어·사례 내용 탐색'), t('Text conversion and cleaning quality affect the corpus', '문서 변환·정제 품질에 따라 분석 대상 달라짐')],
          [t('YouTube metadata', 'YouTube 메타데이터'), t('Collecting and filtering relevant materials', '관련 자료 수집·필터링'), t('Titles and descriptions are not the full spoken transcript', '제목·설명은 통화 전체 발화와 다름')],
          [t('Keywords & sentiment', '키워드·감성 탐색'), t('Exploratory summaries and prototypes', '탐색적 요약·프로토타입'), t('No verified operational detection accuracy', '운영 환경의 탐지 정확도 검증 없음')]
        ],
        note: t('Counts by term and category are not reported.', '단어·유형별 정량 빈도는 제시하지 않습니다.'),
        source: t('project records and final presentation, data collection and preprocessing sections.', '프로젝트 기록·최종 발표자료의 데이터 수집 및 전처리 부분.'),
        sourceHref: './assets/voice-phishing-presentation.pdf#page=9'
      }
    ]
  },
  ficord: {
    data: [
      datum('Period', '기획 시기', '2022 · undergraduate team project', '2022 · 학부 팀 프로젝트'),
      datum('Sources', '기획 근거', 'Reporting-friction cases and a five-page service concept report', '신고 과정의 불편 사례·서비스 기획 보고서 5쪽'),
      datum('Scope', '산출물 범위', 'Service concept and initial user flow; no working app', '서비스 개념·초기 사용자 흐름 · 앱 미구현'),
      datum('Method', '기획 방법', 'Problem framing, service planning and screen-flow design', '문제 정의·서비스 기획·화면 흐름 설계')
    ],
    reflection: {
      en: [
        'An accessible reporting experience requires the full process to be considered, including consent, evidence handling and the receiving agency’s procedures.',
        'Recording, agency handoff and voice-based warnings have different technical and operational requirements. Reviewing each feature separately can define a feasible scope for the first prototype.'
      ],
      ko: [
        '간편한 신고 경험을 설계하려면 버튼뿐 아니라 동의·증빙 처리·기관 접수까지의 절차를 함께 검토해야 합니다.',
        '통화 녹음·기관 연결·음성 기반 경고는 서로 다른 기술·운영 요건을 갖습니다. 기능별 실행 가능성을 검토하고 첫 프로토타입의 범위를 정해야 합니다.'
      ]
    },
    visuals: [
      {
        type: 'flow', title: t('The proposed reporting experience', '기획한 신고 경험의 흐름'),
        steps: [
          { label: t('Notice suspicion', '의심 상황 인지'), detail: t('A user is unsure about a call', '통화 중 보이스피싱 의심') },
          { label: t('Open reporting', '신고 진입'), detail: t('An accessible reporting action during the call', '통화 중 접근하기 쉬운 신고 버튼') },
          { label: t('Collect evidence', '증빙 확보'), detail: t('A proposed recording flow with consent and permissions to be reviewed', '동의·권한 검토가 필요한 녹음 흐름 제안') },
          { label: t('Connect to support', '접수·지원 연결'), detail: t('A proposed handoff to the responsible organization', '담당 기관 접수·지원으로 연결하는 흐름 제안') }
        ],
        note: t('A proposed reporting experience, not a working integration with a public agency or a verified detection system.', '기획 단계의 신고 경험입니다. 실제 공공기관 연동이나 검증된 탐지 시스템은 아닙니다.'),
        source: t('Ficord team service-planning report, pp. 2–4, 2022.', 'Ficord 팀 서비스 기획 보고서 2–4쪽 · 2022.')
      },
      {
        type: 'table', title: t('What needs validation before implementation', '구현 전 검증할 서비스 조건'),
        headers: [t('Planned feature', '기획한 기능'), t('Validation question', '검토할 조건')],
        rows: [
          [t('Simple reporting entry', '간편 신고 진입'), t('Can users understand when to report, and can the receiving process accept the information?', '사용자가 신고 시점을 이해하는가 · 접수 기관이 해당 정보를 처리할 수 있는가')],
          [t('Call recording', '통화 녹음'), t('What consent, platform permissions and evidence-handling rules are required?', '동의·플랫폼 권한·증빙 관리 조건을 충족할 수 있는가')],
          [t('Agency support', '기관의 지원 연결'), t('Who receives and reviews a report, and how is the response communicated?', '접수·검토 담당자와 사용자에게 결과를 전달하는 절차가 정해졌는가')],
          [t('Voice-based warning concept', '음성 기반 경고 아이디어'), t('How would data collection, matching reliability and false warnings be evaluated?', '데이터 수집·식별 신뢰도·잘못된 경고의 위험을 검증할 수 있는가')]
        ],
        note: t('These are feasibility questions for follow-up work. No app deployment, voice-matching accuracy or crime-reduction effect was demonstrated.', '후속 작업의 실행 가능성 검토 항목입니다. 앱 배포·음성 식별 정확도·범죄 감소 효과를 입증한 결과가 아닙니다.'),
        source: t('Ficord service concept and stated future directions, pp. 3–4.', 'Ficord 서비스 개념 및 발전 방향 · 보고서 3–4쪽.')
      }
    ]
  }
};

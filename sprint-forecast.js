// Individual learning mission. Saved notebook outputs were reviewed without execution.
// The 2025 comparison period was used to select the approach, not an independent
// post-selection confirmation of the selected approach's expected performance.
const t = (en, ko) => ({ en, ko });
const field = (enLabel, koLabel, enValue, koValue) => ({ label: t(enLabel, koLabel), value: t(enValue, koValue) });
const directory = 'https://github.com/lucyjeehyeon/codeit-sprint-missions/tree/main/mission15_bmw-sales-forecasting';
const notebook = 'https://github.com/lucyjeehyeon/codeit-sprint-missions/blob/main/mission15_bmw-sales-forecasting/bmw_sales_forecasting.ipynb';
const report = './assets/bmw-forecasting-report.pdf';

export const forecastProjects = [{
  id: 'bmw-sales-forecasting',
  year: '2026',
  category: 'research',
  tags: ['Python', 'Time series', 'ARIMA', 'Prophet', 'Bottom-up forecasting'],
  title: t('BMW Sales Forecasting — Direct vs Bottom-Up', 'BMW 글로벌 판매 시계열 예측과 Bottom-up 비교'),
  subtitle: t('Time-series model comparison using reconstructed educational sales data', '교육용 재구성 판매 데이터 기반 시계열 모델·계층형 예측 비교'),
  summary: t(
    'Compared direct monthly forecasts with forecasts summed across regions and vehicle models, and examined how aggregate error can differ from component-level accuracy.',
    '월별 판매 총량의 직접 예측과 지역·차종별 예측의 합산을 비교하고, 총량 오차 개선과 개별 차종의 예측 정확도를 구분했습니다.'
  ),
  context: t(
    'Individual Codeit Sprint learning mission · Reconstructed educational data, not BMW official sales records or an operational forecasting engagement.',
    '코드잇 스프린트 개인 학습 미션 · 실제 BMW 공식 판매 자료가 아닌 교육용 재구성 데이터를 사용했으며, 기업의 운영 예측 업무가 아닙니다.'
  ),
  links: [{ label: t('GitHub mission repository', 'GitHub 미션 저장소'), url: directory, type: 'github' }],
  role: t(
    'I checked data quality, prepared monthly aggregates, and compared direct and bottom-up forecasts in this individual project. I examined seasonality, tuned model configurations, reviewed forecast errors, and documented the findings and limitations.',
    '개인 실습으로 데이터 품질 점검과 월별 집계부터 모델 비교·Bottom-up 예측까지 수행했습니다. 계절성을 탐색하고 모델 구성을 조정했으며, 예측 오차를 검토해 결과와 한계를 보고서로 정리했습니다.'
  ),
  question: t(
    'In this educational dataset, how do direct forecasts of monthly sales compare with forecasts summed across regions or vehicle models?',
    '교육용 판매 데이터에서 월별 총량을 직접 예측하는 방식과 지역·차종별 예측을 합산하는 방식은 예측 오차와 해석에서 어떤 차이를 보일까?'
  ),
  approach: {
    en: [
      'Checked missing cells, duplicate month–region–model records, revenue consistency, and monthly coverage in 3,072 records. Aggregated 96 monthly observations from four regions and eight vehicle models.',
      'Compared 3-, 6-, and 12-month seasonality with detrended ACF and a periodogram using data through 2024. Used robust STL for descriptive decomposition; retained flagged observations rather than automatically deleting sales peaks.',
      'Fit candidate configurations on 2018–2023, selected within each model family using 2024 validation MAE, and refit on 2018–2024 before comparing forecasts for 2025. Compared naive baselines, exponential smoothing, ARIMA, SARIMA, and Prophet.',
      'Selected Holt-Winters or seasonal-naive configurations for each region and vehicle model using the 2024 validation period, then summed their forecasts. The 2025 comparison was used to choose between direct, region-level, and vehicle-model-level approaches.'
    ],
    ko: [
      '3,072행의 결측·월×지역×차종 중복·매출 정합성·월 누락을 점검하고, 4개 지역·8개 차종의 자료를 96개월 시계열로 집계했습니다.',
      '2024년까지의 자료에서 추세를 제거한 ACF·주파수 분석으로 3·6·12개월 주기를 비교했습니다. Robust STL로 전체 기간의 패턴을 탐색하되 잔차 플래그를 근거로 판매 피크를 자동 삭제하지 않았습니다.',
      '2018–2023년으로 학습하고 2024년 검증 MAE로 각 모델 계열의 구성을 선택했습니다. 2018–2024년으로 재학습한 뒤 2025년 예측을 비교했습니다. 나이브 기준선·지수평활·ARIMA·SARIMA·Prophet을 검토했습니다.',
      '지역·차종별 Holt-Winters 또는 계절 나이브 구성을 2024년 검증 구간에서 선택한 뒤 예측을 합산했습니다. 직접 예측·지역별 합산·차종별 합산 중 방법을 선정할 때는 2025년 비교 결과를 사용했습니다.'
    ]
  },
  findings: {
    en: [
      'The 3-month lag had the strongest ACF among the tested periods: 0.595, versus 0.491 at 6 months and 0.409 at 12 months. The strongest descriptive cycle was not automatically the best forecasting configuration: validation-selected Holt-Winters used 12-month seasonality.',
      'Over the 12-month 2025 comparison period, vehicle-model bottom-up had MAE 16,437 units and WAPE 5.87%; region bottom-up had MAE 17,265, and direct ARIMA had MAE 17,762. These scores informed method selection; they were not confirmed on separate data after selection.',
      'The MAE ranking did not tell the whole story. Direct ARIMA had lower RMSE and mean bias closer to zero than vehicle-model bottom-up. Aggregation offset some component errors; it did not make each vehicle-model forecast accurate.'
    ],
    ko: [
      '비교한 주기 중 3개월 ACF가 0.595로 가장 높았고, 6개월은 0.491·12개월은 0.409였습니다. 강한 반복 주기와 유리한 예측 구성이 항상 같지는 않았으며, 내부 검증에서 선택된 Holt-Winters는 12개월 계절성을 사용했습니다.',
      '2025년 12개월 비교에서 차종별 Bottom-up의 MAE는 16,437대·WAPE는 5.87%였고, 지역별 합산은 MAE 17,265대·직접 ARIMA는 17,762대였습니다. 같은 기간을 방법 선정에 사용했으므로, 선정 후 별도 데이터에서 확인한 성능은 아닙니다.',
      'MAE 순위만으로 우열을 단정할 수 없었습니다. 직접 ARIMA의 RMSE가 더 낮고 평균 편향은 0에 더 가까웠습니다. 합산 시 일부 오차가 상쇄됐지만 개별 차종 예측까지 정확해졌다는 의미는 아닙니다.'
    ]
  },
  next: {
    en: [
      'Before operational use, compare the complete approach-selection process with rolling-origin backtests and a separate confirmation period; examine rank stability, bias, and peak-month errors.',
      'For a hypothetical planning workflow, assess aggregate forecasts alongside direct-model reference forecasts and component-level errors. Add external-variable scenarios only when future GDP, fuel-price, or promotion inputs are available.'
    ],
    ko: [
      '실무 적용 전 예측 기준 시점을 옮기는 Rolling-origin 백테스트와 별도 확인 구간으로 방법 선정 과정 전체를 검증하고, 순위 안정성·편향·피크 월 오차를 확인합니다.',
      '가상의 판매 계획에서는 총량 예측을 직접 모델의 기준 예측·차종별 오차와 함께 검토합니다. 미래 GDP·유가·프로모션 입력이 확보됐을 때 외생변수 시나리오를 비교합니다.'
    ]
  },
  limitations: {
    en: [
      'This is an individual training exercise using reconstructed data, not BMW official results or a deployed forecasting system. The 96-month history and a single 12-month comparison do not establish performance across future business regimes.',
      'Model-family configurations were tuned on 2024, but the 2025 scores were reused to choose the final family and aggregation approach. The selected method was therefore not evaluated on new data after selection. Full-period STL was descriptive, not a feature used by the forecasting models.',
      'The proposed 2026 uncertainty range used only 12 monthly residuals and is not a fully calibrated prediction interval. Component error cancellation and missing structural-event variables limit interpretation. Reproduction requires the original educational CSV, which is not included in this repository.'
    ],
    ko: [
      '교육용 재구성 데이터를 사용한 개인 실습으로, BMW 공식 실적이나 배포된 운영 예측 시스템이 아닙니다. 96개월과 단일 12개월 비교만으로 미래의 여러 사업 환경에서 성능을 보장할 수 없습니다.',
      '모델 계열별 구성은 2024년으로 조정했지만, 최종 계열과 합산 방법은 2025년 점수를 재사용해 선정했습니다. 이후 별도 데이터에서 선정된 방법을 평가하지는 않았습니다. 전체 기간의 STL은 탐색용이며 예측 모델의 입력으로 재사용하지 않았습니다.',
      '제안한 2026년 불확실성 범위는 월별 잔차 12개를 이용한 근사값이며 완전히 보정된 예측구간이 아닙니다. 차종 간 오차 상쇄와 구조적 이벤트 변수의 부재를 고려해야 합니다. 분석 재실행에는 저장소에 포함되지 않은 교육용 원본 CSV가 필요합니다.'
    ]
  }
}];

export const forecastEvidence = {
  'bmw-sales-forecasting': {
    oneLine: t(
      'Compared direct and bottom-up time-series forecasts on educational sales data, distinguishing aggregate accuracy from component errors and selection uncertainty.',
      '교육용 판매 데이터에서 직접 예측과 Bottom-up을 비교하고 총량 정확도·차종별 오차·방법 선정의 불확실성을 구분했습니다.'
    ),
    data: [
      field('Source', '데이터 출처', 'Codeit Sprint Mission 15 supplied bmw_global_sales.csv: reconstructed educational data, not BMW official sales records.', '코드잇 스프린트 미션 15 제공 bmw_global_sales.csv. 실제 BMW 공식 판매 기록이 아닌 교육용 재구성 데이터입니다.'),
      field('Scale', '데이터 규모', '3,072 rows × 11 original columns; four regions, eight vehicle models, 96 months.', '원본 3,072행·11열, 4개 지역·8개 차종·96개월입니다.'),
      field('Period & grain', '기간·분석 단위', 'January 2018–December 2025; month × region × vehicle model, aggregated to monthly units sold.', '2018.01–2025.12, 월×지역×차종 단위 자료를 월별 판매량으로 집계했습니다.'),
      field('Quality checks', '품질 점검', 'Data-quality checks found no missing cells, duplicate month–region–model records, missing months, or revenue-recalculation mismatches.', '품질 점검에서 결측 셀·월×지역×차종 중복·누락 월·매출 재계산 불일치는 0건이었습니다.'),
      field('Evaluation', '평가 설계', '2018–2023 fitting; 2024 configuration validation; 2018–2024 refitting; 2025 approach comparison. Approach selection reused the comparison period.', '2018–2023 학습 → 2024 구성 검증 → 2018–2024 재학습 → 2025 방법 비교. 방법 선정에 비교 기간을 재사용했습니다.'),
      field('Tools', '사용 도구', 'Python · pandas · NumPy · SciPy · statsmodels · Prophet · scikit-learn · Matplotlib · seaborn', 'Python · pandas · NumPy · SciPy · statsmodels · Prophet · scikit-learn · Matplotlib · seaborn')
    ],
    reflection: {
      en: [
        'The clearest seasonal pattern and the best forecasting configuration answer different questions. Comparing simple baselines and multiple error metrics made that distinction visible.',
        'A separate parameter-validation period is not enough if the comparison period is later reused to choose the overall approach. The selected method still needs independent confirmation, and the selection procedure needs repeated time-based evaluation.',
        'Aggregate MAE can improve while bias or component-level errors remain substantial. I would define the planning decision and error costs before labeling one method the best.'
      ],
      ko: [
        '뚜렷한 반복 패턴과 유리한 예측 구성이 답하는 질문은 달랐습니다. 단순 기준선과 여러 오차 지표를 함께 비교하며 차이를 확인했습니다.',
        '구성 검증 기간을 나누더라도 비교 기간으로 최종 방법을 고르면 별도 확인이 필요합니다. 다음에는 선정한 방법을 다른 구간에서 평가하고, 선정 절차 자체를 여러 시점에서 검증하겠습니다.',
        '총량 MAE가 낮아져도 편향이나 개별 차종의 오차가 클 수 있습니다. 어떤 계획을 위한 예측인지와 오차 비용을 정한 뒤 방법을 평가해야 한다고 배웠습니다.'
      ]
    },
    visuals: [
      {
        type: 'flow',
        title: t('Separate configuration validation from approach comparison', '구성 검증과 방법 비교의 역할을 구분'),
        steps: [
          { label: t('Fit · 2018–2023 · 72 months', '학습 · 2018–2023 · 72개월'), detail: t('Fit candidate model configurations on the earlier time window.', '과거 구간에서 후보 모델 구성을 학습했습니다.') },
          { label: t('Validate · 2024 · 12 months', '구성 검증 · 2024 · 12개월'), detail: t('Select configurations within each model family and within each component series.', '모델 계열·개별 지역·차종 안에서 구성을 선택했습니다.') },
          { label: t('Refit · 2018–2024 · 84 months', '재학습 · 2018–2024 · 84개월'), detail: t('Refit selected configurations using data available before the comparison year.', '비교 연도 이전에 관측된 자료로 선택 구성을 재학습했습니다.') },
          { label: t('Compare & select · 2025 · 12 months', '방법 비교·선정 · 2025 · 12개월'), detail: t('Compare direct and bottom-up approaches, then select from these scores. The selected method still needs evaluation on separate data.', '직접 예측과 Bottom-up을 비교하고 같은 점수로 방법을 선정했습니다. 선정한 방법은 별도 데이터에서 평가할 필요가 있습니다.') }
        ],
        note: t('A chronological split was used, but the 2025 period was reused for overall approach selection. The reported scores compare candidate approaches; they do not independently confirm the selected method’s performance.', '시간 순서를 유지했지만 2025년은 전체 방법 선정에 재사용됐습니다. 보고된 점수는 후보 방법의 비교 결과이며, 선정된 방법을 별도로 검증한 성능은 아닙니다.'),
        source: t('Notebook cells 30, 49–63, and 70–73; report p. 2.', '노트북 셀 30·49–63·70–73 및 보고서 2쪽.'),
        sourceHref: `${report}#page=2`
      },
      {
        type: 'bar',
        title: t('Observed 2025 aggregate MAE by approach', '2025년 비교 구간의 총량 MAE'),
        description: t('Monthly mean absolute error in units sold. Lower is better; values are rounded to whole units.', '월별 판매량의 평균 절대 오차이며 낮을수록 좋습니다. 수치는 정수 단위로 반올림했습니다.'),
        unit: t('units', '대'), max: 20000, precision: 0,
        rows: [
          { label: t('Vehicle-model bottom-up', '차종별 Bottom-up'), value: 16437 },
          { label: t('Region bottom-up', '지역별 Bottom-up'), value: 17265 },
          { label: t('Direct total · ARIMA(3,1,3)', '직접 총량 · ARIMA(3,1,3)'), value: 17762 }
        ],
        note: t('All approaches use the same 12 comparison months. These scores informed method selection; the lowest score is not performance confirmed on separate data or a measured operational improvement.', '같은 12개월을 비교했습니다. 이 점수로 방법을 선정했으므로 최저 점수를 별도 데이터에서 검증한 성능이나 운영 개선 성과로 해석하지 않습니다.'),
        source: t('Notebook cell 73; analysis report pp. 7–8.', '노트북 셀 73 및 분석 보고서 7–8쪽.'),
        sourceHref: `${report}#page=7`
      },
      {
        type: 'table',
        title: t('Lower MAE did not imply lower error on every measure', 'MAE 외 지표에서 드러난 오차의 차이'),
        headers: [t('Approach', '접근법'), t('RMSE · units', 'RMSE · 대'), t('WAPE', 'WAPE'), t('Mean bias · units', '평균 편향 · 대')],
        rows: [
          [t('Vehicle-model bottom-up', '차종별 Bottom-up'), t('23,076', '23,076'), t('5.87%', '5.87%'), t('-7,258', '-7,258')],
          [t('Region bottom-up', '지역별 Bottom-up'), t('22,612', '22,612'), t('6.16%', '6.16%'), t('-1,713', '-1,713')],
          [t('Direct total · ARIMA', '직접 총량 · ARIMA'), t('22,574', '22,574'), t('6.34%', '6.34%'), t('-893', '-893')]
        ],
        note: t('2025 comparison outputs, rounded. Bias is mean(prediction − actual); negative values indicate average underprediction. Component-level WAPE ranged from 11.99% to 22.44%, so aggregate results should not be presented as individual-model accuracy.', '2025년 비교 출력의 반올림 수치입니다. 편향은 평균(예측−관측)으로 음수는 평균적인 과소 예측을 뜻합니다. 차종별 WAPE는 11.99–22.44%로, 총량 결과를 개별 차종의 정확도로 제시하지 않습니다.'),
        source: t('Notebook cells 72–73; analysis report pp. 6–9.', '노트북 셀 72–73 및 분석 보고서 6–9쪽.'),
        sourceHref: notebook
      }
    ]
  }
};

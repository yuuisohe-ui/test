// SongPage 韩文文案（仅韩文）
export const songPageTranslations = {
  ko: {
    // 顶部导航区域
    title: '가사로 배우기',
    apiTest: 'API 테스트',
    sentenceReview: '가사 복습',
    exitSentenceReview: '가사 복습 종료',
    exportHTML: '이 페이지 HTML 내보내기',

    // 音频上传区域
    uploadAudioTitle: '오디오를 업로드하면 더 완성도 높은 학습 자료를 받을 수 있어요',
    uploadAudioHint: '발음이 또렷하고 리듬이 안정적인 음원을 권장합니다(현재는 UI 자리표시자이며 Opal과 연동되지 않습니다)',
    selectAudioFile: '오디오 파일 선택',
    language: '언어:',
    pleaseSelectLanguage: '언어를 선택하세요',
    chinese: '중국어',
    korean: '한국어',
    pleaseSelectMatchingLanguage: '오디오 내용과 동일한 언어를 선택해 주세요',
    startTranscribe: '텍스트로 변환 / 분석 시작',
    pauseAnalysis: '분석 일시정지',
    selectLanguageLevel: '학습자 수준을 선택하세요',
    beginner: '초급',
    intermediate: '중급',
    advanced: '고급',
    basic: '기초',
    pleaseSelectLanguageLevelFirst: '먼저 학습 수준을 선택해 주세요.',
    releaseMouseToUpload: '마우스를 놓으면 파일이 업로드됩니다',
    orDragAudioHere: '또는 오디오 파일을 이 영역으로 드래그해 주세요',
    analyzing: '분석 중...',
    analysisCancelled: '분석이 취소되었습니다',

    // 文本输入区域
    orPasteLyrics: '또는 가사 텍스트를 바로 붙여넣기(중국어/한국어 지원)',
    pasteLyricsPlaceholder: '여기에 가사를 붙여넣으세요. 한 줄에 한 문장…(붙여넣은 뒤 위의 \'텍스트로 변환 / 분석 시작\' 버튼을 눌러 주세요)',

    // 学习模式选择
    studyMode: '학습 모드',
    wholeParagraphStudy: '📖 전체 가사 학습',
    sentenceBySentenceStudy: '📝 문장별 학습',

    // 整段学习视图
    wholeParagraphLyrics: '전체 가사',
    fullLyricsView: '전체 가사 보기',
    totalSentences: '총 {count}문장',
    readAlongFull: '전체 따라 읽기',
    exitReadAlong: '따라 읽기 종료',
    playOriginal: '원곡 재생',
    pauseOriginal: '원곡 일시정지',

    // 重点词汇汇总
    keyVocabSummary: '핵심 어휘 모아보기',
    currentFocus: '현재 핵심',
    advancedWords: '심화 어휘',
    basicWords: '기초 어휘',
    expand: '펼치기',
    collapse: '접기',

    // 分句学习视图
    chineseSentenceDisplay: '중국어 문장 전체 보기',
    learningAnalysisTable: '학습 분석표',
    tryReading: '따라 읽어보기',
    clickToStartReading: '클릭해서 따라 읽기 시작',
    teachingTip: '이 문장 학습 팁',
    generatingTip: '생성 중...',
    tryMakingSentence: '문장을 한번 만들어 보세요. 제가 피드백해 드릴게요',
    submitEvaluation: '평가 제출',
    sendVoiceEvaluation: '음성 피드백 보내기',

    // 跟读功能
    readAlong: '따라 읽기',
    readAgain: '다시 읽기',
    playMyRecording: '내 녹음 재생',
    pausePlayback: '일시정지',
    recordingInProgress: '녹음 중입니다. 현재 녹음 시간: {time}',
    endRecording: '녹음 종료',
    cancel: '취소',
    recordingComplete: '녹음 완료({time})',
    score: '채점 결과',
    reRecord: '다시 녹음',
    readAloud: '낭독',
    ttsTitlePlay: 'AI 낭독',
    ttsTitlePause: '일시정지',
    ttsTitleResume: '계속 읽기',
    startReadAlong: '따라 읽기 시작',
    restartReadAlong: '다시 따라 읽기',
    aiReadAlongFeedback: 'AI 따라 읽기 피드백',
    feedbackSection1: '1. 이번 발음 표현',
    feedbackSection2: '2. 전체 평가',
    feedbackSection3: '3. 이번 주요 문제',
    feedbackSection4: '4. 다음 연습',
    scoreContentAccuracy: '내용 정확도',
    scoreTonePerformance: '성조 표현',
    scoreSpeakingFluency: '말하기 유창도',
    labelKeyIssue: '주요 문제',
    labelNextAction: '다음 연습',
    clickToStartShadowing: '클릭해서 따라 읽기 시작',
    recordingInProgressShort: '녹음 중',
    endRecord: '종료',
    scoringInProgress: '채점 중',
    submitScore: '채점',
    recordAgain: '다시 녹음',
    evalFailedRetry: '평가하지 못했어요. 잠시 후 다시 시도해 주세요.',
    micAccessFailed: '마이크에 접근할 수 없어요. 권한 설정을 확인해 주세요.',
    recordingNow: '녹음 중, 현재 {time}',
    analyzingProgress: '분석 중...',

    // 词汇和句型相关
    starVocab: '단어 즐겨찾기',
    unstarVocab: '즐겨찾기 해제',
    starPattern: '문형 즐겨찾기',
    unstarPattern: '문형 즐겨찾기 해제',

    // 其他提示信息
    fileSelectedSuccess: '✅ 파일 "{name}"을(를) 선택했습니다! "텍스트로 변환 / 분석 시작" 버튼을 눌러 오늘의 학습을 시작해 주세요!',
    testResult: '테스트 결과:',
    checkConsoleForDetails: '자세한 로그는 브라우저 콘솔(F12)에서 확인하세요',

    // 统计与分页等（ko）
    totalLinesFormat: '총 {n}줄(원문 {m}줄)',
    reviewModeSuffix: '· 가사 복습 모드(즐겨찾기 문장만)',
    pageInfoFormat: '{current} / {total}페이지(페이지당 {size}줄)',
    pageShortFormat: '{current} / {total}페이지',
    prevPage: '이전',
    nextPage: '다음',
    viewExample: '예시 보기',
    noSearchResult: '검색 결과가 없어요. 검색어를 바꾸거나 가사 복습 모드를 해제해 주세요.',
    adjustSearch: '검색어를 바꿔 주세요.',
    fileSelectedNew: '✅ 파일 "{name}"을(를) 선택했어요.  [분석 시작]을 눌러 주세요.',
    fileSelectedReplace: '✅ 파일 "{name}"을(를) 선택했어요.  [분석 시작]을 누르면 현재 내용이 바뀝니다.',
    audioOnly: '오디오 파일만 지원해요(mp3 / m4a / wav).',
    confirmReplace: '⚠️ 이미 학습 내용이 있어요. 새로 분석하면 현재 내용이 바뀝니다. 계속할까요?',
    selectAudioLang: '먼저 오디오 언어(중국어/한국어)를 선택해 주세요.',
    pasteLyricsLabel: '가사 붙여넣기(한 줄에 한 문장)',
    lyricsPasted: '📝 가사를 붙여넣었어요',
    pasteThenAnalyze: '가사를 붙여넣은 뒤 [분석 시작]을 눌러 주세요.',
    emptyStatePrompt: '가사 또는 오디오 파일 업로드 후 [분석 시작]을 눌러 주세요.',
    searchLabel: '검색(중국어 포함 검색)',
    searchPlaceholderFilter: '중국어 단어/구절을 입력해 필터링…',
    wholeAnalysisTable: '전체 가사 학습 분석표',
    difficultyLevel: '난이도',
    sentencePinyin: '문장 병음',
    sentenceTonePattern: '문장 성조 패턴',
    audio: '오디오',
    keyPatternSummary: '핵심 문형 모아보기',
    downloadAsHTML: 'HTML로 다운로드',
    keyPattern: '핵심 문형',
    makeSentence: '문장 만들기',
    keyVocab: '핵심 어휘',
    searchPatternPlaceholder: '문형 검색...',
    inputSentencePlaceholder: '만든 문장을 여기에 입력하세요...',
    duplicate: '(중복)',
    exportTitle: '가사 학습 노트',
    exportModeReview: '(가사 복습 모드: 이 페이지의 즐겨찾기 문장)',
    exportModeNormal: '(일반 모드: 이 페이지의 문장)',
    vocabTable: '어휘표',
    word: '단어',
    chineseMeaning: '중국어 뜻',
    koreanMeaning: '한국어 뜻',
    example: '예문',
    chunkTable: '어구표',
    chunk: '어구',
    pinyin: '병음',
    tonePattern: '성조 패턴',
    noData: '(없음)',
    exportTime: '내보낸 시간:',
    noContent: '(이 페이지에 내용이 없어요)',
    alertSelectLevel: '먼저 학습 수준을 선택해 주세요.',
    alertInputSentence: '만든 문장을 입력해 주세요.',
    alertTeachingTipFailed: '학습 팁을 생성하지 못했어요. 잠시 후 다시 시도해 주세요.',
    alertEvalFailed: '평가하지 못했어요. 잠시 후 다시 시도해 주세요.',
    alertMicFailed: '마이크에 접근할 수 없어요. 권한 설정을 확인해 주세요.',
    patternKoreanExample: '이 문형의 한국어 예문 번역입니다.',
  },
};

const t = songPageTranslations.ko;
export type SongPageTranslationKey = keyof typeof t;

// 辅助函数：替换占位符（仅韩文）
export function translate(key: SongPageTranslationKey, params?: Record<string, string | number>): string {
  const translation = songPageTranslations.ko[key];
  if (!translation) return key;

  if (params) {
    return translation.replace(/\{(\w+)\}/g, (match, paramKey) => {
      return params[paramKey]?.toString() || match;
    });
  }

  return translation;
}

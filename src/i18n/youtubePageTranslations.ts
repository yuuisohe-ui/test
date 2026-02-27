// 영상학습실(YouTube) 韩文文案
export const youtubePageTranslations = {
  ko: {
    // Hero（用户指定）
    heroTitle: '영상 학습실',
    heroSubtitle: '중국어를 들으며 자연스럽게 말해요',

    // 筛选
    labelLevel: '레벨',
    pleaseSelectLevel: '레벨을 선택하세요',
    labelStyle: '스타일',
    pleaseSelectStyle: '스타일을 선택하세요',
    labelAge: '연령대',
    pleaseSelectAge: '연령대를 선택하세요',
    labelStudyTime: '오늘 학습 시간',
    pleaseSelectStudyTime: '시간을 선택하세요',

    // 等级选项（显示用，value 保持与数据一致）
    levelBeginner: '초급',
    levelIntermediate: '중급',
    levelAdvanced: '고급',
    levelExpert: '심화',

    // 风格选项（用户指定：欢快→신나는, 悲伤→애절한, 抒情→서정적인）
    styleLively: '신나는',   // 欢快
    styleSad: '애절한',     // 悲伤
    styleLyrical: '서정적인', // 抒情
    styleNursery: '동요',   // 童谣
    stylePop: '팝',         // 流行
    styleMotivational: '격려', // 励志

    // 时长选项
    time10: '10분',
    time20: '20분',
    time30: '30분',
    time45: '45분',

    // 按钮与提示
    startNow: '바로 시작',
    pleaseCompleteFilters: '모든 조건을 선택해 주세요',

    // 区块标题
    todayRecommend: '🎵 오늘의 추천',
    recommendForMe: '나에게 맞는 노래 추천',
    otherRecommend: '다른 추천 보기',
    songLibrary: '🔥 곡 목록',

    // 歌曲库等级标题
    sectionBeginner: '초급',
    sectionIntermediate: '중급',
    sectionAdvanced: '고급',
    sectionExpert: '심화',

    collapse: '접기',
    expandMore: '더 보기',

    startLearning: '학습 시작',
    clickToStartLearning: '클릭해서 학습 시작',

    placeholderAddLater: '추가 예정',
    placeholderTbd: '미정',
    youtubeLinkAddLater: 'YouTube 링크: 추가 예정',
    songN: '곡',

    labelStyleColon: '스타일',
    labelSuitable: '대상',

    // 数据中的 level/style 显示映射（用于卡片上显示）
    levelDisplay: { '初级': '초급', '中级': '중급', '高级': '고급', '进阶': '심화' } as Record<string, string>,
    styleDisplay: {
      '欢快': '신나는',
      '悲伤': '애절한',
      '抒情': '서정적인',
      '童谣': '동요',
      '流行': '팝',
      '励志': '격려',
    } as Record<string, string>,

    // ---------- YoutubeVideoDetail 详情页 ----------
    backToSongLibrary: '곡 목록으로',
    musicVideo: '뮤직 비디오',
    singAlongFull: '전체 따라 부르기',
    toggleVideoSize: '화면 크기 변경',
    enlarge: '확대',
    shrink: '축소',
    loadingPlayer: '플레이어 불러오는 중...',
    videoMute: '비디오 음소거',
    unmute: '음소거 해제',
    mute: '음소거',
    lyrics: '가사',
    lyricsParse: '가사 해석',
    sentenceVocabPractice: '이 문장 핵심 어휘 연습',
    progress: '진행도',
    correct: '정답',
    score: '점수',
    scoreUnit: '점',
    radarTitle: '발음 표현 레이더 차트',
    pronAccuracy: '발음 정확도',
    rhythm: '리듬감',
    fluency: '유창도',
    emotion: '감정 표현',
    overall: '전체 표현',
    totalScore: '종합 점수',
    overallComment: '전체 평가',
    improvement: '개선 제안',
    scoringPleaseWait: '채점 중입니다. 잠시만 기다려 주세요...',
    closeScore: '채점 내용 닫기',
    tabAll: '전체',
    tabBasic: '기초',
    tabIntermediate: '중급',
    tabAdvanced: '고급',
    readAloud: '낭독',
    downloadTitle: '다운로드 내용 선택',
    downloadOffline: '다운로드 후 오프라인 시청 가능',
    modeStandard: '표준 모드',
    modeVocab: '어휘 연습',
    modeSentence: '문형 연습',
    modeLyricSentence: '이 곡 가사+문형',
    allLyrics: '전체 가사',
    allVocab: '전체 어휘',
    allSentences: '전체 문형',
    noSentenceData: '문형 데이터 없음',
    thisSentenceVocab: '이 문장 핵심 어휘:',
    thisSentenceVocabShort: '이 문장 핵심 어휘',
    exampleSentence: '예문:',
    download: '다운로드',
    htmlFullContent: 'HTML 파일에 전체 내용이 포함되어 있으며, 낭독 기능을 지원하고 오프라인에서도 이용할 수 있습니다.',
    noRecording: '녹음 파일이 없어요.',
    recordingError: '녹음 중 오류가 발생했어요. 다시 시도해 주세요.',
    browserNoRecord: '이 브라우저는 녹음 기능을 지원하지 않아요. Chrome, Firefox, Edge 등 최신 브라우저를 사용해 주세요.',
    micDenied: '마이크 권한이 거부되었어요. 주소창 왼쪽 자물쇠 아이콘에서 마이크를 허용한 뒤 새로고침해 주세요.',
    micNotFound: '마이크를 찾을 수 없어요. 기기 연결을 확인해 주세요.',
    micInUse: '마이크가 다른 앱에서 사용 중이에요. 다른 앱을 종료한 뒤 다시 시도해 주세요.',
    evalFailedSorry: '평가하지 못했어요. 잠시 후 다시 시도해 주세요.',
    scoreFailed: '채점에 실패했어요.',
    startRecording: '녹음 시작',
    scoreResult: '채점 결과',
    exitSingAlong: '따라 부르기 종료',
    modePronunciation: '소리 연습',
    practice: '연습하기',
    downloadRecording: '녹음 다운로드',
    scoringInProgressShort: '채점 중...',
  },
};

export function getLevelLabelKo(level: string): string {
  return youtubePageTranslations.ko.levelDisplay[level] || level;
}

export function getStyleLabelKo(style: string): string {
  return youtubePageTranslations.ko.styleDisplay[style] || style;
}

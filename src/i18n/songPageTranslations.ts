// SongPage 中韩文翻译映射
export const songPageTranslations = {
  zh: {
    // 顶部导航区域
    title: '中文歌词学习分析',
    apiTest: 'API 测试',
    sentenceReview: '句子复习',
    exitSentenceReview: '退出句子复习',
    exportHTML: '导出本页 HTML',
    
    // 音频上传区域
    uploadAudioTitle: '上传音频可获得更完整的学习资料',
    uploadAudioHint: '建议吐字清晰、节奏稳定（当前仅 UI 占位，不接 Opal）',
    selectAudioFile: '选择音频文件',
    language: '语言：',
    pleaseSelectLanguage: '请选择语言',
    chinese: '中文',
    korean: '韩文',
    pleaseSelectMatchingLanguage: '请选择和音频内容一致的语言哦',
    startTranscribe: '开始转写 / 分析',
    pauseAnalysis: '暂停分析',
    selectLanguageLevel: '请选择您的语言等级',
    beginner: '初级',
    intermediate: '中级',
    advanced: '高级',
    pleaseSelectLanguageLevelFirst: '请先选择您的语言等级',
    releaseMouseToUpload: '松开鼠标以放置文件',
    orDragAudioHere: '或直接拖拽音频到此区域',
    analyzing: '分析中...',
    analysisCancelled: '已取消分析',
    
    // 文本输入区域
    orPasteLyrics: '或直接粘贴歌词文本（支持中文 / 韩文）',
    pasteLyricsPlaceholder: '在这里粘贴歌词，每行一句…（粘贴后请点击上方「开始转写/分析」按钮）',
    
    // 学习模式选择
    studyMode: '学习模式',
    wholeParagraphStudy: '📖 整段学习',
    sentenceBySentenceStudy: '📝 分句学习',
    
    // 整段学习视图
    wholeParagraphLyrics: '整段歌词',
    totalSentences: '共 {count} 句',
    playOriginal: '播放原唱',
    pauseOriginal: '暂停原唱',
    
    // 重点词汇汇总
    keyVocabSummary: '重点词汇汇总',
    currentFocus: '当前重点',
    advancedWords: '提升词',
    basicWords: '基础词',
    expand: '展开',
    collapse: '收起',
    
    // 分句学习视图
    chineseSentenceDisplay: '中文整句展示',
    learningAnalysisTable: '学习分析表',
    tryReading: '跟读试试',
    clickToStartReading: '点击开始跟读',
    teachingTip: '本句教学提示',
    tryMakingSentence: '试着造个句子，我来点评',
    submitEvaluation: '提交评价',
    sendVoiceEvaluation: '发送语音评价',
    
    // 跟读功能
    readAlong: '跟读',
    readAgain: '再读一次',
    recordingInProgress: '正在录音，录音目前为 {time}',
    endRecording: '结束录音',
    cancel: '取消',
    recordingComplete: '录音完成 ({time})',
    score: '评分',
    reRecord: '重新录音',
    
    // 词汇和句型相关
    starVocab: '收藏词汇',
    unstarVocab: '取消收藏',
    starPattern: '收藏句型',
    unstarPattern: '取消收藏句型',
    
    // 其他提示信息
    fileSelectedSuccess: '✅ 文件 "{name}" 已成功选择！请点击"开始转写 / 分析"按钮开始今天的学习吧！',
    testResult: '测试结果：',
    checkConsoleForDetails: '浏览器控制台(F12)中查看详细日志',
  },
  ko: {
    // 顶部导航区域
    title: '중국어 가사 학습 분석',
    apiTest: 'API 테스트',
    sentenceReview: '문장 복습',
    exitSentenceReview: '문장 복습 종료',
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
    pleaseSelectLanguageLevelFirst: '먼저 학습자 수준을 선택해 주세요',
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
    totalSentences: '총 {count}문장',
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
    tryMakingSentence: '문장을 한번 만들어 보세요. 제가 피드백해 드릴게요',
    submitEvaluation: '평가 제출',
    sendVoiceEvaluation: '음성 피드백 보내기',
    
    // 跟读功能
    readAlong: '따라 읽기',
    readAgain: '다시 읽기',
    recordingInProgress: '녹음 중입니다. 현재 녹음 시간: {time}',
    endRecording: '녹음 종료',
    cancel: '취소',
    recordingComplete: '녹음 완료({time})',
    score: '채점 결과',
    reRecord: '다시 녹음',
    
    // 词汇和句型相关
    starVocab: '단어 즐겨찾기',
    unstarVocab: '즐겨찾기 해제',
    starPattern: '문형 즐겨찾기',
    unstarPattern: '문형 즐겨찾기 해제',
    
    // 其他提示信息
    fileSelectedSuccess: '✅ 파일 "{name}"을(를) 선택했습니다! "텍스트로 변환 / 분석 시작" 버튼을 눌러 오늘의 학습을 시작해 주세요!',
    testResult: '테스트 결과:',
    checkConsoleForDetails: '자세한 로그는 브라우저 콘솔(F12)에서 확인하세요',
  },
};

// 辅助函数：替换占位符
export function translate(key: string, lang: 'zh' | 'ko', params?: Record<string, string | number>): string {
  const translation = songPageTranslations[lang][key as keyof typeof songPageTranslations.zh];
  if (!translation) return key;
  
  if (params) {
    return translation.replace(/\{(\w+)\}/g, (match, paramKey) => {
      return params[paramKey]?.toString() || match;
    });
  }
  
  return translation;
}






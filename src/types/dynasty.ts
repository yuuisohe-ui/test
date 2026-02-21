export interface DynastyDetail {
  id: string
  name: string
  korName: string
  period: string
  heroImage: string

  // 视频
  videoId: string

  // 视频提示文字
  videoInstruction?: string

  // 计数器模块
  counterModule?: {
    targetWord: string
    question: string
    options: number[]
    correctAnswer: number
    answerText: string
  }

  // 歌词翻牌卡片
  lyrics: {
    chinese: string
    pinyin: string
    korean: string
    note: string
    warning?: string
    tag?: string
    soundFreq: number
    soundType: 'sine' | 'sawtooth' | 'triangle'
  }[]

  // 历史故事时间线
  storyTimeline: {
    year: string
    title: string
    content: string
  }[]

  // 成语
  idioms: {
    level: '초급' | '중급' | '고급'
    chinese: string
    korean: string
    origin: string
    examples: { chinese: string; korean: string }[]
    specialNote?: string
  }[]

  // 韩国学习者模块
  hanjaComparisons: {
    chinese: string
    korean: string
    example: string
    note: string
  }[]
  koreanParallel: {
    title: string
    content: string
  }
  emotionNote: string

  // 判断题
  quiz: {
    question: string
    options: string[]
    results: {
      chosen: string
      interpretation: string
      historicalQuote: string
    }[]
  }

  // 记忆锚点
  memoryAnchor: {
    chinese: string
    text: string
    subText: string
  }

  // 分享卡片
  shareCard: {
    dynasty: string
    idiom: string
    pinyin: string
    quote: string[]
    source: string
  }

  // 下一朝代
  nextDynasty: {
    name: string
    hint: string
  }

  // AI 初始消息
  aiInitialMessage: string
  aiChips: {
    label: string
    response: string
  }[]
}


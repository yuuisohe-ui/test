// 甜蜜蜜歌词句式训练数据
// 根据每句歌词提供句式结构分析

export interface SentenceStructure {
  sentenceIndex: number;        // 句子编号（对应SRT的索引）
  sentence: string;              // 原句
  expanded?: string;            // 扩写（可选）
  translationKr?: string;       // 韩语翻译（可选）
  structure: string;            // 句型
  explanation: string;          // 解释（韩语）
  level: 'beginner' | 'intermediate' | 'advanced'; // 等级：初/中/高
  example: string;              // 例句（中文）
  exampleKr?: string;           // 例句的韩文翻译（可选）
}

// 每句歌词对应的句式分析
export const tianmimiSentenceStructures: Record<number, SentenceStructure> = {
  1: {
    sentenceIndex: 1,
    sentence: "甜蜜蜜 你笑得甜蜜蜜",
    structure: "……得……",
    explanation: "'동사+得+보어' 구조로 동작의 정도나 결과를 나타냅니다.",
    level: "beginner",
    example: "他跑得很快。",
    exampleKr: "그는 달리기가 아주 빠르다."
  },
  2: {
    sentenceIndex: 2,
    sentence: "好像花儿开在春风里",
    structure: "好像……",
    explanation: "'好像'은 비유를 나타내며 '마치 ~인 것 같다'의 의미입니다.",
    level: "beginner",
    example: "他好像很累。",
    exampleKr: "그는 피곤한 것 같다."
  },
  3: {
    sentenceIndex: 3,
    sentence: "开在春风里",
    structure: "……在……",
    explanation: "동작이 발생하는 장소를 나타내는 구조입니다.",
    level: "beginner",
    example: "我住在首尔。",
    exampleKr: "나는 서울에 산다."
  },
  4: {
    sentenceIndex: 4,
    sentence: "在哪里 在哪里见过你",
    structure: "동사+过",
    explanation: "과거에 어떤 동작을 경험했음을 나타냅니다.",
    level: "beginner",
    example: "我看过这部电影。",
    exampleKr: "나는 이 영화를 본 적이 있다."
  },
  5: {
    sentenceIndex: 5,
    sentence: "你的笑容这样熟悉",
    structure: "这样……",
    explanation: "'这样'는 정도를 강조하며 '이렇게 ~한'의 의미입니다.",
    level: "beginner",
    example: "天气这样好，我们去散步吧。",
    exampleKr: "날씨가 이렇게 좋은데, 우리 산책 가자."
  },
  6: {
    sentenceIndex: 6,
    sentence: "我一时想不起",
    structure: "동사+不起",
    explanation: "동작을 실현할 수 없음을 나타내는 가능보어입니다.",
    level: "intermediate",
    example: "我买不起这辆车。",
    exampleKr: "나는 이 차를 살 수 없다."
  },
  7: {
    sentenceIndex: 7,
    sentence: "啊 在梦里",
    expanded: "啊，原来是在梦里。",
    translationKr: "아, 알고 보니 꿈속에서였어.",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: ""
  },
  8: {
    sentenceIndex: 8,
    sentence: "梦里 梦里见过你",
    structure: "동사+过",
    explanation: "과거에 어떤 동작을 경험했음을 나타냅니다.",
    level: "beginner",
    example: "他吃过中国菜。",
    exampleKr: "그는 중국 음식을 먹어 본 적이 있다."
  },
  9: {
    sentenceIndex: 9,
    sentence: "甜蜜 笑得多甜蜜",
    structure: "……得……",
    explanation: "'동사+得+보어' 구조로 동작의 정도나 결과를 나타냅니다.",
    level: "beginner",
    example: "她笑得很好看。",
    exampleKr: "그녀는 웃는 모습이 아름답다."
  },
  10: {
    sentenceIndex: 10,
    sentence: "是你 是你 梦见的就是你",
    structure: "是……的",
    explanation: "이미 발생한 일의 주체, 시간, 장소 등을 강조할 때 사용합니다.",
    level: "intermediate",
    example: "我是昨天来的。",
    exampleKr: "나는 어제 왔어."
  },
  11: {
    sentenceIndex: 11,
    sentence: "在哪里 在哪里见过你",
    structure: "동사+过",
    explanation: "과거에 어떤 동작을 경험했음을 나타냅니다.",
    level: "beginner",
    example: "我去过北京。",
    exampleKr: "나는 베이징에 가 본 적이 있다."
  },
  12: {
    sentenceIndex: 12,
    sentence: "你的笑容这样熟悉",
    structure: "这样……",
    explanation: "'这样'는 정도를 강조하며 '이렇게 ~한'의 의미입니다.",
    level: "beginner",
    example: "他这样努力，一定能成功。",
    exampleKr: "그가 이렇게 열심히 하니, 분명 성공할 거야."
  },
  13: {
    sentenceIndex: 13,
    sentence: "我一时想不起",
    structure: "동사+不起",
    explanation: "동작을 실현할 수 없음을 나타내는 가능보어입니다.",
    level: "intermediate",
    example: "他看不起别人。",
    exampleKr: "그는 남을 무시한다."
  },
  14: {
    sentenceIndex: 14,
    sentence: "啊 在梦里",
    expanded: "啊，原来是在梦里。",
    translationKr: "아, 알고 보니 꿈속에서였어.",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: ""
  },
  15: {
    sentenceIndex: 15,
    sentence: "在哪里 在哪里见过你",
    structure: "동사+过",
    explanation: "과거에 어떤 동작을 경험했음을 나타냅니다.",
    level: "beginner",
    example: "你听过这首歌吗？",
    exampleKr: "너 이 노래 들어 본 적 있니?"
  },
  16: {
    sentenceIndex: 16,
    sentence: "你的笑容这样熟悉",
    structure: "这样……",
    explanation: "'这样'는 정도를 강조하며 '이렇게 ~한'의 의미입니다.",
    level: "beginner",
    example: "问题这样简单，谁都会。",
    exampleKr: "문제가 이렇게 간단하니, 누구나 할 수 있어."
  },
  17: {
    sentenceIndex: 17,
    sentence: "我一时想不起",
    structure: "동사+不起",
    explanation: "동작을 실현할 수 없음을 나타내는 가능보어입니다.",
    level: "intermediate",
    example: "我记不起他的名字。",
    exampleKr: "나는 그의 이름이 기억나지 않는다."
  },
  18: {
    sentenceIndex: 18,
    sentence: "啊 在梦里",
    expanded: "啊，原来是在梦里。",
    translationKr: "아, 알고 보니 꿈속에서였어.",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: ""
  },
  19: {
    sentenceIndex: 19,
    sentence: "梦里 梦里见过你",
    structure: "동사+过",
    explanation: "과거에 어떤 동작을 경험했음을 나타냅니다.",
    level: "beginner",
    example: "我学过汉语。",
    exampleKr: "나는 중국어를 배운 적이 있다."
  },
  20: {
    sentenceIndex: 20,
    sentence: "甜蜜笑得多甜蜜",
    structure: "……得……",
    explanation: "'동사+得+보어' 구조로 동작의 정도나 결과를 나타냅니다.",
    level: "beginner",
    example: "他高兴得跳了起来。",
    exampleKr: "그는 기뻐서 펄쩍 뛰었다."
  },
  21: {
    sentenceIndex: 21,
    sentence: "是你 是你 梦见的就是你",
    structure: "是……的",
    explanation: "이미 발생한 일의 주체, 시간, 장소 등을 강조할 때 사용합니다.",
    level: "intermediate",
    example: "他是坐飞机去的。",
    exampleKr: "그는 비행기를 타고 갔어."
  },
  22: {
    sentenceIndex: 22,
    sentence: "在哪里 在哪里见过你",
    structure: "동사+过",
    explanation: "과거에 어떤 동작을 경험했음을 나타냅니다.",
    level: "beginner",
    example: "她见过他。",
    exampleKr: "그녀는 그를 만난 적이 있다."
  },
  23: {
    sentenceIndex: 23,
    sentence: "你的笑容这样熟悉",
    structure: "这样……",
    explanation: "'这样'는 정도를 강조하며 '이렇게 ~한'의 의미입니다.",
    level: "beginner",
    example: "她这样漂亮，大家都喜欢她。",
    exampleKr: "그녀가 이렇게 예쁘니, 모두가 그녀를 좋아해."
  },
  24: {
    sentenceIndex: 24,
    sentence: "我一时想不起",
    structure: "동사+不起",
    explanation: "동작을 실현할 수 없음을 나타내는 가능보어입니다.",
    level: "intermediate",
    example: "她承担不起这个责任。",
    exampleKr: "그녀는 이 책임을 감당할 수 없다."
  },
  25: {
    sentenceIndex: 25,
    sentence: "啊 在梦里",
    expanded: "啊，原来是在梦里。",
    translationKr: "아, 알고 보니 꿈속에서였어.",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: ""
  }
};

// 获取指定句子的句式分析
export function getSentenceStructure(sentenceIndex: number): SentenceStructure | null {
  return tianmimiSentenceStructures[sentenceIndex] || null;
}



// 海上花句式结构分析数据

import { SentenceStructure } from './tianmimiSentenceStructures';

// 每句歌词对应的句式结构分析（跳过标题信息，从实际歌词开始）
export const haishanghuaSentenceStructures: Record<number, SentenceStructure> = {
  1: {
    sentenceIndex: 1,
    sentence: "是这般柔情的你",
    structure: "是……的",
    explanation: "문장의 특정 성분을 강조하거나 성질, 상태를 설명할 때 사용됩니다.",
    level: "beginner",
    example: "他是昨天来的。",
    exampleKr: "그는 어제 온 것이다.",
    expanded: "",
    translationKr: ""
  },
  2: {
    sentenceIndex: 2,
    sentence: "给我一个梦想",
    structure: "给 + 목적어1 + 목적어2",
    explanation: "~에게 ~을 주다라는 의미의 수여 동사 구문입니다.",
    level: "beginner",
    example: "请给我一杯咖啡。",
    exampleKr: "저에게 커피 한 잔 주세요.",
    expanded: "",
    translationKr: ""
  },
  3: {
    sentenceIndex: 3,
    sentence: "徜徉在起伏的波浪中盈盈的荡漾",
    structure: "在……中",
    explanation: "어떠한 범위나 공간, 과정의 '안/가운데'를 나타냅니다.",
    level: "beginner",
    example: "他在休息中。",
    exampleKr: "그는 휴식 중이다.",
    expanded: "",
    translationKr: ""
  },
  4: {
    sentenceIndex: 4,
    sentence: "在你的臂弯",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "在你的臂弯里",
    translationKr: "당신의 품 안에서"
  },
  5: {
    sentenceIndex: 5,
    sentence: "是这般深情的你",
    structure: "是……的",
    explanation: "대상의 정체성이나 특징을 정의하거나 강조할 때 사용됩니다.",
    level: "beginner",
    example: "这本书是我的。",
    exampleKr: "이 책은 내 것이다.",
    expanded: "",
    translationKr: ""
  },
  6: {
    sentenceIndex: 6,
    sentence: "摇晃我的梦想",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "摇晃着我的梦想",
    translationKr: "나의 꿈을 흔드네"
  },
  7: {
    sentenceIndex: 7,
    sentence: "缠绵象海里每一个无名的浪花",
    structure: "象……",
    explanation: "비유를 나타내며 '~와 같다' 혹은 '~처럼'이라는 의미를 가집니다.",
    level: "intermediate",
    example: "他长得象他的爸爸。",
    exampleKr: "그는 그의 아버지를 닮았다.",
    expanded: "",
    translationKr: ""
  },
  8: {
    sentenceIndex: 8,
    sentence: "在你的身上",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "就在你的身上",
    translationKr: "당신의 곁에(당신에게)"
  },
  9: {
    sentenceIndex: 9,
    sentence: "睡梦成真",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "愿睡梦能成真",
    translationKr: "꿈이 현실이 되다"
  },
  10: {
    sentenceIndex: 10,
    sentence: "转身浪影汹涌没红尘",
    structure: "",
    explanation: "",
    level: "advanced",
    example: "",
    exampleKr: "",
    expanded: "转身时浪影汹涌，淹没了红尘",
    translationKr: "몸을 돌리니 파도 그림자 출렁이며 속세로 사라지네"
  },
  11: {
    sentenceIndex: 11,
    sentence: "残留水纹 空留遗恨",
    structure: "",
    explanation: "",
    level: "advanced",
    example: "",
    exampleKr: "",
    expanded: "只残留水纹，空留下了遗恨",
    translationKr: "잔물결만 남고 헛된 회한만 남았네"
  },
  12: {
    sentenceIndex: 12,
    sentence: "愿只愿他生",
    structure: "愿……",
    explanation: "바람이나 기원을 나타낼 때 문두에 사용합니다.",
    level: "intermediate",
    example: "愿你一路平安。",
    exampleKr: "당신의 길이 평안하길 빕니다.",
    expanded: "",
    translationKr: ""
  },
  13: {
    sentenceIndex: 13,
    sentence: "昨日的身影能相随",
    structure: "能……",
    explanation: "능력이나 가능성을 나타내는 조동사입니다.",
    level: "beginner",
    example: "他能说汉语。",
    exampleKr: "그는 중국어를 할 줄 안다.",
    expanded: "",
    translationKr: ""
  },
  14: {
    sentenceIndex: 14,
    sentence: "永生永世不离分",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "永生永世不再离分",
    translationKr: "영원토록 헤어지지 않으리"
  },
  15: {
    sentenceIndex: 15,
    sentence: "是这般奇情的你",
    structure: "是……的",
    explanation: "동작의 방식이나 대상을 묘사할 때 강조를 위해 사용합니다.",
    level: "beginner",
    example: "我们是坐飞机去的。",
    exampleKr: "우리는 비행기를 타고 간 것이다.",
    expanded: "",
    translationKr: ""
  },
  16: {
    sentenceIndex: 16,
    sentence: "粉碎我的梦想",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "粉碎了我的梦想",
    translationKr: "나의 꿈을 가루로 만드네"
  },
  17: {
    sentenceIndex: 17,
    sentence: "仿佛象水面泡沫的短暂光亮",
    structure: "仿佛……",
    explanation: "마치 ~인 것 같다라는 추측성 비유를 나타냅니다.",
    level: "intermediate",
    example: "那声音仿佛在耳边响起。",
    exampleKr: "그 소리는 마치 귓가에서 울리는 것 같았다.",
    expanded: "",
    translationKr: ""
  },
  18: {
    sentenceIndex: 18,
    sentence: "是我的一生",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "这就是我的一生",
    translationKr: "그것이 나의 일생이라네"
  },
  19: {
    sentenceIndex: 19,
    sentence: "睡梦成真",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "睡梦最终成真了",
    translationKr: "꿈이 현실이 되다"
  },
  20: {
    sentenceIndex: 20,
    sentence: "转身浪影汹涌没红尘",
    structure: "",
    explanation: "",
    level: "advanced",
    example: "",
    exampleKr: "",
    expanded: "回头转身浪影汹涌淹没红尘",
    translationKr: "몸을 돌리니 파도 그림자 출렁이며 속세로 사라지네"
  },
  21: {
    sentenceIndex: 21,
    sentence: "残留水纹 空留遗恨",
    structure: "",
    explanation: "",
    level: "advanced",
    example: "",
    exampleKr: "",
    expanded: "只剩下水纹，空留下了遗憾",
    translationKr: "잔물결만 남고 헛된 회한만 남았네"
  },
  22: {
    sentenceIndex: 22,
    sentence: "愿只愿他生",
    structure: "愿……",
    explanation: "간절한 소망이나 기도를 나타내는 표현입니다.",
    level: "intermediate",
    example: "但愿人长久。",
    exampleKr: "다만 당신이 오래도록 건강하길 바랍니다.",
    expanded: "",
    translationKr: ""
  },
  23: {
    sentenceIndex: 23,
    sentence: "昨日的身影能相随",
    structure: "能……",
    explanation: "허가나 실현 가능한 조건을 나타냅니다.",
    level: "beginner",
    example: "这里能停车吗？",
    exampleKr: "여기에 주차할 수 있나요?",
    expanded: "",
    translationKr: ""
  },
  24: {
    sentenceIndex: 24,
    sentence: "永生永世不离分",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "生生世世永不分离",
    translationKr: "영원토록 헤어지지 않으리"
  },
  25: {
    sentenceIndex: 25,
    sentence: "是这般奇情的你",
    structure: "是……的",
    explanation: "판단이나 긍정의 어기를 강조할 때 사용됩니다.",
    level: "beginner",
    example: "他是一定会来的。",
    exampleKr: "그는 반드시 올 것이다.",
    expanded: "",
    translationKr: ""
  },
  26: {
    sentenceIndex: 26,
    sentence: "粉碎我的梦想",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "你粉碎了我的梦想",
    translationKr: "나의 꿈을 산산조각 냈지"
  },
  27: {
    sentenceIndex: 27,
    sentence: "仿佛象水面泡沫的短暂光亮",
    structure: "仿佛……",
    explanation: "문어체에서 추측이나 비유적 묘사를 도입할 때 씁니다.",
    level: "intermediate",
    example: "她的笑脸仿佛一朵花。",
    exampleKr: "그녀의 웃는 얼굴은 마치 꽃 한 송이 같다.",
    expanded: "",
    translationKr: ""
  },
  28: {
    sentenceIndex: 28,
    sentence: "是我的一生",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "这就是我的一生啊",
    translationKr: "이것이 나의 일생이라네"
  }
};

// 获取指定句子的句式结构
export function getSentenceStructure(sentenceIndex: number): SentenceStructure | undefined {
  return haishanghuaSentenceStructures[sentenceIndex];
}


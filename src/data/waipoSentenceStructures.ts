// 外婆的澎湖湾歌词句式训练数据
// 根据每句歌词提供句式结构分析

import { SentenceStructure } from './tianmimiSentenceStructures';

// 每句歌词对应的句式分析（只包含有句式的句子，删除只有扩写的句子）
export const waipoSentenceStructures: Record<number, SentenceStructure> = {
  1: {
    sentenceIndex: 1,
    sentence: "外婆的澎湖湾",
    structure: "……的……",
    explanation: "명사나 대명사 뒤에 붙어 관형어임을 나타내며, 소유나 수식의 관계를 표현합니다.",
    level: "beginner",
    example: "这是我的书。",
    exampleKr: "이것은 제 책입니다.",
    expanded: "",
    translationKr: ""
  },
  3: {
    sentenceIndex: 3,
    sentence: "没有椰林缀斜阳 只是一片海蓝蓝",
    structure: "没有……只是……",
    explanation: "~이 없고 단지 ~일 뿐이다라는 뜻으로, 상황을 한정하여 설명할 때 사용합니다.",
    level: "intermediate",
    example: "屋里没有别人，只是他一个人。",
    exampleKr: "방 안에는 다른 사람이 없고 단지 그 혼자뿐입니다.",
    expanded: "",
    translationKr: ""
  },
  4: {
    sentenceIndex: 4,
    sentence: "坐在门前的矮墙上 一遍遍幻想",
    structure: "在……上",
    explanation: "특정한 장소나 위치의 범위를 나타내는 방위사 구조입니다.",
    level: "beginner",
    example: "桌子上有一本书。",
    exampleKr: "책상 위에 책이 한 권 있습니다.",
    expanded: "",
    translationKr: ""
  },
  5: {
    sentenceIndex: 5,
    sentence: "也是黄昏的沙滩上 有着脚印两对半",
    structure: "V + 着",
    explanation: "동사 뒤에 쓰여 동작의 지속이나 상태의 유지를 나타냅니다.",
    level: "beginner",
    example: "墙上挂着一张画。",
    exampleKr: "벽에 그림 한 장이 걸려 있습니다.",
    expanded: "",
    translationKr: ""
  },
  6: {
    sentenceIndex: 6,
    sentence: "那是外婆拄着杖 将我手轻轻挽",
    structure: "将……",
    explanation: "처치문(把자문)의 서면어 표현으로, 목적어를 동사 앞으로 이끌어 강조할 때 사용합니다.",
    level: "advanced",
    example: "请将垃圾扔进垃圾桶。",
    exampleKr: "쓰레기를 쓰레기통에 버려 주세요.",
    expanded: "",
    translationKr: ""
  },
  7: {
    sentenceIndex: 7,
    sentence: "踩着薄暮走向余晖 暖暖的澎湖湾",
    structure: "走向……",
    explanation: "동사 '走'와 방향보어 '向'이 결합하여 특정 목표나 방향을 향해 이동함을 나타냅니다.",
    level: "intermediate",
    example: "我们要走向更加美好的未来。",
    exampleKr: "우리는 더 아름다운 미래를 향해 나아가야 합니다.",
    expanded: "",
    translationKr: ""
  },
  9: {
    sentenceIndex: 9,
    sentence: "直到夜色吞没我俩 在回家的路上",
    structure: "直到……",
    explanation: "시간이나 상황이 특정 시점에 이를 때까지를 나타낼 때 사용합니다.",
    level: "intermediate",
    example: "他直到深夜才回家。",
    exampleKr: "그는 밤이 깊어서야 집에 돌아왔습니다.",
    expanded: "",
    translationKr: ""
  },
  10: {
    sentenceIndex: 10,
    sentence: "澎湖湾 澎湖湾 外婆的澎湖湾",
    structure: "……的……",
    explanation: "명사 수식 구조로, 여기서는 소유 관계를 나타냅니다.",
    level: "beginner",
    example: "漂亮的衣服。",
    exampleKr: "예쁜 옷.",
    expanded: "",
    translationKr: ""
  },
  11: {
    sentenceIndex: 11,
    sentence: "有我许多的童年幻想",
    structure: "有……",
    explanation: "특정 장소나 시간 안에 무엇이 존재함을 나타냅니다.",
    level: "beginner",
    example: "教室里有很多学生。",
    exampleKr: "교실에 많은 학생이 있습니다.",
    expanded: "",
    translationKr: ""
  },
  12: {
    sentenceIndex: 12,
    sentence: "阳光 沙滩 海浪 仙人掌 还有一位老船长",
    structure: "还有……",
    explanation: "이미 언급한 항목 외에 또 다른 대상을 추가할 때 사용합니다.",
    level: "beginner",
    example: "我有苹果、香蕉，还有橘子。",
    exampleKr: "저는 사과, 바나나, 그리고 귤도 가지고 있습니다.",
    expanded: "",
    translationKr: ""
  },
  14: {
    sentenceIndex: 14,
    sentence: "没有椰林缀斜阳 只是一片海蓝蓝",
    structure: "没有……只是……",
    explanation: "부정과 긍정을 대조하여 상황을 명확히 설명합니다.",
    level: "intermediate",
    example: "我没有生气，只是有点累。",
    exampleKr: "화난 게 아니라 단지 좀 피곤할 뿐이에요.",
    expanded: "",
    translationKr: ""
  },
  15: {
    sentenceIndex: 15,
    sentence: "坐在门前的矮墙上 一遍遍幻想",
    structure: "在……上",
    explanation: "공간적인 위치를 나타내는 격틀 구조입니다.",
    level: "beginner",
    example: "地图上标得很清楚。",
    exampleKr: "지도 위에 아주 명확하게 표시되어 있습니다.",
    expanded: "",
    translationKr: ""
  },
  16: {
    sentenceIndex: 16,
    sentence: "也是黄昏的沙滩上 有着脚印两对半",
    structure: "V + 着",
    explanation: "상태의 지속을 나타내는 동태조사 '着'를 활용한 구조입니다.",
    level: "beginner",
    example: "他穿着一件红毛衣。",
    exampleKr: "그는 빨간색 스웨터를 입고 있습니다.",
    expanded: "",
    translationKr: ""
  },
  17: {
    sentenceIndex: 17,
    sentence: "那是外婆拄着杖 将我手轻轻挽",
    structure: "将……",
    explanation: "목적어를 강조하거나 동작의 결과를 명확히 할 때 사용하는 문어체적 표현입니다.",
    level: "advanced",
    example: "老师将课文读了一遍。",
    exampleKr: "선생님께서 본문을 한 번 읽으셨습니다.",
    expanded: "",
    translationKr: ""
  },
  18: {
    sentenceIndex: 18,
    sentence: "踩着薄暮走向余晖 暖暖的澎湖湾",
    structure: "走向……",
    explanation: "나아가고자 하는 방향이나 목적지를 구체화합니다.",
    level: "intermediate",
    example: "运动员走向了领奖台。",
    exampleKr: "선수들이 시상대를 향해 걸어갔습니다.",
    expanded: "",
    translationKr: ""
  },
  20: {
    sentenceIndex: 20,
    sentence: "直到夜色吞没我俩 在回家的路上",
    structure: "直到……",
    explanation: "동작이나 상태가 끝나는 한계 시점을 강조합니다.",
    level: "intermediate",
    example: "直到今天，我才明白他的意思。",
    exampleKr: "오늘에야 비로소 그의 뜻을 이해했습니다.",
    expanded: "",
    translationKr: ""
  },
  21: {
    sentenceIndex: 21,
    sentence: "澎湖湾 澎湖湾 外婆的澎湖湾",
    structure: "……的……",
    explanation: "관형어와 중심어 사이의 결합을 돕는 구조조사입니다.",
    level: "beginner",
    example: "北京的风景。",
    exampleKr: "북경의 풍경.",
    expanded: "",
    translationKr: ""
  },
  22: {
    sentenceIndex: 22,
    sentence: "有我许多的童年幻想",
    structure: "有……",
    explanation: "존재문을 구성하는 가장 기초적인 동사입니다.",
    level: "beginner",
    example: "这里有个秘密。",
    exampleKr: "여기에 비밀이 하나 있습니다.",
    expanded: "",
    translationKr: ""
  },
  23: {
    sentenceIndex: 23,
    sentence: "阳光 沙滩 海浪 仙人掌 还有一位老船长",
    structure: "还有……",
    explanation: "열거의 마지막에 덧붙여 포함 관계를 완성합니다.",
    level: "beginner",
    example: "这里有花，还有草。",
    exampleKr: "여기에는 꽃도 있고, 풀도 있습니다.",
    expanded: "",
    translationKr: ""
  },
  24: {
    sentenceIndex: 24,
    sentence: "澎湖湾 澎湖湾 外婆的澎湖湾",
    structure: "……的……",
    explanation: "성질이나 상태를 수식하는 구조입니다.",
    level: "beginner",
    example: "努力的学生。",
    exampleKr: "노력하는 학생.",
    expanded: "",
    translationKr: ""
  },
  25: {
    sentenceIndex: 25,
    sentence: "有我许多的童年幻想",
    structure: "有……",
    explanation: "대상의 소유나 상태의 구비를 나타냅니다.",
    level: "beginner",
    example: "包里有钱。",
    exampleKr: "가방 안에 돈이 있습니다.",
    expanded: "",
    translationKr: ""
  },
  26: {
    sentenceIndex: 26,
    sentence: "阳光 沙滩 海浪 仙人掌 还有一位老船长",
    structure: "还有……",
    explanation: "항목을 추가하여 보충 설명할 때 사용합니다.",
    level: "beginner",
    example: "不仅有咖啡，还有茶。",
    exampleKr: "뿐만 아니라 차도 있습니다.",
    expanded: "",
    translationKr: ""
  },
  27: {
    sentenceIndex: 27,
    sentence: "还有一位老船长",
    structure: "还有……",
    explanation: "앞서 언급된 것들에 더해 마지막 대상을 강조하며 덧붙입니다.",
    level: "beginner",
    example: "他会说英语，还会说法语。",
    exampleKr: "그는 영어를 할 줄 알고, 프랑스어도 할 줄 압니다.",
    expanded: "",
    translationKr: ""
  }
};

// 获取指定句子的句式结构
export function getSentenceStructure(sentenceIndex: number): SentenceStructure | undefined {
  return waipoSentenceStructures[sentenceIndex];
}


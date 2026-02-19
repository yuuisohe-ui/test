// 平凡之路歌词句式训练数据
// 根据每句歌词提供句式结构分析

import { SentenceStructure } from './tianmimiSentenceStructures';

// 每句歌词对应的句式分析
export const pingfanSentenceStructures: Record<number, SentenceStructure> = {
  2: {
    sentenceIndex: 2,
    sentence: "你要走吗",
    structure: "...吗?",
    explanation: "문장 끝에 붙어 예/아니오를 묻는 의문문을 만듭니다.",
    level: "beginner",
    example: "你吃饭了吗？",
    exampleKr: "밥 먹었나요?",
    expanded: "",
    translationKr: ""
  },
  4: {
    sentenceIndex: 4,
    sentence: "那也曾是我的模样",
    structure: "曾(经)是",
    explanation: "일찍이 ~였다. 과거의 상태나 신분을 나타낼 때 사용합니다.",
    level: "intermediate",
    example: "他曾是我的大学同学。",
    exampleKr: "그는 예전에 내 대학 동창이었다.",
    expanded: "",
    translationKr: ""
  },
  6: {
    sentenceIndex: 6,
    sentence: "你要去哪",
    structure: "哪",
    explanation: "장소를 묻는 의문 대명사입니다.",
    level: "beginner",
    example: "你在哪儿工作？",
    exampleKr: "당신은 어디에서 일합니까?",
    expanded: "",
    translationKr: ""
  },
  7: {
    sentenceIndex: 7,
    sentence: "谜一样的 沉默着的",
    structure: "...一样的",
    explanation: "마치 ~와 같은. 비유를 나타낼 때 사용합니다.",
    level: "intermediate",
    example: "像梦一样的生活。",
    exampleKr: "꿈같은 생활.",
    expanded: "",
    translationKr: ""
  },
  8: {
    sentenceIndex: 8,
    sentence: "故事你真的在听吗",
    structure: "在...吗?",
    explanation: "지금 ~하고 있는 중인가요? (현재 진행형 의문문)",
    level: "beginner",
    example: "你现在在看书吗？",
    exampleKr: "너 지금 책 읽고 있니?",
    expanded: "",
    translationKr: ""
  },
  9: {
    sentenceIndex: 9,
    sentence: "我曾经跨过山和大海",
    structure: "曾经...过",
    explanation: "이전에 ~한 적이 있다. 과거의 경험을 강조합니다.",
    level: "intermediate",
    example: "我曾经去过那个地方。",
    exampleKr: "나는 예전에 그곳에 가본 적이 있다.",
    expanded: "",
    translationKr: ""
  },
  10: {
    sentenceIndex: 10,
    sentence: "也穿过人山人海",
    structure: "也...过",
    explanation: "~도 한 적이 있다. 추가적인 경험을 나열합니다.",
    level: "beginner",
    example: "我也学过汉语。",
    exampleKr: "나도 중국어를 배운 적이 있다.",
    expanded: "",
    translationKr: ""
  },
  11: {
    sentenceIndex: 11,
    sentence: "我曾经拥有着一切",
    structure: "曾经...着",
    explanation: "일찍이 ~하고 있었다. 과거의 지속되었던 상태를 나타냅니다.",
    level: "intermediate",
    example: "他曾经深爱着那个女孩。",
    exampleKr: "그는 한때 그 소녀를 깊이 사랑하고 있었다.",
    expanded: "",
    translationKr: ""
  },
  12: {
    sentenceIndex: 12,
    sentence: "转眼都飘散如烟",
    structure: "...如...",
    explanation: "마치 ~와 같다. 문어체나 가사에서 자주 쓰이는 비유 표현입니다.",
    level: "advanced",
    example: "时光流逝如水。",
    exampleKr: "시간의 흐름이 물과 같다.",
    expanded: "",
    translationKr: ""
  },
  14: {
    sentenceIndex: 14,
    sentence: "直到看见平凡 才是唯一的答案",
    structure: "直到...才...",
    explanation: "~하고 나서야 비로소 ~하다. 특정 시점에 도달한 후 결과가 발생함을 나타냅니다.",
    level: "intermediate",
    example: "直到昨天我才知道真相。",
    exampleKr: "어제가 되어서야 나는 진상을 알게 되었다.",
    expanded: "",
    translationKr: ""
  },
  15: {
    sentenceIndex: 15,
    sentence: "当你仍然 还在幻想",
    structure: "当...（时）",
    explanation: "~할 때. 특정 상황이나 시기를 도입합니다.",
    level: "intermediate",
    example: "当我想你的时候，我会听音乐。",
    exampleKr: "네가 보고 싶을 때, 나는 음악을 들어.",
    expanded: "",
    translationKr: ""
  },
  17: {
    sentenceIndex: 17,
    sentence: "她会好吗 还是更烂",
    structure: "A 还是 B",
    explanation: "A인가요 아니면 B인가요? 둘 중 하나를 선택하는 의문문입니다.",
    level: "beginner",
    example: "你想喝茶还是咖啡？",
    exampleKr: "차 마실래요, 아니면 커피 마실래요?",
    expanded: "",
    translationKr: ""
  },
  18: {
    sentenceIndex: 18,
    sentence: "对我而言是另一天",
    structure: "对...而言",
    explanation: "~의 입장에서 말하자면, ~에게 있어서는.",
    level: "advanced",
    example: "对他而言，这只是个小问题。",
    exampleKr: "그에게 있어서 이것은 단지 작은 문제일 뿐이다.",
    expanded: "",
    translationKr: ""
  },
  20: {
    sentenceIndex: 20,
    sentence: "只想永远地离开",
    structure: "只想...",
    explanation: "단지 ~하고 싶을 뿐이다. 유일한 소망을 강조합니다.",
    level: "beginner",
    example: "我只想回家睡觉。",
    exampleKr: "나는 그저 집에 가서 자고 싶을 뿐이야.",
    expanded: "",
    translationKr: ""
  },
  22: {
    sentenceIndex: 22,
    sentence: "想挣扎无法自拔",
    structure: "无法...",
    explanation: "~할 방법이 없다, ~할 수 없다.",
    level: "intermediate",
    example: "我无法接受这个事实。",
    exampleKr: "나는 이 사실을 받아들일 수 없다.",
    expanded: "",
    translationKr: ""
  },
  23: {
    sentenceIndex: 23,
    sentence: "我曾经像你像他 像那野草野花",
    structure: "像...",
    explanation: "~와 같다, ~와 비슷하다. 대상을 비교하거나 비유합니다.",
    level: "beginner",
    example: "她长得像她妈妈。",
    exampleKr: "그녀는 엄마를 닮았다.",
    expanded: "",
    translationKr: ""
  },
  24: {
    sentenceIndex: 24,
    sentence: "绝望着 渴望着",
    structure: "V+着",
    explanation: "동작의 지속이나 상태의 유지를 나타냅니다.",
    level: "beginner",
    example: "门开着。",
    exampleKr: "문이 열려 있다.",
    expanded: "",
    translationKr: ""
  },
  25: {
    sentenceIndex: 25,
    sentence: "也哭也笑平凡着",
    structure: "也...也...",
    explanation: "~하기도 하고 ~하기도 하다. 두 가지 상태가 병존함을 나타냅니다.",
    level: "beginner",
    example: "这菜也好看也好吃。",
    exampleKr: "이 요리는 보기에도 좋고 맛도 좋다.",
    expanded: "",
    translationKr: ""
  },
  26: {
    sentenceIndex: 26,
    sentence: "向前走 就这么走",
    structure: "向...",
    explanation: "~를 향하여. 동작의 방향을 나타냅니다.",
    level: "beginner",
    example: "请向前看。",
    exampleKr: "앞을 봐 주세요.",
    expanded: "",
    translationKr: ""
  },
  27: {
    sentenceIndex: 27,
    sentence: "就算你被给过什么",
    structure: "就算...",
    explanation: "설령 ~일지라도. 가상의 양보를 나타냅니다.",
    level: "intermediate",
    example: "就算他不来，我们也要开始。",
    exampleKr: "설령 그가 오지 않더라도, 우리는 시작해야 한다.",
    expanded: "",
    translationKr: ""
  },
  28: {
    sentenceIndex: 28,
    sentence: "向前走 就这么走",
    structure: "就...",
    explanation: "강조나 결정의 의미를 나타내며, 여기서는 '그저 ~하다'의 느낌으로 쓰였습니다.",
    level: "beginner",
    example: "我就要去那儿。",
    exampleKr: "나는 바로 그곳에 갈 것이다.",
    expanded: "",
    translationKr: ""
  },
  29: {
    sentenceIndex: 29,
    sentence: "就算你被夺走什么",
    structure: "被...",
    explanation: "~에 의해 ~당하다. 피동을 나타냅니다.",
    level: "beginner",
    example: "我的钱包被偷了。",
    exampleKr: "내 지갑을 도둑맞았다.",
    expanded: "",
    translationKr: ""
  },
  31: {
    sentenceIndex: 31,
    sentence: "就算你会错过什么",
    structure: "会...",
    explanation: "~할 것이다. 추측이나 가능성을 나타냅니다.",
    level: "beginner",
    example: "明天会下雨吗？",
    exampleKr: "내일 비가 올까요?",
    expanded: "",
    translationKr: ""
  },
  48: {
    sentenceIndex: 48,
    sentence: "我曾经问遍整个世界",
    structure: "V + 遍",
    explanation: "동작이 모든 곳에 혹은 모든 대상에 미쳤음을 나타내는 결과 보어입니다.",
    level: "intermediate",
    example: "我找遍了所有房间也找不到钥匙。",
    exampleKr: "모든 방을 다 뒤졌는데도 열쇠를 못 찾았어.",
    expanded: "",
    translationKr: ""
  },
  49: {
    sentenceIndex: 49,
    sentence: "从来没得到答案",
    structure: "从来没...",
    explanation: "지금껏 ~한 적이 없다. 과거부터 현재까지 부정 상태가 지속됨을 의미합니다.",
    level: "intermediate",
    example: "我从来没见过他。",
    exampleKr: "나는 여태껏 그를 본 적이 없다.",
    expanded: "",
    translationKr: ""
  },
  50: {
    sentenceIndex: 50,
    sentence: "我不过像你像他 像那野草野花",
    structure: "不过",
    explanation: "단지 ~일 뿐이다. 범위를 제한하거나 강조할 때 사용합니다.",
    level: "intermediate",
    example: "这不过是个小玩笑。",
    exampleKr: "이건 단지 작은 농담일 뿐이야.",
    expanded: "",
    translationKr: ""
  },
  54: {
    sentenceIndex: 54,
    sentence: "明天已在眼前",
    structure: "已...",
    explanation: "이미 ~하다. '已经'의 단축형으로 문어체나 가사에서 많이 쓰입니다.",
    level: "intermediate",
    example: "木已成舟。",
    exampleKr: "이미 엎질러진 물이다 (나무가 이미 배가 되었다).",
    expanded: "",
    translationKr: ""
  },
  55: {
    sentenceIndex: 55,
    sentence: "风吹过的 路依然远",
    structure: "依然",
    explanation: "여전히, 예전과 다름없이.",
    level: "intermediate",
    example: "十年过去了，他依然那么年轻。",
    exampleKr: "10년이 지났지만, 그는 여전히 그렇게 젊다.",
    expanded: "",
    translationKr: ""
  },
  56: {
    sentenceIndex: 56,
    sentence: "你的故事讲到了哪",
    structure: "V + 到",
    explanation: "동작이 특정 지점이나 정도에 도달했음을 나타냅니다.",
    level: "beginner",
    example: "你看到哪一页了？",
    exampleKr: "너 몇 페이지까지 봤니?",
    expanded: "",
    translationKr: ""
  }
};

// 获取指定句子的句式结构
export function getSentenceStructure(sentenceIndex: number): SentenceStructure | undefined {
  return pingfanSentenceStructures[sentenceIndex];
}


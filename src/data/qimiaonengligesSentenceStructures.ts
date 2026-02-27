// 奇妙能力歌句式结构分析数据

import { SentenceStructure } from './tianmimiSentenceStructures';

// 每句歌词对应的句式结构分析
export const qimiaonengligesSentenceStructures: Record<number, SentenceStructure> = {
  1: {
    sentenceIndex: 1,
    sentence: "我看过沙漠下暴雨",
    structure: "V + 过",
    explanation: "과거의 경험을 나타내는 동태조사로, '~한 적이 있다'는 의미입니다.",
    level: "beginner",
    example: "我去过北京。",
    exampleKr: "나는 베이징에 가본 적이 있다.",
    expanded: "",
    translationKr: ""
  },
  2: {
    sentenceIndex: 2,
    sentence: "看过大海亲吻鲨鱼",
    structure: "V + 过",
    explanation: "동사 뒤에 쓰여 과거에 해당 동작을 경험했음을 나타냅니다.",
    level: "beginner",
    example: "我听过这首歌。",
    exampleKr: "나는 이 노래를 들어본 적이 있다.",
    expanded: "",
    translationKr: ""
  },
  3: {
    sentenceIndex: 3,
    sentence: "看过黄昏追逐黎明",
    structure: "V + 过",
    explanation: "과거에 발생했던 사건이나 경험을 강조할 때 사용합니다.",
    level: "beginner",
    example: "我看过那部电影。",
    exampleKr: "나는 그 영화를 본 적이 있다.",
    expanded: "",
    translationKr: ""
  },
  4: {
    sentenceIndex: 4,
    sentence: "没看过你",
    structure: "没 + V + 过",
    explanation: "경험을 나타내는 '过'의 부정형으로, '~해 본 적이 없다'는 의미입니다.",
    level: "beginner",
    example: "我没学过法语。",
    exampleKr: "나는 프랑스어를 배워본 적이 없다.",
    expanded: "",
    translationKr: ""
  },
  5: {
    sentenceIndex: 5,
    sentence: "我知道美丽会老去",
    structure: "会",
    explanation: "미래의 가능성이나 추측을 나타내며, '~할 것이다'라는 의미로 쓰입니다.",
    level: "beginner",
    example: "明天会下雨。",
    exampleKr: "내일은 비가 올 것이다.",
    expanded: "",
    translationKr: ""
  },
  6: {
    sentenceIndex: 6,
    sentence: "生命之外还有生命",
    structure: "……之外",
    explanation: "일정한 범위나 기준을 벗어난 '~이외에', '~밖에'라는 의미를 나타냅니다.",
    level: "intermediate",
    example: "除了工作之外，他喜欢游泳。",
    exampleKr: "일하는 것 외에, 그는 수영하는 것을 좋아한다.",
    expanded: "",
    translationKr: ""
  },
  7: {
    sentenceIndex: 7,
    sentence: "我知道风里有诗句 不知道你",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "我知道风里藏着诗句，却唯独不了解你。",
    translationKr: "바람 속에 시구가 담겨 있다는 것은 알지만, 당신은 알지 못합니다."
  },
  8: {
    sentenceIndex: 8,
    sentence: "我听过荒芜变成热闹",
    structure: "变成",
    explanation: "사물의 성질이나 상태가 다른 것으로 바뀔 때 사용하는 결과보어 형태입니다.",
    level: "intermediate",
    example: "水变成了冰。",
    exampleKr: "물이 얼음으로 변했다.",
    expanded: "",
    translationKr: ""
  },
  9: {
    sentenceIndex: 9,
    sentence: "听过尘埃掩埋城堡",
    structure: "V + 过",
    explanation: "특정 사건을 목격하거나 들었던 경험을 서술합니다.",
    level: "beginner",
    example: "我吃过这种水果。",
    exampleKr: "나는 이런 과일을 먹어본 적이 있다.",
    expanded: "",
    translationKr: ""
  },
  10: {
    sentenceIndex: 10,
    sentence: "听过天空拒绝飞鸟 没听过你",
    structure: "没 + V + 过",
    explanation: "이전에 한 번도 경험하지 못한 사실을 나타냅니다.",
    level: "beginner",
    example: "我从没见过他。",
    exampleKr: "나는 그를 한 번도 본 적이 없다.",
    expanded: "",
    translationKr: ""
  },
  11: {
    sentenceIndex: 11,
    sentence: "我明白眼前都是气泡",
    structure: "都 + 是",
    explanation: "범위 내의 모든 대상을 포괄하며 강한 긍정의 어조를 나타냅니다.",
    level: "beginner",
    example: "这些书都是我的。",
    exampleKr: "이 책들은 모두 내 것이다.",
    expanded: "",
    translationKr: ""
  },
  12: {
    sentenceIndex: 12,
    sentence: "安静的才是苦口良药",
    structure: "……才是……",
    explanation: "특정한 조건을 강조하며 '~이야말로 비로소 ~이다'라는 의미를 전달합니다.",
    level: "intermediate",
    example: "坚持才是胜利。",
    exampleKr: "끈기야말로 승리다.",
    expanded: "",
    translationKr: ""
  },
  13: {
    sentenceIndex: 13,
    sentence: "明白什么才让我骄傲 不明白你",
    structure: "让",
    explanation: "사역 동사로 '~로 하여금 ~하게 하다'라는 의미를 나타냅니다.",
    level: "beginner",
    example: "这件事让他很高兴。",
    exampleKr: "이 일은 그를 매우 기쁘게 했다.",
    expanded: "",
    translationKr: ""
  },
  14: {
    sentenceIndex: 14,
    sentence: "我拒绝更好更圆的月亮",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "我拒绝去追求那些看起来更好、更圆满的月亮。",
    translationKr: "나는 더 좋고 더 둥근 달(완벽함)을 거절합니다."
  },
  15: {
    sentenceIndex: 15,
    sentence: "拒绝未知的疯狂",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "我也拒绝那些无法预知的疯狂举动。",
    translationKr: "알 수 없는 광기도 거절합니다."
  },
  16: {
    sentenceIndex: 16,
    sentence: "拒绝声色的张扬 不拒绝你",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "虽然我拒绝世俗的喧嚣与张扬，但我绝不拒绝你。",
    translationKr: "세속의 화려한 과시는 거절해도, 당신은 거절하지 않습니다."
  },
  17: {
    sentenceIndex: 17,
    sentence: "我变成荒凉的景象",
    structure: "变成",
    explanation: "변화의 결과를 강조하여 '~한 상태가 되다'를 나타냅니다.",
    level: "intermediate",
    example: "丑小鸭变成了白天鹅。",
    exampleKr: "미운 오리 새끼가 백조가 되었다.",
    expanded: "",
    translationKr: ""
  },
  18: {
    sentenceIndex: 18,
    sentence: "变成无所谓的模样",
    structure: "变成",
    explanation: "대상의 형태나 모습이 전환되었음을 나타냅니다.",
    level: "intermediate",
    example: "梦想变成了现实。",
    exampleKr: "꿈이 현실이 되었다.",
    expanded: "",
    translationKr: ""
  },
  19: {
    sentenceIndex: 19,
    sentence: "变成透明的高墙 没能变成你",
    structure: "没能",
    explanation: "객관적인 사정이나 능력으로 인해 '~할 수 없었다'는 부정의 의미입니다.",
    level: "intermediate",
    example: "我没能参加他的婚礼。",
    exampleKr: "나는 그의 결혼식에 참석하지 못했다.",
    expanded: "",
    translationKr: ""
  },
  20: {
    sentenceIndex: 20,
    sentence: "我听过空境的回音",
    structure: "V + 过",
    explanation: "청각을 통한 과거의 경험을 나타냅니다.",
    level: "beginner",
    example: "我读过这本书。",
    exampleKr: "나는 이 책을 읽어본 적이 있다.",
    expanded: "",
    translationKr: ""
  },
  21: {
    sentenceIndex: 21,
    sentence: "雨水浇绿孤山岭",
    structure: "V + Adj (결과보어)",
    explanation: "동작의 결과로 인해 목적지의 상태가 형용사하게 변했음을 나타냅니다.",
    level: "advanced",
    example: "她染红了头发。",
    exampleKr: "그녀는 머리를 붉게 물들였다.",
    expanded: "",
    translationKr: ""
  },
  22: {
    sentenceIndex: 22,
    sentence: "听过被诅咒的秘密 没听过你",
    structure: "被",
    explanation: "피동문을 만들며, 주어가 동작을 가하는 것이 아니라 당하는 것임을 나타냅니다.",
    level: "intermediate",
    example: "手机被他拿走了。",
    exampleKr: "휴대폰을 그가 가져가 버렸다.",
    expanded: "",
    translationKr: ""
  },
  23: {
    sentenceIndex: 23,
    sentence: "我抓住散落的欲望",
    structure: "V + 住",
    explanation: "결과보어 '住'는 동작을 통해 고정되거나 정지된 상태를 유지함을 나타냅니다.",
    level: "intermediate",
    example: "请记住我的电话。",
    exampleKr: "제 전화번호를 꼭 기억해 주세요.",
    expanded: "",
    translationKr: ""
  },
  24: {
    sentenceIndex: 24,
    sentence: "缱绻的馥郁让我紧张",
    structure: "让",
    explanation: "어떠한 원인이 대상을 특정 심리 상태로 만들 때 사용합니다.",
    level: "beginner",
    example: "这部电影让我很感动。",
    exampleKr: "이 영화는 나를 매우 감동시켰다.",
    expanded: "",
    translationKr: ""
  },
  25: {
    sentenceIndex: 25,
    sentence: "我抓住世间的假象 没抓住你",
    structure: "没 + V + 住",
    explanation: "동작을 시도했으나 고정시키거나 확보하는 결과에 도달하지 못했음을 나타냅니다.",
    level: "intermediate",
    example: "他没能停住车。",
    exampleKr: "그는 차를 멈추지 못했다.",
    expanded: "",
    translationKr: ""
  },
  26: {
    sentenceIndex: 26,
    sentence: "我包容六月清泉结冰",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "我甚至能包容在六月里清泉结成了冰这种反常的事。",
    translationKr: "나는 유월의 샘물이 얼어붙는 것조차 포용합니다."
  },
  27: {
    sentenceIndex: 27,
    sentence: "包容不老的生命",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "我也能包容那些违反自然规律、永不衰老的生命。",
    translationKr: "늙지 않는 생명을 포용합니다."
  },
  28: {
    sentenceIndex: 28,
    sentence: "包容世界的迟疑 没包容你",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "我可以包容这个世界所有的迟疑，却唯独没有包容下你。",
    translationKr: "세상의 망설임은 포용했으나, 정작 당신은 포용하지 못했습니다."
  },
  29: {
    sentenceIndex: 29,
    sentence: "我忘了置身濒绝孤岛",
    structure: "",
    explanation: "",
    level: "advanced",
    example: "",
    exampleKr: "",
    expanded: "我忘了自己正身处于濒临绝境的孤岛之中。",
    translationKr: "내가 절멸 직전의 외딴섬에 처해 있다는 사실을 잊었습니다."
  },
  30: {
    sentenceIndex: 30,
    sentence: "忘了眼泪不过失效药",
    structure: "不过",
    explanation: "범위를 한정하여 '단지 ~에 불과하다'는 의미로, 뒤에 오는 내용을 가볍게 여길 때 씁니다.",
    level: "intermediate",
    example: "这不过是个误会。",
    exampleKr: "이것은 단지 오해일 뿐이다.",
    expanded: "",
    translationKr: ""
  },
  31: {
    sentenceIndex: 31,
    sentence: "忘了百年无声口号 没能忘记你",
    structure: "没能",
    explanation: "능력이나 상황의 부정으로, 과거에 어떤 일을 실현하지 못했음을 나타냅니다.",
    level: "intermediate",
    example: "我没能赶上最后一班车。",
    exampleKr: "나는 마지막 버스를 타지 못했다.",
    expanded: "",
    translationKr: ""
  },
  32: {
    sentenceIndex: 32,
    sentence: "我想要更好更圆的月亮",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "我曾经想要追求那些看起来更完美、更圆满的事物。",
    translationKr: "나는 더 좋고 더 둥근 달을 원했습니다."
  },
  33: {
    sentenceIndex: 33,
    sentence: "想要未知的疯狂",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "我也曾渴望去体验那些充满未知的疯狂生活。",
    translationKr: "알 수 없는 광기를 원했습니다."
  },
  34: {
    sentenceIndex: 34,
    sentence: "想要声色的张扬 我想要你",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "但现在，我真正想要的只有你而已。",
    translationKr: "하지만 지금 내가 원하는 것은 당신뿐입니다."
  }
};

// 获取指定句子的句式结构
export function getSentenceStructure(sentenceIndex: number): SentenceStructure | undefined {
  return qimiaonengligesSentenceStructures[sentenceIndex] ?? undefined;
}


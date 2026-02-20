// 消愁句式结构分析数据

import { SentenceStructure } from './tianmimiSentenceStructures';

// 每句歌词对应的句式结构分析
export const xiaochouSentenceStructures: Record<number, SentenceStructure> = {
  1: {
    sentenceIndex: 1,
    sentence: "当你走进这欢乐场",
    structure: "当……",
    explanation: "'~할 때'라는 의미로, 특정한 시간이나 상황을 나타낼 때 사용합니다.",
    level: "beginner",
    example: "当他回来的时候, 已经下雨了。",
    exampleKr: "그가 돌아왔을 때, 이미 비가 내리고 있었다.",
    expanded: "",
    translationKr: ""
  },
  2: {
    sentenceIndex: 2,
    sentence: "背上所有的梦与想",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "背上所有的梦与想 (모든 꿈과 이상을 등에 짊어지고)",
    translationKr: "모든 꿈과 이상을 등에 짊어지고"
  },
  3: {
    sentenceIndex: 3,
    sentence: "各色的脸上各色的妆",
    structure: "各……各……",
    explanation: "각기 다른 대상이 서로 다른 속성이나 상태를 가지고 있음을 나타냅니다.",
    level: "intermediate",
    example: "各人有各人的看法。",
    exampleKr: "사람마다 각자의 견해가 있다.",
    expanded: "",
    translationKr: ""
  },
  4: {
    sentenceIndex: 4,
    sentence: "没人记得你的模样",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "没人记得你的模样 (아무도 당신의 모습을 기억하지 못하네)",
    translationKr: "아무도 당신의 모습을 기억하지 못하네"
  },
  5: {
    sentenceIndex: 5,
    sentence: "三巡酒过你在角落",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "三巡酒过你在角落 (술이 세 차례 돌고 당신은 구석에 있네)",
    translationKr: "술이 세 차례 돌고 당신은 구석에 있네"
  },
  6: {
    sentenceIndex: 6,
    sentence: "固执地唱着苦涩的歌",
    structure: "……地……",
    explanation: "형용사 뒤에 붙어 동사를 수식하는 부사형태를 만듭니다.",
    level: "beginner",
    example: "他飞快地跑向学校。",
    exampleKr: "그는 아주 빠르게 학교로 뛰어갔다.",
    expanded: "",
    translationKr: ""
  },
  7: {
    sentenceIndex: 7,
    sentence: "听他在喧嚣里被淹没",
    structure: "被",
    explanation: "동작의 대상을 주어로 하여 '~을 당하다'라는 의미의 피동문을 만듭니다.",
    level: "beginner",
    example: "那本书被我借走了。",
    exampleKr: "그 책은 내가 빌려 갔다.",
    expanded: "",
    translationKr: ""
  },
  8: {
    sentenceIndex: 8,
    sentence: "你拿起酒杯对自己说",
    structure: "对……说",
    explanation: "'~에게 말하다'라는 의미로, 말하는 대상 앞에 '对'를 사용합니다.",
    level: "beginner",
    example: "妈妈对他说了几句话。",
    exampleKr: "어머니는 그에게 몇 마디 말씀을 하셨다.",
    expanded: "",
    translationKr: ""
  },
  9: {
    sentenceIndex: 9,
    sentence: "一杯敬朝阳",
    structure: "A 敬 B",
    explanation: "A가 B에게 경의를 표하거나 술을 바칠 때 사용하는 표현입니다.",
    level: "intermediate",
    example: "我敬您一杯酒。",
    exampleKr: "제가 당신께 술 한 잔 올리겠습니다.",
    expanded: "",
    translationKr: ""
  },
  10: {
    sentenceIndex: 10,
    sentence: "一杯敬月光",
    structure: "A 敬 B",
    explanation: "존경의 마음을 담아 건배하거나 대상을 기리는 구조입니다.",
    level: "intermediate",
    example: "我们要敬畏自然。",
    exampleKr: "우리는 자연을 경외해야 한다.",
    expanded: "",
    translationKr: ""
  },
  11: {
    sentenceIndex: 11,
    sentence: "唤醒我的向往",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "唤醒我的向往 (나의 동경을 깨우고)",
    translationKr: "나의 동경을 깨우고"
  },
  12: {
    sentenceIndex: 12,
    sentence: "温柔了寒窗",
    structure: "",
    explanation: "",
    level: "advanced",
    example: "",
    exampleKr: "",
    expanded: "温柔了寒窗 (고된 공부의 세월을 따스하게 감싸네)",
    translationKr: "고된 공부의 세월을 따스하게 감싸네"
  },
  13: {
    sentenceIndex: 13,
    sentence: "于是可以不回头地逆风飞翔",
    structure: "于是",
    explanation: "앞선 상황의 결과로 '그리하여, 그래서'라는 인과관계를 나타냅니다.",
    level: "intermediate",
    example: "他努力学习, 于是考上了大学。",
    exampleKr: "그는 열심히 공부했고, 그래서 대학에 합격했다.",
    expanded: "",
    translationKr: ""
  },
  14: {
    sentenceIndex: 14,
    sentence: "不怕心头有雨 眼底有霜",
    structure: "",
    explanation: "",
    level: "advanced",
    example: "",
    exampleKr: "",
    expanded: "不怕心头有雨 眼底有霜 (마음속에 비가 내리고 눈가에 서리가 내려도 두렵지 않네)",
    translationKr: "마음속에 비가 내리고 눈가에 서리가 내려도 두렵지 않네"
  },
  15: {
    sentenceIndex: 15,
    sentence: "一杯敬故乡",
    structure: "A 敬 B",
    explanation: "대상을 향한 헌정이나 예우를 나타내는 문장 구조입니다.",
    level: "intermediate",
    example: "这一杯敬远道而来的客人们。",
    exampleKr: "이 한 잔을 멀리서 오신 손님들께 바칩니다.",
    expanded: "",
    translationKr: ""
  },
  16: {
    sentenceIndex: 16,
    sentence: "一杯敬远方",
    structure: "A 敬 B",
    explanation: "특정 대상에 대한 감사의 마음이나 의례를 표현합니다.",
    level: "intermediate",
    example: "大家举杯敬一下王老师。",
    exampleKr: "모두 잔을 들어 왕 선생님께 한 잔 올립시다.",
    expanded: "",
    translationKr: ""
  },
  17: {
    sentenceIndex: 17,
    sentence: "守着我的善良",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "守着我的善良 (나의 선량함을 지키며)",
    translationKr: "나의 선량함을 지키며"
  },
  18: {
    sentenceIndex: 18,
    sentence: "催着我成长",
    structure: "催",
    explanation: "어떤 행동을 빨리 하도록 재촉하거나 독촉할 때 사용합니다.",
    level: "intermediate",
    example: "妈妈总是催我赶快起床。",
    exampleKr: "어머니는 항상 나에게 빨리 일어나라고 재촉하신다.",
    expanded: "",
    translationKr: ""
  },
  19: {
    sentenceIndex: 19,
    sentence: "所以南北的路从此不再漫长",
    structure: "所以",
    explanation: "원인에 따른 결과를 이끄는 접속사로 '그래서, 그러므로'의 뜻입니다.",
    level: "beginner",
    example: "下雨了, 所以我不出去了。",
    exampleKr: "비가 와서 나는 나가지 않겠다.",
    expanded: "",
    translationKr: ""
  },
  20: {
    sentenceIndex: 20,
    sentence: "灵魂不再无处安放",
    structure: "不再",
    explanation: "상태나 행동이 '더 이상 ~하지 않다'라는 지속의 중단을 의미합니다.",
    level: "intermediate",
    example: "我不再是一个小孩子了。",
    exampleKr: "나는 더 이상 어린아이가 아니다.",
    expanded: "",
    translationKr: ""
  },
  21: {
    sentenceIndex: 21,
    sentence: "一杯敬明天",
    structure: "A 敬 B",
    explanation: "앞으로의 일이나 특정 시점을 향해 바치는 인사의 표현입니다.",
    level: "intermediate",
    example: "让我们敬未来的梦想。",
    exampleKr: "우리의 미래의 꿈을 위해 건배합시다.",
    expanded: "",
    translationKr: ""
  },
  22: {
    sentenceIndex: 22,
    sentence: "一杯敬过往",
    structure: "A 敬 B",
    explanation: "지나간 시간이나 인연에 대한 예우를 표하는 구조입니다.",
    level: "intermediate",
    example: "这杯酒敬我们失去的青春。",
    exampleKr: "이 술 한 잔을 우리가 잃어버린 청춘에게 바칩니다.",
    expanded: "",
    translationKr: ""
  },
  23: {
    sentenceIndex: 23,
    sentence: "支撑我的身体 厚重了肩膀",
    structure: "",
    explanation: "",
    level: "advanced",
    example: "",
    exampleKr: "",
    expanded: "支撑我的身体 厚重了肩膀 (내 몸을 지탱하며 어깨를 묵직하게 하네)",
    translationKr: "내 몸을 지탱하며 어깨를 묵직하게 하네"
  },
  24: {
    sentenceIndex: 24,
    sentence: "虽然从不相信所谓山高水长",
    structure: "虽然",
    explanation: "'비록 ~일지라도'라는 뜻으로, 역접 관계를 이끄는 접속사입니다.",
    level: "beginner",
    example: "虽然天气很冷, 但是他还是出门了。",
    exampleKr: "비록 날씨가 춥지만, 그는 그래도 외출했다.",
    expanded: "",
    translationKr: ""
  },
  25: {
    sentenceIndex: 25,
    sentence: "人生苦短何必念念不忘",
    structure: "何必",
    explanation: "'하필이면 왜, 굳이 ~할 필요가 있는가'라는 의미의 반문형입니다.",
    level: "advanced",
    example: "既然都结束了, 你又何必难过呢？",
    exampleKr: "이미 다 끝난 일인데, 굳이 슬퍼할 필요가 있니?",
    expanded: "",
    translationKr: ""
  },
  26: {
    sentenceIndex: 26,
    sentence: "一杯敬自由",
    structure: "A 敬 B",
    explanation: "추상적인 가치에 대해 경의를 표하거나 기리는 표현입니다.",
    level: "intermediate",
    example: "敬自由而独立的灵魂。",
    exampleKr: "자유롭고 독립적인 영혼을 위하여 건배.",
    expanded: "",
    translationKr: ""
  },
  27: {
    sentenceIndex: 27,
    sentence: "一杯敬死亡",
    structure: "A 敬 B",
    explanation: "어떠한 결과나 숙명에 대해 겸허히 받아들이며 예를 표하는 구조입니다.",
    level: "intermediate",
    example: "向勇敢牺牲的人敬个礼。",
    exampleKr: "용감하게 희생된 분들께 경의를 표합시다.",
    expanded: "",
    translationKr: ""
  },
  28: {
    sentenceIndex: 28,
    sentence: "宽恕我的平凡",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "宽恕我的平凡 (나의 평범함을 용서하고)",
    translationKr: "나의 평범함을 용서하고"
  },
  29: {
    sentenceIndex: 29,
    sentence: "驱散了迷惘",
    structure: "",
    explanation: "",
    level: "advanced",
    example: "",
    exampleKr: "",
    expanded: "驱散了迷惘 (망설임과 미혹을 쫓아버리네)",
    translationKr: "망설임과 미혹을 쫓아버리네"
  },
  30: {
    sentenceIndex: 30,
    sentence: "好吧天亮之后总是潦草离场",
    structure: "总是",
    explanation: "'항상, 언제나'라는 의미로 반복되는 상황이나 습관을 나타냅니다.",
    level: "beginner",
    example: "他总是迟到。",
    exampleKr: "그는 항상 지각한다.",
    expanded: "",
    translationKr: ""
  },
  31: {
    sentenceIndex: 31,
    sentence: "清醒的人最荒唐",
    structure: "最",
    explanation: "'가장, 제일'이라는 의미로 최상급을 나타낼 때 형용사 앞에 사용합니다.",
    level: "beginner",
    example: "这是我最喜欢的电影。",
    exampleKr: "이것은 내가 가장 좋아하는 영화다.",
    expanded: "",
    translationKr: ""
  },
  32: {
    sentenceIndex: 32,
    sentence: "好吧天亮之后总是潦草离场",
    structure: "总是",
    explanation: "늘 일어나는 빈도나 변하지 않는 상황을 강조할 때 씁니다.",
    level: "beginner",
    example: "我总是忘记带钥匙。",
    exampleKr: "나는 맨날 열쇠 챙기는 걸 잊어버린다.",
    expanded: "",
    translationKr: ""
  },
  33: {
    sentenceIndex: 33,
    sentence: "清醒的人最荒唐",
    structure: "最",
    explanation: "범위 내에서 정도가 최고임을 나타냅니다.",
    level: "beginner",
    example: "班里小明最高。",
    exampleKr: "반에서 샤오밍이 키가 제일 크다.",
    expanded: "",
    translationKr: ""
  }
};


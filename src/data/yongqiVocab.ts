// 勇气歌词词汇分析数据
// 根据每句歌词提供词汇难度分级

import { WordAnalysis } from './tianmimiVocab';

// 每句歌词对应的词汇分析
export const yongqiVocabAnalysis: Record<number, WordAnalysis[]> = {
  1: [
    {
      word: "终于",
      pinyin: "zhōng yú",
      level: "intermediate",
      meaning: "表示经过种种变化或一段时间以后出现某种结果",
      meaningKr: "마침내, 결국",
      example: "他终于完成了这项艰巨的任务。",
      exampleKr: "그는 마침내 이 어려운 임무를 완수했다."
    },
    {
      word: "决定",
      pinyin: "jué dìng",
      level: "intermediate",
      meaning: "对如何行动做出主张",
      meaningKr: "결정하다",
      example: "我决定明年去中国留学。",
      exampleKr: "나는 내년에 중국으로 유학 가기로 결정했다."
    }
  ],
  2: [
    {
      word: "别人",
      pinyin: "bié ren",
      level: "basic",
      meaning: "指自己或某人以外的人",
      meaningKr: "다른 사람, 타인",
      example: "我们应该多为别人着想。",
      exampleKr: "우리는 다른 사람을 좀 더 배려해야 한다."
    }
  ],
  3: [
    {
      word: "肯定",
      pinyin: "kěn dìng",
      level: "intermediate",
      meaning: "对事物的存在或真实性表示赞成；一定",
      meaningKr: "긍정하다, 확신하다",
      example: "他的回答得到了大家的肯定。",
      exampleKr: "그의 대답은 모두의 긍정을 얻었다."
    }
  ],
  4: [
    {
      word: "天涯海角",
      pinyin: "tiān yá hǎi jiǎo",
      level: "advanced",
      meaning: "形容极远的地方，或相隔极远",
      meaningKr: "하늘 끝 땅 모서리, 아주 먼 곳",
      example: "无论你走到天涯海角，我都会记得你。",
      exampleKr: "당신이 세상 끝 어디를 가더라도 난 당신을 기억할 거예요."
    }
  ],
  5: [
    {
      word: "容易",
      pinyin: "róng yì",
      level: "basic",
      meaning: "做起来不费事",
      meaningKr: "쉽다",
      example: "学习汉语并不容易，但很有趣。",
      exampleKr: "중국어를 배우는 것은 쉽지 않지만 매우 재미있다."
    }
  ],
  6: [
    {
      word: "温习",
      pinyin: "wēn xí",
      level: "advanced",
      meaning: "复习学过的知识或技能",
      meaningKr: "복습하다, 익히다",
      example: "考试前，我们需要好好温习功课。",
      exampleKr: "시험 전에 우리는 공부한 것을 잘 복습해야 한다."
    },
    {
      word: "说服",
      pinyin: "shuō fú",
      level: "advanced",
      meaning: "用理由充分的话开导对方，使之信服",
      meaningKr: "설득하다",
      example: "他终于说服了父母让他去旅行。",
      exampleKr: "그는 마침내 부모님을 설득해 여행을 가게 되었다."
    }
  ],
  7: [
    {
      word: "放弃",
      pinyin: "fàng qì",
      level: "intermediate",
      meaning: "丢掉原有的权利、主张、意见等",
      meaningKr: "포기하다",
      example: "无论遇到什么困难，都不要轻易放弃。",
      exampleKr: "어떤 어려움에 부딪히더라도 쉽게 포기하지 마세요."
    }
  ],
  8: [
    {
      word: "勇气",
      pinyin: "yǒng qì",
      level: "intermediate",
      meaning: "敢作敢为、毫不畏惧的气魄",
      meaningKr: "용기",
      example: "面对困难，我们需要巨大的勇气。",
      exampleKr: "어려움에 맞서기 위해 우리에게는 커다란 용기가 필요하다."
    }
  ],
  9: [
    {
      word: "流言蜚语",
      pinyin: "liú yán fēi yǔ",
      level: "advanced",
      meaning: "毫无根据的毁谤性的话",
      meaningKr: "유언비어",
      example: "你不必在意那些流言蜚语。",
      exampleKr: "그런 유언비어들에 신경 쓸 필요 없어요."
    }
  ],
  10: [
    {
      word: "眼神",
      pinyin: "yǎn shén",
      level: "intermediate",
      meaning: "眼睛的神态",
      meaningKr: "눈빛",
      example: "他的眼神里充满了期待。",
      exampleKr: "그의 눈빛은 기대감으로 가득 차 있었다."
    }
  ],
  11: [
    {
      word: "意义",
      pinyin: "yì yì",
      level: "intermediate",
      meaning: "事物所包含的思想和道理",
      meaningKr: "의의, 의미",
      example: "这是一次非常有意义的活动。",
      exampleKr: "이것은 매우 의미 있는 활동이었다."
    }
  ],
  12: [
    {
      word: "勇气",
      pinyin: "yǒng qì",
      level: "intermediate",
      meaning: "敢作敢为、毫不畏惧的气魄",
      meaningKr: "용기",
      example: "我们要有勇气去挑战自己。",
      exampleKr: "우리는 자신에게 도전할 용기가 있어야 한다."
    }
  ],
  13: [
    {
      word: "相信",
      pinyin: "xiāng xìn",
      level: "intermediate",
      meaning: "认为正确或确实而不怀疑",
      meaningKr: "믿다",
      example: "请相信我，我一定会做好的。",
      exampleKr: "저를 믿어주세요, 제가 반드시 잘 해낼게요."
    }
  ],
  14: [
    {
      word: "拥挤",
      pinyin: "yōng jǐ",
      level: "intermediate",
      meaning: "人物、车辆等密集，挤在一起",
      meaningKr: "혼잡하다, 붐비다",
      example: "上下班时间的地铁非常拥挤。",
      exampleKr: "출퇴근 시간의 지하철은 매우 붐빈다."
    }
  ],
  15: [
    {
      word: "手心",
      pinyin: "shǒu xīn",
      level: "intermediate",
      meaning: "手掌的中心",
      meaningKr: "손바닥, 손안",
      example: "他紧张得手心里全是汗。",
      exampleKr: "그는 너무 긴장해서 손바닥에 땀이 흥건했다."
    }
  ],
  16: [
    {
      word: "真心",
      pinyin: "zhēn xīn",
      level: "intermediate",
      meaning: "真实的心意",
      meaningKr: "진심",
      example: "谢谢你对我的真心帮助。",
      exampleKr: "저를 진심으로 도와주셔서 감사합니다."
    }
  ],
  17: [
    {
      word: "终于",
      pinyin: "zhōng yú",
      level: "intermediate",
      meaning: "表示经过种种变化或一段时间以后出现某种结果",
      meaningKr: "마침내, 결국",
      example: "春天终于来了。",
      exampleKr: "마침내 봄이 왔다."
    }
  ],
  18: [
    {
      word: "别人",
      pinyin: "bié ren",
      level: "basic",
      meaning: "指自己或某人以外的人",
      meaningKr: "다른 사람, 타인",
      example: "不要随便拿别人的东西。",
      exampleKr: "남의 물건을 함부로 가져가지 마라."
    }
  ],
  19: [
    {
      word: "肯定",
      pinyin: "kěn dìng",
      level: "intermediate",
      meaning: "对事物的存在或真实性表示赞成；一定",
      meaningKr: "긍정하다, 확신하다",
      example: "我肯定他今天会来。",
      exampleKr: "나는 그가 오늘 올 것이라고 확신한다."
    }
  ],
  20: [
    {
      word: "愿意",
      pinyin: "yuàn yì",
      level: "basic",
      meaning: "乐意；情愿",
      meaningKr: "원하다, ~하고 싶다",
      example: "你愿意和我一起去吗？",
      exampleKr: "나와 함께 가고 싶니?"
    }
  ],
  21: [
    {
      word: "容易",
      pinyin: "róng yì",
      level: "basic",
      meaning: "做起来不费事",
      meaningKr: "쉽다",
      example: "成功并不是一件容易的事。",
      exampleKr: "성공은 결코 쉬운 일이 아니다."
    }
  ],
  22: [
    {
      word: "说服",
      pinyin: "shuō fú",
      level: "advanced",
      meaning: "用理由充分的话开导对方，使之信服",
      meaningKr: "설득하다",
      example: "事实胜于雄辩，终于说服了他。",
      exampleKr: "사실이 웅변보다 낫기에 마침내 그를 설득했다."
    }
  ],
  23: [
    {
      word: "放弃",
      pinyin: "fàng qì",
      level: "intermediate",
      meaning: "丢掉原有的权利、主张、意见等",
      meaningKr: "포기하다",
      example: "失败了也不要放弃希望。",
      exampleKr: "실패하더라도 희망을 포기하지 마라."
    }
  ],
  24: [
    {
      word: "勇气",
      pinyin: "yǒng qì",
      level: "intermediate",
      meaning: "敢作敢为、毫不畏惧的气魄",
      meaningKr: "용기",
      example: "承认错误也需要勇气。",
      exampleKr: "잘못을 인정하는 것에도 용기가 필요하다."
    }
  ],
  25: [
    {
      word: "流言蜚语",
      pinyin: "liú yán fēi yǔ",
      level: "advanced",
      meaning: "毫无根据的毁谤性的话",
      meaningKr: "유언비어",
      example: "不要让流言蜚语伤害到你。",
      exampleKr: "유언비어가 당신을 상처 입히게 두지 마세요."
    }
  ],
  26: [
    {
      word: "眼神",
      pinyin: "yǎn shén",
      level: "intermediate",
      meaning: "眼睛的神态",
      meaningKr: "눈빛",
      example: "他坚定的眼神给了我力量。",
      exampleKr: "그의 확고한 눈빛이 나에게 힘을 주었다."
    }
  ],
  27: [
    {
      word: "意义",
      pinyin: "yì yì",
      level: "intermediate",
      meaning: "事物所包含的思想和道理",
      meaningKr: "의의, 의미",
      example: "生命的意义在于奋斗。",
      exampleKr: "인생의 의미는 고군분투하는 데 있다."
    }
  ],
  28: [
    {
      word: "勇气",
      pinyin: "yǒng qì",
      level: "intermediate",
      meaning: "敢作敢为、毫不畏惧的气魄",
      meaningKr: "용기",
      example: "爱一个人需要很大的勇气。",
      exampleKr: "누군가를 사랑하는 데는 큰 용기가 필요하다."
    }
  ],
  29: [
    {
      word: "相信",
      pinyin: "xiāng xìn",
      level: "intermediate",
      meaning: "认为正确或确实而不怀疑",
      meaningKr: "믿다",
      example: "我们要相信科学。",
      exampleKr: "우리는 과학을 믿어야 한다."
    }
  ],
  30: [
    {
      word: "拥挤",
      pinyin: "yōng jǐ",
      level: "intermediate",
      meaning: "人物、车辆等密集，挤在一起",
      meaningKr: "혼잡하다, 붐비다",
      example: "节日期间，商场里非常拥挤。",
      exampleKr: "명절 기간 동안 백화점 안은 매우 붐볐다."
    }
  ],
  31: [
    {
      word: "手心",
      pinyin: "shǒu xīn",
      level: "intermediate",
      meaning: "手掌的中心",
      meaningKr: "손바닥, 손안",
      example: "他把这颗珍珠捧在手心里。",
      exampleKr: "그는 이 진주를 손바닥 위에 받쳐 들었다."
    }
  ],
  32: [
    {
      word: "真心",
      pinyin: "zhēn xīn",
      level: "intermediate",
      meaning: "真实的心意",
      meaningKr: "진심",
      example: "我是真心希望能帮到你。",
      exampleKr: "나는 당신을 도울 수 있기를 진심으로 바란다."
    }
  ],
  33: [
    {
      word: "坚强",
      pinyin: "jiān qiáng",
      level: "intermediate",
      meaning: "强固有力，不可动摇或摧毁",
      meaningKr: "꿋꿋하다, 강하다",
      example: "她是一个性格坚强的女孩子。",
      exampleKr: "그녀는 성격이 강인한 소녀이다."
    },
    {
      word: "任性",
      pinyin: "rèn xìng",
      level: "advanced",
      meaning: "放任自己的性子，不加约束",
      meaningKr: "제멋대로 하다",
      example: "小孩子太任性了不好。",
      exampleKr: "어린아이가 너무 제멋대로 하는 것은 좋지 않다."
    }
  ],
  34: [
    {
      word: "伤害",
      pinyin: "shāng hài",
      level: "intermediate",
      meaning: "使身体或感情受到损害",
      meaningKr: "상처를 주다, 해치다",
      example: "这种行为会伤害到别人的感情。",
      exampleKr: "이런 행동은 다른 사람의 감정에 상처를 줄 수 있다."
    }
  ],
  35: [
    {
      word: "温柔",
      pinyin: "wēn róu",
      level: "intermediate",
      meaning: "温和柔顺",
      meaningKr: "온유하다, 다정하다",
      example: "他的性格非常温柔。",
      exampleKr: "그의 성격은 매우 다정하다."
    },
    {
      word: "提醒",
      pinyin: "tí xǐng",
      level: "intermediate",
      meaning: "从旁指点，引起注意",
      meaningKr: "일깨워 주다, 주의를 주다",
      example: "谢谢你提醒我带伞。",
      exampleKr: "우산을 챙기라고 일깨워 주어서 고마워요."
    }
  ],
  36: [
    {
      word: "虽然",
      pinyin: "suī rán",
      level: "basic",
      meaning: "用在前半句，表示承认某种事实，后半句常用'但是'",
      meaningKr: "비록 ~일지라도",
      example: "虽然雨很大，但我还是准时到了。",
      exampleKr: "비록 비가 많이 왔지만, 나는 정시에 도착했다."
    }
  ],
  37: [
    {
      word: "错过",
      pinyin: "cuò guò",
      level: "intermediate",
      meaning: "失去（机会等）",
      meaningKr: "놓치다",
      example: "不要错过这次绝好的机会。",
      exampleKr: "이번 절호의 기회를 놓치지 마세요."
    }
  ],
  38: [
    {
      word: "勇气",
      pinyin: "yǒng qì",
      level: "intermediate",
      meaning: "敢作敢为、毫不畏惧的气魄",
      meaningKr: "용기",
      example: "他鼓起勇气向她表白。",
      exampleKr: "그는 용기를 내어 그녀에게 고백했다."
    }
  ],
  39: [
    {
      word: "流言蜚语",
      pinyin: "liú yán fēi yǔ",
      level: "advanced",
      meaning: "毫无根据的毁谤性的话",
      meaningKr: "유언비어",
      example: "我们要有辨别流言蜚语的能力。",
      exampleKr: "우리는 유언비어를 가려내는 능력이 있어야 한다."
    }
  ],
  40: [
    {
      word: "眼神",
      pinyin: "yǎn shén",
      level: "intermediate",
      meaning: "眼睛的神态",
      meaningKr: "눈빛",
      example: "从眼神就能看出他在撒谎。",
      exampleKr: "눈빛만 봐도 그가 거짓말을 하고 있다는 것을 알 수 있다."
    }
  ],
  41: [
    {
      word: "意义",
      pinyin: "yì yì",
      level: "intermediate",
      meaning: "事物所包含的思想和道理",
      meaningKr: "의의, 의미",
      example: "努力工作的意义是什么？",
      exampleKr: "열심히 일하는 의미가 무엇인가요?"
    }
  ],
  42: [
    {
      word: "勇气",
      pinyin: "yǒng qì",
      level: "intermediate",
      meaning: "敢作敢为、毫不畏惧的气魄",
      meaningKr: "용기",
      example: "面对失败也需要勇气。",
      exampleKr: "실패에 맞서는 것 역시 용기가 필요하다."
    }
  ],
  43: [
    {
      word: "相信",
      pinyin: "xiāng xìn",
      level: "intermediate",
      meaning: "认为正确或确实而不怀疑",
      meaningKr: "믿다",
      example: "我相信只要努力就一定有收获。",
      exampleKr: "노력하기만 하면 반드시 결실이 있을 거라 믿는다."
    }
  ],
  44: [
    {
      word: "拥挤",
      pinyin: "yōng jǐ",
      level: "intermediate",
      meaning: "人物、车辆等密集，挤在一起",
      meaningKr: "혼잡하다, 붐비다",
      example: "街道上车辆拥挤，交通缓慢。",
      exampleKr: "거리에 차들이 붐벼서 교통이 지체되고 있다."
    }
  ],
  45: [
    {
      word: "手心",
      pinyin: "shǒu xīn",
      level: "intermediate",
      meaning: "手掌的中心",
      meaningKr: "손바닥, 손안",
      example: "她把硬币紧紧握在手心里。",
      exampleKr: "그녀는 동전을 손바닥 안에 꽉 쥐었다."
    }
  ],
  46: [
    {
      word: "真心",
      pinyin: "zhēn xīn",
      level: "intermediate",
      meaning: "真实的心意",
      meaningKr: "진심",
      example: "我真心为你感到高兴。",
      exampleKr: "당신을 위해 진심으로 기뻐요."
    }
  ]
};

// 获取指定句子的词汇分析
export function getVocabForSentence(sentenceIndex: number): WordAnalysis[] {
  return yongqiVocabAnalysis[sentenceIndex] || [];
}

// 获取所有词汇（去重）
export function getAllVocab(): WordAnalysis[] {
  const allWords = Object.values(yongqiVocabAnalysis).flat();
  const uniqueWords = new Map<string, WordAnalysis>();
  allWords.forEach(word => {
    if (!uniqueWords.has(word.word)) {
      uniqueWords.set(word.word, word);
    }
  });
  return Array.from(uniqueWords.values());
}


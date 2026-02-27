// 像我这样的人歌词词汇分析数据
// 根据每句歌词提供词汇难度分级

import { WordAnalysis } from './tianmimiVocab';

// 每句歌词对应的词汇分析（跳过订阅提示的句子）
export const xiangwozheyangderenVocabAnalysis: Record<number, WordAnalysis[]> = {
  1: [
    {
      word: "优秀",
      pinyin: "yōu xiù",
      level: "intermediate",
      meaning: "非常出色",
      meaningKr: "우수하다",
      example: "他是一个非常优秀的学生。",
      exampleKr: "그는 매우 우수한 학생이다."
    }
  ],
  2: [
    {
      word: "灿烂",
      pinyin: "càn làn",
      level: "advanced",
      meaning: "光彩鲜明耀眼",
      meaningKr: "찬란하다",
      example: "阳光灿烂的日子，心情也会变好。",
      exampleKr: "햇살이 눈부신 날에는 기분도 좋아진다."
    }
  ],
  3: [
    {
      word: "到头来",
      pinyin: "dào tóu lái",
      level: "advanced",
      meaning: "最后、结果",
      meaningKr: "결국에 가서는",
      example: "他忙活了半天，到头来却一场空。",
      exampleKr: "그는 한참 동안 바쁘게 움직였지만, 결국 아무것도 얻지 못했다."
    },
    {
      word: "浮沉",
      pinyin: "fú chén",
      level: "advanced",
      meaning: "随波逐流，比喻盛衰、进退",
      meaningKr: "부침",
      example: "他在商海中浮沉多年，见惯了风浪。",
      exampleKr: "그는 비즈니스 세계에서 수년 동안 부침을 겪으며 풍파에 익숙해졌다."
    }
  ],
  4: [
    {
      word: "聪明",
      pinyin: "cōng ming",
      level: "beginner",
      meaning: "智力发达，记忆和理解能力强",
      meaningKr: "똑똑하다",
      example: "这孩子非常聪明，一教就会。",
      exampleKr: "이 아이는 매우 똑똑해서 한 번 가르치면 바로 깨우친다."
    }
  ],
  5: [
    {
      word: "告别",
      pinyin: "gào bié",
      level: "advanced",
      meaning: "离别、辞别",
      meaningKr: "작별하다",
      example: "他向朋友们一一告别后离开了。",
      exampleKr: "그는 친구들에게 일일이 작별 인사를 하고 떠났다."
    },
    {
      word: "单纯",
      pinyin: "dān chún",
      level: "advanced",
      meaning: "思想简单，不复杂",
      meaningKr: "단순하다",
      example: "他是一个想法很单纯的人。",
      exampleKr: "그는 생각이 매우 단순한 사람이다."
    }
  ],
  6: [
    {
      word: "伤痕",
      pinyin: "shāng hén",
      level: "advanced",
      meaning: "伤口愈合后留下的痕迹",
      meaningKr: "상흔/상처",
      example: "他的手臂上留下了一道长长的伤痕。",
      exampleKr: "그의 팔에는 길고 긴 흉터가 하나 남았다."
    }
  ],
  7: [
    {
      word: "迷茫",
      pinyin: "mí máng",
      level: "advanced",
      meaning: "迷糊，不知所措",
      meaningKr: "망막하다/갈피를 못 잡다",
      example: "面对未来的选择，他感到有些迷茫。",
      exampleKr: "미래의 선택 앞에서 그는 다소 막막함을 느꼈다."
    }
  ],
  8: [
    {
      word: "寻找",
      pinyin: "xún zhǎo",
      level: "intermediate",
      meaning: "去找某人或某物",
      meaningKr: "찾다",
      example: "他在树林里寻找丢失的钥匙。",
      exampleKr: "그는 숲속에서 잃어버린 열쇠를 찾고 있다."
    }
  ],
  9: [
    {
      word: "碌碌无为",
      pinyin: "lù lù wú wéi",
      level: "advanced",
      meaning: "平庸而无所作为",
      meaningKr: "평범하고 하는 일이 없다",
      example: "我不甘心一辈子这样碌碌无为。",
      exampleKr: "나는 평생 이렇게 하는 일 없이 평범하게 사는 것이 달갑지 않다."
    }
  ],
  10: [],
  12: [
    {
      word: "庸俗",
      pinyin: "yōng sú",
      level: "advanced",
      meaning: "低级、不雅致",
      meaningKr: "속되다/저속하다",
      example: "这个故事的结局有些庸俗。",
      exampleKr: "이 이야기의 결말은 다소 속되다."
    }
  ],
  13: [
    {
      word: "深沉",
      pinyin: "shēn chén",
      level: "advanced",
      meaning: "程度深，或者性格沉稳",
      meaningKr: "심침하다/진중하다",
      example: "他是一个性格深沉的人，很少说话。",
      exampleKr: "그는 성격이 진중한 사람이라 말을 거의 하지 않는다."
    }
  ],
  14: [
    {
      word: "偶尔",
      pinyin: "ǒu ěr",
      level: "intermediate",
      meaning: "间或、有时候",
      meaningKr: "가끔",
      example: "我偶尔也会回想起童年的趣事。",
      exampleKr: "나도 가끔 어린 시절의 재미있는 일들을 회상하곤 한다."
    },
    {
      word: "晃了神",
      pinyin: "huàng le shén",
      level: "advanced",
      meaning: "走神、精神不集中",
      meaningKr: "멍해지다",
      example: "听到这个消息，他不由得晃了神。",
      exampleKr: "그 소식을 듣고 그는 자신도 모르게 멍해졌다."
    }
  ],
  15: [
    {
      word: "懦弱",
      pinyin: "nuò ruò",
      level: "advanced",
      meaning: "胆小，没有勇气",
      meaningKr: "나약하다",
      example: "在困难面前，我们不能表现得太懦弱。",
      exampleKr: "어려움 앞에서 우리는 너무 나약한 모습을 보여서는 안 된다."
    }
  ],
  16: [
    {
      word: "凡事",
      pinyin: "fán shì",
      level: "intermediate",
      meaning: "不论什么事情",
      meaningKr: "만사/모든 일",
      example: "凡事都要尽力而为。",
      exampleKr: "모든 일에 최선을 다해야 한다."
    }
  ],
  17: [
    {
      word: "奋不顾身",
      pinyin: "fèn bù gù shēn",
      level: "advanced",
      meaning: "奋勇向前，不顾个人安危",
      meaningKr: "몸을 돌보지 않고 뛰어들다",
      example: "为了救落水的小孩，他奋不顾身地跳进河里。",
      exampleKr: "물에 빠진 아이를 구하기 위해 그는 몸을 돌보지 않고 강물로 뛰어들었다."
    }
  ],
  18: [
    {
      word: "迷茫",
      pinyin: "mí máng",
      level: "advanced",
      meaning: "迷糊，不知所措",
      meaningKr: "망막하다",
      example: "站在人生的十字路口，他感到很迷茫。",
      exampleKr: "인생의 갈림길에서 그는 매우 막막함을 느꼈다."
    }
  ],
  19: [
    {
      word: "寻找",
      pinyin: "xún zhǎo",
      level: "intermediate",
      meaning: "去找某人或某物",
      meaningKr: "찾다",
      example: "每个人都在寻找属于自己的幸福。",
      exampleKr: "사람들은 모두 자신만의 행복을 찾고 있다."
    }
  ],
  20: [
    {
      word: "碌碌无为",
      pinyin: "lù lù wú wéi",
      level: "advanced",
      meaning: "平庸而无所作为",
      meaningKr: "평범하고 하는 일이 없다",
      example: "我们不能满足于碌碌无为的生活。",
      exampleKr: "우리는 하는 일 없이 평범한 삶에 만족해서는 안 된다."
    }
  ],
  21: [],
  22: [
    {
      word: "孤单",
      pinyin: "gū dān",
      level: "intermediate",
      meaning: "单身一人，没有伴侣",
      meaningKr: "외롭다",
      example: "独自在外地打拼，难免会感到孤单。",
      exampleKr: "타지에서 홀로 고군분투하다 보면 외로움을 느끼기 마련이다."
    }
  ],
  23: [
    {
      word: "傻",
      pinyin: "shǎ",
      level: "beginner",
      meaning: "愚蠢、呆板",
      meaningKr: "바보 같다/어리석다",
      example: "别说这种傻话了，快去休息吧。",
      exampleKr: "그런 바보 같은 소리는 그만하고 얼른 가서 쉬어라."
    }
  ],
  24: [
    {
      word: "不甘",
      pinyin: "bù gān",
      level: "advanced",
      meaning: "不甘心，不情愿",
      meaningKr: "달가워하지 않다/만족하지 못하다",
      example: "他绝不甘于现状，一直努力进取。",
      exampleKr: "그는 현재에 결코 안주하지 않고 끊임없이 노력하며 나아간다."
    },
    {
      word: "平凡",
      pinyin: "píng fán",
      level: "intermediate",
      meaning: "普通，不稀奇",
      meaningKr: "평범하다",
      example: "在平凡的工作岗位上也能做出贡献。",
      exampleKr: "평범한 업무 현장에서도 기여를 할 수 있다."
    }
  ],
  25: [
    {
      word: "世界",
      pinyin: "shì jiè",
      level: "beginner",
      meaning: "地球上所有地方",
      meaningKr: "세계/세상",
      example: "世界上有很多有趣的地方。",
      exampleKr: "세상에는 재미있는 곳이 아주 많다."
    }
  ],
  26: [
    {
      word: "莫名其妙",
      pinyin: "mò míng qí miào",
      level: "advanced",
      meaning: "没有人能说明其中的奥妙",
      meaningKr: "영문도 모르다",
      example: "他莫名其妙地发了一通脾气。",
      exampleKr: "그는 영문도 모른 채 버럭 화를 냈다."
    }
  ],
  27: [
    {
      word: "心疼",
      pinyin: "xīn téng",
      level: "advanced",
      meaning: "非常疼爱或舍不得",
      meaningKr: "마음 아파하다",
      example: "看到孩子生病，妈妈非常心疼。",
      exampleKr: "아이가 아픈 것을 보고 엄마는 매우 마음 아파했다."
    }
  ]
};

// 获取指定句子的词汇分析
export function getVocabForSentence(sentenceIndex: number): WordAnalysis[] {
  return xiangwozheyangderenVocabAnalysis[sentenceIndex] || [];
}

// 获取所有词汇（去重）
export function getAllVocab(): WordAnalysis[] {
  const allWords = Object.values(xiangwozheyangderenVocabAnalysis).flat();
  const uniqueWords = new Map<string, WordAnalysis>();
  allWords.forEach(word => {
    if (!uniqueWords.has(word.word)) {
      uniqueWords.set(word.word, word);
    }
  });
  return Array.from(uniqueWords.values());
}


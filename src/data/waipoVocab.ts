// 外婆的澎湖湾歌词词汇分析数据
// 根据每句歌词提供词汇难度分级

import { WordAnalysis } from './tianmimiVocab';

// 每句歌词对应的词汇分析
export const waipoVocabAnalysis: Record<number, WordAnalysis[]> = {
  1: [
    {
      word: "外婆",
      pinyin: "wài pó",
      level: "basic",
      meaning: "grandmother (maternal)",
      meaningKr: "외할머니",
      example: "我的外婆住在乡下。",
      exampleKr: "우리 외할머니는 시골에 사십니다."
    }
  ],
  2: [
    {
      word: "晚风",
      pinyin: "wǎn fēng",
      level: "intermediate",
      meaning: "evening breeze",
      meaningKr: "저녁 바람",
      example: "晚风吹在身上很凉快。",
      exampleKr: "저녁 바람이 몸에 불어오니 아주 시원합니다."
    },
    {
      word: "轻拂",
      pinyin: "qīng fú",
      level: "advanced",
      meaning: "to brush lightly",
      meaningKr: "가볍게 스치다",
      example: "微风轻拂着水面。",
      exampleKr: "산들바람이 수면을 가볍게 스칩니다."
    },
    {
      word: "沙滩",
      pinyin: "shā tān",
      level: "intermediate",
      meaning: "sand beach",
      meaningKr: "모래사장",
      example: "孩子们在沙滩上玩耍。",
      exampleKr: "아이들이 모래사장 위에서 놀고 있습니다."
    }
  ],
  3: [
    {
      word: "椰林",
      pinyin: "yē lín",
      level: "advanced",
      meaning: "coconut grove",
      meaningKr: "야자수 숲",
      example: "海南岛到处可以看到椰林。",
      exampleKr: "하이난섬 도처에서 야자수 숲을 볼 수 있습니다."
    },
    {
      word: "斜阳",
      pinyin: "xié yáng",
      level: "advanced",
      meaning: "setting sun",
      meaningKr: "석양",
      example: "斜阳映红了半边天。",
      exampleKr: "석양이 하늘 반쪽을 붉게 물들였습니다."
    }
  ],
  4: [
    {
      word: "矮墙",
      pinyin: "ǎi qiáng",
      level: "intermediate",
      meaning: "low wall",
      meaningKr: "낮은 담",
      example: "小猫跳上了那堵矮墙。",
      exampleKr: "아기 고양이가 그 낮은 담장 위로 뛰어올랐습니다."
    },
    {
      word: "幻想",
      pinyin: "huàn xiǎng",
      level: "intermediate",
      meaning: "fantasy / to imagine",
      meaningKr: "환상 / 공상하다",
      example: "他总是在幻想未来的生活。",
      exampleKr: "그는 늘 미래의 생활을 환상하곤 합니다."
    }
  ],
  5: [
    {
      word: "黄昏",
      pinyin: "huáng hūn",
      level: "intermediate",
      meaning: "dusk",
      meaningKr: "황혼",
      example: "黄昏时分的景色最美。",
      exampleKr: "황혼 무렵의 경치가 가장 아름답습니다."
    },
    {
      word: "脚印",
      pinyin: "jiǎo yìn",
      level: "intermediate",
      meaning: "footprint",
      meaningKr: "발자국",
      example: "雪地上留下了几串脚印。",
      exampleKr: "눈 위에 몇 줄기의 발자국이 남았습니다."
    }
  ],
  6: [
    {
      word: "拄",
      pinyin: "zhǔ",
      level: "advanced",
      meaning: "to lean on (a stick)",
      meaningKr: "(지팡이를) 짚다",
      example: "老爷爷拄着拐杖过马路。",
      exampleKr: "할아버지가 지팡이를 짚고 길을 건너십니다."
    },
    {
      word: "挽",
      pinyin: "wǎn",
      level: "advanced",
      meaning: "to lead by the arm / pull",
      meaningKr: "(팔을) 끼다 / 이끌다",
      example: "他挽着妻子的手去散步。",
      exampleKr: "그는 아내의 팔짱을 끼고 산책을 갑니다."
    }
  ],
  7: [
    {
      word: "薄暮",
      pinyin: "bó mù",
      level: "advanced",
      meaning: "twilight",
      meaningKr: "땅거미 / 해질녘",
      example: "薄暮时分，山村变得很安静。",
      exampleKr: "해질녘이 되자 산촌이 아주 조용해졌습니다."
    },
    {
      word: "余晖",
      pinyin: "yú huī",
      level: "advanced",
      meaning: "afterglow",
      meaningKr: "여휘 / 저녁 노을",
      example: "夕阳的余晖洒在海面上。",
      exampleKr: "석양의 노을이 바다 위에 쏟아집니다."
    }
  ],
  8: [
    {
      word: "消磨",
      pinyin: "xiāo mó",
      level: "advanced",
      meaning: "to wear down / idle away (time)",
      meaningKr: "(시간을) 보내다 / 때우다",
      example: "读书是消磨时光的好办法。",
      exampleKr: "독서는 시간을 보내기에 아주 좋은 방법입니다."
    },
    {
      word: "时光",
      pinyin: "shí guāng",
      level: "intermediate",
      meaning: "time / days",
      meaningKr: "시간 / 시절",
      example: "那是一段美好的时光。",
      exampleKr: "그것은 아름다운 한때였습니다."
    }
  ],
  9: [
    {
      word: "吞没",
      pinyin: "tūn mò",
      level: "advanced",
      meaning: "to swallow up / engulf",
      meaningKr: "삼키다 / 휩쓸다",
      example: "黑暗渐渐吞没了整片森林。",
      exampleKr: "어둠이 점차 숲 전체를 삼켰습니다."
    }
  ],
  10: [],
  11: [
    {
      word: "童年",
      pinyin: "tóng nián",
      level: "intermediate",
      meaning: "childhood",
      meaningKr: "어린 시절",
      example: "他有一个快乐的童年。",
      exampleKr: "그는 행복한 어린 시절을 보냈습니다."
    }
  ],
  12: [
    {
      word: "海浪",
      pinyin: "hǎi làng",
      level: "intermediate",
      meaning: "sea wave",
      meaningKr: "파도",
      example: "巨大的海浪拍打着岩石。",
      exampleKr: "거대한 파도가 바위를 내리칩니다."
    },
    {
      word: "仙人掌",
      pinyin: "xiān rén zhǎng",
      level: "intermediate",
      meaning: "cactus",
      meaningKr: "선인장",
      example: "仙人掌生长在沙漠里。",
      exampleKr: "선인장은 사막에서 자랍니다."
    },
    {
      word: "船长",
      pinyin: "chuán zhǎng",
      level: "intermediate",
      meaning: "captain (of a ship)",
      meaningKr: "선장",
      example: "船长指挥着轮船前进。",
      exampleKr: "선장이 배를 지휘하며 전진합니다."
    }
  ],
  13: [
    {
      word: "晚风",
      pinyin: "wǎn fēng",
      level: "intermediate",
      meaning: "evening breeze",
      meaningKr: "저녁 바람",
      example: "晚风吹在身上很凉快。",
      exampleKr: "저녁 바람이 몸에 불어오니 아주 시원합니다."
    },
    {
      word: "轻拂",
      pinyin: "qīng fú",
      level: "advanced",
      meaning: "to brush lightly",
      meaningKr: "가볍게 스치다",
      example: "微风轻拂着水面。",
      exampleKr: "산들바람이 수면을 가볍게 스칩니다."
    },
    {
      word: "沙滩",
      pinyin: "shā tān",
      level: "intermediate",
      meaning: "sand beach",
      meaningKr: "모래사장",
      example: "孩子们在沙滩上玩耍。",
      exampleKr: "아이들이 모래사장 위에서 놀고 있습니다."
    }
  ],
  14: [
    {
      word: "椰林",
      pinyin: "yē lín",
      level: "advanced",
      meaning: "coconut grove",
      meaningKr: "야자수 숲",
      example: "海南岛到处可以看到椰林。",
      exampleKr: "하이난섬 도처에서 야자수 숲을 볼 수 있습니다."
    },
    {
      word: "斜阳",
      pinyin: "xié yáng",
      level: "advanced",
      meaning: "setting sun",
      meaningKr: "석양",
      example: "斜阳映红了半边天。",
      exampleKr: "석양이 하늘 반쪽을 붉게 물들였습니다."
    }
  ],
  15: [
    {
      word: "矮墙",
      pinyin: "ǎi qiáng",
      level: "intermediate",
      meaning: "low wall",
      meaningKr: "낮은 담",
      example: "小猫跳上了那堵矮墙。",
      exampleKr: "아기 고양이가 그 낮은 담장 위로 뛰어올랐습니다."
    },
    {
      word: "幻想",
      pinyin: "huàn xiǎng",
      level: "intermediate",
      meaning: "fantasy / to imagine",
      meaningKr: "환상 / 공상하다",
      example: "他总是在幻想未来的生活。",
      exampleKr: "그는 늘 미래의 생활을 환상하곤 합니다."
    }
  ],
  16: [
    {
      word: "黄昏",
      pinyin: "huáng hūn",
      level: "intermediate",
      meaning: "dusk",
      meaningKr: "황혼",
      example: "黄昏时分的景色最美。",
      exampleKr: "황혼 무렵의 경치가 가장 아름답습니다."
    },
    {
      word: "脚印",
      pinyin: "jiǎo yìn",
      level: "intermediate",
      meaning: "footprint",
      meaningKr: "발자국",
      example: "雪地上留下了几串脚印。",
      exampleKr: "눈 위에 몇 줄기의 발자국이 남았습니다."
    }
  ],
  17: [
    {
      word: "拄",
      pinyin: "zhǔ",
      level: "advanced",
      meaning: "to lean on (a stick)",
      meaningKr: "(지팡이를) 짚다",
      example: "老爷爷拄着拐杖过马路。",
      exampleKr: "할아버지가 지팡이를 짚고 길을 건너십니다."
    },
    {
      word: "挽",
      pinyin: "wǎn",
      level: "advanced",
      meaning: "to lead by the arm / pull",
      meaningKr: "(팔을) 끼다 / 이끌다",
      example: "他挽着妻子的手去散步。",
      exampleKr: "그는 아내의 팔짱을 끼고 산책을 갑니다."
    }
  ],
  18: [
    {
      word: "薄暮",
      pinyin: "bó mù",
      level: "advanced",
      meaning: "twilight",
      meaningKr: "땅거미 / 해질녘",
      example: "薄暮时分，山村变得很安静。",
      exampleKr: "해질녘이 되자 산촌이 아주 조용해졌습니다."
    },
    {
      word: "余晖",
      pinyin: "yú huī",
      level: "advanced",
      meaning: "afterglow",
      meaningKr: "여휘 / 저녁 노을",
      example: "夕阳的余晖洒在海面上。",
      exampleKr: "석양의 노을이 바다 위에 쏟아집니다."
    }
  ],
  19: [
    {
      word: "消磨",
      pinyin: "xiāo mó",
      level: "advanced",
      meaning: "to wear down / idle away (time)",
      meaningKr: "(시간을) 보내다 / 때우다",
      example: "读书是消磨时光的好办法。",
      exampleKr: "독서는 시간을 보내기에 아주 좋은 방법입니다."
    },
    {
      word: "时光",
      pinyin: "shí guāng",
      level: "intermediate",
      meaning: "time / days",
      meaningKr: "시간 / 시절",
      example: "那是一段美好的时光。",
      exampleKr: "그것은 아름다운 한때였습니다."
    }
  ],
  20: [
    {
      word: "吞没",
      pinyin: "tūn mò",
      level: "advanced",
      meaning: "to swallow up / engulf",
      meaningKr: "삼키다 / 휩쓸다",
      example: "黑暗渐渐吞没了整片森林。",
      exampleKr: "어둠이 점차 숲 전체를 삼켰습니다."
    }
  ],
  21: [],
  22: [
    {
      word: "童年",
      pinyin: "tóng nián",
      level: "intermediate",
      meaning: "childhood",
      meaningKr: "어린 시절",
      example: "他有一个快乐的童年。",
      exampleKr: "그는 행복한 어린 시절을 보냈습니다."
    }
  ],
  23: [
    {
      word: "海浪",
      pinyin: "hǎi làng",
      level: "intermediate",
      meaning: "sea wave",
      meaningKr: "파도",
      example: "巨大的海浪拍打着岩石。",
      exampleKr: "거대한 파도가 바위를 내리칩니다."
    },
    {
      word: "仙人掌",
      pinyin: "xiān rén zhǎng",
      level: "intermediate",
      meaning: "cactus",
      meaningKr: "선인장",
      example: "仙人掌生长在沙漠里。",
      exampleKr: "선인장은 사막에서 자랍니다."
    },
    {
      word: "船长",
      pinyin: "chuán zhǎng",
      level: "intermediate",
      meaning: "captain (of a ship)",
      meaningKr: "선장",
      example: "船长指挥着轮船前进。",
      exampleKr: "선장이 배를 지휘하며 전진합니다."
    }
  ],
  24: [],
  25: [
    {
      word: "童年",
      pinyin: "tóng nián",
      level: "intermediate",
      meaning: "childhood",
      meaningKr: "어린 시절",
      example: "他有一个快乐的童年。",
      exampleKr: "그는 행복한 어린 시절을 보냈습니다."
    }
  ],
  26: [
    {
      word: "海浪",
      pinyin: "hǎi làng",
      level: "intermediate",
      meaning: "sea wave",
      meaningKr: "파도",
      example: "巨大的海浪拍打着岩石。",
      exampleKr: "거대한 파도가 바위를 내리칩니다."
    },
    {
      word: "仙人掌",
      pinyin: "xiān rén zhǎng",
      level: "intermediate",
      meaning: "cactus",
      meaningKr: "선인장",
      example: "仙人掌生长在沙漠里。",
      exampleKr: "선인장은 사막에서 자랍니다."
    },
    {
      word: "船长",
      pinyin: "chuán zhǎng",
      level: "intermediate",
      meaning: "captain (of a ship)",
      meaningKr: "선장",
      example: "船长指挥着轮船前进。",
      exampleKr: "선장이 배를 지휘하며 전진합니다."
    }
  ],
  27: [
    {
      word: "船长",
      pinyin: "chuán zhǎng",
      level: "intermediate",
      meaning: "captain (of a ship)",
      meaningKr: "선장",
      example: "船长在海上航行了三十年。",
      exampleKr: "선장은 바다에서 30년 동안 항해했습니다."
    }
  ]
};

// 获取指定句子的词汇
export function getVocabForSentence(sentenceIndex: number): WordAnalysis[] {
  return waipoVocabAnalysis[sentenceIndex] || [];
}

// 获取所有词汇
export function getAllVocab(): WordAnalysis[] {
  const allVocab: WordAnalysis[] = [];
  Object.values(waipoVocabAnalysis).forEach(vocabList => {
    allVocab.push(...vocabList);
  });
  return allVocab;
}


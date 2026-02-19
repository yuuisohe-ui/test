// 甜蜜蜜歌词词汇分析数据
// 根据每句歌词提供词汇难度分级

export interface WordAnalysis {
  word: string;        // 词汇
  pinyin: string;     // 拼音
  level: 'basic' | 'intermediate' | 'advanced'; // 难度等级
  meaning: string;     // 中文释义
  meaningKr?: string; // 韩语释义
  example?: string;   // 例句
  exampleKr?: string; // 例句的韩文翻译
}

// 每句歌词对应的词汇分析
export const tianmimiVocabAnalysis: Record<number, WordAnalysis[]> = {
  1: [
    {
      word: "甜蜜蜜",
      pinyin: "tián mì mì",
      level: "intermediate",
      meaning: "非常甜蜜、幸福",
      meaningKr: "매우 달콤하고 행복한",
      example: "她的笑容甜蜜蜜的。",
      exampleKr: "그녀의 미소가 달콤하다."
    }
  ],
  2: [
    {
      word: "好像",
      pinyin: "hǎo xiàng",
      level: "basic",
      meaning: "似乎、仿佛",
      meaningKr: "마치 ~인 것 같다",
      example: "他好像很累。",
      exampleKr: "그는 피곤한 것 같다."
    },
    {
      word: "春风",
      pinyin: "chūn fēng",
      level: "intermediate",
      meaning: "春天的风",
      meaningKr: "봄바람",
      example: "春风吹过田野。",
      exampleKr: "봄바람이 들판을 지나간다."
    }
  ],
  3: [
    {
      word: "春风",
      pinyin: "chūn fēng",
      level: "intermediate",
      meaning: "春天的风",
      meaningKr: "봄바람",
      example: "春风吹过田野。",
      exampleKr: "봄바람이 들판을 지나간다."
    }
  ],
  4: [
    {
      word: "见过",
      pinyin: "jiàn guò",
      level: "basic",
      meaning: "曾经见到过",
      meaningKr: "본 적이 있다",
      example: "我见过他一次。",
      exampleKr: "나는 그를 한 번 본 적이 있다."
    }
  ],
  5: [
    {
      word: "笑容",
      pinyin: "xiào róng",
      level: "intermediate",
      meaning: "微笑的表情",
      meaningKr: "미소",
      example: "她的笑容很温暖。",
      exampleKr: "그녀의 미소가 매우 따뜻하다."
    },
    {
      word: "熟悉",
      pinyin: "shú xī",
      level: "intermediate",
      meaning: "了解得很清楚",
      meaningKr: "익숙하다",
      example: "我对这个地方很熟悉。",
      exampleKr: "나는 이곳이 매우 익숙하다."
    }
  ],
  6: [
    {
      word: "想不起",
      pinyin: "xiǎng bu qǐ",
      level: "intermediate",
      meaning: "无法回忆",
      meaningKr: "기억이 나지 않다",
      example: "我想不起他的名字。",
      exampleKr: "나는 그의 이름이 기억나지 않는다."
    }
  ],
  7: [
    {
      word: "梦里",
      pinyin: "mèng lǐ",
      level: "basic",
      meaning: "在梦中",
      meaningKr: "꿈속에서",
      example: "我在梦里见过你。",
      exampleKr: "나는 꿈속에서 너를 본 적이 있다."
    }
  ],
  8: [
    {
      word: "梦里",
      pinyin: "mèng lǐ",
      level: "basic",
      meaning: "在梦中",
      meaningKr: "꿈속에서",
      example: "我在梦里见过你。",
      exampleKr: "나는 꿈속에서 너를 본 적이 있다."
    },
    {
      word: "见过",
      pinyin: "jiàn guò",
      level: "basic",
      meaning: "曾经见到过",
      meaningKr: "본 적이 있다",
      example: "我见过他一次。",
      exampleKr: "나는 그를 한 번 본 적이 있다."
    }
  ],
  9: [
    {
      word: "甜蜜",
      pinyin: "tián mì",
      level: "intermediate",
      meaning: "形容幸福愉快",
      meaningKr: "달콤하고 행복한",
      example: "他们过着甜蜜的生活。",
      exampleKr: "그들은 달콤한 삶을 살고 있다."
    }
  ],
  10: [
    {
      word: "梦见",
      pinyin: "mèng jiàn",
      level: "intermediate",
      meaning: "在梦中看到",
      meaningKr: "꿈에서 보다",
      example: "我昨晚梦见了你。",
      exampleKr: "나는 어제 밤 너를 꿈꿨다."
    }
  ],
  11: [
    {
      word: "见过",
      pinyin: "jiàn guò",
      level: "basic",
      meaning: "曾经见到过",
      meaningKr: "본 적이 있다",
      example: "我见过他一次。",
      exampleKr: "나는 그를 한 번 본 적이 있다."
    }
  ],
  12: [
    {
      word: "笑容",
      pinyin: "xiào róng",
      level: "intermediate",
      meaning: "微笑的表情",
      meaningKr: "미소",
      example: "她的笑容很温暖。",
      exampleKr: "그녀의 미소가 매우 따뜻하다."
    },
    {
      word: "熟悉",
      pinyin: "shú xī",
      level: "intermediate",
      meaning: "了解得很清楚",
      meaningKr: "익숙하다",
      example: "我对这个地方很熟悉。",
      exampleKr: "나는 이곳이 매우 익숙하다."
    }
  ],
  13: [
    {
      word: "想不起",
      pinyin: "xiǎng bu qǐ",
      level: "intermediate",
      meaning: "无法回忆",
      meaningKr: "기억이 나지 않다",
      example: "我想不起他的名字。",
      exampleKr: "나는 그의 이름이 기억나지 않는다."
    }
  ],
  14: [
    {
      word: "梦里",
      pinyin: "mèng lǐ",
      level: "basic",
      meaning: "在梦中",
      meaningKr: "꿈속에서",
      example: "我在梦里见过你。",
      exampleKr: "나는 꿈속에서 너를 본 적이 있다."
    }
  ],
  15: [
    {
      word: "见过",
      pinyin: "jiàn guò",
      level: "basic",
      meaning: "曾经见到过",
      meaningKr: "본 적이 있다",
      example: "我见过他一次。",
      exampleKr: "나는 그를 한 번 본 적이 있다."
    }
  ],
  16: [
    {
      word: "笑容",
      pinyin: "xiào róng",
      level: "intermediate",
      meaning: "微笑的表情",
      meaningKr: "미소",
      example: "她的笑容很温暖。",
      exampleKr: "그녀의 미소가 매우 따뜻하다."
    },
    {
      word: "熟悉",
      pinyin: "shú xī",
      level: "intermediate",
      meaning: "了解得很清楚",
      meaningKr: "익숙하다",
      example: "我对这个地方很熟悉。",
      exampleKr: "나는 이곳이 매우 익숙하다."
    }
  ],
  17: [
    {
      word: "想不起",
      pinyin: "xiǎng bu qǐ",
      level: "intermediate",
      meaning: "无法回忆",
      meaningKr: "기억이 나지 않다",
      example: "我想不起他的名字。",
      exampleKr: "나는 그의 이름이 기억나지 않는다."
    }
  ],
  18: [
    {
      word: "梦里",
      pinyin: "mèng lǐ",
      level: "basic",
      meaning: "在梦中",
      meaningKr: "꿈속에서",
      example: "我在梦里见过你。",
      exampleKr: "나는 꿈속에서 너를 본 적이 있다."
    }
  ],
  19: [
    {
      word: "梦里",
      pinyin: "mèng lǐ",
      level: "basic",
      meaning: "在梦中",
      meaningKr: "꿈속에서",
      example: "我在梦里见过你。",
      exampleKr: "나는 꿈속에서 너를 본 적이 있다."
    },
    {
      word: "见过",
      pinyin: "jiàn guò",
      level: "basic",
      meaning: "曾经见到过",
      meaningKr: "본 적이 있다",
      example: "我见过他一次。",
      exampleKr: "나는 그를 한 번 본 적이 있다."
    }
  ],
  20: [
    {
      word: "甜蜜",
      pinyin: "tián mì",
      level: "intermediate",
      meaning: "形容幸福愉快",
      meaningKr: "달콤하고 행복한",
      example: "他们过着甜蜜的生活。",
      exampleKr: "그들은 달콤한 삶을 살고 있다."
    }
  ],
  21: [
    {
      word: "梦见",
      pinyin: "mèng jiàn",
      level: "intermediate",
      meaning: "在梦中看到",
      meaningKr: "꿈에서 보다",
      example: "我昨晚梦见了你。",
      exampleKr: "나는 어제 밤 너를 꿈꿨다."
    }
  ],
  22: [
    {
      word: "见过",
      pinyin: "jiàn guò",
      level: "basic",
      meaning: "曾经见到过",
      meaningKr: "본 적이 있다",
      example: "我见过他一次。",
      exampleKr: "나는 그를 한 번 본 적이 있다."
    }
  ],
  23: [
    {
      word: "笑容",
      pinyin: "xiào róng",
      level: "intermediate",
      meaning: "微笑的表情",
      meaningKr: "미소",
      example: "她的笑容很温暖。",
      exampleKr: "그녀의 미소가 매우 따뜻하다."
    },
    {
      word: "熟悉",
      pinyin: "shú xī",
      level: "intermediate",
      meaning: "了解得很清楚",
      meaningKr: "익숙하다",
      example: "我对这个地方很熟悉。",
      exampleKr: "나는 이곳이 매우 익숙하다."
    }
  ],
  24: [
    {
      word: "想不起",
      pinyin: "xiǎng bu qǐ",
      level: "intermediate",
      meaning: "无法回忆",
      meaningKr: "기억이 나지 않다",
      example: "我想不起他的名字。",
      exampleKr: "나는 그의 이름이 기억나지 않는다."
    }
  ],
  25: [
    {
      word: "梦里",
      pinyin: "mèng lǐ",
      level: "basic",
      meaning: "在梦中",
      meaningKr: "꿈속에서",
      example: "我在梦里见过你。",
      exampleKr: "나는 꿈속에서 너를 본 적이 있다."
    }
  ],
};

// 获取指定句子的词汇分析
export function getVocabForSentence(sentenceIndex: number): WordAnalysis[] {
  return tianmimiVocabAnalysis[sentenceIndex] || [];
}

// 获取所有词汇（去重）
export function getAllVocab(): WordAnalysis[] {
  const allWords = Object.values(tianmimiVocabAnalysis).flat();
  // 去重（按word）
  const uniqueWords = new Map<string, WordAnalysis>();
  allWords.forEach(word => {
    if (!uniqueWords.has(word.word)) {
      uniqueWords.set(word.word, word);
    }
  });
  return Array.from(uniqueWords.values());
}

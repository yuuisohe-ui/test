// 甜蜜蜜歌词词汇分析数据
// 根据每句歌词提供词汇难度分级

export interface WordAnalysis {
  word: string;        // 词汇
  pinyin: string;     // 拼音
  level: 'basic' | 'intermediate' | 'advanced'; // 难度等级
  meaning: string;     // 中文释义
  meaningKr?: string; // 韩语释义
  example?: string;   // 例句
}

// 每句歌词对应的词汇分析
export const tianmimiVocabAnalysis: Record<number, WordAnalysis[]> = {
  1: [ // "甜蜜蜜 你笑得甜蜜蜜"
    { word: "甜蜜蜜", pinyin: "tián mì mì", level: "intermediate", meaning: "非常甜蜜、幸福", meaningKr: "매우 달콤하고 행복한", example: "她的笑容甜蜜蜜的。" },
    { word: "你", pinyin: "nǐ", level: "basic", meaning: "你", meaningKr: "너", example: "你好吗？" },
    { word: "笑", pinyin: "xiào", level: "basic", meaning: "笑", meaningKr: "웃다", example: "他笑得很开心。" },
    { word: "得", pinyin: "de", level: "intermediate", meaning: "表示程度或结果", meaningKr: "정도나 결과를 나타냄", example: "跑得快" },
  ],
  2: [ // "好像花兒開在春風裡"
    { word: "好像", pinyin: "hǎo xiàng", level: "intermediate", meaning: "如同、仿佛", meaningKr: "마치 ~처럼", example: "好像要下雨了。" },
    { word: "花兒", pinyin: "huā ér", level: "basic", meaning: "花", meaningKr: "꽃", example: "春天花兒开了。" },
    { word: "開", pinyin: "kāi", level: "basic", meaning: "开、开放", meaningKr: "열리다, 피다", example: "花开了。" },
    { word: "在", pinyin: "zài", level: "basic", meaning: "在", meaningKr: "~에", example: "我在家。" },
    { word: "春風", pinyin: "chūn fēng", level: "intermediate", meaning: "春风", meaningKr: "봄바람", example: "春风吹来很舒服。" },
    { word: "裡", pinyin: "lǐ", level: "basic", meaning: "里、里面", meaningKr: "안, 속", example: "在房间里" },
  ],
  3: [ // "開在春風裡"
    { word: "開", pinyin: "kāi", level: "basic", meaning: "开、开放", meaningKr: "열리다, 피다", example: "花开了。" },
    { word: "在", pinyin: "zài", level: "basic", meaning: "在", meaningKr: "~에", example: "我在家。" },
    { word: "春風", pinyin: "chūn fēng", level: "intermediate", meaning: "春风", meaningKr: "봄바람", example: "春风吹来很舒服。" },
    { word: "裡", pinyin: "lǐ", level: "basic", meaning: "里、里面", meaningKr: "안, 속", example: "在房间里" },
  ],
  4: [ // "在哪裡 在哪裡見過你"
    { word: "在", pinyin: "zài", level: "basic", meaning: "在", meaningKr: "~에", example: "我在家。" },
    { word: "哪裡", pinyin: "nǎ lǐ", level: "basic", meaning: "哪里、什么地方", meaningKr: "어디", example: "你在哪里？" },
    { word: "見", pinyin: "jiàn", level: "basic", meaning: "见、看见", meaningKr: "보다", example: "我见过他。" },
    { word: "過", pinyin: "guò", level: "intermediate", meaning: "过（表示经历）", meaningKr: "~한 적이 있다", example: "我去过北京。" },
    { word: "你", pinyin: "nǐ", level: "basic", meaning: "你", meaningKr: "너", example: "你好吗？" },
  ],
  5: [ // "你的笑容這樣熟悉"
    { word: "你", pinyin: "nǐ", level: "basic", meaning: "你", meaningKr: "너", example: "你好吗？" },
    { word: "的", pinyin: "de", level: "basic", meaning: "的（表示所属）", meaningKr: "~의", example: "我的书" },
    { word: "笑容", pinyin: "xiào róng", level: "intermediate", meaning: "笑容", meaningKr: "미소", example: "她的笑容很美丽。" },
    { word: "這樣", pinyin: "zhè yàng", level: "intermediate", meaning: "这样、如此", meaningKr: "이렇게", example: "这样做不对。" },
    { word: "熟悉", pinyin: "shú xī", level: "intermediate", meaning: "熟悉", meaningKr: "익숙하다", example: "这个地方我很熟悉。" },
  ],
  6: [ // "我一時想不起"
    { word: "我", pinyin: "wǒ", level: "basic", meaning: "我", meaningKr: "나", example: "我是学生。" },
    { word: "一時", pinyin: "yì shí", level: "intermediate", meaning: "一时、暂时", meaningKr: "잠시", example: "我一时想不起来。" },
    { word: "想", pinyin: "xiǎng", level: "basic", meaning: "想、思考", meaningKr: "생각하다", example: "我想去北京。" },
    { word: "不", pinyin: "bù", level: "basic", meaning: "不", meaningKr: "~않다", example: "不去" },
    { word: "起", pinyin: "qǐ", level: "intermediate", meaning: "起（表示动作完成）", meaningKr: "~할 수 있다", example: "想不起来" },
  ],
  7: [ // "啊 在夢裡"
    { word: "啊", pinyin: "ā", level: "basic", meaning: "啊（感叹词）", meaningKr: "아", example: "啊，原来如此！" },
    { word: "在", pinyin: "zài", level: "basic", meaning: "在", meaningKr: "~에", example: "我在家。" },
    { word: "夢", pinyin: "mèng", level: "intermediate", meaning: "梦", meaningKr: "꿈", example: "我做了一个梦。" },
    { word: "裡", pinyin: "lǐ", level: "basic", meaning: "里、里面", meaningKr: "안, 속", example: "在房间里" },
  ],
  8: [ // "夢裡 夢裡見過你"
    { word: "夢", pinyin: "mèng", level: "intermediate", meaning: "梦", meaningKr: "꿈", example: "我做了一个梦。" },
    { word: "裡", pinyin: "lǐ", level: "basic", meaning: "里、里面", meaningKr: "안, 속", example: "在房间里" },
    { word: "見", pinyin: "jiàn", level: "basic", meaning: "见、看见", meaningKr: "보다", example: "我见过他。" },
    { word: "過", pinyin: "guò", level: "intermediate", meaning: "过（表示经历）", meaningKr: "~한 적이 있다", example: "我去过北京。" },
    { word: "你", pinyin: "nǐ", level: "basic", meaning: "你", meaningKr: "너", example: "你好吗？" },
  ],
  9: [ // "甜蜜 笑得多甜蜜"
    { word: "甜蜜", pinyin: "tián mì", level: "intermediate", meaning: "甜蜜", meaningKr: "달콤하다", example: "甜蜜的爱情" },
    { word: "笑", pinyin: "xiào", level: "basic", meaning: "笑", meaningKr: "웃다", example: "他笑得很开心。" },
    { word: "得", pinyin: "de", level: "intermediate", meaning: "表示程度或结果", meaningKr: "정도나 결과를 나타냄", example: "跑得快" },
    { word: "多", pinyin: "duō", level: "basic", meaning: "多、多么", meaningKr: "얼마나", example: "多好啊！" },
  ],
  10: [ // "是你 是你 夢見的就是你"
    { word: "是", pinyin: "shì", level: "basic", meaning: "是", meaningKr: "~이다", example: "我是学生。" },
    { word: "你", pinyin: "nǐ", level: "basic", meaning: "你", meaningKr: "너", example: "你好吗？" },
    { word: "夢", pinyin: "mèng", level: "intermediate", meaning: "梦", meaningKr: "꿈", example: "我做了一个梦。" },
    { word: "見", pinyin: "jiàn", level: "basic", meaning: "见、看见", meaningKr: "보다", example: "我见过他。" },
    { word: "的", pinyin: "de", level: "basic", meaning: "的（表示所属）", meaningKr: "~의", example: "我的书" },
    { word: "就", pinyin: "jiù", level: "intermediate", meaning: "就、就是", meaningKr: "바로", example: "就是他。" },
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


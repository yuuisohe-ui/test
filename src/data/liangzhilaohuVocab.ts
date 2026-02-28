// 两只老虎歌词词汇分析数据
import { WordAnalysis } from './tianmimiVocab';

export const liangzhilaohuVocabAnalysis: Record<number, WordAnalysis[]> = {
  1: [
    {
      word: "老虎",
      pinyin: "lǎo hǔ",
      level: "basic",
      meaning: "tiger",
      meaningKr: "호랑이",
      example: "动物园里有两只大老虎。",
      exampleKr: "동물원에 큰 호랑이 두 마리가 있어요."
    }
  ],
  2: [
    {
      word: "跑",
      pinyin: "pǎo",
      level: "basic",
      meaning: "to run",
      meaningKr: "달리다",
      example: "他跑得很快。",
      exampleKr: ""
    },
    {
      word: "快",
      pinyin: "kuài",
      level: "basic",
      meaning: "fast",
      meaningKr: "빠르다",
      example: "汽车的速度很快。",
      exampleKr: ""
    }
  ],
  3: [
    {
      word: "眼睛",
      pinyin: "yǎn jing",
      level: "basic",
      meaning: "eye",
      meaningKr: "눈",
      example: "她的眼睛又大又圆。",
      exampleKr: ""
    },
    {
      word: "尾巴",
      pinyin: "wěi ba",
      level: "intermediate",
      meaning: "tail",
      meaningKr: "꼬리",
      example: "小狗正在摇尾巴。",
      exampleKr: ""
    }
  ],
  4: [
    {
      word: "奇怪",
      pinyin: "qí guài",
      level: "intermediate",
      meaning: "strange; weird",
      meaningKr: "이상하다",
      example: "这件事真奇怪。",
      exampleKr: ""
    }
  ],
  5: [
    {
      word: "老虎",
      pinyin: "lǎo hǔ",
      level: "basic",
      meaning: "tiger",
      meaningKr: "호랑이",
      example: "森林里住着老虎。",
      exampleKr: ""
    }
  ],
  6: [
    {
      word: "跑",
      pinyin: "pǎo",
      level: "basic",
      meaning: "to run",
      meaningKr: "달리다",
      example: "他在操场上跑步。",
      exampleKr: ""
    },
    {
      word: "快",
      pinyin: "kuài",
      level: "basic",
      meaning: "fast",
      meaningKr: "빠르다",
      example: "请走快一点。",
      exampleKr: ""
    }
  ],
  7: [
    {
      word: "眼睛",
      pinyin: "yǎn jing",
      level: "basic",
      meaning: "eye",
      meaningKr: "눈",
      example: "睡觉的时候要闭上眼睛。",
      exampleKr: ""
    },
    {
      word: "尾巴",
      pinyin: "wěi ba",
      level: "intermediate",
      meaning: "tail",
      meaningKr: "꼬리",
      example: "猴子的尾巴很长。",
      exampleKr: ""
    }
  ],
  8: [
    {
      word: "奇怪",
      pinyin: "qí guài",
      level: "intermediate",
      meaning: "strange; weird",
      meaningKr: "이상하다",
      example: "他的行为有点奇怪。",
      exampleKr: ""
    }
  ]
};

// 获取指定句子的词汇
export function getVocabForSentence(sentenceIndex: number): WordAnalysis[] {
  return liangzhilaohuVocabAnalysis[sentenceIndex] || [];
}

// 获取所有词汇（去重）
export function getAllVocab(): WordAnalysis[] {
  const allWords = Object.values(liangzhilaohuVocabAnalysis).flat();
  // 去重（按word）
  const uniqueWords = new Map<string, WordAnalysis>();
  allWords.forEach(word => {
    if (!uniqueWords.has(word.word)) {
      uniqueWords.set(word.word, word);
    }
  });
  return Array.from(uniqueWords.values());
}


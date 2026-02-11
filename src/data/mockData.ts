import { SentenceData } from '../types';

export const sentenceData: SentenceData = {
  sentence: "如果有一天我变得很有钱",
  tokens: [
    {
      text: "如果",
      glossZh: "表示假设条件",
      glossKr: "만약 ~라면",
      example: "如果下雨，就不去。"
    },
    {
      text: "有一天",
      glossZh: "将来的某个时间",
      glossKr: "언젠가",
      example: "有一天我会去中国。"
    },
    {
      text: "我",
      glossZh: "说话人自己",
      glossKr: "나",
      example: "我是学生。"
    },
    {
      text: "变得",
      glossZh: "状态发生变化",
      glossKr: "~하게 되다",
      example: "天气变得很冷。"
    },
    {
      text: "很有钱",
      glossZh: "拥有很多钱",
      glossKr: "부자가 되다",
      example: "他现在很有钱。"
    }
  ],
  chunks: [
    {
      text: "如果有一天",
      pinyin: "rúguǒ yǒu yì tiān",
      tones: "2-3-4-1"
    },
    {
      text: "我变得",
      pinyin: "wǒ biàn de",
      tones: "3-4-0"
    },
    {
      text: "很有钱",
      pinyin: "hěn yǒu qián",
      tones: "3-3-2"
    }
  ]
};

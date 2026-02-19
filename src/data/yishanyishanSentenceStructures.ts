// 一闪一闪亮晶晶歌词句式训练数据
import { SentenceStructure } from './tianmimiSentenceStructures';

export const yishanyishanSentenceStructures: Record<number, SentenceStructure> = {
  1: {
    sentenceIndex: 1,
    sentence: "一闪一闪亮晶晶",
    structure: "一[A]一[A]",
    explanation: "동작이나 상태가 반복적으로 일어남을 묘사하여 생동감을 줍니다.",
    level: "beginner",
    example: "一步一步地走",
    exampleKr: "한 걸음 한 걸음 걷다.",
    expanded: "",
    translationKr: ""
  },
  2: {
    sentenceIndex: 2,
    sentence: "满天都是小星星",
    structure: "...都是...",
    explanation: "특정 범위 내의 모든 것이 어떠한 상태임을 강조할 때 사용합니다.",
    level: "beginner",
    example: "教室里都是学生",
    exampleKr: "교실 안은 온통 학생들이다.",
    expanded: "",
    translationKr: ""
  },
  3: {
    sentenceIndex: 3,
    sentence: "挂在天上放光明",
    structure: "V + 在 + 장소",
    explanation: "동작의 결과나 상태가 특정 장소에 유지됨을 나타냅니다.",
    level: "beginner",
    example: "坐在椅子上",
    exampleKr: "의자에 앉아 있다.",
    expanded: "",
    translationKr: ""
  },
  4: {
    sentenceIndex: 4,
    sentence: "好像许多小眼睛",
    structure: "好像...",
    explanation: "대상을 다른 사물에 비유하거나 추측할 때 사용합니다.",
    level: "beginner",
    example: "他好像不记得我了",
    exampleKr: "그는 나를 기억하지 못하는 것 같다.",
    expanded: "",
    translationKr: ""
  },
  5: {
    sentenceIndex: 5,
    sentence: "一闪一闪亮晶晶",
    structure: "一[A]一[A]",
    explanation: "동작이나 상태의 반복을 통해 리듬감을 형성합니다.",
    level: "beginner",
    example: "一点一点地进步",
    exampleKr: "조금씩 조금씩 발전하다.",
    expanded: "",
    translationKr: ""
  },
  6: {
    sentenceIndex: 6,
    sentence: "满天都是小星星",
    structure: "...都是...",
    explanation: "주어의 상태가 전반적으로 그러함을 나타냅니다.",
    level: "beginner",
    example: "身上都是汗",
    exampleKr: "온몸이 땀투성이다.",
    expanded: "",
    translationKr: ""
  },
  7: {
    sentenceIndex: 7,
    sentence: "一闪一闪亮晶晶",
    structure: "一[A]一[A]",
    explanation: "반복되는 동작을 나열하여 묘사합니다.",
    level: "beginner",
    example: "一个一个地进来",
    exampleKr: "하나씩 하나씩 들어오다.",
    expanded: "",
    translationKr: ""
  },
  8: {
    sentenceIndex: 8,
    sentence: "满天都是小星星",
    structure: "...都是...",
    explanation: "범위 전체가 해당 속성을 가지고 있음을 강조합니다.",
    level: "beginner",
    example: "桌子上都是书",
    exampleKr: "책상 위는 온통 책이다.",
    expanded: "",
    translationKr: ""
  },
  9: {
    sentenceIndex: 9,
    sentence: "挂在天上放光明",
    structure: "V + 在 + 장소",
    explanation: "동작이 발생하여 머무르는 위치를 지정합니다.",
    level: "beginner",
    example: "写在纸上",
    exampleKr: "종이 위에 쓰다.",
    expanded: "",
    translationKr: ""
  },
  10: {
    sentenceIndex: 10,
    sentence: "好像许多小眼睛",
    structure: "好像...",
    explanation: "외관상 비슷함을 나타내는 비유적 표현입니다.",
    level: "beginner",
    example: "这孩子好像 he 爸爸",
    exampleKr: "이 아이는 아빠를 닮은 것 같다.",
    expanded: "",
    translationKr: ""
  },
  11: {
    sentenceIndex: 11,
    sentence: "一闪一闪亮晶晶",
    structure: "一[A]一[A]",
    explanation: "동일한 행위의 연속성을 보여줍니다.",
    level: "beginner",
    example: "一天一天地长大",
    exampleKr: "하루하루 성장하다.",
    expanded: "",
    translationKr: ""
  },
  12: {
    sentenceIndex: 12,
    sentence: "满天都是小星星",
    structure: "...都是...",
    explanation: "전부 그러하다는 의미의 강조 구문입니다.",
    level: "beginner",
    example: "地上都是落叶",
    exampleKr: "바닥에 온통 낙엽이다.",
    expanded: "",
    translationKr: ""
  },
  13: {
    sentenceIndex: 13,
    sentence: "一闪一闪亮晶晶",
    structure: "一[A]一[A]",
    explanation: "반복을 통해 강조의 의미를 더합니다.",
    level: "beginner",
    example: "一首一首地听",
    exampleKr: "한 곡 한 곡 듣다.",
    expanded: "",
    translationKr: ""
  },
  14: {
    sentenceIndex: 14,
    sentence: "满天都是小星星",
    structure: "...都是...",
    explanation: "특정 구역 전체에 대한 상태 묘사입니다.",
    level: "beginner",
    example: "满脸都是笑容",
    exampleKr: "얼굴 가득 미소가 가득하다.",
    expanded: "",
    translationKr: ""
  }
};

// 获取指定句子的句式结构
export function getSentenceStructure(sentenceIndex: number): SentenceStructure | undefined {
  return yishanyishanSentenceStructures[sentenceIndex];
}


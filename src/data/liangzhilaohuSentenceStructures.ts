// 两只老虎歌词句式训练数据
import { SentenceStructure } from './tianmimiSentenceStructures';

export const liangzhilaohuSentenceStructures: Record<number, SentenceStructure> = {
  1: {
    sentenceIndex: 1,
    sentence: "两只老虎，两只老虎",
    structure: "数词 + 量词 + 名词",
    explanation: "수사(숫자), 양사(단위), 명사가 결합하여 사물의 수량을 나타내는 중국어의 가장 기본적인 명사구 구조입니다.",
    level: "beginner",
    example: "三个人",
    exampleKr: "세 사람",
    expanded: "",
    translationKr: ""
  },
  2: {
    sentenceIndex: 2,
    sentence: "跑得快，跑得快",
    structure: "V + 得 + Adj",
    explanation: "동사 뒤에 조사 '得'를 붙여 동작의 상태나 정도를 보충 설명하는 정도보어 문형입니다.",
    level: "beginner",
    example: "说得好",
    exampleKr: "말을 잘한다",
    expanded: "",
    translationKr: ""
  },
  3: {
    sentenceIndex: 3,
    sentence: "一只没有眼睛，一只没有尾巴",
    structure: "没有 + 名词",
    explanation: "소유나 존재의 부정을 나타내며, '~이(가) 없다'라는 의미로 쓰입니다.",
    level: "beginner",
    example: "我没有钱",
    exampleKr: "나는 돈이 없다",
    expanded: "",
    translationKr: ""
  },
  4: {
    sentenceIndex: 4,
    sentence: "真奇怪！真奇怪！",
    structure: "真 + 形容词",
    explanation: "부사 '真'을 형용사 앞에 위치시켜 '정말 ~하다'라는 감탄의 의미를 강조합니다.",
    level: "beginner",
    example: "真漂亮",
    exampleKr: "정말 예쁘다",
    expanded: "",
    translationKr: ""
  },
  5: {
    sentenceIndex: 5,
    sentence: "两只老虎，两只老虎",
    structure: "数词 + 量词 + 名词",
    explanation: "수사, 양사, 명사가 결합하여 사물의 수량을 나타내는 어순으로, 대상의 개수를 명확히 표현합니다.",
    level: "beginner",
    example: "五本书",
    exampleKr: "다섯 권의 책",
    expanded: "",
    translationKr: ""
  },
  6: {
    sentenceIndex: 6,
    sentence: "跑得快，跑得快",
    structure: "V + 得 + Adj",
    explanation: "동작의 결과나 상태의 정도를 나타낼 때 '동사+得+형용사'의 형태를 취합니다.",
    level: "beginner",
    example: "走得慢",
    exampleKr: "걷는 것이 느리다",
    expanded: "",
    translationKr: ""
  },
  7: {
    sentenceIndex: 7,
    sentence: "一只没有眼睛，一只没有尾巴",
    structure: "没有 + 名词",
    explanation: "'有(있다)'의 부정문으로 명사 앞에 '没有'를 써서 대상을 소유하고 있지 않음을 나타냅니다.",
    level: "beginner",
    example: "他没有手机",
    exampleKr: "그는 휴대폰이 없다",
    expanded: "",
    translationKr: ""
  },
  8: {
    sentenceIndex: 8,
    sentence: "真奇怪！真奇怪！",
    structure: "真 + 形容词",
    explanation: "형용사 앞에 '真'을 사용하여 주관적인 감탄이나 강한 긍정을 표현합니다.",
    level: "beginner",
    example: "真好吃",
    exampleKr: "정말 맛있다",
    expanded: "",
    translationKr: ""
  }
};

// 获取指定句子的句式结构
export function getSentenceStructure(sentenceIndex: number): SentenceStructure | undefined {
  return liangzhilaohuSentenceStructures[sentenceIndex];
}


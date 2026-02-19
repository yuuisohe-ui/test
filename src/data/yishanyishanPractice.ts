// 一闪一闪亮晶晶词汇训练题海战术数据
import { PracticeQuestion, SentencePractice } from './tianmimiPractice';

export const yishanyishanPracticeData: SentencePractice[] = [
  {
    sentenceIndex: 1,
    questions: [
      {
        type: "multipleChoice",
        question: "'一闪一闪'의 올바른 병음은 무엇입니까?",
        options: ["yī shǎn yī shǎn", "yī shàn yī shàn", "yí shǎn yí shǎn", "yī shān yī shān"],
        correctAnswer: "yī shǎn yī shǎn",
        explanation: "'一'는 뒤에 3성이 올 때 보통 4성으로 변하지만, 기본 병음 표기는 yī shǎn yī shǎn으로 합니다.",
        difficulty: "medium"
      },
      {
        type: "multipleChoice",
        question: "'一闪一闪'의 성조 조합은 무엇입니까?",
        options: ["1-3-1-3", "1-4-1-4", "2-3-2-3", "4-3-4-3"],
        correctAnswer: "1-3-1-3",
        explanation: "각 글자의 기본 성조는 1성-3성-1성-3성입니다.",
        difficulty: "medium"
      },
      {
        type: "multipleChoice",
        question: "'一闪一闪'는 위 문장에서 어떤 역할을 합니까?",
        options: ["상태 묘사", "장소 표현", "동작 표현", "시간 표현"],
        correctAnswer: "상태 묘사",
        explanation: "별이 반짝이는 상태를 묘사하는 첩어 형용사로 쓰였습니다.",
        difficulty: "medium"
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["星星", "一闪一闪", "的", "。"],
        correctAnswer: ["星星", "一闪一闪", "的", "。"],
        explanation: "주어 + 상태 묘사 + 的 구조의 문장입니다.",
        difficulty: "medium"
      },
      {
        type: "multipleChoice",
        question: "'亮晶晶'의 올바른 병음은 무엇입니까?",
        options: ["liàng jīng jīng", "liáng jīng jīng", "liàng jǐng jǐng", "liāng jīng jīng"],
        correctAnswer: "liàng jīng jīng",
        explanation: "'亮'는 4성, '晶'은 1성입니다.",
        difficulty: "medium"
      },
      {
        type: "multipleChoice",
        question: "'亮晶晶'의 성조 조합은 무엇입니까?",
        options: ["4-1-1", "4-4-4", "2-1-1", "1-1-1"],
        correctAnswer: "4-1-1",
        explanation: "성조는 4성-1성-1성 조합입니다.",
        difficulty: "medium"
      },
      {
        type: "multipleChoice",
        question: "'亮晶晶'는 위 문장에서 어떤 역할을 합니까?",
        options: ["상태 묘사", "대상 표현", "수량 표현", "경험 표현"],
        correctAnswer: "상태 묘사",
        explanation: "눈이 반짝거리는 상태를 보충 설명하는 형용사입니다.",
        difficulty: "medium"
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["她的眼睛", "亮晶晶", "的", "。"],
        correctAnswer: ["她的眼睛", "亮晶晶", "的", "。"],
        explanation: "묘사 대상 + 묘사어 + 的 순서로 구성됩니다.",
        difficulty: "medium"
      }
    ]
  },
  {
    sentenceIndex: 2,
    questions: [
      {
        type: "multipleChoice",
        question: "'满天'의 올바른 병음은 무엇입니까?",
        options: ["mǎn tiān", "màn tiān", "mǎn tián", "mān tiān"],
        correctAnswer: "mǎn tiān",
        explanation: "'满'은 3성, '天'은 1성입니다.",
        difficulty: "easy"
      },
      {
        type: "multipleChoice",
        question: "'满天'의 성조 조합은 무엇입니까?",
        options: ["3-1", "3-2", "2-1", "4-1"],
        correctAnswer: "3-1",
        explanation: "3성-1성 조합의 단어입니다.",
        difficulty: "easy"
      },
      {
        type: "multipleChoice",
        question: "'满天'는 위 문장에서 어떤 역할을 합니까?",
        options: ["장소 표현", "동작 표현", "수량 표현", "시간 표현"],
        correctAnswer: "장소 표현",
        explanation: "하늘 전체라는 장소적 범위를 나타냅니다.",
        difficulty: "easy"
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["夜晚", "满天", "都是", "星星。"],
        correctAnswer: ["夜晚", "满天", "都是", "星星。"],
        explanation: "시간 + 장소 + 都是(전부 ~이다) + 명사 순입니다.",
        difficulty: "easy"
      },
      {
        type: "multipleChoice",
        question: "'星星'의 올바른 병음은 무엇입니까?",
        options: ["xīng xīng", "xíng xīng", "xǐng xing", "xīng xìng"],
        correctAnswer: "xīng xīng",
        explanation: "두 글자 모두 1성으로 발음하거나, 뒤의 글자를 경성으로 발음하기도 합니다.",
        difficulty: "easy"
      },
      {
        type: "multipleChoice",
        question: "'星星'의 성조 조합은 무엇입니까?",
        options: ["1-1", "1-0", "2-2", "4-4"],
        correctAnswer: "1-1",
        explanation: "제시된 병음에 따르면 1성-1성 조합입니다.",
        difficulty: "easy"
      },
      {
        type: "multipleChoice",
        question: "'星星'는 위 문장에서 어떤 역할을 합니까?",
        options: ["대상 표현", "동작 표현", "상태 묘사", "시간 표현"],
        correctAnswer: "대상 표현",
        explanation: "문장에서 언급되는 구체적인 사물(대상)인 '별'을 의미합니다.",
        difficulty: "easy"
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["看，", "天上的", "星星", "。"],
        correctAnswer: ["看，", "天上的", "星星", "。"],
        explanation: "감탄사/동사 + 수식어 + 명사 구조입니다.",
        difficulty: "easy"
      }
    ]
  },
  {
    sentenceIndex: 3,
    questions: [
      {
        type: "multipleChoice",
        question: "'挂'의 올바른 병음은 무엇입니까?",
        options: ["guà", "guā", "guǎ", "kuà"],
        correctAnswer: "guà",
        explanation: "걸다라는 뜻의 挂는 4성 guà입니다.",
        difficulty: "medium"
      },
      {
        type: "multipleChoice",
        question: "'挂'의 성조 조합은 무엇입니까?",
        options: ["4", "1", "2", "3"],
        correctAnswer: "4",
        explanation: "4성 하나로 이루어진 단어입니다.",
        difficulty: "medium"
      },
      {
        type: "multipleChoice",
        question: "'挂'는 위 문장에서 어떤 역할을 합니까?",
        options: ["동작 표현", "장소 표현", "상태 묘사", "수량 표현"],
        correctAnswer: "동작 표현",
        explanation: "지도를 거는 행위나 걸려 있는 상태를 나타내는 동사입니다.",
        difficulty: "medium"
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["墙上", "挂着", "一张", "地图。"],
        correctAnswer: ["墙上", "挂着", "一张", "地图。"],
        explanation: "장소 + 동사+着(지속) + 수량 + 목적어(존현문) 구조입니다.",
        difficulty: "medium"
      },
      {
        type: "multipleChoice",
        question: "'光明'의 올바른 병음은 무엇입니까?",
        options: ["guāng míng", "guāng mǐng", "guǎng míng", "guāng mīng"],
        correctAnswer: "guāng míng",
        explanation: "guāng(1성)과 míng(2성)이 합쳐진 단어입니다.",
        difficulty: "medium"
      },
      {
        type: "multipleChoice",
        question: "'光明'의 성조 조합은 무엇입니까?",
        options: ["1-2", "1-3", "2-2", "1-1"],
        correctAnswer: "1-2",
        explanation: "1성-2성 조합입니다.",
        difficulty: "medium"
      },
      {
        type: "multipleChoice",
        question: "'光明'는 위 문장에서 어떤 역할을 합니까?",
        options: ["대상 표현", "장소 표현", "동작 표현", "시간 표현"],
        correctAnswer: "대상 표현",
        explanation: "태양이 가져다준 추상적인 대상(명사)인 '광명'을 뜻합니다.",
        difficulty: "medium"
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["太阳", "给我们", "带来了", "光明。"],
        correctAnswer: ["太阳", "给我们", "带来了", "光明。"],
        explanation: "주어 + 전치사구 + 동사구 + 목적어 순입니다.",
        difficulty: "medium"
      }
    ]
  },
  {
    sentenceIndex: 4,
    questions: [
      {
        type: "multipleChoice",
        question: "'好像'의 올바른 병음은 무엇입니까?",
        options: ["hǎo xiàng", "hǎo xiāng", "háo xiàng", "hǎo xiǎng"],
        correctAnswer: "hǎo xiàng",
        explanation: "hǎo(3성)와 xiàng(4성)이 합쳐진 단어입니다.",
        difficulty: "easy"
      },
      {
        type: "multipleChoice",
        question: "'好像'의 성조 조합은 무엇입니까?",
        options: ["3-4", "3-1", "2-4", "4-4"],
        correctAnswer: "3-4",
        explanation: "3성-4성 조합입니다.",
        difficulty: "easy"
      },
      {
        type: "multipleChoice",
        question: "'好像'는 위 문장에서 어떤 역할을 합니까?",
        options: ["상태 묘사", "대상 표현", "장소 표현", "수량 표현"],
        correctAnswer: "상태 묘사",
        explanation: "주어의 상태를 추측하거나 묘사하는 부사적 역할을 합니다.",
        difficulty: "easy"
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["他", "好像", "不高兴", "。"],
        correctAnswer: ["他", "好像", "不高兴", "。"],
        explanation: "주어 + 부사(추측) + 형용사구 순입니다.",
        difficulty: "easy"
      },
      {
        type: "multipleChoice",
        question: "'眼睛'의 올바른 병음은 무엇입니까?",
        options: ["yǎn jīng", "yǎn jing", "yán jīng", "yàn jīng"],
        correctAnswer: "yǎn jīng",
        explanation: "눈을 뜻하는 眼睛은 yǎn(3성) jīng(1성)입니다.",
        difficulty: "easy"
      },
      {
        type: "multipleChoice",
        question: "'眼睛'의 성조 조합은 무엇입니까?",
        options: ["3-1", "3-0", "2-1", "3-4"],
        correctAnswer: "3-1",
        explanation: "제시된 병음에 따라 3성-1성 조합입니다.",
        difficulty: "easy"
      },
      {
        type: "multipleChoice",
        question: "'眼睛'는 위 문장에서 어떤 역할을 합니까?",
        options: ["대상 표현", "동작 표현", "장소 표현", "시간 표현"],
        correctAnswer: "대상 표현",
        explanation: "신체 부위를 나타내는 명사로서 문장의 주체(대상)가 됩니다.",
        difficulty: "easy"
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["她的", "眼睛", "很大", "。"],
        correctAnswer: ["她的", "眼睛", "很大", "。"],
        explanation: "수식어 + 명사(주어) + 형용사(술어) 순입니다.",
        difficulty: "easy"
      }
    ]
  },
  { sentenceIndex: 5, questions: [] },
  {
    sentenceIndex: 6,
    questions: [
      {
        type: "multipleChoice",
        question: "'星星'의 올바른 병음은 무엇입니까?",
        options: ["xīng xīng", "xǐng xing", "xīng xìng", "xīng xíng"],
        correctAnswer: "xīng xīng",
        explanation: "星星은 xīng xīng(1성-1성)으로 발음합니다.",
        difficulty: "easy"
      },
      {
        type: "multipleChoice",
        question: "'星星'의 성조 조합은 무엇입니까?",
        options: ["1-1", "1-2", "1-4", "2-2"],
        correctAnswer: "1-1",
        explanation: "1성-1성 조합입니다.",
        difficulty: "easy"
      },
      {
        type: "multipleChoice",
        question: "'星星'는 위 문장에서 어떤 역할을 합니까?",
        options: ["대상 표현", "동작 표현", "장소 표현", "수량 표현"],
        correctAnswer: "대상 표현",
        explanation: "동작의 주체가 되는 사물 명사입니다.",
        difficulty: "easy"
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["天上的", "星星", "在跳舞", "。"],
        correctAnswer: ["天상의", "星星", "在跳舞", "。"],
        explanation: "관형어 + 주어 + 진행형 술어 순입니다.",
        difficulty: "easy"
      }
    ]
  },
  { sentenceIndex: 7, questions: [] },
  { sentenceIndex: 8, questions: [] },
  { sentenceIndex: 9, questions: [] },
  { sentenceIndex: 10, questions: [] },
  { sentenceIndex: 11, questions: [] },
  { sentenceIndex: 12, questions: [] },
  { sentenceIndex: 13, questions: [] },
  { sentenceIndex: 14, questions: [] }
];

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const sentencePractice = yishanyishanPracticeData.find(sp => sp.sentenceIndex === sentenceIndex);
  return sentencePractice ? sentencePractice.questions : [];
}


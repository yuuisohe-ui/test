// 两只老虎词汇训练题海战术数据
import { PracticeQuestion, SentencePractice } from './tianmimiPractice';

export const liangzhilaohuPracticeData: SentencePractice[] = [
  {
    sentenceIndex: 1,
    questions: [
      {
        question: "'老虎'의 올바른 병음은 무엇입니까?",
        type: "multipleChoice",
        options: ["lǎo hǔ", "lǎo hū", "lǎo hú", "lǎo hù"],
        correctAnswer: "lǎo hǔ",
        explanation: "'老虎(호랑이)'의 병음은 lǎo hǔ입니다.",
        difficulty: "easy"
      },
      {
        question: "'老虎'의 성조 조합은 무엇입니까?",
        type: "multipleChoice",
        options: ["3-3", "3-1", "2-3", "3-4"],
        correctAnswer: "3-3",
        explanation: "'老虎'는 제3성+제3성의 조합입니다.",
        difficulty: "easy"
      },
      {
        question: "'老虎'는 위 문장에서 어떤 역할을 합니까?",
        type: "multipleChoice",
        options: ["장소 표현", "동작 표현", "대상 표현", "시간 표현"],
        correctAnswer: "대상 표현",
        explanation: "문장에서 존재하는 대상(호랑이)을 나타냅니다.",
        difficulty: "easy"
      },
      {
        question: "다음 문장을 올바른 순서로 배열하세요.",
        type: "sentenceOrder",
        options: ["动物园里", "有", "两只", "大老虎。"],
        correctAnswer: "动物园里有两只大老虎。",
        explanation: "장소 + 동사(有) + 수량 + 명사 순으로 배열합니다.",
        difficulty: "easy"
      }
    ]
  },
  {
    sentenceIndex: 2,
    questions: [
      {
        question: "'跑'의 올바른 병음은 무엇입니까?",
        type: "multipleChoice",
        options: ["pǎo", "pāo", "páo", "pào"],
        correctAnswer: "pǎo",
        explanation: "'跑(달리다)'의 병음은 pǎo입니다.",
        difficulty: "easy"
      },
      {
        question: "'跑'의 성조 조합은 무엇입니까?",
        type: "multipleChoice",
        options: ["3", "1", "2", "4"],
        correctAnswer: "3",
        explanation: "'跑'는 제3성 단음절 단어입니다.",
        difficulty: "easy"
      },
      {
        question: "'跑'는 위 문장에서 어떤 역할을 합니까?",
        type: "multipleChoice",
        options: ["장소 표현", "동작 표현", "상태 묘사", "경험 표현"],
        correctAnswer: "동작 표현",
        explanation: "주체의 움직임인 '달리다'를 나타내는 동사입니다.",
        difficulty: "easy"
      },
      {
        question: "다음 문장을 올바른 순서로 배열하세요.",
        type: "sentenceOrder",
        options: ["他", "跑得", "很快。"],
        correctAnswer: "他跑得很快。",
        explanation: "주어 + 술어 + 정도보어(得) 구조입니다.",
        difficulty: "easy"
      },
      {
        question: "'快'의 올바른 병음은 무엇입니까?",
        type: "multipleChoice",
        options: ["kuài", "kuāi", "kuái", "kuǎi"],
        correctAnswer: "kuài",
        explanation: "'快(빠르다)'의 병음은 kuài입니다.",
        difficulty: "easy"
      },
      {
        question: "'快'의 성조 조합은 무엇입니까?",
        type: "multipleChoice",
        options: ["4", "1", "2", "3"],
        correctAnswer: "4",
        explanation: "'快'는 제4성 단음절 단어입니다.",
        difficulty: "easy"
      },
      {
        question: "'快'는 위 문장에서 어떤 역할을 합니까?",
        type: "multipleChoice",
        options: ["장소 표현", "동작 표현", "상태 묘사", "수량 표현"],
        correctAnswer: "상태 묘사",
        explanation: "속도가 빠르다는 상태를 설명하는 형용사입니다.",
        difficulty: "easy"
      },
      {
        question: "다음 문장을 올바른 순서로 배열하세요.",
        type: "sentenceOrder",
        options: ["汽车的", "速度", "很快。"],
        correctAnswer: "汽车的速度很快。",
        explanation: "주어(명사구) + 정도부사 + 형용사 순입니다.",
        difficulty: "easy"
      }
    ]
  },
  {
    sentenceIndex: 3,
    questions: [
      {
        question: "'眼睛'의 올바른 병음은 무엇입니까?",
        type: "multipleChoice",
        options: ["yǎn jing", "yǎn jīng", "yǎn jǐng", "yǎn jìng"],
        correctAnswer: "yǎn jing",
        explanation: "'眼睛(눈)'에서 '睛'은 경성으로 발음합니다.",
        difficulty: "easy"
      },
      {
        question: "'眼睛'의 성조 조합은 무엇입니까?",
        type: "multipleChoice",
        options: ["3-0", "3-1", "3-4", "1-1"],
        correctAnswer: "3-0",
        explanation: "제3성과 경성(0)의 조합입니다.",
        difficulty: "easy"
      },
      {
        question: "'眼睛'는 위 문장에서 어떤 역할을 합니까?",
        type: "multipleChoice",
        options: ["동작 표현", "상태 묘사", "대상 표현", "时间 표현"],
        correctAnswer: "대상 표현",
        explanation: "상태 묘사의 대상이 되는 신체 부위 명사입니다.",
        difficulty: "easy"
      },
      {
        question: "다음 문장을 올바른 순서로 배열하세요.",
        type: "sentenceOrder",
        options: ["她的", "眼睛", "又大", "又圆。"],
        correctAnswer: "她的眼睛又大又圆。",
        explanation: "주어 + 又...又... (상태 묘사) 구조입니다.",
        difficulty: "easy"
      },
      {
        question: "'尾巴'의 올바른 병음은 무엇입니까?",
        type: "multipleChoice",
        options: ["wěi ba", "wěi bā", "wěi bá", "wéi ba"],
        correctAnswer: "wěi ba",
        explanation: "'尾巴(꼬리)'에서 '巴'는 경성으로 발음합니다.",
        difficulty: "medium"
      },
      {
        question: "'尾巴'의 성조 조합은 무엇입니까?",
        type: "multipleChoice",
        options: ["3-0", "3-1", "1-0", "3-2"],
        correctAnswer: "3-0",
        explanation: "제3성과 경성(0)의 조합입니다.",
        difficulty: "medium"
      },
      {
        question: "'尾巴'는 위 문장에서 어떤 역할을 합니까?",
        type: "multipleChoice",
        options: ["동작 표현", "상태 묘사", "대상 표현", "장소 표현"],
        correctAnswer: "대상 표현",
        explanation: "동작(摇)의 목적어가 되는 대상 명사입니다.",
        difficulty: "medium"
      },
      {
        question: "다음 문장을 올바른 순서로 배열하세요.",
        type: "sentenceOrder",
        options: ["小狗", "正在", "摇", "尾巴。"],
        correctAnswer: "小狗正在摇尾巴。",
        explanation: "주어 + 진행 부사(正在) + 동사 + 목적어 순입니다.",
        difficulty: "medium"
      }
    ]
  },
  {
    sentenceIndex: 4,
    questions: [
      {
        question: "'奇怪'의 올바른 병음은 무엇입니까?",
        type: "multipleChoice",
        options: ["qí guài", "qǐ guài", "qī guài", "qí guāi"],
        correctAnswer: "qí guài",
        explanation: "'奇怪(이상하다)'의 병음은 qí guài입니다.",
        difficulty: "medium"
      },
      {
        question: "'奇怪'의 성조 조합은 무엇입니까?",
        type: "multipleChoice",
        options: ["2-4", "1-4", "3-4", "2-1"],
        correctAnswer: "2-4",
        explanation: "제2성과 제4성의 조합입니다.",
        difficulty: "medium"
      },
      {
        question: "'奇怪'는 위 문장에서 어떤 역할을 합니까?",
        type: "multipleChoice",
        options: ["동작 표현", "상태 묘사", "장소 표현", "时间 표현"],
        correctAnswer: "상태 묘사",
        explanation: "사건의 성질이나 상태를 나타내는 형용사입니다.",
        difficulty: "medium"
      },
      {
        question: "다음 문장을 올바른 순서로 배열하세요.",
        type: "sentenceOrder",
        options: ["这件事", "真", "奇怪。"],
        correctAnswer: "这件事真奇怪。",
        explanation: "주어 + 감탄 부사(真) + 형용사 순입니다.",
        difficulty: "medium"
      }
    ]
  },
  {
    sentenceIndex: 5,
    questions: [
      {
        question: "'老虎'의 올바른 병음은 무엇입니까?",
        type: "multipleChoice",
        options: ["lǎo hǔ", "láo hū", "lǎo hū", "láo hǔ"],
        correctAnswer: "lǎo hǔ",
        explanation: "'老虎'의 기본 성조는 제3성+제3성입니다.",
        difficulty: "easy"
      },
      {
        question: "'老虎'의 성조 조합은 무엇입니까?",
        type: "multipleChoice",
        options: ["3-3", "2-3", "3-1", "3-2"],
        correctAnswer: "3-3",
        explanation: "'老虎'는 3성 두 개가 결합된 단어입니다.",
        difficulty: "easy"
      },
      {
        question: "'老虎'는 위 문장에서 어떤 역할을 합니까?",
        type: "multipleChoice",
        options: ["장소 표현", "동작 표현", "대상 표현", "수량 표현"],
        correctAnswer: "대상 표현",
        explanation: "존현문에서 주체나 대상 역할을 하는 명사입니다.",
        difficulty: "easy"
      },
      {
        question: "다음 문장을 올바른 순서로 배열하세요.",
        type: "sentenceOrder",
        options: ["森林里", "住着", "老虎。"],
        correctAnswer: "森林里住着老虎。",
        explanation: "장소 + 동사+着(상태 지속) + 명사 순입니다.",
        difficulty: "easy"
      }
    ]
  },
  {
    sentenceIndex: 6,
    questions: [
      {
        question: "'跑'의 올바른 병음은 무엇입니까?",
        type: "multipleChoice",
        options: ["pǎo", "páo", "pào", "pāo"],
        correctAnswer: "pǎo",
        explanation: "'跑'의 병음은 pǎo입니다.",
        difficulty: "easy"
      },
      {
        question: "'跑'의 성조 조합은 무엇입니까?",
        type: "multipleChoice",
        options: ["3", "1", "2", "4"],
        correctAnswer: "3",
        explanation: "제3성으로 발음합니다.",
        difficulty: "easy"
      },
      {
        question: "'跑'는 위 문장에서 어떤 역할을 합니까?",
        type: "multipleChoice",
        options: ["장소 표현", "동작 표현", "대상 표현", "时间 표현"],
        correctAnswer: "동작 표현",
        explanation: "장소에서 행해지는 구체적인 동작(달리기)을 나타냅니다.",
        difficulty: "easy"
      },
      {
        question: "다음 문장을 올바른 순서로 배열하세요.",
        type: "sentenceOrder",
        options: ["他在", "操场上", "跑步。"],
        correctAnswer: "他在操场上跑步。",
        explanation: "주어 + 在(장소) + 동작 순으로 배열합니다.",
        difficulty: "easy"
      },
      {
        question: "'快'의 올바른 병음은 무엇입니까?",
        type: "multipleChoice",
        options: ["kuài", "kuài", "kuāi", "kuǎi"],
        correctAnswer: "kuài",
        explanation: "'快'의 성조는 제4성입니다.",
        difficulty: "easy"
      },
      {
        question: "'快'의 성조 조합은 무엇입니까?",
        type: "multipleChoice",
        options: ["4", "1", "2", "3"],
        correctAnswer: "4",
        explanation: "제4성 단음절 단어입니다.",
        difficulty: "easy"
      },
      {
        question: "'快'는 위 문장에서 어떤 역할을 합니까?",
        type: "multipleChoice",
        options: ["동작 표현", "상태 묘사", "장소 표현", "경험 표현"],
        correctAnswer: "상태 묘사",
        explanation: "동작의 방식이나 상태를 수식하는 형용사적 용법입니다.",
        difficulty: "easy"
      },
      {
        question: "다음 문장을 올바른 순서로 배열하세요.",
        type: "sentenceOrder",
        options: ["请", "走快", "一点。"],
        correctAnswer: "请走快一点。",
        explanation: "청유문 + 술어 + 보어 순의 구조입니다.",
        difficulty: "easy"
      }
    ]
  },
  {
    sentenceIndex: 7,
    questions: [
      {
        question: "'眼睛'의 올바른 병음은 무엇입니까?",
        type: "multipleChoice",
        options: ["yǎn jing", "yán jīng", "yǎn jǐng", "yán jīng"],
        correctAnswer: "yǎn jing",
        explanation: "'眼睛'의 두 번째 글자는 경성입니다.",
        difficulty: "easy"
      },
      {
        question: "'眼睛'의 성조 조합은 무엇입니까?",
        type: "multipleChoice",
        options: ["3-0", "3-1", "2-1", "3-4"],
        correctAnswer: "3-0",
        explanation: "제3성과 경성의 조합입니다.",
        difficulty: "easy"
      },
      {
        question: "'眼睛'는 위 문장에서 어떤 역할을 합니까?",
        type: "multipleChoice",
        options: ["동작 표현", "대상 표현", "상태 묘사", "时间 표현"],
        correctAnswer: "대상 표현",
        explanation: "동사(闭上)의 목적어가 되는 대상 명사입니다.",
        difficulty: "easy"
      },
      {
        question: "다음 문장을 올바른 순서로 배열하세요.",
        type: "sentenceOrder",
        options: ["睡觉的时候", "要", "闭上", "眼睛。"],
        correctAnswer: "睡觉的时候要闭上眼睛。",
        explanation: "시간 명사구 + 조동사 + 동사 + 목적어 순입니다.",
        difficulty: "easy"
      },
      {
        question: "'尾巴'의 올바른 병음은 무엇입니까?",
        type: "multipleChoice",
        options: ["wěi ba", "wěi bā", "wèi bā", "wéi ba"],
        correctAnswer: "wěi ba",
        explanation: "'尾巴'의 '巴'는 경성으로 발음해야 자연스럽습니다.",
        difficulty: "medium"
      },
      {
        question: "'尾巴'의 성조 조합은 무엇입니까?",
        type: "multipleChoice",
        options: ["3-0", "3-1", "2-0", "4-0"],
        correctAnswer: "3-0",
        explanation: "제3성과 경성의 조합입니다.",
        difficulty: "medium"
      },
      {
        question: "'尾巴'는 위 문장에서 어떤 역할을 합니까?",
        type: "multipleChoice",
        options: ["상태 묘사", "대상 표현", "장소 표현", "동작 표현"],
        correctAnswer: "대상 표현",
        explanation: "특성을 설명하려는 핵심 대상 명사입니다.",
        difficulty: "medium"
      },
      {
        question: "다음 문장을 올바른 순서로 배열하세요.",
        type: "sentenceOrder",
        options: ["猴子的", "尾巴", "很长。"],
        correctAnswer: "猴子的尾巴很长。",
        explanation: "관형어 + 주어 + 정도부사 + 형용사 구조입니다.",
        difficulty: "medium"
      }
    ]
  },
  {
    sentenceIndex: 8,
    questions: [
      {
        question: "'奇怪'의 올바른 병음은 무엇입니까?",
        type: "multipleChoice",
        options: ["qí guài", "qī guāi", "qǐ guài", "qí guǎi"],
        correctAnswer: "qí guài",
        explanation: "'奇怪'의 병음은 qí guài(2성, 4성)입니다.",
        difficulty: "medium"
      },
      {
        question: "'奇怪'의 성조 조합은 무엇입니까?",
        type: "multipleChoice",
        options: ["2-4", "1-4", "2-3", "2-1"],
        correctAnswer: "2-4",
        explanation: "제2성과 제4성의 조합입니다.",
        difficulty: "medium"
      },
      {
        question: "'奇怪'는 위 문장에서 어떤 역할을 합니까?",
        type: "multipleChoice",
        options: ["상태 묘사", "동작 표현", "대상 표현", "장소 표현"],
        correctAnswer: "상태 묘사",
        explanation: "행위의 성질을 설명하는 형용사 술어 역할을 합니다.",
        difficulty: "medium"
      },
      {
        question: "다음 문장을 올바른 순서로 배열하세요.",
        type: "sentenceOrder",
        options: ["他的", "行为", "有点", "奇怪。"],
        correctAnswer: "他的行为有点奇怪。",
        explanation: "주어 + 정도부사(有点) + 형용사 순입니다.",
        difficulty: "medium"
      }
    ]
  }
];

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const sentencePractice = liangzhilaohuPracticeData.find(sp => sp.sentenceIndex === sentenceIndex);
  return sentencePractice ? sentencePractice.questions : [];
}


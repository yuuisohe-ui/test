// 给我一首歌的时间练习数据

import { PracticeQuestion } from './tianmimiPractice';

// 每句歌词对应的练习题目
export const geiwoyishougedeshijianPractice: Record<number, PracticeQuestion[]> = {
  1: [
    {
      type: "multipleChoice",
      question: "'雨'의 올바른 병음은 무엇입니까?",
      options: ["yǔ", "yù", "yú", "yǔu"],
      correctAnswer: "yǔ",
      explanation: "yǔ(3) 단음절입니다.",
      difficulty: "easy",
    },
    {
      type: "multipleChoice",
      question: "'雨'의 성조 조합은 무엇입니까?",
      options: ["3", "2", "4", "1"],
      correctAnswer: "3",
      explanation: "yǔ(3) 입니다.",
      difficulty: "easy",
    },
    {
      type: "multipleChoice",
      question: "'雨'는 위 문장에서 어떤 역할을 합니까?",
      options: ["대상 표현", "시간 표현", "동작 표현", "수량 표현"],
      correctAnswer: "대상 표현",
      explanation: "'비' 명사입니다.",
      difficulty: "easy",
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["雨", "下得", "很", "大。"],
      correctAnswer: "雨下得很大。",
      explanation: "정도부사(很)+결과보어(下得) 구조입니다.",
      difficulty: "easy",
    },
    {
      type: "multipleChoice",
      question: "'仔细'의 올바른 병음은 무엇입니까?",
      options: ["zǐ xì", "zǐ xī", "zǎi xì", "zǐxì"],
      correctAnswer: "zǐ xì",
      explanation: "zǐ(3)+xì(4) 입니다.",
      difficulty: "medium",
    },
    {
      type: "multipleChoice",
      question: "'仔细'의 성조 조합은 무엇입니까?",
      options: ["3-4", "3-2", "2-4", "4-4"],
      correctAnswer: "3-4",
      explanation: "3성과 4성 조합입니다.",
      difficulty: "medium",
    },
    {
      type: "multipleChoice",
      question: "'仔细'는 위 문장에서 어떤 역할을 합니까?",
      options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"],
      correctAnswer: "상태 묘사",
      explanation: "'꼼꼼한 상태/방식'을 말합니다.",
      difficulty: "medium",
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["请", "仔细", "听。"],
      correctAnswer: "请仔细听。",
      explanation: "청유(请)+부사(仔细)+동사입니다.",
      difficulty: "medium",
    },
  ],
  2: [
    {
      type: "multipleChoice",
      question: "'明白'의 올바른 병음은 무엇입니까?",
      options: ["míng bái", "mǐng bái", "míng bài", "míngbái"],
      correctAnswer: "míng bái",
      explanation: "míng(2)+bái(2) 입니다.",
      difficulty: "easy",
    },
    {
      type: "multipleChoice",
      question: "'明白'의 성조 조합은 무엇입니까?",
      options: ["2-2", "2-4", "1-2", "3-2"],
      correctAnswer: "2-2",
      explanation: "둘 다 2성입니다.",
      difficulty: "easy",
    },
    {
      type: "multipleChoice",
      question: "'明白'는 위 문장에서 어떤 역할을 합니까?",
      options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"],
      correctAnswer: "동작 표현",
      explanation: "'이해하다' 동사로 자주 씁니다.",
      difficulty: "easy",
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["我", "明白", "了。"],
      correctAnswer: "我明白了。",
      explanation: "완료(了)로 '이해 완료'를 표현합니다.",
      difficulty: "easy",
    },
    {
      type: "multipleChoice",
      question: "'牵手'의 올바른 병음은 무엇입니까?",
      options: ["qiān shǒu", "qián shǒu", "qiān shòu", "qiānshǒu"],
      correctAnswer: "qiān shǒu",
      explanation: "qiān(1)+shǒu(3) 입니다.",
      difficulty: "medium",
    },
    {
      type: "multipleChoice",
      question: "'牵手'의 성조 조합은 무엇입니까?",
      options: ["1-3", "1-4", "2-3", "3-3"],
      correctAnswer: "1-3",
      explanation: "1성과 3성 조합입니다.",
      difficulty: "medium",
    },
    {
      type: "multipleChoice",
      question: "'牵手'는 위 문장에서 어떤 역할을 합니까?",
      options: ["동작 표현", "대상 표현", "시간 표현", "수량 표현"],
      correctAnswer: "동작 표현",
      explanation: "'손을 잡다' 동작입니다.",
      difficulty: "medium",
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["我们", "牵手", "走", "吧。"],
      correctAnswer: "我们牵手走吧。",
      explanation: "청유(吧)+연속동작(牵手+走)입니다.",
      difficulty: "medium",
    },
  ],
};

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  return geiwoyishougedeshijianPractice[sentenceIndex] || [];
}

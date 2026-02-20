// 泡沫词汇训练题海战术数据
import { PracticeQuestion, SentencePractice } from './tianmimiPractice';

export const paomoPracticeData: SentencePractice[] = [
  {
    sentenceIndex: 1,
    questions: [
      { id: "1_1_q1", word: "泡沫", type: "multipleChoice", question: "'泡沫'의 올바른 병음은 무엇입니까?", options: ["pào mò", "pǎo mò", "pào muò", "pǎo muò"], correctAnswer: "pào mò", explanation: "'泡沫'의 발음은 pào mò입니다.", difficulty: "hard" },
      { id: "1_1_q2", word: "泡沫", type: "multipleChoice", question: "'泡沫'의 성조 조합은 무엇입니까?", options: ["4-4", "3-4", "4-2", "4-1"], correctAnswer: "4-4", explanation: "pào(4성) + mò(4성) 조합입니다.", difficulty: "hard" },
      { id: "1_1_q3", word: "泡沫", type: "multipleChoice", question: "'泡沫'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "동작 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "문장에서 존재의 대상을 나타내는 목적어 역할을 합니다.", difficulty: "hard" },
      { id: "1_1_q4", word: "泡沫", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["肥皂水里", "有", "很多", "泡沫。"], correctAnswer: ["肥皂水里", "有", "很多", "泡沫。"], explanation: "장소 + 동사(有) + 수량 + 명사 순서로 배열합니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 2,
    questions: [
      { id: "2_1_q1", word: "幸福", type: "multipleChoice", question: "'幸福'의 올바른 병음은 무엇입니까?", options: ["xìng fú", "xīng fú", "xìng fù", "xīng fǔ"], correctAnswer: "xìng fú", explanation: "'幸福'의 발음은 xìng fú입니다.", difficulty: "medium" },
      { id: "2_1_q2", word: "幸福", type: "multipleChoice", question: "'幸福'의 성조 조합은 무엇입니까?", options: ["4-2", "4-4", "1-2", "2-2"], correctAnswer: "4-2", explanation: "xìng(4성) + fú(2성) 조합입니다.", difficulty: "medium" },
      { id: "2_1_q3", word: "幸福", type: "multipleChoice", question: "'幸福'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "생활의 상태를 꾸며주는 형용사 역할을 합니다.", difficulty: "medium" },
      { id: "2_1_q4", word: "幸福", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他们", "过着", "幸福的", "生活。"], correctAnswer: ["他们", "过着", "幸福的", "生活。"], explanation: "주어 + 술어 + 관형어 + 목적어 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 3,
    questions: [
      { id: "3_1_q1", word: "对错", type: "multipleChoice", question: "'对错'의 올바른 병음은 무엇입니까?", options: ["duì cuò", "duī cuò", "duì cuō", "tuì cuò"], correctAnswer: "duì cuò", explanation: "'对错'의 발음은 duì cuò입니다.", difficulty: "easy" },
      { id: "3_1_q2", word: "对错", type: "multipleChoice", question: "'对错'의 성조 조합은 무엇입니까?", options: ["4-4", "4-1", "1-4", "3-4"], correctAnswer: "4-4", explanation: "duì(4성) + cuò(4성) 조합입니다.", difficulty: "easy" },
      { id: "3_1_q3", word: "对错", type: "multipleChoice", question: "'对错'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "분별하는 대상을 나타내는 목적어 역할을 합니다.", difficulty: "easy" },
      { id: "3_1_q4", word: "对错", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这件事情", "很难", "分清", "对错。"], correctAnswer: ["这件事情", "很难", "分清", "对错。"], explanation: "주어 + 부사구 + 술어 + 목적어 순서입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 4,
    questions: [
      { id: "4_1_q1", word: "基于", type: "multipleChoice", question: "'基于'의 올바른 병음은 무엇입니까?", options: ["jī yú", "jǐ yú", "jī yǔ", "jí yú"], correctAnswer: "jī yú", explanation: "'基于'의 발음은 jī yú입니다.", difficulty: "hard" },
      { id: "4_1_q2", word: "基于", type: "multipleChoice", question: "'基于'의 성조 조합은 무엇입니까?", options: ["1-2", "1-3", "2-2", "1-4"], correctAnswer: "1-2", explanation: "jī(1성) + yú(2성) 조합입니다.", difficulty: "hard" },
      { id: "4_1_q3", word: "基于", type: "multipleChoice", question: "'基于'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "근거를 나타내는 동사구의 핵심 역할을 합니다.", difficulty: "hard" },
      { id: "4_1_q4", word: "基于", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这个决定", "是", "基于事实", "做出的。"], correctAnswer: ["这个决定", "是", "基于事实", "做出的。"], explanation: "'是...的' 강조 구문 내에서 근거를 설명합니다.", difficulty: "hard" },
      { id: "4_2_q1", word: "谎言", type: "multipleChoice", question: "'谎言'의 올바른 병음은 무엇입니까?", options: ["huǎng yán", "huāng yán", "huǎng yàn", "huāng yàn"], correctAnswer: "huǎng yán", explanation: "'谎言'의 발음은 huǎng yán입니다.", difficulty: "hard" },
      { id: "4_2_q2", word: "谎言", type: "multipleChoice", question: "'谎言'의 성조 조합은 무엇입니까?", options: ["3-2", "1-2", "3-4", "2-2"], correctAnswer: "3-2", explanation: "huǎng(3성) + yán(2성) 조합입니다.", difficulty: "hard" },
      { id: "4_2_q3", word: "谎言", type: "multipleChoice", question: "'谎言'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "수량 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "수단을 나타내는 도구(대상) 역할을 합니다.", difficulty: "hard" },
      { id: "4_2_q4", word: "谎言", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["不要用", "谎言", "去欺骗", "别人。"], correctAnswer: ["不要用", "谎言", "去欺骗", "别人。"], explanation: "금지어 + 도구 + 목적 + 대상 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 5,
    questions: [
      { id: "5_1_q1", word: "美丽", type: "multipleChoice", question: "'美丽'의 올바른 병음은 무엇입니까?", options: ["měi lì", "mèi lǐ", "méi lì", "měi lǐ"], correctAnswer: "měi lì", explanation: "'美丽'의 발음은 měi lì입니다.", difficulty: "medium" },
      { id: "5_1_q2", word: "美丽", type: "multipleChoice", question: "'美丽'의 성조 조합은 무엇입니까?", options: ["3-4", "3-3", "2-4", "4-4"], correctAnswer: "3-4", explanation: "měi(3성) + lì(4성) 조합입니다.", difficulty: "medium" },
      { id: "5_1_q3", word: "美丽", type: "multipleChoice", question: "'美丽'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "대상 표현", "시간 표현"], correctAnswer: "상태 묘사", explanation: "주어인 풍경의 상태를 서술하는 형용사 술어입니다.", difficulty: "medium" },
      { id: "5_1_q4", word: "美丽", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这里的风景", "非常", "美丽。"], correctAnswer: ["这里的风景", "非常", "美丽。"], explanation: "주어 + 정도부사 + 형용사 술어 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 6,
    questions: [
      { id: "6_1_q1", word: "一刹", type: "multipleChoice", question: "'一刹'의 올바른 병음은 무엇입니까?", options: ["yī chà", "yì chà", "yí chā", "yī shà"], correctAnswer: "yī chà", explanation: "'一刹'의 발음은 yī chà입니다.", difficulty: "hard" },
      { id: "6_1_q2", word: "一刹", type: "multipleChoice", question: "'一刹'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "4-4", "2-4"], correctAnswer: "1-4", explanation: "yī(1성) + chà(4성) 조합입니다.", difficulty: "hard" },
      { id: "6_1_q3", word: "一刹", type: "multipleChoice", question: "'一刹'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "장소 표현", "동작 표현", "대상 표현"], correctAnswer: "시간 표현", explanation: "짧은 순간을 나타내는 시간 부사어 역할을 합니다.", difficulty: "hard" },
      { id: "6_1_q4", word: "一刹", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["流星", "在一刹那间", "消失了。"], correctAnswer: ["流星", "在一刹那间", "消失了。"], explanation: "주어 + 시간 부사어 + 술어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 7,
    questions: [
      { id: "7_1_q1", word: "承诺", type: "multipleChoice", question: "'承诺'의 올바른 병음은 무엇입니까?", options: ["chéng nuò", "chéng ruò", "chěng nuò", "chèng nuò"], correctAnswer: "chéng nuò", explanation: "'承诺'의 발음은 chéng nuò입니다.", difficulty: "hard" },
      { id: "7_1_q2", word: "承诺", type: "multipleChoice", question: "'承诺'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "3-4", "1-4"], correctAnswer: "2-4", explanation: "chéng(2성) + nuò(4성) 조합입니다.", difficulty: "hard" },
      { id: "7_1_q3", word: "承诺", type: "multipleChoice", question: "'承诺'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "상태 묘사", "时间 표현"], correctAnswer: "대상 표현", explanation: "행위의 대상을 나타내는 목적어 역할을 합니다.", difficulty: "hard" },
      { id: "7_1_q4", word: "承诺", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["既然", "做出了承诺，", "就要守信。"], correctAnswer: ["既然", "做出了承诺，", "就要守信。"], explanation: "접속사(既然)를 사용한 인과관계 문장입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 8,
    questions: [
      { id: "8_1_q1", word: "脆弱", type: "multipleChoice", question: "'脆弱'의 올바른 병음은 무엇입니까?", options: ["cuì ruò", "cuī ruò", "chuì ruò", "cuì rùo"], correctAnswer: "cuì ruò", explanation: "'脆弱'의 발음은 cuì ruò입니다.", difficulty: "hard" },
      { id: "8_1_q2", word: "脆弱", type: "multipleChoice", question: "'脆弱'의 성조 조합은 무엇입니까?", options: ["4-4", "4-2", "1-4", "3-4"], correctAnswer: "4-4", explanation: "cuì(4성) + ruò(4성) 조합입니다.", difficulty: "hard" },
      { id: "8_1_q3", word: "脆弱", type: "multipleChoice", question: "'脆弱'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "감정의 상태를 설명하는 형용사 술어입니다.", difficulty: "hard" },
      { id: "8_1_q4", word: "脆弱", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["她的感情", "非常", "脆弱。"], correctAnswer: ["她的感情", "非常", "脆弱。"], explanation: "주어 + 정도부사 + 형용사 술어 순서입니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 9, questions: [] },
  {
    sentenceIndex: 10,
    questions: [
      { id: "10_1_q1", word: "看破", type: "multipleChoice", question: "'看破'의 올바른 병음은 무엇입니까?", options: ["kàn pò", "kān pò", "kàn pō", "kǎn pò"], correctAnswer: "kàn pò", explanation: "'看破'의 발음은 kàn pò입니다.", difficulty: "hard" },
      { id: "10_1_q2", word: "看破", type: "multipleChoice", question: "'看破'의 성조 조합은 무엇입니까?", options: ["4-4", "1-4", "4-1", "3-4"], correctAnswer: "4-4", explanation: "kàn(4성) + pò(4성) 조합입니다.", difficulty: "hard" },
      { id: "10_1_q3", word: "看破", type: "multipleChoice", question: "'看破'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "이미 꿰뚫어 보았음을 나타내는 술어(동사+결과보어)입니다.", difficulty: "hard" },
      { id: "10_1_q4", word: "看破", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "早已", "看破了", "对方的计谋。"], correctAnswer: ["他", "早已", "看破了", "对方的计谋。"], explanation: "주어 + 부사 + 술어 + 목적어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 11,
    questions: [
      { id: "11_1_q1", word: "难过", type: "multipleChoice", question: "'难过'의 올바른 병음은 무엇입니까?", options: ["nán guò", "nán guǒ", "nàn guò", "lán guò"], correctAnswer: "nán guò", explanation: "'难过'의 발음은 nán guò입니다.", difficulty: "easy" },
      { id: "11_1_q2", word: "难过", type: "multipleChoice", question: "'难过'의 성조 조합은 무엇입니까?", options: ["2-4", "2-1", "4-4", "2-2"], correctAnswer: "2-4", explanation: "nán(2성) + guò(4성) 조합입니다.", difficulty: "easy" },
      { id: "11_1_q3", word: "难过", type: "multipleChoice", question: "'难过'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "대상 표현", "时间 표현"], correctAnswer: "상태 묘사", explanation: "사람의 심리 상태를 나타내는 형용사 술어입니다.", difficulty: "easy" },
      { id: "11_1_q4", word: "难过", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["考试没考好，", "他", "很难过。"], correctAnswer: ["考试没考好，", "他", "很难过。"], explanation: "원인 + 주어 + 상태 서술 순서입니다.", difficulty: "easy" }
    ]
  },
  { sentenceIndex: 12, questions: [] },
  {
    sentenceIndex: 13,
    questions: [
      { id: "13_1_q1", word: "一触就破", type: "multipleChoice", question: "'一触就破'의 올바른 병음은 무엇입니까?", options: ["yī chù jiù pò", "yī chù jiù pō", "yì chù jiù pò", "yí chù jiù pò"], correctAnswer: "yī chù jiù pò", explanation: "'一触就破'의 발음은 yī chù jiù pò입니다.", difficulty: "hard" },
      { id: "13_1_q2", word: "一触就破", type: "multipleChoice", question: "'一触就破'의 성조 조합은 무엇입니까?", options: ["1-4-4-4", "1-3-4-4", "2-4-4-4", "1-4-4-1"], correctAnswer: "1-4-4-4", explanation: "yī(1) + chù(4) + jiù(4) + pò(4) 조합입니다.", difficulty: "hard" },
      { id: "13_1_q3", word: "一触就破", type: "multipleChoice", question: "'一触就破'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "대상 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "비누방울의 성질이나 상태를 설명하는 서술어입니다.", difficulty: "hard" },
      { id: "13_1_q4", word: "一触就破", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这些", "肥皂泡", "一触就破。"], correctAnswer: ["这些", "肥皂泡", "一触就破。"], explanation: "지시사 + 주어 + 서술어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 14,
    questions: [
      { id: "14_1_q1", word: "折磨", type: "multipleChoice", question: "'折磨'의 올바른 병음은 무엇입니까?", options: ["zhé mó", "zhè mó", "zhé mō", "shé mó"], correctAnswer: "zhé mó", explanation: "'折磨'의 발음은 zhé mó입니다.", difficulty: "hard" },
      { id: "14_1_q2", word: "折磨", type: "multipleChoice", question: "'折磨'의 성조 조합은 무엇입니까?", options: ["2-2", "2-4", "3-2", "1-2"], correctAnswer: "2-2", explanation: "zhé(2성) + mó(2성) 조합입니다.", difficulty: "hard" },
      { id: "14_1_q3", word: "折磨", type: "multipleChoice", question: "'折磨'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "대상 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "고통을 주는 행위를 나타내는 동사 술어입니다.", difficulty: "hard" },
      { id: "14_1_q4", word: "折磨", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["病痛", "折磨了", "他很多年。"], correctAnswer: ["病痛", "折磨了", "他很多年。"], explanation: "주어 + 술어(동사+le) + 목적어(보어포함) 순서입니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 15, questions: [] },
  { sentenceIndex: 16, questions: [] },
  { sentenceIndex: 17, questions: [] },
  { sentenceIndex: 18, questions: [] },
  { sentenceIndex: 19, questions: [] },
  { sentenceIndex: 20, questions: [] },
  { sentenceIndex: 21, questions: [] },
  { sentenceIndex: 22, questions: [] },
  { sentenceIndex: 23, questions: [] },
  { sentenceIndex: 24, questions: [] },
  {
    sentenceIndex: 25,
    questions: [
      { id: "25_1_q1", word: "花朵", type: "multipleChoice", question: "'花朵'의 올바른 병음은 무엇입니까?", options: ["huā duǒ", "huā duō", "huǎ duǒ", "huà duǒ"], correctAnswer: "huā duǒ", explanation: "'花朵'의 발음은 huā duǒ입니다.", difficulty: "easy" },
      { id: "25_1_q2", word: "花朵", type: "multipleChoice", question: "'花朵'의 성조 조합은 무엇입니까?", options: ["1-3", "1-1", "1-2", "1-4"], correctAnswer: "1-3", explanation: "huā(1성) + duǒ(3성) 조합입니다.", difficulty: "easy" },
      { id: "25_1_q3", word: "花朵", type: "multipleChoice", question: "'花朵'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "문장에서 동작의 대상이 되는 목적어 역할을 합니다.", difficulty: "easy" },
      { id: "25_1_q4", word: "花朵", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["公园里", "开满了", "鲜艳的", "花朵。"], correctAnswer: ["公园里", "开满了", "鲜艳的", "花朵。"], explanation: "장소 + 술어 + 관형어 + 목적어 순서인 존현문입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 26,
    questions: [
      { id: "26_1_q1", word: "盛开", type: "multipleChoice", question: "'盛开'의 올바른 병음은 무엇입니까?", options: ["shèng kāi", "shéng kāi", "shèng kǎi", "shèng kài"], correctAnswer: "shèng kāi", explanation: "'盛开'의 발음은 shèng kāi입니다.", difficulty: "medium" },
      { id: "26_1_q2", word: "盛开", type: "multipleChoice", question: "'盛开'의 성조 조합은 무엇입니까?", options: ["4-1", "2-1", "4-3", "4-4"], correctAnswer: "4-1", explanation: "shèng(4성) + kāi(1성) 조합입니다.", difficulty: "medium" },
      { id: "26_1_q3", word: "盛开", type: "multipleChoice", question: "'盛开'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "꽃이 피는 동작을 나타내는 동사 술어입니다.", difficulty: "medium" },
      { id: "26_1_q4", word: "盛开", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["春天到了，", "樱花", "都盛开了。"], correctAnswer: ["春天到了，", "樱花", "都盛开了。"], explanation: "시간절 + 주어 + 부사 + 술어 순서입니다.", difficulty: "medium" },
      { id: "26_2_q1", word: "凋落", type: "multipleChoice", question: "'凋落'의 올바른 병음은 무엇입니까?", options: ["diāo luò", "tiāo luò", "diāo luó", "diào luò"], correctAnswer: "diāo luò", explanation: "'凋落'의 발음은 diāo luò입니다.", difficulty: "hard" },
      { id: "26_2_q2", word: "凋落", type: "multipleChoice", question: "'凋落'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "4-4", "2-4"], correctAnswer: "1-4", explanation: "diāo(1성) + luò(4성) 조합입니다.", difficulty: "hard" },
      { id: "26_2_q3", word: "凋落", type: "multipleChoice", question: "'凋落'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "대상 표현"], correctAnswer: "동작 표현", explanation: "나뭇잎이 떨어지는 현상을 나타내는 동사 술어입니다.", difficulty: "hard" },
      { id: "26_2_q4", word: "凋落", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["秋天来了，", "树叶", "纷纷凋落。"], correctAnswer: ["秋天来了，", "树叶", "纷纷凋落。"], explanation: "시간절 + 주어 + 부사 + 술어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 27,
    questions: [
      { id: "27_1_q1", word: "亮眼", type: "multipleChoice", question: "'亮眼'의 올바른 병음은 무엇입니까?", options: ["liàng yǎn", "liáng yǎn", "liàng yàn", "niàng yǎn"], correctAnswer: "liàng yǎn", explanation: "'亮眼'의 발음은 liàng yǎn입니다.", difficulty: "medium" },
      { id: "27_1_q2", word: "亮眼", type: "multipleChoice", question: "'亮眼'의 성조 조합은 무엇입니까?", options: ["4-3", "2-3", "4-4", "4-2"], correctAnswer: "4-3", explanation: "liàng(4성) + yǎn(3성) 조합입니다.", difficulty: "medium" },
      { id: "27_1_q3", word: "亮眼", type: "multipleChoice", question: "'亮眼'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "대상 표현", "时间 표현"], correctAnswer: "상태 묘사", explanation: "표현이나 모습이 훌륭함을 나타내는 형용사 술어입니다.", difficulty: "medium" },
      { id: "27_1_q4", word: "亮眼", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "在晚会上的表现", "非常亮眼。"], correctAnswer: ["他", "在晚회上的表现", "非常亮眼。"], explanation: "주어 + 주어를 꾸미는 구 + 술어부 순서입니다.", difficulty: "medium" },
      { id: "27_2_q1", word: "坠落", type: "multipleChoice", question: "'坠落'의 올바른 병음은 무엇입니까?", options: ["zhuì luò", "zuì luò", "zhuì luó", "chuì luò"], correctAnswer: "zhuì luò", explanation: "'坠落'의 발음은 zhuì luò입니다.", difficulty: "hard" },
      { id: "27_2_q2", word: "坠落", type: "multipleChoice", question: "'坠落'의 성조 조합은 무엇입니까?", options: ["4-4", "1-4", "3-4", "2-4"], correctAnswer: "4-4", explanation: "zhuì(4성) + luò(4성) 조합입니다.", difficulty: "hard" },
      { id: "27_2_q3", word: "坠落", type: "multipleChoice", question: "'坠落'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "떨어지는 동작을 나타내는 동사 술어입니다.", difficulty: "hard" },
      { id: "27_2_q4", word: "坠落", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["星星", "从夜空中", "坠落。"], correctAnswer: ["星星", "从夜空中", "坠落。"], explanation: "주어 + 장소 부사어 + 술어 순서입니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 28, questions: [] },
  { sentenceIndex: 29, questions: [] },
  { sentenceIndex: 30, questions: [] },
  { sentenceIndex: 31, questions: [] },
  { sentenceIndex: 32, questions: [] },
  { sentenceIndex: 33, questions: [] },
  { sentenceIndex: 34, questions: [] },
  { sentenceIndex: 35, questions: [] },
  { sentenceIndex: 36, questions: [] },
  { sentenceIndex: 37, questions: [] },
  {
    sentenceIndex: 38,
    questions: [
      { id: "38_1_q1", word: "轮廓", type: "multipleChoice", question: "'轮廓'의 올바른 병음은 무엇입니까?", options: ["lún kuò", "lún guō", "lùn kuò", "lún kuō"], correctAnswer: "lún kuò", explanation: "'轮廓'의 발음은 lún kuò입니다.", difficulty: "hard" },
      { id: "38_1_q2", word: "轮廓", type: "multipleChoice", question: "'轮廓'의 성조 조합은 무엇입니까?", options: ["2-4", "2-1", "1-4", "2-2"], correctAnswer: "2-4", explanation: "lún(2성) + kuò(4성) 조합입니다.", difficulty: "hard" },
      { id: "38_1_q3", word: "轮廓", type: "multipleChoice", question: "'轮廓'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "상태 묘사", "장소 표현"], correctAnswer: "대상 표현", explanation: "문장에서 설명의 주체인 주어 역할을 합니다.", difficulty: "hard" },
      { id: "38_1_q4", word: "轮廓", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["在夕阳下，", "山的轮廓", "很清晰。"], correctAnswer: ["在夕阳下，", "山的轮廓", "很清晰。"], explanation: "상황 배경 + 주어 + 술어 순서입니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 39, questions: [] },
  {
    sentenceIndex: 40,
    questions: [
      { id: "40_1_q1", word: "如此", type: "multipleChoice", question: "'如此'의 올바른 병음은 무엇입니까?", options: ["rú cǐ", "rù cǐ", "rú chǐ", "lú cǐ"], correctAnswer: "rú cǐ", explanation: "'如此'의 발음은 rú cǐ입니다.", difficulty: "medium" },
      { id: "40_1_q2", word: "如此", type: "multipleChoice", question: "'如此'의 성조 조합은 무엇입니까?", options: ["2-3", "2-4", "3-3", "1-3"], correctAnswer: "2-3", explanation: "rú(2성) + cǐ(3성) 조합입니다.", difficulty: "medium" },
      { id: "40_1_q3", word: "如此", type: "multipleChoice", question: "'如此'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "정도를 나타내는 부사어로서 뒤의 형용사를 수식합니다.", difficulty: "medium" },
      { id: "40_1_q4", word: "如此", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["没想到", "事情", "竟然如此", "麻烦。"], correctAnswer: ["没想到", "事情", "竟然如此", "麻烦。"], explanation: "심리동사 + 소절(주어 + 부사 + 술어) 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 41,
    questions: [
      { id: "41_1_q1", word: "把握", type: "multipleChoice", question: "'把握'의 올바른 병음은 무엇입니까?", options: ["bǎ wò", "pǎ wò", "bǎ wō", "bà wò"], correctAnswer: "bǎ wò", explanation: "'把握'의 발음은 bǎ wò입니다.", difficulty: "medium" },
      { id: "41_1_q2", word: "把握", type: "multipleChoice", question: "'把握'의 성조 조합은 무엇입니까?", options: ["3-4", "3-3", "2-4", "4-4"], correctAnswer: "3-4", explanation: "bǎ(3성) + wò(4성) 조합입니다.", difficulty: "medium" },
      { id: "41_1_q3", word: "把握", type: "multipleChoice", question: "'把握'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "문장에서 '있다(有)'의 목적어 역할을 합니다.", difficulty: "medium" },
      { id: "41_1_q4", word: "把握", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "对这次面试", "很有把握。"], correctAnswer: ["他", "对这次面试", "很有把握。"], explanation: "주어 + 전치사구 + 술어 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 42,
    questions: [
      { id: "42_1_q1", word: "如何", type: "multipleChoice", question: "'如何'의 올바른 병음은 무엇입니까?", options: ["rú hé", "lú hé", "rú hè", "rù hé"], correctAnswer: "rú hé", explanation: "'如何'의 발음은 rú hé입니다.", difficulty: "medium" },
      { id: "42_1_q2", word: "如何", type: "multipleChoice", question: "'如何'의 성조 조합은 무엇입니까?", options: ["2-2", "2-4", "4-2", "1-2"], correctAnswer: "2-2", explanation: "rú(2성) + hé(2성) 조합입니다.", difficulty: "medium" },
      { id: "42_1_q3", word: "如何", type: "multipleChoice", question: "'如何'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "방식을 묻는 의문 부사어 역할을 합니다.", difficulty: "medium" },
      { id: "42_1_q4", word: "如何", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["请问", "这个问题", "该如何解决？"], correctAnswer: ["请问", "这个问题", "该如何解决？"], explanation: "정중한 표현 + 주어 + 부사어 + 술어 순서입니다.", difficulty: "medium" },
      { id: "42_2_q1", word: "搜索", type: "multipleChoice", question: "'搜索'의 올바른 병음은 무엇입니까?", options: ["sōu suǒ", "shōu suǒ", "sōu shuǒ", "sǒu suǒ"], correctAnswer: "sōu suǒ", explanation: "'搜索'의 발음은 sōu suǒ입니다.", difficulty: "hard" },
      { id: "42_2_q2", word: "搜索", type: "multipleChoice", question: "'搜索'의 성조 조합은 무엇입니까?", options: ["1-3", "1-4", "4-3", "2-3"], correctAnswer: "1-3", explanation: "sōu(1성) + suǒ(3성) 조합입니다.", difficulty: "hard" },
      { id: "42_2_q3", word: "搜索", type: "multipleChoice", question: "'搜索'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "대상 표현", "时间 표현"], correctAnswer: "동작 표현", explanation: "찾는 행위를 나타내는 동사 술어입니다.", difficulty: "hard" },
      { id: "42_2_q4", word: "搜索", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "在网上", "搜索", "相关的信息。"], correctAnswer: ["他", "在网上", "搜索", "相关的信息。"], explanation: "주어 + 장소 부사어 + 술어 + 목적어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 43,
    questions: [
      { id: "43_1_q1", word: "寂寞", type: "multipleChoice", question: "'寂寞'의 올바른 병음은 무엇입니까?", options: ["jì mò", "jì mō", "jī mò", "jí mò"], correctAnswer: "jì mò", explanation: "'寂寞'의 발음은 jì mò입니다.", difficulty: "medium" },
      { id: "43_1_q2", word: "寂寞", type: "multipleChoice", question: "'寂寞'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-1", "3-4"], correctAnswer: "4-4", explanation: "jì(4성) + mò(4성) 조합입니다.", difficulty: "medium" },
      { id: "43_1_q3", word: "寂寞", type: "multipleChoice", question: "'寂寞'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "심리적 상태를 나타내는 형용사 술어입니다.", difficulty: "medium" },
      { id: "43_1_q4", word: "寂寞", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他一个人", "在国外", "感到很寂寞。"], correctAnswer: ["他一个人", "在国外", "感到很寂寞。"], explanation: "주어 + 장소 부사어 + 술어부 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 44,
    questions: [
      { id: "44_1_q1", word: "难道", type: "multipleChoice", question: "'难道'의 올바른 병음은 무엇입니까?", options: ["nán dào", "lán dào", "nàn dào", "nán dǎo"], correctAnswer: "nán dào", explanation: "'难道'의 발음은 nán dào입니다.", difficulty: "medium" },
      { id: "44_1_q2", word: "难道", type: "multipleChoice", question: "'难道'의 성조 조합은 무엇입니까?", options: ["2-4", "4-4", "2-2", "2-1"], correctAnswer: "2-4", explanation: "nán(2성) + dào(4성) 조합입니다.", difficulty: "medium" },
      { id: "44_1_q3", word: "难道", type: "multipleChoice", question: "'难道'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "대상 표현", "时间 표현"], correctAnswer: "상태 묘사", explanation: "반문의 어조를 강화하는 부사 역할을 합니다.", difficulty: "medium" },
      { id: "44_1_q4", word: "难道", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["难道", "你还没明白", "我的意思吗？"], correctAnswer: ["难道", "你还没明白", "我的意思吗？"], explanation: "반문 부사 + 주어구 + 목적어 순서입니다.", difficulty: "medium" }
    ]
  },
  { sentenceIndex: 45, questions: [] },
  { sentenceIndex: 46, questions: [] },
  { sentenceIndex: 47, questions: [] },
  { sentenceIndex: 48, questions: [] },
  { sentenceIndex: 49, questions: [] },
  {
    sentenceIndex: 50,
    questions: [
      { id: "50_1_q1", word: "炽热", type: "multipleChoice", question: "'炽热'의 올바른 병음은 무엇입니까?", options: ["chì rè", "zhì rè", "chī rè", "chì lè"], correctAnswer: "chì rè", explanation: "'炽热'의 발음은 chì rè입니다.", difficulty: "hard" },
      { id: "50_1_q2", word: "炽热", type: "multipleChoice", question: "'炽热'의 성조 조합은 무엇입니까?", options: ["4-4", "1-4", "2-4", "3-4"], correctAnswer: "4-4", explanation: "chì(4성) + rè(4성) 조합입니다.", difficulty: "hard" },
      { id: "50_1_q3", word: "炽热", type: "multipleChoice", question: "'炽热'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "햇빛의 상태를 꾸며주는 관형어 역할을 합니다.", difficulty: "hard" },
      { id: "50_1_q4", word: "炽热", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["炽热的阳光", "照在", "大地上。"], correctAnswer: ["炽热的阳光", "照在", "大地上。"], explanation: "주어 + 술어 + 보어(장소) 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 51,
    questions: [
      { id: "51_1_q1", word: "沉没", type: "multipleChoice", question: "'沉没'의 올바른 병음은 무엇입니까?", options: ["chén mò", "chén mòu", "chén mō", "shén mò"], correctAnswer: "chén mò", explanation: "'沉没'의 발음은 chén mò입니다.", difficulty: "hard" },
      { id: "51_1_q2", word: "沉没", type: "multipleChoice", question: "'沉没'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "4-4", "1-4"], correctAnswer: "2-4", explanation: "chén(2성) + mò(4성) 조합입니다.", difficulty: "hard" },
      { id: "51_1_q3", word: "沉没", type: "multipleChoice", question: "'沉没'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "대상 표현"], correctAnswer: "동작 표현", explanation: "가라앉는 동작을 나타내는 동사 술어입니다.", difficulty: "hard" },
      { id: "51_1_q4", word: "沉没", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["沉重的物体", "会掉入海底", "沉没。"], correctAnswer: ["沉重的物体", "会掉入海底", "沉没。"], explanation: "주어 + 연동문(동사1+장소, 동사2) 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 52,
    questions: [
      { id: "52_1_q1", word: "骗", type: "multipleChoice", question: "'骗'의 올바른 병음은 무엇입니까?", options: ["piàn", "biàn", "piān", "piǎn"], correctAnswer: "piàn", explanation: "'骗'의 발음은 piàn입니다.", difficulty: "easy" },
      { id: "52_1_q2", word: "骗", type: "multipleChoice", question: "'骗'의 성조 조합은 무엇입니까?", options: ["4", "1", "2", "3"], correctAnswer: "4", explanation: "piàn은 4성 단음절어입니다.", difficulty: "easy" },
      { id: "52_1_q3", word: "骗", type: "multipleChoice", question: "'骗'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "대상 표현"], correctAnswer: "동작 표현", explanation: "속이는 행위를 나타내는 동사 술어입니다.", difficulty: "easy" },
      { id: "52_1_q4", word: "骗", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["不要骗我，", "说", "实话。"], correctAnswer: ["不要骗我，", "说", "实话。"], explanation: "금지구 + 술어 + 목적어 순서입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 53,
    questions: [
      { id: "53_1_q1", word: "宁愿", type: "multipleChoice", question: "'宁愿'의 올바른 병음은 무엇입니까?", options: ["nìng yuàn", "níng yuàn", "nìng yuán", "nìng yúan"], correctAnswer: "nìng yuàn", explanation: "'宁愿'의 발음은 nìng yuàn입니다.", difficulty: "medium" },
      { id: "53_1_q2", word: "宁愿", type: "multipleChoice", question: "'宁愿'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-2", "3-4"], correctAnswer: "4-4", explanation: "nìng(4성) + yuàn(4성) 조합입니다.", difficulty: "medium" },
      { id: "53_1_q3", word: "宁愿", type: "multipleChoice", question: "'宁愿'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "선택의 의지를 나타내는 부사어 역할을 합니다.", difficulty: "medium" },
      { id: "53_1_q4", word: "宁愿", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我", "宁愿走路", "也不想", "坐这辆车。"], correctAnswer: ["我", "宁愿走路", "也不想", "坐这辆车。"], explanation: "주어 + 선택A + 부정선택B 구조입니다.", difficulty: "medium" },
      { id: "53_2_q1", word: "沉默", type: "multipleChoice", question: "'沉默'의 올바른 병음은 무엇입니까?", options: ["chén mò", "chén mòu", "chèn mò", "shén mò"], correctAnswer: "chén mò", explanation: "'沉默'의 발음은 chén mò입니다.", difficulty: "hard" },
      { id: "53_2_q2", word: "沉默", type: "multipleChoice", question: "'沉默'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "4-4", "1-4"], correctAnswer: "2-4", explanation: "chén(2성) + mò(4성) 조합입니다.", difficulty: "hard" },
      { id: "53_2_q3", word: "沉默", type: "multipleChoice", question: "'沉默'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "时间 표현"], correctAnswer: "대상 표현", explanation: "문장에서 선택의 대상을 나타내는 목적어 역할을 합니다.", difficulty: "hard" },
      { id: "53_2_q4", word: "沉默", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["面对质问，", "他选择了", "沉默。"], correctAnswer: ["面对质问，", "他选择了", "沉默。"], explanation: "상황구 + 주어/술어 + 목적어 순서입니다.", difficulty: "hard" }
    ]
  }
];

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const sentencePractice = paomoPracticeData.find(sp => sp.sentenceIndex === sentenceIndex);
  return sentencePractice ? sentencePractice.questions : [];
}



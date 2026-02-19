// 朋友词汇训练题海战术数据
import { PracticeQuestion, SentencePractice } from './tianmimiPractice';

export const pengyouPracticeData: SentencePractice[] = [
  {
    sentenceIndex: 1,
    questions: [
      { type: "multipleChoice", question: "'朋友'의 올바른 병음은 무엇입니까?", options: ["péng you", "pèng you", "péng yóu", "pēng you"], correctAnswer: "péng you", explanation: "朋友의 성조는 2성+경성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'朋友'의 성조 조합은 무엇입니까?", options: ["2-0", "2-2", "2-3", "2-4"], correctAnswer: "2-0", explanation: "peng은 2성, you는 경성(0)으로 발음됩니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'朋友'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "시간 표현", "장소 표현", "동작 표현"], correctAnswer: "대상 표현", explanation: "문장에서 술어 뒤에 오는 목적어(대상) 역할을 합니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他是", "我的", "好朋友。"], correctAnswer: "他是我的好朋友。", explanation: "'주어+술어+관형어+목적어' 순서로 배열합니다.", difficulty: "easy" }
    ]
  },
  { sentenceIndex: 2, questions: [] },
  { sentenceIndex: 3, questions: [] },
  {
    sentenceIndex: 4,
    questions: [
      { type: "multipleChoice", question: "'这些年'의 올바른 병음은 무엇입니까?", options: ["zhè xiē nián", "zhè xuē nián", "zhè xiě nián", "zhě xiē nián"], correctAnswer: "zhè xiē nián", explanation: "这些年의 병음은 zhè(4성), xiē(1성), nián(2성)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'这些年'의 성조 조합은 무엇입니까?", options: ["4-1-2", "4-3-2", "4-1-1", "3-1-2"], correctAnswer: "4-1-2", explanation: "각 글자의 성조는 4성-1성-2성 순서입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'这些年'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "장소 표현", "동작 표현", "수량 표현"], correctAnswer: "시간 표현", explanation: "사건이 일어난 시기를 나타내는 시간 부사어 역할을 합니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这些年", "他", "变化很大。"], correctAnswer: "这些年他变化很大。", explanation: "시간 명사는 문장 맨 앞이나 주어 뒤에 올 수 있습니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'一个人'의 올바른 병음은 무엇입니까?", options: ["yí gè rén", "yì gè rén", "yī gè rén", "yí gè rèn"], correctAnswer: "yí gè rén", explanation: "4성(gè) 앞의 一(yī)는 2성(yí)으로 변음됩니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'一个人'의 성조 조합은 무엇입니까?", options: ["2-4-2", "1-4-2", "4-4-2", "2-4-4"], correctAnswer: "2-4-2", explanation: "변조를 포함한 성조는 2성-4성-2성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'一个人'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "장소 표현", "수량 표현", "시간 표현"], correctAnswer: "상태 묘사", explanation: "어떤 상태나 방식으로 동작을 수행하는지 묘사합니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我喜欢", "一个人", "旅行。"], correctAnswer: "我喜欢一个人旅行。", explanation: "부사어(一个人)는 동사(旅行) 앞에 위치합니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 5,
    questions: [
      { type: "multipleChoice", question: "'风'의 올바른 병음은 무엇입니까?", options: ["fēng", "fèng", "fēn", "fōng"], correctAnswer: "fēng", explanation: "风은 1성으로 발음됩니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'风'의 성조 조합은 무엇입니까?", options: ["1", "2", "3", "4"], correctAnswer: "1", explanation: "风은 고음 평성인 1성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'风'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "문장의 주어로서 상태의 주체를 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["昨晚的", "风", "很大。"], correctAnswer: "昨晚的风很大。", explanation: "주어(风) 앞에 관형어(昨晚的)가 위치합니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 6,
    questions: [
      { type: "multipleChoice", question: "'泪'의 올바른 병음은 무엇입니까?", options: ["lèi", "lěi", "léi", "lēi"], correctAnswer: "lèi", explanation: "泪는 4성으로 강하게 내려 읽습니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'泪'의 성조 조합은 무엇입니까?", options: ["4", "1", "2", "3"], correctAnswer: "4", explanation: "泪는 4성 단음절 단어입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'泪'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "시간 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "동사 '含'의 목적어로 쓰였습니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["她的眼里", "含着", "泪。"], correctAnswer: "她的眼里含着泪。", explanation: "주어(장소)+술어(지속)+목적어 순서입니다.", difficulty: "medium" }
    ]
  },
  { sentenceIndex: 7, questions: [] },
  { sentenceIndex: 8, questions: [] },
  {
    sentenceIndex: 9,
    questions: [
      { type: "multipleChoice", question: "'回首'의 올바른 병음은 무엇입니까?", options: ["huí shǒu", "huí shǒu", "huī shǒu", "huì shǒu"], correctAnswer: "huí shǒu", explanation: "回首의 성조는 2성+3성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'回首'의 성조 조합은 무엇입니까?", options: ["2-3", "2-2", "3-3", "1-3"], correctAnswer: "2-3", explanation: "回(2성), 首(3성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'回首'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "수량 표현", "심리 묘사"], correctAnswer: "동작 표현", explanation: "과거를 돌아보는 동작을 나타내는 술어 역할을 합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["回首", "往事，", "感慨万千。"], correctAnswer: "回首往事，感慨万千。", explanation: "동사+목적어 구가 먼저 오고 그에 따른 감상을 뒤에 배치합니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 10, questions: [] },
  {
    sentenceIndex: 11,
    questions: [
      { type: "multipleChoice", question: "'一起'의 올바른 병음은 무엇입니까?", options: ["yì qǐ", "yī qǐ", "yí qǐ", "yì qī"], correctAnswer: "yì qǐ", explanation: "3성(qǐ) 앞의 一(yī)는 4성(yì)으로 변음됩니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'一起'의 성조 조합은 무엇입니까?", options: ["4-3", "1-3", "2-3", "4-1"], correctAnswer: "4-3", explanation: "변조된 4성과 3성 조합입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'一起'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "함께 동작을 한다는 것을 나타내는 부사어입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们", "一起去", "吃饭吧。"], correctAnswer: "我们一起去吃饭吧。", explanation: "부사(一起)는 동사(去) 앞에 위치합니다.", difficulty: "easy" }
    ]
  },
  { sentenceIndex: 12, questions: [] },
  {
    sentenceIndex: 13,
    questions: [
      { type: "multipleChoice", question: "'一句话'의 올바른 병음은 무엇입니까?", options: ["yí jù huà", "yì jù huà", "yī jù huà", "yí jù huā"], correctAnswer: "yí jù huà", explanation: "4성(jù) 앞의 一(yī)는 2성(yí)으로 변음됩니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'一句话'의 성조 조합은 무엇입니까?", options: ["2-4-4", "1-4-4", "4-4-4", "2-4-1"], correctAnswer: "2-4-4", explanation: "변조를 포함하여 2성-4성-4성으로 읽습니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'一句话'는 위 문장에서 어떤 역할을 합니까?", options: ["수량 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "수량 표현", explanation: "말의 수량을 나타내는 목적어구로 쓰였습니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "一句话", "也没说。"], correctAnswer: "他一句话也没说。", explanation: "부정문에서 '수량+也/都+부정' 형식으로 쓰입니다.", difficulty: "medium" }
    ]
  },
  { sentenceIndex: 14, questions: [] },
  {
    sentenceIndex: 15,
    questions: [
      { type: "multipleChoice", question: "'不曾'의 올바른 병음은 무엇입니까?", options: ["bù céng", "bù chěng", "bú céng", "bù cèng"], correctAnswer: "bù céng", explanation: "不(4성) 뒤에 2성(céng)이 오므로 不는 4성을 유지합니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'不曾'의 성조 조합은 무엇입니까?", options: ["4-2", "2-2", "4-1", "4-3"], correctAnswer: "4-2", explanation: "不(4성)와 曾(2성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'不曾'는 위 문장에서 어떤 역할을 합니까?", options: ["경험 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "경험 표현", explanation: "과거에 해본 적이 없음을 나타내는 부정 부사입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我", "从未曾", "见过他。"], correctAnswer: "我从未曾见过他。", explanation: "부사(从未曾)는 동사(见) 앞에 위치합니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 16, questions: [] },
  { sentenceIndex: 17, questions: [] },
  { sentenceIndex: 18, questions: [] },
  { sentenceIndex: 19, questions: [] },
  { sentenceIndex: 20, questions: [] },
  { sentenceIndex: 21, questions: [] },
  { sentenceIndex: 22, questions: [] },
  { sentenceIndex: 23, questions: [] },
  { sentenceIndex: 24, questions: [] },
  { sentenceIndex: 25, questions: [] },
  { sentenceIndex: 26, questions: [] },
  { sentenceIndex: 27, questions: [] },
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
  { sentenceIndex: 38, questions: [] },
  { sentenceIndex: 39, questions: [] },
  { sentenceIndex: 40, questions: [] },
  { sentenceIndex: 41, questions: [] },
  { sentenceIndex: 42, questions: [] },
  { sentenceIndex: 43, questions: [] }
];

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const sentencePractice = pengyouPracticeData.find(sp => sp.sentenceIndex === sentenceIndex);
  return sentencePractice ? sentencePractice.questions : [];
}


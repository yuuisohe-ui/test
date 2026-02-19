// 月亮代表我的心词汇训练题海战术数据
import { PracticeQuestion, SentencePractice } from './tianmimiPractice';

export const yueliangPracticeData: SentencePractice[] = [
  {
    sentenceIndex: 1,
    questions: [
      { type: "multipleChoice", question: "'深'의 올바른 병음은 무엇입니까?", options: ["shēn", "shén", "shěn", "shèn"], correctAnswer: "shēn", explanation: "'深'의 병음은 shēn(1성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'深'의 성조 조합은 무엇입니까?", options: ["1", "2", "3", "4"], correctAnswer: "1", explanation: "'深'은 제1성(high level)으로 발음합니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'深'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "동작 표현", "상태 묘사", "시간 표현"], correctAnswer: "상태 묘사", explanation: "문장에서 바다의 깊은 상태를 설명하는 형용사 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["海水", "很", "深", "。"], correctAnswer: "海水很深。", explanation: "'주어 + 정도부사 + 형용사' 어순으로 배열합니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 2,
    questions: [
      { type: "multipleChoice", question: "'几分'의 올바른 병음은 무엇입니까?", options: ["jǐ fēn", "jī fēn", "jí fèn", "jǐ fèn"], correctAnswer: "jǐ fēn", explanation: "'几分'의 병음은 jǐ fēn입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'几分'의 성조 조합은 무엇입니까?", options: ["3-1", "2-1", "3-4", "1-1"], correctAnswer: "3-1", explanation: "'几(3성) + 分(1성)'의 조합입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'几分'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "수량 표현", "동작 표현", "대상 표현"], correctAnswer: "수량 표현", explanation: "정도가 어느 정도임을 나타내는 수량/정도 표현입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "显得", "有几分", "疲倦", "。"], correctAnswer: "他显得有几分疲倦。", explanation: "'주어 + 동사 + 수량 + 형용사'의 어순입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 3,
    questions: [
      { type: "multipleChoice", question: "'情'의 올바른 병음은 무엇입니까?", options: ["qíng", "qīng", "qǐng", "qìng"], correctAnswer: "qíng", explanation: "'情'의 병음은 qíng(2성)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'情'의 성조 조합은 무엇입니까?", options: ["1", "2", "3", "4"], correctAnswer: "2", explanation: "'情'은 제2성(rising)으로 발음합니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'情'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "문장의 주어로서 감정이나 정을 나타내는 명사 역할을 합니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他们两人的", "情", "很深", "。"], correctAnswer: "他们两人的情很深。", explanation: "관형어와 주어, 술어 순서로 배열합니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 4,
    questions: [
      { type: "multipleChoice", question: "'真'의 올바른 병음은 무엇입니까?", options: ["zhēn", "zhèn", "zhén", "zēn"], correctAnswer: "zhēn", explanation: "'真'의 병음은 zhēn(1성)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'真'의 성조 조합은 무엇입니까?", options: ["1", "2", "3", "4"], correctAnswer: "1", explanation: "'真'은 제1성(high level)으로 발음합니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'真'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "사랑이 진실하다는 상태를 묘사하는 형용사 술어입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我的", "爱", "也", "真", "。"], correctAnswer: "我的爱也真。", explanation: "부사 '也'는 형용사 술어 앞에 위치합니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 5,
    questions: [
      { type: "multipleChoice", question: "'月亮'의 올바른 병음은 무엇입니까?", options: ["yuè liang", "yuè liáng", "yuè liǎng", "yüè liàng"], correctAnswer: "yuè liang", explanation: "'月亮'의 '亮'은 경성으로 발음하여 yuè liang입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'月亮'의 성조 조합은 무엇입니까?", options: ["4-0", "4-4", "4-2", "2-0"], correctAnswer: "4-0", explanation: "제4성과 경성(0)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'月亮'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "상태 묘사", "시간 표현"], correctAnswer: "대상 표현", explanation: "문장의 주어로서 사물을 나타내는 명사 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["晚上", "的", "月亮", "很圆", "。"], correctAnswer: "晚上的月亮很圆。", explanation: "시간 명사가 포함된 주어 구문을 완성합니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'代表'의 올바른 병음은 무엇입니까?", options: ["dài biǎo", "dāi biǎo", "dài biāo", "dài biào"], correctAnswer: "dài biǎo", explanation: "'代表'의 병음은 dài biǎo입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'代表'의 성조 조합은 무엇입니까?", options: ["4-3", "4-2", "2-3", "3-3"], correctAnswer: "4-3", explanation: "제4성과 제3성의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'代表'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "상태 묘사", "수량 표현"], correctAnswer: "동작 표현", explanation: "상징하거나 대표한다는 의미의 동사 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["月亮", "代表", "我的", "心", "。"], correctAnswer: "月亮代表我的心。", explanation: "주어-동사-목적어의 기본 어순을 따릅니다.", difficulty: "medium" }
    ]
  },
  { sentenceIndex: 6, questions: [] },
  { sentenceIndex: 7, questions: [] },
  {
    sentenceIndex: 8,
    questions: [
      { type: "multipleChoice", question: "'不移'의 올바른 병음은 무엇입니까?", options: ["bù yí", "bù yī", "bú yí", "bù yǐ"], correctAnswer: "bù yí", explanation: "'不移'의 병음은 bù yí입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'不移'의 성조 조합은 무엇입니까?", options: ["4-2", "2-2", "4-4", "2-4"], correctAnswer: "4-2", explanation: "제4성과 제2성의 조합입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'不移'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "의지가 변하지 않는 상태를 묘사하는 성어의 일부입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他的", "志向", "坚定", "不移", "。"], correctAnswer: "他的志向坚定不移。", explanation: "주어 뒤에 '坚定不移'(견정불이) 술어가 옵니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 9,
    questions: [
      { type: "multipleChoice", question: "'不变'의 올바른 병음은 무엇입니까?", options: ["bù biàn", "bú biàn", "bù biān", "bù biǎn"], correctAnswer: "bù biàn", explanation: "'不变'의 병음은 bù biàn(실제 발음 시 bú biàn으로 변화)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'不变'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-2", "4-1"], correctAnswer: "4-4", explanation: "기본 성조는 제4성과 제4성의 조합입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'不变'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "장소 표현", "대상 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "우정이 변하지 않는 상태임을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们的", "友谊", "永远", "不变", "。"], correctAnswer: "我们的友谊永远不变。", explanation: "'주어 + 부사 + 술어' 어순으로 배열합니다.", difficulty: "easy" }
    ]
  },
  { sentenceIndex: 10, questions: [] },
  {
    sentenceIndex: 11,
    questions: [
      { type: "multipleChoice", question: "'轻轻'의 올바른 병음은 무엇입니까?", options: ["qīng qīng", "qíng qíng", "qǐng qǐng", "qīng qing"], correctAnswer: "qīng qīng", explanation: "'轻轻'의 병음은 qīng qīng입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'轻轻'의 성조 조합은 무엇입니까?", options: ["1-1", "1-0", "1-2", "2-2"], correctAnswer: "1-1", explanation: "제1성과 제1성이 겹친 형태입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'轻轻'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "문에서 동작의 방식(가볍게)을 묘사하는 부사어 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["她", "轻轻地", "敲门", "。"], correctAnswer: "她轻轻地敲门。", explanation: "'주어 + 부사어 + 동사' 어순입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'吻'의 올바른 병음은 무엇입니까?", options: ["wěn", "wén", "wèn", "wēn"], correctAnswer: "wěn", explanation: "'吻'의 병음은 wěn(3성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'吻'의 성조 조합은 무엇입니까?", options: ["3", "2", "4", "1"], correctAnswer: "3", explanation: "'吻'은 제3성(falling-rising)으로 발음합니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'吻'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "문장에서 목적어 자리에 쓰인 명사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "给了她", "一个", "吻", "。"], correctAnswer: "他给了她一个吻。", explanation: "'주어 + 동사 + 수량 + 목적어'의 구성입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 12,
    questions: [
      { type: "multipleChoice", question: "'打动'의 올바른 병음은 무엇입니까?", options: ["dǎ dòng", "dá dòng", "dà dòng", "dǎ dōng"], correctAnswer: "dǎ dòng", explanation: "'打动'의 병음은 dǎ dòng입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'打动'의 성조 조합은 무엇입니까?", options: ["3-4", "2-4", "3-3", "4-4"], correctAnswer: "3-4", explanation: "제3성과 제4성의 조합입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'打动'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "상태 묘사", "시간 표현"], correctAnswer: "동작 표현", explanation: "감동을 주어 마음을 움직이는 동작(동사)을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["那个故事", "打动了", "我的", "心", "。"], correctAnswer: "那个故事打动了我的心。", explanation: "'주어 + 술어(동사+了) + 관형어 + 목적어' 어순입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 13,
    questions: [
      { type: "multipleChoice", question: "'深深'의 올바른 병음은 무엇입니까?", options: ["shēn shēn", "shén shēn", "shěn shěn", "shèn shèn"], correctAnswer: "shēn shēn", explanation: "'深深'의 병음은 shēn shēn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'深深'의 성조 조합은 무엇입니까?", options: ["1-1", "1-0", "1-4", "2-2"], correctAnswer: "1-1", explanation: "제1성과 제1성이 중첩된 형태입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'深深'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "사랑하는 정도나 상태를 깊게 묘사하는 부사어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我", "深深地", "爱着", "你", "。"], correctAnswer: "我深深地爱着你。", explanation: "'주어 + 부사어 + 동사술어 + 목적어' 어순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 14,
    questions: [
      { type: "multipleChoice", question: "'思念'의 올바른 병음은 무엇입니까?", options: ["sī niàn", "shī niàn", "sǐ niàn", "sī nián"], correctAnswer: "sī niàn", explanation: "'思念'의 병음은 sī niàn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'思念'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "2-4", "4-4"], correctAnswer: "1-4", explanation: "제1성과 제4성의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'思念'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "상태 묘사", "수량 표현"], correctAnswer: "동작 표현", explanation: "그리워하는 마음의 동작을 나타내는 동사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我", "非常", "思念", "家乡", "。"], correctAnswer: "我非常思念家乡。", explanation: "'주어 + 부사 + 동사 + 목적어' 어순입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'如今'의 올바른 병음은 무엇입니까?", options: ["rú jīn", "rù jīn", "rǔ jīn", "rú jǐn"], correctAnswer: "rú jīn", explanation: "'如今'의 병음은 rú jīn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'如今'의 성조 조합은 무엇입니까?", options: ["2-1", "2-4", "1-1", "3-1"], correctAnswer: "2-1", explanation: "제2성과 제1성의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'如今'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "동작 표현", "상태 묘사", "장소 표현"], correctAnswer: "시간 표현", explanation: "'지금/현재'를 나타내는 시간 명사 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["如今的", "生活", "很幸福", "。"], correctAnswer: "如今的生活很幸福。", explanation: "시간을 나타내는 관형어가 주어를 수식합니다.", difficulty: "medium" }
    ]
  },
  { sentenceIndex: 15, questions: [] },
  { sentenceIndex: 16, questions: [] },
  {
    sentenceIndex: 17,
    questions: [
      { type: "multipleChoice", question: "'想一想'의 올바른 병음은 무엇입니까?", options: ["xiǎng yī xiǎng", "xiáng yī xiǎng", "xiǎng yi xiǎng", "xiàng yī xiàng"], correctAnswer: "xiǎng yī xiǎng", explanation: "동사 중첩 사이에 '一'이 들어간 xiǎng yī xiǎng입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'想一想'의 성조 조합은 무엇입니까?", options: ["3-1-3", "3-0-3", "3-4-3", "2-1-2"], correctAnswer: "3-1-3", explanation: "제3성, 제1성, 제3성의 조합입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'想一想'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "시도나 가벼운 동작을 나타내는 동사구입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["你", "再", "仔细", "想一想", "。"], correctAnswer: "你再仔细想一想。", explanation: "'주어 + 부사 + 부사 + 동사' 순서입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 18,
    questions: [
      { type: "multipleChoice", question: "'看一看'의 올바른 병음은 무엇입니까?", options: ["kàn yī kàn", "kán yī kán", "kàn yi kàn", "kān yī kān"], correctAnswer: "kàn yī kàn", explanation: "'看'의 중첩 형태인 kàn yī kàn입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'看一看'의 성조 조합은 무엇입니까?", options: ["4-1-4", "4-0-4", "4-4-4", "2-1-2"], correctAnswer: "4-1-4", explanation: "제4성, 제1성, 제4성의 조합입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'看一看'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "대상 표현"], correctAnswer: "동작 표현", explanation: "가볍게 한번 본다는 의미의 동사구입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["你", "去", "那儿", "看一看", "。"], correctAnswer: "你去那儿看一看。", explanation: "연동문 형식으로 '가서 보다'의 순서입니다.", difficulty: "easy" }
    ]
  },
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
  { sentenceIndex: 31, questions: [] }
];

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const sentencePractice = yueliangPracticeData.find(sp => sp.sentenceIndex === sentenceIndex);
  return sentencePractice ? sentencePractice.questions : [];
}


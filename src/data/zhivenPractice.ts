// 指纹词汇训练题海战术数据
import { PracticeQuestion, SentencePractice } from './tianmimiPractice';

export const zhivenPracticeData: SentencePractice[] = [
  {
    sentenceIndex: 1,
    questions: [
      { type: "multipleChoice", question: "'缘分'의 올바른 병음은 무엇입니까?", options: ["yuán fèn", "yuán fēn", "yuǎn fèn", "yuán fěn"], correctAnswer: "yuán fèn", explanation: "缘分의 표준 병음은 yuán fèn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'缘分'의 성조 조합은 무엇입니까?", options: ["2-4", "2-1", "3-4", "2-3"], correctAnswer: "2-4", explanation: "缘(2성)과 分(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'缘分'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "时间 표현"], correctAnswer: "상태 묘사", explanation: "문장에서 인연이 있다는 상태를 설명하는 보어 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们能遇见", "说明", "很有", "缘分。"], correctAnswer: "我们能遇见说明很有缘分。", explanation: "주어부-서술어-목적어 순으로 배열하여 '우리가 만난 것은 인연이다'라는 의미를 만듭니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 2,
    questions: [
      { type: "multipleChoice", question: "'天份'의 올바른 병음은 무엇입니까?", options: ["tiān fèn", "tiān fēn", "tiǎn fèn", "tián fèn"], correctAnswer: "tiān fèn", explanation: "天份의 표준 병음은 tiān fèn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'天份'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "3-4", "2-4"], correctAnswer: "1-4", explanation: "天(1성)과 份(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'天份'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "음악 분야에서 가지고 있는 '재능'이라는 대상을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他在", "音乐方面", "很有", "天份。"], correctAnswer: "他在音乐方面很有天份。", explanation: "장소/분야 범위 뒤에 소유를 나타내는 '很有'와 명사가 옵니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 3,
    questions: [
      { type: "multipleChoice", question: "'坦然'의 올바른 병음은 무엇입니까?", options: ["tǎn rán", "tān rán", "tǎn rǎn", "tàn rán"], correctAnswer: "tǎn rán", explanation: "坦然의 표준 병음은 tǎn rán입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'坦然'의 성조 조합은 무엇입니까?", options: ["3-2", "1-2", "3-3", "4-2"], correctAnswer: "3-2", explanation: "坦(3성)과 然(2성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'坦然'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "수량 표현", "경험 표현"], correctAnswer: "상태 묘사", explanation: "실패를 대하는 태도나 심리 상태를 묘사합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "坦然地", "面对", "失败。"], correctAnswer: "他坦然地面对失败。", explanation: "부사어(상태) + 동사 + 목적어 순으로 배열합니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 4,
    questions: [
      { type: "multipleChoice", question: "'天真'의 올바른 병음은 무엇입니까?", options: ["tiān zhēn", "tián zhēn", "tiān zhèn", "tiǎn zhēn"], correctAnswer: "tiān zhēn", explanation: "天真의 표준 병음은 tiān zhēn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'天真'의 성조 조합은 무엇입니까?", options: ["1-1", "1-4", "2-1", "1-2"], correctAnswer: "1-1", explanation: "天(1성)과 真(1성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'天真'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "아이의 생각이 순수하다는 성질이나 상태를 묘사합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["小孩子的", "想法", "总是", "很天真。"], correctAnswer: "小孩子的想法总是很天真。", explanation: "주어(아이의 생각) + 빈도부사 + 형용사 술어 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 5,
    questions: [
      { type: "multipleChoice", question: "'孤身'의 올바른 병음은 무엇입니까?", options: ["gū shēn", "gǔ shēn", "gù shēn", "gū shén"], correctAnswer: "gū shēn", explanation: "孤身의 표준 병음은 gū shēn입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'孤身'의 성조 조합은 무엇입니까?", options: ["1-1", "1-2", "3-1", "4-1"], correctAnswer: "1-1", explanation: "孤(1성)와 身(1성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'孤身'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "혼자 있는 상태를 설명하는 수식어 역할을 합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "孤身一人", "来到", "这座城市。"], correctAnswer: "他孤身一人来到这座城市。", explanation: "주어 + 상태 + 동사 + 목적어(장소) 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 6,
    questions: [
      { type: "multipleChoice", question: "'诚恳'의 올바른 병음은 무엇입니까?", options: ["chéng kěn", "chēng kěn", "chéng kēn", "chéng kèn"], correctAnswer: "chéng kěn", explanation: "诚恳의 표준 병음은 chéng kěn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'诚恳'의 성조 조합은 무엇입니까?", options: ["2-3", "2-1", "1-3", "2-4"], correctAnswer: "2-3", explanation: "诚(2성)과 恳(3성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'诚恳'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "대상 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "사과하는 태도가 정성스럽고 진실하다는 상태를 묘사합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他的", "道歉态度", "非常", "诚恳。"], correctAnswer: "他的道歉态度非常诚恳。", explanation: "주어(그의 사과 태도) + 정도부사 + 형용사 술어 순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 7,
    questions: [
      { type: "multipleChoice", question: "'承认'의 올바른 병음은 무엇입니까?", options: ["chéng rèn", "chēng rèn", "chéng rèn", "chéng rén"], correctAnswer: "chéng rèn", explanation: "承认의 표준 병음은 chéng rèn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'承认'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "1-4", "3-4"], correctAnswer: "2-4", explanation: "诚(2성)과 认(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'承认'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "대상 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "자신의 실수를 인정하는 행위를 나타내는 동사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "最终", "承认了", "自己的错误。"], correctAnswer: "他最终承认了自己的错误。", explanation: "주어 + 부사 + 동사(완료) + 목적어 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 8,
    questions: [
      { type: "multipleChoice", question: "'失衡'의 올바른 병음은 무엇입니까?", options: ["shī héng", "shì héng", "shī hěng", "shī hēng"], correctAnswer: "shī héng", explanation: "失衡의 표준 병음은 shī héng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'失衡'의 성조 조합은 무엇입니까?", options: ["1-2", "1-1", "4-2", "2-2"], correctAnswer: "1-2", explanation: "失(1성)과 衡(2성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'失衡'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "경험 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "심리적으로 균형을 잃은 상태를 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["压力过大", "会", "导致", "心理失衡。"], correctAnswer: "压力过大会导致心理失衡。", explanation: "원인(압력이 큼) + 결과 유도 동사 + 결과 상태 순입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 9,
    questions: [
      { type: "multipleChoice", question: "'分寸'의 올바른 병음은 무엇입니까?", options: ["fēn cun", "fén cùn", "fěn cùn", "fèn cùn"], correctAnswer: "fēn cun", explanation: "分寸의 '寸'은 보통 경성으로 발음하여 fēn cun입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'分寸'의 성조 조합은 무엇입니까?", options: ["1-0", "1-4", "1-1", "2-4"], correctAnswer: "1-0", explanation: "分(1성)과 寸(경성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'分寸'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "주의해야 할 '정도나 한도'라는 대상을 나타내는 명사입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["说话", "要", "注意", "分寸。"], correctAnswer: "说话要注意分寸。", explanation: "주제(말하기) + 조동사 + 동사 + 목적어 순입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 10,
    questions: [
      { type: "multipleChoice", question: "'依赖'의 올바른 병음은 무엇입니까?", options: ["yī lài", "yí lài", "yì lài", "yī lǎi"], correctAnswer: "yī lài", explanation: "依赖의 표준 병음은 yī lài입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'依赖'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-1", "4-4"], correctAnswer: "1-4", explanation: "依(1성)와 赖(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'依赖'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "수량 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "누군가에게 의지하는 행위를 나타내는 동사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["孩子", "不应该", "过度", "依赖父母。"], correctAnswer: "孩子不应该过度依赖父母。", explanation: "주어 + 부정 조동사 + 부사(정도) + 술어부 순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 11,
    questions: [
      { type: "multipleChoice", question: "'旋转'의 올바른 병음은 무엇입니까?", options: ["xuán zhuǎn", "xuān zhuǎn", "xuán zhuān", "xuàn zhuǎn"], correctAnswer: "xuán zhuǎn", explanation: "旋转의 표준 병음은 xuán zhuǎn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'旋转'의 성조 조합은 무엇입니까?", options: ["2-3", "1-3", "2-4", "2-1"], correctAnswer: "2-3", explanation: "旋(2성)과 转(3성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'旋转'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "时间 표현"], correctAnswer: "동작 표현", explanation: "무대 위에서 회전하는 동작을 나타내는 동사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["她", "在舞台上", "不停地", "旋转。"], correctAnswer: "她在舞台上不停地旋转。", explanation: "주어 + 장소부사어 + 상태부사어 + 동사 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 12,
    questions: [
      { type: "multipleChoice", question: "'变成'의 올바른 병음은 무엇입니까?", options: ["biàn chéng", "biān chéng", "biàn chēng", "biàn chěng"], correctAnswer: "biàn chéng", explanation: "变成의 표준 병음은 biàn chéng입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'变成'의 성조 조합은 무엇입니까?", options: ["4-2", "4-1", "1-2", "4-4"], correctAnswer: "4-2", explanation: "变(4성)과 成(2성)의 조합입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'变成'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "경험 표현"], correctAnswer: "동작 표현", explanation: "다른 상태로 변화하는 결과나 동작을 나타내는 동사입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["由于努力，", "他变成了一个", "优秀的", "学生。"], correctAnswer: "由于努力，他变成了一个优秀的学生。", explanation: "원인 구절 뒤에 주어 + 동사 + 수식어 + 목적어 순으로 배열합니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 13,
    questions: [
      { type: "multipleChoice", question: "'深刻'의 올바른 병음은 무엇입니까?", options: ["shēn kè", "shén kè", "shēn kě", "shēn kė"], correctAnswer: "shēn kè", explanation: "深刻의 표준 병음은 shēn kè입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'深刻'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "2-4", "4-4"], correctAnswer: "1-4", explanation: "深(1성)과 刻(4性)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'指纹'의 올바른 병음은 무엇입니까?", options: ["zhǐ wén", "zhī wén", "zhǐ wèn", "zhí wén"], correctAnswer: "zhǐ wén", explanation: "指纹의 표준 병음은 zhǐ wén입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'指纹'의 성조 조합은 무엇입니까?", options: ["3-2", "1-2", "3-1", "3-4"], correctAnswer: "3-2", explanation: "指(3성)와 纹(2성)의 조합입니다.", difficulty: "medium" }
    ]
  },
  { sentenceIndex: 14, questions: [] },
  {
    sentenceIndex: 15,
    questions: [
      { type: "multipleChoice", question: "'心房'의 올바른 병음은 무엇입니까?", options: ["xīn fáng", "xīn fāng", "xín fáng", "xǐn fáng"], correctAnswer: "xīn fáng", explanation: "心房의 표준 병음은 xīn fáng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'心房'의 성조 조합은 무엇입니까?", options: ["1-2", "1-1", "1-4", "2-2"], correctAnswer: "1-2", explanation: "心(1성)과 房(2성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'心房'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "말에 의해 따뜻해진 마음(심장 내부)이라는 대상을 비유적으로 표현합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这些话", "温暖了", "我的", "心房。"], correctAnswer: "这些话温暖了我的心房。", explanation: "주어 + 동사(완료) + 수식어 + 목적어 순서입니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 16, questions: [] },
  {
    sentenceIndex: 17,
    questions: [
      { type: "multipleChoice", question: "'仔细'의 올바른 병음은 무엇입니까?", options: ["zǐ xì", "zī xì", "zǐ xī", "zì xì"], correctAnswer: "zǐ xì", explanation: "仔细의 표준 병음은 zǐ xì입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'仔细'의 성조 조합은 무엇입니까?", options: ["3-4", "1-4", "3-1", "2-4"], correctAnswer: "3-4", explanation: "仔(3성)와 细(4성)의 조합입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'仔细'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "검사하는 태도가 꼼꼼해야 함을 묘사하는 부사어 역할을 합니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["请", "仔细", "检查", "作业。"], correctAnswer: "请仔细检查作业。", explanation: "청유어 '请' 뒤에 부사어 + 동사 + 목적어 순으로 배열합니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 18,
    questions: [
      { type: "multipleChoice", question: "'青春'의 올바른 병음은 무엇입니까?", options: ["qīng chūn", "qíng chūn", "qīng chún", "qǐng chūn"], correctAnswer: "qīng chūn", explanation: "青春의 표준 병음은 qīng chūn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'青春'의 성조 조합은 무엇입니까?", options: ["1-1", "1-2", "2-1", "4-1"], correctAnswer: "1-1", explanation: "青(1성)과 春(1성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'青春'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "동작 표현", "상태 묘사", "장소 표현"], correctAnswer: "시간 표현", explanation: "젊은 시절이라는 특정 인생의 시기를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们要", "珍惜", "美好的", "青春。"], correctAnswer: "我们要珍惜美好的青春。", explanation: "주어부 + 동사 + 관형어 + 목적어 순으로 배열합니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 19,
    questions: [
      { type: "multipleChoice", question: "'憎恨'의 올바른 병음은 무엇입니까?", options: ["zēng hèn", "zèng hèn", "zēng hén", "zhēng hèn"], correctAnswer: "zēng hèn", explanation: "憎恨의 표준 병음은 zēng hèn입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'奋不顾身'의 올바른 병음은 무엇입니까?", options: ["fèn bù gù shēn", "fén bù gù shēn", "fèn bū gù shēn", "fèn bù gū shēn"], correctAnswer: "fèn bù gù shēn", explanation: "奋不顾身의 표준 병음은 fèn bù gù shēn입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'奋不顾身'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "时间 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "자신을 돌보지 않고 뛰어드는 용맹한 상태를 묘사하는 부사어입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "奋不顾身地", "跳进水里", "救人。"], correctAnswer: "他奋不顾身地跳进水里救人。", explanation: "주어 + 상태 + 동작1 + 동작2(목적)의 연동문 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 20,
    questions: [
      { type: "multipleChoice", question: "'所谓'의 올바른 병음은 무엇입니까?", options: ["suǒ wèi", "shuǒ wèi", "suó wèi", "suǒ wěi"], correctAnswer: "suǒ wèi", explanation: "所谓의 표준 병음은 suǒ wèi입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'所谓'의 성조 조합은 무엇입니까?", options: ["3-4", "2-4", "3-2", "1-4"], correctAnswer: "3-4", explanation: "所(3성)와 谓(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'所谓'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "뒤에 오는 '성공'이라는 개념을 지정하거나 꾸며주는 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这就是", "所谓的", "成功", "吗？"], correctAnswer: "这就是所谓的成功吗？", explanation: "이것은 ~인가요? 구조 안에 '소위 말하는'이 성공을 수식합니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 21,
    questions: [
      { type: "multipleChoice", question: "'追逐'의 올바른 병음은 무엇입니까?", options: ["zhuī zhú", "zhuī zhū", "zhuì zhú", "zuī zhú"], correctAnswer: "zhuī zhú", explanation: "追逐의 표준 병음은 zhuī zhú입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'追逐'의 성조 조합은 무엇입니까?", options: ["1-2", "1-1", "1-4", "4-2"], correctAnswer: "1-2", explanation: "追(1성)와 逐(2성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'灵魂'의 올바른 병음은 무엇입니까?", options: ["líng hún", "líng hūn", "lǐng hún", "líng hùn"], correctAnswer: "líng hún", explanation: "灵魂의 표준 병음은 líng hún입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'灵魂'의 성조 조합은 무엇입니까?", options: ["2-2", "2-1", "1-2", "3-2"], correctAnswer: "2-2", explanation: "灵(2성)과 魂(2성)의 조합입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 22,
    questions: [
      { type: "multipleChoice", question: "'身份'의 올바른 병음은 무엇입니까?", options: ["shēn fèn", "shén fèn", "shēn fēn", "shěn fèn"], correctAnswer: "shēn fèn", explanation: "身份의 표준 병음은 shēn fèn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'身份'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "2-4", "3-4"], correctAnswer: "1-4", explanation: "身(1성)과 份(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'身份'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "제시해야 하는 증명서의 종류인 '신분'을 나타내는 명사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["请", "出示", "您的", "身份证明。"], correctAnswer: "请出示您的身份证明。", explanation: "청유어 + 동사 + 수식어 + 목적어 순으로 배열합니다.", difficulty: "medium" }
    ]
  },
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
  { sentenceIndex: 43, questions: [] },
  { sentenceIndex: 44, questions: [] },
  { sentenceIndex: 45, questions: [] }
];

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const sentencePractice = zhivenPracticeData.find(sp => sp.sentenceIndex === sentenceIndex);
  return sentencePractice ? sentencePractice.questions : [];
}



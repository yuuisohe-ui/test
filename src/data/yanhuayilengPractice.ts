// 烟花易冷词汇训练题海战术数据

import { PracticeQuestion, SentencePractice } from './tianmimiPractice';

export const yanhuayilengPracticeData: SentencePractice[] = [
  {
    sentenceIndex: 1,
    questions: [
      { type: "multipleChoice", question: "'烟花'의 올바른 병음은 무엇입니까?", options: ["yān huā", "yàn huā", "yān huǎ", "yán huā"], correctAnswer: "yān huā", explanation: "烟花의 병음은 yān huā(1성-1성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'烟花'의 성조 조합은 무엇입니까?", options: ["1-1", "4-1", "1-3", "2-1"], correctAnswer: "1-1", explanation: "yān은 1성, huā는 1성으로 1-1 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'烟花'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "동작 표현", "대상 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "문장에서 주어 역할을 하는 대상을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["节日里的", "烟花", "非常", "漂亮。"], correctAnswer: "节日里的烟花非常漂亮。", explanation: "관형어 + 주어 + 부사어 + 술어 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 2,
    questions: [
      { type: "multipleChoice", question: "'繁华'의 올바른 병음은 무엇입니까?", options: ["fán huá", "fán huā", "fǎn huá", "fān huá"], correctAnswer: "fán huá", explanation: "繁华의 병음은 fán huá(2성-2성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'繁华'의 성조 조합은 무엇입니까?", options: ["2-2", "2-1", "1-2", "3-2"], correctAnswer: "2-2", explanation: "fán은 2성, huá는 2성으로 2-2 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'繁华'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "상태 묘사", explanation: "도시가 번화한 상태를 묘사하는 형용사 역할을 합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这是一座", "非常繁华的", "现代化", "城市。"], correctAnswer: "这是一座非常繁华的现代化城市。", explanation: "지시어 + 수량 + 형용사구 + 명사구 순서입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'遁入空门'의 올바른 병음은 무엇입니까?", options: ["dùn rù kōng mén", "dūn rù kōng mén", "dùn rù kòng mén", "dùn rù kōng mèn"], correctAnswer: "dùn rù kōng mén", explanation: "遁入空门의 병음은 dùn rù kōng mén입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'遁入空门'의 성조 조합은 무엇입니까?", options: ["4-4-1-2", "4-4-2-2", "4-3-1-2", "4-4-1-1"], correctAnswer: "4-4-1-2", explanation: "성조는 4성-4성-1성-2성 순서입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'遁入空门'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "수량 표현", "경험 표현"], correctAnswer: "동작 표현", explanation: "세속을 떠나 불교에 입문하는 동작/행위를 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "看破红尘，", "遁入", "空门。"], correctAnswer: "他看破红尘，遁入空门。", explanation: "주어 + 연동문 형식의 문장 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 3,
    questions: [
      { type: "multipleChoice", question: "'辗转'의 올바른 병음은 무엇입니까?", options: ["niǎn zhuǎn", "nián zhuǎn", "niǎn zhuān", "niàn zhuǎn"], correctAnswer: "niǎn zhuǎn", explanation: "辗转의 병음은 niǎn zhuǎn(3성-3성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'辗转'의 성조 조합은 무엇입니까?", options: ["3-3", "2-3", "3-2", "4-3"], correctAnswer: "3-3", explanation: "niǎn은 3성, zhuǎn은 3성으로 3-3 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'辗转'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "대상 표현", "时间 표현"], correctAnswer: "동작 표현", explanation: "뒤척이는 동작을 나타내는 성어의 일부로 쓰였습니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "辗转反侧，", "怎么也", "睡不着。"], correctAnswer: "他辗转反侧，怎么也睡不着。", explanation: "주어 + 동작묘사 + 부사구 + 결과보어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 4,
    questions: [
      { type: "multipleChoice", question: "'默认'의 올바른 병음은 무엇입니까?", options: ["mò rèn", "mō rèn", "mò rén", "mó rèn"], correctAnswer: "mò rèn", explanation: "默认의 병음은 mò rèn(4성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'默认'의 성조 조합은 무엇입니까?", options: ["4-4", "4-2", "2-4", "1-4"], correctAnswer: "4-4", explanation: "mò는 4성, rèn은 4성으로 4-4 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'默认'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "장소 표현", "상태 묘사"], correctAnswer: "동작 표현", explanation: "묵인하거나 인정하는 심리적/외적 동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["面对指责，", "他", "选择了", "默认。"], correctAnswer: "面对指责，他选择了默认。", explanation: "상황 제시 + 주어 + 술어 + 목적어 구조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'生死'의 올바른 병음은 무엇입니까?", options: ["shēng sǐ", "shéng sǐ", "shèng sǐ", "shēng sì"], correctAnswer: "shēng sǐ", explanation: "生死의 병음은 shēng sǐ(1성-3성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'生死'의 성조 조합은 무엇입니까?", options: ["1-3", "1-4", "2-3", "4-3"], correctAnswer: "1-3", explanation: "shēng은 1성, sǐ는 3성으로 1-3 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'生死'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "시련의 내용을 수식하는 대상(명사) 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "经历过", "多次", "生死的考验。"], correctAnswer: "他经历过多次生死的考验。", explanation: "주어 + 술어 + 수량어 + 목적어 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 5,
    questions: [
      { type: "multipleChoice", question: "'年轮'의 올바른 병음은 무엇입니까?", options: ["nián lún", "nián lúnn", "niǎn lún", "nián lùn"], correctAnswer: "nián lún", explanation: "年轮의 병음은 nián lún(2성-2성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'年轮'의 성조 조합은 무엇입니까?", options: ["2-2", "2-1", "3-2", "2-4"], correctAnswer: "2-2", explanation: "nián은 2성, lún은 2성으로 2-2 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'年轮'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "판단의 근거가 되는 대상(명사) 역할을 합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们可以", "根据年轮", "判断", "树木的年龄。"], correctAnswer: "我们可以根据年轮判断树木的年龄。", explanation: "조동사구 + 전치사구 + 술어 + 목적어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 6,
    questions: [
      { type: "multipleChoice", question: "'浮图'의 올바른 병음은 무엇입니까?", options: ["fú tú", "fù tú", "fú tǔ", "fū tú"], correctAnswer: "fú tú", explanation: "浮图의 병음은 fú tú(2성-2성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'浮图'의 성조 조합은 무엇입니까?", options: ["2-2", "2-4", "1-2", "4-2"], correctAnswer: "2-2", explanation: "fú는 2성, tú는 2성으로 2-2 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'浮图'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "상태 묘사", "장소 표현", "동작 표현"], correctAnswer: "대상 표현", explanation: "문장의 주체인 대상(명사) 역할을 합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["古老的浮图", "屹立在", "山顶。"], correctAnswer: "古老的浮图屹立在山顶。", explanation: "수식어+주어 + 술어+장소보어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 7,
    questions: [
      { type: "multipleChoice", question: "'残灯'의 올바른 병음은 무엇입니까?", options: ["cán dēng", "cǎn dēng", "càn dēng", "cán dèng"], correctAnswer: "cán dēng", explanation: "残灯의 병음은 cán dēng(2성-1성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'残灯'의 성조 조합은 무엇입니까?", options: ["2-1", "3-1", "4-1", "2-4"], correctAnswer: "2-1", explanation: "cán은 2성, dēng은 1성으로 2-1 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'残灯'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "상태 묘사", "동작 표현"], correctAnswer: "대상 표현", explanation: "상황을 설명하는 대상(명사) 역할을 합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "伴着一盏残灯", "读到", "深夜。"], correctAnswer: "他伴着一盏残灯读到深夜。", explanation: "주어 + 상황어 + 술어 + 결과/시간보어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 8,
    questions: [
      { type: "multipleChoice", question: "'历史'의 올바른 병음은 무엇입니까?", options: ["lì shǐ", "lǐ shǐ", "lì shì", "lí shǐ"], correctAnswer: "lì shǐ", explanation: "历史의 병음은 lì shǐ(4성-3성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'历史'의 성조 조합은 무엇입니까?", options: ["4-3", "4-4", "2-3", "1-3"], correctAnswer: "4-3", explanation: "lì는 4성, shǐ는 3성으로 4-3 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'历史'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "시간 표현", "동작 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "배움의 원천이 되는 대상(명사) 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们要从", "历史中", "吸取", "教训。"], correctAnswer: "我们要从历史中吸取教训。", explanation: "능원동사+전치사 + 처소 + 술어 + 목적어 구조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'转身'의 올바른 병음은 무엇입니까?", options: ["zhuǎn shēn", "zhuān shēn", "zhuàn shēn", "zhuǎn shèn"], correctAnswer: "zhuǎn shēn", explanation: "转身의 병음은 zhuǎn shēn(3성-1성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'转身'의 성조 조합은 무엇입니까?", options: ["3-1", "3-4", "4-1", "2-1"], correctAnswer: "3-1", explanation: "zhuǎn은 3성, shēn은 1성으로 3-1 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'转身'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "대상 표현"], correctAnswer: "동작 표현", explanation: "몸을 돌리는 동작을 나타내는 동사구입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他向大家挥挥手，", "然后", "转身", "离开了。"], correctAnswer: "他向大家挥挥手，然后转身离开了。", explanation: "연속된 동작을 나타내는 문장 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 9,
    questions: [
      { type: "multipleChoice", question: "'古筝'의 올바른 병음은 무엇입니까?", options: ["gǔ zhēng", "gǔ zhèng", "gū zhēng", "gǔ zēng"], correctAnswer: "gǔ zhēng", explanation: "古筝의 병음은 gǔ zhēng(3성-1성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'古筝'의 성조 조합은 무엇입니까?", options: ["3-1", "3-4", "2-1", "3-3"], correctAnswer: "3-1", explanation: "gǔ는 3성, zhēng은 1성으로 3-1 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'古筝'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "상태 묘사", "동작 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "악기라는 대상(명사)으로 소리를 수식합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["她", "弹奏古筝的声音", "非常", "动听。"], correctAnswer: "她弹奏古筝的声音非常动听。", explanation: "주어(명사구) + 정도부사 + 술어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 10,
    questions: [
      { type: "multipleChoice", question: "'纷纷'의 올바른 병음은 무엇입니까?", options: ["fēn fēn", "fén fēn", "fěn fēn", "fèn fēn"], correctAnswer: "fēn fēn", explanation: "纷纷의 병음은 fēn fēn(1성-1성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'纷纷'의 성조 조합은 무엇입니까?", options: ["1-1", "2-2", "1-2", "4-4"], correctAnswer: "1-1", explanation: "fēn은 1성, fēn은 1성으로 1-1 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'纷纷'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "나뭇잎이 떨어지는 모습을 묘사하는 부사적 역할입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["落叶纷纷", "从树上", "飘落", "下来。"], correctAnswer: "落叶纷纷从树上飘落下来。", explanation: "주어+상태어 + 전치사구 + 술어 + 보어 구조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'草木'의 올바른 병음은 무엇입니까?", options: ["cǎo mù", "cāo mù", "cǎo mùn", "cǎo mǔ"], correctAnswer: "cǎo mù", explanation: "草木의 병음은 cǎo mù(3성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'草木'의 성조 조합은 무엇입니까?", options: ["3-4", "3-2", "2-4", "4-4"], correctAnswer: "3-4", explanation: "cǎo는 3성, mù는 4성으로 3-4 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'草木'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "상태 묘사", "시간 표현", "동작 표현"], correctAnswer: "대상 표현", explanation: "발아하는 주체인 대상(명사) 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["春天来了，", "草木", "都", "发芽了。"], correctAnswer: "春天来了，草木都发芽了。", explanation: "배경 제시 + 주어 + 부사 + 술어 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 11,
    questions: [
      { type: "multipleChoice", question: "'始终'의 올바른 병음은 무엇입니까?", options: ["shǐ zhōng", "shì zhōng", "shǐ zhòng", "shí zhōng"], correctAnswer: "shǐ zhōng", explanation: "始终의 병음은 shǐ zhōng(3성-1성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'始终'의 성조 조합은 무엇입니까?", options: ["3-1", "4-1", "3-4", "2-1"], correctAnswer: "3-1", explanation: "shǐ는 3성, zhōng은 1성으로 3-1 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'始终'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "상태 묘사", "장소 표현", "대상 표현"], correctAnswer: "시간 표현", explanation: "처음부터 끝까지라는 시간적 지속을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "始终坚持", "自己的", "理想。"], correctAnswer: "他始终坚持自己的理想。", explanation: "주어 + 부사+술어 + 관형어 + 목적어 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 12,
    questions: [
      { type: "multipleChoice", question: "'斑驳'의 올바른 병음은 무엇입니까?", options: ["bān bó", "bǎn bó", "bān pō", "bàn bó"], correctAnswer: "bān bó", explanation: "斑驳의 병음은 bān bó(1성-2성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'斑驳'의 성조 조합은 무엇입니까?", options: ["1-2", "1-4", "2-2", "4-2"], correctAnswer: "1-2", explanation: "bān은 1성, bó는 2성으로 1-2 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'斑驳'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "색이나 무늬가 얼룩덜룩한 상태를 묘사합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["墙上的油漆", "已经", "斑驳", "脱落了。"], correctAnswer: "墙上的油漆已经斑驳脱落了。", explanation: "주어 + 부사 + 형용사 + 술어 구조입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'盘踞'의 올바른 병음은 무엇입니까?", options: ["pán jù", "pàn jù", "pán jū", "pān jù"], correctAnswer: "pán jù", explanation: "盘踞의 병음은 pán jù(2성-4성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'盘踞'의 성조 조합은 무엇입니까?", options: ["2-4", "1-4", "2-1", "3-4"], correctAnswer: "2-4", explanation: "pán은 2성, jù는 4성으로 2-4 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'盘踞'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "대상 표현"], correctAnswer: "동작 표현", explanation: "뿌리가 서려 있거나 자리를 차지하는 동작을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["老树根", "盘踞在", "地面上。"], correctAnswer: "老树根盘踞在地面上。", explanation: "주어 + 술어 + 장소보어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 13,
    questions: [
      { type: "multipleChoice", question: "'回荡'의 올바른 병음은 무엇입니까?", options: ["huí dàng", "huǐ dàng", "huí dāng", "huī dàng"], correctAnswer: "huí dàng", explanation: "回荡의 병음은 huí dàng(2성-4성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'回荡'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "1-4", "3-4"], correctAnswer: "2-4", explanation: "huí는 2성, dàng은 4성으로 2-4 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'回荡'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "상태 묘사", "대상 표현"], correctAnswer: "동작 표현", explanation: "소리가 울려 퍼지는 동작/현상을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["悠扬的歌声", "在山谷间", "回荡。"], correctAnswer: "悠扬的歌声在山谷间回荡。", explanation: "주어 + 부사어(장소) + 술어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 14,
    questions: [
      { type: "multipleChoice", question: "'纷纷'의 올바른 병음은 무엇입니까?", options: ["fēn fēn", "fén fēn", "fěn fēn", "fèn fēn"], correctAnswer: "fēn fēn", explanation: "纷纷의 병음은 fēn fēn(1성-1성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'纷纷'의 성조 조합은 무엇입니까?", options: ["1-1", "2-2", "1-2", "4-4"], correctAnswer: "1-1", explanation: "fēn은 1성, fēn은 1성으로 1-1 조합입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 15,
    questions: [
      { type: "multipleChoice", question: "'孤城'의 올바른 병음은 무엇입니까?", options: ["gū chéng", "gǔ chéng", "gù chéng", "gū chèng"], correctAnswer: "gū chéng", explanation: "孤城의 병음은 gū chéng(1성-2성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'孤城'의 성조 조합은 무엇입니까?", options: ["1-2", "1-4", "3-2", "2-2"], correctAnswer: "1-2", explanation: "gū는 1성, chéng은 2성으로 1-2 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'孤城'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "상태 묘사", "동작 표현"], correctAnswer: "대상 표현", explanation: "문장에서 존재하는 대상(명사) 역할을 합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["在漫天的黄沙中，", "只有", "一座孤城。"], correctAnswer: "在漫天的黄沙中，只有一座孤城。", explanation: "장소 상황 제시 + 부사 + 목적어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 16,
    questions: [
      { type: "multipleChoice", question: "'城郊'의 올바른 병음은 무엇입니까?", options: ["chéng jiāo", "chěng jiāo", "chéng jiǎo", "chēng jiāo"], correctAnswer: "chéng jiāo", explanation: "城郊의 병음은 chéng jiāo(2성-1성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'城郊'의 성조 조합은 무엇입니까?", options: ["2-1", "2-3", "1-1", "4-1"], correctAnswer: "2-1", explanation: "chéng은 2성, jiāo는 1성으로 2-1 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'城郊'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "동작 표현", "상태 묘사", "대상 표현"], correctAnswer: "장소 표현", explanation: "동작이 일어나는 장소(전치사 '在'의 목적어)를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他在城郊", "买了一套", "新房子。"], correctAnswer: "他在城郊买了一套新房子。", explanation: "주어+장소 + 술어+수량 + 목적어 구조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'牧笛'의 올바른 병음은 무엇입니까?", options: ["mù dí", "mǔ dí", "mù dǐ", "mú dí"], correctAnswer: "mù dí", explanation: "牧笛의 병음은 mù dí(4성-2성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'牧笛'의 성조 조합은 무엇입니까?", options: ["4-2", "4-3", "3-2", "2-2"], correctAnswer: "4-2", explanation: "mù는 4성, dí는 2성으로 4-2 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'牧笛'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "상태 묘사", "장소 표현", "동작 표현"], correctAnswer: "대상 표현", explanation: "들려오는 소리의 주체인 대상(명사) 역할을 합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["远处", "传来", "悠扬的", "牧笛声。"], correctAnswer: "远处传来悠扬的牧笛声。", explanation: "장소 + 술어 + 관형어 + 주어(존현문) 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 17,
    questions: [
      { type: "multipleChoice", question: "'缘分'의 올바른 병음은 무엇입니까?", options: ["yuán fèn", "yuán fēn", "yuǎn fèn", "yuán fén"], correctAnswer: "yuán fèn", explanation: "缘分의 병음은 yuán fèn(2성-4성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'缘分'의 성조 조합은 무엇입니까?", options: ["2-4", "2-1", "3-4", "2-2"], correctAnswer: "2-4", explanation: "yuán은 2성, fèn은 4성으로 2-4 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'缘分'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "상태 묘사", "동작 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "판단 문장에서 술어 뒤의 보충 성분(명사) 역할을 합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["能在这里", "遇到你，", "真是", "缘分。"], correctAnswer: "能在这里遇到你，真是缘分。", explanation: "조건/상황 + 감탄 부사 + 판단대상 구조입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'落地生根'의 올바른 병음은 무엇입니까?", options: ["luò dì shēng gēn", "luò de shēng gēn", "luó dì shèng gēn", "luò dì shéng gēn"], correctAnswer: "luò dì shēng gēn", explanation: "落地生根의 병음은 luò dì shēng gēn입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'落地生根'의 성조 조합은 무엇입니까?", options: ["4-4-1-1", "4-2-1-1", "4-4-1-4", "4-3-1-1"], correctAnswer: "4-4-1-1", explanation: "성조는 4성-4성-1성-1성 순서입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'落地生根'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "대상 표현", "상태 묘사"], correctAnswer: "동작 표현", explanation: "정착하여 사는 행위나 의지를 나타내는 동사적 성어입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他打算", "在这座城市", "落地生根。"], correctAnswer: "他打算在这座城市落地生根。", explanation: "주어+의도 + 장소 + 술어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 18,
    questions: [
      { type: "multipleChoice", question: "'青春'의 올바른 병음은 무엇입니까?", options: ["qīng chūn", "qǐng chūn", "qīng chún", "qíng chūn"], correctAnswer: "qīng chūn", explanation: "青春의 병음은 qīng chūn(1성-1성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'青春'의 성조 조합은 무엇입니까?", options: ["1-1", "1-2", "2-1", "4-1"], correctAnswer: "1-1", explanation: "qīng은 1성, chūn은 1성으로 1-1 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'青春'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "시간 표현", "동작 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "아껴야 할 목적어인 대상(명사) 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们要", "珍惜青春，", "努力", "学习。"], correctAnswer: "我们要珍惜青春，努力学习。", explanation: "조동사 + 목적어동반술어 + 부사 + 술어 구조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'羡煞'의 올바른 병음은 무엇입니까?", options: ["xiàn shà", "xián shà", "xiàn shā", "xiān shà"], correctAnswer: "xiàn shà", explanation: "羡煞의 병음은 xiàn shà(4성-4성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'羡煞'의 성조 조합은 무엇입니까?", options: ["4-4", "4-1", "2-4", "1-4"], correctAnswer: "4-4", explanation: "xiàn은 4성, shà는 4성으로 4-4 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'羡煞'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "상태 묘사", "장소 표현"], correctAnswer: "동작 표현", explanation: "부러워하는 감정의 정도가 심함을 나타내는 동사적 표현입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他们的幸福生活", "羡煞", "旁人。"], correctAnswer: "他们的幸福生活羡煞旁人。", explanation: "주어 + 술어 + 목적어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 19,
    questions: [
      { type: "multipleChoice", question: "'史册'의 올바른 병음은 무엇입니까?", options: ["shǐ cè", "shǐ chè", "shì cè", "shí cè"], correctAnswer: "shǐ cè", explanation: "史册의 병음은 shǐ cè(3성-4성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'史册'의 성조 조합은 무엇입니까?", options: ["3-4", "3-2", "4-4", "2-4"], correctAnswer: "3-4", explanation: "shǐ는 3성, cè는 4성으로 3-4 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'史册'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "상태 묘사", "동작 표현"], correctAnswer: "대상 표현", explanation: "기록되는 장소이자 대상(명사) 역할을 합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他的英雄事迹", "载入了", "史册。"], correctAnswer: "他的英雄事迹载入了史册。", explanation: "주어 + 술어+완료 + 목적어 구조입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'温柔'의 올바른 병음은 무엇입니까?", options: ["wēn róu", "wèn róu", "wēn rǒu", "wén róu"], correctAnswer: "wēn róu", explanation: "温柔의 병음은 wēn róu(1성-2성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'温柔'의 성조 조합은 무엇입니까?", options: ["1-2", "1-1", "4-2", "2-2"], correctAnswer: "1-2", explanation: "wēn은 1성, róu는 2성으로 1-2 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'温柔'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "목소리의 성질을 묘사하는 형용사 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["她说话的声音", "非常", "温柔。"], correctAnswer: "她说话的声音非常温柔。", explanation: "주어 + 정도부사 + 술어 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 20,
    questions: [
      { type: "multipleChoice", question: "'人事'의 올바른 병음은 무엇입니까?", options: ["rén shì", "rèn shì", "rén shí", "rén shǐ"], correctAnswer: "rén shì", explanation: "人事의 병음은 rén shì(2성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'人事'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "4-4", "1-4"], correctAnswer: "2-4", explanation: "rén은 2성, shì는 4성으로 2-4 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'人事'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "상태 묘사", "동작 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "문장에서 변화의 주체인 대상(명사) 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["人事沧桑，", "许多东西", "都变了。"], correctAnswer: "人事沧桑，许多东西都变了。", explanation: "상황 제시 + 주어 + 부사+술어 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 21,
    questions: [
      { type: "multipleChoice", question: "'认真'의 올바른 병음은 무엇입니까?", options: ["rèn zhēn", "rén zhēn", "rèn zhēng", "rěn zhēn"], correctAnswer: "rèn zhēn", explanation: "认真의 병음은 rèn zhēn(4성-1성)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'认真'의 성조 조합은 무엇입니까?", options: ["4-1", "2-1", "4-4", "1-1"], correctAnswer: "4-1", explanation: "rèn은 4성, zhēn은 1성으로 4-1 조합입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'认真'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "태도를 묘사하는 형용사로 쓰였습니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "做作业", "非常", "认真。"], correctAnswer: "他做作业非常认真。", explanation: "주어 + 목적어+술어 + 정도표현 구조입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 22,
    questions: [
      { type: "multipleChoice", question: "'千年'의 올바른 병음은 무엇입니까?", options: ["qián nián", "qiān nián", "qiǎn nián", "qiān niàn"], correctAnswer: "qiān nián", explanation: "千年의 병음은 qiān nián(1성-2성)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'千年'의 성조 조합은 무엇입니까?", options: ["1-2", "2-2", "1-1", "3-2"], correctAnswer: "1-2", explanation: "qiān은 1성, nián은 2성으로 1-2 조합입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'千年'는 위 문장에서 어떤 역할을 합니까?", options: ["수량 표현", "장소 표현", "동작 표현", "대상 표현"], correctAnswer: "수량 표현", explanation: "시간의 길이를 나타내는 수량 명사구입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这棵古树", "已经", "生长了", "一千年。"], correctAnswer: "这棵古树已经生长了一千年。", explanation: "주어 + 부사 + 술어 + 수량보어 구조입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'情深'의 올바른 병음은 무엇입니까?", options: ["qíng shēn", "qǐng shēn", "qīng shēn", "qíng shèn"], correctAnswer: "qíng shēn", explanation: "情深의 병음은 qíng shēn(2성-1성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'情深'의 성조 조합은 무엇입니까?", options: ["2-1", "3-1", "2-4", "1-1"], correctAnswer: "2-1", explanation: "qíng은 2성, shēn은 1성으로 2-1 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'情深'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "정이 깊은 상태를 나타내는 성어의 일부입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他们", "两兄弟", "情深似海。"], correctAnswer: "他们两兄弟情深似海。", explanation: "주어 + 동격어 + 술어(성어) 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 23,
    questions: [
      { type: "multipleChoice", question: "'青史'의 올바른 병음은 무엇입니까?", options: ["qīng shǐ", "qǐng shǐ", "qíng shǐ", "qīng shì"], correctAnswer: "qīng shǐ", explanation: "青史의 병음은 qīng shǐ(1성-3성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'青史'의 성조 조합은 무엇입니까?", options: ["1-3", "2-3", "1-4", "4-3"], correctAnswer: "1-3", explanation: "qīng은 1성, shǐ는 3성으로 1-3 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'青史'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "동작 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "이름이 남겨지는 역사라는 대상(명사) 역할을 합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["名垂青史", "是", "许多人的", "梦想。"], correctAnswer: "名垂青史是许多人的梦想。", explanation: "주어(구) + 판단동사 + 관형어 + 목적어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 24,
    questions: [
      { type: "multipleChoice", question: "'前世'의 올바른 병음은 무엇입니까?", options: ["qián shì", "qiān shì", "qiàn shì", "qián shǐ"], correctAnswer: "qián shì", explanation: "前世의 병음은 qián shì(2성-4성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'前世'의 성조 조합은 무엇입니까?", options: ["2-4", "1-4", "3-4", "2-2"], correctAnswer: "2-4", explanation: "qián은 2성, shì는 4성으로 2-4 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'前世'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "동작 표현", "장소 표현", "상태 묘사"], correctAnswer: "시간 표현", explanation: "과거의 생이라는 시간적 배경을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这仿佛是", "前世注定的", "缘分。"], correctAnswer: "这仿佛是前世注定的缘分。", explanation: "주어+부사+판단동사 + 관형어 + 목적어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 25,
    questions: [
      { type: "multipleChoice", question: "'红尘'의 올바른 병음은 무엇입니까?", options: ["hóng chén", "hòng chén", "hóng chěn", "hōng chén"], correctAnswer: "hóng chén", explanation: "红尘의 병음은 hóng chén(2성-2성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'红尘'의 성조 조합은 무엇입니까?", options: ["2-2", "2-4", "1-2", "3-2"], correctAnswer: "2-2", explanation: "hóng은 2성, chén은 2성으로 2-2 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'红尘'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "동작 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "세속이라는 공간/대상을 나타내는 명사로 쓰였습니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "厌倦了", "红尘的", "争斗。"], correctAnswer: "他厌倦了红尘的争斗。", explanation: "주어 + 술어+완료 + 관형어 + 목적어 구조입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'浪迹'의 올바른 병음은 무엇입니까?", options: ["làng jì", "láng jì", "lāng jì", "làng jí"], correctAnswer: "làng jì", explanation: "浪迹의 병음은 làng jì(4성-4성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'浪迹'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-2", "1-4"], correctAnswer: "4-4", explanation: "làng은 4성, jì는 4성으로 4-4 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'浪迹'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "정처 없이 떠도는 행위를 나타내는 동사입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "年轻时", "曾", "浪迹天涯。"], correctAnswer: "他年轻时曾浪迹天涯。", explanation: "주어 + 시간부사어 + 술어 + 목적어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 41,
    questions: [
      { type: "multipleChoice", question: "'永恒'의 올바른 병음은 무엇입니까?", options: ["yǒng héng", "yōng héng", "yǒng hěng", "yóng héng"], correctAnswer: "yǒng héng", explanation: "永恒의 병음은 yǒng héng(3성-2성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'永恒'의 성조 조합은 무엇입니까?", options: ["3-2", "3-1", "2-2", "4-2"], correctAnswer: "3-2", explanation: "yǒng은 3성, héng은 2성으로 3-2 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'永恒'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "대상 표현", "시간 표현"], correctAnswer: "상태 묘사", explanation: "변하지 않는 성질을 나타내는 형용사로 쓰였습니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["世界上", "没有什么是", "永恒不变的。"], correctAnswer: "世界上没有什么是永恒不变的。", explanation: "장소 상황 + 부정 술어 + 주어(명사구) 구조입니다.", difficulty: "hard" }
    ]
  }
];

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const sentencePractice = yanhuayilengPracticeData.find(sp => sp.sentenceIndex === sentenceIndex);
  return sentencePractice ? sentencePractice.questions : [];
}


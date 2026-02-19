// 夜曲词汇训练题海战术数据
import { PracticeQuestion, SentencePractice } from './tianmimiPractice';

export const yequPracticeData: SentencePractice[] = [
  {
    sentenceIndex: 1,
    questions: [
      { type: "multipleChoice", question: "'夜曲'의 올바른 병음은 무엇입니까?", options: ["yè qǔ", "yè qū", "yé qǔ", "yè qù"], correctAnswer: "yè qǔ", explanation: "'夜曲(야상곡)'의 정확한 병음은 yè qǔ입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'夜曲'의 성조 조합은 무엇입니까?", options: ["4-3", "4-1", "2-3", "4-4"], correctAnswer: "4-3", explanation: "yè는 4성, qǔ는 3성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'夜曲'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "동작 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "문장에서 연주하는 구체적인 대상(목적어)으로 쓰였습니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他在", "晚会上", "演奏了", "一首夜曲。"], correctAnswer: "他在晚会上演奏了一首夜曲。", explanation: "주어+부사어(장소)+동사+목적어 어순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 2,
    questions: [
      { type: "multipleChoice", question: "'吸引'의 올바른 병음은 무엇입니까?", options: ["xī yǐn", "xǐ yǐn", "xī yín", "xì yǐn"], correctAnswer: "xī yǐn", explanation: "'吸引(끌어당기다)'의 정확한 병음은 xī yǐn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'吸引'의 성조 조합은 무엇입니까?", options: ["1-3", "1-1", "2-3", "1-2"], correctAnswer: "1-3", explanation: "xī는 1성, yǐn은 3성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'吸引'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "대상 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "주어가 목적어에게 가하는 동작이나 작용을 나타내는 술어로 쓰였습니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这个广告", "吸引了", "很多", "顾客。"], correctAnswer: "这个广告吸引了很多顾客。", explanation: "주어+동사+수량+목적어 구조의 문장입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'嗜血'의 올바른 병음은 무엇입니까?", options: ["shì xuè", "shì xiě", "shí xuè", "sì xuè"], correctAnswer: "shì xuè", explanation: "'嗜血(피에 굶주린)'의 서면어 병음은 shì xuè입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'嗜血'의 성조 조합은 무엇입니까?", options: ["4-4", "4-3", "2-4", "4-2"], correctAnswer: "4-4", explanation: "shì는 4성, xuè는 4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'嗜血'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "장소 표현", "시간 표현", "동작 표현"], correctAnswer: "상태 묘사", explanation: "해당 생물의 특징적인 성질이나 상태를 묘사합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这种生物", "以", "嗜血", "著称。"], correctAnswer: "这种生物以嗜血著称。", explanation: "'A는 B로 유명하다(A以B著称)'의 구문입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 3,
    questions: [
      { type: "multipleChoice", question: "'面无表情'의 올바른 병음은 무엇입니까?", options: ["miàn wú biǎo qíng", "miàn wǔ biǎo qíng", "miǎn wú biǎo qíng", "miàn wú biāo qíng"], correctAnswer: "miàn wú biǎo qíng", explanation: "'面无表情(무표정하다)'의 성어 병음은 miàn wú biǎo qíng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'面无表情'의 성조 조합은 무엇입니까?", options: ["4-2-3-2", "4-2-3-1", "4-1-3-2", "3-2-3-2"], correctAnswer: "4-2-3-2", explanation: "각 글자의 성조는 4성, 2성, 3성, 2성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'面无表情'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "동작이 일어날 때의 주어의 상태를 묘사하는 부사어 역할을 합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "面无表情地", "听完了", "这个消息。"], correctAnswer: "他面无表情地听完了这个消息。", explanation: "주어+부사어+동사(보어)+목적어 순서입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'孤独'의 올바른 병음은 무엇입니까?", options: ["gū dú", "gǔ dú", "kū dú", "gū dǔ"], correctAnswer: "gū dú", explanation: "'孤独(고독하다)'의 정확한 병음은 gū dú입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'孤独'의 성조 조합은 무엇입니까?", options: ["1-2", "1-1", "2-2", "1-3"], correctAnswer: "1-2", explanation: "gū는 1성, dú는 2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'孤独'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "장소 표현", "경험 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "느끼는 감정의 상태를 설명하는 형용사 술어로 쓰였습니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["一个人的", "生活", "有时会", "感到孤独。"], correctAnswer: "一个人的生活有时会感到孤独。", explanation: "관형어+주어+부사어+동사술어 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 4,
    questions: [
      { type: "multipleChoice", question: "'失去'의 올바른 병음은 무엇입니까?", options: ["shī qù", "shì qù", "sī qù", "shī qū"], correctAnswer: "shī qù", explanation: "'失去(잃다)'의 정확한 병음은 shī qù입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'失去'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "1-2", "4-4"], correctAnswer: "1-4", explanation: "shī는 1성, qù는 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'失去'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "동작이나 행위를 나타내는 동사 술어 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们", "不能", "失去", "这次机会。"], correctAnswer: "我们不能失去这次机会。", explanation: "주어+조동사+동사+목적어의 기본 어순입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'分明'의 올바른 병음은 무엇입니까?", options: ["fèn míng", "fēn míng", "fèn mǐng", "fēn mǐng"], correctAnswer: "fèn míng", explanation: "'分明(분명하다)'의 정확한 병음은 fèn míng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'分明'의 성조 조합은 무엇입니까?", options: ["4-2", "1-2", "4-1", "2-2"], correctAnswer: "4-2", explanation: "fèn은 4성, míng은 2성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'分明'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "사물의 성격이 명확함을 나타내는 형용사 술어입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这件事情的", "是非曲直", "非常", "分明。"], correctAnswer: "这件事情的是非曲直非常分明。", explanation: "주어부+정도부사+형용사술어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 5,
    questions: [
      { type: "multipleChoice", question: "'关心'의 올바른 병음은 무엇입니까?", options: ["guān xīn", "guàn xīn", "guān xǐng", "guǎn xīn"], correctAnswer: "guān xīn", explanation: "'关心(관심을 갖다)'의 정확한 병음은 guān xīn입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'关心'의 성조 조합은 무엇입니까?", options: ["1-1", "1-2", "4-1", "3-1"], correctAnswer: "1-1", explanation: "guān과 xīn 모두 1성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'关心'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "상태 묘사", "수량 표현"], correctAnswer: "동작 표현", explanation: "누군가를 아끼고 마음을 쓰는 동작/행위를 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["妈妈总是", "非常关心", "我的", "健康。"], correctAnswer: "妈妈总是非常关心我的健康。", explanation: "주어+부사+동사+관형어+목적어 어순입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 6,
    questions: [
      { type: "multipleChoice", question: "'象征'의 올바른 병음은 무엇입니까?", options: ["xiàng zhēng", "xiāng zhēng", "xiàng zhèng", "xiǎng zhēng"], correctAnswer: "xiàng zhēng", explanation: "'象征(상징하다)'의 정확한 병음은 xiàng zhēng입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'象征'의 성조 조합은 무엇입니까?", options: ["4-1", "1-1", "4-4", "2-1"], correctAnswer: "4-1", explanation: "xiàng은 4성, zhēng은 1성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'象征'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "무엇을 상징한다는 의미를 지닌 술어로 사용되었습니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["鸽子", "通常", "象征着", "和平。"], correctAnswer: "鸽子通常象征着和平。", explanation: "주어+부사+동사(태)+목적어 어순입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'提醒'의 올바른 병음은 무엇입니까?", options: ["tí xǐng", "tī xǐng", "tí xǐn", "tǐ xǐng"], correctAnswer: "tí xǐng", explanation: "'提醒(일깨우다)'의 정확한 병음은 tí xǐng입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'提醒'의 성조 조합은 무엇입니까?", options: ["2-3", "1-3", "2-2", "3-3"], correctAnswer: "2-3", explanation: "tí는 2성, xǐng은 3성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'提醒'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "대상 표현"], correctAnswer: "동작 표현", explanation: "누군가에게 알려주는 구체적인 행위를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["请提醒我", "明天早上", "有", "会议。"], correctAnswer: "请提醒我明天早上有会议。", explanation: "부탁형 동사구+시간부사어+목적어절 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 7,
    questions: [
      { type: "multipleChoice", question: "'广场'의 올바른 병음은 무엇입니까?", options: ["guǎng chǎng", "guāng chǎng", "guǎng cháng", "kuàng chǎng"], correctAnswer: "guǎng chǎng", explanation: "'广场(광장)'의 정확한 병음은 guǎng chǎng입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'广场'의 성조 조합은 무엇입니까?", options: ["3-3", "3-1", "1-3", "2-3"], correctAnswer: "3-3", explanation: "guǎng은 3성, chǎng은 3성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'广场'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "동작 표현", "상태 묘사", "시간 표현"], correctAnswer: "장소 표현", explanation: "동작이 일어나는 공간적 배경을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["人们", "在广场上", "跳舞。"], correctAnswer: "人们在广场上跳舞。", explanation: "주어+장소보어+동사 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 8,
    questions: [
      { type: "multipleChoice", question: "'形容'의 올바른 병음은 무엇입니까?", options: ["xíng róng", "xīng róng", "xíng lóng", "xǐng róng"], correctAnswer: "xíng róng", explanation: "'形容(묘사하다)'의 정확한 병음은 xíng róng입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'形容'의 성조 조합은 무엇입니까?", options: ["2-2", "2-1", "1-2", "3-2"], correctAnswer: "2-2", explanation: "xíng은 2성, róng도 2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'形容'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "말이나 글로 나타내는 행위를 표현합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我无法", "用言语来", "形容", "那种美。"], correctAnswer: "我无法用言语来形容那种美。", explanation: "능원부사+수단방법+동사+목적어 어순입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'押韵'의 올바른 병음은 무엇입니까?", options: ["yā yùn", "yǎ yùn", "yā yūn", "yà yùn"], correctAnswer: "yā yùn", explanation: "'押韵(압운하다)'의 정확한 병음은 yā yùn입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'押韵'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "4-4", "2-4"], correctAnswer: "1-4", explanation: "yā는 1성, yùn은 4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'押韵'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "경험 표현"], correctAnswer: "상태 묘사", explanation: "시가 어떤 운을 따르고 있는 상태임을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这首诗", "写得", "非常", "押韵。"], correctAnswer: "这首诗写得非常押韵。", explanation: "주어+동사(보어)+정도부사+형용사술어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 9,
    questions: [
      { type: "multipleChoice", question: "'遮蔽'의 올바른 병음은 무엇입니까?", options: ["zhē bì", "zhè bì", "zhē bī", "shē bì"], correctAnswer: "zhē bì", explanation: "'遮蔽(가리다)'의 정확한 병음은 zhē bì입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'遮蔽'의 성조 조합은 무엇입니까?", options: ["1-4", "1-2", "4-4", "1-1"], correctAnswer: "1-4", explanation: "zhē는 1성, bì는 4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'遮蔽'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "무언가를 가리는 물리적 행위를 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["乌云", "遮蔽了", "月光。"], correctAnswer: "乌云遮蔽了月光。", explanation: "주어+동사+목적어의 간결한 구조입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'虔诚'의 올바른 병음은 무엇입니까?", options: ["qián chéng", "qiān chéng", "qián chěng", "jiǎn chéng"], correctAnswer: "qián chéng", explanation: "'虔诚(경건하다)'의 정확한 병음은 qián chéng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'虔诚'의 성조 조합은 무엇입니까?", options: ["2-2", "1-2", "2-1", "3-2"], correctAnswer: "2-2", explanation: "qián은 2성, chéng도 2성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'虔诚'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "대상 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "기도하는 태도나 마음가짐의 상태를 설명합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他在教堂里", "虔诚地", "祈祷。"], correctAnswer: "他在教堂里虔诚地祈祷。", explanation: "장소부사어+태도부사어+동사술어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 10,
    questions: [
      { type: "multipleChoice", question: "'葬礼'의 올바른 병음은 무엇입니까?", options: ["zàng lǐ", "zāng lǐ", "zàng lì", "zhàng lǐ"], correctAnswer: "zàng lǐ", explanation: "'葬礼(장례식)'의 정확한 병음은 zàng lǐ입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'葬礼'의 성조 조합은 무엇입니까?", options: ["4-3", "4-1", "1-3", "2-3"], correctAnswer: "4-3", explanation: "zàng은 4성, lǐ는 3성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'葬礼'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "참가한 활동의 대상을 지칭하는 목적어입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["很多人", "参加了", "他的葬礼。"], correctAnswer: "很多人参加了他的葬礼。", explanation: "주어+동사+관형어+목적어 순서입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'回音'의 올바른 병음은 무엇입니까?", options: ["huí yīn", "huǐ yīn", "huí yǐn", "huí yìn"], correctAnswer: "huí yīn", explanation: "'回音(메아리)'의 정확한 병음은 huí yīn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'回音'의 성조 조합은 무엇입니까?", options: ["2-1", "1-1", "2-3", "2-4"], correctAnswer: "2-1", explanation: "huí는 2성, yīn은 1성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'回音'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "전해져 온 소리(메아리)라는 대상을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["山谷里", "传来了", "阵阵回音。"], correctAnswer: "山谷里传来了阵阵回音。", explanation: "장소+동사+수량+목적어(존현문) 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 11,
    questions: [
      { type: "multipleChoice", question: "'环境'의 올바른 병음은 무엇입니까?", options: ["huán jìng", "huǎn jìng", "huán jìn", "huán jīng"], correctAnswer: "huán jìng", explanation: "'环境(환경)'의 정확한 병음은 huán jìng입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'环境'의 성조 조합은 무엇입니까?", options: ["2-4", "2-3", "1-4", "2-1"], correctAnswer: "2-4", explanation: "huán은 2성, jìng은 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'环境'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "보호해야 할 대상을 나타내는 목적어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们要", "保护", "自然环境。"], correctAnswer: "我们要保护自然环境。", explanation: "주어+조동사+동사+목적어 순서입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'凋零'의 올바른 병음은 무엇입니까?", options: ["diāo líng", "diǎo líng", "diāo lǐng", "tiāo líng"], correctAnswer: "diāo líng", explanation: "'凋零(시들다)'의 정확한 병음은 diāo líng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'凋零'의 성조 조합은 무엇입니까?", options: ["1-2", "1-1", "2-2", "4-2"], correctAnswer: "1-2", explanation: "diāo는 1성, líng은 2성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'凋零'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "꽃이 시드는 과정/행위를 나타내는 술어입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["秋天到了，", "花朵", "开始凋零。"], correctAnswer: "秋天到了，花朵开始凋零。", explanation: "시간절 이후 주어+동사 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 12,
    questions: [
      { type: "multipleChoice", question: "'诡异'의 올바른 병음은 무엇입니까?", options: ["guǐ yì", "guǐ yí", "guī yì", "kuǐ yì"], correctAnswer: "guǐ yì", explanation: "'诡异(기괴하다)'의 정확한 병음은 guǐ yì입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'诡异'의 성조 조합은 무엇입니까?", options: ["3-4", "3-2", "1-4", "2-4"], correctAnswer: "3-4", explanation: "guǐ는 3성, yì는 4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'诡异'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "분위기의 기묘한 상태를 설명하는 술어입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这个地方的", "气氛", "有些", "诡异。"], correctAnswer: "这个地方的气氛有些诡异。", explanation: "관형어+주어+부사+형용사술어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 13,
    questions: [
      { type: "multipleChoice", question: "'大衣'의 올바른 병음은 무엇입니까?", options: ["dà yī", "dà yǐ", "dā yī", "tài yī"], correctAnswer: "dà yī", explanation: "'大衣(코트)'의 정확한 병음은 dà yī입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'大衣'의 성조 조합은 무엇입니까?", options: ["4-1", "4-2", "4-4", "1-1"], correctAnswer: "4-1", explanation: "dà는 4성, yī는 1성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'大衣'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "입는 물건을 지칭하는 목적어입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["冬天出门", "要穿上", "大衣。"], correctAnswer: "冬天出门要穿上大衣。", explanation: "시간조건+필수행위+목적어 순서입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 14,
    questions: [
      { type: "multipleChoice", question: "'温暖'의 올바른 병음은 무엇입니까?", options: ["wēn nuǎn", "wèn nuǎn", "wēn nuán", "wēn nǎn"], correctAnswer: "wēn nuǎn", explanation: "'温暖(따뜻하다)'의 정확한 병음은 wēn nuǎn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'温暖'의 성조 조합은 무엇입니까?", options: ["1-3", "1-1", "2-3", "4-3"], correctAnswer: "1-3", explanation: "wēn은 1성, nuǎn은 3성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'温暖'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "햇빛의 성질이나 느낌을 설명하는 술어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["阳光", "照在身上", "很", "温暖。"], correctAnswer: "阳光照在身上很温暖。", explanation: "주어+처소구+정도부사+형용사술어 순서입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'回忆'의 올바른 병음은 무엇입니까?", options: ["huí yì", "huǐ yì", "huí yí", "huí yìng"], correctAnswer: "huí yì", explanation: "'回忆(추억)'의 정확한 병음은 huí yì입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'回忆'의 성조 조합은 무엇입니까?", options: ["2-4", "2-3", "1-4", "3-4"], correctAnswer: "2-4", explanation: "huí는 2성, yì는 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'回忆'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "문장의 주체가 되는 명사(추억)로 쓰였습니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["童年的", "回忆", "总是", "美好的。"], correctAnswer: "童年的回忆总是美好的。", explanation: "관형어+주어+부사+술어 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 15,
    questions: [
      { type: "multipleChoice", question: "'生命'의 올바른 병음은 무엇입니까?", options: ["shēng mìng", "shěng mìng", "shēng míng", "shēn mìng"], correctAnswer: "shēng mìng", explanation: "'生命(생명)'의 정확한 병음은 shēng mìng입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'生命'의 성조 조합은 무엇입니까?", options: ["1-4", "1-2", "4-4", "2-4"], correctAnswer: "1-4", explanation: "shēng은 1성, mìng은 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'生命'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "상태 묘사", "时间 표현"], correctAnswer: "대상 표현", explanation: "사랑하고 소중히 여겨야 할 대상을 지칭합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们要", "热爱", "生命。"], correctAnswer: "我们要热爱生命。", explanation: "주어+조동사+동사+목적어 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 16,
    questions: [
      { type: "multipleChoice", question: "'弥漫'의 올바른 병음은 무엇입니까?", options: ["mǐ màn", "mí màn", "mǐ mǎn", "nǐ màn"], correctAnswer: "mǐ màn", explanation: "'弥漫(가득 차다)'의 정확한 병음은 mǐ màn입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'弥漫'의 성조 조합은 무엇입니까?", options: ["3-4", "2-4", "3-1", "3-2"], correctAnswer: "3-4", explanation: "mǐ는 3성, màn은 4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'弥漫'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "꽃향기가 퍼져 나가는 동적 상태를 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["空气中", "弥漫着", "花香。"], correctAnswer: "空气中弥漫着花香。", explanation: "처소주어+동사(태)+목적어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 17,
    questions: [
      { type: "multipleChoice", question: "'空旷'의 올바른 병음은 무엇입니까?", options: ["kōng kuàng", "kòng kuàng", "kōng kuāng", "gōng kuàng"], correctAnswer: "kōng kuàng", explanation: "'空旷(텅 비고 넓다)'의 정확한 병음은 kōng kuàng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'空旷'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "4-4", "1-3"], correctAnswer: "1-4", explanation: "kōng은 1성, kuàng은 4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'空旷'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "대상 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "넓은 들판의 공간적 상태를 묘사하는 수식어입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["空旷的", "田野上", "一个人", "也没有。"], correctAnswer: "空旷的田野上一个人也没有。", explanation: "수식어+장소+강조주어+부정 술어 구조입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'墓地'의 올바른 병음은 무엇입니까?", options: ["mù dì", "mǔ dì", "mù de", "mù tì"], correctAnswer: "mù dì", explanation: "'墓地(묘지)'의 정확한 병음은 mù dì입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'墓地'의 성조 조합은 무엇입니까?", options: ["4-4", "4-3", "2-4", "3-4"], correctAnswer: "4-4", explanation: "mù와 dì 모두 4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'墓地'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "동작 표현", "상태 묘사", "경험 표현"], correctAnswer: "장소 표현", explanation: "특정한 공간적 대상을 나타내는 명사 술어입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这是一片", "安宁的", "墓地。"], correctAnswer: "这是一片安宁的墓地。", explanation: "판단동사+수량+관형어+목적어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 18,
    questions: [
      { type: "multipleChoice", question: "'演奏'의 올바른 병음은 무엇입니까?", options: ["yàn zòu", "yǎn zòu", "yán zòu", "yǎn zhòu"], correctAnswer: "yàn zòu", explanation: "사용자가 제공한 병음 yàn zòu에 기반합니다. (표준음: yǎn zòu)", difficulty: "medium" },
      { type: "multipleChoice", question: "'演奏'의 성조 조합은 무엇입니까?", options: ["4-4", "3-4", "2-4", "4-1"], correctAnswer: "4-4", explanation: "yàn은 4성, zòu는 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'演奏'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "악기를 연주하는 구체적인 행위를 나타내는 술어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["她", "正在", "演奏钢琴。"], correctAnswer: "她正在演奏钢琴。", explanation: "주어+진행부사+동사+목적어 순서입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'纪念'의 올바른 병음은 무엇입니까?", options: ["jì niàn", "jī niàn", "jì nián", "jǐ niàn"], correctAnswer: "jì niàn", explanation: "'纪念(기념하다)'의 정확한 병음은 jì niàn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'纪念'의 성조 조합은 무엇입니까?", options: ["4-4", "4-2", "1-4", "4-1"], correctAnswer: "4-4", explanation: "jì와 niàn 모두 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'纪念'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "행위의 목적이 되는 동작(기념함)을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这个公园", "是为了", "纪念他", "而建的。"], correctAnswer: "这个公园是为了纪念他而建的。", explanation: "'为了...而...' 구문을 사용하여 목적을 나타냅니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 19,
    questions: [
      { type: "multipleChoice", question: "'心碎'의 올바른 병음은 무엇입니까?", options: ["xīn suì", "xǐn suì", "xīn shuì", "xìn suì"], correctAnswer: "xīn suì", explanation: "'心碎(마음이 찢어지다)'의 정확한 병음은 xīn suì입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'心碎'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "2-4", "1-3"], correctAnswer: "1-4", explanation: "xīn은 1성, suì는 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'心碎'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "느끼는 감정의 아픈 상태를 묘사하는 술어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["听到这个消息后，", "她", "感到心碎。"], correctAnswer: "听到这个消息后，她感到心碎。", explanation: "시간절+주어+동사구 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 20,
    questions: [
      { type: "multipleChoice", question: "'键盘'의 올바른 병음은 무엇입니까?", options: ["jiàn pán", "jiān pán", "jiàn bàn", "jiǎn pán"], correctAnswer: "jiàn pán", explanation: "'键盘(키보드)'의 정확한 병음은 jiàn pán입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'键盘'의 성조 조합은 무엇입니까?", options: ["4-2", "4-1", "1-2", "3-2"], correctAnswer: "4-2", explanation: "jiàn은 4성, pán은 2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'键盘'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "동작 표현", "상태 묘사", "시간 표현"], correctAnswer: "장소 표현", explanation: "동작이 이루어지는 도구적 장소를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他在", "键盘上", "快速地", "打字。"], correctAnswer: "他在键盘上快速地打字。", explanation: "주어+처소어+태도부사어+동사 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 21,
    questions: [
      { type: "multipleChoice", question: "'埋葬'의 올바른 병음은 무엇입니까?", options: ["mái zàng", "mǎi zàng", "mái zāng", "mài zàng"], correctAnswer: "mái zàng", explanation: "'埋葬(매장하다)'의 정확한 병음은 mái zàng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'埋葬'의 성조 조합은 무엇입니까?", options: ["2-4", "2-1", "3-4", "1-4"], correctAnswer: "2-4", explanation: "mái는 2성, zàng은 4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'埋葬'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "비밀을 감추거나 묻는 행위를 추상적으로 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这些秘密", "被永远", "埋葬了。"], correctAnswer: "这些秘密被永远埋葬了。", explanation: "주어+피동문(부사)+동사(태) 구조입니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 22, questions: [] },
  {
    sentenceIndex: 23,
    questions: [
      { type: "multipleChoice", question: "'隐姓埋名'의 올바른 병음은 무엇입니까?", options: ["yǐn xìng mái mí", "yǐn xìng mǎi mí", "yìn xìng mái mí", "yǐn xīng mái mí"], correctAnswer: "yǐn xìng mái mí", explanation: "'隐姓埋名(이름을 숨기다)'의 성어 병음은 yǐn xìng mái mí입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'隐姓埋名'의 성조 조합은 무엇입니까?", options: ["3-4-2-2", "3-1-2-2", "3-4-3-2", "4-4-2-2"], correctAnswer: "3-4-2-2", explanation: "yǐn(3), xìng(4), mái(2), mí(2) 성조 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'隐姓埋名'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "이름을 숨기고 사는 복합적인 행위를 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他决定", "隐姓埋名，", "远走他乡。"], correctAnswer: "他决定隐姓埋名，远走他乡。", explanation: "주어+심리동사+병렬된 목적 행위들 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 24,
    questions: [
      { type: "multipleChoice", question: "'感应'의 올바른 병음은 무엇입니까?", options: ["gǎn yìng", "gān yìng", "gǎn yǐng", "gǎn yīng"], correctAnswer: "gǎn yìng", explanation: "'感应(감응)'의 정확한 병음은 gǎn yìng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'感应'의 성조 조합은 무엇입니까?", options: ["3-4", "1-4", "3-1", "2-4"], correctAnswer: "3-4", explanation: "gǎn은 3성, yìng은 4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'感应'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "특별한 종류의 느낌이나 반응이라는 명사로 쓰였습니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["双胞胎之间", "往往有一种", "特别的感应。"], correctAnswer: "双胞胎之间往往有一种特别的感应。", explanation: "범위부사어+빈도+동사+수량+목적어 순서입니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 25, questions: [] },
  { sentenceIndex: 26, questions: [] },
  {
    sentenceIndex: 27,
    questions: [
      { type: "multipleChoice", question: "'丝毫'의 올바른 병음은 무엇입니까?", options: ["sī háo", "shī háo", "sī hǎo", "sì háo"], correctAnswer: "sī háo", explanation: "'丝毫(털끝만큼)'의 정확한 병음은 sī háo입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'丝毫'의 성조 조합은 무엇입니까?", options: ["1-2", "1-1", "1-3", "4-2"], correctAnswer: "1-2", explanation: "sī는 1성, háo는 2성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'丝毫'는 위 문장에서 어떤 역할을 합니까?", options: ["수량 표현", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "수량 표현", explanation: "정도가 매우 작음을 나타내는 양적인 강조 부사어입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他对这件事", "丝毫", "不在意。"], correctAnswer: "他对这件事丝毫不在意。", explanation: "대상어+정도부사어+부정 술어 구조입니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 28, questions: [] },
  {
    sentenceIndex: 29,
    questions: [
      { type: "multipleChoice", question: "'笑容'의 올바른 병음은 무엇입니까?", options: ["xiào róng", "xiǎo róng", "xiào lóng", "xiāo róng"], correctAnswer: "xiào róng", explanation: "'笑容(웃음)'의 정확한 병음은 xiào róng입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'笑容'의 성조 조합은 무엇입니까?", options: ["4-2", "1-2", "4-1", "3-2"], correctAnswer: "4-2", explanation: "xiào는 4성, róng은 2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'笑容'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "웃는 얼굴 모습이라는 주체(명사)로 쓰였습니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["她的", "笑容", "非常", "灿烂。"], correctAnswer: "她的笑容非常灿烂。", explanation: "관형어+주어+정도부사+형용사술어 순서입니다.", difficulty: "medium" }
    ]
  },
  { sentenceIndex: 30, questions: [] },
  {
    sentenceIndex: 31,
    questions: [
      { type: "multipleChoice", question: "'枯井'의 올바른 병음은 무엇입니까?", options: ["kū jǐng", "kǔ jǐng", "gū jǐng", "kū jīng"], correctAnswer: "kū jǐng", explanation: "'枯井(마른 우물)'의 정확한 병음은 kū jǐng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'枯井'의 성조 조합은 무엇입니까?", options: ["1-3", "1-1", "4-3", "2-3"], correctAnswer: "1-3", explanation: "kū는 1성, jǐng은 3성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'枯井'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "존재하는 구체적인 사물을 지칭하는 목적어입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["村子口", "有一口", "废弃的枯井。"], correctAnswer: "村子口有一口废弃的枯井。", explanation: "장소+존재동사+수량+관형어+목적어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 32,
    questions: [
      { type: "multipleChoice", question: "'后悔莫及'의 올바른 병음은 무엇입니까?", options: ["hòu huǐ mò jí", "hòu huǐ méi jí", "hǒu huǐ mò jí", "hòu huǐ mò jǐ"], correctAnswer: "hòu huǐ mò jí", explanation: "'后悔莫及(후회해도 소용없다)'의 병음은 hòu huǐ mò jí입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'后悔莫及'의 성조 조합은 무엇입니까?", options: ["4-3-4-2", "4-3-2-2", "1-3-4-2", "4-4-4-2"], correctAnswer: "4-3-4-2", explanation: "각 글자의 성조는 4성, 3성, 4성, 2성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'后悔莫及'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "상태 묘사", explanation: "더 이상 돌이킬 수 없는 후회의 상태를 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["如果不", "早点出发，", "恐怕会", "后悔莫及。"], correctAnswer: "如果不早点出发，恐怕会后悔莫及。", explanation: "가정절+추측 부사어+술어 구조입니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 33, questions: [] },
  {
    sentenceIndex: 34,
    questions: [
      { type: "multipleChoice", question: "'声音'의 올바른 병음은 무엇입니까?", options: ["shēng yīn", "shěng yīn", "shēng yǐn", "shēn yīn"], correctAnswer: "shēng yīn", explanation: "'声音(소리)'의 정확한 병음은 shēng yīn입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'声音'의 성조 조합은 무엇입니까?", options: ["1-1", "1-3", "2-1", "1-4"], correctAnswer: "1-1", explanation: "shēng과 yīn 모두 1성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'声音'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "들리는 대상을 나타내는 목적어입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我听到了", "外面", "有声音。"], correctAnswer: "我听到了外面有声音。", explanation: "동사+장소어+존재문 형태의 목적절 구조입니다.", difficulty: "easy" }
    ]
  },
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
  { sentenceIndex: 45, questions: [] },
  { sentenceIndex: 46, questions: [] },
  { sentenceIndex: 47, questions: [] }
];

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const sentencePractice = yequPracticeData.find(sp => sp.sentenceIndex === sentenceIndex);
  return sentencePractice ? sentencePractice.questions : [];
}


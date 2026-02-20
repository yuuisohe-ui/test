// 雨爱词汇训练题海战术数据
import { PracticeQuestion, SentencePractice } from './tianmimiPractice';

export const yuaiPracticeData: SentencePractice[] = [
  {
    sentenceIndex: 1,
    questions: [
      { type: "multipleChoice", question: "'天气'의 올바른 병음은 무엇입니까?", options: ["tiān qì", "tián qì", "tiǎn qì", "tiān qi"], correctAnswer: "tiān qì", explanation: "天气의 성조는 1성-4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'天气'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "2-4", "1-0"], correctAnswer: "1-4", explanation: "天(1성)과 气(4성)의 조합입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'天气'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "대상 표현", "동작 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "문장의 주어로서 상태 묘사의 대상이 됩니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["今天的天气", "很好", "。"], correctAnswer: "今天的天气很好。", explanation: "주어(今天的天气) + 술어(很好) 순서입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 2,
    questions: [
      { type: "multipleChoice", question: "'表情'의 올바른 병음은 무엇입니까?", options: ["biǎo qíng", "biào qíng", "biǎo qīn", "biāo qíng"], correctAnswer: "biǎo qíng", explanation: "表情의 성조는 3성-2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'表情'의 성조 조합은 무엇입니까?", options: ["3-2", "3-1", "2-2", "4-2"], correctAnswer: "3-2", explanation: "表(3성)와 情(2성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'表情'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "장소 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "얼굴에 나타난 상태를 나타내는 대상(주어)입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他脸上的", "表情", "很丰富", "。"], correctAnswer: "他脸上的表情很丰富。", explanation: "관형어(他脸上的) + 주어(表情) + 술어(很丰富) 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 3,
    questions: [
      { type: "multipleChoice", question: "'哭泣'의 올바른 병음은 무엇입니까?", options: ["kū qì", "kǔ qì", "kū qi", "kù qì"], correctAnswer: "kū qì", explanation: "哭泣의 성조는 1성-4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'哭泣'의 성조 조합은 무엇입니까?", options: ["1-4", "1-2", "2-4", "1-3"], correctAnswer: "1-4", explanation: "哭(1성)와 泣(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'哭泣'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "장소 표현", "동작 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "아이가 하고 있는 구체적인 동작(울음)을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["那个孩子", "在伤心地", "哭泣", "。"], correctAnswer: "那个孩子在伤心地哭泣。", explanation: "주어 + 부사어(在伤心地) + 동사(哭泣) 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 4,
    questions: [
      { type: "multipleChoice", question: "'看不清'의 올바른 병음은 무엇입니까?", options: ["kàn bù qīng", "kàn bu qīng", "kán bù qīng", "kàn bù qǐng"], correctAnswer: "kàn bù qīng", explanation: "가능보어 부정형의 정확한 발음은 kàn bù qīng입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'看不清'의 성조 조합은 무엇입니까?", options: ["4-4-1", "4-0-1", "4-2-1", "4-4-2"], correctAnswer: "4-4-1", explanation: "看(4성), 不(4성), 清(1성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'看不清'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "경험 표현"], correctAnswer: "상태 묘사", explanation: "시각적 능력이 도달하지 못하는 상태를 묘사합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["雾太大，", "我", "看不清", "前面的路", "。"], correctAnswer: "雾太大，我看不清前面的路。", explanation: "원인 절 뒤에 주어 + 동사구(술어+목적어)가 옵니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 5,
    questions: [
      { type: "multipleChoice", question: "'离开'의 올바른 병음은 무엇입니까?", options: ["lí kāi", "lǐ kāi", "lì kāi", "lí kái"], correctAnswer: "lí kāi", explanation: "离开의 성조는 2성-1성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'离开'의 성조 조합은 무엇입니까?", options: ["2-1", "2-2", "1-1", "3-1"], correctAnswer: "2-1", explanation: "离(2성)와 开(1성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'离开'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "동작 표현", "상태 묘사", "수량 표현"], correctAnswer: "동작 표현", explanation: "장소를 떠나는 구체적인 동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "不想", "离开", "家乡", "。"], correctAnswer: "他不想离开家乡。", explanation: "주어 + 조동사(不想) + 동사 + 목적어 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 6,
    questions: [
      { type: "multipleChoice", question: "'剧情'의 올바른 병음은 무엇입니까?", options: ["jù qíng", "jū qíng", "jù qǐn", "jù qing"], correctAnswer: "jù qíng", explanation: "剧情의 성조는 4성-2성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'剧情'의 성조 조합은 무엇입니까?", options: ["4-2", "4-1", "1-2", "3-2"], correctAnswer: "4-2", explanation: "剧(4성)와 情(2성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'剧情'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "드라마의 줄거리를 나타내는 주어(대상)입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这部电视剧的", "剧情", "很精彩", "。"], correctAnswer: "这部电视剧的剧情很精彩。", explanation: "한정어 + 주어 + 형용사 술어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 7,
    questions: [
      { type: "multipleChoice", question: "'泪'의 올바른 병음은 무엇입니까?", options: ["lèi", "léi", "lěi", "lē"], correctAnswer: "lèi", explanation: "泪의 성조는 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'泪'의 성조 조합은 무엇입니까?", options: ["4", "3", "2", "1"], correctAnswer: "4", explanation: "泪는 단음절 4성 단어입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'泪'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "대상 표현", "동작 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "눈물이라는 구체적인 대상을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["她的眼角", "流下了", "泪水", "。"], correctAnswer: "她的眼角流下了泪水。", explanation: "주어(장소) + 동사(결과) + 목적어 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 8,
    questions: [
      { type: "multipleChoice", question: "'放弃'의 올바른 병음은 무엇입니까?", options: ["fàng qì", "fáng qì", "fàng qi", "fāng qì"], correctAnswer: "fàng qì", explanation: "放弃의 성조는 4성-4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'放弃'의 성조 조합은 무엇입니까?", options: ["4-4", "4-1", "2-4", "1-4"], correctAnswer: "4-4", explanation: "放(4성)와 弃(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'放弃'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "시간 표현", "동작 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "어떤 일을 그만두는 행위를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["无论遇到什么困难", "都", "不要放弃", "。"], correctAnswer: "无论遇到什么困难都不要放弃。", explanation: "양보절(无论...) + 부사(都) + 부정 명령 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 9,
    questions: [
      { type: "multipleChoice", question: "'清晰'의 올바른 병음은 무엇입니까?", options: ["qīng xī", "qíng xī", "qǐng xī", "qīng xì"], correctAnswer: "qīng xī", explanation: "清晰의 성조는 1성-1성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'清晰'의 성조 조합은 무엇입니까?", options: ["1-1", "1-2", "2-1", "4-1"], correctAnswer: "1-1", explanation: "清(1성)과 晰(1성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'清晰'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "동작 표현", "상태 묘사", "수량 표현"], correctAnswer: "상태 묘사", explanation: "사고방식(思路)의 명확한 상태를 설명합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他的思路", "非常", "清晰", "。"], correctAnswer: "他的思路非常清晰。", explanation: "주어 + 정도부사(非常) + 형용사 술어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 10,
    questions: [
      { type: "multipleChoice", question: "'呼吸'의 올바른 병음은 무엇입니까?", options: ["hū xī", "hú xī", "hǔ xī", "hū xí"], correctAnswer: "hū xī", explanation: "呼吸의 성조는 1성-1성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'呼吸'의 성조 조합은 무엇입니까?", options: ["1-1", "1-4", "2-1", "3-1"], correctAnswer: "1-1", explanation: "呼(1성)와 吸(1성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'呼吸'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "동작 표현", "경험 표현"], correctAnswer: "동작 표현", explanation: "숨을 쉬는 신체적 동작을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["清新的空气", "让人", "呼吸顺畅", "。"], correctAnswer: "清新的空气让人呼吸顺畅。", explanation: "주어 + 겸어 동사(让) + 대상 + 술어부 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 11,
    questions: [
      { type: "multipleChoice", question: "'希望'의 올바른 병음은 무엇입니까?", options: ["xī wàng", "xí wàng", "xī wāng", "xì wàng"], correctAnswer: "xī wàng", explanation: "希望의 성조는 1성-4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'希望'의 성조 조합은 무엇입니까?", options: ["1-4", "1-0", "2-4", "4-4"], correctAnswer: "1-4", explanation: "希(1성)와 望(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'希望'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "바라거나 소망하는 심리적 동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我", "希望", "你能参加", "我的生日会", "。"], correctAnswer: "我希望你能参加我的生日会。", explanation: "주어 + 동사(希望) + 목적어(절) 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 12,
    questions: [
      { type: "multipleChoice", question: "'透明'의 올바른 병음은 무엇입니까?", options: ["tòu míng", "tōu míng", "tóu míng", "tòu mín"], correctAnswer: "tòu míng", explanation: "透明의 성조는 4성-2성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'透明'의 성조 조합은 무엇입니까?", options: ["4-2", "4-1", "1-2", "2-2"], correctAnswer: "4-2", explanation: "透(4성)와 明(2성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'透明'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "상태 묘사", "장소 표현"], correctAnswer: "상태 묘사", explanation: "포장의 성질이나 상태가 투명함을 묘사합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这种包装", "是", "透明的", "。"], correctAnswer: "这种包装是透明的。", explanation: "주어 + 是 + 형용사+的 형태의 술어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 13,
    questions: [
      { type: "multipleChoice", question: "'勇气'의 올바른 병음은 무엇입니까?", options: ["yǒng qì", "yóng qì", "yǒng qi", "yōng qì"], correctAnswer: "yǒng qì", explanation: "勇气의 성조는 3성-4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'勇气'의 성조 조합은 무엇입니까?", options: ["3-4", "3-0", "2-4", "3-1"], correctAnswer: "3-4", explanation: "勇(3성)과 气(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'勇气'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "문장에서 필요한 추상적인 목적물(용기)을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["面对困难", "需要", "巨大的勇气", "。"], correctAnswer: "面对困难需要巨大的勇气。", explanation: "동사구(주어역할) + 동사 + 목적어 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 14,
    questions: [
      { type: "multipleChoice", question: "'累积'의 올바른 병음은 무엇입니까?", options: ["lěi jī", "léi jī", "lèi jī", "lěi jí"], correctAnswer: "lěi jī", explanation: "累积의 성조는 3성-1성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'累积'의 성조 조합은 무엇입니까?", options: ["3-1", "3-2", "2-1", "4-1"], correctAnswer: "3-1", explanation: "累(3성)와 积(1성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'累积'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "대상 표현", "동작 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "경험이 쌓이는 추상적인 동작을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["成功的经验", "需要", "长期累积", "。"], correctAnswer: "成功的经验需要长期累积。", explanation: "주어 + 동사 + 부사어와 동사 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 15,
    questions: [
      { type: "multipleChoice", question: "'记忆'의 올바른 병음은 무엇입니까?", options: ["jì yì", "jī yì", "jì yi", "jí yì"], correctAnswer: "jì yì", explanation: "记忆의 성조는 4성-4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'记忆'의 성조 조합은 무엇입니까?", options: ["4-4", "4-0", "1-4", "2-4"], correctAnswer: "4-4", explanation: "记(4성)와 忆(4성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'记忆'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "장소 표현", "대상 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "기억이라는 추상적인 대상을 주어로 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["童年的记忆", "总是", "美好的", "。"], correctAnswer: "童年的记忆总是美好的。", explanation: "주어 + 부사(总是) + 형용사구(술어) 순서입니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 16, questions: [] },
  {
    sentenceIndex: 17,
    questions: [
      { type: "multipleChoice", question: "'延续'의 올바른 병음은 무엇입니까?", options: ["yán xù", "yàn xù", "yán xú", "yán xu"], correctAnswer: "yán xù", explanation: "延续의 성조는 2성-4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'延续'의 성조 조합은 무엇입니까?", options: ["2-4", "2-3", "1-4", "3-4"], correctAnswer: "2-4", explanation: "延(2성)과 续(4성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'延续'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "시간 표현", "동작 표현", "상태 묘사"], correctAnswer: "동작 표현", explanation: "전통이 계속 이어지는 동작/현상을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这种传统", "一直", "延续至今", "。"], correctAnswer: "这种传统一直延续至今。", explanation: "주어 + 부사(一直) + 동사구 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 18,
    questions: [
      { type: "multipleChoice", question: "'相信'의 올바른 병음은 무엇입니까?", options: ["xiāng xìn", "xiáng xìn", "xiāng xin", "xiǎng xìn"], correctAnswer: "xiāng xìn", explanation: "相信의 성조는 1성-4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'相信'의 성조 조합은 무엇입니까?", options: ["1-4", "1-0", "2-4", "1-1"], correctAnswer: "1-4", explanation: "相(1성)과 信(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'相信'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "상태 묘사", "동작 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "믿음을 갖는 심리적인 동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我相信", "一切都会", "好起来的", "。"], correctAnswer: "我相信一切都会好起来的。", explanation: "주어+동사(我相信) + 목적절 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 19,
    questions: [
      { type: "multipleChoice", question: "'彩虹'의 올바른 병음은 무엇입니까?", options: ["cǎi hóng", "cāi hóng", "cài hóng", "cǎi hòng"], correctAnswer: "cǎi hóng", explanation: "彩虹의 성조는 3성-2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'彩虹'의 성조 조합은 무엇입니까?", options: ["3-2", "3-3", "2-2", "4-2"], correctAnswer: "3-2", explanation: "彩(3성)와 虹(2성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'彩虹'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "대상 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "하늘에 나타난 구체적인 대상을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["雨后，", "天边", "挂起了", "一道彩虹", "。"], correctAnswer: "雨后，天边挂起了一道彩虹。", explanation: "시간 + 장소 + 동사 + 수량+목적어 순서입니다.", difficulty: "medium" }
    ]
  },
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
  {
    sentenceIndex: 31,
    questions: [
      { type: "multipleChoice", question: "'美丽'의 올바른 병음은 무엇입니까?", options: ["měi lì", "méi lì", "měi li", "mēi lì"], correctAnswer: "měi lì", explanation: "美丽의 성조는 3성-4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'美丽'의 성조 조합은 무엇입니까?", options: ["3-4", "3-0", "2-4", "1-4"], correctAnswer: "3-4", explanation: "美(3성)와 丽(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'美丽'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "시간 표현", "상태 묘사", "장소 표현"], correctAnswer: "상태 묘사", explanation: "풍경의 아름다운 상태를 설명하는 형용사 술어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这里的风景", "很", "美丽", "。"], correctAnswer: "这里的风景很美丽。", explanation: "주어 + 정도부사(很) + 형용사 술어 순서입니다.", difficulty: "medium" }
    ]
  }
];

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const sentencePractice = yuaiPracticeData.find(sp => sp.sentenceIndex === sentenceIndex);
  return sentencePractice ? sentencePractice.questions : [];
}



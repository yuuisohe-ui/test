// 恰似你的温柔词汇训练题海战术数据

import { PracticeQuestion, SentencePractice } from './tianmimiPractice';

export const qiasiniPracticeData: SentencePractice[] = [
  {
    sentenceIndex: 1,
    questions: [
      { type: "multipleChoice", question: "'恰似'의 올바른 병음은 무엇입니까?", options: ["qià sì", "qiā sì", "qià shì", "qiā shì"], correctAnswer: "qià sì", explanation: "'恰似'의 병음은 'qià sì'입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'恰似'의 성조 조합은 무엇입니까?", options: ["4-4", "1-4", "4-1", "1-1"], correctAnswer: "4-4", explanation: "'恰(qià)'는 4성, '似(sì)'는 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'恰似'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "'恰似'는 '마치 ~와 같다'는 뜻으로 뒤의 내용을 비유하며 상태를 묘사합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["她的眼泪", "恰似", "断了线的", "珍珠。"], correctAnswer: "她的眼泪恰似断了线的珍珠。", explanation: "'주어 + 恰似 + 수식어 + 목적어'의 어순으로 구성됩니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 2,
    questions: [
      { type: "multipleChoice", question: "'温柔'의 올바른 병음은 무엇입니까?", options: ["wēn róu", "wén róu", "wēn rǒu", "wén rǒu"], correctAnswer: "wēn róu", explanation: "'温柔'의 병음은 'wēn róu'입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'温柔'의 성조 조합은 무엇입니까?", options: ["1-2", "2-2", "1-3", "2-1"], correctAnswer: "1-2", explanation: "'温(wēn)'은 1성, '柔(róu)'는 2성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'温柔'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "'温柔'는 어조가 부드럽고 온유한 상태임을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他说话的", "语气", "很温柔。"], correctAnswer: "他说话的语气很温柔。", explanation: "'주어(수식어+명사) + 很 + 형용사' 구조의 문장입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 3,
    questions: [
      { type: "multipleChoice", question: "'破碎'의 올바른 병음은 무엇입니까?", options: ["pò suì", "pō suì", "pò shuì", "pō shuì"], correctAnswer: "pò suì", explanation: "'破碎'의 병음은 'pò suì'입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'破碎'의 성조 조합은 무엇입니까?", options: ["4-4", "1-4", "4-1", "2-4"], correctAnswer: "4-4", explanation: "'破(pò)'는 4성, '碎(suì)'는 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'破碎'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "'破碎'는 화병이 깨진 상태를 수식하는 관형어 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这个破碎的", "花瓶", "已经无法", "修复了。"], correctAnswer: "这个破碎的花瓶已经无法修复了。", explanation: "'지시사+형용사+명사 + 부사 + 술어'의 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 4,
    questions: [
      { type: "multipleChoice", question: "'难以'의 올바른 병음은 무엇입니까?", options: ["nán yǐ", "nán yī", "nán yí", "nàn yǐ"], correctAnswer: "nán yǐ", explanation: "'难以'의 병음은 'nán yǐ'입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'难以'의 성조 조합은 무엇입니까?", options: ["2-3", "2-2", "3-3", "1-3"], correctAnswer: "2-3", explanation: "'难(nán)'은 2성, '以(yǐ)'는 3성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'难以'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "대상 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "'难以'는 '~하기 어렵다'는 뜻으로 결정의 상태를 설명합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这个决定", "让我感到", "难以抉择。"], correctAnswer: "这个决定让我感到难以抉择。", explanation: "'주어 + 사역동사 + 목적어 + 보어' 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 5,
    questions: [
      { type: "multipleChoice", question: "'开口'의 올바른 병음은 무엇입니까?", options: ["kāi kǒu", "kǎi kǒu", "kāi kòu", "kái kǒu"], correctAnswer: "kāi kǒu", explanation: "'开口'의 병음은 'kāi kǒu'입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'开口'의 성조 조합은 무엇입니까?", options: ["1-3", "1-1", "3-3", "1-4"], correctAnswer: "1-3", explanation: "'开(kāi)'는 1성, '口(kǒu)'는 3성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'开口'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "'开口'는 '입을 열다/말을 시작하다'라는 구체적인 동작을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他犹豫了很久", "才开口", "说话。"], correctAnswer: "他犹豫了很久才开口说话。", explanation: "'주어 + 동사구 + 才 + 동사구'의 어순입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 6,
    questions: [
      { type: "multipleChoice", question: "'容易'의 올바른 병음은 무엇입니까?", options: ["róng yì", "rōng yì", "róng yī", "róng yí"], correctAnswer: "róng yì", explanation: "'容易'의 병음은 'róng yì'입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'容易'의 성조 조합은 무엇입니까?", options: ["2-4", "2-1", "1-4", "3-4"], correctAnswer: "2-4", explanation: "'容(róng)'은 2성, '易(yì)'는 4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'容易'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "'容易'는 수학 문제의 난이도(상태)를 설명하는 형용사 술어입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这道", "数学题", "很容易。"], correctAnswer: "这道数学题很容易。", explanation: "'양사 + 명사 + 很 + 형용사' 구조입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 7,
    questions: [
      { type: "multipleChoice", question: "'哭泣'의 올바른 병음은 무엇입니까?", options: ["kū qì", "kǔ qì", "kū qī", "kǔ qī"], correctAnswer: "kū qì", explanation: "'哭泣'의 병음은 'kū qì'입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'哭泣'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "3-4", "4-4"], correctAnswer: "1-4", explanation: "'哭(kū)'는 1성, '泣(qì)'는 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'哭泣'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "'哭泣'는 '흐느끼며 울다'라는 동작을 나타내는 동사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["她躲在房间里", "默默", "哭泣。"], correctAnswer: "她躲在房间里默默哭泣。", explanation: "'장소보어 + 부사 + 동사'의 어순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 8,
    questions: [
      { type: "multipleChoice", question: "'淡淡地'의 올바른 병음은 무엇입니까?", options: ["dàn dàn de", "dān dān de", "dàn dān de", "dàn dàn dé"], correctAnswer: "dàn dàn de", explanation: "'淡淡地'의 병음은 'dàn dàn de'입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'淡淡地'의 성조 조합은 무엇입니까?", options: ["4-4-0", "1-1-0", "4-4-2", "2-2-0"], correctAnswer: "4-4-0", explanation: "'淡淡'은 4-4성, '地'는 경성(0/5)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'淡淡地'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "상태 묘사", explanation: "'淡淡地'는 웃는 방식이나 태도를 묘사하는 부사어 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["她只是", "淡淡地笑了笑，", "没有说话。"], correctAnswer: "她只是淡淡地笑了笑，没有说话。", explanation: "'부사 + 부사어 + 동사' 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 9,
    questions: [
      { type: "multipleChoice", question: "'如今'의 올바른 병음은 무엇입니까?", options: ["rú jīn", "rù jīn", "rú jǐn", "rǔ jīn"], correctAnswer: "rú jīn", explanation: "'如今'의 병음은 'rú jīn'입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'如今'의 성조 조합은 무엇입니까?", options: ["2-1", "1-1", "2-2", "4-1"], correctAnswer: "2-1", explanation: "'如(rú)'는 2성, '今(jīn)'은 1성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'如今'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "장소 표현", "동작 표현", "상태 묘사"], correctAnswer: "시간 표현", explanation: "'如今'는 '지금/오늘날'을 의미하는 시간사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["如今", "这里的变化", "非常大。"], correctAnswer: "如今这里的变化非常大。", explanation: "'시간사 + 주어 + 정도부사 + 형용사' 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 10,
    questions: [
      { type: "multipleChoice", question: "'年复一年'의 올바른 병음은 무엇입니까?", options: ["nián fù yī nián", "nián fú yī nián", "niàn fù yī nián", "nián fù yī niàn"], correctAnswer: "nián fù yī nián", explanation: "'年复一年'의 병음은 'nián fù yī nián'입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'年复一年'의 성조 조합은 무엇입니까?", options: ["2-4-1-2", "2-2-1-2", "1-4-1-2", "2-4-1-1"], correctAnswer: "2-4-1-2", explanation: "'年(2)复(4)一(1)年(2)'의 성조입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'年复一年'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "시간 표현", explanation: "'年复一年'는 '해마다'라는 뜻으로 시간이 반복됨을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "年复一年地", "坚持在", "这里工作。"], correctAnswer: "他年复一年地坚持在这里工作。", explanation: "'주어 + 시간부사어 + 동사 + 장소' 순서입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 11,
    questions: [
      { type: "multipleChoice", question: "'怀念'의 올바른 병음은 무엇입니까?", options: ["huái niàn", "huāi niàn", "huái nián", "huài niàn"], correctAnswer: "huái niàn", explanation: "'怀念'의 병음은 'huái niàn'입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'怀念'의 성조 조합은 무엇입니까?", options: ["2-4", "1-4", "2-2", "3-4"], correctAnswer: "2-4", explanation: "'怀(huái)'는 2성, '念(niàn)'은 4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'怀念'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "'怀念'는 과거를 그리워하는 심리적 동작을 나타내는 동사입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我很怀念", "在老家", "生活的", "日子。"], correctAnswer: "我很怀念在老家生活的日子。", explanation: "'주어 + 심리동사 + (장소+동사+적) + 목적어' 구조입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 12,
    questions: [
      { type: "multipleChoice", question: "'从前'의 올바른 병음은 무엇입니까?", options: ["cóng qián", "còng qián", "cóng qiān", "cōng qián"], correctAnswer: "cóng qián", explanation: "'从前'의 병음은 'cóng qián'입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'从前'의 성조 조합은 무엇입니까?", options: ["2-2", "2-1", "1-2", "4-2"], correctAnswer: "2-2", explanation: "'从(cóng)'은 2성, '前(qián)'은 2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'从前'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "장소 표현", "상태 묘사", "대상 표현"], correctAnswer: "시간 표현", explanation: "'从前'은 과거의 시점을 나타내는 시간사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["从前", "这里", "有一片", "茂密的森林。"], correctAnswer: "从前这里有一片茂密的森林。", explanation: "'시간사 + 장소 + 존현사(有) + 목적어' 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 13,
    questions: [
      { type: "multipleChoice", question: "'但愿'의 올바른 병음은 무엇입니까?", options: ["dàn yuàn", "dān yuàn", "dàn yuán", "dān yuán"], correctAnswer: "dàn yuàn", explanation: "'但愿'의 병음은 'dàn yuàn'입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'但愿'의 성조 조합은 무엇입니까?", options: ["4-4", "1-4", "4-1", "1-1"], correctAnswer: "4-4", explanation: "'但(dàn)'은 4성, '愿(yuàn)'은 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'但愿'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "'But wish'은 소망하는 심리적 태도나 상태를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["但愿", "明天", "是个", "大晴天。"], correctAnswer: "但愿明天是个大晴天。", explanation: "'소망 부사 + 주어 + 술어 + 목적어'의 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 14,
    questions: [
      { type: "multipleChoice", question: "'浪花'의 올바른 병음은 무엇입니까?", options: ["làng huā", "láng huā", "làng huá", "lāng huā"], correctAnswer: "làng huā", explanation: "'浪花'의 병음은 'làng huā'입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'浪花'의 성조 조합은 무엇입니까?", options: ["4-1", "2-1", "4-2", "1-1"], correctAnswer: "4-1", explanation: "'浪(làng)'은 4성, '花(huā)'는 1성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'浪花'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "'浪花'는 문장에서 동작의 주체인 사물을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["海边的", "浪花", "拍打着", "礁石。"], correctAnswer: "海边的浪花拍打着礁石。", explanation: "'관형어 + 주어 + 동사 + 목적어' 구조입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 15,
    questions: [
      { type: "multipleChoice", question: "'容易'의 올바른 병음은 무엇입니까?", options: ["róng yì", "rōng yì", "róng yī", "róng yí"], correctAnswer: "róng yì", explanation: "'容易'의 병음은 'róng yì'입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'容易'의 성조 조합은 무엇입니까?", options: ["2-4", "2-1", "1-4", "3-4"], correctAnswer: "2-4", explanation: "'容(2)易(4)' 성조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'容易'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "문제의 난이도 상태를 설명하는 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这道", "数学题", "很容易。"], correctAnswer: "这道数学题很容易。", explanation: "형용사 술어문의 전형적인 어순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 16,
    questions: [
      { type: "multipleChoice", question: "'哭泣'의 올바른 병음은 무엇입니까?", options: ["kū qì", "kǔ qì", "kū qī", "kǔ qī"], correctAnswer: "kū qì", explanation: "'哭泣'의 병음은 'kū qì'입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'哭泣'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "3-4", "4-4"], correctAnswer: "1-4", explanation: "'哭(1)泣(4)' 성조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'哭泣'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "우는 행위(동작)를 나타내는 동사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["海边的", "浪花", "拍打着", "礁石。"], correctAnswer: "海边的浪花拍打着礁石。", explanation: "'장소관형어 + 주어 + 동사 + 목적어' 어순입니다.", difficulty: "medium" }
    ]
  }
];

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const sentencePractice = qiasiniPracticeData.find(sp => sp.sentenceIndex === sentenceIndex);
  return sentencePractice ? sentencePractice.questions : [];
}



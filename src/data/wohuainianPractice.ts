// 我怀念的词汇训练题海战术数据
import { PracticeQuestion, SentencePractice } from './tianmimiPractice';

export const wohuainianPracticeData: SentencePractice[] = [
  {
    sentenceIndex: 1,
    questions: [
      { type: "multipleChoice", question: "'怀念'의 올바른 병음은 무엇입니까?", options: ["huái niàn", "huài niàn", "huāi nián", "huái nián"], correctAnswer: "huái niàn", explanation: "怀念의 병음은 huái niàn(2성-4성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'怀念'의 성조 조합은 무엇입니까?", options: ["2-4", "4-4", "2-2", "1-4"], correctAnswer: "2-4", explanation: "怀(huái)는 2성, 念(niàn)은 4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'怀念'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "수량 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "문장에서 '그리워하다'라는 심리적 동작을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我", "非常怀念", "学生时代的", "时光。"], correctAnswer: "我非常怀念学生时代的时光。", explanation: "주어 + 부사 + 술어 + 목적어 순으로 배열합니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 2,
    questions: [
      { type: "multipleChoice", question: "'简讯'의 올바른 병음은 무엇입니까?", options: ["jiǎn xùn", "jiān xùn", "jiǎn xūn", "jián xùn"], correctAnswer: "jiǎn xùn", explanation: "简讯의 병음은 jiǎn xùn(3성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'简讯'의 성조 조합은 무엇입니까?", options: ["3-4", "3-1", "2-4", "4-4"], correctAnswer: "3-4", explanation: "简(jiǎn)은 3성, 讯(xùn)은 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'简讯'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "상태 묘사", "장소 표현"], correctAnswer: "대상 표현", explanation: "동사 '发'의 목적어(문자 메시지)로 쓰였습니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我刚刚", "给他", "发了一条", "简讯。"], correctAnswer: "我刚刚给他发了一条简讯。", explanation: "시간부사 + 대상 + 동작 + 수량목적어 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 3,
    questions: [
      { type: "multipleChoice", question: "'解释'의 올바른 병음은 무엇입니까?", options: ["jiě shì", "jié shì", "jiě shí", "jiè shì"], correctAnswer: "jiě shì", explanation: "解释의 병음은 jiě shì(3성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'解释'의 성조 조합은 무엇입니까?", options: ["3-4", "3-2", "2-4", "4-4"], correctAnswer: "3-4", explanation: "解(jiě)는 3성, 释(shì)는 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'沉默'의 올바른 병음은 무엇입니까?", options: ["chén mò", "chěn mò", "chén mù", "chéng mò"], correctAnswer: "chén mò", explanation: "沉默의 병음은 chén mò(2성-4성)입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["面对质问，", "他选择了", "沉默。"], correctAnswer: "面对质问，他选择了沉默。", explanation: "상황 제시 후 주어+동사+목적어 순으로 배열합니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 4,
    questions: [
      { type: "multipleChoice", question: "'敷衍'의 올바른 병음은 무엇입니까?", options: ["fū yǎn", "fù yǎn", "fū yán", "fú yǎn"], correctAnswer: "fū yǎn", explanation: "敷衍의 병음은 fū yǎn(1성-3성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'敷衍'의 성조 조합은 무엇입니까?", options: ["1-3", "1-2", "2-3", "4-3"], correctAnswer: "1-3", explanation: "敷(fū)는 1성, 衍(yǎn)은 3성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'敷衍'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "대상 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "건성으로 일을 대하는 동작/태도를 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他总是", "敷衍了事，", "不认真", "对待工作。"], correctAnswer: "他总是敷衍了事，不认真对待工作。", explanation: "부사어 + 술어구 + 부정부사 + 술어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 5,
    questions: [
      { type: "multipleChoice", question: "'挽回'의 올바른 병음은 무엇입니까?", options: ["wǎn huí", "wán huí", "wàn huí", "wǎn huǐ"], correctAnswer: "wǎn huí", explanation: "挽回의 병음은 wǎn huí(3성-2성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'挽回'의 성조 조합은 무엇입니까?", options: ["3-2", "3-3", "2-2", "4-2"], correctAnswer: "3-2", explanation: "挽(wǎn)은 3성, 回(huí)는 2성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'挽回'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "감정을 되돌리려는 동작을 의미합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他想尽办法", "挽回", "这段感情。"], correctAnswer: "他想尽办法挽回这段感情。", explanation: "방법(술어1) + 목적(술어2) + 목적어의 연동문 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 6,
    questions: [
      { type: "multipleChoice", question: "'快乐'의 올바른 병음은 무엇입니까?", options: ["kuài lè", "kuài luò", "guài lè", "kuài liè"], correctAnswer: "kuài lè", explanation: "快乐의 병음은 kuài lè(4성-4성)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'快乐'의 성조 조합은 무엇입니까?", options: ["4-4", "4-2", "2-4", "1-4"], correctAnswer: "4-4", explanation: "快(kuài)와 乐(lè) 모두 4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'快乐'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "즐거운 심리 상태를 묘사하는 형용사입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["祝你", "每天", "都快乐。"], correctAnswer: "祝你每天都快乐。", explanation: "기원문 형식으로 '주어+동사+대상+상태' 구조입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 7,
    questions: [
      { type: "multipleChoice", question: "'苦笑'의 올바른 병음은 무엇입니까?", options: ["kǔ xiào", "kū xiào", "kǔ xiǎo", "kǔ xiāo"], correctAnswer: "kǔ xiào", explanation: "苦笑의 병음은 kǔ xiào(3성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'苦笑'의 성조 조합은 무엇입니까?", options: ["3-4", "3-1", "2-4", "4-4"], correctAnswer: "3-4", explanation: "苦(kǔ)는 3성, 笑(xiào)는 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'苦笑'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "어쩔 수 없이 웃는 동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他只能", "无奈地", "对着镜子", "苦笑。"], correctAnswer: "他只能无奈地对着镜子苦笑。", explanation: "부사어(상태) + 개사구(대상) + 술어 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 8,
    questions: [
      { type: "multipleChoice", question: "'自尊'의 올바른 병음은 무엇입니까?", options: ["zì zūn", "zhì zūn", "zì zhūn", "zǐ zūn"], correctAnswer: "zì zūn", explanation: "自尊의 병음은 zì zūn(4성-1성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'取舍'의 성조 조합은 무엇입니까?", options: ["3-3", "3-4", "2-3", "1-3"], correctAnswer: "3-3", explanation: "取(qǔ)와 舍(shě) 모두 3성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'自尊'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "동사 '伤害'의 목적어로 쓰여 피해 대상을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他的话", "严重伤害了", "我的自尊。"], correctAnswer: "他的话严重伤害了我的自尊。", explanation: "주어 + 부사/술어 + 목적어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 9,
    questions: [
      { type: "multipleChoice", question: "'假装'의 올바른 병음은 무엇입니까?", options: ["jiǎ zhuāng", "jià zhuāng", "jiǎ zuāng", "jiá zhuāng"], correctAnswer: "jiǎ zhuāng", explanation: "假装의 병음은 jiǎ zhuāng(3성-1성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'真相'의 올바른 병음은 무엇입니까?", options: ["zhēn xiàng", "zhēn xiāng", "zhèn xiàng", "zhēn xiǎng"], correctAnswer: "zhēn xiàng", explanation: "真相의 병음은 zhēn xiàng(1성-4성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'狼狈'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "상태 묘사", explanation: "사람의 곤란하거나 딱한 상태를 묘사합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["被雨淋湿后的他", "显得", "十分", "狼狈。"], correctAnswer: "被雨淋湿后的他显得十分狼狈。", explanation: "수식어를 포함한 주어 + 술어 + 정도부사 + 보어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 10,
    questions: [
      { type: "multipleChoice", question: "'无话不说'의 올바른 병음은 무엇입니까?", options: ["wú huà bù shuō", "wǔ huà bù shuō", "wú huà bù shuò", "wú huā bù shuō"], correctAnswer: "wú huà bù shuō", explanation: "无话不说의 병음은 wú huà bù shuō입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'无话不说'의 성조 조합은 무엇입니까?", options: ["2-4-4-1", "2-4-2-1", "3-4-4-1", "2-1-4-1"], correctAnswer: "2-4-4-1", explanation: "2성-4성-4성-1성 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'无话不说'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "친구 사이의 친밀한 상태를 한정어로서 묘사합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他们俩是", "从小一起长大的、", "无话不说的", "朋友。"], correctAnswer: "他们俩是从小一起长大的、无话不说的朋友。", explanation: "주어+동사 + 여러 개의 관형어 + 목적어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 11,
    questions: [
      { type: "multipleChoice", question: "'争吵'의 올바른 병음은 무엇입니까?", options: ["zhēng chǎo", "zhèng chǎo", "zhēng cháo", "zhēn chǎo"], correctAnswer: "zhēng chǎo", explanation: "争吵의 병음은 zhēng chǎo(1성-3성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'冲动'의 올바른 병음은 무엇입니까?", options: ["chōng dòng", "chóng dòng", "chòng dòng", "chōng dōng"], correctAnswer: "chōng dòng", explanation: "冲动의 병음은 chōng dòng(1성-4성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'冲动'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "장소 표현", "대상 표현", "시간 표현"], correctAnswer: "상태 묘사", explanation: "감정이 격해진 상태를 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["年轻人", "做事", "千万不能", "冲动。"], correctAnswer: "年轻人做事千万不能冲动。", explanation: "주어 + 범위 + 부사구 + 술어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 12,
    questions: [
      { type: "multipleChoice", question: "'记得'의 올바른 병음은 무엇입니까?", options: ["jì de", "jì dé", "jǐ de", "jí de"], correctAnswer: "jì de", explanation: "记得의 병음은 jì de(4성-경성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'记得'의 성조 조합은 무엇입니까?", options: ["4-0", "4-2", "2-0", "4-4"], correctAnswer: "4-0", explanation: "记(jì)는 4성, 得(de)는 경성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'记得'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "대상 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "기억하고 있는 정신적 동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我还记得", "我们第一次", "见面的", "地方。"], correctAnswer: "我还记得我们第一次见面的地方。", explanation: "부사+술어 + 관형어(절) + 목적어 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 13,
    questions: [
      { type: "multipleChoice", question: "'星空'의 올바른 병음은 무엇입니까?", options: ["xīng kōng", "xíng kōng", "xīng kòng", "xǐng kōng"], correctAnswer: "xīng kōng", explanation: "星空의 병음은 xīng kōng(1성-1성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'星空'의 성조 조합은 무엇입니까?", options: ["1-1", "1-4", "2-1", "1-2"], correctAnswer: "1-1", explanation: "星(xīng)과 空(kōng) 모두 1성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'星空'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "상태 묘사", "시간 표현"], correctAnswer: "대상 표현", explanation: "문장에서 주어이자 묘사되는 대상입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["夜晚的", "星空", "非常", "美丽。"], correctAnswer: "夜晚的星空非常美丽。", explanation: "관형어 + 주어 + 정도부사 + 형용사(술어) 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 14,
    questions: [
      { type: "multipleChoice", question: "'忘记'의 올바른 병음은 무엇입니까?", options: ["wàng jì", "wáng jì", "wàng jǐ", "wàng jī"], correctAnswer: "wàng jì", explanation: "忘记의 병음은 wàng jì(4성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'忘记'의 성조 조합은 무엇입니까?", options: ["4-4", "4-2", "2-4", "4-0"], correctAnswer: "4-4", explanation: "忘(wàng)과 记(jì) 모두 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'忘记'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "대상 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "잊어버리는 동작(심리 상태)을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我", "忘记", "带", "手机了。"], correctAnswer: "我忘记带手机了。", explanation: "주어 + 술어1 + 술어2 + 목적어 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 15,
    questions: [
      {
        type: "multipleChoice",
        question: "'快乐'의 올바른 병음은 무엇입니까?",
        options: ["kuài lè", "kuài le", "kuài lě", "kuai lè"],
        correctAnswer: "kuài lè",
        explanation: "'快乐'의 표준 병음을 고르세요.",
        difficulty: "easy",
      },
      {
        type: "multipleChoice",
        question: "'快乐'의 성조 조합은 무엇입니까?",
        options: ["4-4", "4-2", "2-4", "4-3"],
        correctAnswer: "4-4",
        explanation: "kuài(4)+lè(4) 입니다.",
        difficulty: "easy",
      },
      {
        type: "multipleChoice",
        question: "'快乐'는 위 문장에서 어떤 역할을 합니까?",
        options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"],
        correctAnswer: "상태 묘사",
        explanation: "감정/상태를 나타내는 표현입니다.",
        difficulty: "easy",
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["很快乐。", "我", "那时", "真的"],
        correctAnswer: "那时我真的很快乐。",
        explanation: "원문 어순으로 배열하세요.",
        difficulty: "easy",
      },
    ],
  },
  {
    sentenceIndex: 16,
    questions: [
      {
        type: "multipleChoice",
        question: "'苦笑'의 올바른 병음은 무엇입니까?",
        options: ["kǔ xiào", "kù xiào", "kǔ xiāo", "ku xiào"],
        correctAnswer: "kǔ xiào",
        explanation: "'苦笑'의 표준 병음을 고르세요.",
        difficulty: "medium",
      },
      {
        type: "multipleChoice",
        question: "'苦笑'의 성조 조합은 무엇입니까?",
        options: ["3-4", "4-4", "3-1", "2-4"],
        correctAnswer: "3-4",
        explanation: "kǔ(3)+xiào(4) 입니다.",
        difficulty: "medium",
      },
      {
        type: "multipleChoice",
        question: "'苦笑'는 위 문장에서 어떤 역할을 합니까?",
        options: ["동작 표현", "상태 묘사", "대상 표현", "시간 표현"],
        correctAnswer: "동작 표현",
        explanation: "'웃다'의 행위를 나타냅니다.",
        difficulty: "medium",
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["苦笑了。", "我", "只能", "一下"],
        correctAnswer: "我只能苦笑了一下。",
        explanation: "원문 어순으로 배열하세요.",
        difficulty: "medium",
      },
    ],
  },
  {
    sentenceIndex: 17,
    questions: [
      {
        type: "multipleChoice",
        question: "'自尊'의 올바른 병음은 무엇입니까?",
        options: ["zì zūn", "zǐ zūn", "zì zún", "zi zūn"],
        correctAnswer: "zì zūn",
        explanation: "'自尊'의 표준 병음을 고르세요.",
        difficulty: "hard",
      },
      {
        type: "multipleChoice",
        question: "'自尊'의 성조 조합은 무엇입니까?",
        options: ["4-1", "3-1", "4-2", "4-4"],
        correctAnswer: "4-1",
        explanation: "zì(4)+zūn(1) 입니다.",
        difficulty: "hard",
      },
      {
        type: "multipleChoice",
        question: "'自尊'는 위 문장에서 어떤 역할을 합니까?",
        options: ["대상 표현", "상태 묘사", "동작 표현", "장소 표현"],
        correctAnswer: "대상 표현",
        explanation: "문장에서 '무엇'을 가리키는 명사 역할입니다.",
        difficulty: "hard",
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["不能", "一点", "丢", "自尊"],
        correctAnswer: "自尊一点不能丢。",
        explanation: "원문 어순으로 배열하세요.",
        difficulty: "hard",
      },
    ],
  },
  {
    sentenceIndex: 18,
    questions: [
      {
        type: "multipleChoice",
        question: "'狼狈'의 올바른 병음은 무엇입니까?",
        options: ["láng bèi", "lǎng bèi", "láng bēi", "lang bèi"],
        correctAnswer: "láng bèi",
        explanation: "'狼狈'의 표준 병음을 고르세요.",
        difficulty: "hard",
      },
      {
        type: "multipleChoice",
        question: "'狼狈'의 성조 조합은 무엇입니까?",
        options: ["2-4", "3-4", "2-1", "4-4"],
        correctAnswer: "2-4",
        explanation: "láng(2)+bèi(4) 입니다.",
        difficulty: "hard",
      },
      {
        type: "multipleChoice",
        question: "'狼狈'는 위 문장에서 어떤 역할을 합니까?",
        options: ["상태 묘사", "동작 표현", "수량 표현", "시간 표현"],
        correctAnswer: "상태 묘사",
        explanation: "난처하고 초라한 '상태'를 나타냅니다.",
        difficulty: "hard",
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["得", "我", "很", "狼狈", "显"],
        correctAnswer: "我显得很狼狈。",
        explanation: "원문 어순으로 배열하세요.",
        difficulty: "hard",
      },
    ],
  },
  {
    sentenceIndex: 19,
    questions: [
      {
        type: "multipleChoice",
        question: "'无话不说'의 올바른 병음은 무엇입니까?",
        options: ["wú huà bù shuō", "wǔ huà bù shuō", "wú huá bù shuō", "wú huà bú shuō"],
        correctAnswer: "wú huà bù shuō",
        explanation: "성조와 분절을 정확히 확인하세요.",
        difficulty: "hard",
      },
      {
        type: "multipleChoice",
        question: "'无话不说'의 성조 조합은 무엇입니까?",
        options: ["2-4-4-1", "2-4-2-1", "1-4-4-1", "2-3-4-1"],
        correctAnswer: "2-4-4-1",
        explanation: "wú(2)+huà(4)+bù(4)+shuō(1) 입니다.",
        difficulty: "hard",
      },
      {
        type: "multipleChoice",
        question: "'无话不说'는 위 문장에서 어떤 역할을 합니까?",
        options: ["상태 묘사", "장소 표현", "시간 표현", "수량 표현"],
        correctAnswer: "상태 묘사",
        explanation: "관계/대화의 정도를 나타내는 상태 표현입니다.",
        difficulty: "hard",
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["我们", "曾经", "无话不说", "那时候"],
        correctAnswer: "那时候我们曾经无话不说。",
        explanation: "원문 어순으로 배열하세요.",
        difficulty: "hard",
      },
    ],
  },
  {
    sentenceIndex: 20,
    questions: [
      {
        type: "multipleChoice",
        question: "'冲动'의 올바른 병음은 무엇입니까?",
        options: ["chōng dòng", "chóng dòng", "chōng dǒng", "chong dòng"],
        correctAnswer: "chōng dòng",
        explanation: "'冲动'의 표준 병음을 고르세요.",
        difficulty: "hard",
      },
      {
        type: "multipleChoice",
        question: "'冲动'의 성조 조합은 무엇입니까?",
        options: ["1-4", "2-4", "1-3", "4-4"],
        correctAnswer: "1-4",
        explanation: "chōng(1)+dòng(4) 입니다.",
        difficulty: "hard",
      },
      {
        type: "multipleChoice",
        question: "'冲动'는 위 문장에서 어떤 역할을 합니까?",
        options: ["대상 표현", "동작 표현", "장소 표현", "시간 표현"],
        correctAnswer: "대상 표현",
        explanation: "문장에서 '무엇'을 가리키는 명사 역할입니다.",
        difficulty: "hard",
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["冲动", "我", "太", "了", "那天"],
        correctAnswer: "那天我太冲动了。",
        explanation: "원문 어순으로 배열하세요.",
        difficulty: "hard",
      },
    ],
  },
  {
    sentenceIndex: 21,
    questions: [
      {
        type: "multipleChoice",
        question: "'记得'의 올바른 병음은 무엇입니까?",
        options: ["jì de", "jǐ de", "jì dé", "ji de"],
        correctAnswer: "jì de",
        explanation: "'记得'의 표준 병음을 고르세요.",
        difficulty: "medium",
      },
      {
        type: "multipleChoice",
        question: "'记得'의 성조 조합은 무엇입니까?",
        options: ["4-0", "3-0", "4-2", "4-4"],
        correctAnswer: "4-0",
        explanation: "jì(4)+de(경성) 입니다.",
        difficulty: "medium",
      },
      {
        type: "multipleChoice",
        question: "'记得'는 위 문장에서 어떤 역할을 합니까?",
        options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"],
        correctAnswer: "동작 표현",
        explanation: "'기억하다'의 행위를 나타냅니다.",
        difficulty: "medium",
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["吗？", "你", "还", "记得", "那天"],
        correctAnswer: "那天你还记得吗？",
        explanation: "원문 어순으로 배열하세요.",
        difficulty: "medium",
      },
    ],
  },
  {
    sentenceIndex: 22,
    questions: [
      {
        type: "multipleChoice",
        question: "'胸口'의 올바른 병음은 무엇입니까?",
        options: ["xiōng kǒu", "xiǒng kǒu", "xiōng kòu", "xiong kǒu"],
        correctAnswer: "xiōng kǒu",
        explanation: "'胸口'의 표준 병음을 고르세요.",
        difficulty: "medium",
      },
      {
        type: "multipleChoice",
        question: "'胸口'의 성조 조합은 무엇입니까?",
        options: ["1-3", "2-3", "1-4", "3-3"],
        correctAnswer: "1-3",
        explanation: "xiōng(1)+kǒu(3) 입니다.",
        difficulty: "medium",
      },
      {
        type: "multipleChoice",
        question: "'胸口'는 위 문장에서 어떤 역할을 합니까?",
        options: ["장소 표현", "대상 표현", "시간 표현", "동작 표현"],
        correctAnswer: "장소 표현",
        explanation: "신체 부위를 '장소/부위'로 나타냅니다.",
        difficulty: "medium",
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["痛", "胸口", "有点", "我", "。"],
        correctAnswer: "我胸口有点痛。",
        explanation: "원문 어순으로 배열하세요.",
        difficulty: "medium",
      },
    ],
  },
  {
    sentenceIndex: 23,
    questions: [
      {
        type: "multipleChoice",
        question: "'忘记'의 올바른 병음은 무엇입니까?",
        options: ["wàng jì", "wáng jì", "wàng jí", "wang jì"],
        correctAnswer: "wàng jì",
        explanation: "'忘记'의 표준 병음을 고르세요.",
        difficulty: "medium",
      },
      {
        type: "multipleChoice",
        question: "'忘记'의 성조 조합은 무엇입니까?",
        options: ["4-4", "2-4", "4-2", "3-4"],
        correctAnswer: "4-4",
        explanation: "wàng(4)+jì(4) 입니다.",
        difficulty: "medium",
      },
      {
        type: "multipleChoice",
        question: "'忘记'는 위 문장에서 어떤 역할을 합니까?",
        options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"],
        correctAnswer: "동작 표현",
        explanation: "'잊다'의 행위를 나타냅니다.",
        difficulty: "medium",
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["忘记", "我", "不了", "怎么", "会", "你"],
        correctAnswer: "我怎么会忘记你。",
        explanation: "원문 어순으로 배열하세요.",
        difficulty: "medium",
      },
    ],
  },
  {
    sentenceIndex: 24,
    questions: [
      { type: "multipleChoice", question: "'感动'의 올바른 병음은 무엇입니까?", options: ["gǎn dòng", "gān dòng", "gán dòng", "gǎn dōng"], correctAnswer: "gǎn dòng", explanation: "感动의 병음은 gǎn dòng(3성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'炽热'의 성조 조합은 무엇입니까?", options: ["4-4", "4-2", "2-4", "1-4"], correctAnswer: "4-4", explanation: "炽(chì)와 热(rè) 모두 4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'炽热'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "눈빛의 열렬한 상태를 수식하는 형용사입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "投来", "炽热的", "目光。"], correctAnswer: "他投来炽热的目光。", explanation: "주어 + 동사 + 관형어 + 목적어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 25,
    questions: [
      { type: "multipleChoice", question: "'激动'의 올바른 병음은 무엇입니까?", options: ["jī dòng", "jí dòng", "jǐ dòng", "jī dōng"], correctAnswer: "jī dòng", explanation: "激动의 병음은 jī dòng(1성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'原谅'의 성조 조합은 무엇입니까?", options: ["2-4", "2-1", "3-4", "4-4"], correctAnswer: "2-4", explanation: "原(yuán)은 2성, 谅(liàng)은 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'激动'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "장소 표현", "동작 표현", "시간 표현"], correctAnswer: "상태 묘사", explanation: "흥분된 심리 상태를 묘사하는 술어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["拿到录取通知书时，", "他激动得", "哭了。"], correctAnswer: "拿到录取通知书时，他激动得哭了。", explanation: "시간절 + 주어 + 술어 + 정도보어 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 26,
    questions: [
      { type: "multipleChoice", question: "'颤抖'의 올바른 병음은 무엇입니까?", options: ["chàn dǒu", "zhàn dǒu", "chàn dóu", "chán dǒu"], correctAnswer: "chàn dǒu", explanation: "颤抖의 병음은 chàn dǒu(4성-3성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'颤抖'의 성조 조합은 무엇입니까?", options: ["4-3", "4-4", "2-3", "1-3"], correctAnswer: "4-3", explanation: "颤(chàn)은 4성, 抖(dǒu)는 3성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'颤抖'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "수량 표현", "대상 표현"], correctAnswer: "동작 표현", explanation: "몸을 떠는 동작을 나타내는 동사입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他在寒风中", "不停地", "颤抖。"], correctAnswer: "他在寒风中不停地颤抖。", explanation: "장소 부사어 + 상태 부사어 + 술어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 27,
    questions: [
      { type: "multipleChoice", question: "'汹涌'의 올바른 병음은 무엇입니까?", options: ["xiōng yǒng", "xióng yǒng", "xiōng yōng", "xiōng yòng"], correctAnswer: "xiōng yǒng", explanation: "汹涌의 병음은 xiōng yǒng(1성-3성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'汹涌'의 성조 조합은 무엇입니까?", options: ["1-3", "1-2", "2-3", "4-3"], correctAnswer: "1-3", explanation: "汹(xiōng)은 1성, 涌(yǒng)은 3성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'汹涌'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "장소 표현", "동작 표현", "시간 표현"], correctAnswer: "상태 묘사", explanation: "물결의 거센 상태를 수식하는 형용사입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["波涛汹涌的", "大海", "充满了", "力量。"], correctAnswer: "波涛汹涌的大海充满了力量。", explanation: "관형어 + 주어 + 술어 + 목적어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 28,
    questions: [
      { type: "multipleChoice", question: "'自由'의 올바른 병음은 무엇입니까?", options: ["zì yóu", "zhì yóu", "zì yǒu", "zì yōu"], correctAnswer: "zì yóu", explanation: "自由의 병음은 zì yóu(4성-2성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'自由'의 성조 조합은 무엇입니까?", options: ["4-2", "4-3", "2-2", "1-2"], correctAnswer: "4-2", explanation: "自(zì)는 4성, 由(yóu)는 2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'自由'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "향후 목표나 추구하는 가치(대상)를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["每个人都", "向往", "自由的", "生活。"], correctAnswer: "每个人都向往自由的生活。", explanation: "주어 + 술어 + 관형어 + 목적어 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 29,
    questions: [
      { type: "multipleChoice", question: "'承诺'의 올바른 병음은 무엇입니까?", options: ["chéng nuò", "chěng nuò", "chéng luò", "chèng nuò"], correctAnswer: "chéng nuò", explanation: "承诺의 병음은 chéng nuò(2성-4성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'承诺'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "3-4", "4-4"], correctAnswer: "2-4", explanation: "承(chéng)은 2성, 诺(nuò)는 4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'承诺'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "시간 표현", "동작 표현"], correctAnswer: "대상 표현", explanation: "문장에서 동작의 대상인 명사로 쓰였습니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["做出的", "承诺", "一定要", "兑现。"], correctAnswer: "做出的承诺一定要兑现。", explanation: "관형어 + 주어 + 부사구 + 술어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 30,
    questions: [
      { type: "multipleChoice", question: "'自顾自'의 올바른 병음은 무엇입니까?", options: ["zì gù zì", "zhì gù zhì", "zǐ gǔ zǐ", "zì gǔ zì"], correctAnswer: "zì gù zì", explanation: "自顾自의 병음은 zì gù zì(4성-4성-4성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'自顾自'의 성조 조합은 무엇입니까?", options: ["4-4-4", "4-2-4", "4-3-4", "2-4-2"], correctAnswer: "4-4-4", explanation: "세 글자 모두 4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'自顾自'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "장소 표현", "대상 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "남을 신경 쓰지 않는 행위의 태도를 묘사합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他没理大家，", "自顾自地", "走出了", "房间。"], correctAnswer: "他没理大家，自顾自地走出了房间。", explanation: "상황 제시 후 부사어 + 술어 + 목적어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 31,
    questions: [
      { type: "multipleChoice", question: "'沉重'의 올바른 병음은 무엇입니까?", options: ["chén zhòng", "chěn zhòng", "chén chóng", "chéng zhòng"], correctAnswer: "chén zhòng", explanation: "沉重의 병음은 chén zhòng(2성-4성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'沉重'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "3-4", "1-4"], correctAnswer: "2-4", explanation: "沉(chén)은 2성, 重(zhòng)은 4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'沉重'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "무거운 심리 상태를 묘사하는 술어입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他的", "心情", "非常", "沉重。"], correctAnswer: "他的心情非常沉重。", explanation: "관형어 + 주어 + 정도부사 + 형용사 술어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 32,
    questions: [
      {
        type: "multipleChoice",
        question: "'冲动'의 올바른 병음은 무엇입니까?",
        options: ["chōng dòng", "chóng dòng", "chōng dǒng", "chong dòng"],
        correctAnswer: "chōng dòng",
        explanation: "'冲动'의 표준 병음을 고르세요.",
        difficulty: "hard",
      },
      {
        type: "multipleChoice",
        question: "'冲动'의 성조 조합은 무엇입니까?",
        options: ["1-4", "2-4", "1-3", "4-4"],
        correctAnswer: "1-4",
        explanation: "chōng(1)+dòng(4) 입니다.",
        difficulty: "hard",
      },
      {
        type: "multipleChoice",
        question: "'冲动'는 위 문장에서 어떤 역할을 합니까?",
        options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"],
        correctAnswer: "대상 표현",
        explanation: "명사로서 '충동'(무엇)을 가리킵니다.",
        difficulty: "hard",
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["因为", "冲动", "我", "才", "这样", "。"],
        correctAnswer: "我因为冲动才这样。",
        explanation: "원문 어순으로 배열하세요.",
        difficulty: "hard",
      },
    ],
  },
  {
    sentenceIndex: 33,
    questions: [
      {
        type: "multipleChoice",
        question: "'记得'의 올바른 병음은 무엇입니까?",
        options: ["jì de", "jǐ de", "jì dé", "ji de"],
        correctAnswer: "jì de",
        explanation: "'记得'의 표준 병음을 고르세요.",
        difficulty: "medium",
      },
      {
        type: "multipleChoice",
        question: "'记得'의 성조 조합은 무엇입니까?",
        options: ["4-0", "3-0", "4-2", "4-4"],
        correctAnswer: "4-0",
        explanation: "jì(4)+de(경성) 입니다.",
        difficulty: "medium",
      },
      {
        type: "multipleChoice",
        question: "'记得'는 위 문장에서 어떤 역할을 합니까?",
        options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"],
        correctAnswer: "동작 표현",
        explanation: "'기억하다'의 행위를 나타냅니다.",
        difficulty: "medium",
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["还", "记得", "你", "吗？", "这件事"],
        correctAnswer: "这件事你还记得吗？",
        explanation: "원문 어순으로 배열하세요.",
        difficulty: "medium",
      },
    ],
  },
  {
    sentenceIndex: 34,
    questions: [
      {
        type: "multipleChoice",
        question: "'右首'의 올바른 병음은 무엇입니까?",
        options: ["yòu shǒu", "yóu shǒu", "yòu shōu", "you shǒu"],
        correctAnswer: "yòu shǒu",
        explanation: "'右首'의 표준 병음을 고르세요.",
        difficulty: "hard",
      },
      {
        type: "multipleChoice",
        question: "'右首'의 성조 조합은 무엇입니까?",
        options: ["4-3", "2-3", "4-4", "3-3"],
        correctAnswer: "4-3",
        explanation: "yòu(4)+shǒu(3) 입니다.",
        difficulty: "hard",
      },
      {
        type: "multipleChoice",
        question: "'右首'는 위 문장에서 어떤 역할을 합니까?",
        options: ["장소 표현", "대상 표현", "시간 표현", "상태 묘사"],
        correctAnswer: "장소 표현",
        explanation: "'오른쪽 자리/우측'을 나타내는 위치(장소) 표현입니다.",
        difficulty: "hard",
      },
      {
        type: "sentenceOrder",
        question: "다음 문장을 올바른 순서로 배열하세요.",
        options: ["右首", "坐", "他", "在", "。"],
        correctAnswer: "他坐在右首。",
        explanation: "원문 어순으로 배열하세요.",
        difficulty: "hard",
      },
    ],
  },
  {
    sentenceIndex: 35,
    questions: [
      { type: "multipleChoice", question: "'放手'의 올바른 병음은 무엇입니까?", options: ["fàng shǒu", "fāng shǒu", "fàng shóu", "fáng shǒu"], correctAnswer: "fàng shǒu", explanation: "放手의 병음은 fàng shǒu(4성-3성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'洒脱'의 올바른 병음은 무엇입니까?", options: ["sǎ tuō", "shǎ tuō", "sǎ tuó", "sà tuō"], correctAnswer: "sǎ tuō", explanation: "洒脱의 병음은 sǎ tuō(3성-1성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'放手'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "손을 놓거나 간섭을 그만두는 동작을 의미합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他是一个", "性格", "洒脱的", "人。"], correctAnswer: "他是一个性格洒脱的人。", explanation: "주어 + 동사 + 관형어(구) + 목적어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 36,
    questions: [
      { type: "multipleChoice", question: "'舍不得'의 올바른 병음은 무엇입니까?", options: ["shě bù dé", "shè bù dé", "shě bù de", "shě bù dē"], correctAnswer: "shě bù dé", explanation: "舍不得의 병음은 shě bù dé(3성-4성-2성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'舍不得'의 성조 조합은 무엇입니까?", options: ["3-4-2", "3-4-0", "3-1-2", "2-4-2"], correctAnswer: "3-4-2", explanation: "3성-4성-2성 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'舍不得'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "아쉬워하며 차마 하지 못하는 심리 동작을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我", "真", "舍不得", "让你走。"], correctAnswer: "我真舍不得让你走。", explanation: "주어 + 정도부사 + 술어 + 목적어(절) 순서입니다.", difficulty: "hard" }
    ]
  }
];

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const sentencePractice = wohuainianPracticeData.find(sp => sp.sentenceIndex === sentenceIndex);
  return sentencePractice ? sentencePractice.questions : [];
}


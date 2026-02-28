// 小幸运词汇训练题海战术数据
import { PracticeQuestion, SentencePractice } from './tianmimiPractice';

export const xiaoxingyunPracticeData: SentencePractice[] = [
  {
    sentenceIndex: 1,
    questions: [
      { type: "multipleChoice", question: "'雨滴'의 올바른 병음은 무엇입니까?", options: ["yǔ dī", "yù dī", "yǔ dǐ", "yú dī"], correctAnswer: "yǔ dī", explanation: "雨滴의 병음은 yǔ dī입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'雨滴'의 성조 조합은 무엇입니까?", options: ["3-1", "4-1", "3-3", "2-1"], correctAnswer: "3-1", explanation: "雨(3성)와 滴(1성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'雨滴'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "时间 표현"], correctAnswer: "대상 표현", explanation: "문장에서 '걸려 있는' 주체인 대상을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["窗户上", "挂满了", "晶莹的", "雨滴。"], correctAnswer: "窗户上挂满了晶莹的雨滴。", explanation: "장소 + 동사 + 수식어 + 명사 순으로 배열합니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'草地'의 올바른 병음은 무엇입니까?", options: ["cǎo dì", "cáo dì", "cǎo de", "cào dì"], correctAnswer: "cǎo dì", explanation: "草地의 병음은 cǎo dì입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'草地'의 성조 조합은 무엇입니까?", options: ["3-4", "3-2", "2-4", "4-4"], correctAnswer: "3-4", explanation: "草(3성)와 地(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'草地'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "동작 표현", "상태 묘사", "수량 표현"], correctAnswer: "장소 표현", explanation: "아이들이 축구를 하는 장소를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["孩子们", "在青青的草地上", "踢足球。"], correctAnswer: "孩子们在青青的草地上踢足球。", explanation: "주어 + 장소 부사어 + 술어 순으로 배열합니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 2,
    questions: [
      { type: "multipleChoice", question: "'远方'의 올바른 병음은 무엇입니까?", options: ["yuǎn fāng", "yuán fāng", "yuàn fāng", "yuǎn fáng"], correctAnswer: "yuǎn fāng", explanation: "远方의 병음은 yuǎn fāng입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'远方'의 성조 조합은 무엇입니까?", options: ["3-1", "3-2", "4-1", "2-1"], correctAnswer: "3-1", explanation: "远(3성)과 方(1성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'远方'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "동작 표현", "경험 표현", "시간 표현"], correctAnswer: "장소 표현", explanation: "여행을 가는 목적지인 장소를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他背起行囊", "去远方", "旅行。"], correctAnswer: "他背起行囊去远方旅行。", explanation: "연동문 형식으로 행위의 순서대로 배열합니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'响起'의 올바른 병음은 무엇입니까?", options: ["xiǎng qǐ", "xiáng qǐ", "xiàng qǐ", "xiǎng qī"], correctAnswer: "xiǎng qǐ", explanation: "响起의 병음은 xiǎng qǐ입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'响起'의 성조 조합은 무엇입니까?", options: ["3-3", "2-3", "3-2", "4-3"], correctAnswer: "3-3", explanation: "响(3성)과 起(3성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'响起'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "대상 표현"], correctAnswer: "동작 표현", explanation: "박수 소리가 들려오기 시작하는 동작/현상을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["教室里", "响起了", "热烈的", "掌声。"], correctAnswer: "教室里响起了热烈的掌声。", explanation: "장소 + 술어 + 수식어 + 목적어 순으로 배열합니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 3,
    questions: [
      { type: "multipleChoice", question: "'认真'의 올바른 병음은 무엇입니까?", options: ["rèn zhēn", "rén zhēn", "rèn zhèng", "rèn chén"], correctAnswer: "rèn zhēn", explanation: "认真의 병음은 rèn zhēn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'认真'의 성조 조합은 무엇입니까?", options: ["4-1", "2-1", "4-4", "4-2"], correctAnswer: "4-1", explanation: "认(4성)과 真(1성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'认真'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "수업을 듣는 태도나 상태를 묘사합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他在", "认真地", "听老师", "讲课。"], correctAnswer: "他在认真地听老师讲课。", explanation: "주어 + 부사어 + 술어 구조로 배열합니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'呼唤'의 올바른 병음은 무엇입니까?", options: ["hū huàn", "hǔ huàn", "hū huān", "hù huàn"], correctAnswer: "hū huàn", explanation: "呼唤의 병음은 hū huàn입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'呼唤'의 성조 조합은 무엇입니까?", options: ["1-4", "1-2", "2-4", "3-4"], correctAnswer: "1-4", explanation: "呼(1성)와 唤(4성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'呼唤'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "상태 묘사", "수량 표현"], correctAnswer: "동작 표현", explanation: "마음속으로 부르는 동작을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他在心里", "默默", "呼唤着", "朋友的名字。"], correctAnswer: "他在心里默默呼唤着朋友的名字。", explanation: "주어/장소 + 부사 + 술어 + 목적어 순입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 4,
    questions: [
      { type: "multipleChoice", question: "'感情'의 올바른 병음은 무엇입니까?", options: ["gǎn qíng", "gān qíng", "gǎn qǐng", "gàn qíng"], correctAnswer: "gǎn qíng", explanation: "感情의 병음은 gǎn qíng입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'感情'의 성조 조합은 무엇입니까?", options: ["3-2", "3-4", "2-2", "4-2"], correctAnswer: "3-2", explanation: "感(3성)과 情(2성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'感情'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "두 사람 사이의 관계나 상태를 나타내는 주어로 쓰였습니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他们两人的", "感情", "非常深厚。"], correctAnswer: "他们两人的感情非常深厚。", explanation: "관형어 + 주어 + 술어(형용사) 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 5,
    questions: [
      { type: "multipleChoice", question: "'离别'의 올바른 병음은 무엇입니까?", options: ["lí bié", "lǐ bié", "lí biè", "lì bié"], correctAnswer: "lí bié", explanation: "离别의 병음은 lí bié입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'离别'의 성조 조합은 무엇입니까?", options: ["2-2", "2-4", "3-2", "1-2"], correctAnswer: "2-2", explanation: "离(2성)와 别(2성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'离别'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "장소 표현", "상태 묘사", "동작 표현"], correctAnswer: "동작 표현", explanation: "이별하는 행위가 일어나는 시점을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["离别的时候，", "大家都", "哭了。"], correctAnswer: "离别的时候，大家都哭了。", explanation: "시간 배경 + 주어 + 술어 순으로 배열합니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'刻骨铭心'의 올바른 병음은 무엇입니까?", options: ["kè gǔ míng xīn", "kè gū míng xīn", "kè gǔ mǐng xīn", "kè gǔ míng xīng"], correctAnswer: "kè gǔ míng xīn", explanation: "刻骨铭心의 병음은 kè gǔ míng xīn입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'刻骨铭心'의 성조 조합은 무엇입니까?", options: ["4-3-2-1", "4-1-2-1", "4-3-3-1", "4-2-2-1"], correctAnswer: "4-3-2-1", explanation: "刻(4성), 骨(3성), 铭(2성), 心(1성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'刻骨铭心'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "경험 표현", "时间 표현"], correctAnswer: "상태 묘사", explanation: "교훈의 깊이가 매우 깊음을 묘사합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["那是", "一次", "刻骨铭心的", "教训。"], correctAnswer: "那是一次刻骨铭心的教训。", explanation: "판단문(是) 구조로 수사+양사+형용사+명사 순입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 6,
    questions: [
      { type: "multipleChoice", question: "'发现'의 올바른 병음은 무엇입니까?", options: ["fā xiàn", "fà xiàn", "fā xiān", "fǎ xiàn"], correctAnswer: "fā xiàn", explanation: "发现의 병음은 fā xiàn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'发现'의 성조 조합은 무엇입니까?", options: ["1-4", "1-2", "4-4", "1-1"], correctAnswer: "1-4", explanation: "发(1성)와 现(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'发现'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "장소 표현", "상태 묘사"], correctAnswer: "동작 표현", explanation: "무엇을 알아차리는 인지 동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我发现", "他最近", "变得", "很开朗。"], correctAnswer: "我发现他最近变得很开朗。", explanation: "주어 + 발견한 내용(절) 순으로 구성됩니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'生命'의 올바른 병음은 무엇입니까?", options: ["shēng mìng", "shěng mìng", "shēng míng", "shèng mìng"], correctAnswer: "shēng mìng", explanation: "生命의 병음은 shēng mìng입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'生命'의 성조 조합은 무엇입니까?", options: ["1-4", "1-2", "4-4", "2-4"], correctAnswer: "1-4", explanation: "生(1성)과 命(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'生命'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "문장의 배경이 되는 핵심 개념(대상)을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["生命中", "有很多", "美好的瞬间。"], correctAnswer: "生命中有很多美好的瞬间。", explanation: "범위/장소 + 존현문(有) + 명사구 순입니다.", difficulty: "medium" }
    ]
  },
  { sentenceIndex: 7, questions: [] },
  {
    sentenceIndex: 8,
    questions: [
      { type: "multipleChoice", question: "'微笑'의 올바른 병음은 무엇입니까?", options: ["wēi xiào", "wéi xiào", "wěi xiào", "wēi xiǎo"], correctAnswer: "wēi xiào", explanation: "微笑의 병음은 wēi xiào입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'微笑'의 성조 조합은 무엇입니까?", options: ["1-4", "1-3", "2-4", "4-4"], correctAnswer: "1-4", explanation: "微(1성)와 笑(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'微笑'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "문장에서 '지니고 있는' 대상을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["她总是", "带着", "迷人的", "微笑。"], correctAnswer: "她总是带着迷人的微笑。", explanation: "주어+부사 + 술어 + 관형어 + 목적어 순입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'追逐'의 올바른 병음은 무엇입니까?", options: ["zhuī zhú", "zhuǐ zhú", "zhuī zhǔ", "zhuì zhú"], correctAnswer: "zhuī zhú", explanation: "追逐의 병음은 zhuī zhú입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'追逐'의 성조 조합은 무엇입니까?", options: ["1-2", "1-3", "2-2", "4-2"], correctAnswer: "1-2", explanation: "追(1성)와 逐(2성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'追逐'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "대상 표현"], correctAnswer: "동작 표현", explanation: "뒤쫓으며 노는 동작을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["年轻人在", "草地上", "追逐玩耍。"], correctAnswer: "年轻人在草地上追逐玩耍。", explanation: "주어 + 장소 + 술어 순으로 배열합니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 9,
    questions: [
      { type: "multipleChoice", question: "'理所当然'의 올바른 병음은 무엇입니까?", options: ["lǐ suǒ dāng rán", "lǐ suō dāng rán", "lì suǒ dāng rán", "lǐ suǒ dāng lán"], correctAnswer: "lǐ suǒ dāng rán", explanation: "理所当然의 병음은 lǐ suǒ dāng rán입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'理所当然'의 성조 조합은 무엇입니까?", options: ["3-3-1-2", "3-2-1-2", "3-3-4-2", "4-3-1-2"], correctAnswer: "3-3-1-2", explanation: "理(3성), 所(3성), 当(1성), 然(2성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'理所当然'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "행위가 당연하다는 상태나 성질을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["接受别人的帮助说谢谢", "是", "理所当然的。"], correctAnswer: "接受别人的帮助说谢谢是理所当然的。", explanation: "주어절 + 술어(是) + 보어 순입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 10,
    questions: [
      { type: "multipleChoice", question: "'默默'의 올바른 병음은 무엇입니까?", options: ["mò mò", "mó mó", "mò mo", "mǔ mǔ"], correctAnswer: "mò mò", explanation: "默默의 병음은 mò mò입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'默默'의 성조 조합은 무엇입니까?", options: ["4-4", "4-0", "2-2", "4-1"], correctAnswer: "4-4", explanation: "默(4성)가 중첩된 형태입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'默默'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "말없이 지원하는 상태를 묘사하는 부사어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他一直在", "背后", "默默地", "支持我。"], correctAnswer: "他一直在背后默默地支持我。", explanation: "주어 + 장소 + 부사어 + 술어 순입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'守护'의 올바른 병음은 무엇입니까?", options: ["shǒu hù", "shǒu hǔ", "shóu hù", "shòu hù"], correctAnswer: "shǒu hù", explanation: "守护의 병음은 shǒu hù입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'守护'의 성조 조합은 무엇입니까?", options: ["3-4", "3-3", "2-4", "4-4"], correctAnswer: "3-4", explanation: "守(3성)와 护(4성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'守护'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "아이를 지키고 돌보는 동작을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["母亲", "守护在", "生病的孩子", "身边。"], correctAnswer: "母亲守护在生病的孩子身边。", explanation: "주어 + 술어 + 장소 보어 순으로 배열합니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 11,
    questions: [
      { type: "multipleChoice", question: "'原来'의 올바른 병음은 무엇입니까?", options: ["yuán lái", "yuàn lái", "yuán lāi", "yuán lán"], correctAnswer: "yuán lái", explanation: "原来의 병음은 yuán lái입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'原来'의 성조 조합은 무엇입니까?", options: ["2-2", "2-4", "4-2", "2-1"], correctAnswer: "2-2", explanation: "原(2성)과 来(2성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'原来'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "새로운 사실을 알게 된 상황을 나타내는 부사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["原来", "你就是", "我们要找的", "那个人。"], correctAnswer: "原来你就是我们要找的那个人。", explanation: "부사 + 주어 + 술어 + 관형어 + 목적어 순입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'幸运'의 올바른 병음은 무엇입니까?", options: ["xìng yùn", "xīng yùn", "xìng yún", "xìng yūn"], correctAnswer: "xìng yùn", explanation: "幸运의 병음은 xìng yùn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'幸运'의 성조 조합은 무엇입니까?", options: ["4-4", "4-2", "1-4", "4-1"], correctAnswer: "4-4", explanation: "幸(4성)과 运(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'幸运'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "경험 표현", "时间 표현"], correctAnswer: "상태 묘사", explanation: "운이 좋은 상태를 설명하는 형용사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["能中奖", "真是", "太幸运了。"], correctAnswer: "能中奖真是太幸运了。", explanation: "주어(구) + 강조 부사 + 술어 순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 12,
    questions: [
      { type: "multipleChoice", question: "'曾经'의 올바른 병음은 무엇입니까?", options: ["céng jīng", "chén jīng", "céng jìn", "céng jǐng"], correctAnswer: "céng jīng", explanation: "曾经의 병음은 céng jīng입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'曾经'의 성조 조합은 무엇입니까?", options: ["2-1", "2-3", "4-1", "1-1"], correctAnswer: "2-1", explanation: "曾(2성)과 经(1성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'曾经'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "장소 표현", "동작 표현", "대상 표현"], correctAnswer: "时间 표현", explanation: "과거에 일어난 일을 나타내는 시간 부사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我", "曾经", "住在这里。"], correctAnswer: "我曾经住在这里。", explanation: "주어 + 시간 부사 + 술어 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 13,
    questions: [
      { type: "multipleChoice", question: "'对抗'의 올바른 병음은 무엇입니까?", options: ["duì kàng", "duī kàng", "duì kǎng", "tuì kàng"], correctAnswer: "duì kàng", explanation: "对抗의 병음은 duì kàng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'对抗'의 성조 조합은 무엇입니까?", options: ["4-4", "4-3", "2-4", "1-4"], correctAnswer: "4-4", explanation: "对(4성)와 抗(4성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'对抗'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "时间 표현"], correctAnswer: "동작 표현", explanation: "알레르기에 맞서 싸우는 작용/동작을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这种药物", "有助于", "对抗过敏。"], correctAnswer: "这种药物有助于对抗过敏。", explanation: "주어 + 술어 + 목적어(구) 순입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 14,
    questions: [
      { type: "multipleChoice", question: "'一尘不染'의 올바른 병음은 무엇입니까?", options: ["yī chén bù rǎn", "yì chén bú rǎn", "yī chén bù rán", "yì chén bù rǎn"], correctAnswer: "yī chén bù rǎn", explanation: "一尘不染의 표준 병음은 yī chén bù rǎn입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'一尘不染'의 성조 조합은 무엇입니까?", options: ["1-2-4-3", "4-2-2-3", "1-2-2-3", "2-2-4-3"], correctAnswer: "1-2-4-3", explanation: "一(1), 尘(2), 不(4), 染(3) 성조입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'一尘不染'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "방이 매우 깨끗한 상태를 묘사하는 보어입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他的房间", "收拾得", "一尘不染。"], correctAnswer: "他的房间收拾得一尘不染。", explanation: "주어 + 술어 + 정도보어 구조입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'真心'의 올바른 병음은 무엇입니까?", options: ["zhēn xīn", "zhèng xīn", "zhēn xīng", "zhén xīn"], correctAnswer: "zhēn xīn", explanation: "真心의 병음은 zhēn xīn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'真心'의 성조 조합은 무엇입니까?", options: ["1-1", "1-4", "4-1", "2-1"], correctAnswer: "1-1", explanation: "真(1성)과 心(1성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'真心'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "거짓 없는 마음 상태를 나타내는 부사어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我是", "真心想", "和你", "交朋友。"], correctAnswer: "我是真心想和你交朋友。", explanation: "주어+술어 + 부사어 + 개사구 + 술어 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 15,
    questions: [
      { type: "multipleChoice", question: "'相遇'의 올바른 병음은 무엇입니까?", options: ["xiāng yù", "xiáng yù", "xiāng yǔ", "xiàng yù"], correctAnswer: "xiāng yù", explanation: "相遇의 병음은 xiāng yù입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'相遇'의 성조 조합은 무엇입니까?", options: ["1-4", "1-3", "2-4", "4-4"], correctAnswer: "1-4", explanation: "相(1성)과 遇(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'相遇'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "时间 표현"], correctAnswer: "동작 표현", explanation: "서로 만나는 동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["很高兴", "在这里", "与你相遇。"], correctAnswer: "很高兴在这里与你相遇。", explanation: "형용사(감정) + 장소 + 술어 순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 16,
    questions: [
      { type: "multipleChoice", question: "'失去'의 올바른 병음은 무엇입니까?", options: ["shī qù", "shì qù", "shī qū", "shī qǔ"], correctAnswer: "shī qù", explanation: "失去의 병음은 shī qù입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'失去'의 성조 조합은 무엇입니까?", options: ["1-4", "1-0", "1-1", "1-2"], correctAnswer: "1-4", explanation: "失(1성)와 去(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'失去'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "신념을 잃어버리는 추상적인 동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["不要因为", "一点挫折", "就失去信心。"], correctAnswer: "不要因为一点挫折就失去信心。", explanation: "부정 명령 + 원인 + 결과 구조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'权利'의 올바른 병음은 무엇입니까?", options: ["quán lì", "quǎn lì", "quán lǐ", "quán lè"], correctAnswer: "quán lì", explanation: "权利의 병음은 quán lì입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'权利'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "3-4", "4-4"], correctAnswer: "2-4", explanation: "权(2성)과 利(4성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'权利'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "가지는 주체인 권리라는 대상을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["公民", "有", "受教育的", "权利。"], correctAnswer: "公民有受教育的权利。", explanation: "주어 + 술어(有) + 관형어 + 목적어 순입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 17,
    questions: [
      { type: "multipleChoice", question: "'但愿'의 올바른 병음은 무엇입니까?", options: ["dàn yuàn", "dān yuàn", "dàn yuán", "dán yuàn"], correctAnswer: "dàn yuàn", explanation: "但愿의 병음은 dàn yuàn입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'但愿'의 성조 조합은 무엇입니까?", options: ["4-4", "1-4", "4-2", "4-1"], correctAnswer: "4-4", explanation: "但(4성)과 愿(4성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'但愿'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "时间 표현"], correctAnswer: "상태 묘사", explanation: "희망하는 심리적 상태를 나타내는 부사입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["但愿", "一切顺利。"], correctAnswer: "但愿一切顺利。", explanation: "부사(희망) + 소망하는 내용 순입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'天际'의 올바른 병음은 무엇입니까?", options: ["tiān jì", "tiǎn jì", "tiān jī", "tián jì"], correctAnswer: "tiān jì", explanation: "天际의 병음은 tiān jì입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'天际'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "1-3", "2-4"], correctAnswer: "1-4", explanation: "天(1성)과 际(4성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'天际'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "동작 표현", "상태 묘사", "时间 표현"], correctAnswer: "장소 표현", explanation: "하늘 끝이라는 장소를 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["夕阳", "消失在", "远方的", "天际。"], correctAnswer: "夕阳消失在远方的天际。", explanation: "주어 + 술어+장소보어 + 관형어 + 명사 순입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 18,
    questions: [
      { type: "multipleChoice", question: "'注定'의 올바른 병음은 무엇입니까?", options: ["zhù dìng", "zhǔ dìng", "zhū dìng", "zhù tīng"], correctAnswer: "zhù dìng", explanation: "注定의 병음은 zhù dìng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'注定'의 성조 조합은 무엇입니까?", options: ["4-4", "4-2", "3-4", "1-4"], correctAnswer: "4-4", explanation: "注(4성)와 定(4성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'注定'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "时间 표현"], correctAnswer: "상태 묘사", explanation: "이미 정해진 운명적인 상태를 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["有些事情", "似乎", "早已注定。"], correctAnswer: "有些事情似乎早已注定。", explanation: "주어 + 부사(추측) + 술어부 순입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 19,
    questions: [
      { type: "multipleChoice", question: "'青春'의 올바른 병음은 무엇입니까?", options: ["qīng chūn", "qǐng chūn", "qīng chún", "qìng chūn"], correctAnswer: "qīng chūn", explanation: "青春의 병음은 qīng chūn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'青春'의 성조 조합은 무엇입니까?", options: ["1-1", "1-2", "2-1", "1-4"], correctAnswer: "1-1", explanation: "青(1성)과 春(1성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'青春'는 위 문장에서 어떤 역할을 합니까?", options: ["时间 표현", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "时间 표현", explanation: "인생의 한 시기인 청춘(시간)을 주어로 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["青春是", "奋斗的", "最好时光。"], correctAnswer: "青春是奋斗的最好时光。", explanation: "주어 + 술어(是) + 관형어 + 목적어 순입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'跌跌撞撞'의 올바른 병음은 무엇입니까?", options: ["diē diē zhuàng zhuàng", "dié dié zhuàng zhuàng", "diē diē zhuāng zhuāng", "tiē tiē zhuàng zhuàng"], correctAnswer: "diē diē zhuàng zhuàng", explanation: "跌跌撞撞의 병음은 diē diē zhuàng zhuàng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'跌跌撞撞'의 성조 조합은 무엇입니까?", options: ["1-1-4-4", "2-2-4-4", "1-1-1-1", "4-4-1-1"], correctAnswer: "1-1-4-4", explanation: "跌(1)과 撞(4)이 각각 중첩된 형태입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'跌跌撞撞'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "걷는 모습이 불안정한 상태를 묘사합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "跌跌撞撞地", "走进了", "家门。"], correctAnswer: "他跌跌撞撞地走进了家门。", explanation: "주어 + 상태 부사어 + 술어 + 목적어 순입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 20,
    questions: [
      { type: "multipleChoice", question: "'拥有'의 올바른 병음은 무엇입니까?", options: ["yōng yǒu", "yóng yǒu", "yōng yóu", "yòng yǒu"], correctAnswer: "yōng yǒu", explanation: "拥有의 병음은 yōng yǒu입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'拥有'의 성조 조합은 무엇입니까?", options: ["1-3", "1-2", "2-3", "4-3"], correctAnswer: "1-3", explanation: "拥(1성)과 有(3성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'拥有'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "时间 표현"], correctAnswer: "동작 표현", explanation: "경험이나 자질을 갖추고 있는 상태/동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他拥有", "丰富的", "教学经验。"], correctAnswer: "他拥有丰富的教学经验。", explanation: "주어 + 술어 + 관형어 + 목적어 순입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'后知后觉'의 올바른 병음은 무엇입니까?", options: ["hòu zhī hòu jué", "hòu zhī hòu jiào", "hǒu zhī hǒu jué", "hòu zī hòu jué"], correctAnswer: "hòu zhī hòu jué", explanation: "后知后觉의 병음은 hòu zhī hòu jué입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'后知后觉'의 성조 조합은 무엇입니까?", options: ["4-1-4-2", "4-2-4-2", "4-1-4-4", "3-1-3-2"], correctAnswer: "4-1-4-2", explanation: "后(4), 知(1), 后(4), 觉(2) 성조입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'后知后觉'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "반응이나 깨달음이 늦은 상태를 설명합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["对于这个变化，", "他是", "后知后觉的。"], correctAnswer: "对于这个变化，他是后知后觉的。", explanation: "대상(개사구) + 판단문 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 21,
    questions: [
      { type: "multipleChoice", question: "'来不及'의 올바른 병음은 무엇입니까?", options: ["lái bù jí", "lái bù jǐ", "lái bù jī", "lài bù jí"], correctAnswer: "lái bù jí", explanation: "来不及의 병음은 lái bù jí입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'来不及'의 성조 조합은 무엇입니까?", options: ["2-0-2", "2-4-2", "2-0-3", "2-4-4"], correctAnswer: "2-0-2", explanation: "来(2), 不(경성/4), 及(2) 성조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'来不及'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "时间 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "시간이 부족하여 할 수 없는 상태를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["要下雨了，", "来不及", "收衣服了。"], correctAnswer: "要下雨了，来不及收衣服了。", explanation: "원인(상황) + 불가능한 상태 + 목적행위 순입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'勇气'의 올바른 병음은 무엇입니까?", options: ["yǒng qì", "yóng qì", "yōng qì", "yǒng qi"], correctAnswer: "yǒng qì", explanation: "勇气의 병음은 yǒng qì입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'勇气'의 성조 조합은 무엇입니까?", options: ["3-4", "3-0", "2-4", "1-4"], correctAnswer: "3-4", explanation: "勇(3성)과 气(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'勇气'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "문장에서 '끌어올리는' 대상인 용기를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他终于", "鼓起勇气", "向她表白了。"], correctAnswer: "他终于鼓起勇气向她表白了。", explanation: "주어+부사 + 술어1(목적어포함) + 술어2 순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 22,
    questions: [
      { type: "multipleChoice", question: "'也许'의 올바른 병음은 무엇입니까?", options: ["yě xǔ", "yè xǔ", "yě xū", "ye xǔ"], correctAnswer: "yě xǔ", explanation: "성조(3-3)와 분절을 확인하세요.", difficulty: "easy" },
      { type: "multipleChoice", question: "'也许'의 성조 조합은 무엇입니까?", options: ["3-3", "4-3", "3-1", "2-3"], correctAnswer: "3-3", explanation: "yě(3) + xǔ(3)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'也许'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "확실하지 않은 추측(가능성)을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我还不懂。", "当时", "也许", "也许当时"], correctAnswer: "也许当时我还不懂。", explanation: "부사(也许) + 시간(当时) + 주어/서술 순서입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'当时'의 올바른 병음은 무엇입니까?", options: ["dāng shí", "dàng shí", "dāng shì", "dang shí"], correctAnswer: "dāng shí", explanation: "둘 다 성조를 포함해 정확히 고르세요.", difficulty: "easy" },
      { type: "multipleChoice", question: "'当时'의 성조 조합은 무엇입니까?", options: ["1-2", "4-2", "1-4", "2-2"], correctAnswer: "1-2", explanation: "dāng(1) + shí(2)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'当时'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "장소 표현", "동작 표현", "수량 표현"], correctAnswer: "시간 표현", explanation: "'그때/당시'라는 시간을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["也许", "当时", "我还不懂。", "当时我还不懂。"], correctAnswer: "也许当时我还不懂。", explanation: "시간 성분(当时)은 주어 앞에서 상황을 제시합니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 23,
    questions: [
      { type: "multipleChoice", question: "'忙着'의 올바른 병음은 무엇입니까?", options: ["máng zhe", "mǎng zhe", "máng zhè", "mang zhe"], correctAnswer: "máng zhe", explanation: "'着'는 보통 경성(무성조)로 발음합니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'忙着'의 성조 조합은 무엇입니까?", options: ["2-0", "3-0", "2-4", "2-2"], correctAnswer: "2-0", explanation: "máng(2) + zhe(경성=0)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'忙着'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "'~하느라 바쁜 상태'로 뒤 동작을 이끕니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["忙着追逐天空中的流星。", "忙着微笑和哭泣，", "微笑和哭泣，忙着", "追逐天空中的流星。"], correctAnswer: "忙着微笑和哭泣，忙着追逐天空中的流星。", explanation: "두 절이 쉼표로 연결된 구조를 유지하세요.", difficulty: "medium" },
      { type: "multipleChoice", question: "'追逐'의 올바른 병음은 무엇입니까?", options: ["zhuī zhú", "zhuì zhú", "zhuī zhǔ", "zhui zhú"], correctAnswer: "zhuī zhú", explanation: "각 음절의 성조(1,2)를 구분하세요.", difficulty: "medium" },
      { type: "multipleChoice", question: "'追逐'의 성조 조합은 무엇입니까?", options: ["1-2", "4-2", "1-3", "2-2"], correctAnswer: "1-2", explanation: "zhuī(1) + zhú(2)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'追逐'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'쫓다'라는 행동을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["追逐", "天空中的", "流星。", "忙着"], correctAnswer: "忙着追逐天空中的流星。", explanation: "'忙着' 뒤에 동작(追逐)이 옵니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'流星'의 올바른 병음은 무엇입니까?", options: ["liú xīng", "liǔ xīng", "liú xíng", "liu xīng"], correctAnswer: "liú xīng", explanation: "성조(2-1)와 분절을 확인하세요.", difficulty: "medium" },
      { type: "multipleChoice", question: "'流星'의 성조 조합은 무엇입니까?", options: ["2-1", "3-1", "2-2", "1-1"], correctAnswer: "2-1", explanation: "liú(2) + xīng(1)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'流星'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "'追逐'의 목적어(무엇을 쫓는가)입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["忙着追逐", "流星。", "天空中的"], correctAnswer: "忙着追逐天空中的流星。", explanation: "수식어(天空中的)가 명사(流星) 앞에 옵니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 24,
    questions: [
      { type: "multipleChoice", question: "'理所当然'의 올바른 병음은 무엇입니까?", options: ["lǐ suǒ dāng rán", "lǐ suǒ dàng rán", "lí suǒ dāng rán", "lǐ suǒ dāng rǎn"], correctAnswer: "lǐ suǒ dāng rán", explanation: "4음절 성조를 모두 확인하세요.", difficulty: "hard" },
      { type: "multipleChoice", question: "'理所当然'의 성조 조합은 무엇입니까?", options: ["3-3-1-2", "2-3-1-2", "3-2-1-2", "3-3-4-2"], correctAnswer: "3-3-1-2", explanation: "lǐ(3)-suǒ(3)-dāng(1)-rán(2)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'理所当然'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "'당연하게도'라는 방식/태도를 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["忘记。", "人", "理所当然地", "人理所当然地"], correctAnswer: "人理所当然地忘记。", explanation: "주어(人) + 방식(理所当然地) + 동사(忘记)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'忘记'의 올바른 병음은 무엇입니까?", options: ["wàng jì", "wáng jì", "wàng jí", "wang jì"], correctAnswer: "wàng jì", explanation: "성조(4-4)를 정확히 고르세요.", difficulty: "easy" },
      { type: "multipleChoice", question: "'忘记'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-2", "3-4"], correctAnswer: "4-4", explanation: "wàng(4) + jì(4)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'忘记'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "'잊다'라는 행동을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["理所当然地", "忘记。", "人"], correctAnswer: "人理所当然地忘记。", explanation: "주어가 문두에 옵니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 25,
    questions: [
      { type: "multipleChoice", question: "'默默'의 올바른 병음은 무엇입니까?", options: ["mò mò", "mó mò", "mò mó", "mo mò"], correctAnswer: "mò mò", explanation: "두 글자 모두 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'默默'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-2", "3-4"], correctAnswer: "4-4", explanation: "mò(4) + mò(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'默默'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "'어떤 방식으로'(말없이) 행동하는지 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["一直", "是谁风里雨里，", "在原地。", "默默守护", "默默守护在原地。"], correctAnswer: "是谁风里雨里，一直默默守护在原地。", explanation: "앞 절 + 쉼표 + '一直'로 지속을 강조합니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'守护'의 올바른 병음은 무엇입니까?", options: ["shǒu hù", "shōu hù", "shǒu hú", "shou hù"], correctAnswer: "shǒu hù", explanation: "shǒu(3), hù(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'守护'의 성조 조합은 무엇입니까?", options: ["3-4", "1-4", "3-2", "2-4"], correctAnswer: "3-4", explanation: "shǒu(3) + hù(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'守护'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'지키다/보호하다'라는 행동을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["一直", "默默", "守护", "在原地。", "风里雨里，"], correctAnswer: "是谁风里雨里，一直默默守护在原地。", explanation: "동사(守护) 뒤에 장소(在原地)가 옵니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'原地'의 올바른 병음은 무엇입니까?", options: ["yuán dì", "yuǎn dì", "yuán dī", "yuan dì"], correctAnswer: "yuán dì", explanation: "yuán(2), dì(4)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'原地'의 성조 조합은 무엇입니까?", options: ["2-4", "3-4", "2-1", "2-2"], correctAnswer: "2-4", explanation: "yuán(2) + dì(4)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'原地'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "시간 표현", "동작 표현", "수량 표현"], correctAnswer: "장소 표현", explanation: "'在原地'로 위치(장소)를 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["在原地。", "一直默默", "守护", "是谁风里雨里，"], correctAnswer: "是谁风里雨里，一直默默守护在原地。", explanation: "전치사구(在原地)는 문장 끝에서 장소를 마무리합니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 26,
    questions: [
      { type: "multipleChoice", question: "'原来'의 올바른 병음은 무엇입니까?", options: ["yuán lái", "yuǎn lái", "yuán lǎi", "yuan lái"], correctAnswer: "yuán lái", explanation: "두 음절 모두 2성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'原来'의 성조 조합은 무엇입니까?", options: ["2-2", "3-2", "2-3", "1-2"], correctAnswer: "2-2", explanation: "yuán(2) + lái(2)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'原来'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "'알고 보니'라는 깨달음/전환을 표시합니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["原来", "你是我", "最想留住的", "幸运。", "你是我最想留住的"], correctAnswer: "原来你是我最想留住的幸运。", explanation: "문두의 '原来'가 문장 전체를 이끕니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'留住'의 올바른 병음은 무엇입니까?", options: ["liú zhù", "liǔ zhù", "liú zhú", "liu zhù"], correctAnswer: "liú zhù", explanation: "liú(2), zhù(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'留住'의 성조 조합은 무엇입니까?", options: ["2-4", "3-4", "2-2", "4-4"], correctAnswer: "2-4", explanation: "liú(2) + zhù(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'留住'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "'붙잡아 두다'라는 행위를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["原来你是我", "最想", "留住的", "幸运。", "最想留住的"], correctAnswer: "原来你是我最想留住的幸运。", explanation: "'最想+동사'가 '…的'로 명사를 수식합니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'幸运'의 올바른 병음은 무엇입니까?", options: ["xìng yùn", "xīng yùn", "xìng yǔn", "xing yùn"], correctAnswer: "xìng yùn", explanation: "xìng(4), yùn(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'幸运'의 성조 조합은 무엇입니까?", options: ["4-4", "1-4", "4-3", "2-4"], correctAnswer: "4-4", explanation: "xìng(4) + yùn(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'幸运'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "'你是…'의 보어로 '무엇인지'를 말합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["原来", "你是我", "最想留住的", "幸运。"], correctAnswer: "原来你是我最想留住的幸运。", explanation: "'最想留住的'가 '幸运'을 꾸밉니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 27,
    questions: [
      { type: "multipleChoice", question: "'曾经'의 올바른 병음은 무엇입니까?", options: ["céng jīng", "cēng jīng", "céng jǐng", "ceng jīng"], correctAnswer: "céng jīng", explanation: "céng(2), jīng(1)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'曾经'의 성조 조합은 무엇입니까?", options: ["2-1", "1-1", "2-3", "3-1"], correctAnswer: "2-1", explanation: "céng(2) + jīng(1)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'曾经'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "시간 표현", explanation: "과거의 어느 시점을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["原来我们和爱情", "曾经", "靠得那么近。", "那么近。"], correctAnswer: "原来我们和爱情曾经靠得那么近。", explanation: "시간부사(曾经)가 동작/상태 앞에 옵니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'靠近'의 올바른 병음은 무엇입니까?", options: ["kào jìn", "kǎo jìn", "kào jǐn", "kao jìn"], correctAnswer: "kào jìn", explanation: "kào(4), jìn(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'靠近'의 성조 조합은 무엇입니까?", options: ["4-4", "3-4", "4-3", "2-4"], correctAnswer: "4-4", explanation: "kào(4) + jìn(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'靠近'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "'가깝다/가까워지다'의 상태를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["原来", "我们和爱情", "曾经", "靠得那么近。", "靠得那么近"], correctAnswer: "原来我们和爱情曾经靠得那么近。", explanation: "'靠得…近'가 '가까운 정도'를 나타냅니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 28,
    questions: [
      { type: "multipleChoice", question: "'对抗'의 올바른 병음은 무엇입니까?", options: ["duì kàng", "duí kàng", "duì kǎng", "dui kàng"], correctAnswer: "duì kàng", explanation: "duì(4), kàng(4)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'对抗'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-3", "3-4"], correctAnswer: "4-4", explanation: "duì(4) + kàng(4)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'对抗'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'세상과 맞서다'라는 행동을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["那为我", "对抗世界的决定，", "那陪我淋的雨。", "决定，"], correctAnswer: "那为我对抗世界的决定，那陪我淋的雨。", explanation: "두 구가 쉼표로 병렬 연결됩니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'决定'의 올바른 병음은 무엇입니까?", options: ["jué dìng", "juè dìng", "jué dǐng", "jue dìng"], correctAnswer: "jué dìng", explanation: "jué(2), dìng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'决定'의 성조 조합은 무엇입니까?", options: ["2-4", "4-4", "2-3", "1-4"], correctAnswer: "2-4", explanation: "jué(2) + dìng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'决定'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "'那…的决定'로 '무엇'(결정)을 가리킵니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["那为我对抗世界的", "决定，", "那陪我淋的雨。", "那为我"], correctAnswer: "那为我对抗世界的决定，那陪我淋的雨。", explanation: "'…的决定'가 앞 구의 핵심 명사입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'淋雨'의 올바른 병음은 무엇입니까?", options: ["lín yǔ", "lǐn yǔ", "lín yù", "lin yǔ"], correctAnswer: "lín yǔ", explanation: "lín(2), yǔ(3)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'淋雨'의 성조 조합은 무엇입니까?", options: ["2-3", "3-3", "2-4", "1-3"], correctAnswer: "2-3", explanation: "lín(2) + yǔ(3)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'淋雨'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "시간 표현", "수량 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "'비를 맞다'라는 경험/행동을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["那陪我", "淋的雨。", "那为我对抗世界的决定，", "陪我淋的"], correctAnswer: "那为我对抗世界的决定，那陪我淋的雨。", explanation: "'陪我淋的雨'는 '나와 함께 맞은 비'입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 29,
    questions: [
      { type: "multipleChoice", question: "'一幕幕'의 올바른 병음은 무엇입니까?", options: ["yí mù mù", "yì mù mù", "yí mú mù", "yi mù mù"], correctAnswer: "yí mù mù", explanation: "yí(2), mù(4), mù(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'一幕幕'의 성조 조합은 무엇입니까?", options: ["2-4-4", "4-4-4", "2-2-4", "2-4-2"], correctAnswer: "2-4-4", explanation: "yí(2)-mù(4)-mù(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'一幕幕'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "문장 주어로서 '무엇이'(장면들)를 가리킵니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["一幕幕都是你，", "一尘不染的", "真心。", "都是你，"], correctAnswer: "一幕幕都是你，一尘不染的真心。", explanation: "쉼표 앞뒤 두 구를 원문대로 연결하세요.", difficulty: "medium" },
      { type: "multipleChoice", question: "'一尘不染'의 올바른 병음은 무엇입니까?", options: ["yì chén bù rǎn", "yí chén bù rǎn", "yì chēn bù rǎn", "yì chén bú rǎn"], correctAnswer: "yì chén bù rǎn", explanation: "4음절 성조를 모두 확인하세요.", difficulty: "hard" },
      { type: "multipleChoice", question: "'一尘不染'의 성조 조합은 무엇입니까?", options: ["4-2-4-3", "2-2-4-3", "4-1-4-3", "4-2-2-3"], correctAnswer: "4-2-4-3", explanation: "yì(4)-chén(2)-bù(4)-rǎn(3)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'一尘不染'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "'真心'을 수식하며 '흠 없는 상태'를 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["一幕幕都是你，", "真心。", "一尘不染的", "都是你，"], correctAnswer: "一幕幕都是你，一尘不染的真心。", explanation: "'一尘不染的'는 뒤의 명사(真心)를 꾸밉니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'真心'의 올바른 병음은 무엇입니까?", options: ["zhēn xīn", "zhén xīn", "zhēn xín", "zhen xīn"], correctAnswer: "zhēn xīn", explanation: "둘 다 1성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'真心'의 성조 조합은 무엇입니까?", options: ["1-1", "2-1", "1-2", "1-3"], correctAnswer: "1-1", explanation: "zhēn(1) + xīn(1)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'真心'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "앞의 수식(一尘不染的)을 받는 핵심 명사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["一尘不染的", "真心。", "一幕幕都是你，", "都是你，"], correctAnswer: "一幕幕都是你，一尘不染的真心。", explanation: "앞 절 후반에 명사구가 이어집니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 30,
    questions: [
      { type: "multipleChoice", question: "'相遇'의 올바른 병음은 무엇입니까?", options: ["xiāng yù", "xiáng yù", "xiāng yǔ", "xiang yù"], correctAnswer: "xiāng yù", explanation: "xiāng(1), yù(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'相遇'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-3", "4-4"], correctAnswer: "1-4", explanation: "xiāng(1) + yù(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'相遇'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'만나다'라는 행위를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["与你", "相遇，", "好幸运。", "与你相遇，"], correctAnswer: "与你相遇，好幸运。", explanation: "전치사구(与你) + 동사(相遇) 뒤에 감탄이 옵니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 31,
    questions: [
      { type: "multipleChoice", question: "'泪流满面'의 올바른 병음은 무엇입니까?", options: ["lèi liú mǎn miàn", "lěi liú mǎn miàn", "lèi liǔ mǎn miàn", "lèi liú màn miàn"], correctAnswer: "lèi liú mǎn miàn", explanation: "4음절 성조(4-2-3-4)를 확인하세요.", difficulty: "hard" },
      { type: "multipleChoice", question: "'泪流满面'의 성조 조합은 무엇입니까?", options: ["4-2-3-4", "4-3-3-4", "2-2-3-4", "4-2-4-4"], correctAnswer: "4-2-3-4", explanation: "lèi(4)-liú(2)-mǎn(3)-miàn(4)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'泪流满面'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "장소 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "'어떤 상태로'(눈물이 가득한 상태)인지 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["可我也", "失去", "为你", "泪流满面的", "权利。"], correctAnswer: "可我也失去为你泪流满面的权利。", explanation: "핵심 동사(失去) 뒤에 '…的权利'가 옵니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'权利'의 올바른 병음은 무엇입니까?", options: ["quán lì", "quǎn lì", "quán lí", "quan lì"], correctAnswer: "quán lì", explanation: "quán(2), lì(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'权利'의 성조 조합은 무엇입니까?", options: ["2-4", "3-4", "2-2", "1-4"], correctAnswer: "2-4", explanation: "quán(2) + lì(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'权利'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "'失去'의 목적어(무엇을 잃었는가)입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["失去", "为你泪流满面的", "权利。", "可我也"], correctAnswer: "可我也失去为你泪流满面的权利。", explanation: "목적어가 길어도 '…的权利'는 끝에 옵니다.", difficulty: "medium" }
    ]
  },
  { sentenceIndex: 32, questions: [] },
  {
    sentenceIndex: 33,
    questions: [
      { type: "multipleChoice", question: "'遇见'의 올바른 병음은 무엇입니까?", options: ["yù jiàn", "yǔ jiàn", "yù jiān", "yu jiàn"], correctAnswer: "yù jiàn", explanation: "yù(4), jiàn(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'遇见'의 성조 조합은 무엇입니까?", options: ["4-4", "3-4", "4-1", "2-4"], correctAnswer: "4-4", explanation: "yù(4) + jiàn(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'遇见'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'만나다'라는 행동을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["遇见", "你的", "注定。", "遇见你的"], correctAnswer: "遇见你的注定。", explanation: "'你的'가 뒤 명사(注定)를 수식합니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'注定'의 올바른 병음은 무엇입니까?", options: ["zhù dìng", "zhú dìng", "zhù dǐng", "zhu dìng"], correctAnswer: "zhù dìng", explanation: "zhù(4), dìng(4)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'注定'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-3", "1-4"], correctAnswer: "4-4", explanation: "zhù(4) + dìng(4)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'注定'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "문장 핵심 명사로 '운명/정해짐'을 가리킵니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["你的", "注定。", "遇见"], correctAnswer: "遇见你的注定。", explanation: "원문은 짧은 명사구 형태입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 34,
    questions: [
      { type: "multipleChoice", question: "'幸运'의 올바른 병음은 무엇입니까?", options: ["xìng yùn", "xīng yùn", "xìng yǔn", "xing yùn"], correctAnswer: "xìng yùn", explanation: "두 음절 모두 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'幸运'의 성조 조합은 무엇입니까?", options: ["4-4", "1-4", "4-3", "2-4"], correctAnswer: "4-4", explanation: "xìng(4) + yùn(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'幸运'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "'얼마나 행운인지'라는 상태를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["她", "会有", "多", "幸运。", "多幸运。"], correctAnswer: "她会有多幸运。", explanation: "'多+형용사'로 정도를 묻는 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 35,
    questions: [
      { type: "multipleChoice", question: "'赞'의 올바른 병음은 무엇입니까?", options: ["zàn", "zhàn", "zǎn", "zān"], correctAnswer: "zàn", explanation: "赞의 병음은 zàn입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'赞'의 성조는 무엇입니까?", options: ["4", "2", "3", "1"], correctAnswer: "4", explanation: "赞은 4성 글자입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'赞'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "대상 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "'좋아요를 누르다'라는 행위를 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["如果你", "觉得好，", "就按个赞吧。"], correctAnswer: "如果你觉得好，就按个赞吧。", explanation: "가정(如果) + 결과(就) 구조의 문장입니다.", difficulty: "easy" }
    ]
  }
];

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const sentencePractice = xiaoxingyunPracticeData.find(sp => sp.sentenceIndex === sentenceIndex);
  return sentencePractice ? sentencePractice.questions : [];
}



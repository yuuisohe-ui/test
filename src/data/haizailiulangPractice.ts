// 还在流浪词汇训练题海战术数据
import { PracticeQuestion, SentencePractice } from './tianmimiPractice';

export const haizailiulangPracticeData: SentencePractice[] = [
  {
    sentenceIndex: 1,
    questions: [
      { type: "multipleChoice", question: "'散落'의 올바른 병음은 무엇입니까?", options: ["sàn luò", "sān luò", "sàn luó", "sān luó"], correctAnswer: "sàn luò", explanation: "散落의 발음은 sàn luò(4성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'散落'의 성조 조합은 무엇입니까?", options: ["4-4", "4-2", "3-4", "1-4"], correctAnswer: "4-4", explanation: "sàn(4성)과 luò(4성)가 결합된 형태입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'散落'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "수량 표현", "대상 표현"], correctAnswer: "동작 표현", explanation: "문장에서 캔이 흩어져 있는 상태나 동작을 나타내는 술어로 쓰였습니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["啤酒空罐", "散落在", "地上。"], correctAnswer: "啤酒空罐散落在地上。", explanation: "주어(啤酒空罐) + 술어(散落在) + 장소(地上) 순서로 배열합니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 2,
    questions: [
      { type: "multipleChoice", question: "'报废'의 올바른 병음은 무엇입니까?", options: ["bào fèi", "bǎo fèi", "bào fēi", "báo fèi"], correctAnswer: "bào fèi", explanation: "报废의 발음은 bào fèi(4성-4성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'报废'의 성조 조합은 무엇입니까?", options: ["4-4", "4-3", "2-4", "4-1"], correctAnswer: "4-4", explanation: "bào(4성)와 fèi(4성)가 결합된 성조입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'报废'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "장소 표현", "동작 표현", "시간 표현"], correctAnswer: "상태 묘사", explanation: "차의 상태(폐기됨)를 꾸며주는 관형어 역할을 합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["那辆", "报废的车", "停在", "路旁。"], correctAnswer: "那辆报废的车停在路旁。", explanation: "지시사+양사(那辆) + 수식어(报废的车) + 술어부(停在路旁) 순입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 3,
    questions: [
      { type: "multipleChoice", question: "'无所谓'의 올바른 병음은 무엇입니까?", options: ["wú suǒ wèi", "wǔ suǒ wèi", "wú suō wèi", "wù suǒ wéi"], correctAnswer: "wú suǒ wèi", explanation: "无所谓의 발음은 wú suǒ wèi(2성-3성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'无所谓'의 성조 조합은 무엇입니까?", options: ["2-3-4", "2-2-4", "1-3-4", "2-3-2"], correctAnswer: "2-3-4", explanation: "wú(2성), suǒ(3성), wèi(4성) 순서입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'无所谓'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "표정의 성질이나 상태를 설명하는 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他是", "一脸", "无所谓的", "表情。"], correctAnswer: "他是一脸无所谓的表情。", explanation: "주어+동사(他是) + 수량(一脸) + 형용사구(无所谓的) + 목적어(表情) 순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 4,
    questions: [
      { type: "multipleChoice", question: "'缓慢'의 올바른 병음은 무엇입니까?", options: ["huǎn màn", "huán màn", "huǎn mān", "huàn màn"], correctAnswer: "huǎn màn", explanation: "缓慢의 발음은 huǎn màn(3성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'缓慢'의 성조 조합은 무엇입니까?", options: ["3-4", "2-4", "3-1", "4-4"], correctAnswer: "3-4", explanation: "huǎn(3성)과 màn(4성)이 만난 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'缓慢'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "도시의 보폭(속도)이 어떠한지 설명하는 술어 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["城市步调", "是如此的", "缓慢。"], correctAnswer: "城市步调是如此的缓慢。", explanation: "주어(城市步调) + 강조구(是如此的) + 술어(缓慢) 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 5,
    questions: [
      { type: "multipleChoice", question: "'闪烁'의 올바른 병음은 무엇입니까?", options: ["shǎn shuò", "shān shuò", "shǎn suò", "shàn shuō"], correctAnswer: "shǎn shuò", explanation: "闪烁의 발음은 shǎn shuò(3성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'闪烁'의 성조 조합은 무엇입니까?", options: ["3-4", "3-1", "1-4", "2-4"], correctAnswer: "3-4", explanation: "shǎn(3성)과 shuò(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'闪烁'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "상태 묘사", "대상 표현"], correctAnswer: "동작 표현", explanation: "네온사인이 빛나는 동작/현상을 나타내는 술어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["霓虹灯", "在夜里", "闪烁。"], correctAnswer: "霓虹灯在夜里闪烁。", explanation: "주어(霓虹灯) + 시간/장소부사어(在夜里) + 술어(闪烁) 순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 6,
    questions: [
      { type: "multipleChoice", question: "'错过'의 올바른 병음은 무엇입니까?", options: ["cuò guò", "cuō guò", "cuò guō", "cuó guò"], correctAnswer: "cuò guò", explanation: "错过의 발음은 cuò guò(4성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'错过'의 성조 조합은 무엇입니까?", options: ["4-4", "1-4", "4-1", "2-4"], correctAnswer: "4-4", explanation: "cuò(4성)와 guò(4성)가 결합되었습니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'错过'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "기회를 잃거나 놓치는 동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["不要", "错过", "美好的时光。"], correctAnswer: "不要错过美好的时光。", explanation: "금지 부사(不要) + 술어(错过) + 목적어(美好的时光) 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 7,
    questions: [
      { type: "multipleChoice", question: "'空旷'의 올바른 병음은 무엇입니까?", options: ["kōng kuàng", "kòng kuàng", "kōng kuāng", "kóng kuàng"], correctAnswer: "kōng kuàng", explanation: "空旷의 발음은 kōng kuàng(1성-4성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'空旷'의 성조 조합은 무엇입니까?", options: ["1-4", "4-4", "1-1", "2-4"], correctAnswer: "1-4", explanation: "kōng(1성)과 kuàng(4성)의 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'空旷'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "장소 표현", "동작 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "차량 내부의 넓고 텅 빈 상태를 꾸며주는 역할을 합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["空旷的", "车厢里", "人很少。"], correctAnswer: "空旷的车厢里人很少。", explanation: "관형어(空旷的) + 장소주어(车厢里) + 술어(人很少) 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 8,
    questions: [
      { type: "multipleChoice", question: "'怀念'의 올바른 병음은 무엇입니까?", options: ["huái niàn", "huài niàn", "huái nián", "huāi niàn"], correctAnswer: "huái niàn", explanation: "怀念의 발음은 huái niàn(2성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'怀念'의 성조 조합은 무엇입니까?", options: ["2-4", "4-4", "2-2", "1-4"], correctAnswer: "2-4", explanation: "huái(2성)와 niàn(4성)이 결합된 성조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'怀念'는 위 문장에서 어떤 역할을 합니까?", options: ["경험 표현", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "동작 표현", explanation: "과거를 그리워하는 심리적 동작을 나타내는 술어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我", "很怀念", "从前的朋友。"], correctAnswer: "我很怀念从前的朋友。", explanation: "주어(我) + 술어(很怀念) + 목적어(从前的朋友) 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 9,
    questions: [
      { type: "multipleChoice", question: "'招牌'의 올바른 병음은 무엇입니까?", options: ["zhāo pai", "zhǎo pái", "zhào pái", "zhāo pái"], correctAnswer: "zhāo pai", explanation: "招牌의 발음은 zhāo pai(1성-경성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'招牌'의 성조 조합은 무엇입니까?", options: ["1-0", "1-2", "3-2", "4-2"], correctAnswer: "1-0", explanation: "zhāo(1성)와 pai(경성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'招牌'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "문장의 주어로서 특정 사물을 가리키는 대상 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["那家店的", "招牌", "很亮。"], correctAnswer: "那家店的招牌很亮。", explanation: "관형어(那家店的) + 주어(招牌) + 술어(很亮) 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 10,
    questions: [
      { type: "multipleChoice", question: "'异乡'의 올바른 병음은 무엇입니까?", options: ["yì xiāng", "yí xiāng", "yì xiàng", "yí xiàng"], correctAnswer: "yì xiāng", explanation: "异乡의 발음은 yì xiāng(4성-1성)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'异乡'의 성조 조합은 무엇입니까?", options: ["4-1", "4-4", "2-1", "3-1"], correctAnswer: "4-1", explanation: "yì(4성)와 xiāng(1성)이 만난 성조입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'异乡'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "동작 표현", "상태 묘사", "수량 표현"], correctAnswer: "장소 표현", explanation: "어떤 행위가 이루어지는 공간적 배경을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他在", "异乡", "独自生活。"], correctAnswer: "他在异乡独自生活。", explanation: "주어+전치사(他在) + 장소(异乡) + 부사+동사(独自生活) 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 11,
    questions: [
      { type: "multipleChoice", question: "'决定'의 올바른 병음은 무엇입니까?", options: ["jué dìng", "jué dīng", "juě dìng", "juè dìng"], correctAnswer: "jué dìng", explanation: "决定의 발음은 jué dìng(2성-4성)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'决定'의 성조 조합은 무엇입니까?", options: ["2-4", "2-1", "3-4", "4-4"], correctAnswer: "2-4", explanation: "jué(2성)와 dìng(4성)의 조합입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'决定'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "상태 묘사", "대상 표현"], correctAnswer: "동작 표현", explanation: "의사 결정을 내리는 주된 동작을 나타내는 술어입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我", "决定", "离开这个地方。"], correctAnswer: "我决定离开这个地方。", explanation: "주어(我) + 술어(决定) + 목적어(离开这个地方) 순서입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 12,
    questions: [
      { type: "multipleChoice", question: "'流浪'의 올바른 병음은 무엇입니까?", options: ["liú làng", "liǔ làng", "liú láng", "liū làng"], correctAnswer: "liú làng", explanation: "流浪의 발음은 liú làng(2성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'流浪'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "1-4", "3-4"], correctAnswer: "2-4", explanation: "liú(2성)와 làng(4성)의 결합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'流浪'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "정처 없이 떠도는 행위를 나타내는 술어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "一个人", "在外面", "流浪。"], correctAnswer: "他一个人在外面流浪。", explanation: "주어 + 수량부사어(一个人) + 장소부사어(在外面) + 술어(流浪) 순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 13,
    questions: [
      { type: "multipleChoice", question: "'约定'의 올바른 병음은 무엇입니까?", options: ["yuē dìng", "yuè dìng", "yuē dīng", "yūe dìng"], correctAnswer: "yuē dìng", explanation: "约定의 발음은 yuē dìng(1성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'约定'의 성조 조합은 무엇입니까?", options: ["1-4", "4-4", "1-1", "2-4"], correctAnswer: "1-4", explanation: "yuē(1성)와 dìng(4성)의 결합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'约定'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "대상 표현"], correctAnswer: "동작 표현", explanation: "서로 약속을 하는 동작을 나타내는 술어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们", "约定", "在车站", "见面。"], correctAnswer: "我们约定在车站见面。", explanation: "주어 + 술어(约定) + 장소+동사(在车站见面) 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 14,
    questions: [
      { type: "multipleChoice", question: "'模样'의 올바른 병음은 무엇입니까?", options: ["mú yàng", "mó yàng", "mǔ yàng", "mù yàng"], correctAnswer: "mú yàng", explanation: "模样에서 模의 발음은 여기서 mú(2성)로 읽습니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'模样'의 성조 조합은 무엇입니까?", options: ["2-4", "1-4", "3-4", "4-4"], correctAnswer: "2-4", explanation: "mú(2성)와 yàng(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'模样'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "기억하는 대상이 되는 목적어 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我", "依然记得", "你的模样。"], correctAnswer: "我依然记得你的模样。", explanation: "주어 + 부사+동사(依然记得) + 목적어(你的模样) 순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 15,
    questions: [
      { type: "multipleChoice", question: "'亲爱'의 올바른 병음은 무엇입니까?", options: ["qīn ài", "qǐn ài", "qīn āi", "qìng ài"], correctAnswer: "qīn ài", explanation: "亲爱의 발음은 qīn ài(1성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'亲爱'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "3-4", "4-4"], correctAnswer: "1-4", explanation: "qīn(1성)과 ài(4성)가 만난 성조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'亲爱'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "호칭 앞에 쓰여 친밀한 관계를 나타내는 관형어/독립어 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["亲爱的，", "你好", "吗？"], correctAnswer: "亲爱的，你好吗？", explanation: "호칭(亲爱的) + 안부 인사(你好吗) 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 16,
    questions: [
      { type: "multipleChoice", question: "'流浪'의 올바른 병음은 무엇입니까?", options: ["liú làng", "liù làng", "liú láng", "liǔ láng"], correctAnswer: "liú làng", explanation: "流浪의 발음은 liú làng(2성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'流浪'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "1-4", "4-4"], correctAnswer: "2-4", explanation: "liú(2성)와 làng(4성)이 결합되었습니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'流浪'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "상태 묘사", "시간 표현"], correctAnswer: "동작 표현", explanation: "문장의 마지막에서 현재의 상태나 행위를 나타내는 술어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["当你收到信，", "我还在", "流浪。"], correctAnswer: "当你收到信，我还在流浪。", explanation: "시간절(当你收到信) + 주어+부사(我还在) + 술어(流浪) 순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 17,
    questions: [
      { type: "multipleChoice", question: "'小巷'의 올바른 병음은 무엇입니까?", options: ["xiǎo xiàng", "xiǎo xiāng", "xiāo xiàng", "xiào xiāng"], correctAnswer: "xiǎo xiàng", explanation: "小巷의 발음은 xiǎo xiàng(3성-4성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'小巷'의 성조 조합은 무엇입니까?", options: ["3-4", "3-1", "2-4", "4-4"], correctAnswer: "3-4", explanation: "xiǎo(3성)와 xiàng(4성)의 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'小巷'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "동작 표현", "상태 묘사", "대상 표현"], correctAnswer: "장소 표현", explanation: "지나가는 공간적 배경인 장소를 나타내는 목적어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们", "走过那条", "安静的", "小巷。"], correctAnswer: "我们走过那条安静的小巷。", explanation: "주어 + 술어+양사(走过那条) + 수식어(安静的) + 목적어(小巷) 순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 18,
    questions: [
      { type: "multipleChoice", question: "'依然'의 올바른 병음은 무엇입니까?", options: ["yī rán", "yí rán", "yī rǎn", "yí ràn"], correctAnswer: "yī rán", explanation: "依然의 발음은 yī rán(1성-2성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'依然'의 성조 조합은 무엇입니까?", options: ["1-2", "1-3", "2-2", "4-2"], correctAnswer: "1-2", explanation: "yī(1성)와 rán(2성)의 결합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'依然'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "동사(记得) 앞에서 상황이 지속됨을 나타내는 부사어 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我", "依然", "记得", "那件事。"], correctAnswer: "我依然记得那件事。", explanation: "주어 + 부사(依然) + 술어(记得) + 목적어(那件事) 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 19,
    questions: [
      { type: "multipleChoice", question: "'爱心'의 올바른 병음은 무엇입니까?", options: ["ài xīn", "ǎi xīn", "āi xīn", "ài xíng"], correctAnswer: "ài xīn", explanation: "爱心의 발음은 ài xīn(4성-1성)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'爱心'의 성조 조합은 무엇입니까?", options: ["4-1", "4-4", "1-1", "2-1"], correctAnswer: "4-1", explanation: "ài(4성)와 xīn(1성)이 만난 성조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'爱心'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "상태 묘사", "장소 표현"], correctAnswer: "대상 표현", explanation: "그리는 행위의 대상이 되는 목적어 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["在墙上", "画一个", "爱心。"], correctAnswer: "在墙上画一个爱心。", explanation: "장소부사어(在墙上) + 술어부(画一个) + 목적어(爱心) 순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 20,
    questions: [
      { type: "multipleChoice", question: "'闪烁'의 올바른 병음은 무엇입니까?", options: ["shǎn shuò", "shàn shuò", "shǎn suò", "shan shuò"], correctAnswer: "shǎn shuò", explanation: "두 음절의 성조(3-4)를 확인하세요.", difficulty: "medium" },
      { type: "multipleChoice", question: "'闪烁'의 성조 조합은 무엇입니까?", options: ["3-4", "4-4", "3-2", "2-4"], correctAnswer: "3-4", explanation: "shǎn(3) + shuò(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'闪烁'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "상태 묘사", explanation: "'倒影'의 상태(깜빡임)를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["靠在窗上。", "霓虹灯", "闪烁的倒影", "霓虹灯闪烁的倒影"], correctAnswer: "霓虹灯闪烁的倒影靠在窗上。", explanation: "수식어(闪烁的)가 명사(倒影) 앞에 옵니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 21,
    questions: [
      { type: "multipleChoice", question: "'错过'의 올바른 병음은 무엇입니까?", options: ["cuò guò", "cuó guò", "cuò guǒ", "cuo guò"], correctAnswer: "cuò guò", explanation: "두 음절 모두 4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'错过'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-3", "3-4"], correctAnswer: "4-4", explanation: "cuò(4) + guò(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'错过'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "시간 표현", "대상 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "'놓치다'라는 행동을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["错过", "美好的", "那时光。", "美好的那时光。"], correctAnswer: "错过美好的那时光。", explanation: "동사(错过) 뒤에 목적어가 옵니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 22,
    questions: [
      { type: "multipleChoice", question: "'空旷'의 올바른 병음은 무엇입니까?", options: ["kōng kuàng", "kǒng kuàng", "kōng kuǎng", "kong kuàng"], correctAnswer: "kōng kuàng", explanation: "kōng(1), kuàng(4)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'空旷'의 성조 조합은 무엇입니까?", options: ["1-4", "3-4", "1-3", "2-4"], correctAnswer: "1-4", explanation: "kōng(1) + kuàng(4)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'空旷'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "장소 표현", "동작 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "'车厢里'의 상태(텅 비고 넓음)를 말합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["车厢里", "非常", "空旷。", "车厢里非常"], correctAnswer: "车厢里非常空旷。", explanation: "장소(车厢里) + 정도(非常) + 형용사(空旷)입니다.", difficulty: "hard" },
    ]
  },
  {
    sentenceIndex: 23,
    questions: [
      { type: "multipleChoice", question: "'怀念'의 올바른 병음은 무엇입니까?", options: ["huái niàn", "huài niàn", "huái niǎn", "huai niàn"], correctAnswer: "huái niàn", explanation: "성조(2-4)와 분절을 확인하세요.", difficulty: "medium" },
      { type: "multipleChoice", question: "'怀念'의 성조 조합은 무엇입니까?", options: ["2-4", "4-4", "2-3", "1-4"], correctAnswer: "2-4", explanation: "huái(2) + niàn(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'怀念'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "'그리워하다'라는 행위를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["怀念", "从前的", "人来人往。", "从前的人来人往。"], correctAnswer: "怀念从前的人来人往。", explanation: "동사(怀念) + 목적어 구조입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 24,
    questions: [
      { type: "multipleChoice", question: "'招牌'의 올바른 병음은 무엇입니까?", options: ["zhāo pai", "zhǎo pai", "zhāo pái", "zhao pai"], correctAnswer: "zhāo pai", explanation: "招牌의 '牌'는 보통 경성으로 읽습니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'招牌'의 성조 조합은 무엇입니까?", options: ["1-0", "3-0", "1-2", "1-4"], correctAnswer: "1-0", explanation: "zhāo(1) + pai(경성=0)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'招牌'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "동작 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "'灯光'이 달린 대상(招牌)을 가리킵니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["路边的", "招牌", "灯光", "微亮。", "招牌灯光"], correctAnswer: "路边的招牌灯光微亮。", explanation: "수식(路边的) + 명사구(招牌灯光) + 서술(微亮)입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 25,
    questions: [
      { type: "multipleChoice", question: "'异乡'의 올바른 병음은 무엇입니까?", options: ["yì xiāng", "yí xiāng", "yì xiǎng", "yi xiāng"], correctAnswer: "yì xiāng", explanation: "yì(4) + xiāng(1)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'异乡'의 성조 조합은 무엇입니까?", options: ["4-1", "2-1", "4-3", "4-4"], correctAnswer: "4-1", explanation: "yì(4) + xiāng(1)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'异乡'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "대상 표현", "동작 표현", "시간 표현"], correctAnswer: "장소 표현", explanation: "'留在异乡'에서 '어디에 머무는가'를 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["留在", "异乡", "是一个", "艰难的决定。", "是一个艰难的决定。"], correctAnswer: "留在异乡是一个艰难的决定。", explanation: "'留在+장소' 뒤에 판단문이 옵니다.", difficulty: "hard" },
    ]
  },
  {
    sentenceIndex: 26,
    questions: [
      { type: "multipleChoice", question: "'决定'의 올바른 병음은 무엇입니까?", options: ["jué dìng", "juè dìng", "jué dǐng", "jue dìng"], correctAnswer: "jué dìng", explanation: "jué(2) + dìng(4)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'决定'의 성조 조합은 무엇입니까?", options: ["2-4", "4-4", "2-3", "1-4"], correctAnswer: "2-4", explanation: "jué(2) + dìng(4)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'决定'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "주어(我)가 '결정하다'라는 행동을 합니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["搬家。", "我", "决定", "我决定"], correctAnswer: "我决定搬家。", explanation: "주어 + 동사 + 목적어 구조입니다.", difficulty: "easy" },
    ]
  },
  {
    sentenceIndex: 27,
    questions: [
      { type: "multipleChoice", question: "'流浪'의 올바른 병음은 무엇입니까?", options: ["liú làng", "liǔ làng", "liú lǎng", "liu làng"], correctAnswer: "liú làng", explanation: "liú(2) + làng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'流浪'의 성조 조합은 무엇입니까?", options: ["2-4", "3-4", "2-3", "1-4"], correctAnswer: "2-4", explanation: "liú(2) + làng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'流浪'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'방랑하다'라는 행동을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我还在", "外面", "流浪。", "在外面流浪。"], correctAnswer: "我还在外面流浪。", explanation: "부사(还) + 장소(在外面) + 동사(流浪)입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 28,
    questions: [
      { type: "multipleChoice", question: "'约定'의 올바른 병음은 무엇입니까?", options: ["yuē dìng", "yuè dìng", "yuē dǐng", "yue dìng"], correctAnswer: "yuē dìng", explanation: "yuē(1) + dìng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'约定'의 성조 조합은 무엇입니까?", options: ["1-4", "4-4", "1-3", "2-4"], correctAnswer: "1-4", explanation: "yuē(1) + dìng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'约定'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "'忘'의 목적어(무엇을 잊지 말아야 하나)입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["别忘了", "那年的", "约定。", "那年的约定。"], correctAnswer: "别忘了那年的约定。", explanation: "금지/당부(别) + 동사(忘) + 목적어입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 29,
    questions: [
      { type: "multipleChoice", question: "'模样'의 올바른 병음은 무엇입니까?", options: ["mú yàng", "mó yàng", "mú yǎng", "mu yàng"], correctAnswer: "mú yàng", explanation: "mú(2) + yàng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'模样'의 성조 조합은 무엇입니까?", options: ["2-4", "2-3", "4-4", "3-4"], correctAnswer: "2-4", explanation: "mú(2) + yàng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'模样'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "'最好看'의 주된 대상(모습)입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["你", "微笑的", "模样", "最好看。", "微笑的模样"], correctAnswer: "你微笑的模样最好看。", explanation: "'微笑的'가 '模样'을 수식합니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 30,
    questions: [
      { type: "multipleChoice", question: "'亲爱'의 올바른 병음은 무엇입니까?", options: ["qīn ài", "qín ài", "qīn ǎi", "qin ài"], correctAnswer: "qīn ài", explanation: "qīn(1) + ài(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'亲爱'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-3", "4-4"], correctAnswer: "1-4", explanation: "qīn(1) + ài(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'亲爱'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "호칭으로 상대(대상)를 부릅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["保重身体。", "亲爱的，", "亲爱的", "，保重身体。"], correctAnswer: "亲爱的，保重身体。", explanation: "호칭 뒤에 쉼표, 이어서 당부가 옵니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 31,
    questions: [
      { type: "multipleChoice", question: "'流浪'의 올바른 병음은 무엇입니까?", options: ["liú làng", "liǔ làng", "liú lǎng", "liu làng"], correctAnswer: "liú làng", explanation: "liú(2) + làng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'流浪'의 성조 조합은 무엇입니까?", options: ["2-4", "3-4", "2-3", "1-4"], correctAnswer: "2-4", explanation: "liú(2) + làng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'流浪'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "'日子'를 수식하며 '방랑하는' 상태를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["流浪的", "日子", "并不好过。", "日子并不好过。"], correctAnswer: "流浪的日子并不好过。", explanation: "'…的'로 명사를 수식합니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 32,
    questions: [
      { type: "multipleChoice", question: "'小巷'의 올바른 병음은 무엇입니까?", options: ["xiǎo xiàng", "xiáo xiàng", "xiǎo xiāng", "xiao xiàng"], correctAnswer: "xiǎo xiàng", explanation: "xiǎo(3) + xiàng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'小巷'의 성조 조합은 무엇입니까?", options: ["3-4", "2-4", "3-1", "4-4"], correctAnswer: "3-4", explanation: "xiǎo(3) + xiàng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'小巷'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "동작 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "문장 주어(무엇이 추억으로 가득한가)입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这条", "小巷", "充满", "回忆。", "充满回忆。"], correctAnswer: "这条小巷充满回忆。", explanation: "주어 + 동사 + 목적어 구조입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 33,
    questions: [
      { type: "multipleChoice", question: "'依然'의 올바른 병음은 무엇입니까?", options: ["yī rán", "yí rán", "yī rǎn", "yi rán"], correctAnswer: "yī rán", explanation: "yī(1) + rán(2)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'依然'의 성조 조합은 무엇입니까?", options: ["1-2", "2-2", "1-3", "1-4"], correctAnswer: "1-2", explanation: "yī(1) + rán(2)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'依然'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "'여전히'로 상태의 지속을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这么多年", "他", "依然", "没变。", "依然没变。"], correctAnswer: "这么多年他依然没变。", explanation: "시간(这么多年) + 주어 + 부사(依然) 순서입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 34,
    questions: [
      { type: "multipleChoice", question: "'爱心'의 올바른 병음은 무엇입니까?", options: ["ài xīn", "ái xīn", "ài xín", "ai xīn"], correctAnswer: "ài xīn", explanation: "ài(4) + xīn(1)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'爱心'의 성조 조합은 무엇입니까?", options: ["4-1", "2-1", "4-2", "3-1"], correctAnswer: "4-1", explanation: "ài(4) + xīn(1)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'爱心'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "'画了'의 목적어(무엇을 그렸는가)입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们", "一起", "画了", "爱心。", "一起画了"], correctAnswer: "我们一起画了爱心。", explanation: "부사(一起) 뒤에 동사(画了)가 옵니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 35,
    questions: [
      { type: "multipleChoice", question: "'流浪'의 올바른 병음은 무엇입니까?", options: ["liú làng", "liǔ làng", "liú lǎng", "liu làng"], correctAnswer: "liú làng", explanation: "liú(2) + làng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'流浪'의 성조 조합은 무엇입니까?", options: ["2-4", "3-4", "2-3", "1-4"], correctAnswer: "2-4", explanation: "liú(2) + làng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'流浪'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "문장 주어로서 '무엇은…'에 해당합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["流浪", "是为了", "寻找", "自我。", "寻找自我。"], correctAnswer: "流浪是为了寻找自我。", explanation: "'是为了…'는 목적을 나타냅니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 36,
    questions: [
      { type: "multipleChoice", question: "'约定'의 올바른 병음은 무엇입니까?", options: ["yuē dìng", "yuè dìng", "yuē dǐng", "yue dìng"], correctAnswer: "yuē dìng", explanation: "yuē(1) + dìng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'约定'의 성조 조합은 무엇입니까?", options: ["1-4", "4-4", "1-3", "2-4"], correctAnswer: "1-4", explanation: "yuē(1) + dìng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'约定'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "'这是…'의 핵심 명사로 대상(약속)을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这是", "我们之间的", "约定。", "之间的约定。"], correctAnswer: "这是我们之间的约定。", explanation: "지시(这是) + 수식(我们之间的) + 명사입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 37,
    questions: [
      { type: "multipleChoice", question: "'模样'의 올바른 병음은 무엇입니까?", options: ["mú yàng", "mó yàng", "mú yǎng", "mu yàng"], correctAnswer: "mú yàng", explanation: "mú(2) + yàng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'模样'의 성조 조합은 무엇입니까?", options: ["2-4", "2-3", "4-4", "3-4"], correctAnswer: "2-4", explanation: "mú(2) + yàng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'模样'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "'没变'의 주어로 '모습'을 말합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["模样", "没", "怎么", "变。", "没怎么变。"], correctAnswer: "模样没怎么变。", explanation: "부정(没) + 정도(怎么) + 동사(变)입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 38,
    questions: [
      { type: "multipleChoice", question: "'亲爱'의 올바른 병음은 무엇입니까?", options: ["qīn ài", "qín ài", "qīn ǎi", "qin ài"], correctAnswer: "qīn ài", explanation: "qīn(1) + ài(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'亲爱'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-3", "4-4"], correctAnswer: "1-4", explanation: "qīn(1) + ài(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'亲爱'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "호칭으로 상대를 부릅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["亲爱的，", "你", "在哪？", "你在哪？"], correctAnswer: "亲爱的，你在哪？", explanation: "호칭 + 쉼표 + 질문문입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 39,
    questions: [
      { type: "multipleChoice", question: "'流浪'의 올바른 병음은 무엇입니까?", options: ["liú làng", "liǔ làng", "liú lǎng", "liu làng"], correctAnswer: "liú làng", explanation: "liú(2) + làng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'流浪'의 성조 조합은 무엇입니까?", options: ["2-4", "3-4", "2-3", "1-4"], correctAnswer: "2-4", explanation: "liú(2) + làng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'流浪'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'방랑하다'라는 행동을 말합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "在世界各地", "流浪。", "世界各地流浪。"], correctAnswer: "他在世界各地流浪。", explanation: "장소(在世界各地) + 동사(流浪)입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 40,
    questions: [
      { type: "multipleChoice", question: "'小巷'의 올바른 병음은 무엇입니까?", options: ["xiǎo xiàng", "xiáo xiàng", "xiǎo xiāng", "xiao xiàng"], correctAnswer: "xiǎo xiàng", explanation: "xiǎo(3) + xiàng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'小巷'의 성조 조합은 무엇입니까?", options: ["3-4", "2-4", "3-1", "4-4"], correctAnswer: "3-4", explanation: "xiǎo(3) + xiàng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'小巷'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "시간 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "'穿过'의 목적어로 '골목'을 가리킵니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["穿过", "那条", "小巷", "就到了。", "那条小巷"], correctAnswer: "穿过那条小巷就到了。", explanation: "동사(穿过) 뒤에 목적어, 결과(就到了)가 옵니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 41,
    questions: [
      { type: "multipleChoice", question: "'依然'의 올바른 병음은 무엇입니까?", options: ["yī rán", "yí rán", "yī rǎn", "yi rán"], correctAnswer: "yī rán", explanation: "yī(1) + rán(2)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'依然'의 성조 조합은 무엇입니까?", options: ["1-2", "2-2", "1-3", "1-4"], correctAnswer: "1-2", explanation: "yī(1) + rán(2)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'依然'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "'여전히'로 기억이 계속됨을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我", "依然", "记得", "那年的雪。", "记得那年的雪。"], correctAnswer: "我依然记得那年的雪。", explanation: "주어 + 부사(依然) + 동사(记得)입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 42,
    questions: [
      { type: "multipleChoice", question: "'爱心'의 올바른 병음은 무엇입니까?", options: ["ài xīn", "ái xīn", "ài xín", "ai xīn"], correctAnswer: "ài xīn", explanation: "ài(4) + xīn(1)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'爱心'의 성조 조합은 무엇입니까?", options: ["4-1", "2-1", "4-2", "3-1"], correctAnswer: "4-1", explanation: "ài(4) + xīn(1)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'爱心'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "동작 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "'画'의 목적어(무엇을 그리는가)입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "在墙上", "画", "爱心。", "在墙上画"], correctAnswer: "他在墙上画爱心。", explanation: "주어 + 장소 + 동사 + 목적어 순서입니다.", difficulty: "medium" },
    ]
  },
];

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const sentencePractice = haizailiulangPracticeData.find(sp => sp.sentenceIndex === sentenceIndex);
  return sentencePractice ? sentencePractice.questions : [];
}



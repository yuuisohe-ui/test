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
      { type: "multipleChoice", question: "'清晰'의 올바른 병음은 무엇입니까?", options: ["qīng xī", "qíng xī", "qīn xí", "qīng xí"], correctAnswer: "qīng xī", explanation: "清晰는 qīng xī로 읽으며 1성+1성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'清晰'의 성조 조합은 무엇입니까?", options: ["1-1", "2-1", "1-2", "2-2"], correctAnswer: "1-1", explanation: "qīng(1성) xī(1성)이므로 성조 조합은 1-1입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'清晰'는 '这张照片拍得很清晰。'에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "清晰는 사진의 상태가 선명함을 묘사하는 형용사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["很清晰。", "这张照片", "拍得"], correctAnswer: "这张照片拍得很清晰。", explanation: "주어+동사+보어 구조: 这张照片 / 拍得 / 很清晰。", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 9,
    questions: [
      { type: "multipleChoice", question: "'呼吸'의 올바른 병음은 무엇입니까?", options: ["hū xī", "hú xī", "hū xí", "hú xí"], correctAnswer: "hū xī", explanation: "呼吸는 hū xī로 읽으며 1성+1성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'呼吸'의 성조 조합은 무엇입니까?", options: ["1-1", "2-1", "1-2", "2-2"], correctAnswer: "1-1", explanation: "hū(1성) xī(1성)이므로 성조 조합은 1-1입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'呼吸'는 '深呼吸可以让人放松。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "深呼吸는 '깊게 호흡하다'는 동작을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["可以让人放松。", "深呼吸", "让人"], correctAnswer: "深呼吸可以让人放松。", explanation: "주어(深呼吸)+술어(可以让人放松) 구조입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'渗入'의 올바른 병음은 무엇입니까?", options: ["shèn rù", "shěn rù", "shèn rú", "shén rù"], correctAnswer: "shèn rù", explanation: "渗入는 shèn rù로 읽으며 4성+4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'渗入'의 성조 조합은 무엇입니까?", options: ["4-4", "3-4", "4-2", "3-2"], correctAnswer: "4-4", explanation: "shèn(4성) rù(4성)이므로 성조 조합은 4-4입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'渗入'는 '雨水渗入了土壤。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "대상 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "渗入는 빗물이 토양에 스며드는 동작을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["雨水", "渗入了", "土壤。"], correctAnswer: "雨水渗入了土壤。", explanation: "주어(雨水)+동사(渗入了)+목적어(土壤) 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 10,
    questions: [
      { type: "multipleChoice", question: "'希望'의 올바른 병음은 무엇입니까?", options: ["xī wàng", "xí wàng", "xī wǎng", "xí wǎng"], correctAnswer: "xī wàng", explanation: "希望는 xī wàng로 읽으며 1성+4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'希望'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-3", "2-3"], correctAnswer: "1-4", explanation: "xī(1성) wàng(4성)이므로 성조 조합은 1-4입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'希望'는 '我希望明天天气好。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "希望는 화자의 바람·의지를 나타내는 동사입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我希望", "明天", "天气好。"], correctAnswer: "我希望明天天气好。", explanation: "주어+희망동사+시간어+목적절 구조입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 11,
    questions: [
      { type: "multipleChoice", question: "'想念'의 올바른 병음은 무엇입니까?", options: ["xiǎng niàn", "xiāng niàn", "xiǎng nián", "xiáng niàn"], correctAnswer: "xiǎng niàn", explanation: "想念는 xiǎng niàn으로 읽으며 3성+4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'想念'의 성조 조합은 무엇입니까?", options: ["3-4", "1-4", "3-2", "2-4"], correctAnswer: "3-4", explanation: "xiǎng(3성) niàn(4성)이므로 성조 조합은 3-4입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'想念'는 '我很想念在远方的朋友。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "想念는 그리워하는 심리적 동작을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我很想念", "在远方的", "朋友。"], correctAnswer: "我很想念在远方的朋友。", explanation: "주어+부사+동사+관형절+목적어 구조입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'透明'의 올바른 병음은 무엇입니까?", options: ["tòu míng", "tóu míng", "tòu mǐng", "tǒu míng"], correctAnswer: "tòu míng", explanation: "透明는 tòu míng으로 읽으며 4성+2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'透明'의 성조 조합은 무엇입니까?", options: ["4-2", "2-2", "4-1", "3-2"], correctAnswer: "4-2", explanation: "tòu(4성) míng(2성)이므로 성조 조합은 4-2입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'透明'는 '玻璃是透明的。'에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "透明는 유리의 물리적 상태를 묘사하는 형용사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["玻璃", "是透明的。"], correctAnswer: "玻璃是透明的。", explanation: "주어(玻璃)+是+형용사+的 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 12,
    questions: [
      { type: "multipleChoice", question: "'勇气'의 올바른 병음은 무엇입니까?", options: ["yǒng qì", "yóng qì", "yǒng qí", "yōng qì"], correctAnswer: "yǒng qì", explanation: "勇气는 yǒng qì로 읽으며 3성+4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'勇气'의 성조 조합은 무엇입니까?", options: ["3-4", "2-4", "3-2", "4-4"], correctAnswer: "3-4", explanation: "yǒng(3성) qì(4성)이므로 성조 조합은 3-4입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'勇气'는 '你需要勇气去说出真相。'에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "勇气는 需要의 목적어로 필요한 대상을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["你需要勇气", "去说出", "真相。"], correctAnswer: "你需要勇气去说出真相。", explanation: "주어+동사+목적어+부정사구 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 13,
    questions: [
      { type: "multipleChoice", question: "'雨滴'의 올바른 병음은 무엇입니까?", options: ["yǔ dī", "yú dī", "yǔ dí", "yù dī"], correctAnswer: "yǔ dī", explanation: "雨滴는 yǔ dī로 읽으며 3성+1성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'雨滴'의 성조 조합은 무엇입니까?", options: ["3-1", "2-1", "3-2", "4-1"], correctAnswer: "3-1", explanation: "yǔ(3성) dī(1성)이므로 성조 조합은 3-1입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'雨滴'는 '雨滴打在窗上，发出声音。'에서 어떤 역할을 합니까?", options: ["동작 주체 표현", "상태 묘사", "시간 표현", "수량 표현"], correctAnswer: "동작 주체 표현", explanation: "雨滴는 문장의 주어로 동작의 주체입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["雨滴", "打在窗上，", "发出声音。"], correctAnswer: "雨滴打在窗上，发出声音。", explanation: "주어(雨滴)+동사구+결과절 구조입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'累积'의 올바른 병음은 무엇입니까?", options: ["lěi jī", "léi jī", "lěi jí", "lèi jī"], correctAnswer: "lěi jī", explanation: "累积는 lěi jī로 읽으며 3성+1성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'累积'의 성조 조합은 무엇입니까?", options: ["3-1", "2-1", "4-1", "3-2"], correctAnswer: "3-1", explanation: "lěi(3성) jī(1성)이므로 성조 조합은 3-1입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'累积'는 '压力慢慢累积，让他感到疲惫。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "累积는 스트레스가 쌓여가는 동작·과정을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["压力慢慢累积，", "让他", "感到疲惫。"], correctAnswer: "压力慢慢累积，让他感到疲惫。", explanation: "원인절+사역구조(让+주어+동사) 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 14,
    questions: [
      { type: "multipleChoice", question: "'湿气'의 올바른 병음은 무엇입니까?", options: ["shī qì", "shí qì", "shī qí", "shǐ qì"], correctAnswer: "shī qì", explanation: "湿气는 shī qì로 읽으며 1성+4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'湿气'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-3", "3-4"], correctAnswer: "1-4", explanation: "shī(1성) qì(4성)이므로 성조 조합은 1-4입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'湿气'는 '梅雨季节湿气很重。'에서 어떤 역할을 합니까?", options: ["동작 주체 표현", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "동작 주체 표현", explanation: "湿气는 문장의 주어로 서술의 대상입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["梅雨季节", "湿气", "很重。"], correctAnswer: "梅雨季节湿气很重。", explanation: "시간어(梅雨季节)+주어(湿气)+술어(很重) 구조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'储存'의 올바른 병음은 무엇입니까?", options: ["chǔ cún", "chú cún", "chǔ cùn", "chù cún"], correctAnswer: "chǔ cún", explanation: "储存는 chǔ cún으로 읽으며 3성+2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'储存'의 성조 조합은 무엇입니까?", options: ["3-2", "2-2", "4-2", "3-4"], correctAnswer: "3-2", explanation: "chǔ(3성) cún(2성)이므로 성조 조합은 3-2입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'储存'는 '手机可以储存很多照片。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "储存는 사진을 보관하는 동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["手机", "可以储存", "很多照片。"], correctAnswer: "手机可以储存很多照片。", explanation: "주어+가능보어+목적어 구조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'记忆'의 올바른 병음은 무엇입니까?", options: ["jì yì", "jí yì", "jì yí", "jǐ yì"], correctAnswer: "jì yì", explanation: "记忆는 jì yì로 읽으며 4성+4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'记忆'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-2", "3-4"], correctAnswer: "4-4", explanation: "jì(4성) yì(4성)이므로 성조 조합은 4-4입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'记忆'는 '那段旅行留下了美好的记忆。'에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "记忆는 留下의 목적어로 남겨진 대상을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["那段旅行", "留下了", "美好的记忆。"], correctAnswer: "那段旅行留下了美好的记忆。", explanation: "주어+동사+목적어 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 15,
    questions: [
      { type: "multipleChoice", question: "'希望'의 올바른 병음은 무엇입니까?", options: ["xī wàng", "xí wàng", "xī wǎng", "xì wàng"], correctAnswer: "xī wàng", explanation: "希望는 xī wàng로 읽으며 1성+4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'希望'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-3", "3-4"], correctAnswer: "1-4", explanation: "xī(1성) wàng(4성)이므로 성조 조합은 1-4입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'希望'는 '我希望明天天气好。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "希望는 화자의 바람을 나타내는 동사입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我希望", "明天", "天气好。"], correctAnswer: "我希望明天天气好。", explanation: "주어+동사+시간어+목적절 구조입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 16,
    questions: [
      { type: "multipleChoice", question: "'秘密'의 올바른 병음은 무엇입니까?", options: ["mì mì", "mí mì", "mì mí", "mǐ mì"], correctAnswer: "mì mì", explanation: "秘密는 mì mì로 읽으며 4성+4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'秘密'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-2", "3-4"], correctAnswer: "4-4", explanation: "mì(4성) mì(4성)이므로 성조 조합은 4-4입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'秘密'는 '这是我们之间的秘密。'에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "秘密는 是의 보어로 지시 대상을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这是", "我们之间的", "秘密。"], correctAnswer: "这是我们之间的秘密。", explanation: "지시사+是+관형절+명사 구조입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'延续'의 올바른 병음은 무엇입니까?", options: ["yán xù", "yǎn xù", "yán xú", "yàn xù"], correctAnswer: "yán xù", explanation: "延续는 yán xù로 읽으며 2성+4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'延续'의 성조 조합은 무엇입니까?", options: ["2-4", "1-4", "2-2", "4-4"], correctAnswer: "2-4", explanation: "yán(2성) xù(4성)이므로 성조 조합은 2-4입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'延续'는 '这个传统延续了几百年。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "延续는 전통이 이어져 온 동작·과정을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这个传统", "延续了", "几百年。"], correctAnswer: "这个传统延续了几百年。", explanation: "주어+동사+시간보어 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 17,
    questions: [
      { type: "multipleChoice", question: "'相信'의 올바른 병음은 무엇입니까?", options: ["xiāng xìn", "xiǎng xìn", "xiāng xín", "xiàng xìn"], correctAnswer: "xiāng xìn", explanation: "相信는 xiāng xìn으로 읽으며 1성+4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'相信'의 성조 조합은 무엇입니까?", options: ["1-4", "3-4", "1-2", "2-4"], correctAnswer: "1-4", explanation: "xiāng(1성) xìn(4성)이므로 성조 조합은 1-4입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'相信'는 '我相信你能做到。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "相信는 믿는다는 심리적 동작을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我相信", "你能", "做到。"], correctAnswer: "我相信你能做到。", explanation: "주어+동사+목적절(주어+조동사+동사) 구조입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'彩虹'의 올바른 병음은 무엇입니까?", options: ["cǎi hóng", "cài hóng", "cǎi hōng", "cái hóng"], correctAnswer: "cǎi hóng", explanation: "彩虹는 cǎi hóng으로 읽으며 3성+2성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'彩虹'의 성조 조합은 무엇입니까?", options: ["3-2", "4-2", "3-1", "2-2"], correctAnswer: "3-2", explanation: "cǎi(3성) hóng(2성)이므로 성조 조합은 3-2입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'彩虹'는 '雨后出现了一道美丽的彩虹。'에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "彩虹는 出现의 목적어로 나타난 대상을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["雨后", "出现了", "一道美丽的彩虹。"], correctAnswer: "雨后出现了一道美丽的彩虹。", explanation: "시간어(雨后)+동사+수량관형절+목적어 구조입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'美丽'의 올바른 병음은 무엇입니까?", options: ["měi lì", "méi lì", "měi lí", "mèi lì"], correctAnswer: "měi lì", explanation: "美丽는 měi lì로 읽으며 3성+4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'美丽'의 성조 조합은 무엇입니까?", options: ["3-4", "2-4", "3-2", "4-4"], correctAnswer: "3-4", explanation: "měi(3성) lì(4성)이므로 성조 조합은 3-4입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'美丽'는 '这里的风景非常美丽。'에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "美丽는 풍경의 아름다운 상태를 묘사하는 형용사입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这里的风景", "非常", "美丽。"], correctAnswer: "这里的风景非常美丽。", explanation: "주어+부사(非常)+형용사 술어 구조입니다.", difficulty: "easy" }
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
      { type: "multipleChoice", question: "'清晰'의 올바른 병음은 무엇입니까?", options: ["qīng xī", "qíng xī", "qīn xí", "qīng xí"], correctAnswer: "qīng xī", explanation: "清晰는 qīng xī로 읽으며 1성+1성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'清晰'의 성조 조합은 무엇입니까?", options: ["1-1", "2-1", "1-2", "2-2"], correctAnswer: "1-1", explanation: "qīng(1성) xī(1성)이므로 성조 조합은 1-1입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'清晰'는 '这张照片拍得很清晰。'에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "清晰는 사진의 상태가 선명함을 묘사하는 형용사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["很清晰。", "这张照片", "拍得"], correctAnswer: "这张照片拍得很清晰。", explanation: "주어+동사+보어 구조: 这张照片 / 拍得 / 很清晰。", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 20,
    questions: [
      { type: "multipleChoice", question: "'呼吸'의 올바른 병음은 무엇입니까?", options: ["hū xī", "hú xī", "hū xí", "hú xí"], correctAnswer: "hū xī", explanation: "呼吸는 hū xī로 읽으며 1성+1성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'呼吸'의 성조 조합은 무엇입니까?", options: ["1-1", "2-1", "1-2", "2-2"], correctAnswer: "1-1", explanation: "hū(1성) xī(1성)이므로 성조 조합은 1-1입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'呼吸'는 '深呼吸可以让人放松。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "深呼吸는 '깊게 호흡하다'는 동작을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["深呼吸", "可以让人", "放松。"], correctAnswer: "深呼吸可以让人放松。", explanation: "주어(深呼吸)+사역구조(可以让人)+동사 구조입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'渗入'의 올바른 병음은 무엇입니까?", options: ["shèn rù", "shěn rù", "shèn rú", "shén rù"], correctAnswer: "shèn rù", explanation: "渗入는 shèn rù로 읽으며 4성+4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'渗入'의 성조 조합은 무엇입니까?", options: ["4-4", "3-4", "4-2", "3-2"], correctAnswer: "4-4", explanation: "shèn(4성) rù(4성)이므로 성조 조합은 4-4입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'渗入'는 '雨水渗入了土壤。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "대상 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "渗入는 빗물이 토양에 스며드는 동작을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["雨水", "渗入了", "土壤。"], correctAnswer: "雨水渗入了土壤。", explanation: "주어(雨水)+동사(渗入了)+목적어(土壤) 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 21,
    questions: [
      { type: "multipleChoice", question: "'希望'의 올바른 병음은 무엇입니까?", options: ["xī wàng", "xí wàng", "xī wǎng", "xì wàng"], correctAnswer: "xī wàng", explanation: "希望는 xī wàng로 읽으며 1성+4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'希望'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-3", "3-4"], correctAnswer: "1-4", explanation: "xī(1성) wàng(4성)이므로 성조 조합은 1-4입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'希望'는 '我希望明天天气好。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "希望는 화자의 바람을 나타내는 동사입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我希望", "明天", "天气好。"], correctAnswer: "我希望明天天气好。", explanation: "주어+동사+시간어+목적절 구조입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 22,
    questions: [
      { type: "multipleChoice", question: "'想念'의 올바른 병음은 무엇입니까?", options: ["xiǎng niàn", "xiāng niàn", "xiǎng nián", "xiáng niàn"], correctAnswer: "xiǎng niàn", explanation: "想念는 xiǎng niàn으로 읽으며 3성+4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'想念'의 성조 조합은 무엇입니까?", options: ["3-4", "1-4", "3-2", "2-4"], correctAnswer: "3-4", explanation: "xiǎng(3성) niàn(4성)이므로 성조 조합은 3-4입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'想念'는 '我很想念在远方的朋友。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "想念는 그리워하는 심리적 동작을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我很想念", "在远方的", "朋友。"], correctAnswer: "我很想念在远方的朋友。", explanation: "주어+부사+동사+관형절+목적어 구조입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'透明'의 올바른 병음은 무엇입니까?", options: ["tòu míng", "tóu míng", "tòu mǐng", "tǒu míng"], correctAnswer: "tòu míng", explanation: "透明는 tòu míng으로 읽으며 4성+2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'透明'의 성조 조합은 무엇입니까?", options: ["4-2", "2-2", "4-1", "3-2"], correctAnswer: "4-2", explanation: "tòu(4성) míng(2성)이므로 성조 조합은 4-2입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'透明'는 '玻璃是透明的。'에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "透明는 유리의 물리적 상태를 묘사하는 형용사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["玻璃", "是透明的。"], correctAnswer: "玻璃是透明的。", explanation: "주어(玻璃)+是+형용사+的 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 23,
    questions: [
      { type: "multipleChoice", question: "'勇气'의 올바른 병음은 무엇입니까?", options: ["yǒng qì", "yóng qì", "yǒng qí", "yōng qì"], correctAnswer: "yǒng qì", explanation: "勇气는 yǒng qì로 읽으며 3성+4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'勇气'의 성조 조합은 무엇입니까?", options: ["3-4", "2-4", "3-2", "4-4"], correctAnswer: "3-4", explanation: "yǒng(3성) qì(4성)이므로 성조 조합은 3-4입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'勇气'는 '你需要勇气去说出真相。'에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "勇气는 需要의 목적어로 필요한 대상을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["你需要勇气", "去说出", "真相。"], correctAnswer: "你需要勇气去说出真相。", explanation: "주어+동사+목적어+부정사구 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 24,
    questions: [
      { type: "multipleChoice", question: "'雨滴'의 올바른 병음은 무엇입니까?", options: ["yǔ dī", "yú dī", "yǔ dí", "yù dī"], correctAnswer: "yǔ dī", explanation: "雨滴는 yǔ dī로 읽으며 3성+1성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'雨滴'의 성조 조합은 무엇입니까?", options: ["3-1", "2-1", "3-2", "4-1"], correctAnswer: "3-1", explanation: "yǔ(3성) dī(1성)이므로 성조 조합은 3-1입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'雨滴'는 '雨滴打在窗上，发出声音。'에서 어떤 역할을 합니까?", options: ["동작 주체 표현", "상태 묘사", "시간 표현", "수량 표현"], correctAnswer: "동작 주체 표현", explanation: "雨滴는 문장의 주어로 동작의 주체입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["雨滴", "打在窗上，", "发出声音。"], correctAnswer: "雨滴打在窗上，发出声音。", explanation: "주어(雨滴)+동사구+결과절 구조입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'累积'의 올바른 병음은 무엇입니까?", options: ["lěi jī", "léi jī", "lěi jí", "lèi jī"], correctAnswer: "lěi jī", explanation: "累积는 lěi jī로 읽으며 3성+1성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'累积'의 성조 조합은 무엇입니까?", options: ["3-1", "2-1", "4-1", "3-2"], correctAnswer: "3-1", explanation: "lěi(3성) jī(1성)이므로 성조 조합은 3-1입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'累积'는 '压力慢慢累积，让他感到疲惫。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "累积는 스트레스가 쌓여가는 동작·과정을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["压力慢慢累积，", "让他", "感到疲惫。"], correctAnswer: "压力慢慢累积，让他感到疲惫。", explanation: "원인절+사역구조(让+주어+동사) 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 25,
    questions: [
      { type: "multipleChoice", question: "'湿气'의 올바른 병음은 무엇입니까?", options: ["shī qì", "shí qì", "shī qí", "shǐ qì"], correctAnswer: "shī qì", explanation: "湿气는 shī qì로 읽으며 1성+4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'湿气'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-3", "3-4"], correctAnswer: "1-4", explanation: "shī(1성) qì(4성)이므로 성조 조합은 1-4입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'湿气'는 '梅雨季节湿气很重。'에서 어떤 역할을 합니까?", options: ["동작 주체 표현", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "동작 주체 표현", explanation: "湿气는 문장의 주어로 서술의 대상입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["梅雨季节", "湿气", "很重。"], correctAnswer: "梅雨季节湿气很重。", explanation: "시간어(梅雨季节)+주어(湿气)+술어(很重) 구조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'储存'의 올바른 병음은 무엇입니까?", options: ["chǔ cún", "chú cún", "chǔ cùn", "chù cún"], correctAnswer: "chǔ cún", explanation: "储存는 chǔ cún으로 읽으며 3성+2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'储存'의 성조 조합은 무엇입니까?", options: ["3-2", "2-2", "4-2", "3-4"], correctAnswer: "3-2", explanation: "chǔ(3성) cún(2성)이므로 성조 조합은 3-2입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'储存'는 '手机可以储存很多照片。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "储存는 사진을 보관하는 동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["手机", "可以储存", "很多照片。"], correctAnswer: "手机可以储存很多照片。", explanation: "주어+가능보어+목적어 구조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'记忆'의 올바른 병음은 무엇입니까?", options: ["jì yì", "jí yì", "jì yí", "jǐ yì"], correctAnswer: "jì yì", explanation: "记忆는 jì yì로 읽으며 4성+4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'记忆'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-2", "3-4"], correctAnswer: "4-4", explanation: "jì(4성) yì(4성)이므로 성조 조합은 4-4입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'记忆'는 '那段旅行留下了美好的记忆。'에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "记忆는 留下의 목적어로 남겨진 대상을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["那段旅行", "留下了", "美好的记忆。"], correctAnswer: "那段旅行留下了美好的记忆。", explanation: "주어+동사+목적어 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 26,
    questions: [
      { type: "multipleChoice", question: "'希望'의 올바른 병음은 무엇입니까?", options: ["xī wàng", "xí wàng", "xī wǎng", "xì wàng"], correctAnswer: "xī wàng", explanation: "希望는 xī wàng로 읽으며 1성+4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'希望'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-3", "3-4"], correctAnswer: "1-4", explanation: "xī(1성) wàng(4성)이므로 성조 조합은 1-4입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'希望'는 '我希望明天天气好。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "希望는 화자의 바람을 나타내는 동사입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我希望", "明天", "天气好。"], correctAnswer: "我希望明天天气好。", explanation: "주어+동사+시간어+목적절 구조입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 27,
    questions: [
      { type: "multipleChoice", question: "'秘密'의 올바른 병음은 무엇입니까?", options: ["mì mì", "mí mì", "mì mí", "mǐ mì"], correctAnswer: "mì mì", explanation: "秘密는 mì mì로 읽으며 4성+4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'秘密'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-2", "3-4"], correctAnswer: "4-4", explanation: "mì(4성) mì(4성)이므로 성조 조합은 4-4입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'秘密'는 '这是我们之间的秘密。'에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "秘密는 是의 보어로 지시 대상을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这是", "我们之间的", "秘密。"], correctAnswer: "这是我们之间的秘密。", explanation: "지시사+是+관형절+명사 구조입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'延续'의 올바른 병음은 무엇입니까?", options: ["yán xù", "yǎn xù", "yán xú", "yàn xù"], correctAnswer: "yán xù", explanation: "延续는 yán xù로 읽으며 2성+4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'延续'의 성조 조합은 무엇입니까?", options: ["2-4", "1-4", "2-2", "4-4"], correctAnswer: "2-4", explanation: "yán(2성) xù(4성)이므로 성조 조합은 2-4입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'延续'는 '这个传统延续了几百年。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "延续는 전통이 이어져 온 동작·과정을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这个传统", "延续了", "几百年。"], correctAnswer: "这个传统延续了几百年。", explanation: "주어+동사+시간보어 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 28,
    questions: [
      { type: "multipleChoice", question: "'相信'의 올바른 병음은 무엇입니까?", options: ["xiāng xìn", "xiǎng xìn", "xiāng xín", "xiàng xìn"], correctAnswer: "xiāng xìn", explanation: "相信는 xiāng xìn으로 읽으며 1성+4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'相信'의 성조 조합은 무엇입니까?", options: ["1-4", "3-4", "1-2", "2-4"], correctAnswer: "1-4", explanation: "xiāng(1성) xìn(4성)이므로 성조 조합은 1-4입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'相信'는 '我相信你能做到。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "相信는 믿는다는 심리적 동작을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我相信", "你能", "做到。"], correctAnswer: "我相信你能做到。", explanation: "주어+동사+목적절(주어+조동사+동사) 구조입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'彩虹'의 올바른 병음은 무엇입니까?", options: ["cǎi hóng", "cài hóng", "cǎi hōng", "cái hóng"], correctAnswer: "cǎi hóng", explanation: "彩虹는 cǎi hóng으로 읽으며 3성+2성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'彩虹'의 성조 조합은 무엇입니까?", options: ["3-2", "4-2", "3-1", "2-2"], correctAnswer: "3-2", explanation: "cǎi(3성) hóng(2성)이므로 성조 조합은 3-2입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'彩虹'는 '雨后出现了一道美丽的彩虹。'에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "彩虹는 出现의 목적어로 나타난 대상을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["雨后", "出现了", "一道美丽的彩虹。"], correctAnswer: "雨后出现了一道美丽的彩虹。", explanation: "시간어(雨后)+동사+수량관형절+목적어 구조입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 29,
    questions: [
      { type: "multipleChoice", question: "'美丽'의 올바른 병음은 무엇입니까?", options: ["měi lì", "méi lì", "měi lí", "mèi lì"], correctAnswer: "měi lì", explanation: "美丽는 měi lì로 읽으며 3성+4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'美丽'의 성조 조합은 무엇입니까?", options: ["3-4", "2-4", "3-2", "4-4"], correctAnswer: "3-4", explanation: "měi(3성) lì(4성)이므로 성조 조합은 3-4입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'美丽'는 '这里的风景非常美丽。'에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "美丽는 풍경의 아름다운 상태를 묘사하는 형용사입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这里的风景", "非常", "美丽。"], correctAnswer: "这里的风景非常美丽。", explanation: "주어+부사(非常)+형용사 술어 구조입니다.", difficulty: "easy" }
    ]
  },
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



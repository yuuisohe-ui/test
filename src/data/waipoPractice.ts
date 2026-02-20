// 外婆的澎湖湾词汇训练题海战术数据

import { PracticeQuestion, SentencePractice } from './tianmimiPractice';

export const waipoPracticeData: SentencePractice[] = [
  {
    sentenceIndex: 1,
    questions: [
      { word: "外婆", type: "multipleChoice", question: "'外婆'의 올바른 병음은 무엇입니까?", options: ["wài pó", "wài pō", "wái pó", "wài bō"], correctAnswer: "wài pó", explanation: "'外婆'의 정확한 병음은 'wài pó'입니다.", difficulty: "easy" },
      { word: "外婆", type: "multipleChoice", question: "'外婆'의 성조 조합은 무엇입니까?", options: ["4-2", "4-1", "3-2", "2-2"], correctAnswer: "4-2", explanation: "'外'는 4성, '婆'는 2성입니다.", difficulty: "easy" },
      { word: "外婆", type: "multipleChoice", question: "'外婆'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "상태 묘사", "동작 표현"], correctAnswer: "대상 표현", explanation: "문장의 주어로서 인물을 나타내는 대상 표현입니다.", difficulty: "easy" },
      { word: "外婆", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我的", "外婆", "住在", "乡下。"], correctAnswer: "我的外婆住在乡下。", explanation: "주어(我的外婆) + 술어(住在) + 장소(乡下) 순서입니다.", difficulty: "easy" }
    ]
  },
  {
    sentenceIndex: 2,
    questions: [
      { word: "晚风", type: "multipleChoice", question: "'晚风'의 올바른 병음은 무엇입니까?", options: ["wǎn fēng", "wán fēng", "wàn fēng", "wǎn fèn"], correctAnswer: "wǎn fēng", explanation: "'晚风'의 정확한 병음은 'wǎn fēng'입니다.", difficulty: "medium" },
      { word: "晚风", type: "multipleChoice", question: "'晚风'의 성조 조합은 무엇입니까?", options: ["3-1", "3-2", "2-1", "4-1"], correctAnswer: "3-1", explanation: "'晚'은 3성, '风'은 1성입니다.", difficulty: "medium" },
      { word: "晚风", type: "multipleChoice", question: "'晚风'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "주어로서 자연 현상을 나타내는 대상 표현입니다.", difficulty: "medium" },
      { word: "晚风", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["晚风", "吹在", "身上", "很凉快。"], correctAnswer: "晚风吹在身上很凉快。", explanation: "주어 + 술어 + 보어 구조의 문장입니다.", difficulty: "medium" },
      { word: "轻拂", type: "multipleChoice", question: "'轻拂'의 올바른 병음은 무엇입니까?", options: ["qīng fú", "qǐng fú", "qīng fó", "qīng fù"], correctAnswer: "qīng fú", explanation: "'轻拂'의 정확한 병음은 'qīng fú'입니다.", difficulty: "hard" },
      { word: "轻拂", type: "multipleChoice", question: "'轻拂'의 성조 조합은 무엇입니까?", options: ["1-2", "1-3", "2-2", "1-4"], correctAnswer: "1-2", explanation: "'轻'은 1성, '拂'은 2성입니다.", difficulty: "hard" },
      { word: "轻拂", type: "multipleChoice", question: "'轻拂'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "상태 묘사", "장소 표현"], correctAnswer: "동작 표현", explanation: "바람이 스치는 동작을 나타내는 동사 역할을 합니다.", difficulty: "hard" },
      { word: "轻拂", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["微风", "轻拂着", "水面。"], correctAnswer: "微风轻拂着水面。", explanation: "주어(微风) + 술어(轻拂着) + 목적어(水面) 순서입니다.", difficulty: "hard" },
      { word: "沙滩", type: "multipleChoice", question: "'沙滩'의 올바른 병음은 무엇입니까?", options: ["shā tān", "shā tán", "sā tān", "shā dān"], correctAnswer: "shā tān", explanation: "'沙滩'의 정확한 병음은 'shā tān'입니다.", difficulty: "medium" },
      { word: "沙滩", type: "multipleChoice", question: "'沙滩'의 성조 조합은 무엇입니까?", options: ["1-1", "1-2", "1-4", "2-1"], correctAnswer: "1-1", explanation: "'沙'와 '滩' 모두 1성입니다.", difficulty: "medium" },
      { word: "沙滩", type: "multipleChoice", question: "'沙滩'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "장소 표현", explanation: "아이들이 놀고 있는 장소를 나타냅니다.", difficulty: "medium" },
      { word: "沙滩", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["孩子们", "在沙滩上", "玩耍。"], correctAnswer: "孩子们在沙滩上玩耍。", explanation: "주어 + 장소 부사어 + 술어 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 3,
    questions: [
      { word: "椰林", type: "multipleChoice", question: "'椰林'의 올바른 병음은 무엇입니까?", options: ["yē lín", "yě lín", "yē lǐn", "yuē lín"], correctAnswer: "yē lín", explanation: "'椰林'의 정확한 병음은 'yē lín'입니다.", difficulty: "hard" },
      { word: "椰林", type: "multipleChoice", question: "'椰林'의 성조 조합은 무엇입니까?", options: ["1-2", "1-1", "2-2", "1-3"], correctAnswer: "1-2", explanation: "'椰'는 1성, '林'은 2성입니다.", difficulty: "hard" },
      { word: "椰林", type: "multipleChoice", question: "'椰林'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "동작 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "볼 수 있는 사물을 나타내는 목적어 역할입니다.", difficulty: "hard" },
      { word: "椰林", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["海南岛", "到处可以看到", "椰林。"], correctAnswer: "海南岛到处可以看到椰林。", explanation: "장소 + 부사 + 가능 보어 술어 + 목적어 구조입니다.", difficulty: "hard" },
      { word: "斜阳", type: "multipleChoice", question: "'斜阳'의 올바른 병음은 무엇입니까?", options: ["xié yáng", "xiě yáng", "xié yāng", "xiē yáng"], correctAnswer: "xié yáng", explanation: "'斜阳'의 정확한 병음은 'xié yáng'입니다.", difficulty: "hard" },
      { word: "斜阳", type: "multipleChoice", question: "'斜阳'의 성조 조합은 무엇입니까?", options: ["2-2", "1-2", "2-1", "3-2"], correctAnswer: "2-2", explanation: "'斜'와 '阳' 모두 2성입니다.", difficulty: "hard" },
      { word: "斜阳", type: "multipleChoice", question: "'斜阳'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "시간 표현", "상태 묘사", "장소 표현"], correctAnswer: "대상 표현", explanation: "문장의 주어로서 석양을 나타내는 대상 표현입니다.", difficulty: "hard" },
      { word: "斜阳", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["斜阳", "映红了", "半边天。"], correctAnswer: "斜阳映红了半边天。", explanation: "주어 + 술어(결과보어 포함) + 목적어 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 4,
    questions: [
      { word: "矮墙", type: "multipleChoice", question: "'矮墙'의 올바른 병음은 무엇입니까?", options: ["ǎi qiáng", "āi qiáng", "ǎi qiāng", "āi qiāng"], correctAnswer: "ǎi qiáng", explanation: "'矮墙'의 정확한 병음은 'ǎi qiáng'입니다.", difficulty: "medium" },
      { word: "矮墙", type: "multipleChoice", question: "'矮墙'의 성조 조합은 무엇입니까?", options: ["3-2", "1-2", "3-1", "2-2"], correctAnswer: "3-2", explanation: "'矮'는 3성, '墙'은 2성입니다.", difficulty: "medium" },
      { word: "矮墙", type: "multipleChoice", question: "'矮墙'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "时间 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "고양이가 뛰어오른 목적지인 사물을 나타냅니다.", difficulty: "medium" },
      { word: "矮墙", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["小猫", "跳上了", "那堵矮墙。"], correctAnswer: "小猫跳上了那堵矮墙。", explanation: "주어 + 술어(방향보어) + 관형어 + 목적어 순서입니다.", difficulty: "medium" },
      { word: "幻想", type: "multipleChoice", question: "'幻想'의 올바른 병음은 무엇입니까?", options: ["huàn xiǎng", "huán xiǎng", "huàn xiāng", "huàn xiàng"], correctAnswer: "huàn xiǎng", explanation: "'幻想'의 정확한 병음은 'huàn xiǎng'입니다.", difficulty: "medium" },
      { word: "幻想", type: "multipleChoice", question: "'幻想'의 성조 조합은 무엇입니까?", options: ["4-3", "4-2", "3-3", "2-3"], correctAnswer: "4-3", explanation: "'幻'은 4성, '想'은 3성입니다.", difficulty: "medium" },
      { word: "幻想", type: "multipleChoice", question: "'幻想'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "수량 표현", "경험 표현"], correctAnswer: "동작 표현", explanation: "미래를 상상하는 심리적 동작을 나타냅니다.", difficulty: "medium" },
      { word: "幻想", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "总是在", "幻想", "未来的生活。"], correctAnswer: "他总是在幻想未来的生活。", explanation: "주어 + 부사구 + 술어 + 목적어 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 5,
    questions: [
      { word: "黄昏", type: "multipleChoice", question: "'黄昏'의 올바른 병음은 무엇입니까?", options: ["huáng hūn", "huāng hūn", "huáng hún", "huáng hǔn"], correctAnswer: "huáng hūn", explanation: "'黄昏'의 정확한 병음은 'huáng hūn'입니다.", difficulty: "medium" },
      { word: "黄昏", type: "multipleChoice", question: "'黄昏'의 성조 조합은 무엇입니까?", options: ["2-1", "2-2", "1-1", "3-1"], correctAnswer: "2-1", explanation: "'黄'은 2성, '昏'은 1성입니다.", difficulty: "medium" },
      { word: "黄昏", type: "multipleChoice", question: "'黄昏'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "장소 표현", "동작 표현", "대상 표현"], correctAnswer: "시간 표현", explanation: "하루 중 특정 시간대를 나타내는 시간 명사입니다.", difficulty: "medium" },
      { word: "黄昏", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["黄昏时分", "의景色", "最美。"], correctAnswer: "黄昏时分的景色最美。", explanation: "시간 관형어 + 주어 + 부사 + 형용사 술어 구조입니다.", difficulty: "medium" },
      { word: "脚印", type: "multipleChoice", question: "'脚印'의 올바른 병음은 무엇입니까?", options: ["jiǎo yìn", "jiāo yìn", "jiǎo yǐn", "jiǎo yīn"], correctAnswer: "jiǎo yìn", explanation: "'脚印'의 정확한 병음은 'jiǎo yìn'입니다.", difficulty: "medium" },
      { word: "脚印", type: "multipleChoice", question: "'脚印'의 성조 조합은 무엇입니까?", options: ["3-4", "3-3", "2-4", "4-4"], correctAnswer: "3-4", explanation: "'脚'는 3성, '印'은 4성입니다.", difficulty: "medium" },
      { word: "脚印", type: "multipleChoice", question: "'脚印'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "동작 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "눈 위에 남겨진 사물을 나타내는 목적어입니다.", difficulty: "medium" },
      { word: "脚印", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["雪地上", "留下了", "几串脚印。"], correctAnswer: "雪地上留下了几串脚印。", explanation: "장소 + 술어 + 수량어 + 목적어(존현문) 구조입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 6,
    questions: [
      { word: "拄", type: "multipleChoice", question: "'拄'의 올바른 병음은 무엇입니까?", options: ["zhǔ", "zhù", "zhū", "zǔ"], correctAnswer: "zhǔ", explanation: "'拄'의 정확한 병음은 'zhǔ'입니다.", difficulty: "hard" },
      { word: "拄", type: "multipleChoice", question: "'拄'의 성조 조합은 무엇입니까?", options: ["3", "4", "2", "1"], correctAnswer: "3", explanation: "'拄'는 3성 단음절 단어입니다.", difficulty: "hard" },
      { word: "拄", type: "multipleChoice", question: "'拄'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "대상 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "지팡이를 짚는 구체적인 동작을 나타냅니다.", difficulty: "hard" },
      { word: "拄", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["老爷爷", "拄着拐杖", "过马路。"], correctAnswer: "老爷爷拄着拐杖过马路。", explanation: "주어 + 연동문의 첫 번째 동작 + 두 번째 동작 순서입니다.", difficulty: "hard" },
      { word: "挽", type: "multipleChoice", question: "'挽'의 올바른 병음은 무엇입니까?", options: ["wǎn", "wán", "wàn", "miǎn"], correctAnswer: "wǎn", explanation: "'挽'의 정확한 병음은 'wǎn'입니다.", difficulty: "hard" },
      { word: "挽", type: "multipleChoice", question: "'挽'의 성조 조합은 무엇입니까?", options: ["3", "2", "4", "1"], correctAnswer: "3", explanation: "'挽'은 3성 단음절 단어입니다.", difficulty: "hard" },
      { word: "挽", type: "multipleChoice", question: "'挽'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "대상 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "팔을 끼거나 이끄는 동작을 나타내는 동사입니다.", difficulty: "hard" },
      { word: "挽", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "挽着", "妻子的手", "去散步。"], correctAnswer: "他挽着妻子的手去散步。", explanation: "주어 + 동사구1 + 동사구2 (연동문) 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 7,
    questions: [
      { word: "薄暮", type: "multipleChoice", question: "'薄暮'의 올바른 병음은 무엇입니까?", options: ["bó mù", "báo mù", "bó mǔ", "bò mù"], correctAnswer: "bó mù", explanation: "'薄暮'의 정확한 병음은 'bó mù'입니다.", difficulty: "hard" },
      { word: "薄暮", type: "multipleChoice", question: "'薄暮'의 성조 조합은 무엇입니까?", options: ["2-4", "2-3", "4-4", "2-2"], correctAnswer: "2-4", explanation: "'薄'은 2성, '暮'는 4성입니다.", difficulty: "hard" },
      { word: "薄暮", type: "multipleChoice", question: "'薄暮'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "장소 표현", "상태 묘사", "동작 표현"], correctAnswer: "시간 표현", explanation: "해 질 녘의 시간을 나타내는 시간 명사입니다.", difficulty: "hard" },
      { word: "薄暮", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["薄暮时分，", "山村", "变得", "很安静。"], correctAnswer: "薄暮时分，山村变得很安静。", explanation: "시간 부사구 + 주어 + 술어 + 보어 순서입니다.", difficulty: "hard" },
      { word: "余晖", type: "multipleChoice", question: "'余晖'의 올바른 병음은 무엇입니까?", options: ["yú huī", "yǔ huī", "yú huí", "yù huī"], correctAnswer: "yú huī", explanation: "'余晖'의 정확한 병음은 'yú huī'입니다.", difficulty: "hard" },
      { word: "余晖", type: "multipleChoice", question: "'余晖'의 성조 조합은 무엇입니까?", options: ["2-1", "2-2", "1-1", "3-1"], correctAnswer: "2-1", explanation: "'余'는 2성, '晖'는 1성입니다.", difficulty: "hard" },
      { word: "余晖", type: "multipleChoice", question: "'余晖'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "상태 묘사", "동작 표현"], correctAnswer: "대상 표현", explanation: "문장의 주어로서 빛의 남은 기운을 나타내는 명사입니다.", difficulty: "hard" },
      { word: "余晖", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["夕阳的余晖", "洒在", "海面上。"], correctAnswer: "夕阳的余晖洒在海面上。", explanation: "주어(한정어 포함) + 술어 + 장소 보어 구조입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 8,
    questions: [
      { word: "消磨", type: "multipleChoice", question: "'消磨'의 올바른 병음은 무엇입니까?", options: ["xiāo mó", "xiǎo mó", "xiāo mò", "xiāo mō"], correctAnswer: "xiāo mó", explanation: "'消磨'의 정확한 병음은 'xiāo mó'입니다.", difficulty: "hard" },
      { word: "消磨", type: "multipleChoice", question: "'消磨'의 성조 조합은 무엇입니까?", options: ["1-2", "1-4", "2-2", "1-1"], correctAnswer: "1-2", explanation: "'消'는 1성, '磨'는 2성입니다.", difficulty: "hard" },
      { word: "消磨", type: "multipleChoice", question: "'消磨'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "대상 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "시간을 보내거나 때우는 동작을 나타냅니다.", difficulty: "hard" },
      { word: "消磨", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["读书是", "消磨时光", "的好办法。"], correctAnswer: "读书是消磨时光的好办法。", explanation: "주어구 + 是 + 목적어구(관형어+명사) 구조입니다.", difficulty: "hard" },
      { word: "时光", type: "multipleChoice", question: "'时光'의 올바른 병음은 무엇입니까?", options: ["shí guāng", "shì guāng", "shí guàng", "sī guāng"], correctAnswer: "shí guāng", explanation: "'时光'의 정확한 병음은 'shí guāng'입니다.", difficulty: "medium" },
      { word: "时光", type: "multipleChoice", question: "'时光'의 성조 조합은 무엇입니까?", options: ["2-1", "4-1", "2-4", "1-1"], correctAnswer: "2-1", explanation: "'时'는 2성, '光'은 1성입니다.", difficulty: "medium" },
      { word: "时光", type: "multipleChoice", question: "'时光'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "시간 표현", "동작 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "문장의 주어로서 특정 시기를 나타내는 대상입니다.", difficulty: "medium" },
      { word: "时光", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["那是", "一段", "美好的时光。"], correctAnswer: "那是一段美好的时光。", explanation: "대명사 + 술어(是) + 수량 + 형용사 + 목적어 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 9,
    questions: [
      { word: "吞没", type: "multipleChoice", question: "'吞没'의 올바른 병음은 무엇입니까?", options: ["tūn mò", "tǔn mò", "tūn méi", "tūn mō"], correctAnswer: "tūn mò", explanation: "'吞没'의 정확한 병음은 'tūn mò'입니다.", difficulty: "hard" },
      { word: "吞没", type: "multipleChoice", question: "'吞没'의 성조 조합은 무엇입니까?", options: ["1-4", "1-2", "2-4", "1-3"], correctAnswer: "1-4", explanation: "'吞'은 1성, '没'는 4성입니다.", difficulty: "hard" },
      { word: "吞没", type: "multipleChoice", question: "'吞没'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "완전히 덮어버리거나 삼키는 동작을 나타냅니다.", difficulty: "hard" },
      { word: "吞没", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["黑暗", "渐渐吞没了", "整片森林。"], correctAnswer: "黑暗渐渐吞没了整片森林。", explanation: "주어 + 부사 + 술어 + 목적어 순서입니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 10, questions: [] },
  {
    sentenceIndex: 11,
    questions: [
      { word: "童年", type: "multipleChoice", question: "'童年'의 올바른 병음은 무엇입니까?", options: ["tóng nián", "tōng nián", "tóng niàn", "tóng lián"], correctAnswer: "tóng nián", explanation: "'童年'의 정확한 병음은 'tóng nián'입니다.", difficulty: "medium" },
      { word: "童年", type: "multipleChoice", question: "'童年'의 성조 조합은 무엇입니까?", options: ["2-2", "2-1", "1-2", "3-2"], correctAnswer: "2-2", explanation: "'童'과 '年' 모두 2성입니다.", difficulty: "medium" },
      { word: "童年", type: "multipleChoice", question: "'童年'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "시간 표현", "동작 표현", "경험 표현"], correctAnswer: "대상 표현", explanation: "소유의 대상이 되는 어린 시절을 의미합니다.", difficulty: "medium" },
      { word: "童年", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "有一个", "快乐的童年。"], correctAnswer: "他有一个快乐的童年。", explanation: "주어 + 술어(有) + 관형어 + 목적어 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 12,
    questions: [
      { word: "海浪", type: "multipleChoice", question: "'海浪'의 올바른 병음은 무엇입니까?", options: ["hǎi làng", "hái làng", "hǎi láng", "hǎi lāng"], correctAnswer: "hǎi làng", explanation: "'海浪'의 정확한 병음은 'hǎi làng'입니다.", difficulty: "medium" },
      { word: "海浪", type: "multipleChoice", question: "'海浪'의 성조 조합은 무엇입니까?", options: ["3-4", "3-2", "2-4", "4-4"], correctAnswer: "3-4", explanation: "'海'는 3성, '浪'은 4성입니다.", difficulty: "medium" },
      { word: "海浪", type: "multipleChoice", question: "'海浪'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "문장의 주어로서 자연물을 나타냅니다.", difficulty: "medium" },
      { word: "海浪", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["巨大的海浪", "拍打着", "岩石。"], correctAnswer: "巨大的海浪拍打着岩石。", explanation: "형용사구 주어 + 술어 + 목적어 순서입니다.", difficulty: "medium" },
      { word: "仙人掌", type: "multipleChoice", question: "'仙人掌'의 올바른 병음은 무엇입니까?", options: ["xiān rén zhǎng", "xiān rén zǎng", "xiǎn rén zhǎng", "xiān rèn zhǎng"], correctAnswer: "xiān rén zhǎng", explanation: "'仙人掌'의 정확한 병음은 'xiān rén zhǎng'입니다.", difficulty: "medium" },
      { word: "仙人掌", type: "multipleChoice", question: "'仙人掌'의 성조 조합은 무엇입니까?", options: ["1-2-3", "1-2-4", "2-2-3", "1-1-3"], correctAnswer: "1-2-3", explanation: "'仙'은 1성, '人'은 2성, '掌'은 3성입니다.", difficulty: "medium" },
      { word: "仙人掌", type: "multipleChoice", question: "'仙人掌'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "장소 표현", "동작 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "문장의 주어로서 식물을 나타내는 명사입니다.", difficulty: "medium" },
      { word: "仙人掌", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["仙人掌", "生长在", "沙漠里。"], correctAnswer: "仙人掌生长在沙漠里。", explanation: "주어 + 술어 + 장소 보어 구조입니다.", difficulty: "medium" },
      { word: "船长", type: "multipleChoice", question: "'船长'의 올바른 병음은 무엇입니까?", options: ["chuán zhǎng", "chuán cháng", "chuǎn zhǎng", "chuán zǎng"], correctAnswer: "chuán zhǎng", explanation: "'船长'의 정확한 병음은 'chuán zhǎng'입니다.", difficulty: "medium" },
      { word: "船长", type: "multipleChoice", question: "'船长'의 성조 조합은 무엇입니까?", options: ["2-3", "2-2", "3-3", "2-4"], correctAnswer: "2-3", explanation: "'船'은 2성, '长'은 3성입니다.", difficulty: "medium" },
      { word: "船长", type: "multipleChoice", question: "'船长'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "문장의 주어로서 인물의 직업을 나타냅니다.", difficulty: "medium" },
      { word: "船长", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["船长", "指挥着", "轮船", "前进。"], correctAnswer: "船长指挥着轮船前进。", explanation: "주어 + 술어(겸어문 성격) + 목적어 + 보어 순서입니다.", difficulty: "medium" }
    ]
  },
  { sentenceIndex: 13, questions: [] },
  { sentenceIndex: 14, questions: [] },
  { sentenceIndex: 15, questions: [] },
  { sentenceIndex: 16, questions: [] },
  { sentenceIndex: 17, questions: [] },
  { sentenceIndex: 18, questions: [] },
  { sentenceIndex: 19, questions: [] },
  { sentenceIndex: 20, questions: [] },
  { sentenceIndex: 21, questions: [] },
  { sentenceIndex: 22, questions: [] },
  { sentenceIndex: 23, questions: [] },
  { sentenceIndex: 24, questions: [] },
  { sentenceIndex: 25, questions: [] },
  { sentenceIndex: 26, questions: [] },
  {
    sentenceIndex: 27,
    questions: [
      { word: "船长", type: "multipleChoice", question: "'船长'의 올바른 병음은 무엇입니까?", options: ["chuán zhǎng", "chuán cháng", "chuǎn zhǎng", "chuán zǎng"], correctAnswer: "chuán zhǎng", explanation: "'船长'의 정확한 병음은 'chuán zhǎng'입니다.", difficulty: "medium" },
      { word: "船长", type: "multipleChoice", question: "'船长'의 성조 조합은 무엇입니까?", options: ["2-3", "2-2", "3-3", "2-4"], correctAnswer: "2-3", explanation: "'船'은 2성, '长'은 3성입니다.", difficulty: "medium" },
      { word: "船长", type: "multipleChoice", question: "'船长'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "경험 표현", "동작 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "문장의 주어로서 항해를 하는 주체를 나타냅니다.", difficulty: "medium" },
      { word: "船长", type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["船长", "在海上", "航行了", "三十年。"], correctAnswer: "船长在海上航行了三十年。", explanation: "주어 + 장소 부사어 + 술어 + 시간 보어 순서입니다.", difficulty: "medium" }
    ]
  }
];

export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const sentencePractice = waipoPracticeData.find(p => p.sentenceIndex === sentenceIndex);
  return sentencePractice?.questions || [];
}



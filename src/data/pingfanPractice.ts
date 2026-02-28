// 平凡之路词汇训练题海战术数据

import { PracticeQuestion, SentencePractice } from './tianmimiPractice';

export const pingfanPracticeData: SentencePractice[] = [
  {
    sentenceIndex: 1,
    questions: [
      { type: "multipleChoice", question: "'徘徊'의 올바른 병음은 무엇입니까?", options: ["pái huái", "pái huā", "bái huái", "pǎi huái"], correctAnswer: "pái huái", explanation: "徘徊의 병음은 pái huái입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'徘徊'의 성조 조합은 무엇입니까?", options: ["2-2", "1-2", "2-1", "3-2"], correctAnswer: "2-2", explanation: "pái(2성) huái(2성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'徘徊'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "동작 표현", "상태 묘사", "경험 표현"], correctAnswer: "동작 표현", explanation: "문장에서 서성거리는 구체적인 동작을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他在校门口", "徘徊，", "不知该不该", "进去。"], correctAnswer: "他在校门口徘徊，不知该不该进去。", explanation: "장소 + 동작 + 심리 상태 순서로 배열합니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 2, questions: [] },
  {
    sentenceIndex: 3,
    questions: [
      { type: "multipleChoice", question: "'易碎'의 올바른 병음은 무엇입니까?", options: ["yì suì", "yī suì", "yì shuì", "yí suì"], correctAnswer: "yì suì", explanation: "易碎의 병음은 yì suì입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'易碎'의 성조 조합은 무엇입니까?", options: ["4-4", "4-3", "2-4", "1-4"], correctAnswer: "4-4", explanation: "yì(4성) suì(4성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'易碎'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "유리컵의 성질이나 상태를 묘사하는 형용사적 역할을 합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这些玻璃杯", "是易碎品，", "搬运时", "要小心。"], correctAnswer: "这些玻璃杯是易碎品，搬运时要小心。", explanation: "대상 설명 후 주의사항을 전달하는 구성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'骄傲'의 올바른 병음은 무엇입니까?", options: ["jiāo ào", "jiǎo ào", "qiāo ào", "jiāo āo"], correctAnswer: "jiāo ào", explanation: "骄傲의 병음은 jiāo ào입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'骄傲'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "2-4", "3-4"], correctAnswer: "1-4", explanation: "jiāo(1성) ào(4성) 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'骄傲'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "장소 표현", "대상 표현", "동작 표현"], correctAnswer: "상태 묘사", explanation: "자부심을 느끼는 심리 상태를 묘사합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我为", "自己的祖国", "感到骄傲。"], correctAnswer: "我为自己的祖国感到骄傲。", explanation: "위(~를 위해/대해) + 대상 + 감정 표현 순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 4,
    questions: [
      { type: "multipleChoice", question: "'模样'의 올바른 병음은 무엇입니까?", options: ["mú yàng", "mó yàng", "mǔ yàng", "mú yáng"], correctAnswer: "mú yàng", explanation: "模样에서 模는 mú로 발음합니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'模样'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "4-4", "3-4"], correctAnswer: "2-4", explanation: "mú(2성) yàng(4성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'模样'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "사람의 겉모습이나 상태를 나타내는 명사입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["多年不见，", "他还是", "当年的", "模样。"], correctAnswer: "多年不见，他还是当年的模样。", explanation: "시간 경과 언급 후 변함없는 모습을 설명합니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 5,
    questions: [
      { type: "multipleChoice", question: "'沸腾'의 올바른 병음은 무엇입니까?", options: ["fèi téng", "fú téng", "fèi tēng", "fèi dēng"], correctAnswer: "fèi téng", explanation: "沸腾의 병음은 fèi téng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'沸腾'의 성조 조합은 무엇입니까?", options: ["4-2", "4-1", "3-2", "2-2"], correctAnswer: "4-2", explanation: "fèi(4성) téng(2성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'沸腾'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "고조된 마음의 상태를 비유적으로 묘사합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["听了这个消息，", "大家的心情", "都沸腾了。"], correctAnswer: "听了这个消息，大家的心情都沸腾了。", explanation: "원인(소식) 뒤에 결과(심정 변화)가 옵니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'不安'의 올바른 병음은 무엇입니까?", options: ["bù ān", "bù án", "bǔ ān", "fù ān"], correctAnswer: "bù ān", explanation: "不安의 병음은 bù ān입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'不安'의 성조 조합은 무엇입니까?", options: ["4-1", "2-1", "4-4", "1-1"], correctAnswer: "4-1", explanation: "bù(4성) ān(1성) 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'不安'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "불안한 심리 상태를 나타내는 형용사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他的迟到", "让我感到", "有些不安。"], correctAnswer: "他的迟到让我感到有些不安。", explanation: "원인 + 사역 표현 + 감정 상태 순입니다.", difficulty: "medium" }
    ]
  },
  { sentenceIndex: 6, questions: [] },
  {
    sentenceIndex: 7,
    questions: [
      { type: "multipleChoice", question: "'谜'의 올바른 병음은 무엇입니까?", options: ["mí", "mǐ", "mí lù", "méi"], correctAnswer: "mí", explanation: "谜의 병음은 mí입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'谜'의 성조 조합은 무엇입니까?", options: ["2", "1", "3", "4"], correctAnswer: "2", explanation: "mí(2성) 단음절입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'谜'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "정체를 알 수 없는 대상(명사)을 지칭합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他的身份", "一直是个", "谜。"], correctAnswer: "他的身份一直是个谜。", explanation: "주어 + 부사/동사 + 목적어 순으로 배열합니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'沉默'의 올바른 병음은 무엇입니까?", options: ["chén mò", "chéng mò", "zhèn mò", "chén mù"], correctAnswer: "chén mò", explanation: "沉默의 병음은 chén mò입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'沉默'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "3-4", "1-4"], correctAnswer: "2-4", explanation: "chén(2성) mò(4성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'沉默'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "말이 없는 정적인 상태를 유지함을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他面对", "众人的指责", "保持了沉默。"], correctAnswer: "他面对众人的指责保持了沉默。", explanation: "주어 + 상황 + 동사구 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 8,
    questions: [
      { type: "multipleChoice", question: "'故事'의 올바른 병음은 무엇입니까?", options: ["gù shì", "kù shì", "gǔ shì", "gù shǐ"], correctAnswer: "gù shì", explanation: "故事의 병음은 gù shì입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'故事'의 성조 조합은 무엇입니까?", options: ["4-4", "4-0", "3-4", "4-1"], correctAnswer: "4-4", explanation: "gù(4성) shì(4성) 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'故事'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "말하는 내용의 대상을 나타내는 명사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["奶奶", "给我讲了", "一个动人的", "故事。"], correctAnswer: "奶奶给我讲了一个动人的故事。", explanation: "주어 + 대상/동사 + 관형어 + 목적어 순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 9,
    questions: [
      { type: "multipleChoice", question: "'跨'의 올바른 병음은 무엇입니까?", options: ["kuà", "kuā", "guà", "huà"], correctAnswer: "kuà", explanation: "跨의 병음은 kuà입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'跨'의 성조 조합은 무엇입니까?", options: ["4", "1", "2", "3"], correctAnswer: "4", explanation: "kuà(4성) 단음절입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'跨'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "다리를 벌려 넘는 구체적인 동작을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他大步", "跨过了", "那条小溪。"], correctAnswer: "他大步跨过了那条小溪。", explanation: "주어/부사 + 동사 + 목적어 순으로 배열합니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 10,
    questions: [
      { type: "multipleChoice", question: "'人山人海'의 올바른 병음은 무엇입니까?", options: ["rén shān rén hǎi", "rén shān rén hāi", "rèn shān rèn hǎi", "lén shān lén hǎi"], correctAnswer: "rén shān rén hǎi", explanation: "人山人海의 병음은 rén shān rén hǎi입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'人山人海'의 성조 조합은 무엇입니까?", options: ["2-1-2-3", "2-1-2-4", "4-1-4-3", "2-3-2-3"], correctAnswer: "2-1-2-3", explanation: "rén(2) shān(1) rén(2) hǎi(3) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'人山人海'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "장소 표현", "시간 표현", "동작 표현"], correctAnswer: "상태 묘사", explanation: "사람이 아주 많은 광경을 묘사하는 성어입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["节日里的", "广场上", "人山人海。"], correctAnswer: "节日里的广场上人山人海。", explanation: "시간적 배경 + 장소 + 상태 묘사 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 11,
    questions: [
      { type: "multipleChoice", question: "'拥有'의 올바른 병음은 무엇입니까?", options: ["yōng yǒu", "yóng yǒu", "yòng yǒu", "yōng yóu"], correctAnswer: "yōng yǒu", explanation: "拥有의 병음은 yōng yǒu입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'拥有'의 성조 조합은 무엇입니까?", options: ["1-3", "1-2", "4-3", "3-3"], correctAnswer: "1-3", explanation: "yōng(1성) yǒu(3성) 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'拥有'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "무엇인가를 소유하고 있는 추상적 동작/상태를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他拥有", "一个", "幸福的家庭。"], correctAnswer: "他拥有一个幸福的家庭。", explanation: "주어+동사 + 수량 + 관형어+목적어 순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 12,
    questions: [
      { type: "multipleChoice", question: "'飘散'의 올바른 병음은 무엇입니까?", options: ["piāo sàn", "biāo sàn", "piāo shàn", "piǎo sàn"], correctAnswer: "piāo sàn", explanation: "飘散의 병음은 piāo sàn입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'飘散'의 성조 조합은 무엇입니까?", options: ["1-4", "1-3", "2-4", "4-4"], correctAnswer: "1-4", explanation: "piāo(1성) sàn(4성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'飘散'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "시간 표현", "대상 표현"], correctAnswer: "동작 표현", explanation: "꽃잎이 흩날리는 동작을 나타내는 동사입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["花瓣", "在微风中", "飘散。"], correctAnswer: "花瓣在微风中飘散。", explanation: "주어 + 배경(부사구) + 동사 순서로 배열합니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 13,
    questions: [
      { type: "multipleChoice", question: "'失落'의 올바른 병음은 무엇입니까?", options: ["shī luò", "sī luò", "shī nuò", "shí luò"], correctAnswer: "shī luò", explanation: "失落의 병음은 shī luò입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'失落'의 성조 조합은 무엇입니까?", options: ["1-4", "1-2", "2-4", "4-4"], correctAnswer: "1-4", explanation: "shī(1성) luò(4성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'失落'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "마음이 허전하고 상실감을 느끼는 상태를 묘사합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["由于", "没被录取，", "他心里", "很失落。"], correctAnswer: "由于没被录取，他心里很失落。", explanation: "이유(접속사구) + 주체 + 상태 순서입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'失望'의 올바른 병음은 무엇입니까?", options: ["shī wàng", "sī wàng", "shī wǎng", "shí wàng"], correctAnswer: "shī wàng", explanation: "失望의 병음은 shī wàng입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'失望'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-2", "4-4"], correctAnswer: "1-4", explanation: "shī(1성) wàng(4성) 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'失望'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "대상 표현", "시간 표현"], correctAnswer: "상태 묘사", explanation: "기대가 무너진 심리 상태를 나타내는 형용사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这次考试的结果", "让他", "很失望。"], correctAnswer: "这次考试的结果让他很失望。", explanation: "주어(원인) + 사역동사 + 대상 + 감정상태 순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 14,
    questions: [
      { type: "multipleChoice", question: "'平凡'의 올바른 병음은 무엇입니까?", options: ["píng fán", "píng fǎn", "bíng fán", "pín fán"], correctAnswer: "píng fán", explanation: "平凡의 병음은 píng fán입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'平凡'의 성조 조합은 무엇입니까?", options: ["2-2", "2-4", "1-2", "3-2"], correctAnswer: "2-2", explanation: "píng(2성) fán(2성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'平凡'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "상태 묘사", explanation: "직무나 성적의 평범한 성질을 묘사합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他在平凡的岗位上", "做出了", "不平凡的成绩。"], correctAnswer: "他在平凡的岗位上做出了不平凡的成绩。", explanation: "전치사구(장소/배경) + 동사 + 목적어 순서입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'唯一'의 올바른 병음은 무엇입니까?", options: ["wéi yī", "wěi yī", "wéi yì", "wéi yí"], correctAnswer: "wéi yī", explanation: "唯一의 병음은 wéi yī입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'唯一'의 성조 조합은 무엇입니까?", options: ["2-1", "3-1", "2-4", "1-1"], correctAnswer: "2-1", explanation: "wéi(2성) yī(1성) 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'唯一'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "수량 표현", "동작 표현", "장소 표현"], correctAnswer: "수량 표현", explanation: "하나뿐임을 나타내는 한정적 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这是我", "唯一能想到的", "办法。"], correctAnswer: "这是我唯一能想到的办法。", explanation: "판단문(是) 구조 내에서 목적어를 수식하는 관형어입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 15,
    questions: [
      { type: "multipleChoice", question: "'仍然'의 올바른 병음은 무엇입니까?", options: ["réng rán", "réng lán", "rén rán", "rěng rán"], correctAnswer: "réng rán", explanation: "仍然의 병음은 réng rán입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'仍然'의 성조 조합은 무엇입니까?", options: ["2-2", "2-4", "1-2", "3-2"], correctAnswer: "2-2", explanation: "réng(2성) rán(2성) 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'仍然'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "여전히 지속되는 상황이나 태도를 나타내는 부사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["尽管生病了，", "他仍然坚持", "去上班。"], correctAnswer: "尽管生病了，他仍然坚持去上班。", explanation: "양보 접속사(尽管) 뒤에 지속되는 상황(仍然)이 옵니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'幻想'의 올바른 병음은 무엇입니까?", options: ["huàn xiǎng", "huán xiǎng", "huàn xiāng", "huàn xiàng"], correctAnswer: "huàn xiǎng", explanation: "幻想의 병음은 huàn xiǎng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'幻想'의 성조 조합은 무엇입니까?", options: ["4-3", "4-2", "2-3", "1-3"], correctAnswer: "4-3", explanation: "huàn(4성) xiǎng(3성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'幻想'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "해결 수단이나 생각의 내용을 나타내는 명사입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们不能", "靠幻想来解决", "实际问题。"], correctAnswer: "我们不能靠幻想来解决实际问题。", explanation: "부정형(不能) + 수단(靠...) + 목적 순서입니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 16, questions: [] },
  { sentenceIndex: 17, questions: [] },
  {
    sentenceIndex: 18,
    questions: [
      { type: "multipleChoice", question: "'而言'의 올바른 병음은 무엇입니까?", options: ["ér yán", "er yán", "ér yǎn", "ěr yán"], correctAnswer: "ér yán", explanation: "而言의 병음은 ér yán입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'而言'의 성조 조합은 무엇입니까?", options: ["2-2", "2-3", "4-2", "1-2"], correctAnswer: "2-2", explanation: "ér(2성) yán(2성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'而言'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "대상의 관점을 한정하는 조사적 표현입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["对我而言，", "学好汉语", "非常重要。"], correctAnswer: "对我而言，学好汉语非常重要。", explanation: "대상의 관점 제시 후 뒤에 구체적인 판단이 옵니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 19,
    questions: [
      { type: "multipleChoice", question: "'毁'의 올바른 병음은 무엇입니까?", options: ["huǐ", "huí", "huī", "huì"], correctAnswer: "huǐ", explanation: "毁의 병음은 huǐ입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'毁'의 성조 조합은 무엇입니까?", options: ["3", "1", "2", "4"], correctAnswer: "3", explanation: "huǐ(3성) 단음절입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'毁'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "时间 표현"], correctAnswer: "동작 표현", explanation: "파괴하는 구체적인 행위를 나타내는 동사입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["一场大火", "毁了", "整片森林。"], correctAnswer: "一场大火毁了整片森林。", explanation: "주어(원인) + 동사 + 목적어(피해 대상) 순입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 20,
    questions: [
      { type: "multipleChoice", question: "'永远'의 올바른 병음은 무엇입니까?", options: ["yǒng yuǎn", "yōng yuǎn", "yǒng yuán", "yóng yuǎn"], correctAnswer: "yǒng yuǎn", explanation: "永远의 병음은 yǒng yuǎn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'永远'의 성조 조합은 무엇입니까?", options: ["3-3", "2-3", "3-2", "4-3"], correctAnswer: "3-3", explanation: "yǒng(3) yuǎn(3) 조합입니다 (실제 발음 시 앞글자는 2성).", difficulty: "medium" },
      { type: "multipleChoice", question: "'永远'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "동작 표현", "장소 표현", "상태 묘사"], correctAnswer: "시간 표현", explanation: "지속되는 시간을 나타내는 부사적 용법입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我永远", "不会忘记", "你的帮助。"], correctAnswer: "我永远不会忘记你的帮助。", explanation: "주어+시간부사 + 부정동사구 + 목적어 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 21,
    questions: [
      { type: "multipleChoice", question: "'堕入'의 올바른 병음은 무엇입니까?", options: ["duò rù", "tuò rù", "duò lù", "duó rù"], correctAnswer: "duò rù", explanation: "堕入의 병음은 duò rù입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'堕入'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-2", "3-4"], correctAnswer: "4-4", explanation: "duò(4성) rù(4성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'堕入'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "어디론가 빠지는 구체적인 이동/동작을 의미합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他因", "一时糊涂", "而堕入了", "犯罪的深渊。"], correctAnswer: "他因一时糊涂而堕入了犯罪的深渊。", explanation: "원인(因...) + 결과(而...) 구조로 배열합니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'黑暗'의 올바른 병음은 무엇입니까?", options: ["hēi àn", "hēi ān", "hěi àn", "hēi nàn"], correctAnswer: "hēi àn", explanation: "黑暗의 병음은 hēi àn입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'黑暗'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "2-4", "4-4"], correctAnswer: "1-4", explanation: "hēi(1성) àn(4성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'黑暗'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "빛이 없는 상태를 묘사하는 형용사/명사입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["屋子里", "一片黑暗，", "什么也", "看不见。"], correctAnswer: "屋子里一片黑暗，什么也看不见。", explanation: "장소 + 상태 + 결과 순서로 배열합니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 22,
    questions: [
      { type: "multipleChoice", question: "'挣扎'의 올바른 병음은 무엇입니까?", options: ["zhēng zhá", "zhēng zhā", "zhèng zhá", "zēng zhá"], correctAnswer: "zhēng zhá", explanation: "挣扎의 병음은 zhēng zhá입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'挣扎'의 성조 조합은 무엇입니까?", options: ["1-2", "1-1", "4-2", "2-2"], correctAnswer: "1-2", explanation: "zhēng(1성) zhá(2성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'挣扎'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "대상 표현"], correctAnswer: "동작 표현", explanation: "살기 위해 발버둥 치는 구체적인 동작을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他在水中", "拼命挣扎，", "最后", "终于获救了。"], correctAnswer: "他在水中拼命挣扎，最后终于获救了。", explanation: "장소/동작 + 시간순에 따른 결과 순서입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'无法自拔'의 올바른 병음은 무엇입니까?", options: ["wú fǎ zì bá", "wǔ fǎ zì bá", "wú fā zì bá", "wú fǎ zhī bá"], correctAnswer: "wú fǎ zì bá", explanation: "无法自拔의 병음은 wú fǎ zì bá입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'无法自拔'의 성조 조합은 무엇입니까?", options: ["2-3-4-2", "2-3-4-4", "4-3-4-2", "2-2-4-2"], correctAnswer: "2-3-4-2", explanation: "wú(2) fǎ(3) zì(4) bá(2) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'无法自拔'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "어떤 상황에서 빠져나오지 못하는 심리적 상태를 묘사합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他深陷", "赌博之中，", "无法自拔。"], correctAnswer: "他深陷赌博之中，无法自拔。", explanation: "주어 + 빠진 상황 + 결과 상태 순입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 23,
    questions: [
      { type: "multipleChoice", question: "'野草'의 올바른 병음은 무엇입니까?", options: ["yě cǎo", "yè cǎo", "yě chǎo", "yě cāo"], correctAnswer: "yě cǎo", explanation: "野草의 병음은 yě cǎo입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'野草'의 성조 조합은 무엇입니까?", options: ["3-3", "2-3", "3-4", "1-3"], correctAnswer: "3-3", explanation: "yě(3) cǎo(3) 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'野草'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "时间 표현"], correctAnswer: "대상 표현", explanation: "들판에 자라는 풀(명사)을 지칭합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["春天到了，", "地里长出了", "绿绿的", "野草。"], correctAnswer: "春天到了，地里长出了绿绿的野草。", explanation: "배경 + 장소/동사 + 관형어 + 목적어 순입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 24,
    questions: [
      { type: "multipleChoice", question: "'绝望'의 올바른 병음은 무엇입니까?", options: ["jué wàng", "juě wàng", "jué wǎng", "jié wàng"], correctAnswer: "jué wàng", explanation: "绝望의 병음은 jué wàng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'绝望'의 성조 조합은 무엇입니까?", options: ["2-4", "1-4", "2-2", "3-4"], correctAnswer: "2-4", explanation: "jué(2성) wàng(4성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'绝望'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "상태 묘사", explanation: "희망이 없는 심리적 한계 상태를 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["在最绝望的时候，", "他也", "没有放弃。"], correctAnswer: "在最绝望的时候，他也没有放弃。", explanation: "시간적 조건 + 주어 + 부정문 순서입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'渴望'의 올바른 병음은 무엇입니까?", options: ["kě wàng", "hě wàng", "kě wǎng", "kè wàng"], correctAnswer: "kě wàng", explanation: "渴望의 병음은 kě wàng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'渴望'의 성조 조합은 무엇입니까?", options: ["3-4", "2-4", "3-2", "1-4"], correctAnswer: "3-4", explanation: "kě(3성) wàng(4성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'渴望'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "간절히 바라는 심리적 상태를 묘사합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["灾区人民", "渴望得到", "食物和水。"], correctAnswer: "灾区人民渴望得到食物和水。", explanation: "주어 + 심리 동사 + 목적어 순으로 배열합니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 25, questions: [] },
  { sentenceIndex: 26, questions: [] },
  {
    sentenceIndex: 27,
    questions: [
      { type: "multipleChoice", question: "'就算'의 올바른 병음은 무엇입니까?", options: ["jiù suàn", "jiū suàn", "jiù shuàn", "jiú suàn"], correctAnswer: "jiù suàn", explanation: "就算의 병음은 jiù suàn입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'就算'의 성조 조합은 무엇입니까?", options: ["4-4", "4-2", "3-4", "2-4"], correctAnswer: "4-4", explanation: "jiù(4성) suàn(4성) 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'就算'는 위 문장에서 어떤 역할을 합니까?", options: ["경험 표현", "동작 표현", "상태 묘사", "时间 표현"], correctAnswer: "상태 묘사", explanation: "가정의 상황을 설정하는 접속사 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["就算下大雨，", "我也要", "按时到达。"], correctAnswer: "就算下大雨，我也要按时到达。", explanation: "가정(就算...) + 결과(也要...) 순서입니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 28,
    questions: [
      { type: "multipleChoice", question: "'向前走'의 올바른 병음은 무엇입니까?", options: ["xiàng qián zǒu", "xiǎng qián zǒu", "xiàng qiān zǒu", "xiang qián zǒu"], correctAnswer: "xiàng qián zǒu", explanation: "xiàng(4)-qián(2)-zǒu(3)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'向前走'의 성조 조합은 무엇입니까?", options: ["4-2-3", "3-2-3", "4-1-3", "4-2-4"], correctAnswer: "4-2-3", explanation: "4-2-3 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'向前走'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'앞으로 나아가다'라는 행동을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我都会", "向前走。", "不管多难，", "都会向前走。"], correctAnswer: "不管多难，我都会向前走。", explanation: "조건절 뒤에 주절이 옵니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 29,
    questions: [
      { type: "multipleChoice", question: "'夺走'의 올바른 병음은 무엇입니까?", options: ["duó zǒu", "duǒ zǒu", "duó zōu", "duo zǒu"], correctAnswer: "duó zǒu", explanation: "duó(2) + zǒu(3)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'夺走'의 성조 조합은 무엇입니까?", options: ["2-3", "3-3", "2-4", "1-3"], correctAnswer: "2-3", explanation: "2-3 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'夺走'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "'빼앗아 가다'라는 행동을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["夺走了", "时间", "很多东西。", "时间夺走了"], correctAnswer: "时间夺走了很多东西。", explanation: "주어 + 동사 + 목적어입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 30,
    questions: [
      { type: "multipleChoice", question: "'向前走'의 올바른 병음은 무엇입니까?", options: ["xiàng qián zǒu", "xiǎng qián zǒu", "xiàng qiān zǒu", "xiang qián zǒu"], correctAnswer: "xiàng qián zǒu", explanation: "xiàng(4)-qián(2)-zǒu(3)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'向前走'의 성조 조합은 무엇입니까?", options: ["4-2-3", "4-2-4", "3-2-3", "4-1-3"], correctAnswer: "4-2-3", explanation: "4-2-3 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'向前走'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'나아가다'라는 행동을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["也要", "向前走。", "跌倒了", "跌倒了也要"], correctAnswer: "跌倒了也要向前走。", explanation: "앞 절(跌倒了) 뒤에 '也要'가 옵니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 31,
    questions: [
      { type: "multipleChoice", question: "'错过'의 올바른 병음은 무엇입니까?", options: ["cuò guò", "cuó guò", "cuò guǒ", "cuo guò"], correctAnswer: "cuò guò", explanation: "cuò(4) + guò(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'错过'의 성조 조합은 무엇입니까?", options: ["4-4", "4-3", "2-4", "3-4"], correctAnswer: "4-4", explanation: "4-4 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'错过'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "'놓치다'라는 행동을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我不想", "错过", "这次机会。", "错过这次机会。"], correctAnswer: "我不想错过这次机会。", explanation: "'不想' 뒤에 동사구가 옵니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 32,
    questions: [
      { type: "multipleChoice", question: "'向前走'의 올바른 병음은 무엇입니까?", options: ["xiàng qián zǒu", "xiǎng qián zǒu", "xiàng qiān zǒu", "xiang qián zǒu"], correctAnswer: "xiàng qián zǒu", explanation: "xiàng(4)-qián(2)-zǒu(3)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'向前走'의 성조 조합은 무엇입니까?", options: ["4-2-3", "4-2-4", "3-2-3", "4-1-3"], correctAnswer: "4-2-3", explanation: "4-2-3 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'向前走'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'계속 걷다'라는 행동을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["别回头，", "继续", "向前走。", "继续向前走。"], correctAnswer: "别回头，继续向前走。", explanation: "쉼표 뒤에 동작 지시가 옵니다.", difficulty: "medium" },
    ]
  },
  { sentenceIndex: 33, questions: [] },
  {
    sentenceIndex: 34,
    questions: [
      { type: "multipleChoice", question: "'跨过'의 올바른 병음은 무엇입니까?", options: ["kuà guò", "kuá guò", "kuà guǒ", "kua guò"], correctAnswer: "kuà guò", explanation: "kuà(4) + guò(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'跨过'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-3", "3-4"], correctAnswer: "4-4", explanation: "4-4 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'跨过'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'넘어서다'라는 행동을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我想", "跨过", "山和大海。", "跨过山和大海。"], correctAnswer: "我想跨过山和大海。", explanation: "'想' 뒤에 동사구가 옵니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 35,
    questions: [
      { type: "multipleChoice", question: "'穿过'의 올바른 병음은 무엇입니까?", options: ["chuān guò", "chuán guò", "chuān guǒ", "chuan guò"], correctAnswer: "chuān guò", explanation: "chuān(1) + guò(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'穿过'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-3", "4-4"], correctAnswer: "1-4", explanation: "1-4 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'穿过'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'통과하다'라는 행동을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我", "穿过", "人山人海", "去找你。", "穿过人山人海"], correctAnswer: "我穿过人山人海去找你。", explanation: "동작(穿过) 뒤에 목적(去找你)이 옵니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'人山人海'의 올바른 병음은 무엇입니까?", options: ["rén shān rén hǎi", "rén shān rěn hǎi", "rén shǎn rén hǎi", "ren shān rén hǎi"], correctAnswer: "rén shān rén hǎi", explanation: "rén(2)-shān(1)-rén(2)-hǎi(3)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'人山人海'의 성조 조합은 무엇입니까?", options: ["2-1-2-3", "2-2-2-3", "1-1-2-3", "2-1-3-3"], correctAnswer: "2-1-2-3", explanation: "2-1-2-3 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'人山人海'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "사람이 매우 많은 상태를 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["广场上", "人山人海。", "广场", "上人山人海。"], correctAnswer: "广场上人山人海。", explanation: "장소 + 상태 표현입니다.", difficulty: "hard" },
    ]
  },
  {
    sentenceIndex: 36,
    questions: [
      { type: "multipleChoice", question: "'拥有'의 올바른 병음은 무엇입니까?", options: ["yōng yǒu", "yǒng yǒu", "yōng yòu", "yong yǒu"], correctAnswer: "yōng yǒu", explanation: "yōng(1) + yǒu(3)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'拥有'의 성조 조합은 무엇입니까?", options: ["1-3", "3-3", "1-4", "2-3"], correctAnswer: "1-3", explanation: "1-3 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'拥有'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "'소유하다'라는 행동을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我想", "拥有", "一切。", "拥有一切。"], correctAnswer: "我想拥有一切。", explanation: "'想' 뒤에 동사구가 옵니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'一切'의 올바른 병음은 무엇입니까?", options: ["yí qiè", "yì qiè", "yí qiě", "yi qiè"], correctAnswer: "yí qiè", explanation: "yí(2) + qiè(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'一切'의 성조 조합은 무엇입니까?", options: ["2-4", "4-4", "2-3", "1-4"], correctAnswer: "2-4", explanation: "2-4 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'一切'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "수량 표현", "동작 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "'拥有'의 목적어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["拥有", "一切。", "我想", "我想拥有"], correctAnswer: "我想拥有一切。", explanation: "주어 + 의도 + 동사 + 목적어입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 37,
    questions: [
      { type: "multipleChoice", question: "'转眼'의 올바른 병음은 무엇입니까?", options: ["zhuǎn yǎn", "zhuàn yǎn", "zhuǎn yàn", "zhuan yǎn"], correctAnswer: "zhuǎn yǎn", explanation: "zhuǎn(3) + yǎn(3)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'转眼'의 성조 조합은 무엇입니까?", options: ["3-3", "4-3", "3-4", "2-3"], correctAnswer: "3-3", explanation: "3-3 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'转眼'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "시간 표현", explanation: "'눈 깜짝할 사이'라는 시간/순간을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["一年", "就过去了。", "转眼间", "一年就过去了。"], correctAnswer: "转眼间一年就过去了。", explanation: "시간부사(转眼间)가 문두에 옵니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'飘散如烟'의 올바른 병음은 무엇입니까?", options: ["piāo sàn rú yān", "piáo sàn rú yān", "piāo sǎn rú yān", "piao sàn rú yān"], correctAnswer: "piāo sàn rú yān", explanation: "piāo(1)-sàn(4)-rú(2)-yān(1)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'飘散如烟'의 성조 조합은 무엇입니까?", options: ["1-4-2-1", "1-3-2-1", "2-4-2-1", "1-4-1-1"], correctAnswer: "1-4-2-1", explanation: "1-4-2-1 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'飘散如烟'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "'回忆'의 상태(흩어짐)를 비유로 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["回忆", "飘散如烟。", "如烟。", "飘散"], correctAnswer: "回忆飘散如烟。", explanation: "주어 + 비유적 서술입니다.", difficulty: "hard" },
    ]
  },
  {
    sentenceIndex: 38,
    questions: [
      { type: "multipleChoice", question: "'失落'의 올바른 병음은 무엇입니까?", options: ["shī luò", "shí luò", "shī luō", "shi luò"], correctAnswer: "shī luò", explanation: "shī(1) + luò(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'失落'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-1", "3-4"], correctAnswer: "1-4", explanation: "1-4 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'失落'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "상태 묘사", explanation: "감정/상태를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我", "感到", "很", "失落。", "感到很失落。"], correctAnswer: "我感到很失落。", explanation: "동사(感到) 뒤에 정도 + 상태가 옵니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'失望'의 올바른 병음은 무엇입니까?", options: ["shī wàng", "shí wàng", "shī wǎng", "shi wàng"], correctAnswer: "shī wàng", explanation: "shī(1) + wàng(4)입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'失望'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-3", "4-4"], correctAnswer: "1-4", explanation: "1-4 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'失望'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "감정 상태를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "对结果", "很", "失望。", "对结果很失望。"], correctAnswer: "他对结果很失望。", explanation: "'对+대상' 뒤에 상태가 옵니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'失掉'의 올바른 병음은 무엇입니까?", options: ["shī diào", "shí diào", "shī diāo", "shi diào"], correctAnswer: "shī diào", explanation: "shī(1) + diào(4)입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'失掉'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-1", "3-4"], correctAnswer: "1-4", explanation: "1-4 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'失掉'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'잃다'라는 행동을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "失掉了", "方向。", "失掉了方向。"], correctAnswer: "他失掉了方向。", explanation: "동사(失掉了) 뒤에 목적어가 옵니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'方向'의 올바른 병음은 무엇입니까?", options: ["fāng xiàng", "fáng xiàng", "fāng xiǎng", "fang xiàng"], correctAnswer: "fāng xiàng", explanation: "fāng(1) + xiàng(4)입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'方向'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-3", "4-4"], correctAnswer: "1-4", explanation: "1-4 조합입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'方向'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "수량 표현", "동작 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "'失掉'의 목적어입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["方向。", "他", "失掉了", "他失掉了"], correctAnswer: "他失掉了方向。", explanation: "주어 + 동사 + 목적어입니다.", difficulty: "easy" },
    ]
  },
  {
    sentenceIndex: 39,
    questions: [
      { type: "multipleChoice", question: "'平凡'의 올바른 병음은 무엇입니까?", options: ["píng fán", "pǐng fán", "píng fàn", "bíng fán"], correctAnswer: "píng fán", explanation: "平凡는 píng fán으로 읽으며 2성+2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'平凡'의 성조 조합은 무엇입니까?", options: ["2-2", "2-4", "1-2", "3-2"], correctAnswer: "2-2", explanation: "píng(2성)과 fán(2성)이므로 성조 조합은 2-2입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'平凡'는 '他虽然是个平凡的人，但工作很刻苦。'에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "平凡는 사람의 특성이 평범함을 묘사하는 형용사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他虽然是个", "平凡的人，", "但工作", "很刻苦。"], correctAnswer: "他虽然是个平凡的人，但工作很刻苦。", explanation: "虽然...但... 전환 구조로 앞절과 뒷절을 연결합니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'唯一'의 올바른 병음은 무엇입니까?", options: ["wéi yī", "wèi yī", "wéi yí", "wěi yī"], correctAnswer: "wéi yī", explanation: "唯一는 wéi yī로 읽으며 2성+1성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'唯一'의 성조 조합은 무엇입니까?", options: ["2-1", "4-1", "2-4", "3-1"], correctAnswer: "2-1", explanation: "wéi(2성)와 yī(1성)이므로 성조 조합은 2-1입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'唯一'는 '这是他唯一的机会。'에서 어떤 역할을 합니까?", options: ["수량 및 범위 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "수량 및 범위 표현", explanation: "唯一는 오직 하나뿐임을 한정하는 관형어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这是他", "唯一的", "机会。"], correctAnswer: "这是他唯一的机会。", explanation: "주어+是+관형어+목적어 구조입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 40,
    questions: [
      { type: "multipleChoice", question: "'毁'의 올바른 병음은 무엇입니까?", options: ["huǐ", "huì", "huí", "huī"], correctAnswer: "huǐ", explanation: "毁는 huǐ로 읽으며 3성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'毁'의 성조 조합은 무엇입니까?", options: ["3", "4", "2", "1"], correctAnswer: "3", explanation: "huǐ는 3성 단음절입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'毁'는 '这场火灾毁了他的房子。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "毁는 무언가를 파괴하는 동작을 나타내는 동사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这场火灾", "毁了", "他的房子。"], correctAnswer: "这场火灾毁了他的房子。", explanation: "주어+동사+목적어 구조입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 41,
    questions: [
      { type: "multipleChoice", question: "'永远'의 올바른 병음은 무엇입니까?", options: ["yǒng yuǎn", "yōng yuǎn", "yóng yuǎn", "yǒng yuān"], correctAnswer: "yǒng yuǎn", explanation: "永远는 yǒng yuǎn으로 읽으며 3성+3성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'永远'의 성조 조합은 무엇입니까?", options: ["3-3", "1-3", "3-2", "4-3"], correctAnswer: "3-3", explanation: "yǒng(3성)과 yuǎn(3성)이므로 성조 조합은 3-3입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'永远'는 '我会永远记得这一天。'에서 어떤 역할을 합니까?", options: ["시간 표현", "장소 표현", "동작 표현", "상태 묘사"], correctAnswer: "시간 표현", explanation: "永远는 영원히 계속됨을 나타내는 시간 부사입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我会", "永远记得", "这一天。"], correctAnswer: "我会永远记得这一天。", explanation: "주어+조동사+시간부사+동사+목적어 구조입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'离开'의 올바른 병음은 무엇입니까?", options: ["lí kāi", "lì kāi", "lí kài", "lǐ kāi"], correctAnswer: "lí kāi", explanation: "离开는 lí kāi로 읽으며 2성+1성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'离开'의 성조 조합은 무엇입니까?", options: ["2-1", "4-1", "2-4", "3-1"], correctAnswer: "2-1", explanation: "lí(2성)와 kāi(1성)이므로 성조 조합은 2-1입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'离开'는 '他悄悄地离开了房间。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "离开는 어떤 장소나 사람 곁을 떠나는 동작을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他悄悄地", "离开了", "房间。"], correctAnswer: "他悄悄地离开了房间。", explanation: "주어+방식부사구+동사+목적어 구조입니다.", difficulty: "easy" },
    ]
  },
  {
    sentenceIndex: 42,
    questions: [
      { type: "multipleChoice", question: "'堕入'의 올바른 병음은 무엇입니까?", options: ["duò rù", "duó rù", "duò rú", "duǒ rù"], correctAnswer: "duò rù", explanation: "堕入는 duò rù로 읽으며 4성+4성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'堕入'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-2", "3-4"], correctAnswer: "4-4", explanation: "duò(4성)와 rù(4성)이므로 성조 조합은 4-4입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'堕入'는 '他堕入了无尽的黑暗之中。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "堕入는 어떤 상태나 처지로 빠져드는 동작을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他堕入了", "无尽的", "黑暗之中。"], correctAnswer: "他堕入了无尽的黑暗之中。", explanation: "주어+동사+관형어+목적어 구조입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'黑暗'의 올바른 병음은 무엇입니까?", options: ["hēi àn", "hěi àn", "hēi ān", "hēi án"], correctAnswer: "hēi àn", explanation: "黑暗는 hēi àn으로 읽으며 1성+4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'黑暗'의 성조 조합은 무엇입니까?", options: ["1-4", "1-1", "3-4", "2-4"], correctAnswer: "1-4", explanation: "hēi(1성)와 àn(4성)이므로 성조 조합은 1-4입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'黑暗'는 '屋子里一片黑暗。'에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "대상 표현"], correctAnswer: "상태 묘사", explanation: "黑暗는 빛이 없어 어두운 상태를 묘사합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["屋子里", "一片", "黑暗。"], correctAnswer: "屋子里一片黑暗。", explanation: "장소어+수량묘사+상태명사 구조입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 43,
    questions: [
      { type: "multipleChoice", question: "'挣扎'의 올바른 병음은 무엇입니까?", options: ["zhēng zhá", "zhèng zhá", "zhēng zhǎ", "zhēn zhá"], correctAnswer: "zhēng zhá", explanation: "挣扎는 zhēng zhá로 읽으며 1성+2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'挣扎'의 성조 조합은 무엇입니까?", options: ["1-2", "4-2", "1-3", "1-1"], correctAnswer: "1-2", explanation: "zhēng(1성)과 zhá(2성)이므로 성조 조합은 1-2입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'挣扎'는 '他在水中拼命挣扎。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "挣扎는 어려움에서 벗어나려 몸부림치는 동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "在水中", "拼命挣扎。"], correctAnswer: "他在水中拼命挣扎。", explanation: "주어+장소구+정도부사+동사 구조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'无法自拔'의 올바른 병음은 무엇입니까?", options: ["wú fǎ zì bá", "wù fǎ zì bá", "wú fā zì bá", "wú fǎ zì bǎ"], correctAnswer: "wú fǎ zì bá", explanation: "无法自拔는 wú fǎ zì bá로 읽으며 2-3-4-2성입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'无法自拔'의 성조 조합은 무엇입니까?", options: ["2-3-4-2", "2-3-4-4", "2-4-4-2", "1-3-4-2"], correctAnswer: "2-3-4-2", explanation: "wú(2)·fǎ(3)·zì(4)·bá(2) 성조 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'无法自拔'는 '他陷入痛苦，无法自拔。'에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "无法自拔는 빠져나올 수 없는 상태를 묘사하는 관용표현입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他陷入痛苦，", "无法", "自拔。"], correctAnswer: "他陷入痛苦，无法自拔。", explanation: "원인절+결과표현 구조입니다.", difficulty: "hard" },
    ]
  },
  {
    sentenceIndex: 44,
    questions: [
      { type: "multipleChoice", question: "'野草野花'의 올바른 병음은 무엇입니까?", options: ["yě cǎo yě huā", "yè cǎo yě huā", "yě cǎo yè huā", "yě chǎo yě huā"], correctAnswer: "yě cǎo yě huā", explanation: "野草野花는 yě cǎo yě huā로 읽으며 3-3-3-1성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'野草野花'의 성조 조합은 무엇입니까?", options: ["3-3-3-1", "4-3-3-1", "3-3-4-1", "3-1-3-1"], correctAnswer: "3-3-3-1", explanation: "yě(3)·cǎo(3)·yě(3)·huā(1) 성조 조합입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'野草野花'는 '山坡上到处都是野草野花。'에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "상태 묘사"], correctAnswer: "대상 표현", explanation: "野草野花는 존재하는 사물을 나타내는 명사 목적어입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["山坡上", "到处都是", "野草野花。"], correctAnswer: "山坡上到处都是野草野花。", explanation: "장소어+부사+동사+목적어 구조입니다.", difficulty: "easy" },
    ]
  },
  {
    sentenceIndex: 45,
    questions: [
      { type: "multipleChoice", question: "'绝望'의 올바른 병음은 무엇입니까?", options: ["jué wàng", "juě wàng", "jué wāng", "juè wàng"], correctAnswer: "jué wàng", explanation: "绝望는 jué wàng으로 읽으며 2성+4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'绝望'의 성조 조합은 무엇입니까?", options: ["2-4", "3-4", "2-1", "1-4"], correctAnswer: "2-4", explanation: "jué(2성)와 wàng(4성)이므로 성조 조합은 2-4입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'绝望'는 '在最绝望的时候，他也没有放弃。'에서 어떤 역할을 합니까?", options: ["심리 상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "심리 상태 묘사", explanation: "绝望는 희망이 완전히 사라진 심리적 상태를 묘사합니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["在最绝望的", "时候，", "他也没有", "放弃。"], correctAnswer: "在最绝望的时候，他也没有放弃。", explanation: "시간전치사구+주어+부정부사구+동사 구조입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'渴望'의 올바른 병음은 무엇입니까?", options: ["kě wàng", "kè wàng", "kě wǎng", "ké wàng"], correctAnswer: "kě wàng", explanation: "渴望는 kě wàng으로 읽으며 3성+4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'渴望'의 성조 조합은 무엇입니까?", options: ["3-4", "4-4", "3-2", "2-4"], correctAnswer: "3-4", explanation: "kě(3성)와 wàng(4성)이므로 성조 조합은 3-4입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'渴望'는 '他渴望得到别人的认可。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "渴望는 무언가를 간절히 바라는 심리적 동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他渴望", "得到", "别人的认可。"], correctAnswer: "他渴望得到别人的认可。", explanation: "주어+동사+보충동사구+목적어 구조입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 46,
    questions: [
      { type: "multipleChoice", question: "'平凡'의 올바른 병음은 무엇입니까?", options: ["píng fán", "pǐng fán", "píng fàn", "bíng fán"], correctAnswer: "píng fán", explanation: "平凡는 píng fán으로 읽으며 2성+2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'平凡'의 성조 조합은 무엇입니까?", options: ["2-2", "2-4", "1-2", "3-2"], correctAnswer: "2-2", explanation: "píng(2성)과 fán(2성)이므로 성조 조합은 2-2입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'平凡'는 '他虽然是个平凡的人，但工作很刻苦。'에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "平凡는 사람의 특성이 평범함을 묘사하는 형용사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他虽然是个", "平凡的人，", "但工作", "很刻苦。"], correctAnswer: "他虽然是个平凡的人，但工作很刻苦。", explanation: "虽然...但... 전환 구조로 앞절과 뒷절을 연결합니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 47,
    questions: [
      { type: "multipleChoice", question: "'跨过'의 올바른 병음은 무엇입니까?", options: ["kuà guò", "kuā guò", "kuà guó", "kuǎ guò"], correctAnswer: "kuà guò", explanation: "跨过는 kuà guò로 읽으며 4성+4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'跨过'의 성조 조합은 무엇입니까?", options: ["4-4", "1-4", "4-2", "3-4"], correctAnswer: "4-4", explanation: "kuà(4성)와 guò(4성)이므로 성조 조합은 4-4입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'跨过'는 '我们要努力跨过这个难关。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "대상 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "跨过는 어려움을 넘어서는 동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们要", "努力跨过", "这个难关。"], correctAnswer: "我们要努力跨过这个难关。", explanation: "주어+조동사+부사+동사+목적어 구조입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 48,
    questions: [
      { type: "multipleChoice", question: "'穿过'의 올바른 병음은 무엇입니까?", options: ["chuān guò", "chuǎn guò", "chuān guó", "chuàn guò"], correctAnswer: "chuān guò", explanation: "穿过는 chuān guò로 읽으며 1성+4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'穿过'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-2", "4-4"], correctAnswer: "1-4", explanation: "chuān(1성)과 guò(4성)이므로 성조 조합은 1-4입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'穿过'는 '他穿过森林，找到了出口。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "穿过는 어떤 공간을 통과하는 동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他穿过森林，", "找到了", "出口。"], correctAnswer: "他穿过森林，找到了出口。", explanation: "동작절+결과절 구조입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 49,
    questions: [
      { type: "multipleChoice", question: "'问遍'의 올바른 병음은 무엇입니까?", options: ["wèn biàn", "wén biàn", "wèn biān", "wěn biàn"], correctAnswer: "wèn biàn", explanation: "问遍는 wèn biàn으로 읽으며 4성+4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'问遍'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-3", "3-4"], correctAnswer: "4-4", explanation: "wèn(4성)과 biàn(4성)이므로 성조 조합은 4-4입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'问遍'는 '他问遍了所有的人，都没有得到答案。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "问遍는 빠짐없이 모두 물어보는 동작을 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他问遍了", "所有的人，", "都没有", "得到答案。"], correctAnswer: "他问遍了所有的人，都没有得到答案。", explanation: "동작절+결과절 구조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'整个'의 올바른 병음은 무엇입니까?", options: ["zhěng gè", "zhèng gè", "zhěng gē", "zěng gè"], correctAnswer: "zhěng gè", explanation: "整个는 zhěng gè로 읽으며 3성+4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'整个'의 성조 조합은 무엇입니까?", options: ["3-4", "4-4", "3-1", "2-4"], correctAnswer: "3-4", explanation: "zhěng(3성)과 gè(4성)이므로 성조 조합은 3-4입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'整个'는 '整个下午我都在看书。'에서 어떤 역할을 합니까?", options: ["수량 및 범위 표현", "동작 표현", "장소 표현", "상태 묘사"], correctAnswer: "수량 및 범위 표현", explanation: "整个는 전체 범위를 한정하는 관형어 역할을 합니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["整个下午", "我都在", "看书。"], correctAnswer: "整个下午我都在看书。", explanation: "시간범위어+주어+부사+진행술어 구조입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 50,
    questions: [
      { type: "multipleChoice", question: "'从来'의 올바른 병음은 무엇입니까?", options: ["cóng lái", "cōng lái", "cǒng lái", "còng lái"], correctAnswer: "cóng lái", explanation: "从来는 cóng lái로 읽으며 2성+2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'从来'의 성조 조합은 무엇입니까?", options: ["2-2", "1-2", "2-1", "4-2"], correctAnswer: "2-2", explanation: "cóng(2성)과 lái(2성)이므로 성조 조합은 2-2입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'从来'는 '他从来不迟到。'에서 어떤 역할을 합니까?", options: ["시간 표현", "장소 표현", "대상 표현", "수량 표현"], correctAnswer: "시간 표현", explanation: "从来는 과거부터 현재까지를 나타내는 시간 부사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "从来不", "迟到。"], correctAnswer: "他从来不迟到。", explanation: "주어+시간부사+부정어+동사 구조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'得到'의 올바른 병음은 무엇입니까?", options: ["dé dào", "dě dào", "dé dāo", "dè dào"], correctAnswer: "dé dào", explanation: "得到는 dé dào로 읽으며 2성+4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'得到'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "4-4", "1-4"], correctAnswer: "2-4", explanation: "dé(2성)와 dào(4성)이므로 성조 조합은 2-4입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'得到'는 '他终于得到了想要的结果。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "得到는 무언가를 얻거나 획득하는 동작을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他终于", "得到了", "想要的结果。"], correctAnswer: "他终于得到了想要的结果。", explanation: "주어+부사+동사+관형절+목적어 구조입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'答案'의 올바른 병음은 무엇입니까?", options: ["dá àn", "dǎ àn", "dá ān", "dà àn"], correctAnswer: "dá àn", explanation: "答案는 dá àn으로 읽으며 2성+4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'答案'의 성조 조합은 무엇입니까?", options: ["2-4", "3-4", "2-1", "4-4"], correctAnswer: "2-4", explanation: "dá(2성)와 àn(4성)이므로 성조 조합은 2-4입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'答案'는 '这道题的答案很简单。'에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "答案는 서술의 주체가 되는 명사로 대상을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这道题的", "答案", "很简单。"], correctAnswer: "这道题的答案很简单。", explanation: "관형어+주어+술어 구조입니다.", difficulty: "easy" },
    ]
  },
  {
    sentenceIndex: 51,
    questions: [
      { type: "multipleChoice", question: "'不过'의 올바른 병음은 무엇입니까?", options: ["bù guò", "bú guò", "bù guō", "bù guó"], correctAnswer: "bù guò", explanation: "不过는 bù guò로 읽으며 4성+4성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'不过'의 성조 조합은 무엇입니까?", options: ["4-4", "2-4", "4-1", "4-2"], correctAnswer: "4-4", explanation: "bù(4성)와 guò(4성)이므로 성조 조합은 4-4입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'不过'는 '我不过是开个玩笑。'에서 어떤 역할을 합니까?", options: ["범위 및 정도 제한", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "범위 및 정도 제한", explanation: "不过는 '~일 뿐이다'라는 제한적 의미를 나타내는 부사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我不过是", "开个", "玩笑。"], correctAnswer: "我不过是开个玩笑。", explanation: "주어+부사구+동사+목적어 구조입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'冥冥中'의 올바른 병음은 무엇입니까?", options: ["míng míng zhōng", "mǐng mǐng zhōng", "míng míng zhòng", "mín mín zhōng"], correctAnswer: "míng míng zhōng", explanation: "冥冥中는 míng míng zhōng으로 읽으며 2-2-1성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'冥冥中'의 성조 조합은 무엇입니까?", options: ["2-2-1", "2-2-4", "3-3-1", "1-1-1"], correctAnswer: "2-2-1", explanation: "míng(2)·míng(2)·zhōng(1) 성조 조합입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'冥冥中'는 '冥冥中好像有一股力量在指引他。'에서 어떤 역할을 합니까?", options: ["상태 및 상황 묘사", "장소 표현", "동작 표현", "수량 표현"], correctAnswer: "상태 및 상황 묘사", explanation: "冥冥中는 보이지 않는 운명적 상황을 묘사하는 부사적 성분입니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["冥冥中", "好像有一股", "力量在指引他。"], correctAnswer: "冥冥中好像有一股力量在指引他。", explanation: "상황부사+추측부사+존재구+동작진행 구조입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'唯一'의 올바른 병음은 무엇입니까?", options: ["wéi yī", "wèi yī", "wéi yí", "wěi yī"], correctAnswer: "wéi yī", explanation: "唯一는 wéi yī로 읽으며 2성+1성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'唯一'의 성조 조합은 무엇입니까?", options: ["2-1", "4-1", "2-4", "3-1"], correctAnswer: "2-1", explanation: "wéi(2성)와 yī(1성)이므로 성조 조합은 2-1입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'唯一'는 '这是他唯一的机会。'에서 어떤 역할을 합니까?", options: ["수량 및 범위 표현", "동작 표현", "시간 표현", "상태 묘사"], correctAnswer: "수량 및 범위 표현", explanation: "唯一는 오직 하나뿐임을 한정하는 관형어입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这是他", "唯一的", "机会。"], correctAnswer: "这是他唯一的机会。", explanation: "주어+是+관형어+목적어 구조입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 52,
    questions: [
      { type: "multipleChoice", question: "'无言'의 올바른 병음은 무엇입니까?", options: ["wú yán", "wǔ yán", "wú yàn", "wù yán"], correctAnswer: "wú yán", explanation: "无言는 wú yán으로 읽으며 2성+2성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'无言'의 성조 조합은 무엇입니까?", options: ["2-2", "3-2", "2-4", "1-2"], correctAnswer: "2-2", explanation: "wú(2성)와 yán(2성)이므로 성조 조합은 2-2입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'无言'는 '他默默无言地走开了。'에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "无言는 말이 없는 고요한 상태를 묘사합니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "默默无言地", "走开了。"], correctAnswer: "他默默无言地走开了。", explanation: "주어+상태부사구(地포함)+동사구 구조입니다.", difficulty: "easy" },
    ]
  },
  {
    sentenceIndex: 53,
    questions: [
      { type: "multipleChoice", question: "'如此这般'의 올바른 병음은 무엇입니까?", options: ["rú cǐ zhè bān", "rù cǐ zhè bān", "rú cǐ zhè bǎn", "rú chǐ zhè bān"], correctAnswer: "rú cǐ zhè bān", explanation: "如此这般는 rú cǐ zhè bān으로 읽으며 2-3-4-1성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'如此这般'의 성조 조합은 무엇입니까?", options: ["2-3-4-1", "2-3-1-1", "4-3-4-1", "2-2-4-1"], correctAnswer: "2-3-4-1", explanation: "rú(2)·cǐ(3)·zhè(4)·bān(1) 성조 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'如此这般'는 '他如此这般地向我解释了一番。'에서 어떤 역할을 합니까?", options: ["방식 묘사", "장소 표현", "대상 표현", "시간 표현"], correctAnswer: "방식 묘사", explanation: "如此这般는 구체적인 방식이나 과정을 나타내는 부사구입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "如此这般地", "向我解释了", "一番。"], correctAnswer: "他如此这般地向我解释了一番。", explanation: "주어+방식부사+대상및동사+수량보어 구조입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 54,
    questions: [
      { type: "multipleChoice", question: "'眼前'의 올바른 병음은 무엇입니까?", options: ["yǎn qián", "yàn qián", "yǎn qiān", "yán qián"], correctAnswer: "yǎn qián", explanation: "眼前는 yǎn qián으로 읽으며 3성+2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'眼前'의 성조 조합은 무엇입니까?", options: ["3-2", "4-2", "3-1", "2-2"], correctAnswer: "3-2", explanation: "yǎn(3성)과 qián(2성)이므로 성조 조합은 3-2입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'眼前'는 '要把眼前的学习任务完成好。'에서 어떤 역할을 합니까?", options: ["시간 및 장소 표현", "동작 표현", "상태 묘사", "수량 표현"], correctAnswer: "시간 및 장소 표현", explanation: "眼前는 눈앞이라는 물리적 위치 혹은 현재를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["要把", "眼前的", "学习任务", "完成好。"], correctAnswer: "要把眼前的学习任务完成好。", explanation: "把자문 구조로 관형어+목적어를 술어 앞에 배치합니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 55,
    questions: [
      { type: "multipleChoice", question: "'依然'의 올바른 병음은 무엇입니까?", options: ["yī rán", "yí rán", "yī rǎn", "yì rán"], correctAnswer: "yī rán", explanation: "依然는 yī rán으로 읽으며 1성+2성입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'依然'의 성조 조합은 무엇입니까?", options: ["1-2", "1-1", "2-2", "4-2"], correctAnswer: "1-2", explanation: "yī(1성)와 rán(2성)이므로 성조 조합은 1-2입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'依然'는 '这么多年过去了，他依然很年轻。'에서 어떤 역할을 합니까?", options: ["상태 지속 묘사", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "상태 지속 묘사", explanation: "依然는 변함없이 예전 상태를 유지함을 나타내는 부사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这么多年过去了，", "他依然", "很年轻。"], correctAnswer: "这么多年过去了，他依然很年轻。", explanation: "시간경과절+주어+부사+형용사술어 구조입니다.", difficulty: "medium" },
    ]
  },
  {
    sentenceIndex: 56,
    questions: [
      { type: "multipleChoice", question: "'讲到'의 올바른 병음은 무엇입니까?", options: ["jiǎng dào", "jiāng dào", "jiǎng dāo", "jiàng dào"], correctAnswer: "jiǎng dào", explanation: "讲到는 jiǎng dào로 읽으며 3성+4성입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'讲到'의 성조 조합은 무엇입니까?", options: ["3-4", "1-4", "3-2", "4-4"], correctAnswer: "3-4", explanation: "jiǎng(3성)과 dào(4성)이므로 성조 조합은 3-4입니다.", difficulty: "easy" },
      { type: "multipleChoice", question: "'讲到'는 '老师讲到这里，停了下来。'에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "讲到는 말하거나 설명하는 동작이 어떤 지점에 이르렀음을 나타냅니다.", difficulty: "easy" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["老师讲到", "这里，", "停了下来。"], correctAnswer: "老师讲到这里，停了下来。", explanation: "주어+동사+목적어+결과절 구조입니다.", difficulty: "easy" },
    ]
  },
];

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const sentencePractice = pingfanPracticeData.find(p => p.sentenceIndex === sentenceIndex);
  return sentencePractice?.questions || [];
}



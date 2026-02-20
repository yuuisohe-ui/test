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
  { sentenceIndex: 28, questions: [] },
  {
    sentenceIndex: 29,
    questions: [
      { type: "multipleChoice", question: "'夺走'의 올바른 병음은 무엇입니까?", options: ["duó zǒu", "duō zǒu", "tuó zǒu", "duó zóu"], correctAnswer: "duó zǒu", explanation: "夺走의 병음은 duó zǒu입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'夺走'의 성조 조합은 무엇입니까?", options: ["2-3", "1-3", "2-4", "4-3"], correctAnswer: "2-3", explanation: "duó(2성) zǒu(3성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'夺走'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "时间 표현"], correctAnswer: "동작 표현", explanation: "빼앗아 가는 강한 동작을 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["地震", "夺走了", "许多人的生命。"], correctAnswer: "地震夺走了许多人的生命。", explanation: "주어(원인) + 동사 + 목적어 순서로 배열합니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 30, questions: [] },
  {
    sentenceIndex: 31,
    questions: [
      { type: "multipleChoice", question: "'错过'의 올바른 병음은 무엇입니까?", options: ["cuò guò", "cuō guò", "chuò guò", "cuò guó"], correctAnswer: "cuò guò", explanation: "错过의 병음은 cuò guò입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'错过'의 성조 조합은 무엇입니까?", options: ["4-4", "4-0", "1-4", "3-4"], correctAnswer: "4-4", explanation: "cuò(4성) guò(4성) 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'错过'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "경험 표현", "时间 표현"], correctAnswer: "동작 표현", explanation: "기회를 놓치는 구체적인 상황을 나타내는 동사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["因为堵车，", "他错过了", "最后一班火车。"], correctAnswer: "因为堵车，他错过了最后一班火车。", explanation: "이유(因为) + 동사구 + 목적어 순서입니다.", difficulty: "medium" }
    ]
  },
  { sentenceIndex: 32, questions: [] },
  { sentenceIndex: 33, questions: [] },
  { sentenceIndex: 34, questions: [] },
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
  { sentenceIndex: 47, questions: [] },
  {
    sentenceIndex: 48,
    questions: [
      { type: "multipleChoice", question: "'问遍'의 올바른 병음은 무엇입니까?", options: ["wèn biàn", "wèn biān", "wén biàn", "wèn piàn"], correctAnswer: "wèn biàn", explanation: "问遍의 병음은 wèn biàn입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'问遍'의 성조 조합은 무엇입니까?", options: ["4-4", "4-1", "2-4", "3-4"], correctAnswer: "4-4", explanation: "wèn(4성) biàn(4성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'问遍'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "时间 표현"], correctAnswer: "동작 표현", explanation: "모두 물어보았다는 동작의 완료와 범위를 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我问遍了所有人，", "但没一个", "知道他的下落。"], correctAnswer: "我问遍了所有人，但没一个知道他的下落。", explanation: "전제 조건 + 전환 접속사 + 부정 결과 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 49,
    questions: [
      { type: "multipleChoice", question: "'从来'의 올바른 병음은 무엇입니까?", options: ["cóng lái", "chóng lái", "cōng lái", "cóng nái"], correctAnswer: "cóng lái", explanation: "从来의 병음은 cóng lái입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'从来'의 성조 조합은 무엇입니까?", options: ["2-2", "1-2", "2-4", "3-2"], correctAnswer: "2-2", explanation: "cóng(2성) lái(2성) 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'从来'는 위 문장에서 어떤 역할을 합니까?", options: ["시간 표현", "동작 표현", "장소 표현", "대상 표현"], correctAnswer: "시간 표현", explanation: "과거부터 현재까지의 시간을 나타내는 부사입니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我从来没见过", "这么漂亮的", "景色。"], correctAnswer: "我从来没见过这么漂亮的景色。", explanation: "부사+부정동사 + 관형어 + 목적어 순서입니다.", difficulty: "medium" }
    ]
  },
  { sentenceIndex: 50, questions: [] },
  {
    sentenceIndex: 51,
    questions: [
      { type: "multipleChoice", question: "'冥冥中'의 올바른 병음은 무엇입니까?", options: ["míng míng zhōng", "mǐng mǐng zhōng", "mín mín zhōng", "míng míng zhòng"], correctAnswer: "míng míng zhōng", explanation: "冥冥中의 병음은 míng míng zhōng입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'冥冥中'의 성조 조합은 무엇입니까?", options: ["2-2-1", "2-2-4", "3-3-1", "1-1-1"], correctAnswer: "2-2-1", explanation: "míng(2) míng(2) zhōng(1) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'冥冥中'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "장소 표현", "동작 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "어떤 신비로운 운명적 분위기를 묘사합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["冥冥中，", "我感觉", "我们还会", "再见面。"], correctAnswer: "冥冥中，我感觉我们还会再见面。", explanation: "상황 제시 + 주어 + 미래 추측 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 52,
    questions: [
      { type: "multipleChoice", question: "'无言'의 올바른 병음은 무엇입니까?", options: ["wú yán", "wú yǎn", "wǔ yán", "fú yán"], correctAnswer: "wú yán", explanation: "无言의 병음은 wú yán입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'无言'의 성조 조합은 무엇입니까?", options: ["2-2", "2-3", "4-2", "1-2"], correctAnswer: "2-2", explanation: "wú(2성) yán(2성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'无言'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "말을 할 수 없거나 하지 않는 상태를 나타냅니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["事实摆在面前，", "他", "无言以对。"], correctAnswer: "事实摆在面前，他无言以对。", explanation: "상황 제시 + 주어 + 결과 상태 순입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 53,
    questions: [
      { type: "multipleChoice", question: "'如此这般'의 올바른 병음은 무엇입니까?", options: ["rú cǐ zhè bān", "rú cī zhè bān", "lú cǐ zhè bān", "rú cǐ zhè bǎn"], correctAnswer: "rú cǐ zhè bān", explanation: "如此这般의 병음은 rú cǐ zhè bān입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'如此这般'의 성조 조합은 무엇입니까?", options: ["2-3-4-1", "2-3-4-3", "2-4-4-1", "4-3-4-1"], correctAnswer: "2-3-4-1", explanation: "rú(2) cǐ(3) zhè(4) bān(1) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'如此这般'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "구체적인 방식이나 과정을 '이러저러하게'라고 묘사합니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他如此这般地", "向经理", "汇报了情况。"], correctAnswer: "他如此这般地向经理汇报了情况。", explanation: "방식 부사구 + 대상 + 동사구 순서입니다.", difficulty: "hard" }
    ]
  },
  {
    sentenceIndex: 54,
    questions: [
      { type: "multipleChoice", question: "'眼前'의 올바른 병음은 무엇입니까?", options: ["yǎn qián", "yán qián", "yǎn qiān", "yàn qián"], correctAnswer: "yǎn qián", explanation: "眼前의 병음은 yǎn qián입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'眼前'의 성조 조합은 무엇입니까?", options: ["3-2", "2-2", "3-1", "4-2"], correctAnswer: "3-2", explanation: "yǎn(3성) qián(2성) 조합입니다.", difficulty: "medium" },
      { type: "multipleChoice", question: "'眼前'는 위 문장에서 어떤 역할을 합니까?", options: ["장소 표현", "동작 표현", "대상 표현", "수량 표현"], correctAnswer: "장소 표현", explanation: "눈앞이라는 위치/장소를 나타냅니다.", difficulty: "medium" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["幸福就在眼前，", "我们要", "好好珍惜。"], correctAnswer: "幸福就在眼前，我们要好好珍惜。", explanation: "상태 제시 후 당부/결의 순서로 배열합니다.", difficulty: "medium" }
    ]
  },
  {
    sentenceIndex: 55,
    questions: [
      { type: "multipleChoice", question: "'依然'의 올바른 병음은 무엇입니까?", options: ["yī rán", "yí rán", "yī lán", "yǐ rán"], correctAnswer: "yī rán", explanation: "依然의 병음은 yī rán입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'依然'의 성조 조합은 무엇입니까?", options: ["1-2", "2-2", "1-4", "4-2"], correctAnswer: "1-2", explanation: "yī(1성) rán(2성) 조합입니다.", difficulty: "hard" },
      { type: "multipleChoice", question: "'依然'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "时间 표현"], correctAnswer: "상태 묘사", explanation: "변화 없이 지속되는 상태를 나타내는 부사입니다.", difficulty: "hard" },
      { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["虽然离开了家乡，", "他依然", "想念那里。"], correctAnswer: "虽然离开了家乡，他依然想念那里。", explanation: "양보(虽然) 뒤에 변함없는 상태(依然)가 옵니다.", difficulty: "hard" }
    ]
  },
  { sentenceIndex: 56, questions: [] }
];

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const sentencePractice = pingfanPracticeData.find(p => p.sentenceIndex === sentenceIndex);
  return sentencePractice?.questions || [];
}



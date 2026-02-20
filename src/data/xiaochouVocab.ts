// 消愁歌词词汇分析数据
// 根据每句歌词提供词汇难度分级

import { WordAnalysis } from './tianmimiVocab';

// 每句歌词对应的词汇分析
export const xiaochouVocabAnalysis: Record<number, WordAnalysis[]> = {
  1: [
    {
      word: "欢乐",
      pinyin: "huān lè",
      level: "intermediate",
      meaning: "快乐，幸福",
      meaningKr: "즐겁고 행복하다",
      example: "节日里到处充满了欢乐。",
      exampleKr: "축제의 불꽃은 매우 아름답다."
    }
  ],
  2: [
    {
      word: "梦想",
      pinyin: "mèng xiǎng",
      level: "intermediate",
      meaning: "理想，愿望",
      meaningKr: "꿈, 이상",
      example: "他从小就有当科学家的梦想。",
      exampleKr: "그는 어릴 때부터 과학자가 되고 싶은 꿈이 있었다."
    }
  ],
  3: [
    {
      word: "妆",
      pinyin: "zhuāng",
      level: "advanced",
      meaning: "修饰容貌，化妆",
      meaningKr: "화장",
      example: "她的妆化得很自然。",
      exampleKr: "그녀의 화장은 매우 자연스럽다."
    }
  ],
  4: [
    {
      word: "模样",
      pinyin: "mú yàng",
      level: "advanced",
      meaning: "外貌，样子",
      meaningKr: "모습",
      example: "我记得他年轻时的模样。",
      exampleKr: "나는 그가 젊었을 때의 모습을 기억한다."
    }
  ],
  5: [
    {
      word: "角落",
      pinyin: "jiǎo luò",
      level: "advanced",
      meaning: "不显眼的地方",
      meaningKr: "구석",
      example: "书掉在了房间的角落。",
      exampleKr: "책이 방 구석에 떨어졌다."
    }
  ],
  6: [
    {
      word: "固执",
      pinyin: "gù zhí",
      level: "advanced",
      meaning: "坚持己见，不愿改变",
      meaningKr: "고집스럽다",
      example: "他性格很固执，很难说服。",
      exampleKr: "그는 성격이 매우 고집스러워 설득하기 어렵다."
    }
  ],
  7: [
    {
      word: "喧嚣",
      pinyin: "xuān xiāo",
      level: "advanced",
      meaning: "吵闹，声音杂乱",
      meaningKr: "시끄럽다",
      example: "我渴望逃离大城市的喧嚣。",
      exampleKr: "나는 대도시의 시끄러움에서 벗어나고 싶다."
    }
  ],
  8: [
    {
      word: "酒杯",
      pinyin: "jiǔ bēi",
      level: "intermediate",
      meaning: "喝酒用的杯子",
      meaningKr: "술잔",
      example: "他举起酒杯向大家敬酒。",
      exampleKr: "그는 술잔을 들어 모두에게 건배를 제안했다."
    }
  ],
  9: [
    {
      word: "朝阳",
      pinyin: "zhāo yáng",
      level: "advanced",
      meaning: "早晨刚升起的太阳",
      meaningKr: "아침 햇살",
      example: "朝阳从东方冉冉升起。",
      exampleKr: "아침 해가 동쪽에서 서서히 떠오른다."
    }
  ],
  10: [
    {
      word: "月光",
      pinyin: "yuè guāng",
      level: "intermediate",
      meaning: "月亮的光",
      meaningKr: "달빛",
      example: "清冷的月光洒在大地上。",
      exampleKr: "차가운 달빛이 대지에 내려앉는다."
    }
  ],
  11: [
    {
      word: "向往",
      pinyin: "xiàng wǎng",
      level: "advanced",
      meaning: "内心渴望和追求",
      meaningKr: "동경하다",
      example: "大家都向往自由的生活。",
      exampleKr: "모두가 자유로운 삶을 동경한다."
    }
  ],
  12: [
    {
      word: "温柔",
      pinyin: "wēn róu",
      level: "advanced",
      meaning: "温和柔顺",
      meaningKr: "부드럽다",
      example: "她说话的声音很温柔。",
      exampleKr: "그녀의 목소리는 매우 부드럽다."
    }
  ],
  13: [
    {
      word: "飞翔",
      pinyin: "fēi xiáng",
      level: "advanced",
      meaning: "在空中飞旋",
      meaningKr: "비상하다",
      example: "雄鹰在蓝天自由飞翔。",
      exampleKr: "독수리가 푸른 하늘에서 자유롭게 날아다닌다."
    }
  ],
  14: [
    {
      word: "霜",
      pinyin: "shuāng",
      level: "advanced",
      meaning: "水汽凝结成的白色冰晶",
      meaningKr: "서리",
      example: "冬天的早晨，窗户上结了霜。",
      exampleKr: "겨울 아침, 창문에 서리가 맺혔다."
    }
  ],
  15: [
    {
      word: "故乡",
      pinyin: "gù xiāng",
      level: "advanced",
      meaning: "出生或长期居住的地方",
      meaningKr: "고향",
      example: "我时常思念远方的故乡。",
      exampleKr: "나는 자주 먼 고향을 그리워한다."
    }
  ],
  16: [
    {
      word: "远方",
      pinyin: "yuǎn fāng",
      level: "intermediate",
      meaning: "遥远的地方",
      meaningKr: "먼 곳",
      example: "他为了生活背井离乡去远方工作。",
      exampleKr: "그는 생계를 위해 고향을 떠나 먼 곳으로 일하러 갔다."
    }
  ],
  17: [
    {
      word: "善良",
      pinyin: "shàn liáng",
      level: "advanced",
      meaning: "纯真朴实，心地好",
      meaningKr: "착하다",
      example: "他有一颗善良的心。",
      exampleKr: "그는 착한 마음을 가지고 있다."
    }
  ],
  18: [
    {
      word: "成长",
      pinyin: "chéng zhǎng",
      level: "advanced",
      meaning: "向成熟阶段发展",
      meaningKr: "성장",
      example: "父母见证了我的每一步成长。",
      exampleKr: "부모님은 내 성장의 모든 단계를 지켜보셨다."
    }
  ],
  19: [
    {
      word: "漫长",
      pinyin: "màn cháng",
      level: "advanced",
      meaning: "延续的时间很长",
      meaningKr: "기나길다",
      example: "经过漫长的等待，结果终于出来了。",
      exampleKr: "긴 기다림 끝에 결과가 마침내 나왔다."
    }
  ],
  20: [
    {
      word: "灵魂",
      pinyin: "líng hún",
      level: "advanced",
      meaning: "精神，人格",
      meaningKr: "영혼",
      example: "书籍是人类灵魂的慰藉。",
      exampleKr: "책은 인간 영혼의 위로이다."
    }
  ],
  21: [
    {
      word: "明天",
      pinyin: "míng tiān",
      level: "beginner",
      meaning: "今天的后一天",
      meaningKr: "내일",
      example: "我们明天一起去跑步吧。",
      exampleKr: "우리 내일 함께 달리기 하자."
    }
  ],
  22: [
    {
      word: "过往",
      pinyin: "guò wǎng",
      level: "advanced",
      meaning: "过去的事情",
      meaningKr: "과거",
      example: "不要总是沉溺于过往。",
      exampleKr: "항상 과거에 빠져있지 마라."
    }
  ],
  23: [
    {
      word: "支撑",
      pinyin: "zhī chēng",
      level: "advanced",
      meaning: "顶住压力使不倒塌",
      meaningKr: "지탱하다",
      example: "坚强的意志支撑他走完了全程。",
      exampleKr: "강한 의지가 그가 전 구간을 완주하도록 지탱했다."
    }
  ],
  24: [
    {
      word: "所谓",
      pinyin: "suǒ wèi",
      level: "advanced",
      meaning: "所说的",
      meaningKr: "소위",
      example: "这就是所谓的成功吗？",
      exampleKr: "이것이 소위 성공이라는 것인가?"
    }
  ],
  25: [
    {
      word: "念念不忘",
      pinyin: "niàn niàn bù wàng",
      level: "advanced",
      meaning: "时刻思念，不曾忘记",
      meaningKr: "잊지 못하다",
      example: "他对故乡的美食念念不忘。",
      exampleKr: "그는 고향의 음식을 잊지 못한다."
    }
  ],
  26: [
    {
      word: "自由",
      pinyin: "zì yóu",
      level: "advanced",
      meaning: "不受约束和限制",
      meaningKr: "자유",
      example: "每个人都向往自由。",
      exampleKr: "모든 사람이 자유를 동경한다."
    }
  ],
  27: [
    {
      word: "死亡",
      pinyin: "sǐ wáng",
      level: "advanced",
      meaning: "失去生命",
      meaningKr: "사망",
      example: "死亡是生命的终点。",
      exampleKr: "죽음은 생명의 종점이다."
    }
  ],
  28: [
    {
      word: "宽恕",
      pinyin: "kuān shù",
      level: "advanced",
      meaning: "宽容饶恕",
      meaningKr: "용서하다",
      example: "学会宽恕别人的过错。",
      exampleKr: "다른 사람의 실수를 용서하는 법을 배워라."
    }
  ],
  29: [
    {
      word: "迷惘",
      pinyin: "mí wǎng",
      level: "advanced",
      meaning: "迷惑，分辨不清方向",
      meaningKr: "망연자실하다",
      example: "在人生的十字路口，他感到很迷惘。",
      exampleKr: "인생의 갈림길에서 그는 매우 망연자실했다."
    }
  ],
  30: [
    {
      word: "潦草",
      pinyin: "liáo cǎo",
      level: "advanced",
      meaning: "不认真，马虎",
      meaningKr: "난잡하다",
      example: "他写的字非常潦草。",
      exampleKr: "그가 쓴 글씨는 매우 난잡하다."
    }
  ],
  31: [
    {
      word: "清醒",
      pinyin: "qīng xǐng",
      level: "advanced",
      meaning: "神志清楚",
      meaningKr: "깨어 있다",
      example: "冷风吹过，他清醒了许多。",
      exampleKr: "차가운 바람이 불어와 그는 많이 깨어났다."
    }
  ],
  32: [
    {
      word: "离场",
      pinyin: "lí chǎng",
      level: "intermediate",
      meaning: "离开演出或竞赛现场",
      meaningKr: "퇴장하다",
      example: "比赛结束后，观众开始陆续离场。",
      exampleKr: "경기가 끝난 후 관중들이 차례로 퇴장하기 시작했다."
    }
  ],
  33: [
    {
      word: "荒唐",
      pinyin: "huāng táng",
      level: "advanced",
      meaning: "极其不合情理",
      meaningKr: "황당하다",
      example: "这种想法简直太荒唐了。",
      exampleKr: "이런 생각은 정말 너무 황당하다."
    }
  ]
};


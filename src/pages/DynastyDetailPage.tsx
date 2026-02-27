import React, { useState, useEffect, useRef } from 'react'
import { DynastyDetail } from '../types/dynasty'

interface Props {
  dynasty: DynastyDetail
  onBack: () => void
  onNavigateToDynasty?: (dynastyId: string) => void
}

const C = {
  ink: '#0c0b08', ink2: '#141210',
  paper: '#f0ead8', paper2: '#b8ad98',
  gold: '#c9a84c', goldDim: '#6b5520',
  muted: '#4a4438', muted2: '#7a7060',
  blue: '#3a5f8a'
}

const WORD_DICT: Record<string, {
  pinyin: string
  type: string
  typeKr: string
  desc: string
}> = {
  "秦": { pinyin: "Qín", type: "国名", typeKr: "나라 이름", desc: "중국 최초 통일 왕조. 진시황이 세운 나라." },
  "燕": { pinyin: "Yān", type: "国名", typeKr: "나라 이름", desc: "전국시대 북방의 나라. 지금의 베이징 근처." },
  "赵": { pinyin: "Zhào", type: "国名", typeKr: "나라 이름", desc: "전국시대 나라. 秦에 의해 먼저 멸망했어." },
  "丹": { pinyin: "Dān", type: "人名", typeKr: "인명（人名）", desc: "燕나라 태자. 荆轲에게 암살 임무를 맡긴 사람." },
  "荆轲": { pinyin: "Jīng Kē", type: "人名", typeKr: "인명（人名）", desc: "전국시대 燕나라의 검객. BC 227년 秦王 암살을 시도했어." },
  "易水": { pinyin: "Yì Shuǐ", type: "地名", typeKr: "지명（地名）", desc: "허베이성에 있는 강. 荆轲가 마지막 노래를 부른 곳." },
  "高渐离": { pinyin: "Gāo Jiàn Lí", type: "人名", typeKr: "인명（人名）", desc: "荆轲의 친한 친구. 筑을 연주하며 이별을 함께했어." },
  "筑": { pinyin: "zhú", type: "乐器", typeKr: "악기 이름", desc: "고대 중국의 현악기. 피아노처럼 줄을 두드려서 소리를 내." },
  "秦王": { pinyin: "Qín Wáng", type: "称谓", typeKr: "칭호（称号）", desc: "후에 진시황(秦始皇)이 되는 인물. 荆轲의 암살 목표였어." },
  "图穷匕见": { pinyin: "tú qióng bǐ xiàn", type: "成语", typeKr: "성어（成語）", desc: "지도가 다 펼쳐지자 비수가 드러났다. 숨겨진 의도가 마지막에 드러나는 것을 비유." },
  "商": {
    pinyin: "Shāng",
    type: "国名",
    typeKr: "나라 이름",
    desc: "중국 고대 왕조. BC 1600년경 세워졌고, 갑골문을 사용했어."
  },
  "周": {
    pinyin: "Zhōu",
    type: "国名",
    typeKr: "나라 이름",
    desc: "商나라를 이어 세워진 왕조. BC 1046년 시작, 금문을 발전시켰어."
  },
  "甲骨文": {
    pinyin: "jiǎ gǔ wén",
    type: "文字",
    typeKr: "문자",
    desc: "거북이 등껍질과 소뼈에 새긴 고대 문자. 한자의 원형이야."
  },
  "金文": {
    pinyin: "jīn wén",
    type: "文字",
    typeKr: "문자",
    desc: "청동기에 새긴 글자. 周나라 때 갑골문에서 발전했어."
  },
  "詩經": {
    pinyin: "Shī Jīng",
    type: "典籍",
    typeKr: "고전",
    desc: "중국 최초의 시집. BC 800년경부터 모아진 305편의 노래와 시야."
  },
  "秦朝": {
    pinyin: "qín cháo",
    type: "国名",
    typeKr: "나라 이름",
    desc: "기원전 221년 진시황이 세운 중국 최초의 통일 왕조."
  },
  "嬴政": {
    pinyin: "yíng zhèng",
    type: "人名",
    typeKr: "인물 이름",
    desc: "진나라를 통일하고 '황제'라는 칭호를 처음 만든 인물."
  },
  "皇帝": {
    pinyin: "huáng dì",
    type: "称谓",
    typeKr: "칭호",
    desc: "진시황이 처음 사용한 군주 칭호로, 한국어 '황제'의 어원이야."
  },
  "长城": {
    pinyin: "cháng chéng",
    type: "地名",
    typeKr: "지명",
    desc: "북방 유목민족을 막기 위해 쌓은 성벽으로, 한국어로 '장성'이라고도 해."
  },
  "匈奴": {
    pinyin: "xiōng nú",
    type: "国名",
    typeKr: "나라·민족 이름",
    desc: "진·한 시대 북방의 강력한 유목민족으로, 장성 건설의 직접적인 원인이 됐어."
  },
  "焚书坑儒": {
    pinyin: "fén shū kēng rú",
    type: "成语",
    typeKr: "고사성어",
    desc: "'책을 태우고 학자를 묻다'는 뜻으로, 극단적 사상 탄압을 가리키는 표현이야."
  },
  "法家": {
    pinyin: "fǎ jiā",
    type: "典籍",
    typeKr: "사상·학파",
    desc: "법과 규율로 나라를 다스려야 한다고 주장한 진나라의 핵심 통치 사상."
  },
  "项羽": {
    pinyin: "xiàng yǔ",
    type: "人名",
    typeKr: "인물 이름",
    desc: "진나라 멸망을 이끈 초나라의 장수. 유방과의 대결로 유명해."
  },
  "刘邦": {
    pinyin: "liú bāng",
    type: "人名",
    typeKr: "인물 이름",
    desc: "진나라 멸망 후 한나라를 세운 인물로, 항우와의 전쟁에서 최후의 승자가 됐어."
  },
  "汉朝": {
    pinyin: "hàn cháo",
    type: "国名",
    typeKr: "나라 이름",
    desc: "기원전 206년 유방이 세운 왕조로, 한자·한족·한문의 어원이 된 중국 역사의 핵심 왕조."
  },
  "蔡伦": {
    pinyin: "cài lún",
    type: "人名",
    typeKr: "인물 이름",
    desc: "한나라의 관리로, 종이 제조법을 획기적으로 개량해 인류 문명에 큰 영향을 줬어."
  },
  "张骞": {
    pinyin: "zhāng qiān",
    type: "人名",
    typeKr: "인물 이름",
    desc: "한 무제의 명으로 서역을 탐험해 실크로드를 개척한 외교관이자 탐험가."
  },
  "丝绸之路": {
    pinyin: "sī chóu zhī lù",
    type: "地名",
    typeKr: "지명·경로",
    desc: "한나라와 서역을 연결한 무역로. 비단·종이·도자기가 서쪽으로, 불교·포도·호두가 동쪽으로 전해졌어."
  },
  "竹简": {
    pinyin: "zhú jiǎn",
    type: "典籍",
    typeKr: "기록 매체",
    desc: "종이가 보급되기 전 대나무를 얇게 쪼개 글을 쓰던 도구. 무겁고 불편해서 종이로 대체됐어."
  },
  "说文解字": {
    pinyin: "shuō wén jiě zì",
    type: "典籍",
    typeKr: "문헌·책 이름",
    desc: "한나라 허신이 편찬한 최초의 체계적 한자 사전. 9,353자를 수록했어."
  },
  "汉武帝": {
    pinyin: "hàn wǔ dì",
    type: "称谓",
    typeKr: "칭호·인물",
    desc: "한나라 최전성기를 이끈 황제. 실크로드 개척과 유교 국교화로 유명해."
  },
  "宣纸": {
    pinyin: "xuān zhǐ",
    type: "典籍",
    typeKr: "공예·재료",
    desc: "중국 전통 종이. 청단나무를 원료로 만들며 '지수천년(纸寿千年)'이라 불릴 만큼 보존력이 뛰어나."
  },
  "魏": {
    pinyin: "wèi",
    type: "国名",
    typeKr: "국명/왕조",
    desc: "삼국 중 하나로, AD 220년 曹丕가 세운 국가예요.",
  },
  "曹丕": {
    pinyin: "cáo pī",
    type: "人名",
    typeKr: "인명",
    desc: "魏의 건국자예요. '조조의 아들'로도 자주 같이 언급돼요.",
  },
  "蜀漢": {
    pinyin: "shǔ hàn",
    type: "国名",
    typeKr: "국명/왕조",
    desc: "刘备가 세운 나라예요. '한(漢)의 정통' 주장이 핵심 키워드예요.",
  },
  "刘备": {
    pinyin: "liú bèi",
    type: "人名",
    typeKr: "인명",
    desc: "蜀漢의 건국자예요. 민심·정통성 서사가 강한 인물로 전해져요.",
  },
  "吳": {
    pinyin: "wú",
    type: "国名",
    typeKr: "국명/왕조",
    desc: "삼국 중 하나로, 남쪽 기반의 세력이에요.",
  },
  "孙权": {
    pinyin: "sūn quán",
    type: "人名",
    typeKr: "인명",
    desc: "吳의 핵심 지도자예요. AD 229년에 황제를 칭해 국가 체제를 굳혀요.",
  },
  "西晋": {
    pinyin: "xī jìn",
    type: "国名",
    typeKr: "국명/왕조",
    desc: "司马炎이 세운 왕조예요. AD 280년에 吳를 멸망시키고 통일해요.",
  },
  "司马炎": {
    pinyin: "sī mǎ yán",
    type: "人名",
    typeKr: "인명",
    desc: "西晋의 건국자예요. 삼국을 끝낸 '통일의 마지막 손'으로 기억돼요.",
  },
  "曹丕": {
    pinyin: "cáo pī",
    type: "인명",
    typeKr: "인명",
    desc: "위나라를 건국한 초대 황제. 조조의 아들이자 뛰어난 문학가이기도 해요.",
  },
  "司馬炎": {
    pinyin: "sī mǎ yán",
    type: "인명",
    typeKr: "인명",
    desc: "진나라를 세우고 삼국을 통일한 황제예요.",
  },
  "八王之亂": {
    pinyin: "bā wáng zhī luàn",
    type: "사건명",
    typeKr: "사건명",
    desc: "진나라 황족 여덟 왕이 권력을 다툰 내란으로, 위진남북조 혼란의 도화선이 되었어요.",
  },
  "陶淵明": {
    pinyin: "táo yuān míng",
    type: "인명",
    typeKr: "인명",
    desc: "동진 시대 최고의 시인. 「귀거래사」로 유명하며 자연으로의 귀의를 노래했어요.",
  },
  "王羲之": {
    pinyin: "wáng xī zhī",
    type: "인명",
    typeKr: "인명",
    desc: "동진 시대 서예의 성인(書聖)으로 불리는 인물이에요.",
  },
  "歸去來辭": {
    pinyin: "guī qù lái cí",
    type: "전적",
    typeKr: "전적",
    desc: "도연명이 관직을 버리고 전원으로 돌아가며 지은 명문으로, 위진 시대 정신을 대표해요.",
  },
  "金陵": {
    pinyin: "jīn líng",
    type: "지명",
    typeKr: "지명",
    desc: "지금의 난징(南京)의 옛 이름. 동진·남조 시대의 수도였어요.",
  },
  "建安文學": {
    pinyin: "jiàn ān wén xué",
    type: "문화용어",
    typeKr: "문화용어",
    desc: "조조 부자를 중심으로 꽃피운 위진 초기 문학 사조로, 현실주의적 서정시가 특징이에요.",
  },
  "嵇康": {
    pinyin: "jī kāng",
    type: "인명",
    typeKr: "인명",
    desc: "죽림칠현의 핵심 인물로, 권력에 굴복하지 않고 형장에서도 거문고를 탄 것으로 유명해요.",
  },
  "阮籍": {
    pinyin: "ruǎn jí",
    type: "인명",
    typeKr: "인명",
    desc: "죽림칠현 중 한 명으로, 청담 문화와 자유로운 시풍으로 이름을 남긴 시인이에요.",
  },
  "楊堅": {
    pinyin: "yáng jiān",
    type: "인명",
    typeKr: "인명",
    desc: "수나라를 건국한 초대 황제 문제(文帝). 남북조의 분열을 끝내고 중국을 재통일했어요.",
  },
  "煬帝": {
    pinyin: "yáng dì",
    type: "칭호",
    typeKr: "칭호",
    desc: "수나라 2대 황제의 묘호. 대운하 건설과 고구려 원정으로 유명하며, 역사적 평가가 극명하게 갈리는 인물이에요.",
  },
  "大運河": {
    pinyin: "dà yùn hé",
    type: "지명",
    typeKr: "지명",
    desc: "수나라 때 건설된 세계 최장 운하. 남북을 연결해 천 년간 중국 경제의 핵심 인프라 역할을 했어요.",
  },
  "科擧制": {
    pinyin: "kē jǔ zhì",
    type: "제도명",
    typeKr: "제도명",
    desc: "수나라 때 정비된 시험 제도로, 가문이 아닌 실력으로 관리를 선발해요. 한국·일본·베트남에도 영향을 줬어요.",
  },
  "乙支文德": {
    pinyin: "yǐ zhī wén dé",
    type: "인명",
    typeKr: "인명",
    desc: "고구려의 장군으로 612년 살수대첩에서 수나라 30만 대군을 물리친 영웅이에요.",
  },
  "薩水": {
    pinyin: "sà shuǐ",
    type: "지명",
    typeKr: "지명",
    desc: "지금의 청천강. 612년 을지문덕이 수나라 군대를 대파한 살수대첩의 현장이에요.",
  },
  "李淵": {
    pinyin: "lǐ yuān",
    type: "인명",
    typeKr: "인명",
    desc: "당나라를 건국한 초대 황제 고조(高祖). 수나라 멸망의 혼란 속에서 거병해 새 왕조를 세웠어요.",
  },
  "神州": {
    pinyin: "shén zhōu",
    type: "지명",
    typeKr: "지명",
    desc: "중국 전체를 가리키는 시적·문학적 표현. 현대에도 자주 쓰이는 중국의 별칭이에요.",
  },
  "李白": {
    pinyin: "lǐ bái",
    type: "인명",
    typeKr: "인명",
    desc: "당나라 최고의 시인으로 '시선(詩仙)'이라 불려요. 자유분방한 낭만주의 시풍으로 유명해요.",
  },
  "杜甫": {
    pinyin: "dù fǔ",
    type: "인명",
    typeKr: "인명",
    desc: "이백과 함께 당나라를 대표하는 시인으로 '시성(詩聖)'이라 불려요. 현실주의적 시풍이 특징이에요.",
  },
  "張旭": {
    pinyin: "zhāng xù",
    type: "인명",
    typeKr: "인명",
    desc: "당나라의 천재 서예가로 '초성(草聖)'이라 불려요. 술을 마시면 더욱 뛰어난 초서를 썼다고 전해져요.",
  },
  "賀知章": {
    pinyin: "hè zhī zhāng",
    type: "인명",
    typeKr: "인명",
    desc: "당나라 시인이자 관료. 음중팔선의 첫 번째 인물로, 이백을 '적선인(謫仙人)'이라 처음 칭한 사람이에요.",
  },
  "長安": {
    pinyin: "cháng ān",
    type: "지명",
    typeKr: "지명",
    desc: "당나라의 수도로 지금의 시안(西安). 인구 100만의 세계 최대 국제도시였어요.",
  },
  "飮中八仙": {
    pinyin: "yǐn zhōng bā xiān",
    type: "문화용어",
    typeKr: "문화용어",
    desc: "당나라 장안에서 활동한 술과 예술을 사랑한 여덟 문인. 두보의 시 《음중팔선가》에 묘사되었어요.",
  },
  "安祿山": {
    pinyin: "ān lù shān",
    type: "인명",
    typeKr: "인명",
    desc: "당나라 절도사로 755년 반란을 일으켜 당나라 쇠퇴의 결정적 원인을 만든 인물이에요.",
  },
  "楊貴妃": {
    pinyin: "yáng guì fēi",
    type: "인명",
    typeKr: "인명",
    desc: "현종이 사랑한 미인으로 중국 4대 미녀 중 한 명. 안사의 난으로 비극적인 최후를 맞았어요.",
  },
  "貞觀之治": {
    pinyin: "zhēn guān zhī zhì",
    type: "역사용어",
    typeKr: "역사용어",
    desc: "태종 이세민 치세(626-649)의 태평성대. 중국 역사상 가장 이상적인 정치의 표본으로 꼽혀요.",
  },
  "草聖": {
    pinyin: "cǎo shèng",
    type: "칭호",
    typeKr: "칭호",
    desc: "초서(草書)의 성인. 당나라 서예가 장욱에게 붙여진 최고의 칭호예요.",
  },
  "張擇端": {
    pinyin: "zhāng zé duān",
    type: "인명",
    typeKr: "인명",
    desc: "북송의 화가로 《청명상하도》를 그린 인물. 당시에는 크게 알려지지 않았으나 후대에 걸작으로 인정받았어요.",
  },
  "清明上河圖": {
    pinyin: "qīng míng shàng hé tú",
    type: "전적",
    typeKr: "전적",
    desc: "북송 수도 개봉의 청명절 풍경을 담은 두루마리 그림. 800명이 넘는 인물이 등장하는 중국 국보예요.",
  },
  "開封": {
    pinyin: "kāi fēng",
    type: "지명",
    typeKr: "지명",
    desc: "북송의 수도로 지금의 허난성(河南省) 개봉시. 당시 세계 최대 도시 중 하나였어요.",
  },
  "趙匡胤": {
    pinyin: "zhào kuāng yìn",
    type: "인명",
    typeKr: "인명",
    desc: "송나라를 건국한 초대 황제 태조. 문치주의를 채택해 문화·경제 발전의 기반을 만들었어요.",
  },
  "靖康之變": {
    pinyin: "jìng kāng zhī biàn",
    type: "역사용어",
    typeKr: "역사용어",
    desc: "1127년 금나라가 북송 수도 개봉을 함락하고 황제 부자를 포로로 끌고 간 사건. 북송 멸망의 계기예요.",
  },
  "李淸照": {
    pinyin: "lǐ qīng zhào",
    type: "인명",
    typeKr: "인명",
    desc: "송나라 최고의 여류 시인. 정강의 변 이후 전란과 이별의 슬픔을 담은 사(詞)로 유명해요.",
  },
  "徽宗": {
    pinyin: "huī zōng",
    type: "칭호",
    typeKr: "칭호",
    desc: "북송 8대 황제. 뛰어난 서화가였지만 정치는 무능해 정강의 변으로 금나라에 포로로 끌려갔어요.",
  },
  "士大夫": {
    pinyin: "shì dà fū",
    type: "칭호",
    typeKr: "칭호",
    desc: "송나라 사회의 중심인 문인 관료 계층. 과거제를 통해 선발된 지식인 엘리트예요.",
  },
  "琵琶": {
    pinyin: "pí pá",
    type: "악기",
    typeKr: "악기",
    desc: "중국 전통 현악기로 한국의 비파와 동일한 한자어예요. 4현으로 구성되며 퉁겨서 연주해요.",
  },
  "忽必烈": {
    pinyin: "hū bì liè",
    type: "인명",
    typeKr: "인명",
    desc: "원나라를 건국한 쿠빌라이 칸. 칭기즈칸의 손자로 중국 전체를 최초로 통일한 이민족 황제예요."
  },
  "景德鎭": {
    pinyin: "jǐng dé zhèn",
    type: "지명",
    typeKr: "지명",
    desc: "중국 도자기의 수도로 불리는 도시. 원나라 때부터 청화백자 생산의 중심지였어요."
  },
  "青花瓷": {
    pinyin: "qīng huā cí",
    type: "문화용어",
    typeKr: "문화용어",
    desc: "코발트 안료로 푸른 문양을 그린 백자. 원나라 때 본격 발전해 전 세계로 수출된 중국의 대표 도자기예요."
  },
  "大都": {
    pinyin: "dà dū",
    type: "지명",
    typeKr: "지명",
    desc: "원나라의 수도로 지금의 베이징. 동서 교역의 중심지였어요."
  },
  "元曲": {
    pinyin: "yuán qǔ",
    type: "문화용어",
    typeKr: "문화용어",
    desc: "원나라 시대에 꽃핀 대중 희곡·산곡 장르. 과거제 폐지로 좌절한 한족 문인들이 만든 새로운 예술이에요."
  },
  "關漢卿": {
    pinyin: "guān hàn qīng",
    type: "인명",
    typeKr: "인명",
    desc: "원나라 최고의 극작가. 《두아원(竇娥冤)》으로 유명하며 원곡의 아버지로 불려요."
  },
  "朱元璋": {
    pinyin: "zhū yuán zhāng",
    type: "인명",
    typeKr: "인명",
    desc: "명나라를 건국한 초대 황제 홍무제. 빈농 출신으로 원나라를 무너뜨리고 한족 왕조를 재건했어요."
  },
  "汉隶": {
    pinyin: "hàn lì",
    type: "문자",
    typeKr: "문자",
    desc: "한나라 때 완성된 서체. 가로획이 넓고 파임이 특징이며, 도자기 낙관에도 사용되었어요."
  },
  "李時珍": {
    pinyin: "lǐ shí zhēn",
    type: "인명",
    typeKr: "인명",
    desc: "명나라의 의학자로 《본초강목》을 완성했어요. 27년간 전국을 돌며 약재를 직접 연구한 동아시아 최고의 의약학자예요."
  },
  "本草綱目": {
    pinyin: "běn cǎo gāng mù",
    type: "전적",
    typeKr: "전적",
    desc: "이시진이 1596년 완성한 약학 백과사전. 1,892종 약재와 11,000여 처방이 담긴 동아시아 의학의 최고 고전이에요."
  },
  "鄭和": {
    pinyin: "zhèng hé",
    type: "인명",
    typeKr: "인명",
    desc: "명나라 영락제의 환관으로 7차례 대항해를 이끌었어요. 아프리카까지 항해한 동양 최대의 탐험가예요."
  },
  "永樂帝": {
    pinyin: "yǒng lè dì",
    type: "칭호",
    typeKr: "칭호",
    desc: "명나라 3대 황제로 수도를 북경으로 옮기고 정화의 대항해를 명령했어요. 자금성(紫禁城)도 이 시기에 건설되었어요."
  },
  "華陀": {
    pinyin: "huá tuó",
    type: "인명",
    typeKr: "인명",
    desc: "후한 시대의 전설적인 명의. 마취 수술을 최초로 시행한 것으로 전해지며 중국판 히포크라테스로 불려요."
  },
  "崇禎帝": {
    pinyin: "chóng zhēn dì",
    type: "칭호",
    typeKr: "칭호",
    desc: "명나라 마지막 황제. 이자성의 난으로 북경이 함락되자 스스로 목숨을 끊으며 276년 명나라가 막을 내렸어요."
  },
  "山海關": {
    pinyin: "shān hǎi guān",
    type: "지명",
    typeKr: "지명",
    desc: "만리장성의 동쪽 끝 관문. 1644년 청나라 군대가 이 관문을 넘으며 중국을 차지했어요."
  },
  "東醫寶鑑": {
    pinyin: "dōng yī bǎo jiàn",
    type: "전적",
    typeKr: "전적",
    desc: "조선 허준이 1613년 완성한 의학 백과사전. 《본초강목》의 영향을 받아 편찬된 한국 의학의 최고 고전이에요."
  },
  "毛澤東": {
    pinyin: "máo zé dōng",
    type: "인명",
    typeKr: "인명",
    desc: "중화인민공화국 건국의 아버지. 1949년 천안문 광장에서 건국을 선포하고 초대 국가주석을 역임했어요."
  },
  "鄧小平": {
    pinyin: "dèng xiǎo píng",
    type: "인명",
    typeKr: "인명",
    desc: "개혁개방 정책을 이끈 중국의 최고 지도자. '흑묘백묘론'으로 시장경제를 도입해 중국 경제 기적의 토대를 닦았어요."
  },
  "習近平": {
    pinyin: "xí jìn píng",
    type: "인명",
    typeKr: "인명",
    desc: "현 중국 국가주석. 2013년부터 집권하며 일대일로 구상을 추진하고 중국의 세계 영향력을 확대하고 있어요."
  },
  "天安門": {
    pinyin: "tiān ān mén",
    type: "지명",
    typeKr: "지명",
    desc: "베이징 중심부의 역사적 성문. 1949년 건국 선포와 1989년 민주화 시위 진압 등 현대 중국의 상징적 공간이에요."
  },
  "改革開放": {
    pinyin: "gǎi gé kāi fàng",
    type: "역사용어",
    typeKr: "역사용어",
    desc: "1978년 덩샤오핑이 시작한 시장경제 도입 정책. 중국을 40년 만에 세계 2위 경제대국으로 이끈 역사적 전환점이에요."
  },
  "一帶一路": {
    pinyin: "yī dài yī lù",
    type: "역사용어",
    typeKr: "역사용어",
    desc: "2013년 시진핑이 제안한 현대판 실크로드 구상. 아시아·아프리카·유럽을 연결하는 인프라 투자 프로젝트예요."
  },
  "深圳": {
    pinyin: "shēn zhèn",
    type: "지명",
    typeKr: "지명",
    desc: "개혁개방 후 설치된 중국 최초의 경제특구. 작은 어촌에서 40년 만에 인구 1,800만의 첨단도시로 성장했어요."
  },
  "盤古": {
    pinyin: "pán gǔ",
    type: "인명",
    typeKr: "신화인물",
    desc: "중국 창세 신화의 거인. 혼돈의 알을 깨고 하늘과 땅을 만들었으며, '开天辟地' 성어의 주인공이에요."
  },
  "汉朝": {
    pinyin: "hàn cháo",
    type: "国名",
    typeKr: "나라 이름",
    desc: "기원전 206년 유방이 세운 왕조로, 한자·한족·한문의 어원이 된 중국 역사의 핵심 왕조."
  },
  "刘邦": {
    pinyin: "liú bāng",
    type: "人名",
    typeKr: "인물 이름",
    desc: "한나라를 세운 초대 황제. 평민 출신으로 항우를 꺾고 천하를 통일했어."
  },
  "蔡伦": {
    pinyin: "cài lún",
    type: "人名",
    typeKr: "인물 이름",
    desc: "한나라의 관리로, 종이 제조법을 획기적으로 개량해 인류 문명에 큰 영향을 줬어."
  },
  "张骞": {
    pinyin: "zhāng qiān",
    type: "人名",
    typeKr: "인물 이름",
    desc: "한 무제의 명으로 서역을 탐험해 실크로드를 개척한 외교관이자 탐험가."
  },
  "丝绸之路": {
    pinyin: "sī chóu zhī lù",
    type: "地名",
    typeKr: "지명·경로",
    desc: "한나라와 서역을 연결한 무역로. 비단·종이·도자기가 서쪽으로, 불교·포도·호두가 동쪽으로 전해졌어."
  },
  "竹简": {
    pinyin: "zhú jiǎn",
    type: "典籍",
    typeKr: "기록 매체",
    desc: "종이가 보급되기 전 대나무를 얇게 쪼개 글을 쓰던 도구. 무겁고 불편해서 종이로 대체됐어."
  },
  "说文解字": {
    pinyin: "shuō wén jiě zì",
    type: "典籍",
    typeKr: "문헌·책 이름",
    desc: "한나라 허신이 편찬한 최초의 체계적 한자 사전. 9,353자를 수록했어."
  },
  "汉武帝": {
    pinyin: "hàn wǔ dì",
    type: "称谓",
    typeKr: "칭호·인물",
    desc: "한나라 최전성기를 이끈 황제. 실크로드 개척과 유교 국교화로 유명해."
  },
  "宣纸": {
    pinyin: "xuān zhǐ",
    type: "典籍",
    typeKr: "공예·재료",
    desc: "중국 전통 종이. 청단나무를 원료로 만들며 '지수천년(纸寿千年)'이라 불릴 만큼 보존력이 뛰어나."
  }
}

// 朝代名称到ID的映射
const DYNASTY_NAME_TO_ID: Record<string, string> = {
  "夏商周": "1",
  "先秦": "2",
  "秦朝": "3",
  "汉朝": "4",
  "三国": "5",
  "魏晋南北朝": "6",
  "隋朝": "7",
  "唐朝": "8",
  "五代十国": "9",
  "宋朝": "10",
  "元朝": "11",
  "明朝": "12",
  "清朝": "13",
  "民国": "14",
  "现代": "15"
}

export default function DynastyDetailPage({ dynasty, onBack, onNavigateToDynasty }: Props) {
  // State
  const [playingVideo, setPlayingVideo] = useState(false)
  const [xiCount, setXiCount] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())
  const [expandedIdiom, setExpandedIdiom] = useState<number | null>(null)
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [isDownloading, setIsDownloading] = useState(false)
  const [mapTooltip, setMapTooltip] = useState<{ x: number; y: number; text: string; title: string } | null>(null)
  const [activeWord, setActiveWord] = useState<{
    word: string
    x: number
    y: number
  } | null>(null)
  
  // 收藏词汇功能
  const [favoriteWords, setFavoriteWords] = useState<Set<string>>(new Set())
  
  // 加载收藏的词汇（与 어휘드레이너 共用：从 starredWordsCustom 同步，保证两边一致）
  useEffect(() => {
    try {
      const saved = localStorage.getItem('starredWordsCustom')
      const list: { word: string; pinyin?: string; korean?: string }[] = saved ? JSON.parse(saved) : []
      setFavoriteWords(new Set(list.map((x) => x.word)))
    } catch (e) {
      console.error('Failed to load favorite words:', e)
    }
  }, [])

  // 切换收藏状态，并同步到 어휘드레이너（starredWordsCustom）
  const toggleFavorite = (word: string) => {
    const info = WORD_DICT[word]
    const pinyin = info?.pinyin ?? ''
    const korean = info?.desc ?? info?.typeKr ?? ''

    const customList: { word: string; pinyin: string; korean: string }[] = (() => {
      try {
        const saved = localStorage.getItem('starredWordsCustom')
        return saved ? JSON.parse(saved) : []
      } catch {
        return []
      }
    })()

    const exists = customList.some((x) => x.word === word)
    const nextCustom = exists
      ? customList.filter((x) => x.word !== word)
      : [...customList, { word, pinyin, korean }]

    localStorage.setItem('starredWordsCustom', JSON.stringify(nextCustom))
    setFavoriteWords(new Set(nextCustom.map((x) => x.word)))
  }
  
  // Refs
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const elementRefs = useRef<Map<string, HTMLDivElement | null>>(new Map())
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number }>>([])
  const shareCardRef = useRef<HTMLDivElement>(null)

  // 页面加载时滚动到顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  // 1. Canvas 바람 파티클
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // 初始化60个粒子
    particlesRef.current = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.3
    }))

    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = C.gold
      ctx.lineWidth = 0.5
      ctx.globalAlpha = 0.3

      particlesRef.current.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(p.x + p.vx * 20, p.y + p.vy * 20)
        ctx.stroke()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    elementRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      elementRefs.current.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  // 窗口大小监听
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 地图提示框自动关闭
  useEffect(() => {
    if (mapTooltip) {
      const timer = setTimeout(() => {
        setMapTooltip(null)
      }, 3500)
      return () => clearTimeout(timer)
    }
  }, [mapTooltip])

  // TTS
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'zh-CN'
      utterance.rate = 0.7
      utterance.pitch = 1.0
      utterance.volume = 1
      window.speechSynthesis.speak(utterance)
    }
  }

  // Web Audio API 音效
  const playSound = (frequency: number, type: OscillatorType = 'sine', duration: number = 0.4) => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.value = frequency
    oscillator.type = type
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + duration)
  }

  // 计数器
  const handleCounter = (count: number) => {
    setXiCount(count)
    const correctCount = dynasty.counterModule?.correctAnswer || 12
    if (count === correctCount) {
      setShowAnswer(true)
      playSound(660, 'sine', 0.5)
    } else {
      playSound(220, 'sawtooth', 0.3)
    }
  }

  // 翻转卡片
  const toggleCard = (index: number) => {
    const newFlipped = new Set(flippedCards)
    const lyric = dynasty.lyrics[index]
    
    if (newFlipped.has(index)) {
      newFlipped.delete(index)
    } else {
      newFlipped.add(index)
      // 点击时朗读中文歌词，0.7倍速
      if (lyric) {
        speak(lyric.chinese)
      }
    }
    setFlippedCards(newFlipped)
    
    // 保存到 localStorage
    const saved = JSON.parse(localStorage.getItem(`dynasty_${dynasty.id}_cards`) || '[]')
    if (newFlipped.has(index)) {
      if (!saved.includes(index)) saved.push(index)
    } else {
      const idx = saved.indexOf(index)
      if (idx > -1) saved.splice(idx, 1)
    }
    localStorage.setItem(`dynasty_${dynasty.id}_cards`, JSON.stringify(saved))
  }

  // 加载保存的卡片状态
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`dynasty_${dynasty.id}_cards`) || '[]')
    if (saved.length > 0) {
      setFlippedCards(new Set(saved))
    }
  }, [dynasty.id])

  // 翻转所有卡片
  const flipAllCards = () => {
    setFlippedCards(new Set(dynasty.lyrics.map((_, i) => i)))
    playSound(400, 'sawtooth', 0.5)
  }

  // 重置所有卡片
  const resetAllCards = () => {
    setFlippedCards(new Set())
    localStorage.removeItem(`dynasty_${dynasty.id}_cards`)
    playSound(200, 'sawtooth', 0.4)
  }

  // 切换成语展开
  const toggleIdiom = (index: number) => {
    setExpandedIdiom(expandedIdiom === index ? null : index)
  }

  // 创建可点击词语的辅助函数
  const renderWithWordCards = (text: string) => {
    const words = Object.keys(WORD_DICT)
    // 按词语长度从长到短排序，避免短词优先匹配
    words.sort((a, b) => b.length - a.length)

    let result: (string | JSX.Element)[] = [text]

    words.forEach((word, wordIndex) => {
      result = result.flatMap((part, partIndex) => {
        if (typeof part !== 'string') return [part]
        const segments = part.split(word)
        return segments.flatMap((seg, i) => {
          if (i === segments.length - 1) return [seg]
          return [
            seg,
            <span
              key={`${wordIndex}-${partIndex}-${i}`}
              onClick={(e) => {
                e.stopPropagation()
                speak(word)
                setActiveWord({
                  word,
                  x: e.clientX,
                  y: e.clientY,
                })
              }}
              style={{
                color: '#c9a84c',
                borderBottom: '1px solid rgba(201,168,76,0.4)',
                cursor: 'pointer',
                fontFamily: word.length >= 2 ? "'Ma Shan Zheng', serif" : undefined,
              }}
            >
              {word}
            </span>
          ]
        })
      })
    })

    return <>{result}</>
  }

  // 渲染混合文本中的中文为金色
  const renderChineseInText = (text: string, defaultColor: string = C.paper2) => {
    // 匹配中文字符（包括标点）
    const chineseRegex = /[\u4e00-\u9fa5，。！？；：、""''（）【】《》]+/g
    const parts: Array<{ text: string; isChinese: boolean }> = []
    let lastIndex = 0
    let match

    while ((match = chineseRegex.exec(text)) !== null) {
      // 添加中文前的非中文部分
      if (match.index > lastIndex) {
        parts.push({
          text: text.substring(lastIndex, match.index),
          isChinese: false
        })
      }
      // 添加中文部分
      parts.push({
        text: match[0],
        isChinese: true
      })
      lastIndex = match.index + match[0].length
    }
    // 添加剩余部分
    if (lastIndex < text.length) {
      parts.push({
        text: text.substring(lastIndex),
        isChinese: false
      })
    }

    return (
      <>
        {parts.map((part, i) => (
          <span
            key={i}
            style={{
              color: part.isChinese ? C.gold : defaultColor
            }}
          >
            {part.text}
          </span>
        ))}
      </>
    )
  }

  // 下载分享卡片
  const handleDownloadShareCard = async () => {
    if (!shareCardRef.current || !dynasty.shareCard) return
    
    const shareCard = dynasty.shareCard // 保存引用，避免类型问题
    setIsDownloading(true)
    try {
      // 动态导入 html2canvas
      let html2canvas: any
      try {
        const module = await import('html2canvas')
        html2canvas = module.default || module
      } catch (importError: any) {
        console.error('Failed to import html2canvas:', importError)
        const errorMsg = importError?.message || String(importError)
        if (errorMsg.includes('Failed to resolve') || errorMsg.includes('Cannot find module')) {
          alert('html2canvas가 설치되지 않았습니다.\n\n터미널에서 다음 명령어를 실행해주세요:\nnpm install\n\n설치 후 페이지를 새로고침해주세요.')
        } else {
          alert('html2canvas를 불러올 수 없습니다. 잠시 후 다시 시도해주세요.')
        }
        setIsDownloading(false)
        return
      }
      
      if (!html2canvas || typeof html2canvas !== 'function') {
        alert('html2canvas를 불러올 수 없습니다. npm install을 실행해주세요.')
        setIsDownloading(false)
        return
      }
      
      // 截图
      const canvas = await html2canvas(shareCardRef.current, {
        backgroundColor: C.ink,
        scale: 2, // 提高清晰度
        useCORS: true,
        logging: false
      })
      
      // 转换为 blob
      canvas.toBlob((blob) => {
        if (!blob) {
          alert('다운로드 준비 중이에요. 잠시 후 다시 시도해주세요.')
          setIsDownloading(false)
          return
        }
        
        // 创建下载链接
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${shareCard.idiom}_词韵.png`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        
        // 释放 blob URL
        setTimeout(() => URL.revokeObjectURL(url), 100)
        setIsDownloading(false)
      }, 'image/png')
    } catch (error) {
      console.error('Download failed:', error)
      alert('다운로드 준비 중이에요. 잠시 후 다시 시도해주세요.')
      setIsDownloading(false)
    }
  }

  // 处理判断题
  const handleQuizSelect = (option: string) => {
    setSelectedQuiz(option)
    playSound(300, 'sine', 0.3)
  }

  // 防御性检查
  if (!dynasty) {
    return (
      <div style={{ 
        background: '#0c0b08', 
        color: '#c9a84c', 
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Ma Shan Zheng', serif",
        fontSize: '24px',
        letterSpacing: '4px'
      }}>
        데이터를 불러오는 중...
      </div>
    )
  }

  return (
    <div 
      style={{ minHeight: '100vh', backgroundColor: C.ink, color: C.paper, position: 'relative' }}
      onClick={() => setActiveWord(null)}
    >
      {/* Canvas 바람 파티클 */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* 2. 상단 네비게이션 */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: C.ink,
          borderBottom: 'none',
          padding: '16px 48px',
          zIndex: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: `1px solid rgba(201,168,76,0.3)`,
            color: C.gold,
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: '14px',
            fontFamily: "'Noto Serif KR', serif"
          }}
        >
          ← 타임라인으로
        </button>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', color: C.muted2 }}>词韵</span>
          <span style={{ fontSize: '10px', color: C.gold }}>·</span>
          <span style={{ fontSize: '10px', color: C.muted2 }}>{dynasty.name}</span>
          <span style={{ fontSize: '10px', color: C.gold }}>·</span>
          <span style={{ fontSize: '10px', color: C.muted2 }}>{dynasty.shareCard.idiom}</span>
        </div>
        <div style={{ width: '120px' }}></div>
      </div>

      {/* 3. Hero 영역 */}
      <div
        style={{
          width: '100%',
          height: '60vh',
          position: 'relative',
          marginTop: '60px',
          overflow: 'hidden'
        }}
      >
        {/* 背景图片层 - 只对背景应用滤镜 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${dynasty.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(40%) brightness(0.25)',
            zIndex: 0
          }}
        />
        {/* 渐变遮罩层 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent, ' + C.ink + ')',
            zIndex: 1
          }}
        />
        {/* 文字内容层 - 不受滤镜影响 */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            left: '48px',
            right: '48px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            zIndex: 2
          }}
        >
          <div>
            <div style={{ fontSize: '10px', color: C.gold, letterSpacing: '4px', marginBottom: '16px' }}>
              ✦ {dynasty.name} · {dynasty.period}
            </div>
            <h1
              style={{
                fontFamily: "'Ma Shan Zheng', serif",
                fontSize: '90px',
                color: '#f0ead8',
                margin: 0,
                marginBottom: '8px'
              }}
            >
              {dynasty.shareCard.idiom}
            </h1>
            <div style={{ fontSize: '16px', color: '#f0ead8', marginBottom: '12px' }}>
              {dynasty.korName}
            </div>
            <div style={{ fontSize: '14px', color: '#f0ead8' }}>
              {dynasty.shareCard.source}
            </div>
          </div>
          <div style={{ fontSize: '12px', color: C.goldDim, writingMode: 'vertical-rl' }}>
            ↓ 스크롤
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 48px', position: 'relative', zIndex: 2 }}>
        {/* 4. 모듈1: 영상 + 兮 카운터 */}
        {dynasty.videoId && (
          <div
            ref={(el) => elementRefs.current.set('video', el)}
            className="fade-in"
            style={{ marginBottom: '80px' }}
          >
            <p
              style={{
                fontSize: '14px',
                color: C.muted2,
                marginBottom: '24px',
                lineHeight: 1.8,
                fontFamily: "'Noto Serif KR', serif"
              }}
            >
              {dynasty.videoInstruction || "이 노래를 들으면서 하나만 세어봐. 「兮」가 몇 번 나오는지 — 그게 오늘의 첫 번째 수업이야."}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '660px',
                  aspectRatio: '16/9',
                  backgroundColor: '#000',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundImage: `url(https://img.youtube.com/vi/${dynasty.videoId}/hqdefault.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {playingVideo ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${dynasty.videoId}?autoplay=1`}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    allow="autoplay;fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      backgroundColor: 'rgba(0,0,0,0.5)'
                    }}
                    onClick={() => setPlayingVideo(true)}
                  >
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        border: `2px solid ${C.gold}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(201,168,76,0.1)'
                      }}
                    >
                      <svg style={{ width: '40px', height: '40px', fill: C.gold, marginLeft: '4px' }} viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 计数器模块 */}
            {dynasty.counterModule && (
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '16px', color: C.paper, marginBottom: '16px', fontFamily: "'Noto Serif KR', serif" }}>
                  {dynasty.counterModule.question}
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {dynasty.counterModule.options.map((num) => {
                    const correctCount = dynasty.counterModule!.correctAnswer
                    return (
                      <button
                        key={num}
                        onClick={() => handleCounter(num)}
                        style={{
                          padding: '12px 24px',
                          border: `1px solid rgba(201,168,76,0.3)`,
                          backgroundColor: xiCount === num && num === correctCount ? '#4ade80' : 'transparent',
                          color: xiCount === num && num === correctCount ? C.ink : C.gold,
                          cursor: 'pointer',
                          fontSize: '16px',
                          fontFamily: "'Noto Serif SC', serif",
                          transition: 'all 0.3s'
                        }}
                      >
                        {num}
                      </button>
                    )
                  })}
                </div>
                {showAnswer && (
                  <div
                    style={{
                      marginTop: '24px',
                      padding: '20px',
                      backgroundColor: 'rgba(74,222,128,0.1)',
                      border: '1px solid rgba(74,222,128,0.3)',
                      borderRadius: '8px',
                      maxWidth: '600px',
                      margin: '24px auto 0'
                    }}
                  >
                    <p style={{ fontSize: '14px', color: C.paper, lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif", margin: 0, whiteSpace: 'pre-line' }}>
                      {dynasty.counterModule.answerText}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* 5. 모듈2: 가사 뒤집기 카드 */}
        {dynasty.lyrics && dynasty.lyrics.length > 0 && (
          <div
            ref={(el) => elementRefs.current.set('cards', el)}
            className="fade-in"
            style={{ marginBottom: '80px' }}
          >
            <p style={{ fontSize: '14px', color: C.muted2, marginBottom: '24px', lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif" }}>
              각 가사 카드를 클릭하면 뒤집혀. 拼音·한국어·숨겨진 이야기가 나와.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '24px' }}>
              {dynasty.lyrics.map((lyric, index) => (
                <div
                  key={index}
                  onClick={() => toggleCard(index)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '4/3',
                    cursor: 'pointer',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s',
                    transform: flippedCards.has(index) ? 'rotateX(180deg)' : 'rotateX(0deg)'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backfaceVisibility: 'hidden',
                      backgroundColor: C.ink2,
                      border: `1px solid rgba(201,168,76,0.3)`,
                      borderRadius: '8px',
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <p style={{ fontSize: '24px', color: C.gold, marginBottom: '12px', fontFamily: "'Noto Serif SC', serif" }}>
                      {lyric.chinese}
                    </p>
                    {lyric.tag && (
                      <span style={{ fontSize: '10px', color: C.gold, border: `1px solid rgba(201,168,76,0.3)`, padding: '2px 8px', marginBottom: '8px' }}>
                        {lyric.tag}
                      </span>
                    )}
                    <p style={{ fontSize: '12px', color: C.goldDim, marginTop: '8px' }}>클릭 → 뒤집기</p>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backfaceVisibility: 'hidden',
                      backgroundColor: C.ink2,
                      border: `1px solid rgba(201,168,76,0.3)`,
                      borderRadius: '8px',
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      transform: 'rotateX(180deg)'
                    }}
                  >
                    <p style={{ fontSize: '14px', color: C.gold, marginBottom: '8px', fontFamily: "'Noto Serif SC', serif" }}>
                      {lyric.pinyin}
                    </p>
                    <p style={{ fontSize: '14px', color: C.paper, marginBottom: '12px', fontFamily: "'Noto Serif KR', serif" }}>
                      {lyric.korean}
                    </p>
                    {lyric.warning && (
                      <p style={{ fontSize: '11px', color: '#d97706', marginBottom: '8px', fontFamily: "'Noto Serif KR', serif" }}>
                        ⚠️ {lyric.warning}
                      </p>
                    )}
                    <p style={{ fontSize: '12px', color: C.muted2, lineHeight: 1.6, fontFamily: "'Noto Serif KR', serif" }}>
                      {lyric.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                onClick={flipAllCards}
                style={{
                  padding: '10px 20px',
                  border: `1px solid rgba(201,168,76,0.3)`,
                  backgroundColor: 'transparent',
                  color: C.gold,
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontFamily: "'Noto Serif KR', serif"
                }}
              >
                모두 뒤집기
              </button>
              <button
                onClick={resetAllCards}
                style={{
                  padding: '10px 20px',
                  border: `1px solid rgba(201,168,76,0.3)`,
                  backgroundColor: 'transparent',
                  color: C.gold,
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontFamily: "'Noto Serif KR', serif"
                }}
              >
                되돌리기
              </button>
            </div>
          </div>
        )}

        {/* 6. 모듈3: SVG 역사 지도 - 先秦(id=2)만 표시 */}
        {dynasty.id === '2' && (
          <div
            ref={(el) => elementRefs.current.set('map', el)}
            className="fade-in"
            style={{ marginBottom: '80px' }}
          >
            <h2 style={{ fontSize: '24px', color: C.gold, marginBottom: '32px', fontFamily: "'Ma Shan Zheng', serif" }}>
              역사 지도
            </h2>
            <div style={{ backgroundColor: C.ink2, border: `1px solid rgba(201,168,76,0.3)`, borderRadius: '8px', padding: '32px', position: 'relative' }}>
              <svg width="100%" height="420" viewBox="0 0 700 420" style={{ maxWidth: '700px', margin: '0 auto', display: 'block' }}>
                <defs>
                  <style>{`
                    @keyframes drawPath {
                      from {
                        stroke-dashoffset: 300;
                      }
                      to {
                        stroke-dashoffset: 0;
                      }
                    }
                    .jingke-path {
                      animation: drawPath 3s ease forwards;
                    }
                  `}</style>
                </defs>
                
                {/* 背景 */}
                <rect width="700" height="420" fill="#0a0908" />
                
                {/* 地图外框 */}
                <rect width="700" height="420" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
                
                {/* 国家领土区域 */}
                {/* 燕国 */}
                <ellipse cx="185" cy="130" rx="85" ry="75" fill="rgba(58,95,138,0.08)" stroke="rgba(58,95,138,0.25)" strokeWidth="1.5" strokeDasharray="4,3" />
                
                {/* 秦国 */}
                <ellipse cx="510" cy="215" rx="100" ry="105" fill="rgba(120,40,40,0.08)" stroke="rgba(140,50,50,0.25)" strokeWidth="1.5" strokeDasharray="4,3" />
                
                {/* 赵国 */}
                <ellipse cx="330" cy="310" rx="85" ry="65" fill="rgba(60,90,50,0.06)" stroke="rgba(70,100,60,0.2)" strokeWidth="1.5" strokeDasharray="4,3" />
                
                {/* 河流 */}
                {/* 易水 */}
                <path d="M 80 155 C 150 162, 220 178, 295 193" stroke="rgba(58,95,138,0.45)" strokeWidth="1.5" fill="none" />
                
                {/* 荆轲路线 */}
                <path 
                  d="M 185 120 C 235 148, 268 168, 295 192 C 362 218, 442 213, 518 210" 
                  stroke="#c9a84c" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeDasharray="6,4"
                  className="jingke-path"
                />
                
                {/* 路线箭头 */}
                <path d="M 510 210 L 518 206 L 516 210 L 518 214 Z" fill="#c9a84c" />
                
                {/* 国家名称文字 */}
                <text x="185" y="108" fontSize="15" fill="rgba(201,168,76,0.65)" fontFamily="'Ma Shan Zheng', serif" textAnchor="middle">燕</text>
                <text x="530" y="195" fontSize="15" fill="rgba(180,60,60,0.65)" fontFamily="'Ma Shan Zheng', serif" textAnchor="middle">秦</text>
                <text x="310" y="278" fontSize="13" fill="rgba(100,130,80,0.5)" fontFamily="'Ma Shan Zheng', serif" textAnchor="middle">赵</text>
                
                {/* 易水文字标注 */}
                <text x="175" y="148" fontSize="9" fill="rgba(58,95,138,0.7)" fontFamily="'Noto Serif KR', serif" style={{ letterSpacing: '2px' }}>易水</text>
                
                {/* 路线方向说明文字 */}
                <text x="370" y="155" fontSize="9" fill="rgba(201,168,76,0.4)" fontFamily="'Noto Serif KR', serif">荆轲의 여정 →</text>
                
                {/* 可点击的圆点 */}
                {/* 燕国 */}
                <circle 
                  cx="185" 
                  cy="120" 
                  r="8" 
                  fill="rgba(201,168,76,0.15)" 
                  stroke="#c9a84c" 
                  strokeWidth="1.5"
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.setAttribute('r', '10')
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.setAttribute('r', '8')
                  }}
                  onClick={(e) => {
                    const svg = e.currentTarget.ownerSVGElement
                    if (svg) {
                      const rect = svg.getBoundingClientRect()
                      setMapTooltip({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                        title: '燕나라',
                        text: '燕나라 수도 薊 — 지금의 베이징 근처. 荆轲의 출발점.'
                      })
                    }
                  }}
                />
                
                {/* 易水 */}
                <circle 
                  cx="295" 
                  cy="193" 
                  r="6" 
                  fill="rgba(58,95,138,0.2)" 
                  stroke="#3a5f8a" 
                  strokeWidth="1.5"
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.setAttribute('r', '8')
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.setAttribute('r', '6')
                  }}
                  onClick={(e) => {
                    const svg = e.currentTarget.ownerSVGElement
                    if (svg) {
                      const rect = svg.getBoundingClientRect()
                      setMapTooltip({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                        title: '易水河',
                        text: '易水河 — BC 227년 겨울, 마지막 노래를 부른 강.'
                      })
                    }
                  }}
                />
                
                {/* 赵国 */}
                <circle 
                  cx="310" 
                  cy="295" 
                  r="6" 
                  fill="rgba(80,120,60,0.15)" 
                  stroke="rgba(80,120,60,0.4)" 
                  strokeWidth="1"
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.setAttribute('r', '8')
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.setAttribute('r', '6')
                  }}
                  onClick={(e) => {
                    const svg = e.currentTarget.ownerSVGElement
                    if (svg) {
                      const rect = svg.getBoundingClientRect()
                      setMapTooltip({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                        title: '赵나라',
                        text: '赵나라 — 이미 秦에 멸망. 燕도 다음 차례임을 알고 있었어.'
                      })
                    }
                  }}
                />
                
                {/* 秦国 */}
                <circle 
                  cx="518" 
                  cy="210" 
                  r="8" 
                  fill="rgba(140,40,40,0.2)" 
                  stroke="#b44040" 
                  strokeWidth="1.5"
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.setAttribute('r', '10')
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.setAttribute('r', '8')
                  }}
                  onClick={(e) => {
                    const svg = e.currentTarget.ownerSVGElement
                    if (svg) {
                      const rect = svg.getBoundingClientRect()
                      setMapTooltip({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                        title: '秦나라',
                        text: '秦나라 수도 咸陽 — 荆轲의 목적지. 실패한 곳.'
                      })
                    }
                  }}
                />
              </svg>
              
              {/* 地图下方图例 */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '24px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: '1.5px solid #c9a84c' }}></div>
                  <span style={{ fontSize: '11px', color: C.paper2, fontFamily: "'Noto Serif KR', serif" }}>클릭 가능</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(58,95,138,0.2)', border: '1.5px solid #3a5f8a' }}></div>
                  <span style={{ fontSize: '11px', color: C.paper2, fontFamily: "'Noto Serif KR', serif" }}>易水</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(140,40,40,0.2)', border: '1.5px solid #b44040' }}></div>
                  <span style={{ fontSize: '11px', color: C.paper2, fontFamily: "'Noto Serif KR', serif" }}>秦나라</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '40px', height: '2px', background: 'repeating-linear-gradient(to right, #c9a84c 0, #c9a84c 6px, transparent 6px, transparent 10px)' }}></div>
                  <span style={{ fontSize: '11px', color: C.paper2, fontFamily: "'Noto Serif KR', serif" }}>荆轲 경로</span>
                </div>
              </div>
              
              {/* 点击提示框 */}
              {mapTooltip && (
                <div
                  style={{
                    position: 'absolute',
                    left: `${mapTooltip.x + 20}px`,
                    top: `${mapTooltip.y - 10}px`,
                    background: '#141210',
                    border: '1px solid rgba(201,168,76,0.3)',
                    padding: '10px 14px',
                    fontSize: '12px',
                    color: '#b8ad98',
                    fontFamily: "'Noto Serif KR', serif",
                    lineHeight: 1.6,
                    maxWidth: '280px',
                    zIndex: 100,
                    borderRadius: '4px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                  }}
                >
                  <div style={{ fontSize: '13px', color: '#c9a84c', fontWeight: 'bold', marginBottom: '6px' }}>
                    {mapTooltip.title}
                  </div>
                  <div>{mapTooltip.text}</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 7. 모듈4: 荆轲 이야기 타임라인 */}
        {dynasty.storyTimeline && dynasty.storyTimeline.length > 0 && (
          <div
            ref={(el) => elementRefs.current.set('timeline', el)}
            className="fade-in"
            style={{ marginBottom: '80px' }}
          >
            <h2 style={{ fontSize: '24px', color: C.gold, marginBottom: '32px', fontFamily: "'Ma Shan Zheng', serif" }}>
              역사 이야기
            </h2>
            <div style={{ position: 'relative', paddingLeft: '32px' }}>
              <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '2px', backgroundColor: C.gold, opacity: 0.3 }} />
              {dynasty.storyTimeline.map((item, index) => (
                <div key={index} style={{ position: 'relative', marginBottom: '48px' }}>
                  <div style={{ position: 'absolute', left: '-40px', top: '4px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: C.gold, border: `2px solid ${C.ink}` }} />
                  <div style={{ fontSize: '12px', color: C.gold, marginBottom: '8px', fontFamily: "'Noto Serif KR', serif" }}>
                    {item.year}
                  </div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px', fontFamily: "'Ma Shan Zheng', serif" }}>
                    {renderWithWordCards(item.title)}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif" }}>
                    {renderWithWordCards(item.content)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. 모듈5: 성어 아코디언 */}
        {dynasty.idioms && dynasty.idioms.length > 0 && (
          <div
            ref={(el) => elementRefs.current.set('idioms', el)}
            className="fade-in"
            style={{ marginBottom: '80px' }}
          >
            <h2 style={{ fontSize: '24px', color: C.gold, marginBottom: '32px', fontFamily: "'Ma Shan Zheng', serif" }}>
              성어 학습
            </h2>
            {dynasty.idioms.map((idiom, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '16px',
                  border: `1px solid rgba(201,168,76,0.3)`,
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: C.ink2
                }}
              >
                <button
                  onClick={() => toggleIdiom(index)}
                  style={{
                    width: '100%',
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    color: C.paper,
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '10px', color: C.gold, marginRight: '12px', fontFamily: "'Noto Serif KR', serif" }}>
                      {idiom.level}
                    </span>
                    <span style={{ fontSize: '20px', color: C.gold, fontFamily: "'Ma Shan Zheng', serif", marginRight: '12px' }}>
                      {idiom.chinese}
                    </span>
                    <span style={{ fontSize: '14px', color: C.paper2, fontFamily: "'Noto Serif KR', serif" }}>
                      {idiom.korean}
                    </span>
                  </div>
                  <span style={{ fontSize: '20px', color: C.gold }}>
                    {expandedIdiom === index ? '−' : '+'}
                  </span>
                </button>
                {expandedIdiom === index && (
                  <div style={{ padding: '0 20px 20px 20px', borderTop: `1px solid rgba(201,168,76,0.2)` }}>
                    <p style={{ fontSize: '14px', color: C.paper2, marginBottom: '16px', lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif" }}>
                      <strong style={{ color: C.gold }}>출처:</strong> {renderWithWordCards(idiom.origin)}
                    </p>
                    {idiom.examples && idiom.examples.length > 0 && (
                      <div style={{ marginBottom: '16px' }}>
                        <strong style={{ color: C.gold, fontSize: '14px', fontFamily: "'Noto Serif KR', serif" }}>예문:</strong>
                        {idiom.examples.map((ex, i) => (
                          <div key={i} style={{ marginTop: '8px', paddingLeft: '16px' }}>
                            <p style={{ fontSize: '14px', color: C.gold, fontFamily: "'Noto Serif SC', serif" }}>{renderWithWordCards(ex.chinese)}</p>
                            <p style={{ fontSize: '12px', color: C.paper2, fontFamily: "'Noto Serif KR', serif" }}>{ex.korean}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {idiom.specialNote && (
                      <p style={{ fontSize: '12px', color: C.gold, padding: '12px', backgroundColor: 'rgba(201,168,76,0.1)', borderRadius: '4px', fontFamily: "'Noto Serif KR', serif" }}>
                        ✦ {idiom.specialNote}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 9. 모듈6: 한국인 학습자 모듈 */}
        {dynasty.hanjaComparisons && dynasty.hanjaComparisons.length > 0 && (
          <div
            ref={(el) => elementRefs.current.set('hanja', el)}
            className="fade-in"
            style={{ marginBottom: '80px' }}
          >
            <h2 style={{ fontSize: '24px', color: C.gold, marginBottom: '32px', fontFamily: "'Ma Shan Zheng', serif" }}>
              한자 비교
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {dynasty.hanjaComparisons.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: '24px',
                    border: `1px solid rgba(201,168,76,0.3)`,
                    borderRadius: '8px',
                    backgroundColor: C.ink2
                  }}
                >
                  <div style={{ fontSize: '18px', color: C.gold, marginBottom: '8px', fontFamily: "'Ma Shan Zheng', serif" }}>
                    {item.chinese}
                  </div>
                  <div style={{ fontSize: '14px', color: C.paper, marginBottom: '12px', fontFamily: "'Noto Serif KR', serif" }}>
                    {item.korean}
                  </div>
                  <div style={{ fontSize: '12px', color: C.paper2, marginBottom: '8px', fontFamily: "'Noto Serif KR', serif" }}>
                    {item.example}
                  </div>
                  <div style={{ fontSize: '11px', color: C.muted2, fontFamily: "'Noto Serif KR', serif" }}>
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
            {dynasty.koreanParallel && (
              <div style={{ marginTop: '32px', padding: '24px', border: `1px solid rgba(201,168,76,0.3)`, borderRadius: '8px', backgroundColor: C.ink2 }}>
                <h3 style={{ fontSize: '18px', color: C.gold, marginBottom: '12px', fontFamily: "'Ma Shan Zheng', serif" }}>
                  {dynasty.koreanParallel.title}
                </h3>
                <p style={{ fontSize: '14px', color: C.paper2, lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif" }}>
                  {renderWithWordCards(dynasty.koreanParallel.content)}
                </p>
              </div>
            )}
            {dynasty.emotionNote && (
              <div style={{ marginTop: '24px', padding: '20px', backgroundColor: 'rgba(201,168,76,0.1)', borderRadius: '8px' }}>
                <p style={{ fontSize: '14px', color: C.paper, lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif" }}>
                  {dynasty.emotionNote}
                </p>
              </div>
            )}
          </div>
        )}

        {/* 10. 모듈7: 판단 퀴즈 */}
        {dynasty.quiz && (
          <div
            ref={(el) => elementRefs.current.set('quiz', el)}
            className="fade-in"
            style={{ marginBottom: '80px' }}
          >
            <h2 style={{ fontSize: '24px', color: C.gold, marginBottom: '32px', fontFamily: "'Ma Shan Zheng', serif" }}>
              판단 퀴즈
            </h2>
            <div style={{ padding: '32px', border: `1px solid rgba(201,168,76,0.3)`, borderRadius: '8px', backgroundColor: C.ink2 }}>
              <p style={{ fontSize: '16px', color: C.paper, marginBottom: '24px', lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif", whiteSpace: 'pre-line' }}>
                {dynasty.quiz.question}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {dynasty.quiz.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuizSelect(option)}
                    style={{
                      padding: '16px',
                      border: `1px solid ${selectedQuiz === option ? C.gold : 'rgba(201,168,76,0.3)'}`,
                      backgroundColor: selectedQuiz === option ? 'rgba(201,168,76,0.1)' : 'transparent',
                      color: C.paper,
                      cursor: 'pointer',
                      fontSize: '14px',
                      textAlign: 'left',
                      fontFamily: "'Noto Serif KR', serif",
                      transition: 'all 0.3s'
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {selectedQuiz && (() => {
                const optionLetter = selectedQuiz.charAt(0)
                const result = dynasty.quiz.results.find(r => 
                  r.chosen.startsWith(`${optionLetter})`) || r.chosen.includes(`${optionLetter}를`)
                ) || dynasty.quiz.results[0]
                
                return (
                  <div style={{ marginTop: '24px', padding: '20px', backgroundColor: 'rgba(201,168,76,0.1)', borderRadius: '8px' }}>
                    <p style={{ fontSize: '14px', color: C.gold, marginBottom: '12px', fontFamily: "'Noto Serif KR', serif" }}>
                      {result.chosen}
                    </p>
                    <p style={{ fontSize: '14px', color: C.paper, marginBottom: '12px', lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif" }}>
                      {result.interpretation}
                    </p>
                    <p style={{ fontSize: '12px', color: C.paper2, fontStyle: 'italic', fontFamily: "'Noto Serif KR', serif" }}>
                      {result.historicalQuote}
                    </p>
                  </div>
                )
              })()}
            </div>
          </div>
        )}

        {/* 11. 모듈8: 기억 앵커 */}
        {dynasty.memoryAnchor && (
          <div
            ref={(el) => elementRefs.current.set('anchor', el)}
            className="fade-in"
            style={{ marginBottom: '80px' }}
          >
            <h2 style={{ fontSize: '24px', color: C.gold, marginBottom: '32px', fontFamily: "'Ma Shan Zheng', serif" }}>
              오늘의 핵심
            </h2>
            <div style={{ padding: '48px', border: `2px solid ${C.gold}`, borderRadius: '8px', backgroundColor: C.ink2, textAlign: 'center' }}>
              <div style={{ fontSize: '48px', color: C.gold, marginBottom: '16px', fontFamily: "'Ma Shan Zheng', serif" }}>
                {dynasty.memoryAnchor.chinese}
              </div>
              <p style={{ fontSize: '16px', color: C.paper, marginBottom: '12px', lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif", whiteSpace: 'pre-line' }}>
                {renderWithWordCards(dynasty.memoryAnchor.text)}
              </p>
              <p style={{ fontSize: '12px', color: C.paper2, fontFamily: "'Noto Serif KR', serif", whiteSpace: 'pre-line' }}>
                {dynasty.memoryAnchor.subText}
              </p>
            </div>
          </div>
        )}

        {/* 12. 모듈9: 공유 카드 */}
        {dynasty.shareCard && (
          <div
            ref={(el) => elementRefs.current.set('share', el)}
            className="fade-in"
            style={{ marginBottom: '80px' }}
          >
            <h2 style={{ fontSize: '24px', color: C.gold, marginBottom: '32px', fontFamily: "'Ma Shan Zheng', serif" }}>
              공유 카드
            </h2>
            <button
              onClick={handleDownloadShareCard}
              disabled={isDownloading}
              style={{
                width: '100%',
                padding: '14px',
                marginBottom: '24px',
                background: 'transparent',
                border: '1px solid rgba(201,168,76,0.4)',
                color: C.gold,
                fontSize: '13px',
                letterSpacing: '3px',
                borderRadius: 0,
                cursor: isDownloading ? 'wait' : 'pointer',
                fontFamily: "'Noto Serif KR', serif",
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (!isDownloading) {
                  e.currentTarget.style.background = 'rgba(201,168,76,0.08)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {isDownloading ? '다운로드 중...' : '✦ 카드 다운로드'}
            </button>
            <div
              ref={shareCardRef}
              style={{
                padding: '48px',
                border: `1px solid rgba(201,168,76,0.3)`,
                borderRadius: '8px',
                backgroundColor: C.ink,
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.1) 0%, transparent 50%)',
                textAlign: 'center',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              <div style={{ fontSize: '10px', color: C.muted2, marginBottom: '8px', fontFamily: "'Noto Serif KR', serif" }}>
                {dynasty.shareCard.dynasty}
              </div>
              <div style={{ fontSize: '32px', color: C.gold, marginBottom: '16px', fontFamily: "'Ma Shan Zheng', serif" }}>
                {dynasty.shareCard.idiom}
              </div>
              <div style={{ fontSize: '14px', color: C.paper2, marginBottom: '24px', fontFamily: "'Noto Serif SC', serif" }}>
                {dynasty.shareCard.pinyin}
              </div>
              {dynasty.shareCard.quote.map((line, i) => (
                <p key={i} style={{ fontSize: '16px', color: C.paper, marginBottom: '8px', fontFamily: "'Noto Serif KR', serif" }}>
                  {line}
                </p>
              ))}
              <div style={{ fontSize: '12px', color: C.muted2, marginTop: '24px', fontFamily: "'Noto Serif KR', serif" }}>
                — {dynasty.shareCard.source}
              </div>
            </div>
          </div>
        )}

        {/* 13. 모듈10: 다음 시대 */}
        {dynasty.nextDynasty && (
          <div
            ref={(el) => elementRefs.current.set('next', el)}
            className="fade-in"
            style={{ marginBottom: '80px', textAlign: 'center' }}
          >
            <h2 style={{ fontSize: '24px', color: C.gold, marginBottom: '16px', fontFamily: "'Ma Shan Zheng', serif" }}>
              다음 시대
            </h2>
            <p 
              onClick={() => {
                const nextDynastyId = DYNASTY_NAME_TO_ID[dynasty.nextDynasty.name]
                if (nextDynastyId && onNavigateToDynasty) {
                  onNavigateToDynasty(nextDynastyId)
                }
              }}
              style={{ 
                fontSize: '16px', 
                color: C.gold, 
                marginBottom: '8px', 
                fontFamily: "'Ma Shan Zheng', serif",
                cursor: onNavigateToDynasty && DYNASTY_NAME_TO_ID[dynasty.nextDynasty.name] ? 'pointer' : 'default',
                textDecoration: onNavigateToDynasty && DYNASTY_NAME_TO_ID[dynasty.nextDynasty.name] ? 'underline' : 'none',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                if (onNavigateToDynasty && DYNASTY_NAME_TO_ID[dynasty.nextDynasty.name]) {
                  e.currentTarget.style.opacity = '0.8'
                }
              }}
              onMouseLeave={(e) => {
                if (onNavigateToDynasty && DYNASTY_NAME_TO_ID[dynasty.nextDynasty.name]) {
                  e.currentTarget.style.opacity = '1'
                }
              }}
            >
              {dynasty.nextDynasty.name}
            </p>
            <p style={{ fontSize: '14px', color: C.paper2, fontFamily: "'Noto Serif KR', serif" }}>
              {dynasty.nextDynasty.hint}
            </p>
          </div>
        )}
      </div>

      {/* 词卡浮层 */}
      {activeWord && WORD_DICT[activeWord.word] && (() => {
        const info = WORD_DICT[activeWord.word]
        return (
          <div
            onClick={() => setActiveWord(null)}
            style={{
              position: 'fixed',
              left: Math.min(activeWord.x, window.innerWidth - 280),
              top: activeWord.y + 12,
              zIndex: 999,
              background: '#141210',
              border: '1px solid rgba(201,168,76,0.35)',
              padding: '14px 18px',
              minWidth: '240px',
              maxWidth: '280px',
              pointerEvents: 'auto',
            }}
          >
            {/* 词卡头部 */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '6px', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flex: 1 }}>
                <span style={{
                  fontFamily: "'Ma Shan Zheng', serif",
                  fontSize: '22px',
                  color: '#c9a84c',
                  cursor: 'pointer',
                }}
                  onClick={(e) => { e.stopPropagation(); speak(activeWord.word) }}
                >
                  {activeWord.word}
                </span>
                <span style={{ fontSize: '11px', color: '#7a7060' }}>{info.pinyin}</span>
                <span style={{
                  fontSize: '9px',
                  color: '#6b5520',
                  border: '1px solid rgba(201,168,76,0.2)',
                  padding: '1px 6px',
                  letterSpacing: '1px',
                }}>
                  {info.typeKr}
                </span>
              </div>
              {/* 收藏按钮 */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleFavorite(activeWord.word)
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: favoriteWords.has(activeWord.word) ? '#ff6b9d' : '#7a7060',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!favoriteWords.has(activeWord.word)) {
                    e.currentTarget.style.color = '#ff6b9d'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!favoriteWords.has(activeWord.word)) {
                    e.currentTarget.style.color = '#7a7060'
                  }
                }}
              >
                {favoriteWords.has(activeWord.word) ? '❤️' : '🤍'}
              </button>
            </div>

            {/* 分隔线 */}
            <div style={{ borderTop: '1px solid rgba(201,168,76,0.08)', margin: '8px 0' }} />

            {/* 说明文字 */}
            <div style={{ fontSize: '12px', color: '#b8ad98', lineHeight: 1.8 }}>
              {info.desc}
            </div>

            {/* 点击朗读提示 */}
            <div style={{
              marginTop: '10px',
              fontSize: '9px',
              color: '#4a4438',
              letterSpacing: '1px',
            }}>
              한자를 클릭하면 발음을 들을 수 있어요 🔊
            </div>
          </div>
        )
      })()}

    </div>
  )
}

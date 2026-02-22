import { useState, useEffect, useRef } from "react";
import { dynastyDetails } from "../data/dynastyDetails";

// 朝代数据类型
interface Dynasty {
  id: string;
  name: string;
  period: string;
  korName?: string; // 韩文名称
  badge?: string;
  hook?: string; // Hook文句
  backgroundImage?: string;
  videoId?: string;
  videoIds?: string[];
  lyrics?: {
    chinese: string[];
    korean: string[];
  };
  idioms?: string[];
  greeting?: string; // AI问候语
}

// 朝代数据
const dynasties: Dynasty[] = [
  {
    id: "1",
    name: "夏商周",
    period: "BC 2100 – BC 221",
    korName: "하상주",
    badge: "甲骨文 · 최초의 문자",
    hook: '"3000년 전 거북이 등껍질에 새긴 글자가 오늘날 한자의 뿌리입니다"',
    backgroundImage: "/images/夏商周甲骨文.jpg",
    videoId: "bdJLK9TwyZM",
    lyrics: {
      chinese: ["执刀为笔，书洪荒宇宙", "以形表意，绘山川河流"],
      korean: ["칼을 붓 삼아, 태초의 우주를 기록하다", "형태로 뜻을 나타내고, 산과 강을 그리다"],
    },
    idioms: ["以形表意"],
    greeting: "夏商周时期，甲骨文的出现标志着中华文明的文字起源。让我们一起探索这个时代的文化瑰宝吧！",
  },
  {
    id: "2",
    name: "先秦",
    period: "BC 770 – BC 221",
    korName: "선진",
    badge: "百家爭鳴 · 荆轲 · 壮士吟",
    hook: '"공자, 노자, 손자 — 2500년 전 이 시대의 사상이 지금도 살아있습니다"',
    backgroundImage: "/images/先秦孔子.jpeg",
    videoId: "nMiZudnF3Os",
    lyrics: {
      chinese: ["风萧萧兮易水寒", "壮士一去啊不归还"],
      korean: ["바람은 쓸쓸하고 역수는 차갑구나", "장사는 한 번 가면 돌아오지 않으리"],
    },
    idioms: ["一去不复返"],
    greeting: "先秦时期，荆轲的故事与《壮士吟》让我们看见了那个时代的侠义精神。让我们一起探索吧！",
  },
  {
    id: "3",
    name: "秦朝",
    period: "BC 221 – BC 206",
    korName: "진나라",
    badge: "🎵 长城谣 · 鄧麗君",
    hook: '"진시황이 최초로 중국을 통일했어. 만리장성, 병마용 — 단 15년의 제국이 남긴 것들"',
    backgroundImage: "https://images.unsplash.com/photo-1508804052814-cd3ba865a116?w=800&h=600&fit=crop&q=80",
    videoId: "e8TMLAZrbCc",
    lyrics: {
      chinese: ["长城外面是故乡", "没齿难忘仇和恨，日夜只想回故乡"],
      korean: ["장성 바깥이 바로 고향이다", "죽을 때까지 잊을 수 없는 원한, 밤낮으로 고향에 돌아가고 싶다"]
    },
    idioms: ["没齿难忘"],
    greeting: "진시황이 세운 최초의 통일 제국, 진나라. 만리장성과 분서갱유의 시대를 《장성요》와 함께 느껴봐.",
  },
  {
    id: "4",
    name: "汉朝",
    period: "BC 206 – AD 220",
    korName: "한나라",
    badge: "🎵 纸上花 · 斯兰",
    hook: '"종이를 발명하고 실크로드를 열었던 시대 — 동서양이 처음 만난 순간"',
    backgroundImage: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop&q=80",
    videoId: "ULU3eyRK-5I",
    lyrics: {
      chinese: ["丹青一卷传天下", "纸寿千年醉美中华"],
      korean: ["붉고 푸른 그림 한 두루마리가 천하에 전해진다", "종이의 수명은 천 년, 중화의 아름다움에 취한다"],
    },
    idioms: ["匠心独运"],
    greeting: "종이와 실크로드의 시대, 한나라. 채륜의 종이가 세계를 바꾼 이야기를 《纸上花》와 함께 느껴봐.",
  },
  {
    id: "5",
    name: "三国",
    period: "AD 220 – 280",
    korName: "삼국시대",
    badge: "🎵 林俊杰 〈曹操〉 · 삼국 핵심",
    hook: '"조조, 유비, 손권 — 한국인이 가장 잘 아는 중국 역사. 삼국지의 그 시대"',
    backgroundImage: "/images/三国诸葛亮.jpg",
    greeting: "삼국은 '정답'을 외우는 시대가 아니야.\n노래 한 곡으로 권력, 명분, 외로움까지 같이 읽어보자.",
    videoId: "7uAZXBglaK4",
    lyrics: {
      chinese: [
        "不是英雄 不读三国",
        "尔虞我诈是三国 说不清对与错",
      ],
      korean: [
        "영웅이 아니라면 삼국을 읽지 않지",
        "서로 속고 속이는 게 삼국이고 옳고 그름을 말로 다 못 해",
      ],
    },
    idioms: ["尔虞我诈","烽火连天","儿女情长"],
  },
  {
    id: "6",
    name: "魏晋南北朝",
    period: "AD 220 – 589",
    korName: "위진남북조",
    badge: "🎋 죽림칠현의 노래 · 琢光曲",
    hook: '"왕희지의 붓글씨가 완성된 시대. 난정서 한 장이 천 년을 내려왔습니다"',
    backgroundImage: "/images/魏晋南北朝竹林七贤.jpg",
    greeting: "혼란 속에서 피어난 자유의 시대예요. 대나무 숲의 현인들과 함께 위진남북조를 여행해봐요.",
    videoId: "AV8vn5bb-k4",
    lyrics: {
      chinese: ["竹林七贤与荣启期昂轩", "愿归来仍是少年"],
      korean: ["죽림칠현과 영계기가 당당하게", "돌아올 때도 여전히 소년이기를"]
    },
    idioms: ["竹林七贤"],
  },
  {
    id: "7",
    name: "隋朝",
    period: "AD 581 – 618",
    korName: "수나라",
    badge: "🚤 대운하의 노래 · 大运河",
    hook: '"대운하로 중국을 하나로 연결했어. 단 37년, 하지만 당나라의 토대를 만들었어"',
    backgroundImage: "/images/隋朝大运河.jpeg",
    videoId: "XmCvT8aGybY",
    lyrics: {
      chinese: ["天下粮仓，恩泽神州", "承载着美丽梦想，美丽梦想之舟"],
      korean: ["천하의 곡식 창고, 온 나라에 은혜를 베풀다", "아름다운 꿈을 싣고 달리는, 아름다운 꿈의 배"]
    },
    idioms: ["生生不息"],
    greeting: "37년의 짧은 왕조, 천 년의 유산을 남긴 시대예요. 대운하의 물결을 따라 수나라를 여행해봐요.",
  },
  {
    id: "8",
    name: "唐朝",
    period: "AD 618 – 907",
    korName: "당나라",
    badge: "🍶 음중팔선의 노래 · 饮中八仙歌",
    hook: '"이백과 두보가 살았던 시대. 그들의 시가 지금도 노래가 됩니다"',
    backgroundImage: "/images/唐朝李白.jpg",
    videoId: "jZBMqeIpLYE",
    lyrics: {
      chinese: ["李白一斗诗百篇，长安市上酒家眠", "天子呼来不上船，自称臣是酒中仙"],
      korean: ["이백은 한 말 술에 시 백 편을 짓고, 장안 저잣거리 술집에서 잠든다", "천자가 불러도 배에 오르지 않고, 스스로 신은 술 속의 신선이라 칭한다"],
    },
    idioms: ["酒中仙"],
    greeting: "시와 술과 자유가 넘쳤던 당나라 장안으로 떠나봐요. 이백과 함께 술 속의 신선이 되어볼 시간이에요.",
  },
  {
    id: "9",
    name: "五代十国",
    period: "AD 907 – 979",
    korName: "오대십국",
    badge: "분열의 시대 · 72년간 5개 왕조",
    hook: '"당나라가 무너진 후 72년간 5개 왕조가 교체됐어. 혼란 속에서도 문화는 살아남았어"',
    backgroundImage: "/images/五代十国.jpeg",
    greeting: "五代十国时期，虽然政治分裂，但文化依然在传承和发展。",
  },
  {
    id: "10",
    name: "宋朝",
    period: "AD 960 – 1279",
    korName: "송나라",
    badge: "🎨 청명상하도의 노래 · 清明上河图",
    hook: '"비 갠 뒤의 하늘색을 도자기에 담았던 시대 — 천청색의 비밀"',
    backgroundImage: "/images/宋朝.jpg",
    videoId: "jWwaKthZtyY",
    lyrics: {
      chinese: ["多少能人将相书画三千里，上河图雕琢的意义", "绫罗飘起遮住日落西，奏一回断肠的古曲"],
      korean: ["얼마나 많은 인재와 장수들이 삼천 리에 걸쳐 글과 그림을 남겼나, 청명상하도에 새겨진 의미", "비단이 날려 서쪽으로 지는 해를 가리고, 한 번 더 애끊는 옛 곡조를 연주한다"],
    },
    idioms: ["雕琢"],
    greeting: "천 년 전 개봉의 거리를 담은 그림 한 장이 송나라를 기억하게 해요. 청명상하도와 함께 송나라를 걸어봐요.",
  },
  {
    id: "11",
    name: "元朝",
    period: "AD 1271 – 1368",
    korName: "원나라",
    badge: "🏺 청화백자의 노래 · 青花瓷",
    hook: '"칭기즈칸의 후손이 세운 제국 — 동서양 교류의 최정점"',
    backgroundImage: "/images/元朝.jpg",
    videoId: "Z8Mqw0b9ADs",
    lyrics: {
      chinese: ["天青色等烟雨，而我在等你", "如传世的青花瓷，自顾自美丽"],
      korean: ["하늘빛 청자색은 연기비를 기다리고, 나는 너를 기다린다", "전세에 전해지는 청화백자처럼, 스스로 아름답다"]
    },
    idioms: ["天青色"],
    greeting: "기다림 끝에 완성되는 청화백자처럼, 원나라의 이야기를 천천히 들어봐요. 《청화자》와 함께 원나라를 여행해봐요.",
  },
  {
    id: "12",
    name: "明朝",
    period: "AD 1368 – 1644",
    korName: "명나라",
    badge: "🌿 본초강목의 노래 · 本草纲目",
    hook: '"세계 최대의 궁전 자금성과, 콜럼버스보다 먼저 세계를 항해한 정화"',
    backgroundImage: "/images/明朝.jpg",
    videoId: "blC92W4RdlU",
    lyrics: {
      chinese: ["快翻开本草纲目，多看一些善本书", "已扎根千年的汉方，有别人不知道的力量"],
      korean: ["어서 본초강목을 펼쳐봐, 좋은 원본 책들을 더 많이 읽어봐", "이미 천 년을 뿌리내린 한방에는, 다른 사람들이 모르는 힘이 있다"]
    },
    idioms: ["本草纲目"],
    greeting: "27년의 집념으로 동아시아 의학을 바꾼 이시진의 시대예요. 《본초강목》과 함께 명나라를 탐험해봐요.",
  },
  {
    id: "13",
    name: "清朝",
    period: "AD 1644 – 1912",
    korName: "청나라",
    badge: "마지막 황제 · 경극",
    hook: '"만주족이 세운 마지막 왕조 — 경극과 전통문화의 집대성"',
    backgroundImage: "/images/清朝.jpg",
    greeting: "清朝时期的文化传承，为我们留下了丰富的文化遗产。",
  },
  {
    id: "14",
    name: "民国",
    period: "AD 1912 – 1949",
    korName: "중화민국",
    badge: "상하이 황금시대 · 재즈",
    hook: '"1930년대 상하이 — 동양의 파리라 불리던 그 시대의 노래들"',
    backgroundImage: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=800&h=600&fit=crop&q=80",
    greeting: "民国时期是文化转型的重要阶段，新文化运动影响深远。",
  },
  {
    id: "15",
    name: "现代",
    period: "AD 1949 – 현재",
    korName: "현대 중국",
    badge: "현대 중화권 팝 · C-POP",
    hook: '"덩리쥔부터 주걸륜까지 — 현대 중국어 팝의 모든 것"',
    backgroundImage: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=800&h=600&fit=crop&q=80",
    greeting: "现代中国，传统文化与现代文明交相辉映。",
  },
];

// 消息类型
interface Message {
  id: string;
  type: "ai" | "user";
  content: string;
  timestamp: Date;
}

interface TimelinePageProps {
  onNavigateToDetail?: (dynastyId: string) => void;
  onExpandedChange?: (dynastyId: string | null) => void;
}

export default function TimelinePage({ onNavigateToDetail, onExpandedChange }: TimelinePageProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [aiPanelMessages, setAiPanelMessages] = useState<Message[]>([]); // 右侧AI面板消息
  const [aiPanelInput, setAiPanelInput] = useState(""); // 右侧AI面板输入
  const [speechBubbleId, setSpeechBubbleId] = useState<string | null>(null); // 对话气泡显示的朝代ID
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [introElementsVisible, setIntroElementsVisible] = useState({
    square: false,
    title: false,
    subtitle: false,
    button: false,
  });
  const [buttonHovered, setButtonHovered] = useState(false);
  const [playButtonHovered, setPlayButtonHovered] = useState<Record<string, boolean>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // 入场动画元素依次显示
  useEffect(() => {
    if (!showIntro) return;

    const timers = [
      setTimeout(() => setIntroElementsVisible((prev) => ({ ...prev, square: true })), 200),
      setTimeout(() => setIntroElementsVisible((prev) => ({ ...prev, title: true })), 400),
      setTimeout(() => setIntroElementsVisible((prev) => ({ ...prev, subtitle: true })), 600),
      setTimeout(() => setIntroElementsVisible((prev) => ({ ...prev, button: true })), 800),
    ];

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [showIntro]);

  // IntersectionObserver 用于淡入动画
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // 滚动到底部 - 使用scrollTop而不是scrollIntoView，避免元素居中
  useEffect(() => {
    if (messagesEndRef.current) {
      const container = messagesEndRef.current.parentElement;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }
  }, [aiPanelMessages]);

  // 入场动画关闭后滚动到顶部
  useEffect(() => {
    if (!showIntro) {
      // 延迟滚动，确保动画完成后再滚动
      // window.scrollTo 已删除，避免展开卡片时页面跳到顶部
    }
  }, [showIntro]);

  // 切换展开状态（手风琴效果）
  const toggleExpand = (id: string) => {
    const isCurrentlyExpanded = expandedId === id;
    const newExpandedId = isCurrentlyExpanded ? null : id;
    setExpandedId(newExpandedId);
    onExpandedChange?.(newExpandedId);
    setPlayingVideoId(null);
    
    // 展开新卡片时清空AI面板消息
    if (!isCurrentlyExpanded) {
      setAiPanelMessages([]);
      setAiPanelInput("");
    }

    // 显示对话气泡（在卡片对面）
    const dynasty = dynasties.find((d) => d.id === id);
    if (dynasty && dynasty.greeting && !isCurrentlyExpanded) {
      setSpeechBubbleId(id);
    } else {
      setSpeechBubbleId(null);
    }

    // 阻止展开时的页面滚动
    if (!isCurrentlyExpanded) {
      const currentScrollY = window.scrollY;
      setTimeout(() => {
        window.scrollTo({ top: currentScrollY, behavior: "auto" });
      }, 0);
    }
  };

  // 点击播放按钮播放视频
  const handlePlayClick = (videoId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPlayingVideoId(videoId);
  };

  // 高亮成语（带下划线）
  const highlightIdioms = (text: string, idioms: string[] = []) => {
    if (idioms.length === 0) return text;
    let result = text;
    idioms.forEach((idiom) => {
      const regex = new RegExp(`(${idiom})`, "g");
      result = result.replace(
        regex,
        '<span style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;">$1</span>'
      );
    });
    return result;
  };

  // 处理成语点击 - 在右侧AI面板显示
  const handleIdiomClick = (idiom: string, dynastyId: string) => {
    // 如果是"一去不复返"，显示固定消息并朗读
    if (idiom === "一去不复返") {
      // 朗读"一去啊不归还"，0.7倍速
      speakText("一去啊不归还");
      
      const fixedMessage: Message = {
        id: Date.now().toString(),
        type: "ai",
        content: `一去不复返 (yī qù bù fù fǎn)

BC 227년, 荆轲가 易水를 건너기 전 남긴 말에서 탄생한 성어야.

'한 번 가면 돌아오지 않는다' — 2200년이 지난 지금도 한국어에서 그대로 써.
'청춘은 일거불부반이야'처럼.

더 궁금한 게 있어? 아래에 물어봐!`,
        timestamp: new Date(),
      };
      // 清空之前的消息，只显示固定消息
      setAiPanelMessages([fixedMessage]);
      return;
    }

    // 如果是"以形表意"，显示固定消息并朗读
    if (idiom === "以形表意") {
      // 朗读"以形表意，绘山川河流"，0.7倍速
      speakText("以形表意，绘山川河流");
      
      const fixedMessage: Message = {
        id: Date.now().toString(),
        type: "ai",
        content: `以形表意 (yǐ xíng biǎo yì)

한자의 핵심 조자 원리야.
「山」은 산 모양, 「日」은 태양 모양,
「木」은 나무 모양에서 시작했어.

'이 원리를 알면 처음 보는 한자도 뜻을 추측할 수 있어' —
「明」= 日(태양)+月(달) = 밝다. 이렇게 조합으로 이해하는 거야.

더 궁금한 게 있어? 아래에 물어봐!`,
        timestamp: new Date(),
      };
      // 清空之前的消息，只显示固定消息
      setAiPanelMessages([fixedMessage]);
      return;
    } else if (idiom === "没齿难忘") {
      speakText("没齿难忘仇和恨，日夜只想回故乡", 0.7);
      const fixedMessage: Message = {
        id: Date.now().toString(),
        type: "ai",
        content: `没齿难忘 (mò chǐ nán wàng)

진나라 멸망 후 유랑하는 백성들의 한(恨)에서 비롯된 표현이야. '이가 다 빠질 때까지', 즉 죽을 때까지 잊지 못한다는 뜻이야.

「죽을 때까지 잊을 수 없는 원한」— 은혜에도, 원한에도 모두 쓸 수 있어

더 궁금한 게 있어? 아래에 물어봐!`,
        timestamp: new Date(),
      };
      setAiPanelMessages([fixedMessage]);
      return;
    } else if (idiom === "匠心独运") {
      speakText("丹青一卷传天下，纸寿千年醉美中华", 0.7);
      const fixedMessage: Message = {
        id: Date.now().toString(),
        type: "ai",
        content: `匠心独运 (jiàng xīn dú yùn)

한나라 장인들이 종이·비단·칠기를 만들며 실크로드로 세계에 퍼뜨린 정신에서 비롯된 표현이야. '장인의 마음으로 누구도 생각 못 한 방식을 홀로 펼친다'는 뜻이야.

「장인의 마음으로 독창적으로 만들다」— 기술과 창의성을 동시에 칭찬할 때 써

더 궁금한 게 있어? 아래에 물어봐!`,
        timestamp: new Date(),
      };
      setAiPanelMessages([fixedMessage]);
      return;
    } else if (idiom === "尔虞我诈") {
      speakText("尔虞我诈是三国 说不清对与错");
      const fixedMessage: Message = {
        id: Date.now().toString(),
        type: "ai",
        content: `尔虞我诈 (ěr yú wǒ zhà)

삼국의 권력 싸움은 전투만이 아니라 동맹, 배신, 정보전이 반복되는 '게임'이었어.
상대가 속일 걸 알면서도, 나도 속일 수밖에 없는 구조가 만들어졌지.
그래서 이 성어는 '한쪽만 나쁘다'가 아니라 '서로가 서로를 겨냥한다'는 긴장을 담고 있어.

「서로 속고 속이는 권모술수」— 지금도 정치·협상·조직 이야기에서 자주 써.

더 궁금한 게 있어? 아래에 물어봐!`,
        timestamp: new Date(),
      };
      setAiPanelMessages([fixedMessage]);
      return;
    } else if (idiom === "竹林七贤") {
      speakText("竹林七贤与荣启期昂轩");
      const fixedMessage: Message = {
        id: Date.now().toString(),
        type: "ai",
        content: `竹林七贤 (zhú lín qī xián)

위진 시대(3세기), 혼란한 정치를 피해 대나무 숲에 모인 일곱 현인을 가리켜요. 완적·혜강 등이 음악·철학·술로 자신들만의 세계를 만들었어요.

「세속을 거부한 지식인들의 자유로운 공동체」— 동아시아 은일 문화의 원형

더 궁금한 게 있어? 아래에 물어봐!`,
        timestamp: new Date(),
      };
      setAiPanelMessages([fixedMessage]);
      return;
    } else if (idiom === "生生不息") {
      speak("生生不息地流淌了千年", 0.7);
      const fixedMessage: Message = {
        id: Date.now().toString(),
        type: "ai",
        content: `生生不息 (shēng shēng bù xī)

수나라 대운하처럼 끊임없이 흐르며 생명을 이어가는 것을 표현해요. '生生(shēng shēng)'은 계속해서 생겨남, '不息(bù xī)'은 멈추지 않음을 뜻해요.

「영원히 이어지는 생명력」— 역사·자연·문화 모두에 쓰이는 표현

더 궁금한 게 있어? 아래에 물어봐!`,
        timestamp: new Date(),
      };
      setAiPanelMessages([fixedMessage]);
      return;
    } else if (idiom === "酒中仙") {
      speak("天子呼来不上船，自称臣是酒中仙", 0.7);
      const fixedMessage: Message = {
        id: Date.now().toString(),
        type: "ai",
        content: `酒中仙 (jiǔ zhōng xiān)

당나라 시인 이백(李白)에게 붙여진 별호예요. 두보의 《음중팔선가》에서 '천자가 불러도 배에 오르지 않고, 스스로 술 속의 신선이라 칭한다'고 묘사했어요.

「술 속의 신선」— 세속의 규칙을 초월한 자유로운 예술가의 상징

더 궁금한 게 있어? 아래에 물어봐!`,
        timestamp: new Date(),
      };
      setAiPanelMessages([fixedMessage]);
      return;
    } else if (idiom === "雕琢") {
      speak("多少能人将相书画三千里，上河图雕琢的意义", 0.7);
      const fixedMessage: Message = {
        id: Date.now().toString(),
        type: "ai",
        content: `雕琢 (diāo zuó)

원래는 옥(玉)이나 돌을 조각하고 다듬는 행위를 뜻했지만, 점차 예술 작품이나 글을 정성스럽게 완성하는 것을 가리키게 되었어요. 청명상하도처럼 800명이 넘는 인물을 세밀하게 담아낸 작품이야말로 雕琢의 정수예요.

「정성껏 갈고 닦아 완성하다」— 장인 정신과 예술적 완성도를 표현할 때 사용

더 궁금한 게 있어? 아래에 물어봐!`,
        timestamp: new Date(),
      };
      setAiPanelMessages([fixedMessage]);
      return;
    } else if (idiom === "天青色") {
      speak("天青色等烟雨，而我在等你", 0.7);
      const fixedMessage: Message = {
        id: Date.now().toString(),
        type: "ai",
        content: `天青色 (tiān qīng sè)

청화백자의 유약 색깔로, 비 오는 날 구름 사이로 보이는 하늘빛을 닮아야 가장 아름답게 발색돼요. 즉 청자가 완성되려면 비가 와야 한다는 뜻이에요. 원나라 경덕진 도공들은 이 완벽한 빛깔을 얻기 위해 날씨까지 기다렸어요.

「기다림 끝에 완성되는 하늘빛」— 완성을 위해 때를 기다리는 인내의 상징

더 궁금한 게 있어? 아래에 물어봐!`,
        timestamp: new Date(),
      };
      setAiPanelMessages([fixedMessage]);
      return;
    } else if (idiom === "本草纲目") {
      speak("快翻开本草纲目，多看一些善本书", 0.7);
      const fixedMessage: Message = {
        id: Date.now().toString(),
        type: "ai",
        content: `本草纲目 (běn cǎo gāng mù)

명나라 의학자 이시진(李時珍)이 27년간 전국을 돌아다니며 완성한 약학 백과사전이에요. 총 52권에 1,892종의 약재와 11,000여 개의 처방이 담겨 있고, 찰스 다윈도 참고한 동아시아 최대 과학 고전이에요.

「약초의 모든 것을 담은 집념의 기록」— 한 사람의 27년이 천 년의 의학을 바꾼다

더 궁금한 게 있어? 아래에 물어봐!`,
        timestamp: new Date(),
      };
      setAiPanelMessages([fixedMessage]);
      return;
    }

    // 其他成语的原有逻辑
    const newMessage: Message = {
      id: Date.now().toString(),
      type: "ai",
      content: `"${idiom}"是一个非常有意义的成语。让我为你详细解释它的典故和含义...`,
      timestamp: new Date(),
    };
    setAiPanelMessages((prev) => [...prev, newMessage]);
  };

  // 处理快速问题chip点击
  const handleQuickQuestion = (question: string) => {
    let response = "";
    if (question === "荆轲가 누구야?") {
      response = "荆轲는 전국시대 燕나라의 검객이야.\nBC 227년, 秦始皇을 암살하러 혼자 떠났어.\n실패했지만 — 그의 이름은 2200년간 살아남았어.\n자세한 이야기는 「이 노래 상세히 배우기」에서!";
    } else if (question === "비슷한 성어 알려줘") {
      response = "비슷한 느낌의 성어들:\n- 壮志未酬 - 뜻을 이루지 못하고\n- 马革裹尸 - 전장에서 죽겠다는 각오\n- 视死如归 - 죽음을 집에 돌아가듯 여기다\n모두 「비장한 결심」의 계열이야.";
    } else if (question === "이 노래 더 배우고 싶어") {
      response = "아래 버튼을 눌러봐!\n「✦ 이 노래 상세히 배우기 →」\n荆轲의 전체 이야기, 성어 3개, 한국 역사와의 연결까지 다 있어.";
    }
    
    if (response) {
      const newMessage: Message = {
        id: Date.now().toString(),
        type: "ai",
        content: response,
        timestamp: new Date(),
      };
      setAiPanelMessages((prev) => [...prev, newMessage]);
    }
  };

  // 发送AI面板消息
  const handleSendAIPanelMessage = () => {
    if (!aiPanelInput.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: aiPanelInput,
      timestamp: new Date(),
    };
    setAiPanelMessages((prev) => [...prev, userMessage]);
    setAiPanelInput("");

    // 模拟AI回复
    setTimeout(() => {
      const aiReply: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: "这是一个很好的问题！让我为你详细解答...",
        timestamp: new Date(),
      };
      setAiPanelMessages((prev) => [...prev, aiReply]);
    }, 1000);
  };

  // 处理"상세히 배우기"按钮点击
  const handleLearnMore = (e: React.MouseEvent, dynastyId: string) => {
    e.stopPropagation();
    if (dynastyDetails[dynastyId] && onNavigateToDetail) {
      onNavigateToDetail(dynastyId);
    } else {
      alert("준비 중");
    }
  };

  // 关闭入场动画
  const handleStartClick = () => {
    setShowIntro(false);
    // 延迟滚动，确保动画完成后再滚动
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };


  // TTS朗读功能
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      // 停止之前的朗读
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.7;
      utterance.pitch = 1.0;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  // TTS朗读功能（支持自定义rate）
  const speak = (text: string, rate: number = 0.7) => {
    if ('speechSynthesis' in window) {
      // 停止之前的朗读
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = rate;
      utterance.pitch = 1.0;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0c0b08", color: "#f0ead8", position: "relative" }}>
      {/* 全局AI按钮样式覆盖 */}
      <style>{`
        .fixed.bottom-6.right-6 button {
          background: rgba(12,11,8,0.85) !important;
          border: 1px solid rgba(201,168,76,0.3) !important;
          box-shadow: 0 0 12px rgba(201,168,76,0.1) !important;
        }
      `}</style>
      {/* 入场动画页 - 全屏遮罩 */}
      {showIntro && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "#0c0b08",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            opacity: showIntro ? 1 : 0,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}>
            <div
              style={{
                opacity: introElementsVisible.square ? 1 : 0,
                transform: introElementsVisible.square ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div
                className="stamp-box"
                style={{
                  width: "110px",
                  height: "110px",
                  border: "1.5px solid #c9a84c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Ma Shan Zheng', serif",
                    fontSize: "54px",
                    color: "#c9a84c",
                  }}
                >
                  词
                </span>
              </div>
            </div>

            <h1
              style={{
                fontFamily: "'Ma Shan Zheng', serif",
                fontSize: "72px",
                color: "#f0ead8",
                letterSpacing: "20px",
                opacity: introElementsVisible.title ? 1 : 0,
                transform: introElementsVisible.title ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                margin: 0,
              }}
            >
              词韵
            </h1>

            <p
              style={{
                fontSize: "12px",
                letterSpacing: "6px",
                color: "#7a7060",
                opacity: introElementsVisible.subtitle ? 1 : 0,
                transform: introElementsVisible.subtitle ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                margin: 0,
              }}
            >
              노래 한 줄이 역사가 됩니다
            </p>

            <button
              onClick={handleStartClick}
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
              style={{
                position: "relative",
                padding: "12px 32px",
                border: "1px solid #c9a84c",
                backgroundColor: "transparent",
                overflow: "hidden",
                cursor: "pointer",
                opacity: introElementsVisible.button ? 1 : 0,
                transform: introElementsVisible.button ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span
                style={{
                  position: "relative",
                  zIndex: 10,
                  color: buttonHovered ? "#0c0b08" : "#c9a84c",
                  transition: "color 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                시간 속으로 →
              </span>
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "#c9a84c",
                  transform: buttonHovered ? "translateX(0)" : "translateX(-100%)",
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              ></span>
            </button>
          </div>
        </div>
      )}

      {/* 时间线区域 */}
      <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <div style={{ padding: "48px 0 64px 0", textAlign: "center" }}>
          <p
            style={{
              fontSize: "10px",
              color: "#c9a84c",
              letterSpacing: "4px",
              margin: "0 0 24px 0",
            }}
          >
            歷史時間線 · 역사 타임라인
          </p>
          <h1
            style={{
              fontFamily: "'Ma Shan Zheng', serif",
              fontSize: "48px",
              color: "#f0ead8",
              letterSpacing: "6px",
              margin: "0 0 24px 0",
              lineHeight: 1.45,
              maxWidth: "680px",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            }}
          >
            그 시대의 이야기가
            <br />
            오늘의 노래가 됐습니다
          </h1>
            <p style={{ fontSize: "14px", color: "#7a7060", margin: "8px 0", lineHeight: 1.6 }}>
              시대 카드를 클릭하면 그 안에 숨겨진 노래와 성어가 펼쳐집니다
            </p>
            <p style={{ fontSize: "14px", color: "#7a7060", margin: "8px 0", lineHeight: 1.6 }}>
              가사 속 <span style={{ color: "#c9a84c" }}>금색 단어</span>를 클릭하면 전고 이야기와 AI 대화가 시작됩니다
            </p>
          </div>

          {/* 中间脊线 */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: "-120px",
              width: "1px",
              background: "linear-gradient(to bottom, transparent, #6b5520 8%, #6b5520 88%, #6b5520 100%)",
              transform: "translateX(-50%)",
              zIndex: 1,
            }}
          ></div>

          {/* 朝代行 */}
          {dynasties.map((dynasty, index) => {
            const isLeft = index % 2 === 0;
            const isExpanded = expandedId === dynasty.id;
            const isVisible = visibleCards.has(index);
            const hasContent = dynasty.videoId || dynasty.videoIds;

            return (
              <div key={dynasty.id} style={{ marginBottom: "48px", position: "relative" }}>
                {/* 朝代行 - Grid布局 */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 60px 1fr",
                    position: "relative",
                  }}
                >
                  {/* 左侧列 */}
                  <div
                    style={{
                      paddingRight: "24px",
                      display: "flex",
                      justifyContent: "flex-end",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    {/* 对话气泡 - 当右侧卡片被点击时显示在左侧 */}
                    {!isLeft && speechBubbleId === dynasty.id && dynasty.greeting && (
                      <div
                        style={{
                          width: "100%",
                          maxWidth: "380px",
                          marginBottom: 0,
                          marginTop: 0,
                          padding: "16px 20px",
                          backgroundColor: "rgba(201,168,76,0.15)",
                          border: "1px solid rgba(201,168,76,0.3)",
                          borderRadius: "12px",
                          position: "absolute",
                          top: "220px",
                          right: 0,
                          zIndex: 10,
                          animation: "fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        {/* 气泡尾巴 - 指向右侧 */}
                        <div
                          style={{
                            position: "absolute",
                            right: "-8px",
                            top: "24px",
                            width: 0,
                            height: 0,
                            borderTop: "8px solid transparent",
                            borderBottom: "8px solid transparent",
                            borderLeft: "8px solid rgba(201,168,76,0.3)",
                          }}
                        ></div>
                        <div
                          style={{
                            position: "absolute",
                            right: "-7px",
                            top: "24px",
                            width: 0,
                            height: 0,
                            borderTop: "7px solid transparent",
                            borderBottom: "7px solid transparent",
                            borderLeft: "7px solid rgba(201,168,76,0.15)",
                          }}
                        ></div>
                        <p
                          style={{
                            fontSize: "13px",
                            color: "#f0ead8",
                            lineHeight: 1.6,
                            margin: 0,
                          }}
                        >
                          {dynasty.greeting}
                        </p>
                      </div>
                    )}
                    {/* 右侧卡片的AI面板 - 显示在左侧列greeting气泡下面 */}
                    {!isLeft && isExpanded && (
                      <div
                        style={{
                          width: "100%",
                          maxWidth: "380px",
                          position: "absolute",
                          top: "calc(220px + 98px + 16px)",
                          right: 0,
                          zIndex: 10,
                          background: "rgba(8,7,5,0.95)",
                          border: "1px solid rgba(201,168,76,0.15)",
                          padding: "20px 18px",
                          display: "flex",
                          flexDirection: "column",
                          maxHeight: "400px",
                          borderRadius: "8px",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* AI面板头部 */}
                        <div 
                          style={{ marginBottom: "16px", cursor: "pointer" }}
                        >
                          <div style={{ 
                            fontSize: "14px",
                            color: "#c9a84c",
                            letterSpacing: "3px", 
                            marginBottom: "8px", 
                            fontFamily: "'Noto Serif KR', serif",
                            fontWeight: "bold"
                          }}>
                            학습 도우미
                          </div>
                          <div style={{ height: "1px", background: "rgba(201,168,76,0.15)" }} />
                        </div>

                        {/* 消息区域 */}
                        <div
                          ref={messagesEndRef}
                          style={{
                            flex: 1,
                            overflowY: "auto",
                            marginBottom: "16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                          }}
                        >
                          {aiPanelMessages.length === 0 ? (
                            <div
                              style={{
                                fontSize: "12px",
                                color: "#6b5520",
                                textAlign: "center",
                                padding: "20px",
                                fontFamily: "'Noto Serif KR', serif",
                              }}
                            >
                              금색 단어를 클릭해보세요 ✦
                            </div>
                          ) : (
                            <>
                              {aiPanelMessages.map((message) => (
                                <div
                                  key={message.id}
                                  style={{
                                    padding: "14px 16px",
                                    background:
                                      message.type === "ai"
                                        ? "rgba(201,168,76,0.06)"
                                        : "rgba(201,168,76,0.1)",
                                    border: "1px solid rgba(201,168,76,0.1)",
                                    borderRadius: "0 6px 6px 6px",
                                    fontSize: "12px",
                                    color: "#c0b8a0",
                                    lineHeight: 2,
                                    whiteSpace: "pre-line",
                                    fontFamily: "'Noto Serif KR', serif",
                                  }}
                                >
                                  {message.content}
                                </div>
                              ))}
                              {/* 快速问题chips */}
                              {aiPanelMessages.length > 0 &&
                                aiPanelMessages[0].content.includes("一去不复返") &&
                                aiPanelMessages.length === 1 && (
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      gap: "8px",
                                      marginTop: "12px",
                                    }}
                                  >
                                    {["荆轲가 누구야?", "비슷한 성어 알려줘", "이 노래 더 배우고 싶어"].map(
                                      (question) => (
                                        <button
                                          key={question}
                                          onClick={() => handleQuickQuestion(question)}
                                          style={{
                                            border: "1px solid rgba(201,168,76,0.2)",
                                            background: "transparent",
                                            color: "#6b5520",
                                            fontSize: "10px",
                                            padding: "8px 12px",
                                            cursor: "pointer",
                                            borderRadius: 0,
                                            textAlign: "left",
                                            fontFamily: "'Noto Serif KR', serif",
                                            transition: "all 0.3s",
                                          }}
                                          onMouseEnter={(e) => {
                                            e.currentTarget.style.color = "#c9a84c";
                                            e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
                                          }}
                                          onMouseLeave={(e) => {
                                            e.currentTarget.style.color = "#6b5520";
                                            e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
                                          }}
                                        >
                                          {question}
                                        </button>
                                      )
                                    )}
                                  </div>
                                )}
                            </>
                          )}
                        </div>

                        {/* 输入区域 */}
                        <div style={{ display: "flex", gap: "8px" }}>
                          <input
                            type="text"
                            value={aiPanelInput}
                            onChange={(e) => setAiPanelInput(e.target.value)}
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                handleSendAIPanelMessage();
                              }
                            }}
                            placeholder="더 물어보세요..."
                            style={{
                              flex: 1,
                              padding: "10px 12px",
                              background: "rgba(255,255,255,0.03)",
                              border: "1px solid rgba(201,168,76,0.15)",
                              borderRadius: 0,
                              color: "#f0ead8",
                              fontSize: "12px",
                              fontFamily: "'Noto Serif KR', serif",
                            }}
                          />
                          <button
                            onClick={handleSendAIPanelMessage}
                            style={{
                              padding: "10px 16px",
                              background: "transparent",
                              border: "1px solid rgba(201,168,76,0.15)",
                              color: "#ffffff",
                              cursor: "pointer",
                              fontSize: "12px",
                              borderRadius: 0,
                              fontFamily: "'Noto Serif KR', serif",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "rgba(201,168,76,0.15)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "transparent";
                            }}
                          >
                            전송
                          </button>
                        </div>
                      </div>
                    )}
                    {isLeft && (
                      <div
                        ref={(el) => {
                          cardRefs.current[index] = el;
                        }}
                        style={{
                          width: "100%",
                          maxWidth: "440px",
                          transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible 
                            ? (expandedId ? (() => {
                                const expandedIndex = dynasties.findIndex(d => d.id === expandedId);
                                return expandedIndex >= 0 && index > expandedIndex ? "translateY(900px)" : "translateY(0)";
                              })() : "translateY(0)")
                            : "translateY(40px)",
                        }}
                      >
                        {/* 朝代卡片 */}
                        <div
                          onClick={() => toggleExpand(dynasty.id)}
                          style={{
                            width: "100%",
                            height: dynasty.id === "1" ? "300px" : "220px",
                            position: "relative",
                            overflow: "hidden",
                            cursor: "pointer",
                            border: isExpanded
                              ? "1px solid rgba(201,168,76,0.4)"
                              : dynasty.id === "1"
                              ? "1px solid rgba(201,168,76,0.25)"
                              : "1px solid rgba(201,168,76,0.15)",
                            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
                            const img = e.currentTarget.querySelector("img");
                            if (img) img.style.filter = "grayscale(0%) brightness(0.6)";
                          }}
                          onMouseLeave={(e) => {
                            if (!isExpanded) {
                              e.currentTarget.style.borderColor = dynasty.id === "1" ? "rgba(201,168,76,0.25)" : "rgba(201,168,76,0.15)";
                              const img = e.currentTarget.querySelector("img");
                              if (img) img.style.filter = "grayscale(20%) brightness(0.45)";
                            }
                          }}
                        >
                          {/* 背景图片 */}
                          {dynasty.backgroundImage && (
                            <>
                              <img
                                src={dynasty.backgroundImage}
                                alt={dynasty.name}
                                style={{
                                  position: "absolute",
                                  inset: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  filter: "grayscale(20%) brightness(0.45)",
                                  transition: "filter 0.6s ease",
                                }}
                                onError={(e) => {
                                  if (dynasty.id === "1") {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=60";
                                  }
                                }}
                              />
                              <div
                                style={{
                                  position: "absolute",
                                  inset: 0,
                                  background:
                                    dynasty.id === "1"
                                      ? "linear-gradient(160deg, rgba(12,11,8,0.9) 0%, rgba(12,11,8,0.3) 60%, transparent)"
                                      : "linear-gradient(160deg, rgba(12,11,8,0.85) 0%, rgba(12,11,8,0.15) 70%, transparent)",
                                }}
                              ></div>
                            </>
                          )}

                          {/* 右上角badge */}
                          {dynasty.badge && (
                            <div
                              style={{
                                position: "absolute",
                                top: "14px",
                                right: "14px",
                              }}
                            >
                              <span
                                style={{
                                  padding: "5px 12px",
                                  backgroundColor: "rgba(12,11,8,0.7)",
                                  backdropFilter: "blur(4px)",
                                  border: "1px solid rgba(201,168,76,0.3)",
                                  borderRadius: "0",
                                  fontSize: "10px",
                                  color: "#c9a84c",
                                  letterSpacing: "1px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {dynasty.badge}
                              </span>
                            </div>
                          )}

                          {/* 朝代名称和年代 - 左下角 */}
                          <div
                            style={{
                              position: "absolute",
                              bottom: "20px",
                              left: "22px",
                            }}
                          >
                            <h2
                              style={{
                                fontFamily: "'Ma Shan Zheng', serif",
                                fontSize: dynasty.id === "1" ? "60px" : "48px",
                                color: "#c9a84c",
                                textShadow: "0 2px 16px rgba(0,0,0,0.9)",
                                margin: 0,
                                lineHeight: 1,
                              }}
                            >
                              {dynasty.name}
                            </h2>
                            {dynasty.korName && (
                              <p
                                style={{
                                  fontSize: "11px",
                                  color: "rgba(240,234,216,0.5)",
                                  letterSpacing: "3px",
                                  margin: "4px 0 0 0",
                                  fontFamily: "'Noto Serif KR', serif",
                                }}
                              >
                                {dynasty.korName}
                              </p>
                            )}
                            <p
                              style={{
                                fontSize: "9px",
                                color: "#b8ad98",
                                margin: "4px 0 0 0",
                              }}
                            >
                              {dynasty.period}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* 展开内容 - 在对应列内（左侧） */}
                    {isLeft && (
                      <div
                        style={{
                          width: "100%",
                          maxWidth: "380px",
                          marginLeft: "auto",
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          zIndex: 10,
                          display: "grid",
                          gridTemplateColumns: "1fr",
                          borderTop: "1px solid rgba(201,168,76,0.08)",
                          borderRadius: 0,
                          overflow: "hidden",
                          maxHeight: isExpanded ? "900px" : "0",
                          opacity: isExpanded ? 1 : 0,
                          visibility: isExpanded ? "visible" : "hidden",
                          transition: isExpanded 
                            ? "max-height 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.4s cubic-bezier(0.16,1,0.3,1) 0.4s, visibility 0s"
                            : "max-height 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.2s cubic-bezier(0.16,1,0.3,1), visibility 0s linear 0.6s",
                          pointerEvents: isExpanded ? "auto" : "none",
                          willChange: "max-height, opacity",
                          transform: "translateZ(0)",
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                        }}
                      >
                        {/* 左侧内容区域 */}
                        <div
                          style={{
                            padding: "28px 32px",
                            background: "#0e0d0a",
                            borderRadius: 0,
                            marginTop: 0,
                            borderRight: "1px solid rgba(201,168,76,0.08)",
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* Hook文句 - 所有朝代都显示 */}
                          {dynasty.hook && (
                            <div
                              style={{
                                marginBottom: "20px",
                                padding: "16px 20px",
                                background: "rgba(201,168,76,0.08)",
                                border: "1px solid rgba(201,168,76,0.2)",
                                borderRadius: "0",
                              }}
                            >
                              <p
                                style={{
                                  fontSize: "13px",
                                  color: "#c9a84c",
                                  lineHeight: 1.8,
                                  margin: 0,
                                  fontFamily: "'Noto Serif KR', serif",
                                  fontStyle: "italic",
                                }}
                              >
                                {dynasty.hook}
                              </p>
                            </div>
                          )}
                          {/* 所有朝代都显示视频区域和按钮 */}
                          <>
                            {/* YouTube 视频区域 */}
                            <div style={{ marginBottom: "24px" }}>
                              {dynasty.videoId ? (
                                  <div
                                    style={{
                                      aspectRatio: "16/9",
                                      width: "100%",
                                      maxHeight: "200px",
                                      backgroundColor: "#0a0908",
                                      border: "1px solid rgba(201,168,76,0.1)",
                                      borderRadius: 0,
                                      overflow: "hidden",
                                      position: "relative",
                                      backgroundImage: dynasty.id === "1" && dynasty.videoId
                                        ? `url(https://img.youtube.com/vi/${dynasty.videoId}/hqdefault.jpg)`
                                        : dynasty.backgroundImage
                                        ? `url(${dynasty.backgroundImage})`
                                        : "none",
                                      backgroundSize: "cover",
                                      backgroundPosition: "center",
                                    }}
                                  >
                                    {dynasty.backgroundImage && (
                                      <div
                                        style={{
                                          position: "absolute",
                                          inset: 0,
                                          backgroundColor: "rgba(0,0,0,0.6)",
                                        }}
                                      ></div>
                                    )}
                                    {playingVideoId === dynasty.videoId ? (
                                      <iframe
                                        src={`https://www.youtube.com/embed/${dynasty.videoId}?autoplay=1`}
                                        style={{
                                          position: "absolute",
                                          inset: 0,
                                          width: "100%",
                                          height: "100%",
                                          border: "none",
                                        }}
                                        allow="autoplay;fullscreen"
                                        allowFullScreen
                                      ></iframe>
                                    ) : (
                                      <div
                                        style={{
                                          position: "absolute",
                                          inset: 0,
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          cursor: "pointer",
                                          backgroundColor: "rgba(0,0,0,0.5)",
                                        }}
                                        onClick={(e) => handlePlayClick(dynasty.videoId!, e)}
                                        onMouseEnter={() =>
                                          setPlayButtonHovered((prev) => ({
                                            ...prev,
                                            [dynasty.videoId!]: true,
                                          }))
                                        }
                                        onMouseLeave={() =>
                                          setPlayButtonHovered((prev) => ({
                                            ...prev,
                                            [dynasty.videoId!]: false,
                                          }))
                                        }
                                      >
                                        <div
                                          style={{
                                            width: "64px",
                                            height: "64px",
                                            borderRadius: "50%",
                                            border: "1.5px solid #c9a84c",
                                            backgroundColor: playButtonHovered[dynasty.videoId!]
                                              ? "#c9a84c"
                                              : "transparent",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                                            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                          }}
                                        >
                                          <svg
                                            style={{
                                              width: "32px",
                                              height: "32px",
                                              marginLeft: "4px",
                                              fill: playButtonHovered[dynasty.videoId!]
                                                ? "#0c0b08"
                                                : "#c9a84c",
                                              transition: "fill 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                            }}
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M8 5v14l11-7z" />
                                          </svg>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                              ) : (
                                /* 占位区域 - 没有 videoId 时显示 */
                                <div
                                  style={{
                                    aspectRatio: "16/9",
                                    width: "100%",
                                    maxHeight: "200px",
                                    backgroundColor: "#0a0908",
                                    border: "1px solid rgba(201,168,76,0.1)",
                                    borderRadius: 0,
                                    overflow: "hidden",
                                    position: "relative",
                                    backgroundImage: dynasty.backgroundImage
                                      ? `url(${dynasty.backgroundImage})`
                                      : "none",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  {dynasty.backgroundImage && (
                                    <div
                                      style={{
                                        position: "absolute",
                                        inset: 0,
                                        backgroundColor: "rgba(0,0,0,0.7)",
                                      }}
                                    ></div>
                                  )}
                                  <div
                                    style={{
                                      position: "relative",
                                      zIndex: 1,
                                      textAlign: "center",
                                      color: "rgba(240,234,216,0.5)",
                                      fontSize: "14px",
                                    }}
                                  >
                                    준비 중
                                  </div>
                                </div>
                              )}

                              {dynasty.videoIds && (
                                  <div
                                    style={{
                                      display: "grid",
                                      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                                      gap: "16px",
                                    }}
                                  >
                                    {dynasty.videoIds.map((videoId, vidIndex) => (
                                      <div
                                        key={vidIndex}
                                        style={{
                                          aspectRatio: "16/9",
                                          width: "100%",
                                          backgroundColor: "#000",
                                          borderRadius: "8px",
                                          overflow: "hidden",
                                          position: "relative",
                                          backgroundImage: dynasty.backgroundImage
                                            ? `url(${dynasty.backgroundImage})`
                                            : "none",
                                          backgroundSize: "cover",
                                          backgroundPosition: "center",
                                        }}
                                      >
                                        {dynasty.backgroundImage && (
                                          <div
                                            style={{
                                              position: "absolute",
                                              inset: 0,
                                              backgroundColor: "rgba(0,0,0,0.6)",
                                            }}
                                          ></div>
                                        )}
                                        {playingVideoId === videoId ? (
                                          <iframe
                                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                            style={{
                                              position: "absolute",
                                              inset: 0,
                                              width: "100%",
                                              height: "100%",
                                              border: "none",
                                            }}
                                            allow="autoplay;fullscreen"
                                            allowFullScreen
                                          ></iframe>
                                        ) : (
                                          <div
                                            style={{
                                              position: "absolute",
                                              inset: 0,
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "center",
                                              cursor: "pointer",
                                            }}
                                            onClick={(e) => handlePlayClick(videoId, e)}
                                            onMouseEnter={() =>
                                              setPlayButtonHovered((prev) => ({
                                                ...prev,
                                                [videoId]: true,
                                              }))
                                            }
                                            onMouseLeave={() =>
                                              setPlayButtonHovered((prev) => ({
                                                ...prev,
                                                [videoId]: false,
                                              }))
                                            }
                                          >
                                            <div
                                              style={{
                                                width: "56px",
                                                height: "56px",
                                                borderRadius: "50%",
                                                border: "1.5px solid #c9a84c",
                                                backgroundColor: playButtonHovered[videoId]
                                                  ? "#c9a84c"
                                                  : "transparent",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                                                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                              }}
                                            >
                                              <svg
                                                style={{
                                                  width: "28px",
                                                  height: "28px",
                                                  marginLeft: "4px",
                                                  fill: playButtonHovered[videoId]
                                                    ? "#0c0b08"
                                                    : "#c9a84c",
                                                  transition: "fill 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                                }}
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M8 5v14l11-7z" />
                                              </svg>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>

                              {/* 歌词区域 - 所有朝代都显示 */}
                              <div style={{ marginBottom: "24px" }}>
                                {dynasty.lyrics && dynasty.lyrics.chinese && dynasty.lyrics.chinese.length > 0 ? (
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      gap: "16px",
                                    }}
                                    onClick={(e) => {
                                      // 检查是否点击了成语
                                      const target = e.target as HTMLElement;
                                      if (target.tagName === "SPAN" && target.style.color === "rgb(201, 168, 76)") {
                                        const idiom = target.textContent || "";
                                        handleIdiomClick(idiom, dynasty.id);
                                      }
                                    }}
                                  >
                                    {dynasty.lyrics.chinese.map((line, lineIndex) => (
                                      <div key={lineIndex}>
                                        <p
                                          style={{
                                            fontSize: "18px",
                                            letterSpacing: "3px",
                                            color: "#f0ead8",
                                            margin: 0,
                                            marginBottom: "4px",
                                            fontFamily: "'Noto Serif SC', serif",
                                          }}
                                          dangerouslySetInnerHTML={{
                                            __html: dynasty.id === "2" && lineIndex === 1
                                              ? line.replace(
                                                  /(一去啊不归还)/g,
                                                  '<span id="idiom-span-一去不复返" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="一去不复返">$1</span>'
                                                )
                                              : dynasty.id === "1" && lineIndex === 1
                                              ? line.replace(
                                                  /(以形表意)/g,
                                                  '<span id="idiom-span-以形表意" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="以形表意">$1</span>'
                                                )
                                              : dynasty.id === "3" && lineIndex === 1
                                              ? line.replace(
                                                  /(没齿难忘)/g,
                                                  '<span id="idiom-span-没齿难忘" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="没齿难忘">$1</span>'
                                                )
                                              : dynasty.id === "4" && lineIndex === 1
                                              ? line.replace(
                                                  /(丹青)/g,
                                                  '<span id="idiom-span-匠心独运" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="匠心独运">$1</span>'
                                                )
                                              : dynasty.id === "5" && lineIndex === 1
                                              ? line.replace(
                                                  /(尔虞我诈)/g,
                                                  '<span id="idiom-span-尔虞我诈" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="尔虞我诈">$1</span>'
                                                )
                                              : dynasty.id === "6" && lineIndex === 0
                                              ? line.replace(
                                                  /(竹林七贤)/g,
                                                  '<span id="idiom-span-竹林七贤" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="竹林七贤">$1</span>'
                                                )
                                              : dynasty.id === "7" && lineIndex === 8
                                              ? line.replace(
                                                  /(生生不息)/g,
                                                  '<span id="idiom-span-生生不息" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="生生不息">$1</span>'
                                                )
                                              : dynasty.id === "8" && lineIndex === 3
                                              ? line.replace(
                                                  /(酒中仙)/g,
                                                  '<span id="idiom-span-酒中仙" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="酒中仙">$1</span>'
                                                )
                                              : dynasty.id === "10" && lineIndex === 0
                                              ? line.replace(
                                                  /(雕琢)/g,
                                                  '<span id="idiom-span-雕琢" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="雕琢">$1</span>'
                                                )
                                              : dynasty.id === "11" && lineIndex === 0
                                              ? line.replace(
                                                  /(天青色)/g,
                                                  '<span id="idiom-span-天青色" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="天青色">$1</span>'
                                                )
                                              : dynasty.id === "12" && lineIndex === 1
                                              ? line.replace(
                                                  /(本草纲目)/g,
                                                  '<span id="idiom-span-本草纲目" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="本草纲目">$1</span>'
                                                )
                                              : highlightIdioms(line, dynasty.idioms || []),
                                          }}
                                          onClick={(e) => {
                                            const target = e.target as HTMLElement;
                                            if (target.tagName === "SPAN" && target.getAttribute("data-idiom")) {
                                              e.preventDefault();
                                              e.stopPropagation();
                                              const idiom = target.getAttribute("data-idiom") || "";
                                              handleIdiomClick(idiom, dynasty.id);
                                            }
                                          }}
                                        ></p>
                                        {dynasty.lyrics?.korean[lineIndex] && (
                                          <p
                                            style={{
                                              fontSize: "12px",
                                              color: "#7a7060",
                                              marginTop: "6px",
                                              margin: 0,
                                            }}
                                          >
                                            {dynasty.lyrics.korean[lineIndex]}
                                          </p>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  /* 歌词占位区域 - 没有歌词数据时显示 */
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      gap: "16px",
                                    }}
                                  >
                                    <div>
                                      <p
                                        style={{
                                          fontSize: "18px",
                                          letterSpacing: "3px",
                                          color: "rgba(240,234,216,0.3)",
                                          margin: 0,
                                          marginBottom: "4px",
                                          fontFamily: "'Noto Serif SC', serif",
                                        }}
                                      >
                                        准备中...
                                      </p>
                                      <p
                                        style={{
                                          fontSize: "12px",
                                          color: "rgba(122,112,96,0.3)",
                                          marginTop: "6px",
                                          margin: 0,
                                        }}
                                      >
                                        준비 중...
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </div>

                            {/* "이 노래 상세히 배우기" 按钮 - 所有朝代都显示 */}
                            <button
                              onClick={(e) => handleLearnMore(e, dynasty.id)}
                              style={{
                                width: "100%",
                                padding: "14px",
                                marginTop: "20px",
                                background: "transparent",
                                border: "1px solid rgba(201,168,76,0.25)",
                                color: "#c9a84c",
                                fontSize: "12px",
                                letterSpacing: "2px",
                                borderRadius: 0,
                                cursor: "pointer",
                                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.08)";
                                e.currentTarget.style.color = "#c9a84c";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.color = "#c9a84c";
                              }}
                            >
                              ✦ 이 노래 상세히 배우기 →
                            </button>
                          </>
                        </div>

                      </div>
                    )}
                  </div>

                  {/* 中间列 - 圆点和年代 */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      paddingTop: "32px",
                      position: "relative",
                      zIndex: 2,
                      transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible 
                        ? (expandedId ? (() => {
                            const expandedIndex = dynasties.findIndex(d => d.id === expandedId);
                            return expandedIndex >= 0 && index > expandedIndex ? "translateY(900px)" : "translateY(0)";
                          })() : "translateY(0)")
                        : "translateY(40px)",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        border: "2px solid #6b5520",
                        backgroundColor: isExpanded ? "#c9a84c" : "transparent",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    ></div>
                    <p
                      style={{
                        fontSize: "9px",
                        color: "#6b5520",
                        whiteSpace: "nowrap",
                        margin: "8px 0 0 0",
                      }}
                    >
                      {dynasty.period}
                    </p>
                  </div>

                  {/* 右侧列 */}
                  <div
                    style={{
                      paddingLeft: "24px",
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      position: "relative",
                    }}
                  >
                    {/* 对话气泡 - 当左侧卡片被点击时显示在右侧 */}
                    {isLeft && speechBubbleId === dynasty.id && dynasty.greeting && (
                      <div
                        style={{
                          width: "100%",
                          maxWidth: "380px",
                          marginBottom: 0,
                          marginTop: 0,
                          padding: "16px 20px",
                          backgroundColor: "rgba(201,168,76,0.15)",
                          border: "1px solid rgba(201,168,76,0.3)",
                          borderRadius: "12px",
                          position: "absolute",
                          top: "220px",
                          left: 0,
                          zIndex: 10,
                          animation: "fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        {/* 气泡尾巴 - 指向左侧 */}
                        <div
                          style={{
                            position: "absolute",
                            left: "-8px",
                            top: "24px",
                            width: 0,
                            height: 0,
                            borderTop: "8px solid transparent",
                            borderBottom: "8px solid transparent",
                            borderRight: "8px solid rgba(201,168,76,0.3)",
                          }}
                        ></div>
                        <div
                          style={{
                            position: "absolute",
                            left: "-7px",
                            top: "24px",
                            width: 0,
                            height: 0,
                            borderTop: "7px solid transparent",
                            borderBottom: "7px solid transparent",
                            borderRight: "7px solid rgba(201,168,76,0.15)",
                          }}
                        ></div>
                        <p
                          style={{
                            fontSize: "13px",
                            color: "#f0ead8",
                            lineHeight: 1.6,
                            margin: 0,
                          }}
                        >
                          {dynasty.greeting}
                        </p>
                      </div>
                    )}
                    {/* 左侧卡片的AI面板 - 显示在右侧列greeting气泡下面 */}
                    {isLeft && isExpanded && (
                      <div
                        style={{
                          width: "100%",
                          maxWidth: "380px",
                          position: "absolute",
                          top: "calc(220px + 98px + 16px)",
                          left: 0,
                          zIndex: 10,
                          background: "rgba(8,7,5,0.95)",
                          border: "1px solid rgba(201,168,76,0.15)",
                          padding: "20px 18px",
                          display: "flex",
                          flexDirection: "column",
                          maxHeight: "400px",
                          borderRadius: "8px",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* AI面板头部 - 可点击收起/展开 */}
                        <div 
                          style={{ marginBottom: "16px", cursor: "pointer" }}
                        >
                          <div style={{ 
                            fontSize: "14px",
                            color: "#c9a84c",
                            letterSpacing: "3px", 
                            marginBottom: "8px", 
                            fontFamily: "'Noto Serif KR', serif",
                            fontWeight: "bold"
                          }}>
                            학습 도우미
                          </div>
                          <div style={{ height: "1px", background: "rgba(201,168,76,0.15)" }} />
                        </div>

                        {/* 消息区域 */}
                        <div
                          ref={messagesEndRef}
                          style={{
                            flex: 1,
                            overflowY: "auto",
                            marginBottom: "16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                          }}
                        >
                          {aiPanelMessages.length === 0 ? (
                            <div
                              style={{
                                fontSize: "12px",
                                color: "#6b5520",
                                textAlign: "center",
                                padding: "20px",
                                fontFamily: "'Noto Serif KR', serif",
                              }}
                            >
                              금색 단어를 클릭해보세요 ✦
                            </div>
                          ) : (
                            <>
                              {aiPanelMessages.map((message) => (
                                <div
                                  key={message.id}
                                  style={{
                                    padding: "14px 16px",
                                    background:
                                      message.type === "ai"
                                        ? "rgba(201,168,76,0.06)"
                                        : "rgba(201,168,76,0.1)",
                                    border: "1px solid rgba(201,168,76,0.1)",
                                    borderRadius: "0 6px 6px 6px",
                                    fontSize: "12px",
                                    color: "#c0b8a0",
                                    lineHeight: 2,
                                    whiteSpace: "pre-line",
                                    fontFamily: "'Noto Serif KR', serif",
                                  }}
                                >
                                  {message.content}
                                </div>
                              ))}
                              {/* 快速问题chips */}
                              {aiPanelMessages.length > 0 &&
                                aiPanelMessages[0].content.includes("一去不复返") &&
                                aiPanelMessages.length === 1 && (
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      gap: "8px",
                                      marginTop: "12px",
                                    }}
                                  >
                                    {["荆轲가 누구야?", "비슷한 성어 알려줘", "이 노래 더 배우고 싶어"].map(
                                      (question) => (
                                        <button
                                          key={question}
                                          onClick={() => handleQuickQuestion(question)}
                                          style={{
                                            border: "1px solid rgba(201,168,76,0.2)",
                                            background: "transparent",
                                            color: "#6b5520",
                                            fontSize: "10px",
                                            padding: "8px 12px",
                                            cursor: "pointer",
                                            borderRadius: 0,
                                            textAlign: "left",
                                            fontFamily: "'Noto Serif KR', serif",
                                            transition: "all 0.3s",
                                          }}
                                          onMouseEnter={(e) => {
                                            e.currentTarget.style.color = "#c9a84c";
                                            e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
                                          }}
                                          onMouseLeave={(e) => {
                                            e.currentTarget.style.color = "#6b5520";
                                            e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
                                          }}
                                        >
                                          {question}
                                        </button>
                                      )
                                    )}
                                  </div>
                                )}
                            </>
                          )}
                        </div>

                        {/* 输入区域 */}
                        <div style={{ display: "flex", gap: "8px" }}>
                          <input
                            type="text"
                            value={aiPanelInput}
                            onChange={(e) => setAiPanelInput(e.target.value)}
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                handleSendAIPanelMessage();
                              }
                            }}
                            placeholder="더 물어보세요..."
                            style={{
                              flex: 1,
                              padding: "10px 12px",
                              background: "rgba(255,255,255,0.03)",
                              border: "1px solid rgba(201,168,76,0.15)",
                              borderRadius: 0,
                              color: "#f0ead8",
                              fontSize: "12px",
                              fontFamily: "'Noto Serif KR', serif",
                            }}
                          />
                          <button
                            onClick={handleSendAIPanelMessage}
                            style={{
                              padding: "10px 16px",
                              background: "transparent",
                              border: "1px solid rgba(201,168,76,0.15)",
                              color: "#c9a84c",
                              cursor: "pointer",
                              fontSize: "12px",
                              borderRadius: 0,
                              fontFamily: "'Noto Serif KR', serif",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "rgba(201,168,76,0.15)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "transparent";
                            }}
                          >
                            전송
                          </button>
                        </div>
                      </div>
                    )}
                    {!isLeft && (
                      <div
                        ref={(el) => {
                          cardRefs.current[index] = el;
                        }}
                        style={{
                          width: "100%",
                          maxWidth: "440px",
                          transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible 
                            ? (expandedId ? (() => {
                                const expandedIndex = dynasties.findIndex(d => d.id === expandedId);
                                return expandedIndex >= 0 && index > expandedIndex ? "translateY(900px)" : "translateY(0)";
                              })() : "translateY(0)")
                            : "translateY(40px)",
                        }}
                      >
                        {/* 朝代卡片 */}
                        <div
                          onClick={() => toggleExpand(dynasty.id)}
                          style={{
                            width: "100%",
                            height: dynasty.id === "1" ? "300px" : "220px",
                            position: "relative",
                            overflow: "hidden",
                            cursor: "pointer",
                            border: isExpanded
                              ? "1px solid rgba(201,168,76,0.4)"
                              : dynasty.id === "1"
                              ? "1px solid rgba(201,168,76,0.25)"
                              : "1px solid rgba(201,168,76,0.15)",
                            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
                            const img = e.currentTarget.querySelector("img");
                            if (img) img.style.filter = "grayscale(0%) brightness(0.6)";
                          }}
                          onMouseLeave={(e) => {
                            if (!isExpanded) {
                              e.currentTarget.style.borderColor = dynasty.id === "1" ? "rgba(201,168,76,0.25)" : "rgba(201,168,76,0.15)";
                              const img = e.currentTarget.querySelector("img");
                              if (img) img.style.filter = "grayscale(20%) brightness(0.45)";
                            }
                          }}
                        >
                          {/* 背景图片 */}
                          {dynasty.backgroundImage && (
                            <>
                              <img
                                src={dynasty.backgroundImage}
                                alt={dynasty.name}
                                style={{
                                  position: "absolute",
                                  inset: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  filter: "grayscale(20%) brightness(0.45)",
                                  transition: "filter 0.6s ease",
                                }}
                                onError={(e) => {
                                  if (dynasty.id === "1") {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=60";
                                  }
                                }}
                              />
                              <div
                                style={{
                                  position: "absolute",
                                  inset: 0,
                                  background:
                                    dynasty.id === "1"
                                      ? "linear-gradient(160deg, rgba(12,11,8,0.9) 0%, rgba(12,11,8,0.3) 60%, transparent)"
                                      : "linear-gradient(160deg, rgba(12,11,8,0.85) 0%, rgba(12,11,8,0.15) 70%, transparent)",
                                }}
                              ></div>
                            </>
                          )}

                          {/* 右上角badge */}
                          {dynasty.badge && (
                            <div
                              style={{
                                position: "absolute",
                                top: "14px",
                                right: "14px",
                              }}
                            >
                              <span
                                style={{
                                  padding: "5px 12px",
                                  backgroundColor: "rgba(12,11,8,0.7)",
                                  backdropFilter: "blur(4px)",
                                  border: "1px solid rgba(201,168,76,0.3)",
                                  borderRadius: "0",
                                  fontSize: "10px",
                                  color: "#c9a84c",
                                  letterSpacing: "1px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {dynasty.badge}
                              </span>
                            </div>
                          )}

                          {/* 朝代名称和年代 - 左下角 */}
                          <div
                            style={{
                              position: "absolute",
                              bottom: "20px",
                              left: "22px",
                            }}
                          >
                            <h2
                              style={{
                                fontFamily: "'Ma Shan Zheng', serif",
                                fontSize: dynasty.id === "1" ? "60px" : "48px",
                                color: "#c9a84c",
                                textShadow: "0 2px 16px rgba(0,0,0,0.9)",
                                margin: 0,
                                lineHeight: 1,
                              }}
                            >
                              {dynasty.name}
                            </h2>
                            {dynasty.korName && (
                              <p
                                style={{
                                  fontSize: "11px",
                                  color: "rgba(240,234,216,0.5)",
                                  letterSpacing: "3px",
                                  margin: "4px 0 0 0",
                                  fontFamily: "'Noto Serif KR', serif",
                                }}
                              >
                                {dynasty.korName}
                              </p>
                            )}
                            <p
                              style={{
                                fontSize: "9px",
                                color: "#b8ad98",
                                margin: "4px 0 0 0",
                              }}
                            >
                              {dynasty.period}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* 展开内容 - 在对应列内（右侧） */}
                    {!isLeft && (
                      <div
                        style={{
                          width: "100%",
                          maxWidth: "380px",
                          marginRight: "auto",
                          position: "absolute",
                          top: "100%",
                          right: 0,
                          zIndex: 10,
                          display: "grid",
                          gridTemplateColumns: "1fr",
                          borderTop: "1px solid rgba(201,168,76,0.08)",
                          borderRadius: 0,
                          overflow: "hidden",
                          maxHeight: isExpanded ? "900px" : "0",
                          opacity: isExpanded ? 1 : 0,
                          visibility: isExpanded ? "visible" : "hidden",
                          transition: isExpanded 
                            ? "max-height 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.4s cubic-bezier(0.16,1,0.3,1) 0.4s, visibility 0s"
                            : "max-height 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.2s cubic-bezier(0.16,1,0.3,1), visibility 0s linear 0.6s",
                          pointerEvents: isExpanded ? "auto" : "none",
                          willChange: "max-height, opacity",
                          transform: "translateZ(0)",
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                        }}
                      >
                        {/* 左侧内容区域 */}
                        <div
                          style={{
                            padding: "28px 32px",
                            background: "#0e0d0a",
                            borderRadius: 0,
                            marginTop: 0,
                            borderRight: "1px solid rgba(201,168,76,0.08)",
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* Hook文句 - 所有朝代都显示 */}
                          {dynasty.hook && (
                            <div
                              style={{
                                marginBottom: "20px",
                                padding: "16px 20px",
                                background: "rgba(201,168,76,0.08)",
                                border: "1px solid rgba(201,168,76,0.2)",
                                borderRadius: "0",
                              }}
                            >
                              <p
                                style={{
                                  fontSize: "13px",
                                  color: "#c9a84c",
                                  lineHeight: 1.8,
                                  margin: 0,
                                  fontFamily: "'Noto Serif KR', serif",
                                  fontStyle: "italic",
                                }}
                              >
                                {dynasty.hook}
                              </p>
                            </div>
                          )}
                          {/* 所有朝代都显示视频区域和按钮 */}
                          <>
                            {/* YouTube 视频区域 */}
                            <div style={{ marginBottom: "24px" }}>
                              {dynasty.videoId ? (
                                  <div
                                    style={{
                                      aspectRatio: "16/9",
                                      width: "100%",
                                      maxHeight: "200px",
                                      backgroundColor: "#0a0908",
                                      border: "1px solid rgba(201,168,76,0.1)",
                                      borderRadius: 0,
                                      overflow: "hidden",
                                      position: "relative",
                                      backgroundImage: dynasty.id === "1" && dynasty.videoId
                                        ? `url(https://img.youtube.com/vi/${dynasty.videoId}/hqdefault.jpg)`
                                        : dynasty.backgroundImage
                                        ? `url(${dynasty.backgroundImage})`
                                        : "none",
                                      backgroundSize: "cover",
                                      backgroundPosition: "center",
                                    }}
                                  >
                                    {dynasty.backgroundImage && (
                                      <div
                                        style={{
                                          position: "absolute",
                                          inset: 0,
                                          backgroundColor: "rgba(0,0,0,0.6)",
                                        }}
                                      ></div>
                                    )}
                                    {playingVideoId === dynasty.videoId ? (
                                      <iframe
                                        src={`https://www.youtube.com/embed/${dynasty.videoId}?autoplay=1`}
                                        style={{
                                          position: "absolute",
                                          inset: 0,
                                          width: "100%",
                                          height: "100%",
                                          border: "none",
                                        }}
                                        allow="autoplay;fullscreen"
                                        allowFullScreen
                                      ></iframe>
                                    ) : (
                                      <div
                                        style={{
                                          position: "absolute",
                                          inset: 0,
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          cursor: "pointer",
                                          backgroundColor: "rgba(0,0,0,0.5)",
                                        }}
                                        onClick={(e) => handlePlayClick(dynasty.videoId!, e)}
                                        onMouseEnter={() =>
                                          setPlayButtonHovered((prev) => ({
                                            ...prev,
                                            [dynasty.videoId!]: true,
                                          }))
                                        }
                                        onMouseLeave={() =>
                                          setPlayButtonHovered((prev) => ({
                                            ...prev,
                                            [dynasty.videoId!]: false,
                                          }))
                                        }
                                      >
                                        <div
                                          style={{
                                            width: "64px",
                                            height: "64px",
                                            borderRadius: "50%",
                                            border: "1.5px solid #c9a84c",
                                            backgroundColor: playButtonHovered[dynasty.videoId!]
                                              ? "#c9a84c"
                                              : "transparent",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                                            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                          }}
                                        >
                                          <svg
                                            style={{
                                              width: "32px",
                                              height: "32px",
                                              marginLeft: "4px",
                                              fill: playButtonHovered[dynasty.videoId!]
                                                ? "#0c0b08"
                                                : "#c9a84c",
                                              transition: "fill 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                            }}
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M8 5v14l11-7z" />
                                          </svg>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                              ) : (
                                /* 占位区域 - 没有 videoId 时显示 */
                                <div
                                  style={{
                                    aspectRatio: "16/9",
                                    width: "100%",
                                    maxHeight: "200px",
                                    backgroundColor: "#0a0908",
                                    border: "1px solid rgba(201,168,76,0.1)",
                                    borderRadius: 0,
                                    overflow: "hidden",
                                    position: "relative",
                                    backgroundImage: dynasty.backgroundImage
                                      ? `url(${dynasty.backgroundImage})`
                                      : "none",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  {dynasty.backgroundImage && (
                                    <div
                                      style={{
                                        position: "absolute",
                                        inset: 0,
                                        backgroundColor: "rgba(0,0,0,0.7)",
                                      }}
                                    ></div>
                                  )}
                                  <div
                                    style={{
                                      position: "relative",
                                      zIndex: 1,
                                      textAlign: "center",
                                      color: "rgba(240,234,216,0.5)",
                                      fontSize: "14px",
                                    }}
                                  >
                                    준비 중
                                  </div>
                                </div>
                              )}

                              {dynasty.videoIds && (
                                  <div
                                    style={{
                                      display: "grid",
                                      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                                      gap: "16px",
                                    }}
                                  >
                                    {dynasty.videoIds.map((videoId, vidIndex) => (
                                      <div
                                        key={vidIndex}
                                        style={{
                                          aspectRatio: "16/9",
                                          width: "100%",
                                          backgroundColor: "#000",
                                          borderRadius: "8px",
                                          overflow: "hidden",
                                          position: "relative",
                                          backgroundImage: dynasty.backgroundImage
                                            ? `url(${dynasty.backgroundImage})`
                                            : "none",
                                          backgroundSize: "cover",
                                          backgroundPosition: "center",
                                        }}
                                      >
                                        {dynasty.backgroundImage && (
                                          <div
                                            style={{
                                              position: "absolute",
                                              inset: 0,
                                              backgroundColor: "rgba(0,0,0,0.6)",
                                            }}
                                          ></div>
                                        )}
                                        {playingVideoId === videoId ? (
                                          <iframe
                                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                            style={{
                                              position: "absolute",
                                              inset: 0,
                                              width: "100%",
                                              height: "100%",
                                              border: "none",
                                            }}
                                            allow="autoplay;fullscreen"
                                            allowFullScreen
                                          ></iframe>
                                        ) : (
                                          <div
                                            style={{
                                              position: "absolute",
                                              inset: 0,
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "center",
                                              cursor: "pointer",
                                            }}
                                            onClick={(e) => handlePlayClick(videoId, e)}
                                            onMouseEnter={() =>
                                              setPlayButtonHovered((prev) => ({
                                                ...prev,
                                                [videoId]: true,
                                              }))
                                            }
                                            onMouseLeave={() =>
                                              setPlayButtonHovered((prev) => ({
                                                ...prev,
                                                [videoId]: false,
                                              }))
                                            }
                                          >
                                            <div
                                              style={{
                                                width: "56px",
                                                height: "56px",
                                                borderRadius: "50%",
                                                border: "1.5px solid #c9a84c",
                                                backgroundColor: playButtonHovered[videoId]
                                                  ? "#c9a84c"
                                                  : "transparent",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                                                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                              }}
                                            >
                                              <svg
                                                style={{
                                                  width: "28px",
                                                  height: "28px",
                                                  marginLeft: "4px",
                                                  fill: playButtonHovered[videoId]
                                                    ? "#0c0b08"
                                                    : "#c9a84c",
                                                  transition: "fill 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                                }}
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M8 5v14l11-7z" />
                                              </svg>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>

                              {/* 歌词区域 - 所有朝代都显示 */}
                              <div style={{ marginBottom: "24px" }}>
                                {dynasty.lyrics && dynasty.lyrics.chinese && dynasty.lyrics.chinese.length > 0 ? (
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      gap: "16px",
                                    }}
                                    onClick={(e) => {
                                      // 检查是否点击了成语
                                      const target = e.target as HTMLElement;
                                      if (target.tagName === "SPAN" && target.style.color === "rgb(201, 168, 76)") {
                                        const idiom = target.textContent || "";
                                        handleIdiomClick(idiom, dynasty.id);
                                      }
                                    }}
                                  >
                                    {dynasty.lyrics.chinese.map((line, lineIndex) => (
                                      <div key={lineIndex}>
                                        <p
                                          style={{
                                            fontSize: "18px",
                                            letterSpacing: "3px",
                                            color: "#f0ead8",
                                            margin: 0,
                                            marginBottom: "4px",
                                            fontFamily: "'Noto Serif SC', serif",
                                          }}
                                          dangerouslySetInnerHTML={{
                                            __html: dynasty.id === "2" && lineIndex === 1
                                              ? line.replace(
                                                  /(一去啊不归还)/g,
                                                  '<span id="idiom-span-一去不复返" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="一去不复返">$1</span>'
                                                )
                                              : dynasty.id === "1" && lineIndex === 1
                                              ? line.replace(
                                                  /(以形表意)/g,
                                                  '<span id="idiom-span-以形表意" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="以形表意">$1</span>'
                                                )
                                              : dynasty.id === "3" && lineIndex === 1
                                              ? line.replace(
                                                  /(没齿难忘)/g,
                                                  '<span id="idiom-span-没齿难忘" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="没齿难忘">$1</span>'
                                                )
                                              : dynasty.id === "4" && lineIndex === 1
                                              ? line.replace(
                                                  /(丹青)/g,
                                                  '<span id="idiom-span-匠心独运" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="匠心独运">$1</span>'
                                                )
                                              : dynasty.id === "5" && lineIndex === 1
                                              ? line.replace(
                                                  /(尔虞我诈)/g,
                                                  '<span id="idiom-span-尔虞我诈" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="尔虞我诈">$1</span>'
                                                )
                                              : dynasty.id === "6" && lineIndex === 0
                                              ? line.replace(
                                                  /(竹林七贤)/g,
                                                  '<span id="idiom-span-竹林七贤" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="竹林七贤">$1</span>'
                                                )
                                              : dynasty.id === "7" && lineIndex === 8
                                              ? line.replace(
                                                  /(生生不息)/g,
                                                  '<span id="idiom-span-生生不息" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="生生不息">$1</span>'
                                                )
                                              : dynasty.id === "8" && lineIndex === 3
                                              ? line.replace(
                                                  /(酒中仙)/g,
                                                  '<span id="idiom-span-酒中仙" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="酒中仙">$1</span>'
                                                )
                                              : dynasty.id === "10" && lineIndex === 0
                                              ? line.replace(
                                                  /(雕琢)/g,
                                                  '<span id="idiom-span-雕琢" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="雕琢">$1</span>'
                                                )
                                              : dynasty.id === "11" && lineIndex === 0
                                              ? line.replace(
                                                  /(天青色)/g,
                                                  '<span id="idiom-span-天青色" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="天青色">$1</span>'
                                                )
                                              : dynasty.id === "12" && lineIndex === 1
                                              ? line.replace(
                                                  /(本草纲目)/g,
                                                  '<span id="idiom-span-本草纲目" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="本草纲目">$1</span>'
                                                )
                                              : highlightIdioms(line, dynasty.idioms || []),
                                          }}
                                          onClick={(e) => {
                                            const target = e.target as HTMLElement;
                                            if (target.tagName === "SPAN" && target.getAttribute("data-idiom")) {
                                              e.preventDefault();
                                              e.stopPropagation();
                                              const idiom = target.getAttribute("data-idiom") || "";
                                              handleIdiomClick(idiom, dynasty.id);
                                            }
                                          }}
                                        ></p>
                                        {dynasty.lyrics?.korean[lineIndex] && (
                                          <p
                                            style={{
                                              fontSize: "12px",
                                              color: "#7a7060",
                                              marginTop: "6px",
                                              margin: 0,
                                            }}
                                          >
                                            {dynasty.lyrics.korean[lineIndex]}
                                          </p>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  /* 歌词占位区域 - 没有歌词数据时显示 */
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      gap: "16px",
                                    }}
                                  >
                                    <div>
                                      <p
                                        style={{
                                          fontSize: "18px",
                                          letterSpacing: "3px",
                                          color: "rgba(240,234,216,0.3)",
                                          margin: 0,
                                          marginBottom: "4px",
                                          fontFamily: "'Noto Serif SC', serif",
                                        }}
                                      >
                                        准备中...
                                      </p>
                                      <p
                                        style={{
                                          fontSize: "12px",
                                          color: "rgba(122,112,96,0.3)",
                                          marginTop: "6px",
                                          margin: 0,
                                        }}
                                      >
                                        준비 중...
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </div>

                            {/* "이 노래 상세히 배우기" 按钮 - 所有朝代都显示 */}
                            <button
                              onClick={(e) => handleLearnMore(e, dynasty.id)}
                              style={{
                                width: "100%",
                                padding: "14px",
                                marginTop: "20px",
                                background: "transparent",
                                border: "1px solid rgba(201,168,76,0.25)",
                                color: "#c9a84c",
                                fontSize: "12px",
                                letterSpacing: "2px",
                                borderRadius: 0,
                                cursor: "pointer",
                                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.08)";
                                e.currentTarget.style.color = "#c9a84c";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.color = "#c9a84c";
                              }}
                            >
                              ✦ 이 노래 상세히 배우기 →
                            </button>
                          </>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* 底部间距，让时间线向下延伸 */}
          <div style={{ height: "120px", position: "relative" }}>
            {/* 底部圆点 */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "0",
                transform: "translateX(-50%)",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: "2px solid #6b5520",
                backgroundColor: "transparent",
                zIndex: 2,
              }}
            ></div>
          </div>
      </div>

    </div>
  );
}

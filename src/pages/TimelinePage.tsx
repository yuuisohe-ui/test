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
    greeting: "夏商周时期，甲骨文的出现标志着中华文明的文字起源。让我们一起探索这个时代的文化瑰宝吧！",
  },
  {
    id: "2",
    name: "先秦",
    period: "BC 770 – BC 221",
    korName: "선진",
    badge: "百家爭鳴 · 공자 · 노자",
    hook: '"공자, 노자, 손자 — 2500년 전 이 시대의 사상이 지금도 살아있습니다"',
    backgroundImage: "/images/先秦孔子.jpeg",
    greeting: "先秦时期，百家争鸣的思想碰撞为中华文明奠定了深厚基础。让我们一起探索这个时代的文化瑰宝吧！",
  },
  {
    id: "3",
    name: "秦朝",
    period: "BC 221 – BC 206",
    korName: "진나라",
    badge: "만리장성 · 최초 통일 황제",
    hook: '"진시황이 최초로 중국을 통일했어. 만리장성, 병마용 — 단 15년의 제국이 남긴 것들"',
    backgroundImage: "https://images.unsplash.com/photo-1508804052814-cd3ba865a116?w=800&h=600&fit=crop&q=80",
    videoId: "nMiZudnF3Os",
    lyrics: {
      chinese: ["风萧萧兮易水寒", "壮士一去啊不归还"],
      korean: ["바람은 쓸쓸하고 역수는 차갑구나", "장사는 한 번 가면 돌아오지 않으리"],
    },
    idioms: ["一去不复返"],
    greeting: "秦朝虽然短暂，但统一了文字、货币和度量衡，为中华文明奠定了统一的基础。让我们一起探索《壮士吟》这首歌曲吧！",
  },
  {
    id: "4",
    name: "汉朝",
    period: "BC 206 – AD 220",
    korName: "한나라",
    badge: "실크로드 · 종이 발명",
    hook: '"종이를 발명하고 실크로드를 열었던 시대 — 동서양이 처음 만난 순간"',
    backgroundImage: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop&q=80",
    videoId: "mesKsB2VmHE",
    lyrics: {
      chinese: ["天青色等烟雨 而我在等你", "在瓶底书汉隶 仿前朝的飘逸"],
      korean: ["하늘빛은 안개비를 기다리고, 나는 너를 기다리네", "병 바닥에 한나라 예서를 쓰니, 전조의 표일체를 모방하네"],
    },
    idioms: ["天青色", "在瓶底书汉隶"],
    greeting: "汉朝是中华文明的重要时期，青花瓷的美丽至今仍让人赞叹。",
  },
  {
    id: "5",
    name: "三国",
    period: "AD 220 – 280",
    korName: "삼국시대",
    badge: "曹操 · 諸葛亮 · 적벽대전",
    hook: '"조조, 유비, 손권 — 한국인이 가장 잘 아는 중국 역사. 삼국지의 그 시대"',
    backgroundImage: "/images/三国诸葛亮.jpg",
    greeting: "三国时期，英雄辈出，智谋与勇武并存，为后世留下了无数传奇故事。",
  },
  {
    id: "6",
    name: "魏晋南北朝",
    period: "AD 220 – 589",
    korName: "위진남북조",
    badge: "서예 · 왕희지 · 竹林七賢",
    hook: '"왕희지의 붓글씨가 완성된 시대. 난정서 한 장이 천 년을 내려왔습니다"',
    backgroundImage: "/images/魏晋南北朝竹林七贤.jpg",
    greeting: "魏晋南北朝时期，书法艺术达到高峰，王羲之的《兰亭序》成为千古名作。",
  },
  {
    id: "7",
    name: "隋朝",
    period: "AD 581 – 618",
    korName: "수나라",
    badge: "대운하 · 과거제도 시작",
    hook: '"대운하로 중국을 하나로 연결했어. 단 37년, 하지만 당나라의 토대를 만들었어"',
    backgroundImage: "/images/隋朝大运河.jpeg",
    greeting: "隋朝虽然短暂，但开凿了大运河，建立了科举制度，为唐朝的繁荣奠定了基础。",
  },
  {
    id: "8",
    name: "唐朝",
    period: "AD 618 – 907",
    korName: "당나라",
    badge: "詩의 황금기 · 이백 · 두보",
    hook: '"이백과 두보가 살았던 시대. 그들의 시가 지금도 노래가 됩니다"',
    backgroundImage: "/images/唐朝李白.jpg",
    videoId: "SiMMmjdKbHQ",
    lyrics: {
      chinese: ["人有悲欢离合 月有阴晴圆缺", "此事古难全"],
      korean: ["사람에게는 슬픔과 기쁨, 이별과 만남이 있고, 달에는 흐리고 맑음, 둥글고 이지러짐이 있네", "이런 일은 예로부터 완벽하기 어렵네"],
    },
    idioms: ["人有悲欢离合"],
    greeting: "唐朝是诗歌的黄金时代，让我们一起感受那个时代的诗意吧！",
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
    badge: "汝窑 청자 · 인쇄술 발명",
    hook: '"비 갠 뒤의 하늘색을 도자기에 담았던 시대 — 천청색의 비밀"',
    backgroundImage: "/images/宋朝.jpg",
    videoIds: ["mesKsB2VmHE", "hs95KBpRHCU"],
    lyrics: {
      chinese: ["行云流水 忘了岁月忘了时间", "兰亭临帖 行书如行云流水"],
      korean: ["구름처럼 흐르고 물처럼 흐르니, 세월을 잊고 시간을 잊네", "난정에서 글씨를 모사하니 행서가 구름처럼 흐르고 물처럼 흐르네"],
    },
    idioms: ["行云流水"],
    greeting: "宋朝的书法艺术达到了巅峰，行云流水的笔触至今仍让人着迷。",
  },
  {
    id: "11",
    name: "元朝",
    period: "AD 1271 – 1368",
    korName: "원나라",
    badge: "몽골제국 · 마르코 폴로",
    hook: '"칭기즈칸의 후손이 세운 제국 — 동서양 교류의 최정점"',
    backgroundImage: "/images/元朝.jpg",
    greeting: "元朝时期的文化融合，为中华文明增添了新的色彩。",
  },
  {
    id: "12",
    name: "明朝",
    period: "AD 1368 – 1644",
    korName: "명나라",
    badge: "자금성 · 정화의 대항해",
    hook: '"세계 최대의 궁전 자금성과, 콜럼버스보다 먼저 세계를 항해한 정화"',
    backgroundImage: "/images/明朝.jpg",
    greeting: "明朝是中华文明的又一个高峰，让我们一起探索这个时代。",
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
                          marginBottom: "16px",
                          padding: "16px 20px",
                          backgroundColor: "rgba(201,168,76,0.15)",
                          border: "1px solid rgba(201,168,76,0.3)",
                          borderRadius: "12px",
                          position: "relative",
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
                    {isLeft && (
                      <div
                        ref={(el) => {
                          cardRefs.current[index] = el;
                        }}
                        style={{
                          width: "100%",
                          maxWidth: "440px",
                          transition: dynasty.id === "3" 
                            ? "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                            : "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible 
                            ? (expandedId === "3" && index > 2 ? "translateY(900px)" : "translateY(0)")
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
                          gridTemplateColumns: dynasty.id === "3" ? "1fr" : isMobile ? "1fr" : "1fr 320px",
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
                          {hasContent ? (
                            <>
                              {/* YouTube 视频区域 */}
                              <div style={{ marginBottom: "24px" }}>
                                {dynasty.videoId && (
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

                              {/* 歌词区域 */}
                              {dynasty.lyrics && dynasty.lyrics.chinese && dynasty.lyrics.chinese.length > 0 && (
                                <div style={{ marginBottom: "24px" }}>
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
                                            __html: dynasty.id === "3" && lineIndex === 1
                                              ? line.replace(
                                                  /(一去啊不归还)/g,
                                                  '<span id="idiom-span-一去不复返" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="一去不复返">$1</span>'
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
                                </div>
                              )}

                              {/* "이 노래 상세히 배우기" 按钮 */}
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
                          ) : (
                            <div
                              style={{
                                textAlign: "center",
                                padding: "48px 0",
                                color: "rgba(240,234,216,0.5)",
                              }}
                            >
                              <p style={{ fontSize: "18px", margin: 0 }}>
                                이 시대의 노래는 준비 중입니다 🎵
                              </p>
                            </div>
                          )}
                        </div>

                        {/* 右侧AI面板 - 秦朝除外，秦朝的AI面板在右侧列 */}
                        {isExpanded && dynasty.id !== "3" && (
                          <div
                            style={{
                              background: "rgba(8,7,5,0.95)",
                              borderLeft: isMobile ? "none" : "1px solid rgba(201,168,76,0.15)",
                              borderTop: isMobile ? "1px solid rgba(201,168,76,0.15)" : "none",
                              padding: "20px 18px",
                              display: "flex",
                              flexDirection: "column",
                              height: "100%",
                              maxHeight: isMobile ? "300px" : "none",
                              marginTop: isMobile ? "0" : "16px",
                              borderRadius: 0,
                            }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {/* AI面板头部 */}
                            <div style={{ marginBottom: "16px" }}>
                              <div
                                style={{
                                  fontSize: "9px",
                                  color: "#c9a84c",
                                  letterSpacing: "3px",
                                  marginBottom: "8px",
                                  fontFamily: "'Noto Serif KR', serif",
                                }}
                              >
                                ✦ 词韵 AI
                              </div>
                              <p
                                style={{
                                  fontSize: "11px",
                                  color: "#7a7060",
                                  marginBottom: "12px",
                                  fontFamily: "'Noto Serif KR', serif",
                                }}
                              >
                                클릭한 단어를 설명해드릴게요
                              </p>
                              <div style={{ height: "1px", background: "rgba(201,168,76,0.15)" }}></div>
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
                                发送
                              </button>
                            </div>
                          </div>
                        )}
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
                          marginBottom: dynasty.id === "3" ? 0 : "16px",
                          marginTop: dynasty.id === "3" ? 0 : "24px",
                          padding: "16px 20px",
                          backgroundColor: "rgba(201,168,76,0.15)",
                          border: "1px solid rgba(201,168,76,0.3)",
                          borderRadius: "12px",
                          position: dynasty.id === "3" ? "absolute" : "relative",
                          top: dynasty.id === "3" ? "220px" : "auto",
                          left: dynasty.id === "3" ? 0 : "auto",
                          zIndex: dynasty.id === "3" ? 10 : "auto",
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
                    {/* 秦朝的AI面板 - 显示在右侧列greeting气泡下面 */}
                    {isLeft && dynasty.id === "3" && isExpanded && (
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
                            ? (expandedId === "3" && index > 2 ? "translateY(900px)" : "translateY(0)")
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
                          gridTemplateColumns: isMobile ? "1fr" : "1fr 320px",
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
                          {hasContent ? (
                            <>
                              {/* YouTube 视频区域 */}
                              <div style={{ marginBottom: "24px" }}>
                                {dynasty.videoId && (
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

                              {/* 歌词区域 */}
                              {dynasty.lyrics && dynasty.lyrics.chinese && dynasty.lyrics.chinese.length > 0 && (
                                <div style={{ marginBottom: "24px" }}>
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
                                            __html: dynasty.id === "3" && lineIndex === 1
                                              ? line.replace(
                                                  /(一去啊不归还)/g,
                                                  '<span id="idiom-span-一去不复返" style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.5); cursor: pointer;" data-idiom="一去不复返">$1</span>'
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
                                </div>
                              )}

                              {/* "이 노래 상세히 배우기" 按钮 */}
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
                          ) : (
                            <div
                              style={{
                                textAlign: "center",
                                padding: "48px 0",
                                color: "rgba(240,234,216,0.5)",
                              }}
                            >
                              <p style={{ fontSize: "18px", margin: 0 }}>
                                이 시대의 노래는 준비 중입니다 🎵
                              </p>
                            </div>
                          )}
                        </div>

                        {/* 右侧AI面板 */}
                        {isExpanded && (
                          <div
                            style={{
                              background: "rgba(8,7,5,0.95)",
                              borderLeft: isMobile ? "none" : "1px solid rgba(201,168,76,0.15)",
                              borderTop: isMobile ? "1px solid rgba(201,168,76,0.15)" : "none",
                              padding: "20px 18px",
                              display: "flex",
                              flexDirection: "column",
                              height: "100%",
                              maxHeight: isMobile ? "300px" : "none",
                              marginTop: isMobile ? "0" : "16px",
                              borderRadius: 0,
                            }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {/* AI面板头部 */}
                            <div style={{ marginBottom: "16px" }}>
                              <div
                                style={{
                                  fontSize: "9px",
                                  color: "#c9a84c",
                                  letterSpacing: "3px",
                                  marginBottom: "8px",
                                  fontFamily: "'Noto Serif KR', serif",
                                }}
                              >
                                ✦ 词韵 AI
                              </div>
                              <p
                                style={{
                                  fontSize: "11px",
                                  color: "#7a7060",
                                  marginBottom: "12px",
                                  fontFamily: "'Noto Serif KR', serif",
                                }}
                              >
                                클릭한 단어를 설명해드릴게요
                              </p>
                              <div style={{ height: "1px", background: "rgba(201,168,76,0.15)" }}></div>
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
                                发送
                              </button>
                            </div>
                          </div>
                        )}
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

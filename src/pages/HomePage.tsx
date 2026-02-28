import { useState, useEffect } from "react";

type View = "song" | "wordReview" | "youtube" | "timeline" | "dashboard";

interface HomePageProps {
  onNavigate: (view: View) => void;
}

const COLORS = {
  bg: "#faf6f0",
  bg2: "#f2ebe0",
  card: "#ffffff",
  brown: "#7a4f2d",
  brownLight: "#a06c3e",
  brownPale: "#e2cdb8",
  brownFaint: "#f5ede3",
  ink: "#2c1a0e",
  ink2: "#5a3e2b",
  ink3: "#9c7b60",
};

export default function HomePage({ onNavigate }: HomePageProps) {
  const [level, setLevel] = useState<string>(() => localStorage.getItem("nz_level") || "");
  const [timerSec, setTimerSec] = useState(0);
  const [running, setRunning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ emoji: "🎉", title: "다시 돌아오셨군요!", msg: "오늘도 함께 공부해요.<br/>꾸준한 학습이 실력을 만들어요 💪" });
  const [showLevelRequiredModal, setShowLevelRequiredModal] = useState(false);

  // Timer
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setTimerSec(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const pad = (n: number) => String(n).padStart(2, "0");
  const timerDisplay = `${pad(Math.floor(timerSec / 3600))}:${pad(Math.floor((timerSec % 3600) / 60))}:${pad(timerSec % 60)}`;

  // Welcome modal
  useEffect(() => {
    const last = localStorage.getItem("nz_lastVisit");
    const now = Date.now();
    if (last && now - parseInt(last) > 5 * 60 * 1000) {
      const msgs = [
        { emoji: "🎉", title: "다시 돌아오셨군요!", msg: "오늘도 함께 공부해요.<br/>꾸준한 학습이 실력을 만들어요 💪" },
        { emoji: "🌟", title: "반갑습니다!", msg: "중국어 실력이 조금씩 늘고 있어요.<br/>오늘도 화이팅! 🎵" },
        { emoji: "🎵", title: "노래로 배우는 중국어!", msg: "오늘은 어떤 노래로 시작할까요?<br/>새로운 가사가 기다리고 있어요 ✨" },
      ];
      setModalData(msgs[Math.floor(Math.random() * msgs.length)]);
      setTimeout(() => setShowModal(true), 700);
    }
    localStorage.setItem("nz_lastVisit", String(now));
  }, []);

  const handleLevel = (l: string) => {
    setLevel(l);
    localStorage.setItem("nz_level", l);
  };

  const cards = [
    { id: "song" as View,      num: "01 — 가사 분석", icon: "🎤", title: "가사로 배우기",          desc: "가사/파일을 입력하면 어휘, 문법, 발음까지 한번에 분석해드려요", deco: "詞" },
    { id: "youtube" as View,   num: "02 — 영상 학습", icon: "📺", title: "영상 학습실",            desc: "영상 속 노래를 한 문장씩 따라가며 실력을 키워보세요",           deco: "音" },
    { id: "timeline" as View,  num: "03 — 역사 탐험", icon: "📜", title: "노래로 보는 중국 역사",  desc: "가사 속에 숨겨진 역사 이야기, 노래로 풀어보는 중국 문화",        deco: "史" },
    { id: "wordReview" as View,num: "04 — 어휘 복습", icon: "📚", title: "어휘 트레이닝",          desc: "노래에서 만난 단어, 잊기 전에 다시 한번",                        deco: "語" },
    { id: "dashboard" as View, num: "05 — 대시보드",  icon: "📊", title: "나의 학습 현황",         desc: "학습 기록, 단어 진도, 시간 통계를 한눈에 확인해보세요",           deco: "統", isDashboard: true },
  ];

  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh", fontFamily: "'Noto Sans KR', sans-serif" }}>

      {/* TIMER BAR */}
      <div style={{
        position: "sticky", top: 0, zIndex: 100,
        height: 44, background: "rgba(250,246,240,0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${COLORS.brownPale}`,
        display: "flex", alignItems: "center", justifyContent: "center", gap: 14,
      }}>
        <span style={{ fontSize: 10, letterSpacing: "2.5px", color: COLORS.ink3, textTransform: "uppercase" }}>오늘의 학습</span>
        <div style={{ width: 1, height: 14, background: COLORS.brownPale }} />
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, letterSpacing: 3, color: running ? COLORS.brown : COLORS.ink3, minWidth: 76, transition: "color 0.3s" }}>
          {timerDisplay}
        </span>
        <div style={{ width: 1, height: 14, background: COLORS.brownPale }} />
        <button onClick={() => setRunning(r => !r)} style={{ background: "none", border: "none", cursor: "pointer", color: running ? COLORS.brown : COLORS.ink3, fontSize: 13, padding: "4px 8px", borderRadius: 6 }}>
          {running ? "⏸" : "▶"}
        </button>
        <button onClick={() => { setRunning(false); setTimerSec(0); }} style={{ background: "none", border: "none", cursor: "pointer", color: COLORS.ink3, fontSize: 13, padding: "4px 8px", borderRadius: 6 }}>↺</button>
      </div>

      <div style={{ padding: "0 6vw" }}>

        {/* HERO */}
        <div style={{ padding: "48px 0 36px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", position: "relative" }}>
          {/* 装饰汉字 */}
          <div style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", fontFamily: "'Noto Serif KR', serif", fontSize: "clamp(110px,13vw,190px)", color: COLORS.brownPale, opacity: 0.28, lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>樂</div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: COLORS.brownLight, opacity: 0.75, marginBottom: 14 }}>노래 기반 중국어 학습 플랫폼</div>
            <h1 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "clamp(38px,5.5vw,68px)", fontWeight: 700, lineHeight: 1.06, color: COLORS.ink, marginBottom: 10 }}>
              노래<br /><span style={{ color: COLORS.brown }}>중국어</span>
            </h1>
            <p style={{ fontSize: "clamp(13px,1.3vw,15px)", color: COLORS.ink3, fontWeight: 300 }}>듣고, 따라 부르고, 기억하다</p>
          </div>

          <div style={{ position: "relative", zIndex: 1, textAlign: "right" }}>
            <div style={{ fontSize: 10, letterSpacing: "2px", color: COLORS.ink3, marginBottom: 10, textTransform: "uppercase" }}>나의 수준</div>
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
              {["초급", "중급", "고급"].map(l => (
                <button key={l} onClick={() => handleLevel(l)} style={{
                  padding: "8px 20px", borderRadius: 24, fontSize: 13, cursor: "pointer", fontFamily: "'Noto Sans KR', sans-serif", transition: "all 0.22s",
                  background: level === l ? COLORS.brown : "transparent",
                  border: `1.5px solid ${level === l ? COLORS.brown : COLORS.brownPale}`,
                  color: level === l ? "#fff" : COLORS.ink2,
                  boxShadow: level === l ? "0 3px 12px rgba(122,79,45,0.22)" : "none",
                }}>{l}</button>
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{ width: "100%", height: 1, background: `linear-gradient(to right, ${COLORS.brownPale}, transparent)`, marginBottom: 24 }} />

        {/* CARDS ROW 1 - 3 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 14 }}>
          {cards.slice(0, 3).map(card => (
            <CardItem
              key={card.id}
              card={card}
              onClick={() => (level ? onNavigate(card.id) : setShowLevelRequiredModal(true))}
            />
          ))}
        </div>

        {/* CARDS ROW 2 - 2 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14, marginBottom: 36 }}>
          {cards.slice(3).map(card => (
            <CardItem
              key={card.id}
              card={card}
              onClick={() => (level ? onNavigate(card.id) : setShowLevelRequiredModal(true))}
            />
          ))}
        </div>

      </div>

      {/* FOOTER */}
      <div style={{ borderTop: `1px solid ${COLORS.brownPale}`, padding: "18px 6vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 14, color: COLORS.ink2 }}>개발자 문의：yuuisohe@hufs.ac.kr</span>
        <span style={{ fontSize: 11, color: COLORS.ink3 }}>© 2025 노래 기반 통합 중국어 학습 플랫폼</span>
      </div>

      {/* 학습 수준 선택 안내 모달 - 카드 클릭 시 미선택이면 표시 */}
      {showLevelRequiredModal && (
        <div
          onClick={() => setShowLevelRequiredModal(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(44,26,14,0.5)",
            backdropFilter: "blur(6px)",
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: "32px 40px",
              maxWidth: 400,
              width: "100%",
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(122,79,45,0.25)",
              border: `2px solid ${COLORS.brownPale}`,
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>📌</div>
            <h3 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 18, color: COLORS.ink, marginBottom: 14, lineHeight: 1.4 }}>
              학습을 시작하려면 먼저 학습 수준을 선택해 주세요
            </h3>
            <p style={{ fontSize: 13, color: COLORS.ink3, marginBottom: 24, lineHeight: 1.6 }}>
              상단의 <strong>나의 수준</strong>에서 초급 · 중급 · 고급 중 하나를 선택한 뒤, 다시 메뉴를 눌러 주세요.
            </p>
            <button
              onClick={() => setShowLevelRequiredModal(false)}
              style={{
                padding: "12px 28px",
                borderRadius: 12,
                border: "none",
                background: COLORS.brown,
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'Noto Sans KR', sans-serif",
              }}
            >
              확인
            </button>
          </div>
        </div>
      )}

      {/* WELCOME MODAL */}
      {showModal && (
        <div onClick={() => setShowModal(false)} style={{ position: "fixed", inset: 0, background: "rgba(44,26,14,0.48)", backdropFilter: "blur(6px)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: 20, padding: "44px 36px", maxWidth: 350, width: "90%", textAlign: "center" }}>
            <div style={{ fontSize: 42, marginBottom: 12 }}>{modalData.emoji}</div>
            <h3 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 18, color: COLORS.ink, marginBottom: 10 }}>{modalData.title}</h3>
            <p style={{ fontSize: 13, color: COLORS.ink3, lineHeight: 1.8, marginBottom: 24 }} dangerouslySetInnerHTML={{ __html: modalData.msg }} />
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <button onClick={() => setShowModal(false)} style={{ padding: "10px 22px", borderRadius: 8, border: `1.5px solid ${COLORS.brownPale}`, background: "transparent", color: COLORS.ink2, fontSize: 13, cursor: "pointer" }}>닫기</button>
              <button onClick={() => setShowModal(false)} style={{ padding: "10px 22px", borderRadius: 8, border: `1.5px solid ${COLORS.brown}`, background: COLORS.brown, color: "#fff", fontSize: 13, cursor: "pointer" }}>계속 학습하기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface CardProps {
  card: { num: string; icon: string; title: string; desc: string; deco: string; isDashboard?: boolean };
  onClick: () => void;
}

function CardItem({ card, onClick }: CardProps) {
  const [hovered, setHovered] = useState(false);
  const CARD_COLORS = {
    bg2: "#f2ebe0", card: "#ffffff", brown: "#7a4f2d", brownLight: "#a06c3e",
    brownPale: "#e2cdb8", brownFaint: "#f5ede3", ink: "#2c1a0e", ink3: "#9c7b60",
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: CARD_COLORS.card,
        borderRadius: 14,
        padding: "26px 24px 22px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.28s ease, box-shadow 0.28s ease",
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered ? "0 10px 30px rgba(122,79,45,0.14)" : "0 2px 14px rgba(122,79,45,0.10)",
        border: "none",
        display: "flex",
        flexDirection: "column" as const,
      }}
    >
      {/* 底部强调线 - 所有卡片统一 */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 3, background: hovered ? CARD_COLORS.brown : CARD_COLORS.brownPale, transition: "background 0.28s" }} />
      <div style={{ fontSize: 10, letterSpacing: "2px", color: CARD_COLORS.ink3, marginBottom: 12, opacity: 0.65 }}>{card.num}</div>
      <div style={{ fontSize: 24, marginBottom: 10, lineHeight: 1 }}>{card.icon}</div>
      <h3 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 15, fontWeight: 600, color: CARD_COLORS.ink, marginBottom: 7, lineHeight: 1.4 }}>{card.title}</h3>
      <p style={{ fontSize: 12, lineHeight: 1.75, color: CARD_COLORS.ink3, fontWeight: 300, flex: 1 }}>{card.desc}</p>
      {card.isDashboard
        ? <div style={{ fontSize: 10, letterSpacing: "1px", color: CARD_COLORS.brownLight, opacity: 0.55, marginTop: 10 }}>🔒 로그인 후 이용 가능 · 준비 중</div>
        : <div style={{ display: "inline-flex", alignItems: "center", gap: 5, marginTop: 14, fontSize: 11, letterSpacing: "1.5px", color: CARD_COLORS.brownLight, textTransform: "uppercase" as const }}>
            시작하기 <span style={{ transition: "transform 0.2s", transform: hovered ? "translateX(3px)" : "none" }}>→</span>
          </div>
      }
      {/* 装饰汉字 */}
      <div style={{ position: "absolute", bottom: -6, right: 12, fontFamily: "'Noto Serif KR', serif", fontSize: 58, color: hovered ? CARD_COLORS.brownFaint : CARD_COLORS.bg2, lineHeight: 1, userSelect: "none", pointerEvents: "none", transition: "color 0.28s" }}>{card.deco}</div>
    </div>
  );
}

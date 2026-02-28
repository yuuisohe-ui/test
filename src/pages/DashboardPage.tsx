import { useState, useMemo } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// 假数据（后续可替换为 API）
// ─────────────────────────────────────────────────────────────────────────────
const MOCK_STREAK_DAYS = 12;
const MOCK_SONGS_LEARNED = 47;
const MOCK_SONGS_THIS_WEEK = 3;
const MOCK_ACCURACY_PCT = 84;

/** 当月已学习的日期（日期数字） */
const MOCK_STUDIED_DAYS = new Set([
  1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24, 25, 27,
]);

/** 学习日记：dateKey -> { mood, text } */
const initialLogData: Record<string, { mood: string; text: string }> = {};

/** 本周每日学习分钟数 [월,화,수,목,금,토,일] */
const MOCK_WEEK_MINUTES = [42, 68, 52, 88, 62, 0, 0];
const MOCK_WEEK_GOAL_MINUTES = 5 * 60; // 5시간

// ─────────────────────────────────────────────────────────────────────────────
// 样式常量（平台棕色系）
// ─────────────────────────────────────────────────────────────────────────────
const STYLES = {
  bg: "#F5EDE0",
  card: "#FFFFFF",
  brownDeep: "#3D2B1F",
  brownMid: "#8B5E3C",
  brownLight: "#C4A882",
  brownPale: "#F0E6D6",
  brownXpale: "#FAF5EE",
  stamp: "#6B5B8E",
  stampLight: "#EAE6F5",
  text: "#3D2B1F",
  textMuted: "#9A7B5A",
  shadow: "0 2px 16px rgba(61,43,31,0.07)",
  radius: 20,
  fontSans: "'Noto Sans KR', sans-serif",
  fontSerif: "'Noto Serif KR', serif",
};

const MOOD_OPTIONS = ["😊", "😤", "😴", "🤩", "😅"];
const WEEKDAY_LABELS = ["월", "화", "수", "목", "금", "토", "일"];
const MONTHS_KR = [
  "1월", "2월", "3월", "4월", "5월", "6월",
  "7월", "8월", "9월", "10월", "11월", "12월",
];

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
interface DashboardPageProps {
  onBack: () => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export default function DashboardPage({ onBack }: DashboardPageProps) {
  const today = useMemo(() => new Date(), []);

  // Calendar
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [studiedDays, setStudiedDays] = useState<Set<number>>(() => new Set(MOCK_STUDIED_DAYS));
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [logData, setLogData] = useState<Record<string, { mood: string; text: string }>>(initialLogData);

  // Log form（수정하기 时显示表单）
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [logText, setLogText] = useState("");
  const [isEditingLog, setIsEditingLog] = useState(false);

  // Daily tasks
  const [songGoal, setSongGoal] = useState(1);
  const [songDone] = useState(1); // 后续对接 API 时可改为 setSongDone
  const [wordGoal, setWordGoal] = useState(30);
  const [wordDone] = useState(15); // 后续对接 API 时可改为 setWordDone
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  const [modalSongGoal, setModalSongGoal] = useState("1");
  const [modalWordGoal, setModalWordGoal] = useState("30");

  // Calendar helpers
  const isCurrentMonth = viewYear === today.getFullYear() && viewMonth === today.getMonth();
  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const offset = firstDay === 0 ? 6 : firstDay - 1; // 월요일 시작
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const changeMonth = (dir: number) => {
    let nextMonth = viewMonth + dir;
    let nextYear = viewYear;
    if (nextMonth > 11) {
      nextMonth = 0;
      nextYear++;
    }
    if (nextMonth < 0) {
      nextMonth = 11;
      nextYear--;
    }
    setViewMonth(nextMonth);
    setViewYear(nextYear);
  };

  const dateKey = (d: number) => `${viewYear}-${viewMonth}-${d}`;
  const selectedLog = selectedDate ? logData[selectedDate] : null;
  const showLogForm = selectedDate && (!selectedLog || isEditingLog);
  const showLogSaved = selectedDate && selectedLog && !isEditingLog;

  const selectDay = (d: number) => {
    const key = dateKey(d);
    setSelectedDate(key);
    setIsEditingLog(false);
    if (logData[key]) {
      setSelectedMood(logData[key].mood);
      setLogText(logData[key].text);
    } else {
      setSelectedMood(null);
      setLogText("");
    }
  };

  const saveLog = () => {
    if (!selectedDate) return;
    setLogData((prev) => ({
      ...prev,
      [selectedDate]: { mood: selectedMood || "", text: logText },
    }));
    const d = parseInt(selectedDate.split("-")[2], 10);
    setStudiedDays((prev) => new Set([...prev, d]));
    setIsEditingLog(false);
  };

  const editLog = () => {
    if (!selectedDate || !logData[selectedDate]) return;
    const data = logData[selectedDate];
    setSelectedMood(data.mood);
    setLogText(data.text);
    setIsEditingLog(true);
  };

  const openTaskModal = () => {
    setModalSongGoal(String(songGoal));
    setModalWordGoal(String(wordGoal));
    setTaskModalOpen(true);
  };

  const saveTaskModal = () => {
    setSongGoal(Math.max(1, parseInt(modalSongGoal, 10) || 1));
    setWordGoal(Math.max(5, parseInt(modalWordGoal, 10) || 30));
    setTaskModalOpen(false);
  };

  // Weekly time
  const weekTotalMinutes = MOCK_WEEK_MINUTES.reduce((a, b) => a + b, 0);
  const weekGoalPct = Math.min((weekTotalMinutes / MOCK_WEEK_GOAL_MINUTES) * 100, 100);
  const todayWeekday = today.getDay(); // 0=일, 1=월, ...
  const todayIndex = todayWeekday === 0 ? 6 : todayWeekday - 1; // 월=0, ..., 일=6

  const songPct = Math.min((songDone / songGoal) * 100, 100);
  const wordPct = Math.min((wordDone / wordGoal) * 100, 100);

  return (
    <div
      className="dashboard-wrap"
      style={{
        background: STYLES.bg,
        minHeight: "100vh",
        fontFamily: STYLES.fontSans,
        color: STYLES.text,
        padding: "40px 24px 80px",
      }}
    >
      <button
        onClick={onBack}
        style={{
          position: "fixed",
          top: 16,
          left: 24,
          zIndex: 60,
          background: "none",
          border: `1px solid ${STYLES.brownPale}`,
          borderRadius: 8,
          padding: "6px 16px",
          fontSize: 13,
          color: STYLES.textMuted,
          cursor: "pointer",
          fontFamily: STYLES.fontSans,
        }}
      >
        ← 홈
      </button>

      <div
        className="dashboard"
        style={{
          maxWidth: 680,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {/* Header */}
        <div
          className="dashboard-fadeUp"
          style={{
            position: "relative",
            marginBottom: 8,
            animationDelay: "0s",
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.15em",
              color: STYLES.brownMid,
              marginBottom: 4,
            }}
          >
            05 — 대시보드
          </div>
          <h1
            style={{
              fontFamily: STYLES.fontSerif,
              fontSize: 26,
              fontWeight: 700,
              color: STYLES.brownDeep,
            }}
          >
            나의 학습 현황
          </h1>
          <div
            style={{
              position: "absolute",
              right: 0,
              top: -4,
              fontFamily: STYLES.fontSerif,
              fontSize: 64,
              color: STYLES.brownLight,
              opacity: 0.13,
              lineHeight: 1,
              pointerEvents: "none",
            }}
          >
            統
          </div>
        </div>

        {/* Top 3 cards */}
        <div
          className="dashboard-fadeUp"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            animationDelay: "0.05s",
          }}
        >
          <div
            style={{
              background: STYLES.brownDeep,
              borderRadius: STYLES.radius,
              padding: "18px 16px",
              boxShadow: STYLES.shadow,
            }}
          >
            <span style={{ fontSize: 20, marginBottom: 10, display: "block" }}>🔥</span>
            <div>
              <span style={{ fontFamily: STYLES.fontSerif, fontSize: 32, fontWeight: 700, color: "#F5EFE6" }}>
                {MOCK_STREAK_DAYS}
              </span>
              <span style={{ fontSize: 13, color: STYLES.brownLight, marginLeft: 3 }}>일</span>
            </div>
            <div style={{ fontSize: 11, color: STYLES.brownLight, marginTop: 5 }}>연속 학습 중</div>
          </div>
          <div
            style={{
              background: STYLES.card,
              borderRadius: STYLES.radius,
              padding: "18px 16px",
              boxShadow: STYLES.shadow,
            }}
          >
            <span style={{ fontSize: 20, marginBottom: 10, display: "block" }}>🎵</span>
            <div
              style={{
                fontSize: 10,
                background: "#EEF7EE",
                color: "#4A8A4A",
                padding: "2px 7px",
                borderRadius: 20,
                display: "inline-block",
                marginBottom: 4,
              }}
            >
              +{MOCK_SONGS_THIS_WEEK} 이번 주
            </div>
            <div>
              <span style={{ fontFamily: STYLES.fontSerif, fontSize: 32, fontWeight: 700, color: STYLES.brownDeep }}>
                {MOCK_SONGS_LEARNED}
              </span>
              <span style={{ fontSize: 13, color: STYLES.textMuted, marginLeft: 3 }}>곡</span>
            </div>
            <div style={{ fontSize: 11, color: STYLES.textMuted, marginTop: 5 }}>학습한 노래</div>
          </div>
          <div
            style={{
              background: STYLES.card,
              borderRadius: STYLES.radius,
              padding: "18px 16px",
              boxShadow: STYLES.shadow,
            }}
          >
            <span style={{ fontSize: 20, marginBottom: 10, display: "block" }}>🎯</span>
            <div
              style={{
                fontSize: 10,
                background: "#EEF7EE",
                color: "#4A8A4A",
                padding: "2px 7px",
                borderRadius: 20,
                display: "inline-block",
                marginBottom: 4,
              }}
            >
              이번 달
            </div>
            <div>
              <span style={{ fontFamily: STYLES.fontSerif, fontSize: 32, fontWeight: 700, color: STYLES.brownDeep }}>
                {MOCK_ACCURACY_PCT}
              </span>
              <span style={{ fontSize: 13, color: STYLES.textMuted, marginLeft: 3 }}>%</span>
            </div>
            <div style={{ fontSize: 11, color: STYLES.textMuted, marginTop: 5 }}>정답률</div>
          </div>
        </div>

        {/* Calendar + Log */}
        <div
          className="dashboard-fadeUp"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            alignContent: "start",
            animationDelay: "0.12s",
          }}
        >
          {/* Calendar card */}
          <div
            style={{
              background: STYLES.card,
              borderRadius: STYLES.radius,
              padding: 18,
              boxShadow: STYLES.shadow,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  fontFamily: STYLES.fontSerif,
                  fontSize: 14,
                  fontWeight: 600,
                  color: STYLES.brownDeep,
                }}
              >
                {viewYear}년 {MONTHS_KR[viewMonth]}
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <button
                  type="button"
                  onClick={() => changeMonth(-1)}
                  style={{
                    background: STYLES.brownPale,
                    border: "none",
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    cursor: "pointer",
                    color: STYLES.brownMid,
                    fontSize: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => changeMonth(1)}
                  style={{
                    background: STYLES.brownPale,
                    border: "none",
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    cursor: "pointer",
                    color: STYLES.brownMid,
                    fontSize: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ›
                </button>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                marginBottom: 4,
              }}
            >
              {WEEKDAY_LABELS.map((wd, i) => (
                <div
                  key={wd}
                  style={{
                    textAlign: "center",
                    fontSize: 10,
                    color: i >= 5 ? STYLES.brownLight : STYLES.textMuted,
                    padding: "2px 0",
                  }}
                >
                  {wd}
                </div>
              ))}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: 3,
              }}
            >
              {Array.from({ length: offset }, (_, i) => (
                <div key={`empty-${i}`} style={{ aspectRatio: "1" }} />
              ))}
              {Array.from({ length: daysInMonth }, (_, i) => {
                const d = i + 1;
                const key = dateKey(d);
                const isToday = isCurrentMonth && d === today.getDate();
                const selected = selectedDate === key;
                const isPast = !isCurrentMonth || d <= today.getDate();
                const hasStamp = studiedDays.has(d) && isPast;
                const rot = ((d * 7) % 14) - 7;
                return (
                  <div
                    key={d}
                    role="button"
                    tabIndex={0}
                    onClick={() => selectDay(d)}
                    onKeyDown={(e) => e.key === "Enter" && selectDay(d)}
                    style={{
                      aspectRatio: "1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      borderRadius: 8,
                      background: selected ? STYLES.stampLight : isToday ? STYLES.brownPale : "transparent",
                      flexDirection: "column",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 10,
                        position: "absolute",
                        top: 3,
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        fontWeight: isToday ? 700 : 400,
                        color: isToday ? STYLES.brownDeep : STYLES.textMuted,
                      }}
                    >
                      {d}
                    </div>
                    {hasStamp && (
                      <div
                        style={{
                          width: "62%",
                          aspectRatio: 1,
                          marginTop: 8,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transform: `rotate(${rot}deg)`,
                        }}
                      >
                        <svg viewBox="0 0 32 32" style={{ width: "100%", height: "100%" }}>
                          <circle
                            cx="16"
                            cy="16"
                            r="14"
                            fill={STYLES.stamp}
                            opacity={0.82}
                          />
                          <text
                            x="16"
                            y="22"
                            textAnchor="middle"
                            fontSize="15"
                            fill="white"
                            style={{ fontFamily: "sans-serif" }}
                          >
                            ♪
                          </text>
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Log panel */}
          <div
            style={{
              background: STYLES.card,
              borderRadius: STYLES.radius,
              padding: 20,
              boxShadow: STYLES.shadow,
              minHeight: 260,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: STYLES.fontSerif,
                fontSize: 13,
                fontWeight: 600,
                color: STYLES.brownDeep,
                marginBottom: 14,
              }}
            >
              {selectedDate
                ? `${viewYear}년 ${MONTHS_KR[viewMonth]} ${parseInt(selectedDate.split("-")[2], 10)}일`
                : "날짜를 선택해보세요"}
            </div>

            {!selectedDate && (
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  color: STYLES.textMuted,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 28, opacity: 0.5 }}>📅</div>
                <div>
                  달력에서 날짜를 클릭하면
                  <br />
                  학습 일기를 쓸 수 있어요
                </div>
              </div>
            )}

            {showLogForm && (
              <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 0 }}>
                <div style={{ fontSize: 11, color: STYLES.textMuted, marginBottom: 8 }}>
                  오늘 기분이 어때요?
                </div>
                <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                  {MOOD_OPTIONS.map((mood) => (
                    <button
                      key={mood}
                      type="button"
                      onClick={() => setSelectedMood(mood)}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        border: `2px solid ${selectedMood === mood ? STYLES.stamp : STYLES.brownPale}`,
                        background: selectedMood === mood ? STYLES.stampLight : STYLES.brownXpale,
                        fontSize: 18,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
                <textarea
                  value={logText}
                  onChange={(e) => setLogText(e.target.value)}
                  placeholder="오늘 학습 어땠어요? 자유롭게 적어보세요 (선택)"
                  style={{
                    flex: 1,
                    width: "100%",
                    minHeight: 80,
                    background: STYLES.brownXpale,
                    border: `1.5px solid ${STYLES.brownPale}`,
                    borderRadius: 12,
                    padding: "10px 12px",
                    fontFamily: STYLES.fontSans,
                    fontSize: 12,
                    color: STYLES.text,
                    resize: "none",
                    outline: "none",
                  }}
                />
                <button
                  type="button"
                  onClick={saveLog}
                  style={{
                    marginTop: 10,
                    width: "100%",
                    padding: 9,
                    background: STYLES.brownDeep,
                    color: "#F5EFE6",
                    border: "none",
                    borderRadius: 12,
                    fontFamily: STYLES.fontSans,
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  저장하기
                </button>
              </div>
            )}

            {showLogSaved && selectedLog && (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ fontSize: 28 }}>{selectedLog.mood || ""}</div>
                <div style={{ fontSize: 12, color: STYLES.text, lineHeight: 1.7 }}>
                  {selectedLog.text || "(메모 없음)"}
                </div>
                <button
                  type="button"
                  onClick={editLog}
                  style={{
                    background: "none",
                    border: `1.5px solid ${STYLES.brownPale}`,
                    borderRadius: 10,
                    padding: "6px 12px",
                    fontSize: 11,
                    color: STYLES.textMuted,
                    cursor: "pointer",
                    alignSelf: "flex-start",
                  }}
                >
                  수정하기
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Daily Tasks */}
        <div
          className="dashboard-fadeUp"
          style={{
            background: STYLES.card,
            borderRadius: STYLES.radius,
            padding: 22,
            boxShadow: STYLES.shadow,
            animationDelay: "0.18s",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <div
              style={{
                fontFamily: STYLES.fontSerif,
                fontSize: 14,
                fontWeight: 600,
                color: STYLES.brownDeep,
                display: "flex",
                alignItems: "center",
                gap: 7,
              }}
            >
              📋 매일 목표
            </div>
            <button
              type="button"
              onClick={openTaskModal}
              style={{
                background: STYLES.brownPale,
                border: "none",
                borderRadius: 20,
                padding: "4px 12px",
                fontSize: 11,
                color: STYLES.textMuted,
                cursor: "pointer",
              }}
            >
              ⚙ 설정
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: STYLES.brownDeep,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {songPct >= 100 ? "✅" : "⬜"} 🎵 노래 학습
                </div>
                <div style={{ fontSize: 12, color: STYLES.textMuted }}>
                  {songDone} / {songGoal}곡
                </div>
              </div>
              <div
                style={{
                  height: 8,
                  background: STYLES.brownPale,
                  borderRadius: 99,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${songPct}%`,
                    borderRadius: 99,
                    background:
                      songPct >= 100
                        ? "linear-gradient(90deg, #5A8A5A, #7AB87A)"
                        : "linear-gradient(90deg, #8B5E3C, #C4A882)",
                    transition: "width 1s ease",
                  }}
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: STYLES.brownDeep,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {wordPct >= 100 ? "✅" : "⬜"} 📖 단어 복습
                </div>
                <div style={{ fontSize: 12, color: STYLES.textMuted }}>
                  {wordDone} / {wordGoal}개
                </div>
              </div>
              <div
                style={{
                  height: 8,
                  background: STYLES.brownPale,
                  borderRadius: 99,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${wordPct}%`,
                    borderRadius: 99,
                    background:
                      wordPct >= 100
                        ? "linear-gradient(90deg, #5A8A5A, #7AB87A)"
                        : "linear-gradient(90deg, #8B5E3C, #C4A882)",
                    transition: "width 1s ease",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills (locked) */}
        <div
          className="dashboard-fadeUp"
          style={{
            background: STYLES.card,
            borderRadius: STYLES.radius,
            padding: 22,
            boxShadow: STYLES.shadow,
            animationDelay: "0.22s",
          }}
        >
          <div
            style={{
              fontFamily: STYLES.fontSerif,
              fontSize: 14,
              fontWeight: 600,
              color: STYLES.brownDeep,
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 7,
            }}
          >
            ✨ 영역별 실력
          </div>
          <div
            style={{
              fontSize: 11,
              color: STYLES.textMuted,
              background: STYLES.brownPale,
              padding: "8px 12px",
              borderRadius: 10,
              marginBottom: 14,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            🔒 연습 데이터가 쌓이면 자동으로 업데이트돼요
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            {["듣기 (听力)", "발음 (发音)", "어휘 (词汇)"].map((label) => (
              <div key={label}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 13,
                    marginBottom: 6,
                    color: STYLES.brownDeep,
                  }}
                >
                  <span>{label}</span>
                  <span style={{ color: STYLES.textMuted }}>—</span>
                </div>
                <div
                  style={{
                    height: 7,
                    background: STYLES.brownPale,
                    borderRadius: 99,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "0%",
                      borderRadius: 99,
                      background: `linear-gradient(90deg, ${STYLES.stamp}, #A08EC8)`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly time */}
        <div
          className="dashboard-fadeUp"
          style={{
            background: STYLES.card,
            borderRadius: STYLES.radius,
            padding: 22,
            boxShadow: STYLES.shadow,
            animationDelay: "0.26s",
          }}
        >
          <div
            style={{
              fontFamily: STYLES.fontSerif,
              fontSize: 14,
              fontWeight: 600,
              color: STYLES.brownDeep,
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 7,
            }}
          >
            ⏱ 이번 주 학습 시간
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 7,
              height: 85,
              marginBottom: 14,
            }}
          >
            {WEEKDAY_LABELS.map((label, i) => {
              const isTodayBar = i === todayIndex;
              const isFuture = i > todayIndex;
              const pct = Math.min((MOCK_WEEK_MINUTES[i] / 90) * 100, 100) || 4;
              return (
                <div
                  key={label}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 5,
                    height: "100%",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: `${pct}%`,
                      minHeight: 4,
                      borderRadius: "5px 5px 0 0",
                      background: isTodayBar
                        ? "linear-gradient(180deg, #A08EC8, #6B5B8E)"
                        : "linear-gradient(180deg, #C4A882, #8B5E3C)",
                      opacity: isFuture ? 0.2 : 1,
                    }}
                  />
                  <div
                    style={{
                      fontSize: 10,
                      color: isTodayBar ? STYLES.stamp : STYLES.textMuted,
                      fontWeight: isTodayBar ? 600 : 400,
                    }}
                  >
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 12,
              color: STYLES.textMuted,
              marginBottom: 8,
            }}
          >
            <span>
              이번 주 총{" "}
              <b style={{ color: STYLES.brownDeep }}>
                {Math.floor(weekTotalMinutes / 60)}시간 {weekTotalMinutes % 60}분
              </b>
            </span>
            <span>목표 5시간</span>
          </div>
          <div
            style={{
              height: 7,
              background: STYLES.brownPale,
              borderRadius: 99,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${weekGoalPct}%`,
                borderRadius: 99,
                background: "linear-gradient(90deg, #8B5E3C, #C4A882)",
                transition: "width 0.5s ease",
              }}
            />
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {taskModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={(e) => e.target === e.currentTarget && setTaskModalOpen(false)}
        >
          <div
            style={{
              background: STYLES.card,
              borderRadius: STYLES.radius,
              padding: 24,
              width: 320,
              boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                fontFamily: STYLES.fontSerif,
                fontSize: 15,
                fontWeight: 600,
                color: STYLES.brownDeep,
                marginBottom: 16,
              }}
            >
              ⚙ 매일 목표 설정
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <div style={{ flex: 1, fontSize: 13, color: STYLES.brownDeep }}>🎵 노래 학습</div>
              <input
                type="number"
                min={1}
                max={10}
                value={modalSongGoal}
                onChange={(e) => setModalSongGoal(e.target.value)}
                style={{
                  width: 52,
                  textAlign: "center",
                  background: STYLES.brownPale,
                  border: "1.5px solid transparent",
                  borderRadius: 8,
                  padding: "5px 0",
                  fontSize: 13,
                  color: STYLES.brownDeep,
                  outline: "none",
                }}
              />
              <div style={{ fontSize: 12, color: STYLES.textMuted }}>곡</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <div style={{ flex: 1, fontSize: 13, color: STYLES.brownDeep }}>📖 단어 복습</div>
              <input
                type="number"
                min={5}
                max={100}
                step={5}
                value={modalWordGoal}
                onChange={(e) => setModalWordGoal(e.target.value)}
                style={{
                  width: 52,
                  textAlign: "center",
                  background: STYLES.brownPale,
                  border: "1.5px solid transparent",
                  borderRadius: 8,
                  padding: "5px 0",
                  fontSize: 13,
                  color: STYLES.brownDeep,
                  outline: "none",
                }}
              />
              <div style={{ fontSize: 12, color: STYLES.textMuted }}>개</div>
            </div>
            <button
              type="button"
              onClick={saveTaskModal}
              style={{
                width: "100%",
                marginTop: 16,
                padding: 10,
                background: STYLES.brownDeep,
                color: "#F5EFE6",
                border: "none",
                borderRadius: 12,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

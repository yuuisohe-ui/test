import { useState } from "react";
import { dynastyDetails } from "../data/dynastyDetails";
import { teacherChat } from "../services/chatgptApi";

const LEVEL_STORAGE_KEY = "nz_level";
const TEACHER_QUOTA_KEY = "teacher_helper_daily_quota";
const TEACHER_DAILY_LIMIT = 20;
const QUOTA_EXCEEDED_MESSAGE = "오늘 선생님이 답할 수 있는 질문 횟수를 다 썼어요. 내일 또 같이 공부해요 😊";

function getTodayDateString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function getTodayQueryCount(): number {
  try {
    const raw = localStorage.getItem(TEACHER_QUOTA_KEY);
    if (!raw) return 0;
    const { date, count } = JSON.parse(raw);
    return date === getTodayDateString() ? count : 0;
  } catch {
    return 0;
  }
}

function incrementTodayQueryCount(): void {
  const today = getTodayDateString();
  const count = getTodayQueryCount();
  localStorage.setItem(TEACHER_QUOTA_KEY, JSON.stringify({ date: today, count: count + 1 }));
}

interface TeacherHelperProps {
  currentView?: string;
  expandedDynastyId?: string | null;
  selectedDynastyId?: string | null;
}

export const TeacherHelper = ({ currentView, expandedDynastyId, selectedDynastyId }: TeacherHelperProps) => {
  const [showTeacherDialog, setShowTeacherDialog] = useState(false);
  const [showTeacherHelper, setShowTeacherHelper] = useState(false);
  const [teacherDialogInput, setTeacherDialogInput] = useState("");
  const [aiPanelExpanded, setAiPanelExpanded] = useState(true);
  const [aiPanelMessages, setAiPanelMessages] = useState<Array<{ id: number; type: 'user' | 'ai'; content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getLevel = (): string => {
    return localStorage.getItem(LEVEL_STORAGE_KEY) || "초급";
  };

  const sendToTeacher = async (userContent: string) => {
    if (getTodayQueryCount() >= TEACHER_DAILY_LIMIT) {
      setError(QUOTA_EXCEEDED_MESSAGE);
      return;
    }

    const level = getLevel();
    const userMsg = { id: Date.now(), type: "user" as const, content: userContent };
    setAiPanelMessages((prev) => [...prev, userMsg]);
    setError(null);
    setIsLoading(true);

    const historyForApi = [
      ...aiPanelMessages.map((m) => ({
        role: m.type === "ai" ? ("assistant" as const) : ("user" as const),
        content: m.content,
      })),
      { role: "user" as const, content: userContent },
    ];

    try {
      const reply = await teacherChat(historyForApi, level);
      incrementTodayQueryCount();
      const aiMsg = { id: Date.now() + 1, type: "ai" as const, content: reply };
      setAiPanelMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      const message = err instanceof Error ? err.message : "선생님 응답을 불러오지 못했어요.";
      setError(message);
      setAiPanelMessages((prev) => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    const text = teacherDialogInput.trim();
    if (!text || isLoading) return;
    setTeacherDialogInput("");
    sendToTeacher(text);
  };

  // 只有 timeline 页面使用深色主题
  const isTimelineView = currentView === "timeline";
  
  // 根据当前页面获取对应的朝代数据
  const getCurrentDynasty = () => {
    if (currentView === "dynastyDetail" && selectedDynastyId) {
      return dynastyDetails[selectedDynastyId];
    }
    if (currentView === "timeline" && expandedDynastyId) {
      return dynastyDetails[expandedDynastyId];
    }
    return null;
  };

  const currentDynasty = getCurrentDynasty();
  const questionChips = currentDynasty?.aiChips?.slice(0, 2) || [];

  return (
    <>
      <div
        className="fixed bottom-6 right-6 z-40"
        style={{ cursor: 'pointer' }}
      >
        {!showTeacherDialog ? (
          <div className="relative">
            <button
              onClick={() => setShowTeacherDialog(true)}
              onMouseEnter={() => setShowTeacherHelper(true)}
              onMouseLeave={() => setShowTeacherHelper(false)}
              className="w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-3xl hover:scale-110 select-none"
              style={{ 
                userSelect: 'none',
                background: isTimelineView 
                  ? 'rgba(201,168,76,0.95)' 
                  : 'linear-gradient(to bottom right, rgb(251, 207, 232), rgb(244, 143, 177))',
                border: isTimelineView ? '1px solid rgba(201,168,76,0.6)' : 'none',
                color: isTimelineView ? '#ffffff' : '#333333',
                filter: isTimelineView ? 'brightness(1.3) drop-shadow(0 0 2px rgba(255,255,255,0.3))' : 'none'
              }}
              aria-label="도우미"
            >
              👩‍🎓
            </button>
            {showTeacherHelper && (
              <div 
                className="absolute right-0 bottom-full mb-3 rounded-lg shadow-lg px-3 py-2 whitespace-nowrap z-50"
                style={{
                  background: isTimelineView ? 'rgba(8,7,5,0.95)' : 'white',
                  border: isTimelineView ? '1px solid rgba(201,168,76,0.3)' : '1px solid rgba(0,0,0,0.2)',
                }}
              >
                <div 
                  className="text-sm"
                  style={{ 
                    color: isTimelineView ? '#c9a84c' : '#333',
                    fontFamily: "'Noto Serif KR', serif"
                  }}
                >
                  안녕~ 중국어 선생님이에요
                </div>
                {/* 小箭头 */}
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent"
                  style={{
                    borderTopColor: isTimelineView ? 'rgba(8,7,5,0.95)' : 'white',
                    borderTopWidth: '8px'
                  }}
                ></div>
              </div>
            )}
          </div>
        ) : (
          <div
            style={{
              width: "320px",
              maxWidth: "320px",
              maxHeight: aiPanelExpanded ? "80vh" : "auto",
              backgroundColor: "#3D2B1F",
              border: "1px solid rgba(139, 94, 60, 0.4)",
              borderRadius: "8px",
              padding: "20px 18px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
          >
            {/* AI面板头部 - 可点击收起/展开 */}
            <div 
              style={{ marginBottom: "16px", cursor: "pointer" }}
              onClick={() => setAiPanelExpanded(!aiPanelExpanded)}
            >
              <div style={{ 
                fontSize: "14px",
                color: "#F5EFE6",
                letterSpacing: "3px", 
                marginBottom: "8px", 
                fontFamily: "'Noto Serif KR', serif",
                fontWeight: "bold"
              }}>
                학습 도우미
              </div>
              <div style={{ height: "1px", background: "rgba(139, 94, 60, 0.4)" }} />
            </div>

            {aiPanelExpanded && (
              <>
                <style>{`
                  @keyframes teacherHelperBounce {
                    0%, 60%, 100% { transform: translateY(0); }
                    30% { transform: translateY(-4px); }
                  }
                  .teacher-helper-dot { animation: teacherHelperBounce 1.2s ease-in-out infinite; }
                  .teacher-helper-dot:nth-child(2) { animation-delay: 0.15s; }
                  .teacher-helper-dot:nth-child(3) { animation-delay: 0.3s; }
                `}</style>
                {/* 消息区域 - 整体对话背景 */}
                <div
                  style={{
                    flex: 1,
                    overflowY: "auto",
                    marginBottom: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    minHeight: "100px",
                    maxHeight: "300px",
                    backgroundColor: "#4A3020",
                    borderRadius: "8px",
                    padding: "12px",
                  }}
                >
                  {aiPanelMessages.length === 0 && !isLoading ? (
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#F5EFE6",
                        textAlign: "center",
                        padding: "20px",
                        fontFamily: "'Noto Serif KR', serif",
                      }}
                    >
                      중국어, 저랑 같이 해봐요 🎵
                    </div>
                  ) : (
                    <>
                      {aiPanelMessages.map((message) =>
                        message.type === "user" ? (
                          <div key={message.id} style={{ display: "flex", justifyContent: "flex-end" }}>
                            <div
                              style={{
                                padding: "12px 16px",
                                background: "#8B5E3C",
                                color: "#FFFFFF",
                                borderRadius: "18px 18px 4px 18px",
                                fontSize: "12px",
                                lineHeight: 1.6,
                                whiteSpace: "pre-line",
                                fontFamily: "'Noto Serif KR', serif",
                                maxWidth: "85%",
                              }}
                            >
                              {message.content}
                            </div>
                          </div>
                        ) : (
                          <div key={message.id} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                            <div
                              style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "50%",
                                background: "#F5EFE6",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "18px",
                                flexShrink: 0,
                              }}
                              aria-hidden
                            >
                              👩‍🎓
                            </div>
                            <div
                              style={{
                                padding: "12px 16px",
                                background: "#F5EFE6",
                                color: "#3D2B1F",
                                borderRadius: "18px 18px 18px 4px",
                                fontSize: "12px",
                                lineHeight: 1.6,
                                whiteSpace: "pre-line",
                                fontFamily: "'Noto Serif KR', serif",
                                maxWidth: "85%",
                              }}
                            >
                              {message.content}
                            </div>
                          </div>
                        )
                      )}
                      {isLoading && (
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                          <div
                            style={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "50%",
                              background: "#F5EFE6",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "18px",
                              flexShrink: 0,
                            }}
                            aria-hidden
                          >
                            👩‍🎓
                          </div>
                          <div
                            style={{
                              padding: "14px 18px",
                              background: "#F5EFE6",
                              borderRadius: "18px 18px 18px 4px",
                              display: "flex",
                              gap: "4px",
                              alignItems: "center",
                            }}
                          >
                            <span className="teacher-helper-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3D2B1F" }} />
                            <span className="teacher-helper-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3D2B1F" }} />
                            <span className="teacher-helper-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3D2B1F" }} />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* 动态问题按钮 - 根据当前页面/朝代显示前两个 */}
                {error && (
                  <div style={{ marginBottom: "12px", padding: "10px 12px", background: "rgba(180,80,80,0.2)", border: "1px solid rgba(180,80,80,0.5)", borderRadius: 4, fontSize: "11px", color: "#f0c0c0" }}>
                    {error}
                  </div>
                )}
                {questionChips.length > 0 && (
                  <div style={{ marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {questionChips.map((chip, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (isLoading) return;
                          sendToTeacher(chip.label);
                        }}
                        disabled={isLoading}
                        style={{
                          width: "100%",
                          padding: "10px 12px",
                          border: "1px solid #8B5E3C",
                          background: "rgba(139, 94, 60, 0.2)",
                          color: "#F5EFE6",
                          fontSize: "10px",
                          textAlign: "left",
                          cursor: "pointer",
                          fontFamily: "'Noto Serif KR', serif",
                          transition: "all 0.3s",
                          borderRadius: 0
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#8B5E3C";
                          e.currentTarget.style.borderColor = "#8B5E3C";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(139, 94, 60, 0.2)";
                          e.currentTarget.style.borderColor = "#8B5E3C";
                        }}
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input area */}
                <div style={{ display: "flex", gap: "8px" }}>
                  <input
                    type="text"
                    value={teacherDialogInput}
                    onChange={(e) => setTeacherDialogInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") handleSend();
                    }}
                    placeholder="더 물어보세요..."
                    style={{
                      flex: 1,
                      padding: "10px 12px",
                      background: "#2E1F14",
                      border: "1px solid rgba(139, 94, 60, 0.4)",
                      borderRadius: 0,
                      color: "#F5EFE6",
                      fontSize: "12px",
                      fontFamily: "'Noto Serif KR', serif",
                    }}
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading}
                    style={{
                      padding: "10px 16px",
                      background: isLoading ? "#6b4a2e" : "#8B5E3C",
                      border: "1px solid #8B5E3C",
                      color: "#F5EFE6",
                      cursor: isLoading ? "not-allowed" : "pointer",
                      fontSize: "12px",
                      borderRadius: 0,
                      fontFamily: "'Noto Serif KR', serif",
                      opacity: isLoading ? 0.8 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (!isLoading) {
                        e.currentTarget.style.background = "#9d6d47";
                        e.currentTarget.style.borderColor = "#9d6d47";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isLoading) {
                        e.currentTarget.style.background = "#8B5E3C";
                        e.currentTarget.style.borderColor = "#8B5E3C";
                      }
                    }}
                  >
                    {isLoading ? "..." : "전송"}
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* 点击外部关闭对话框 */}
      {showTeacherDialog && (
        <div
          className="fixed inset-0 z-30"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowTeacherDialog(false);
              setTeacherDialogInput("");
              setAiPanelMessages([]);
            }
          }}
        />
      )}
    </>
  );
};

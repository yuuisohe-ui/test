import { useState } from "react";
import { dynastyDetails } from "../data/dynastyDetails";

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
                  무엇이든 물어보세요
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
              backgroundColor: "rgba(8,7,5,0.95)",
              border: "1px solid rgba(201,168,76,0.15)",
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

            {aiPanelExpanded && (
              <>
                {/* 消息区域 */}
                <div
                  style={{
                    flex: 1,
                    overflowY: "auto",
                    marginBottom: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    minHeight: "100px",
                    maxHeight: "300px"
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
                    aiPanelMessages.map((message) => (
                      <div
                        key={message.id}
                        style={{
                          padding: "14px 16px",
                          background: message.type === "ai" 
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
                    ))
                  )}
                </div>

                {/* 动态问题按钮 - 根据当前页面/朝代显示前两个 */}
                {questionChips.length > 0 && (
                  <div style={{ marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {questionChips.map((chip, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const newMessage = {
                            id: Date.now(),
                            type: "ai" as const,
                            content: chip.response
                          };
                          setAiPanelMessages([newMessage]);
                        }}
                        style={{
                          width: "100%",
                          padding: "10px 12px",
                          border: "1px solid rgba(201,168,76,0.5)",
                          background: "transparent",
                          color: "#c9a84c",
                          fontSize: "10px",
                          textAlign: "left",
                          cursor: "pointer",
                          fontFamily: "'Noto Serif KR', serif",
                          transition: "all 0.3s",
                          borderRadius: 0
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "rgba(201,168,76,0.8)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
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
                      if (e.key === "Enter") {
                        // TODO: 接入 API
                        setTeacherDialogInput("");
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
                    onClick={() => {
                      // TODO: 接入 API
                      setTeacherDialogInput("");
                    }}
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

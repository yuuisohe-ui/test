import { useState } from "react";
import SongPage from "./pages/SongPage";
import WordReviewPage from "./pages/WordReviewPage";
import YoutubePage from "./pages/YoutubePage";
import TimelinePage from "./pages/TimelinePage";
import DynastyDetailPage from "./pages/DynastyDetailPage";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import { TeacherHelper } from "./components/TeacherHelper";
import { dynastyDetails } from "./data/dynastyDetails";

type View = "home" | "song" | "wordReview" | "youtube" | "timeline" | "dynastyDetail" | "dashboard";

export default function App() {
  const [view, setView] = useState<View>("home");
  const [selectedDynastyId, setSelectedDynastyId] = useState<string | null>(null);
  const [expandedDynastyId, setExpandedDynastyId] = useState<string | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0c0b08" }}>
      {/* 全局女老师助手 - 显示在所有页面 */}
      <TeacherHelper 
        currentView={view} 
        expandedDynastyId={expandedDynastyId}
        selectedDynastyId={selectedDynastyId}
      />
      <div style={{ display: view === "song" ? "block" : "none" }}>
        <div style={{ padding: "12px 24px", borderBottom: "1px solid #e2cdb8", background: "rgba(250,246,240,0.88)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 50 }}>
          <button onClick={() => setView("home")} style={{ background: "none", border: "1px solid #e2cdb8", borderRadius: 8, padding: "6px 16px", fontSize: 13, color: "#9c7b60", cursor: "pointer", fontFamily: "'Noto Sans KR', sans-serif" }}>← 홈</button>
        </div>
        <SongPage isVisible={view === "song"} />
      </div>
      <div style={{ display: view === "wordReview" ? "block" : "none" }}>
        <div style={{ padding: "12px 24px", borderBottom: "1px solid #e2cdb8", background: "rgba(250,246,240,0.88)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 50 }}>
          <button onClick={() => setView("home")} style={{ background: "none", border: "1px solid #e2cdb8", borderRadius: 8, padding: "6px 16px", fontSize: 13, color: "#9c7b60", cursor: "pointer", fontFamily: "'Noto Sans KR', sans-serif" }}>← 홈</button>
        </div>
        <WordReviewPage />
      </div>
      <div style={{ display: view === "youtube" ? "block" : "none" }}>
        <div style={{ padding: "12px 24px", borderBottom: "1px solid #e2cdb8", background: "rgba(250,246,240,0.88)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 50 }}>
          <button onClick={() => setView("home")} style={{ background: "none", border: "1px solid #e2cdb8", borderRadius: 8, padding: "6px 16px", fontSize: 13, color: "#9c7b60", cursor: "pointer", fontFamily: "'Noto Sans KR', sans-serif" }}>← 홈</button>
        </div>
        <YoutubePage />
      </div>
      <div style={{ display: view === "timeline" ? "block" : "none" }}>
        <div style={{ padding: "12px 24px", borderBottom: "1px solid #e2cdb8", background: "rgba(250,246,240,0.88)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 50 }}>
          <button onClick={() => setView("home")} style={{ background: "none", border: "1px solid #e2cdb8", borderRadius: 8, padding: "6px 16px", fontSize: 13, color: "#9c7b60", cursor: "pointer", fontFamily: "'Noto Sans KR', sans-serif" }}>← 홈</button>
        </div>
        <TimelinePage 
          onNavigateToDetail={(dynastyId: string) => {
            setSelectedDynastyId(dynastyId);
            setView("dynastyDetail");
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100);
          }}
          onExpandedChange={(dynastyId: string | null) => {
            setExpandedDynastyId(dynastyId);
          }}
        />
      </div>
      <div style={{ display: view === "dynastyDetail" ? "block" : "none" }}>
        {selectedDynastyId && dynastyDetails[selectedDynastyId] && (
          <DynastyDetailPage 
            dynasty={dynastyDetails[selectedDynastyId]} 
            onBack={() => setView("timeline")}
            onNavigateToDynasty={(dynastyId: string) => {
              setSelectedDynastyId(dynastyId)
              setView("dynastyDetail")
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
              }, 100)
            }}
          />
        )}
      </div>
      <div style={{ display: view === "home" ? "block" : "none" }}>
        <HomePage onNavigate={(v) => setView(v)} />
      </div>
      <div style={{ display: view === "dashboard" ? "block" : "none" }}>
        <DashboardPage onBack={() => setView("home")} />
      </div>
    </div>
  );
}

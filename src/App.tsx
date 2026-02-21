import { useState, useMemo } from "react";
import SongPage from "./pages/SongPage";
import VideoPage from "./pages/VideoPage";
import WordReviewPage from "./pages/WordReviewPage";
import YoutubePage from "./pages/YoutubePage";
import TimelinePage from "./pages/TimelinePage";
import DynastyDetailPage from "./pages/DynastyDetailPage";
import { AnalyzePage } from "./components/AnalyzePage";
import { TeacherHelper } from "./components/TeacherHelper";
import { sentenceData } from "./data/mockData";
import { dynastyDetails } from "./data/dynastyDetails";

type View = "song" | "analyze" | "video" | "wordReview" | "youtube" | "timeline" | "dynastyDetail";

export default function App() {
  const [view, setView] = useState<View>("song");
  const [selectedDynastyId, setSelectedDynastyId] = useState<string | null>(null);
  const [expandedDynastyId, setExpandedDynastyId] = useState<string | null>(null);

  const topBar = useMemo(
    () => (
      <div 
        className={`w-full ${view === "dynastyDetail" ? "" : "border-b"} bg-white/80 backdrop-blur sticky top-0 z-50`}
        style={view === "dynastyDetail" ? { borderBottom: 'none' } : {}}
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2">
          <button
            className={`px-3 py-1 rounded-lg border text-sm ${
              view === "song" ? "bg-black text-white" : "bg-white"
            }`}
            onClick={() => setView("song")}
          >
            Song Page
          </button>
          <button
            className={`px-3 py-1 rounded-lg border text-sm ${
              view === "analyze" ? "bg-black text-white" : "bg-white"
            }`}
            onClick={() => setView("analyze")}
          >
            Analyze Demo
          </button>
          <button
            className={`px-3 py-1 rounded-lg border text-sm ${
              view === "video" ? "bg-black text-white" : "bg-white"
            }`}
            onClick={() => setView("video")}
          >
            Video Page
          </button>
          <button
            className={`px-3 py-1 rounded-lg border text-sm ${
              view === "wordReview" ? "bg-black text-white" : "bg-white"
            }`}
            onClick={() => setView("wordReview")}
          >
            单词复习
          </button>
          <button
            className={`px-3 py-1 rounded-lg border text-sm ${
              view === "youtube" ? "bg-black text-white" : "bg-white"
            }`}
            onClick={() => setView("youtube")}
          >
            Youtube Page
          </button>
          <button
            className={`px-3 py-1 rounded-lg border text-sm ${
              view === "timeline" ? "bg-black text-white" : "bg-white"
            }`}
            onClick={() => setView("timeline")}
          >
            词韵时间线
          </button>
          <div className="ml-auto text-xs text-gray-500">
            本地地址以终端 Local 为准
          </div>
        </div>
      </div>
    ),
    [view]
  );

  return (
    <div className="min-h-screen">
      {view !== "dynastyDetail" && topBar}
      {/* 全局女老师助手 - 显示在所有页面 */}
      <TeacherHelper 
        currentView={view} 
        expandedDynastyId={expandedDynastyId}
        selectedDynastyId={selectedDynastyId}
      />
      <div style={{ display: view === "song" ? "block" : "none" }}>
        <SongPage />
      </div>
      <div style={{ display: view === "analyze" ? "block" : "none" }}>
        <AnalyzePage data={sentenceData} />
      </div>
      <div style={{ display: view === "video" ? "block" : "none" }}>
        <VideoPage />
      </div>
      <div style={{ display: view === "wordReview" ? "block" : "none" }}>
        <WordReviewPage />
      </div>
      <div style={{ display: view === "youtube" ? "block" : "none" }}>
        <YoutubePage />
      </div>
      <div style={{ display: view === "timeline" ? "block" : "none" }}>
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
    </div>
  );
}

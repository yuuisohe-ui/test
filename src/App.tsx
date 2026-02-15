import { useState, useMemo } from "react";
import SongPage from "./pages/SongPage";
import VideoPage from "./pages/VideoPage";
import WordReviewPage from "./pages/WordReviewPage";
import YoutubePage from "./pages/YoutubePage";
import { AnalyzePage } from "./components/AnalyzePage";
import { sentenceData } from "./data/mockData";

type View = "song" | "analyze" | "video" | "wordReview" | "youtube";

export default function App() {
  const [view, setView] = useState<View>("song");

  const topBar = useMemo(
    () => (
      <div className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-50">
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
      {topBar}
      {view === "song" && <SongPage />}
      {view === "analyze" && <AnalyzePage data={sentenceData} />}
      {view === "video" && <VideoPage />}
      {view === "wordReview" && <WordReviewPage />}
      {view === "youtube" && <YoutubePage />}
    </div>
  );
}

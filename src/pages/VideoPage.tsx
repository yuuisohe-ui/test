import { useState } from "react";
import SongPage from "./SongPage";

// 유튜브 비디오 데이터 타입
interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
  videoId: string;
  lyrics?: string; // 가사 텍스트 (선택적)
}

// 샘플 비디오 데이터 (실제로는 API에서 가져올 수 있음)
const sampleVideos: VideoData[] = [
  {
    id: "1",
    title: "中文歌曲 1",
    thumbnail: "https://img.youtube.com/vi/aWXy974QLCk/hqdefault.jpg",
    videoId: "aWXy974QLCk",
    lyrics: "햇살은 우릴 위해 내리고\n바람도 서롤 감싸게 했죠\n우리 웃음 속에 계절은 오고 또 갔죠\n바람에 흔들리는 머릿결\n내게 불어오는 그대 향기\n예쁜 두 눈도 웃음소리도\n모두 다 내 것이었죠\n이런 사랑 이런 행복 쉽다 했었죠\n이런 웃음 이런 축복 내게 쉽게 올 리 없죠\n눈물조차 울음조차 닦지 못한 나\n정말로 울면 내가 그댈 보내준 것 같아서\n그대 떠나가는 그 순간도\n나를 걱정했었나요\n무엇도 해줄 수 없는 내 맘 앞에서\n그대 나를 떠나간다고 해도\n난 그댈 보낸 적 없죠\n여전히 그댄 나를 살게 하는 이율 테니\n이런 사랑 이런 행복 쉽다 했었죠\n이런 웃음 이런 축복 내게 쉽게 올 리 없죠\n눈물조차 울음조차 닦지 못한 나\n정말로 울면 내가 그댈 보내준 것 같아서\n그대 떠나가는 그 순간도\n나를 걱정했었나요\n무엇도 해줄 수 없는 내 맘 앞에서\n그대 나를 떠나간다고 해도\n난 그댈 보낸 적 없죠\n기다림으로 다시 시작일 테니\n얼마나 사랑했는지 얼마나 또 울었는지\n그대여 한순간조차 잊지 말아요\n거기 떠나간 그곳에서 늘\n기억하며 기다려요\n하루씩 그대에게 다가가는 나일 테니",
  },
  {
    id: "2",
    title: "中文歌曲 2",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
    videoId: "jNQXAC9IVRw",
  },
  {
    id: "3",
    title: "中文歌曲 3",
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
    videoId: "9bZkp7q19f0",
  },
];

export default function VideoPage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [showAnalysis, setShowAnalysis] = useState(false);

  // 썸네일 클릭 시 비디오 선택
  const handleThumbnailClick = (video: VideoData) => {
    setSelectedVideo(video);
    setShowAnalysis(false);
  };

  // 가사 분석 시작
  const handleAnalyzeLyrics = () => {
    setShowAnalysis(true);
  };

  // 뒤로 가기
  const handleBack = () => {
    setSelectedVideo(null);
    setShowAnalysis(false);
  };

  // 비디오 상세 페이지
  if (selectedVideo) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* 헤더 */}
          <div className="mb-6">
            <button
              onClick={handleBack}
              className="mb-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              목록으로 돌아가기
            </button>
            <h1 className="text-2xl font-bold text-gray-900">{selectedVideo.title}</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 왼쪽: 유튜브 비디오 */}
            <div className="bg-white rounded-2xl shadow-sm border p-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">뮤직비디오</h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=0`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* 오른쪽: 가사 분석 */}
            <div className="bg-white rounded-2xl shadow-sm border p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-700">가사 분석</h2>
                {!showAnalysis && (
                  <button
                    onClick={handleAnalyzeLyrics}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    가사 분석 시작
                  </button>
                )}
              </div>

              {showAnalysis ? (
                <div className="h-full">
                  {/* SongPage 컴포넌트를 iframe처럼 임베드 */}
                  <div className="border rounded-lg overflow-hidden" style={{ height: "600px" }}>
                    <SongPageWithLyrics lyrics={selectedVideo.lyrics || ""} />
                  </div>
                </div>
              ) : selectedVideo.lyrics ? (
                <div className="h-full">
                  {/* 가사가 있으면 미리보기 표시 */}
                  <div className="border rounded-lg overflow-hidden" style={{ height: "600px" }}>
                    <div className="p-4 h-full overflow-y-auto">
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">가사 미리보기:</p>
                        <pre className="text-sm text-gray-800 whitespace-pre-wrap font-sans bg-gray-50 p-3 rounded">
                          {selectedVideo.lyrics}
                        </pre>
                      </div>
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          💡 "가사 분석 시작" 버튼을 클릭하면 ChatGPT로 가사를 분석합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-96 text-gray-400">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p>가사 분석을 시작하려면 버튼을 클릭하세요</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 메인 페이지: 썸네일 목록
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">중국어 노래 학습</h1>
          <p className="text-gray-600">유튜브 뮤직비디오를 보고 가사를 분석해보세요</p>
        </div>

        {/* 썸네일 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sampleVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => handleThumbnailClick(video)}
              className="bg-white rounded-xl shadow-sm border overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
            >
              {/* 썸네일 */}
              <div className="aspect-video relative overflow-hidden bg-gray-200">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    // maxresdefault.jpg 加载失败时，回退到 hqdefault.jpg
                    if (img.src.includes('maxresdefault.jpg')) {
                      img.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                    } else {
                      // 如果 hqdefault.jpg 也失败，使用占位符
                      img.src = "https://via.placeholder.com/640x360?text=No+Thumbnail";
                    }
                  }}
                />
                {/* 플레이 버튼 오버레이 */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all">
                  <div className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 제목 */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 line-clamp-2">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* 빈 상태 (비디오가 없을 때) */}
        {sampleVideos.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <p>등록된 비디오가 없습니다</p>
          </div>
        )}
      </div>
    </div>
  );
}

// SongPage를 가사와 함께 래핑하는 컴포넌트
function SongPageWithLyrics({ lyrics }: { lyrics: string }) {
  return (
    <div className="h-full overflow-y-auto" style={{ maxHeight: "600px" }}>
      <SongPage initialLyrics={lyrics} />
    </div>
  );
}


import { useEffect, useMemo, useState } from "react";
import { opalMockOk } from "../data/opalMock";
import { SentenceView } from "../components/SentenceView";
import { AnalysisTable } from "../components/AnalysisTable";
import { TTSButton } from "../components/TTSButton";
import { SentenceData } from "../types";
import { SongPayload } from "../data/opalMock";
import { callOpalApiWithAudio, callOpalApiWithText } from "../services/opalApi";
import { callChatGPTApiWithText, callChatGPTApiWithAudio } from "../services/chatgptApi";
import { createDialogue } from "../services/dialogueApi";

type StarMap = Record<number, true>;

function buildSongId(text: string, lineCount: number) {
  const head = text.trim().replace(/\s+/g, " ").slice(0, 50);
  return `${head}_${lineCount}`;
}

function safeParseJSON<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function makeFallbackSentenceData(line: string): SentenceData {
  const clean = line.trim();
  return {
    sentence: clean,
    tokens: [
      {
        text: clean,
        glossZh: "",
        glossKr: "",
        example: "",
      },
    ],
    chunks: [
      {
        text: clean,
        pinyin: "",
        tones: "",
      },
    ],
  };
}

// OpalLine을 SentenceData로 변환
function opalLineToSentenceData(line: any): SentenceData {
  if (!line) {
    return makeFallbackSentenceData("");
  }

  const zhSentence = line.zhSentence || line.displayLine || "";
  
  // tokensZh를 Token[]로 변환
  const tokens = (line.tokensZh || []).map((token: any) => ({
    text: token.text || "",
    glossZh: token.glossZh || "",
    glossKr: token.glossKr || "",
    example: token.example || "",
  }));

  // chunks를 Chunk[]로 변환 (pattern → text, chunkZh 우선)
  const chunks = (line.chunks || []).map((chunk: any) => ({
    text: chunk.chunkZh || chunk.pattern || chunk.text || "",
    pinyin: chunk.pinyin || "",
    tones: chunk.tones || "",
  }));

  return {
    sentence: zhSentence,
    tokens: tokens.length > 0 ? tokens : [
      {
        text: zhSentence,
        glossZh: "",
        glossKr: "",
        example: "",
      },
    ],
    chunks: chunks.length > 0 ? chunks : [
      {
        text: zhSentence,
        pinyin: "",
        tones: "",
      },
    ],
  };
}

function downloadHtml(filename: string, html: string) {
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function escapeHtml(s: string) {
  const str = String(s ?? "");
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function formatLineNo(n: number) {
  return String(n).padStart(2, "0");
}

interface SongPageProps {
  initialLyrics?: string;
}

export default function SongPage({ initialLyrics }: SongPageProps = {}) {
  // 输入区
  const [rawText, setRawText] = useState(initialLyrics || "");
  const [audioHint, setAudioHint] = useState<string | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // initialLyrics가 변경되면 rawText 업데이트
  useEffect(() => {
    if (initialLyrics) {
      setRawText(initialLyrics);
    }
  }, [initialLyrics]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState<string>("");
  const [opalPayload, setOpalPayload] = useState<SongPayload | null>(null);
  const [testResult, setTestResult] = useState<string | null>(null);
  
  // 단어 선택 및 대화 생성
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [dialogueResult, setDialogueResult] = useState<{ word: string; dialogue: string; translation?: string } | null>(null);
  const [isGeneratingDialogue, setIsGeneratingDialogue] = useState(false);

  // 列表与模式
  const [search, setSearch] = useState("");
  const [reviewMode, setReviewMode] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // 解析输入 → 句子数组（优先 Opal API 결과，退回 rawText）
  const linesAll = useMemo(() => {
    // ✅ API 분석 결과가 있으면 우선 사용 (병음, 토큰 등 포함)
    if (opalPayload?.status === "ok" && Array.isArray(opalPayload.lines) && opalPayload.lines.length > 0) {
      return opalPayload.lines;
    }

    // ✅ API 결과가 없을 때만 rawText 사용 (분석 전 임시 표시)
    const hasRaw = rawText.split(/\r?\n/).some((s) => s.trim().length > 0);
    if (hasRaw) {
      return rawText
        .split(/\r?\n/)
        .map((s) => s.trim())
        .filter(Boolean)
        .map((line, idx) => ({
            lineNo: idx + 1,
            displayLine: line,
            zhSentence: line,
            tokensZh: [],
            chunks: [{ text: line, pinyin: "—", tones: "—" }],
          }));
    }

    return [];
  }, [opalPayload, rawText]);

  const songId = useMemo(() => buildSongId(rawText, linesAll.length), [rawText, linesAll.length]);
  const storageKey = useMemo(() => `starred_${songId}`, [songId]);

  // 星标状态
  const [starMap, setStarMap] = useState<StarMap>({});

  useEffect(() => {
    // songId变化时，读取对应星标
    const saved = safeParseJSON<StarMap>(localStorage.getItem(storageKey), {});
    setStarMap(saved);
    setPage(1);
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(starMap));
  }, [storageKey, starMap]);

  // 过滤（搜索 + 复习模式）
  const filtered = useMemo(() => {
    const q = search.trim();
    const base = linesAll.map((it: any) => ({
      item: it,
      lineNo: Number(it?.lineNo ?? 0),
      starred: !!starMap[Number(it?.lineNo ?? 0)],
    }));

    const afterReview = reviewMode ? base.filter((x: any) => x.starred) : base;

    const afterSearch = q
      ? afterReview.filter((x: any) => ((x.item?.displayLine ?? "").includes(q) || (x.item?.zhSentence ?? "").includes(q)))
      : afterReview;

    return afterSearch;
  }, [linesAll, search, reviewMode, starMap]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage]);

  // 导出 HTML（本页）
  function exportCurrentPage() {
    const items = pageItems;
    const title = "中文歌词学习笔记";
    const modeTitle = reviewMode ? "（复习模式：本页星标句子）" : "（普通模式：本页句子）";

    const blocks = items
      .map((it: any) => {
        const data = makeFallbackSentenceData(it.line);
        const tokensRows = (data.tokens ?? []).map((t) => `
          <tr>
            <td>${escapeHtml(t.text ?? "")}</td>
            <td>${escapeHtml(t.glossZh ?? "")}</td>
            <td>${escapeHtml(t.glossKr ?? "")}</td>
            <td>${escapeHtml(t.example ?? "")}</td>
          </tr>
        `).join("");

        const chunksRows = (data.chunks ?? []).map((c) => `
          <tr>
            <td>${escapeHtml(c.text ?? "")}</td>
            <td>${escapeHtml(c.pinyin ?? "")}</td>
            <td>${escapeHtml(c.tones ?? "")}</td>
          </tr>
        `).join("");

        return `
          <section style="margin:24px 0; padding:16px; border:1px solid #ddd; border-radius:12px;">
            <h2 style="margin:0 0 8px 0;">${formatLineNo(it.lineNo)}. ${escapeHtml(it.line)}</h2>

            <h3 style="margin:16px 0 8px 0;">词汇表</h3>
            <table style="width:100%; border-collapse:collapse;">
              <thead>
                <tr>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">词</th>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">中文释义</th>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">韩语释义</th>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">例句</th>
                </tr>
              </thead>
              <tbody>
                ${tokensRows || `<tr><td colspan="4" style="padding:8px; color:#777;">（暂无）</td></tr>`}
              </tbody>
            </table>

            <h3 style="margin:16px 0 8px 0;">语块表</h3>
            <table style="width:100%; border-collapse:collapse;">
              <thead>
                <tr>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">语块</th>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">拼音</th>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">声调结构</th>
                </tr>
              </thead>
              <tbody>
                ${chunksRows || `<tr><td colspan="3" style="padding:8px; color:#777;">（暂无）</td></tr>`}
              </tbody>
            </table>
          </section>
        `;
      })
      .join("");

    const html = `
      <!doctype html>
      <html lang="zh">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>${title}</title>
      </head>
      <body style="font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial; margin:24px; color:#111;">
        <h1 style="margin:0 0 8px 0;">${title}</h1>
        <p style="margin:0 0 24px 0; color:#555;">${modeTitle} · 导出时间：${new Date().toLocaleString()}</p>
        ${blocks || `<p style="color:#777;">（当前页无内容）</p>`}
      </body>
      </html>
    `;

    const filename = reviewMode ? `review_page_${currentPage}.html` : `page_${currentPage}.html`;
    downloadHtml(filename, html);
  }

  // 音频拖拽（仅 UI）
  function onAudioFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    const f = files[0];
    if (!f.type.startsWith("audio/")) {
      setAudioHint("仅支持音频文件（mp3 / m4a / wav）。");
      return;
    }
    setAudioFile(f);
    setAudioHint(null);
  }

  // ChatGPT API 테스트 함수
  async function testChatGPTAPI() {
    setIsLoading(true);
    setTestResult(null);
    setAudioHint(null);
    
    console.log('🧪 ChatGPT API 테스트 시작...');
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
    console.log('API 키 확인:', apiKey ? `✅ 설정됨 (${apiKey.substring(0, 10)}...)` : '❌ 없음');
    console.log('API 키 전체:', apiKey || '(없음)');
    console.log('API URL:', import.meta.env.VITE_OPENAI_API_URL || 'https://api.openai.com/v1');
    
    try {
      const testText = "안녕하세요\n만나서 반갑습니다";
      console.log('📤 테스트 텍스트 전송:', testText);
      
      const startTime = Date.now();
      const result = await callChatGPTApiWithText(testText, 'ko');
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      console.log('📥 ChatGPT API 응답 받음:', result);
      console.log('⏱️ 응답 시간:', `${duration}ms`);
      console.log('📊 응답 상태:', result.status);
      console.log('📝 응답 라인 수:', result.lines?.length || 0);
      
      if (result.status === 'ok') {
        setTestResult(`✅ 성공! 응답 시간: ${duration}ms, 라인 수: ${result.lines?.length || 0}`);
        setOpalPayload(result);
        setAudioHint(`ChatGPT API 테스트 성공! ${result.lines?.length || 0}개 라인 분석 완료.`);
      } else {
        setTestResult(`❌ 실패: ${result.message || '알 수 없는 오류'}`);
        setAudioHint(result.message || 'ChatGPT API 테스트 실패');
      }
    } catch (error) {
      console.error('❌ ChatGPT API 테스트 오류:', error);
      const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류';
      setTestResult(`❌ 오류: ${errorMessage}`);
      setAudioHint(`테스트 실패: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }

  // API 호출 (ChatGPT 우선, Opal 대체, Mock 폴백)
  async function onClickTranscribe() {
    setIsLoading(true);
    setLoadingProgress(0);
    setLoadingMessage("");
    setAudioHint(null);
    setTestResult(null);
    
    try {
      let result: SongPayload;
      
      // ChatGPT API 키가 설정되어 있으면 ChatGPT 사용, 아니면 Opal 사용
      const useChatGPT = import.meta.env.VITE_OPENAI_API_KEY && 
                         import.meta.env.VITE_OPENAI_API_KEY !== 'your-openai-api-key-here';
      
      console.log('🔍 사용할 API:', useChatGPT ? 'ChatGPT' : 'Opal');
      
      // 오디오 파일이 있으면 오디오 API 호출 (오디오 우선)
      if (audioFile) {
        console.log('🎵 오디오 파일 분석 시작...');
        setLoadingMessage("음성 파일 전사 중... (0%)");
        setLoadingProgress(10);
        
        if (useChatGPT) {
          setLoadingMessage("Whisper API로 음성 전사 중... (20%)");
          setLoadingProgress(20);
          
          // 음성 전사 단계 (20-50%)
          setLoadingMessage("음성 파일을 텍스트로 변환 중... (30%)");
          setLoadingProgress(30);
          
          result = await callChatGPTApiWithAudio(audioFile);
          
          setLoadingMessage("ChatGPT로 가사 분석 중... (80%)");
          setLoadingProgress(80);
        } else {
          setLoadingMessage("Opal API로 음성 분석 중... (50%)");
          setLoadingProgress(50);
          result = await callOpalApiWithAudio(audioFile);
        }
      } 
      // 텍스트가 있으면 텍스트 API 호출 (텍스트만 입력한 경우)
      else if (rawText.trim()) {
        console.log('📝 텍스트 분석 시작...', rawText.substring(0, 50));
        setLoadingMessage("텍스트 분석 준비 중... (10%)");
        setLoadingProgress(10);
        
        if (useChatGPT) {
          setLoadingMessage("ChatGPT로 가사 분석 중... (30%)");
          setLoadingProgress(30);
          
          // ChatGPT API로 텍스트 분석 (한국어 가사로 가정)
          result = await callChatGPTApiWithText(rawText.trim(), 'ko');
          
          setLoadingMessage("분석 결과 처리 중... (80%)");
          setLoadingProgress(80);
        } else {
          setLoadingMessage("Opal API로 텍스트 분석 중... (50%)");
          setLoadingProgress(50);
          result = await callOpalApiWithText(rawText.trim());
        }
      }
      // 둘 다 없으면 Mock 데이터 사용 (개발용)
      else {
        console.log('📦 Mock 데이터 사용 (입력 없음)');
        setAudioHint('음성 파일을 업로드하거나 가사 텍스트를 입력해주세요.');
        result = opalMockOk;
      }
      
      setLoadingMessage("데이터 처리 중... (90%)");
      setLoadingProgress(90);
      
      console.log('✅ API 응답 받음:', result);
      setOpalPayload(result);
      
      setLoadingMessage("완료! (100%)");
      setLoadingProgress(100);
      
      // 실패 시 힌트 표시
      if (result.status === 'failed') {
        setAudioHint(result.message || '분석에 실패했습니다.');
      } else {
        console.log(`✅ 분석 완료: ${result.lines?.length || 0}개 라인`);
        setLoadingMessage(`✅ 분석 완료: ${result.lines?.length || 0}개 라인`);
      }
      
      // 완료 후 잠시 표시
      setTimeout(() => {
        setLoadingMessage("");
      }, 2000);
    } catch (error) {
      console.error('❌ API 호출 오류:', error);
      setLoadingMessage("❌ 오류 발생");
      setLoadingProgress(0);
      setAudioHint('API 호출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      // 에러 발생 시 Mock 데이터로 폴백
      setOpalPayload(opalMockOk);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setLoadingProgress(0);
        setLoadingMessage("");
      }, 2000);
    }
  }

  // 대화 생성 함수
  async function handleCreateDialogue(word: string) {
    setIsGeneratingDialogue(true);
    setSelectedWord(word);
    setDialogueResult(null);
    
    try {
      const result = await createDialogue(word);
      setDialogueResult(result);
    } catch (error) {
      console.error('대화 생성 오류:', error);
      setAudioHint(error instanceof Error ? error.message : '대화 생성 중 오류가 발생했습니다.');
    } finally {
      setIsGeneratingDialogue(false);
    }
  }

  // 每句卡片内部：复用现有组件
  function SentenceCard({ item, starred }: { item: any; starred: boolean }) {
    const lineNo = Number(item?.lineNo ?? 0);
    const displayLine = String(item?.displayLine ?? "");
    const zhSentence = String(item?.zhSentence ?? "");
    
    // OpalLine 데이터가 있으면 사용 (tokensZh 또는 chunks가 있으면 실제 데이터)
    const data = (item?.tokensZh || item?.chunks) 
      ? opalLineToSentenceData(item)
      : makeFallbackSentenceData(zhSentence);


    return (
    <div className="bg-white rounded-2xl shadow-sm border p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-sm text-gray-500 w-10">{formatLineNo(lineNo)}</div>
          <div className="font-medium flex-1 truncate">{displayLine}</div>

          <button
            className={`text-xl leading-none px-2 py-1 rounded-lg ${
              starred ? "text-yellow-500" : "text-gray-300"
            }`}
            onClick={() =>
              setStarMap((prev) => {
                const next = { ...prev };
                if (next[lineNo]) delete next[lineNo];
                else next[lineNo] = true;
                return next;
              })
            }
            aria-label={starred ? "取消星标" : "星标"}
            title={starred ? "取消星标" : "星标"}
          >
            ★
          </button>
        </div>

        <div className="mb-4">
          {/* 整句展示 + 句子朗读 */}
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold text-gray-700">整句展示</div>
            <TTSButton text={data.sentence} />
          </div>
          <SentenceView 
            sentence={data.sentence ?? ""} 
            tokens={data.tokens ?? []} 
            onWordSelect={handleCreateDialogue}
            selectedWord={selectedWord}
          />
        </div>

        <div>
          <div className="text-sm font-semibold text-gray-700 mb-2">学习分析表</div>
          <AnalysisTable chunks={data.chunks ?? []} />
        </div>
      </div>
    );
  }

  // 대화 생성 모달
  const DialogueModal = () => {
    if (!dialogueResult && !isGeneratingDialogue) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                💬 대화 만들기: {selectedWord}
              </h2>
              <button
                onClick={() => {
                  setDialogueResult(null);
                  setSelectedWord(null);
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {isGeneratingDialogue ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                <p className="mt-4 text-gray-600">대화를 생성하고 있습니다...</p>
              </div>
            ) : dialogueResult ? (
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-blue-900 mb-2">중국어 대화</h3>
                  <div className="text-gray-800 whitespace-pre-line leading-relaxed">
                    {dialogueResult.dialogue}
                  </div>
                </div>
                
                {dialogueResult.translation && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">한국어 번역</h3>
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {dialogueResult.translation}
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2 pt-4">
                  <button
                    onClick={() => {
                      setDialogueResult(null);
                      setSelectedWord(null);
                    }}
                    className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    닫기
                  </button>
                  <button
                    onClick={() => handleCreateDialogue(selectedWord!)}
                    className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    다시 생성
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  const showEmpty = linesAll.length === 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-2 bg-black text-white text-xs">✅ SongPage LOADED</div>
      {/* 顶部固定输入区 */}
      <div className=" z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto px-4 py-4 space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">中文歌词学习分析</h1>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 rounded-lg border text-sm bg-green-500 text-white hover:bg-green-600 disabled:opacity-50"
                onClick={testChatGPTAPI}
                disabled={isLoading}
                title="ChatGPT API 연결 테스트"
              >
                🧪 API 테스트
              </button>
              <button
                className={`px-3 py-1 rounded-lg border text-sm ${
                  reviewMode ? "bg-black text-white" : "bg-white"
                }`}
                onClick={() => setReviewMode((v) => !v)}
              >
                {reviewMode ? "退出复习模式" : "进入复习模式"}
              </button>
              <button
                className="px-3 py-1 rounded-lg border text-sm bg-white"
                onClick={exportCurrentPage}
                disabled={pageItems.length === 0}
              >
                导出本页 HTML
              </button>
            </div>
          </div>
                    {/* ✅ 统一主入口模块（音频优先） */}
                    <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
            {/* 上半：大音频拖拽区 */}
            <div
              className="p-8 md:p-12 border-b border-dashed border-gray-300 bg-sky-50">
              <div className="text-lg md:text-xl font-semibold">
                上传音频可获得更完整的学习资料
              </div>
              <div className="text-xs text-gray-500 mt-1">
                建议吐字清晰、节奏稳定（当前仅 UI 占位，不接 Opal）
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <label className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer hover:bg-gray-50 text-sm">
                  选择音频文件
                  <input
                    className="hidden"
                    type="file"
                    accept="audio/*"
                    onChange={(e) => onAudioFiles(e.target.files)}
                  />
                </label>

                <button
                  className="px-4 py-2 rounded-xl bg-black text-white text-sm font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  onClick={onClickTranscribe}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>분석 중...</span>
                    </>
                  ) : (
                    "开始转写 / 分析"
                  )}
                </button>

                <div className="text-xs text-gray-400">或直接拖拽音频到此区域</div>
              </div>

              {/* 로딩 진행률 표시 */}
              {isLoading && (
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>{loadingMessage || "분석 중..."}</span>
                    <span className="font-semibold">{loadingProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${loadingProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {audioHint && !isLoading && (
                <div className="mt-3 text-xs text-gray-600">{audioHint}</div>
              )}
              {testResult && (
                <div className={`mt-3 p-3 rounded-lg text-sm ${
                  testResult.startsWith('✅') 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  <div className="font-semibold mb-1">테스트 결과:</div>
                  <div>{testResult}</div>
                  <div className="mt-2 text-xs opacity-75">
                    브라우저 콘솔(F12)에서 상세 로그를 확인하세요.
                  </div>
                </div>
              )}
            </div>

            {/* 下半：文本粘贴（次级） */}
            <div className="p-4">
              <div className="text-sm font-semibold text-gray-700 mb-2">
                或直接粘贴歌词文本（支持中文 / 韩文）
              </div>
              <textarea
                className="w-full h-28 p-3 rounded-xl border bg-white"
                placeholder="在这里粘贴歌词，每行一句…"
                value={rawText}
                onChange={(e) => {
                  setRawText(e.target.value);
                  setOpalPayload(null);
                  setPage(1);
                }}
              />
            </div>
          </div>

                   {/* 输入行：文本 + 搜索 */}
                   <div className="hidden grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">粘贴歌词文本（按换行分句）</div>
              <textarea
                className="w-full h-24 p-3 rounded-xl border bg-white"
                placeholder="在这里粘贴歌词，每行一句…"
                value={rawText}
                onChange={(e) => {
                  setRawText(e.target.value);
                  setOpalPayload(null);
                  setPage(1);
                }}
              />
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">搜索（按中文包含匹配）</div>
              <input
                className="w-full p-3 rounded-xl border bg-white"
                placeholder="输入中文词或片段进行过滤…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <div className="mt-2 p-3 rounded-xl border bg-white">
                <div className="text-sm font-semibold text-gray-700 mb-2">拖拽音频文件（占位）</div>
                <input
                  type="file"
                  accept="audio/*"
                  onChange={(e) => onAudioFiles(e.target.files)}
                />
                <button
                  className="ml-2 px-3 py-1 rounded-lg border text-sm bg-white flex items-center gap-2 disabled:opacity-50"
                  onClick={onClickTranscribe}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>분석 중...</span>
                    </>
                  ) : (
                    '开始转写 / 分析'
                  )}
                </button>
                
                {/* 로딩 진행률 표시 (텍스트 영역 아래) */}
                {isLoading && (
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>{loadingMessage || "분석 중..."}</span>
                      <span className="font-semibold">{loadingProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${loadingProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                {audioHint && !isLoading && (
                  <div className="mt-2 text-sm text-gray-600">{audioHint}</div>
                )}
              </div>
            </div>
          </div>

          {showEmpty ? (
            <div className="text-sm text-gray-600">
              请粘贴歌词或拖拽音频文件。音频转写当前仅做 UI 占位，不会导致页面崩溃。
            </div>
          ) : (
            <div className="text-sm text-gray-600 flex items-center justify-between">
              <div>
                共 {filtered.length} 句（原始 {linesAll.length} 句）
                {reviewMode ? " · 复习模式（仅星标）" : ""}
              </div>
              <div>
                第 {currentPage} / {totalPages} 页（每页 {pageSize} 句）
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 内容区：本页 10 句全部展开 */}
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-4">
        {!showEmpty && pageItems.length === 0 ? (
          <div className="bg-white border rounded-2xl p-6 text-gray-600">
            没有匹配结果。请调整搜索词或取消复习模式。
          </div>
        ) : null}

        {pageItems.map((it: any) => (
          <SentenceCard
            key={(it.lineNo + "-" + (((it.item && it.item.zhSentence) || "")))}
            item={it.item}
            starred={!!it.starred}
          />
        ))}

        {/* 分页 */}
        {!showEmpty && (
          <div className="flex items-center justify-between pt-4">
            <button
              className="px-3 py-1 rounded-lg border text-sm bg-white disabled:opacity-50"
              disabled={currentPage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              上一页
            </button>
            <div className="text-sm text-gray-600">
              第 {currentPage} / {totalPages} 页
            </div>
            <button
              className="px-3 py-1 rounded-lg border text-sm bg-white disabled:opacity-50"
              disabled={currentPage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              下一页
            </button>
          </div>
        )}
      </div>
      
      {/* 대화 생성 모달 */}
      <DialogueModal />
    </div>
  );
}


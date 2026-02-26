import { forwardRef, type Ref } from 'react';
import { Chunk } from '../types';
import { TTSButton } from './TTSButton';
import { AudioPlayer } from './AudioPlayer';
import { SingAlongButton, type ReadingFeedback, type SingAlongButtonHandle } from './SingAlongButton';
import { songPageTranslations } from '../i18n/songPageTranslations';

interface AnalysisTableProps {
  chunks: Chunk[];
  sentence?: string; // 整句歌词，用于验证拼音和声调数量
  audioFile?: File | null; // 音频文件
  audioUrl?: string; // 音频URL
  startSec?: number; // 开始时间
  endSec?: number; // 结束时间
  userLevel?: "初级" | "中级" | "高级" | null; // 用户水平（用于跟读按钮）
  uiLanguage?: 'ko'; // UI 固定韩文（保留 prop 以兼容调用方）
  /** 由 SentenceCard 渲染跟读反馈面板（与教学提示同级），避免被裁切 */
  renderFeedbackExternally?: boolean;
  onReadAlongFeedbackReady?: (feedback: ReadingFeedback) => void;
  onPlayingChange?: (playing: boolean) => void;
}

// 按照chunk边界（语义断句）分段拼音和声调
// 限制每行拼音对应的中文汉字不超过7个
const formatPinyinByChunks = (chunk: Chunk): string[] => {
  // 如果有chunkSegments，按照chunk边界分段，但限制每行不超过7个汉字
  if (chunk.chunkSegments && chunk.chunkSegments.length > 0) {
    const lines: string[] = [];
    let currentLine = '';
    let currentCharCount = 0;
    const maxCharsPerLine = 7; // 每行最多7个汉字
    
    for (const seg of chunk.chunkSegments) {
      const pinyin = seg.pinyin || '';
      const chunkZh = seg.chunkZh || '';
      // 计算这个segment中的汉字数量（排除标点符号和空格）
      const chineseCharCount = (chunkZh.match(/[\u4e00-\u9fff]/g) || []).length;
      
      if (!pinyin.trim()) continue;
      
      // 如果当前行加上这个segment会超过7个汉字，先保存当前行
      if (currentCharCount > 0 && currentCharCount + chineseCharCount > maxCharsPerLine) {
        lines.push(currentLine.trim());
        currentLine = pinyin;
        currentCharCount = chineseCharCount;
      } else {
        // 添加到当前行
        if (currentLine) {
          currentLine += ' ' + pinyin;
        } else {
          currentLine = pinyin;
        }
        currentCharCount += chineseCharCount;
      }
    }
    
    // 添加最后一行
    if (currentLine.trim()) {
      lines.push(currentLine.trim());
    }
    
    return lines.length > 0 ? lines : chunk.chunkSegments.map(seg => seg.pinyin).filter(p => p.trim());
  }
  
  // 如果没有chunkSegments，使用原来的逻辑（按字符数分段）
  const pinyin = chunk.pinyin || '';
  if (!pinyin) return [];
  
  const words = pinyin.split(' ').filter(w => w.trim());
  const lines: string[] = [];
  let currentLine = '';
  const maxCharsPerLine = 10;
  
  for (const word of words) {
    if (currentLine === '') {
      currentLine = word;
    } else if ((currentLine + ' ' + word).length <= maxCharsPerLine) {
      currentLine += ' ' + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  
  if (currentLine) {
    lines.push(currentLine);
  }
  
  return lines.length > 0 ? lines : [pinyin];
};

// 按照chunk边界（语义断句）分段声调
// 限制每行声调对应的中文汉字不超过7个
const formatTonesByChunks = (chunk: Chunk): string[] => {
  // 如果有chunkSegments，按照chunk边界分段，但限制每行不超过7个汉字
  if (chunk.chunkSegments && chunk.chunkSegments.length > 0) {
    const lines: string[] = [];
    let currentLine = '';
    let currentCharCount = 0;
    const maxCharsPerLine = 7; // 每行最多7个汉字
    
    for (let i = 0; i < chunk.chunkSegments.length; i++) {
      const seg = chunk.chunkSegments[i];
      const tones = seg.tones || '';
      const chunkZh = seg.chunkZh || '';
      // 计算这个segment中的汉字数量（排除标点符号和空格）
      const chineseCharCount = (chunkZh.match(/[\u4e00-\u9fff]/g) || []).length;
      
      if (!tones.trim()) continue;
      
      // 如果当前行加上这个segment会超过7个汉字，先保存当前行
      if (currentCharCount > 0 && currentCharCount + chineseCharCount > maxCharsPerLine) {
        lines.push(currentLine.trim());
        currentLine = tones;
        currentCharCount = chineseCharCount;
      } else {
        // 添加到当前行
        if (currentLine) {
          currentLine += '-' + tones;
        } else {
          currentLine = tones;
        }
        currentCharCount += chineseCharCount;
      }
    }
    
    // 添加最后一行
    if (currentLine.trim()) {
      lines.push(currentLine.trim());
    }
    
    return lines.length > 0 ? lines : chunk.chunkSegments.map(seg => seg.tones).filter(t => t.trim());
  }
  
  // 如果没有chunkSegments，使用原来的逻辑（按字符数分段）
  const tones = chunk.tones || '';
  if (!tones) return [];
  
  const parts = tones.split('-').filter(t => t.trim());
  const lines: string[] = [];
  let currentLine = '';
  const maxCharsPerLine = 18;
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    const separator = i === 0 ? '' : '-';
    
    if (currentLine === '') {
      currentLine = part;
    } else if ((currentLine + separator + part).length <= maxCharsPerLine) {
      currentLine += separator + part;
    } else {
      lines.push(currentLine);
      currentLine = part;
    }
  }
  
  if (currentLine) {
    lines.push(currentLine);
  }
  
  return lines.length > 0 ? lines : [tones];
};

// HSK等级显示组件
const HSKLevelIndicator = ({ level }: { level: number }) => {
  const maxLevel = 6;
  const actualLevel = Math.min(Math.max(level, 1), maxLevel); // 限制在1-6之间
  
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxLevel }, (_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${
            i < actualLevel ? 'bg-green-500' : 'bg-gray-200'
          }`}
          title={`HSK ${actualLevel}级`}
        />
      ))}
      <span className="ml-2 text-sm font-medium text-gray-700">
        HSK {actualLevel}
      </span>
    </div>
  );
};

const AnalysisTableInner = (
  { chunks, sentence, audioFile, audioUrl, startSec, endSec, userLevel, uiLanguage = 'ko', renderFeedbackExternally, onReadAlongFeedbackReady, onPlayingChange }: AnalysisTableProps,
  ref: Ref<SingAlongButtonHandle>
) => {
  if (chunks.length === 0) return null;
  
  const chunk = chunks[0]; // 只显示第一个（整句分析）
  
  // 按照chunk边界（语义断句）分段拼音和声调
  const pinyinLines = formatPinyinByChunks(chunk);
  const tonesLines = formatTonesByChunks(chunk);
  
  // 判断是否有音频文件
  const hasAudio = audioFile || (audioUrl && audioUrl.trim() !== '');
  
  return (
    <div className="w-full overflow-x-auto -mx-6 px-6">
      <table className="w-full border-collapse min-w-[600px]">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 w-32">
              난이도 등급
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 min-w-[300px]">
              {songPageTranslations.ko.tryReading}
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 w-48">
              문장 성조 구조
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 w-32">
              오디오
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="px-4 py-4">
              <HSKLevelIndicator level={chunk.hskLevel || 1} />
            </td>
            <td className="px-4 py-4 text-base text-gray-700 min-w-[300px]">
              {/* 跟读按钮 */}
              <div className="flex flex-col items-center gap-2">
                <div className="text-xs text-gray-500">{songPageTranslations.ko.clickToStartReading}</div>
                <SingAlongButton
                  ref={ref}
                  text={chunk.text}
                  userLevel={userLevel || null}
                  uiLanguage="ko"
                  renderFeedbackExternally={renderFeedbackExternally}
                  onFeedbackReady={onReadAlongFeedbackReady}
                  onPlayingChange={onPlayingChange}
                />
              </div>
            </td>
            <td className="px-4 py-4">
              {tonesLines.length > 0 ? (
                <div className="space-y-1">
                  {tonesLines.map((line, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mr-1 mb-1"
                    >
                      {line}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                  —
                </span>
              )}
            </td>
            <td className="px-4 py-4 text-center">
              <div className="flex flex-col items-center gap-2">
                {hasAudio && (
                  <AudioPlayer 
                    audioFile={audioFile || null}
                    audioUrl={audioUrl}
                    startSec={startSec}
                    endSec={endSec}
                    className="w-full px-3 py-1.5"
                  />
                )}
                <TTSButton 
                  text={chunk.text} 
                  className="w-full px-3 py-1.5"
                  label={songPageTranslations.ko.readAloud}
                  uiLanguage="ko"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const AnalysisTable = forwardRef<SingAlongButtonHandle, AnalysisTableProps>(AnalysisTableInner);


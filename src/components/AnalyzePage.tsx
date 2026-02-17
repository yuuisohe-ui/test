import { useState, useEffect } from 'react';
import { SentenceData } from '../types';
import { SentenceView } from './SentenceView';
import { AnalysisTable } from './AnalysisTable';
import { TTSButton } from './TTSButton';

interface AnalyzePageProps {
  data: SentenceData;
}

export const AnalyzePage = ({ data }: AnalyzePageProps) => {
  const [uiLanguage, setUiLanguage] = useState<'zh' | 'ko'>(() => {
    // 从 localStorage 读取保存的语言设置
    const saved = localStorage.getItem('uiLanguage');
    return (saved === 'ko' ? 'ko' : 'zh') as 'zh' | 'ko';
  });

  // 保存语言设置到 localStorage
  useEffect(() => {
    localStorage.setItem('uiLanguage', uiLanguage);
  }, [uiLanguage]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">

        {/* ✅ 调试确认提示（确认页面已正确加载） */}
        <div
          style={{
            padding: 12,
            background: '#ffe08a',
            borderRadius: 8,
            marginBottom: 16,
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          ✅ AnalyzePage 已加载（如果你看见这行，说明页面、端口、数据都对）
        </div>

        {/* 页面标题 */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            中文歌词学习分析
          </h1>
          <p className="text-gray-600">
            点击或悬停词语查看释义，点击朗读按钮听取发音
          </p>
        </div>

        {/* 整句展示区域 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">整句展示</h2>
            <TTSButton text={data.sentence} className="w-10 h-10" />
          </div>
          <SentenceView sentence={data.sentence} tokens={data.tokens} />
        </div>

        {/* 学习分析表 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            学习分析表
          </h2>
          <AnalysisTable chunks={data.chunks} uiLanguage={uiLanguage} />
        </div>
      </div>
    </div>
  );
};

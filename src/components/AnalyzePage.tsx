import React from 'react';
import { SentenceData } from '../types';
import { SentenceView } from './SentenceView';
import { AnalysisTable } from './AnalysisTable';
import { TTSButton } from './TTSButton';

interface AnalyzePageProps {
  data: SentenceData;
}

export const AnalyzePage = ({ data }: AnalyzePageProps) => {
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
            가사로 배우기
          </h1>
          <p className="text-gray-600">
            단어를 클릭하거나 마우스를 올리면 뜻을 볼 수 있고, 낭독 버튼을 누르면 발음을 들을 수 있어요
          </p>
        </div>

        {/* 整句展示区域 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">문장 전체 보기</h2>
            <TTSButton text={data.sentence} className="w-10 h-10" />
          </div>
          <SentenceView sentence={data.sentence} tokens={data.tokens} />
        </div>

        {/* 学习分析表 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            학습 분석표
          </h2>
          <AnalysisTable chunks={data.chunks} uiLanguage="ko" />
        </div>
      </div>
    </div>
  );
};

import { Chunk } from '../types';
import { TTSButton } from './TTSButton';

interface AnalysisTableProps {
  chunks: Chunk[];
}

export const AnalysisTable = ({ chunks }: AnalysisTableProps) => {
  return (
    <div className="w-full overflow-x-auto -mx-6 px-6">
      <table className="w-full border-collapse min-w-[600px]">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              教学语块
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              拼音
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              声调结构
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 w-20">
              朗读
            </th>
          </tr>
        </thead>
        <tbody>
          {chunks.map((chunk, index) => (
            <tr
              key={index}
              className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-4 text-base font-medium text-gray-900">
                {chunk.text}
              </td>
              <td className="px-4 py-4 text-base text-gray-700">
                {chunk.pinyin}
              </td>
              <td className="px-4 py-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                  {chunk.tones}
                </span>
              </td>
              <td className="px-4 py-4 text-center">
                <TTSButton text={chunk.text} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


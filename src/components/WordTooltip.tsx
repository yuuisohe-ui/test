import { Token } from '../types';

interface WordTooltipProps {
  token: Token;
  position: { top: number; left: number };
  onClose: () => void;
  onCreateDialogue?: (word: string) => void;
}

export const WordTooltip = ({ token, position, onClose, onCreateDialogue }: WordTooltipProps) => {
  return (
    <div
      className="fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-xs md:max-w-sm"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        maxWidth: 'calc(100vw - 2rem)',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-900">{token.text}</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="关闭"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div>
          <span className="text-gray-500">中文释义：</span>
          <p className="text-gray-800 mt-1">{token.glossZh}</p>
        </div>
        
        {token.glossKr && (
          <div>
            <span className="text-gray-500">韩语释义：</span>
            <p className="text-gray-800 mt-1">{token.glossKr}</p>
          </div>
        )}
        
        <div className="pt-2 border-t border-gray-100">
          <span className="text-gray-500">例句：</span>
          <p className="text-gray-800 mt-1 italic">{token.example}</p>
        </div>
      </div>
      
      {onCreateDialogue && (
        <div className="pt-3 border-t border-gray-200 mt-3">
          <button
            onClick={() => {
              onCreateDialogue(token.text);
              onClose();
            }}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-semibold"
          >
            💬 대화 만들기
          </button>
        </div>
      )}
    </div>
  );
};


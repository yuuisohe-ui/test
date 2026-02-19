import { useState } from "react";

export const TeacherHelper = () => {
  const [showTeacherDialog, setShowTeacherDialog] = useState(false);
  const [showTeacherHelper, setShowTeacherHelper] = useState(false);
  const [teacherDialogInput, setTeacherDialogInput] = useState("");

  return (
    <>
      {/* 女老师助手 - 固定位置，不可拖动 */}
      <div
        className="fixed bottom-6 right-6 z-40"
        style={{
          cursor: 'pointer',
        }}
      >
        {!showTeacherDialog ? (
          <div className="relative">
            <button
              onClick={() => setShowTeacherDialog(true)}
              onMouseEnter={() => setShowTeacherHelper(true)}
              onMouseLeave={() => setShowTeacherHelper(false)}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-3xl hover:scale-110 select-none"
              aria-label="帮助助手"
              style={{ userSelect: 'none' }}
            >
              👩‍🎓
            </button>
            {showTeacherHelper && (
              <div className="absolute right-0 bottom-full mb-3 bg-white rounded-lg shadow-lg px-3 py-2 border border-gray-200 whitespace-nowrap z-50">
                <div className="text-sm text-gray-700">卡住了吗？我来帮你🌱</div>
                {/* 小箭头 */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-white border-r-8 border-r-transparent"></div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-80 bg-white rounded-lg shadow-xl border-2 border-pink-300 p-4">
            {/* 对话框头部 */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👩‍🎓</span>
                <h4 className="text-sm font-semibold text-gray-800">学习助手</h4>
              </div>
              <button
                onClick={() => {
                  setShowTeacherDialog(false);
                  setTeacherDialogInput("");
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* 对话框内容 */}
            <div className="mb-3 max-h-64 overflow-y-auto space-y-2">
              <div className="bg-gray-50 rounded-lg p-2 text-sm text-gray-700">
                你好！我是你的学习助手，有什么问题可以问我哦 😊
              </div>
            </div>
            
            {/* 输入区域 */}
            <div className="flex gap-2">
              <input
                type="text"
                value={teacherDialogInput}
                onChange={(e) => setTeacherDialogInput(e.target.value)}
                placeholder="输入你的问题..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && teacherDialogInput.trim()) {
                    // 暂时不处理，后续接入AI
                    setTeacherDialogInput("");
                  }
                }}
              />
              <button
                onClick={() => {
                  if (teacherDialogInput.trim()) {
                    // 暂时不处理，后续接入AI
                    setTeacherDialogInput("");
                  }
                }}
                disabled={!teacherDialogInput.trim()}
                className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                发送
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 点击外部关闭对话框 */}
      {showTeacherDialog && (
        <div
          className="fixed inset-0 z-30"
          onClick={(e) => {
            // 如果点击的是对话框外部，关闭对话框
            if (e.target === e.currentTarget) {
              setShowTeacherDialog(false);
              setTeacherDialogInput("");
            }
          }}
        />
      )}
    </>
  );
};


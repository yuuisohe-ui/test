interface DashboardPageProps {
  onBack: () => void;
}

const COLORS = {
  bg: "#faf6f0", brownPale: "#e2cdb8", brown: "#7a4f2d",
  brownLight: "#a06c3e", ink: "#2c1a0e", ink3: "#9c7b60",
};

export default function DashboardPage({ onBack }: DashboardPageProps) {
  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh", fontFamily: "'Noto Sans KR', sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 6vw" }}>
      <button onClick={onBack} style={{ position: "fixed", top: 20, left: "6vw", background: "none", border: `1px solid ${COLORS.brownPale}`, borderRadius: 8, padding: "6px 16px", fontSize: 13, color: COLORS.ink3, cursor: "pointer", fontFamily: "'Noto Sans KR', sans-serif" }}>← 홈</button>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}>📊</div>
        <h2 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 26, color: COLORS.ink, marginBottom: 14 }}>나의 학습 현황</h2>
        <p style={{ fontSize: 14, color: COLORS.ink3, lineHeight: 1.8 }}>로그인 기능 준비 중입니다.<br />곧 학습 기록, 단어 진도, 시간 통계를<br />확인하실 수 있어요.</p>
      </div>
    </div>
  );
}

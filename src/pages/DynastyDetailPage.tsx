import React, { useState, useEffect, useRef } from 'react'
import { DynastyDetail } from '../types/dynasty'

interface Props {
  dynasty: DynastyDetail
  onBack: () => void
}

const C = {
  ink: '#0c0b08', ink2: '#141210',
  paper: '#f0ead8', paper2: '#b8ad98',
  gold: '#c9a84c', goldDim: '#6b5520',
  muted: '#4a4438', muted2: '#7a7060',
  blue: '#3a5f8a'
}

export default function DynastyDetailPage({ dynasty, onBack }: Props) {
  // State
  const [playingVideo, setPlayingVideo] = useState(false)
  const [xiCount, setXiCount] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())
  const [expandedIdiom, setExpandedIdiom] = useState<number | null>(null)
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null)
  const [shareCardTheme, setShareCardTheme] = useState<'shuimo' | 'zhujian' | 'minimal'>('shuimo')
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  
  // Refs
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const elementRefs = useRef<Map<string, HTMLDivElement | null>>(new Map())
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number }>>([])

  // 页面加载时滚动到顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  // 1. Canvas 바람 파티클
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // 初始化60个粒子
    particlesRef.current = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.3
    }))

    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = C.gold
      ctx.lineWidth = 0.5
      ctx.globalAlpha = 0.3

      particlesRef.current.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(p.x + p.vx * 20, p.y + p.vy * 20)
        ctx.stroke()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    elementRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      elementRefs.current.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  // 窗口大小监听
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // TTS
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'zh-CN'
      utterance.rate = 0.7
      utterance.pitch = 1.0
      utterance.volume = 1
      window.speechSynthesis.speak(utterance)
    }
  }

  // Web Audio API 音效
  const playSound = (frequency: number, type: OscillatorType = 'sine', duration: number = 0.4) => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.value = frequency
    oscillator.type = type
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + duration)
  }

  // 兮计数器
  const handleXiCount = (count: number) => {
    setXiCount(count)
    const correctCount = dynasty.lyrics.filter(l => l.chinese.includes('兮')).length
    if (count === correctCount) {
      setShowAnswer(true)
      playSound(660, 'sine', 0.5)
    } else {
      playSound(220, 'sawtooth', 0.3)
    }
  }

  // 翻转卡片
  const toggleCard = (index: number) => {
    const newFlipped = new Set(flippedCards)
    const lyric = dynasty.lyrics[index]
    
    if (newFlipped.has(index)) {
      newFlipped.delete(index)
    } else {
      newFlipped.add(index)
      // 点击时朗读中文歌词，0.7倍速
      if (lyric) {
        speak(lyric.chinese)
      }
    }
    setFlippedCards(newFlipped)
    
    // 保存到 localStorage
    const saved = JSON.parse(localStorage.getItem(`dynasty_${dynasty.id}_cards`) || '[]')
    if (newFlipped.has(index)) {
      if (!saved.includes(index)) saved.push(index)
    } else {
      const idx = saved.indexOf(index)
      if (idx > -1) saved.splice(idx, 1)
    }
    localStorage.setItem(`dynasty_${dynasty.id}_cards`, JSON.stringify(saved))
  }

  // 加载保存的卡片状态
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`dynasty_${dynasty.id}_cards`) || '[]')
    if (saved.length > 0) {
      setFlippedCards(new Set(saved))
    }
  }, [dynasty.id])

  // 翻转所有卡片
  const flipAllCards = () => {
    setFlippedCards(new Set(dynasty.lyrics.map((_, i) => i)))
    playSound(400, 'sawtooth', 0.5)
  }

  // 重置所有卡片
  const resetAllCards = () => {
    setFlippedCards(new Set())
    localStorage.removeItem(`dynasty_${dynasty.id}_cards`)
    playSound(200, 'sawtooth', 0.4)
  }

  // 切换成语展开
  const toggleIdiom = (index: number) => {
    setExpandedIdiom(expandedIdiom === index ? null : index)
  }

  // 处理判断题
  const handleQuizSelect = (option: string) => {
    setSelectedQuiz(option)
    playSound(300, 'sine', 0.3)
  }

  // 防御性检查
  if (!dynasty) {
    return (
      <div style={{ 
        background: '#0c0b08', 
        color: '#c9a84c', 
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Ma Shan Zheng', serif",
        fontSize: '24px',
        letterSpacing: '4px'
      }}>
        데이터를 불러오는 중...
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: C.ink, color: C.paper, position: 'relative' }}>
      {/* Canvas 바람 파티클 */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* 2. 상단 네비게이션 */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: C.ink,
          borderBottom: `1px solid rgba(201,168,76,0.2)`,
          padding: '16px 48px',
          zIndex: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: `1px solid rgba(201,168,76,0.3)`,
            color: C.gold,
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: '14px',
            fontFamily: "'Noto Serif KR', serif"
          }}
        >
          ← 타임라인으로
        </button>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', color: C.muted2 }}>词韵</span>
          <span style={{ fontSize: '10px', color: C.gold }}>·</span>
          <span style={{ fontSize: '10px', color: C.muted2 }}>{dynasty.name}</span>
          <span style={{ fontSize: '10px', color: C.gold }}>·</span>
          <span style={{ fontSize: '10px', color: C.muted2 }}>{dynasty.shareCard.idiom}</span>
        </div>
        <div style={{ width: '120px' }}></div>
      </div>

      {/* 3. Hero 영역 */}
      <div
        style={{
          width: '100%',
          height: '60vh',
          position: 'relative',
          backgroundImage: `url(${dynasty.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(30%) brightness(0.4)',
          marginTop: '60px'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent, ' + C.ink + ')'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            left: '48px',
            right: '48px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
          }}
        >
          <div>
            <div style={{ fontSize: '10px', color: C.gold, letterSpacing: '4px', marginBottom: '16px' }}>
              ✦ {dynasty.name} · {dynasty.period}
            </div>
            <h1
              style={{
                fontFamily: "'Ma Shan Zheng', serif",
                fontSize: '90px',
                color: C.paper,
                margin: 0,
                marginBottom: '8px'
              }}
            >
              {dynasty.shareCard.idiom}
            </h1>
            <div style={{ fontSize: '16px', color: C.paper2, marginBottom: '12px' }}>
              {dynasty.korName}
            </div>
            <div style={{ fontSize: '14px', color: C.muted2 }}>
              {dynasty.shareCard.source}
            </div>
          </div>
          <div style={{ fontSize: '12px', color: C.goldDim, writingMode: 'vertical-rl' }}>
            ↓ 스크롤
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 48px', position: 'relative', zIndex: 2 }}>
        {/* 4. 모듈1: 영상 + 兮 카운터 */}
        {dynasty.videoId && (
          <div
            ref={(el) => elementRefs.current.set('video', el)}
            className="fade-in"
            style={{ marginBottom: '80px' }}
          >
            <p
              style={{
                fontSize: '14px',
                color: C.muted2,
                marginBottom: '24px',
                lineHeight: 1.8,
                fontFamily: "'Noto Serif KR', serif"
              }}
            >
              이 노래를 들으면서 하나만 세어봐. 「兮」가 몇 번 나오는지 — 그게 오늘의 첫 번째 수업이야.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '660px',
                  aspectRatio: '16/9',
                  backgroundColor: '#000',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundImage: `url(https://img.youtube.com/vi/${dynasty.videoId}/hqdefault.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {playingVideo ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${dynasty.videoId}?autoplay=1`}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    allow="autoplay;fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      backgroundColor: 'rgba(0,0,0,0.5)'
                    }}
                    onClick={() => setPlayingVideo(true)}
                  >
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        border: `2px solid ${C.gold}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(201,168,76,0.1)'
                      }}
                    >
                      <svg style={{ width: '40px', height: '40px', fill: C.gold, marginLeft: '4px' }} viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 兮计数器 */}
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '16px', color: C.paper, marginBottom: '16px', fontFamily: "'Noto Serif KR', serif" }}>
                「兮」를 몇 번 들었어요?
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[3, 4, 5, 6, 7, 8].map((num) => {
                  const correctCount = dynasty.lyrics.filter(l => l.chinese.includes('兮')).length
                  return (
                    <button
                      key={num}
                      onClick={() => handleXiCount(num)}
                      style={{
                        padding: '12px 24px',
                        border: `1px solid rgba(201,168,76,0.3)`,
                        backgroundColor: xiCount === num && num === correctCount ? '#4ade80' : 'transparent',
                        color: xiCount === num && num === correctCount ? C.ink : C.gold,
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontFamily: "'Noto Serif SC', serif",
                        transition: 'all 0.3s'
                      }}
                    >
                      {num}
                    </button>
                  )
                })}
              </div>
              {showAnswer && (
                <div
                  style={{
                    marginTop: '24px',
                    padding: '20px',
                    backgroundColor: 'rgba(74,222,128,0.1)',
                    border: '1px solid rgba(74,222,128,0.3)',
                    borderRadius: '8px',
                    maxWidth: '600px',
                    margin: '24px auto 0'
                  }}
                >
                  <p style={{ fontSize: '14px', color: C.paper, lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif", margin: 0 }}>
                    정답은 {dynasty.lyrics.filter(l => l.chinese.includes('兮')).length}번! 「兮」(xī)는 고대 감탄사, ~구나/~아 에 해당. 楚辞·詩經에서 대량 사용.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 5. 모듈2: 가사 뒤집기 카드 */}
        {dynasty.lyrics && dynasty.lyrics.length > 0 && (
          <div
            ref={(el) => elementRefs.current.set('cards', el)}
            className="fade-in"
            style={{ marginBottom: '80px' }}
          >
            <p style={{ fontSize: '14px', color: C.muted2, marginBottom: '24px', lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif" }}>
              각 가사 카드를 클릭하면 뒤집혀. 拼音·한국어·숨겨진 이야기가 나와.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '24px' }}>
              {dynasty.lyrics.map((lyric, index) => (
                <div
                  key={index}
                  onClick={() => toggleCard(index)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '4/3',
                    cursor: 'pointer',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s',
                    transform: flippedCards.has(index) ? 'rotateX(180deg)' : 'rotateX(0deg)'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backfaceVisibility: 'hidden',
                      backgroundColor: C.ink2,
                      border: `1px solid rgba(201,168,76,0.3)`,
                      borderRadius: '8px',
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <p style={{ fontSize: '24px', color: C.paper, marginBottom: '12px', fontFamily: "'Noto Serif SC', serif" }}>
                      {lyric.chinese}
                    </p>
                    {lyric.tag && (
                      <span style={{ fontSize: '10px', color: C.gold, border: `1px solid rgba(201,168,76,0.3)`, padding: '2px 8px', marginBottom: '8px' }}>
                        {lyric.tag}
                      </span>
                    )}
                    <p style={{ fontSize: '12px', color: C.goldDim, marginTop: '8px' }}>클릭 → 뒤집기</p>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backfaceVisibility: 'hidden',
                      backgroundColor: C.ink2,
                      border: `1px solid rgba(201,168,76,0.3)`,
                      borderRadius: '8px',
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      transform: 'rotateX(180deg)'
                    }}
                  >
                    <p style={{ fontSize: '14px', color: C.gold, marginBottom: '8px', fontFamily: "'Noto Serif SC', serif" }}>
                      {lyric.pinyin}
                    </p>
                    <p style={{ fontSize: '14px', color: C.paper, marginBottom: '12px', fontFamily: "'Noto Serif KR', serif" }}>
                      {lyric.korean}
                    </p>
                    {lyric.warning && (
                      <p style={{ fontSize: '11px', color: '#d97706', marginBottom: '8px', fontFamily: "'Noto Serif KR', serif" }}>
                        ⚠️ {lyric.warning}
                      </p>
                    )}
                    <p style={{ fontSize: '12px', color: C.muted2, lineHeight: 1.6, fontFamily: "'Noto Serif KR', serif" }}>
                      {lyric.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                onClick={flipAllCards}
                style={{
                  padding: '10px 20px',
                  border: `1px solid rgba(201,168,76,0.3)`,
                  backgroundColor: 'transparent',
                  color: C.gold,
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontFamily: "'Noto Serif KR', serif"
                }}
              >
                모두 뒤집기
              </button>
              <button
                onClick={resetAllCards}
                style={{
                  padding: '10px 20px',
                  border: `1px solid rgba(201,168,76,0.3)`,
                  backgroundColor: 'transparent',
                  color: C.gold,
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontFamily: "'Noto Serif KR', serif"
                }}
              >
                되돌리기
              </button>
            </div>
          </div>
        )}

        {/* 6. 모듈3: SVG 역사 지도 */}
        <div
          ref={(el) => elementRefs.current.set('map', el)}
          className="fade-in"
          style={{ marginBottom: '80px' }}
        >
          {dynasty.id === '3' ? (
            <div>
              <h2 style={{ fontSize: '24px', color: C.gold, marginBottom: '32px', fontFamily: "'Ma Shan Zheng', serif" }}>
                历史地图
              </h2>
              <div style={{ backgroundColor: C.ink2, border: `1px solid rgba(201,168,76,0.3)`, borderRadius: '8px', padding: '32px' }}>
                <svg width="100%" height="400" viewBox="0 0 800 400" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  {/* 背景 */}
                  <rect width="800" height="400" fill={C.ink} />
                  
                  {/* 燕国 */}
                  <rect x="100" y="150" width="200" height="100" fill="rgba(201,168,76,0.2)" stroke={C.gold} strokeWidth="2" />
                  <text x="200" y="200" fill={C.gold} fontSize="20" fontFamily="'Ma Shan Zheng', serif" textAnchor="middle">燕</text>
                  
                  {/* 秦国 */}
                  <rect x="500" y="100" width="200" height="150" fill="rgba(201,168,76,0.3)" stroke={C.gold} strokeWidth="2" />
                  <text x="600" y="175" fill={C.gold} fontSize="20" fontFamily="'Ma Shan Zheng', serif" textAnchor="middle">秦</text>
                  
                  {/* 易水 */}
                  <path d="M 300 200 Q 400 150 500 200" stroke={C.blue} strokeWidth="3" fill="none" opacity="0.6" />
                  <text x="400" y="140" fill={C.blue} fontSize="14" fontFamily="'Noto Serif KR', serif" textAnchor="middle">易水</text>
                  
                  {/* 箭头 */}
                  <path d="M 300 200 L 350 190 L 340 200 L 350 210 Z" fill={C.gold} />
                  <text x="350" y="185" fill={C.paper} fontSize="12" fontFamily="'Noto Serif KR', serif">荆轲</text>
                </svg>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '64px', color: C.muted2 }}>
              <p style={{ fontSize: '16px', fontFamily: "'Noto Serif KR', serif" }}>준비 중</p>
            </div>
          )}
        </div>

        {/* 7. 모듈4: 荆轲 이야기 타임라인 */}
        {dynasty.storyTimeline && dynasty.storyTimeline.length > 0 && (
          <div
            ref={(el) => elementRefs.current.set('timeline', el)}
            className="fade-in"
            style={{ marginBottom: '80px' }}
          >
            <h2 style={{ fontSize: '24px', color: C.gold, marginBottom: '32px', fontFamily: "'Ma Shan Zheng', serif" }}>
              历史故事
            </h2>
            <div style={{ position: 'relative', paddingLeft: '32px' }}>
              <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '2px', backgroundColor: C.gold, opacity: 0.3 }} />
              {dynasty.storyTimeline.map((item, index) => (
                <div key={index} style={{ position: 'relative', marginBottom: '48px' }}>
                  <div style={{ position: 'absolute', left: '-40px', top: '4px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: C.gold, border: `2px solid ${C.ink}` }} />
                  <div style={{ fontSize: '12px', color: C.gold, marginBottom: '8px', fontFamily: "'Noto Serif KR', serif" }}>
                    {item.year}
                  </div>
                  <h3 style={{ fontSize: '18px', color: C.paper, marginBottom: '8px', fontFamily: "'Ma Shan Zheng', serif" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: C.paper2, lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif" }}>
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. 모듈5: 성어 아코디언 */}
        {dynasty.idioms && dynasty.idioms.length > 0 && (
          <div
            ref={(el) => elementRefs.current.set('idioms', el)}
            className="fade-in"
            style={{ marginBottom: '80px' }}
          >
            <h2 style={{ fontSize: '24px', color: C.gold, marginBottom: '32px', fontFamily: "'Ma Shan Zheng', serif" }}>
              成语学习
            </h2>
            {dynasty.idioms.map((idiom, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '16px',
                  border: `1px solid rgba(201,168,76,0.3)`,
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: C.ink2
                }}
              >
                <button
                  onClick={() => toggleIdiom(index)}
                  style={{
                    width: '100%',
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    color: C.paper,
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '10px', color: C.gold, marginRight: '12px', fontFamily: "'Noto Serif KR', serif" }}>
                      {idiom.level}
                    </span>
                    <span style={{ fontSize: '20px', fontFamily: "'Ma Shan Zheng', serif", marginRight: '12px' }}>
                      {idiom.chinese}
                    </span>
                    <span style={{ fontSize: '14px', color: C.paper2, fontFamily: "'Noto Serif KR', serif" }}>
                      {idiom.korean}
                    </span>
                  </div>
                  <span style={{ fontSize: '20px', color: C.gold }}>
                    {expandedIdiom === index ? '−' : '+'}
                  </span>
                </button>
                {expandedIdiom === index && (
                  <div style={{ padding: '0 20px 20px 20px', borderTop: `1px solid rgba(201,168,76,0.2)` }}>
                    <p style={{ fontSize: '14px', color: C.paper2, marginBottom: '16px', lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif" }}>
                      <strong style={{ color: C.gold }}>来源:</strong> {idiom.origin}
                    </p>
                    {idiom.examples && idiom.examples.length > 0 && (
                      <div style={{ marginBottom: '16px' }}>
                        <strong style={{ color: C.gold, fontSize: '14px', fontFamily: "'Noto Serif KR', serif" }}>例句:</strong>
                        {idiom.examples.map((ex, i) => (
                          <div key={i} style={{ marginTop: '8px', paddingLeft: '16px' }}>
                            <p style={{ fontSize: '14px', color: C.paper, fontFamily: "'Noto Serif SC', serif" }}>{ex.chinese}</p>
                            <p style={{ fontSize: '12px', color: C.paper2, fontFamily: "'Noto Serif KR', serif" }}>{ex.korean}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {idiom.specialNote && (
                      <p style={{ fontSize: '12px', color: C.gold, padding: '12px', backgroundColor: 'rgba(201,168,76,0.1)', borderRadius: '4px', fontFamily: "'Noto Serif KR', serif" }}>
                        ✦ {idiom.specialNote}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 9. 모듈6: 한국인 학습자 모듈 */}
        {dynasty.hanjaComparisons && dynasty.hanjaComparisons.length > 0 && (
          <div
            ref={(el) => elementRefs.current.set('hanja', el)}
            className="fade-in"
            style={{ marginBottom: '80px' }}
          >
            <h2 style={{ fontSize: '24px', color: C.gold, marginBottom: '32px', fontFamily: "'Ma Shan Zheng', serif" }}>
              汉字对比
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {dynasty.hanjaComparisons.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: '24px',
                    border: `1px solid rgba(201,168,76,0.3)`,
                    borderRadius: '8px',
                    backgroundColor: C.ink2
                  }}
                >
                  <div style={{ fontSize: '18px', color: C.gold, marginBottom: '8px', fontFamily: "'Ma Shan Zheng', serif" }}>
                    {item.chinese}
                  </div>
                  <div style={{ fontSize: '14px', color: C.paper, marginBottom: '12px', fontFamily: "'Noto Serif KR', serif" }}>
                    {item.korean}
                  </div>
                  <div style={{ fontSize: '12px', color: C.paper2, marginBottom: '8px', fontFamily: "'Noto Serif KR', serif" }}>
                    {item.example}
                  </div>
                  <div style={{ fontSize: '11px', color: C.muted2, fontFamily: "'Noto Serif KR', serif" }}>
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
            {dynasty.koreanParallel && (
              <div style={{ marginTop: '32px', padding: '24px', border: `1px solid rgba(201,168,76,0.3)`, borderRadius: '8px', backgroundColor: C.ink2 }}>
                <h3 style={{ fontSize: '18px', color: C.gold, marginBottom: '12px', fontFamily: "'Ma Shan Zheng', serif" }}>
                  {dynasty.koreanParallel.title}
                </h3>
                <p style={{ fontSize: '14px', color: C.paper2, lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif" }}>
                  {dynasty.koreanParallel.content}
                </p>
              </div>
            )}
            {dynasty.emotionNote && (
              <div style={{ marginTop: '24px', padding: '20px', backgroundColor: 'rgba(201,168,76,0.1)', borderRadius: '8px' }}>
                <p style={{ fontSize: '14px', color: C.paper, lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif" }}>
                  {dynasty.emotionNote}
                </p>
              </div>
            )}
          </div>
        )}

        {/* 10. 모듈7: 판단 퀴즈 */}
        {dynasty.quiz && (
          <div
            ref={(el) => elementRefs.current.set('quiz', el)}
            className="fade-in"
            style={{ marginBottom: '80px' }}
          >
            <h2 style={{ fontSize: '24px', color: C.gold, marginBottom: '32px', fontFamily: "'Ma Shan Zheng', serif" }}>
              判断题
            </h2>
            <div style={{ padding: '32px', border: `1px solid rgba(201,168,76,0.3)`, borderRadius: '8px', backgroundColor: C.ink2 }}>
              <p style={{ fontSize: '16px', color: C.paper, marginBottom: '24px', lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif", whiteSpace: 'pre-line' }}>
                {dynasty.quiz.question}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {dynasty.quiz.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuizSelect(option)}
                    style={{
                      padding: '16px',
                      border: `1px solid ${selectedQuiz === option ? C.gold : 'rgba(201,168,76,0.3)'}`,
                      backgroundColor: selectedQuiz === option ? 'rgba(201,168,76,0.1)' : 'transparent',
                      color: C.paper,
                      cursor: 'pointer',
                      fontSize: '14px',
                      textAlign: 'left',
                      fontFamily: "'Noto Serif KR', serif",
                      transition: 'all 0.3s'
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {selectedQuiz && (() => {
                const optionLetter = selectedQuiz.charAt(0)
                const result = dynasty.quiz.results.find(r => 
                  (optionLetter === 'A' && r.chosen.includes('A를')) ||
                  (optionLetter === 'B' && r.chosen.includes('B를')) ||
                  (optionLetter === 'C' && r.chosen.includes('C를')) ||
                  (optionLetter === 'D' && r.chosen.includes('D를'))
                ) || dynasty.quiz.results[0]
                
                return (
                  <div style={{ marginTop: '24px', padding: '20px', backgroundColor: 'rgba(201,168,76,0.1)', borderRadius: '8px' }}>
                    <p style={{ fontSize: '14px', color: C.gold, marginBottom: '12px', fontFamily: "'Noto Serif KR', serif" }}>
                      {result.chosen}
                    </p>
                    <p style={{ fontSize: '14px', color: C.paper, marginBottom: '12px', lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif" }}>
                      {result.interpretation}
                    </p>
                    <p style={{ fontSize: '12px', color: C.paper2, fontStyle: 'italic', fontFamily: "'Noto Serif KR', serif" }}>
                      {result.historicalQuote}
                    </p>
                  </div>
                )
              })()}
            </div>
          </div>
        )}

        {/* 11. 모듈8: 기억 앵커 */}
        {dynasty.memoryAnchor && (
          <div
            ref={(el) => elementRefs.current.set('anchor', el)}
            className="fade-in"
            style={{ marginBottom: '80px' }}
          >
            <h2 style={{ fontSize: '24px', color: C.gold, marginBottom: '32px', fontFamily: "'Ma Shan Zheng', serif" }}>
              记忆锚点
            </h2>
            <div style={{ padding: '48px', border: `2px solid ${C.gold}`, borderRadius: '8px', backgroundColor: C.ink2, textAlign: 'center' }}>
              <div style={{ fontSize: '48px', color: C.gold, marginBottom: '16px', fontFamily: "'Ma Shan Zheng', serif" }}>
                {dynasty.memoryAnchor.chinese}
              </div>
              <p style={{ fontSize: '16px', color: C.paper, marginBottom: '12px', lineHeight: 1.8, fontFamily: "'Noto Serif KR', serif", whiteSpace: 'pre-line' }}>
                {dynasty.memoryAnchor.text}
              </p>
              <p style={{ fontSize: '12px', color: C.paper2, fontFamily: "'Noto Serif KR', serif", whiteSpace: 'pre-line' }}>
                {dynasty.memoryAnchor.subText}
              </p>
            </div>
          </div>
        )}

        {/* 12. 모듈9: 공유 카드 3가지 테마 */}
        {dynasty.shareCard && (
          <div
            ref={(el) => elementRefs.current.set('share', el)}
            className="fade-in"
            style={{ marginBottom: '80px' }}
          >
            <h2 style={{ fontSize: '24px', color: C.gold, marginBottom: '32px', fontFamily: "'Ma Shan Zheng', serif" }}>
              分享卡片
            </h2>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', justifyContent: 'center' }}>
              {(['shuimo', 'zhujian', 'minimal'] as const).map((theme) => (
                <button
                  key={theme}
                  onClick={() => setShareCardTheme(theme)}
                  style={{
                    padding: '8px 16px',
                    border: `1px solid ${shareCardTheme === theme ? C.gold : 'rgba(201,168,76,0.3)'}`,
                    backgroundColor: shareCardTheme === theme ? 'rgba(201,168,76,0.1)' : 'transparent',
                    color: C.gold,
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontFamily: "'Noto Serif KR', serif"
                  }}
                >
                  {theme === 'shuimo' ? '水墨' : theme === 'zhujian' ? '竹简' : '极简'}
                </button>
              ))}
            </div>
            <div
              style={{
                padding: '48px',
                border: `1px solid rgba(201,168,76,0.3)`,
                borderRadius: '8px',
                backgroundColor: shareCardTheme === 'shuimo' ? C.ink : shareCardTheme === 'zhujian' ? '#1a1815' : C.ink2,
                backgroundImage: shareCardTheme === 'shuimo' ? 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.1) 0%, transparent 50%)' : 'none',
                textAlign: 'center',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              <div style={{ fontSize: '10px', color: C.muted2, marginBottom: '8px', fontFamily: "'Noto Serif KR', serif" }}>
                {dynasty.shareCard.dynasty}
              </div>
              <div style={{ fontSize: '32px', color: C.gold, marginBottom: '16px', fontFamily: "'Ma Shan Zheng', serif" }}>
                {dynasty.shareCard.idiom}
              </div>
              <div style={{ fontSize: '14px', color: C.paper2, marginBottom: '24px', fontFamily: "'Noto Serif SC', serif" }}>
                {dynasty.shareCard.pinyin}
              </div>
              {dynasty.shareCard.quote.map((line, i) => (
                <p key={i} style={{ fontSize: '16px', color: C.paper, marginBottom: '8px', fontFamily: "'Noto Serif KR', serif" }}>
                  {line}
                </p>
              ))}
              <div style={{ fontSize: '12px', color: C.muted2, marginTop: '24px', fontFamily: "'Noto Serif KR', serif" }}>
                — {dynasty.shareCard.source}
              </div>
            </div>
          </div>
        )}

        {/* 13. 모듈10: 다음 시대 */}
        {dynasty.nextDynasty && (
          <div
            ref={(el) => elementRefs.current.set('next', el)}
            className="fade-in"
            style={{ marginBottom: '80px', textAlign: 'center' }}
          >
            <h2 style={{ fontSize: '24px', color: C.gold, marginBottom: '16px', fontFamily: "'Ma Shan Zheng', serif" }}>
              下一个时代
            </h2>
            <p style={{ fontSize: '16px', color: C.paper, marginBottom: '8px', fontFamily: "'Ma Shan Zheng', serif" }}>
              {dynasty.nextDynasty.name}
            </p>
            <p style={{ fontSize: '14px', color: C.paper2, fontFamily: "'Noto Serif KR', serif" }}>
              {dynasty.nextDynasty.hint}
            </p>
          </div>
        )}
      </div>

    </div>
  )
}

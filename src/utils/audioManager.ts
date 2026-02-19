class AudioManager {
  private currentAudio: HTMLAudioElement | null = null;
  private currentTTS: SpeechSynthesisUtterance | null = null;
  private onAudioChange: ((audio: HTMLAudioElement | null) => void) | null = null;

  // 注册音频变化回调
  setOnAudioChange(callback: (audio: HTMLAudioElement | null) => void) {
    this.onAudioChange = callback;
  }

  // 播放音频（会停止之前的音频）
  playAudio(audio: HTMLAudioElement) {
    // 停止当前音频
    this.stopCurrentAudio();
    // 停止当前TTS
    this.stopCurrentTTS();
    
    this.currentAudio = audio;
    if (this.onAudioChange) {
      this.onAudioChange(audio);
    }
    audio.play();
  }

  // 停止当前音频
  stopCurrentAudio() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
      if (this.onAudioChange) {
        this.onAudioChange(null);
      }
    }
  }

  // 暂停当前音频
  pauseCurrentAudio() {
    if (this.currentAudio) {
      this.currentAudio.pause();
    }
  }

  // 继续播放当前音频
  resumeCurrentAudio() {
    if (this.currentAudio) {
      this.currentAudio.play();
    }
  }

  // 获取当前音频
  getCurrentAudio(): HTMLAudioElement | null {
    return this.currentAudio;
  }

  // 检查是否是当前音频
  isCurrentAudio(audio: HTMLAudioElement): boolean {
    return this.currentAudio === audio;
  }

  // 停止当前TTS
  stopCurrentTTS() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.currentTTS = null;
  }

  // 播放TTS（会停止之前的音频和TTS）
  playTTS(utterance: SpeechSynthesisUtterance) {
    // 停止当前音频
    this.stopCurrentAudio();
    // 停止之前的TTS
    this.stopCurrentTTS();
    
    this.currentTTS = utterance;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.speak(utterance);
    }
  }

  // 暂停TTS
  pauseTTS() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }
  }

  // 继续TTS
  resumeTTS() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.resume();
    }
  }

  // 检查TTS是否正在播放
  isTTSSpeaking(): boolean {
    if ('speechSynthesis' in window) {
      return window.speechSynthesis.speaking;
    }
    return false;
  }

  // 检查TTS是否暂停
  isTTSPaused(): boolean {
    if ('speechSynthesis' in window) {
      return window.speechSynthesis.paused;
    }
    return false;
  }
}

export const audioManager = new AudioManager();





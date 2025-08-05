export const playAudio = async (audioPath: string, volume: number = 0.3, startTime: number = 0): Promise<void> => {
  try {
    const audio = new Audio(audioPath);
    audio.volume = volume;
    audio.currentTime = startTime;
    await audio.play();
  } catch (error) {
    // Fallback: create a simple beep if audio fails
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
    oscillator.frequency.setValueAtTime(600, audioCtx.currentTime + 0.1);
    oscillator.frequency.setValueAtTime(400, audioCtx.currentTime + 0.2);
    
    gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    
    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 0.3);
  }
};
import { useState, useRef, useEffect } from 'react';
import { RefreshCw, Zap } from 'lucide-react';

export default function ReactionGame() {
  const [gameState, setGameState] = useState<'idle' | 'waiting' | 'ready' | 'finished'>('idle');
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [message, setMessage] = useState('Click to Start');
  const startTimeRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    if (gameState === 'idle' || gameState === 'finished') {
      startGame();
    } else if (gameState === 'waiting') {
      // Clicked too early
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setGameState('finished');
      setMessage('Too Early! Click to Try Again');
      setReactionTime(null);
    } else if (gameState === 'ready') {
      // Clicked on time
      const endTime = Date.now();
      const timeTaken = endTime - startTimeRef.current;
      setReactionTime(timeTaken);
      setGameState('finished');
      setMessage(`Reaction Time: ${timeTaken}ms`);
    }
  };

  const startGame = () => {
    setGameState('waiting');
    setMessage('Wait for Green...');
    setReactionTime(null);
    
    const randomDelay = Math.floor(Math.random() * 3000) + 1000; // 1s to 4s
    
    timeoutRef.current = setTimeout(() => {
      setGameState('ready');
      setMessage('CLICK NOW!');
      startTimeRef.current = Date.now();
    }, randomDelay);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  let bgColorClass = 'bg-black/60 border-orange-500/30';
  if (gameState === 'waiting') bgColorClass = 'bg-red-900/80 border-red-500 shadow-[inset_0_0_50px_rgba(239,68,68,0.3)]';
  if (gameState === 'ready') bgColorClass = 'bg-green-600/90 border-green-400 shadow-[inset_0_0_50px_rgba(74,222,128,0.5)]';

  return (
    <div className="max-w-2xl mx-auto glass-panel p-8 rounded-3xl relative group">
      <div className="absolute inset-0 bg-orange-900/10 rounded-3xl pointer-events-none group-hover:bg-orange-900/20 transition-colors" />
      
      <div className="flex justify-between items-center mb-6 font-mono">
        <div className="text-orange-400 flex items-center gap-2">
          <Zap className="w-5 h-5" />
          <span className="opacity-60">BEST:</span>
          <span className="text-2xl font-bold neon-text">{reactionTime ? `${reactionTime}ms` : '---'}</span>
        </div>
      </div>

      <div 
        onClick={handleClick}
        className={`relative aspect-[2/1] w-full max-w-[500px] mx-auto border-2 rounded-xl overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,1)] p-4 flex flex-col items-center justify-center cursor-pointer transition-colors duration-200 select-none ${bgColorClass}`}
      >
        <h3 className="font-gaming text-3xl md:text-5xl text-white uppercase text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] pointer-events-none">
          {message}
        </h3>
        {gameState === 'finished' && reactionTime && (
          <p className="mt-4 font-mono text-white/70 uppercase">
            {reactionTime < 200 ? 'Inhuman Reaction!' : reactionTime < 300 ? 'Great Reflexes!' : 'You can do better!'}
          </p>
        )}
        {gameState === 'idle' && (
          <Zap className="w-16 h-16 text-orange-500 mt-6 animate-pulse" />
        )}
        {gameState === 'finished' && (
          <div className="mt-6 flex items-center gap-2 text-white/50 font-mono text-sm uppercase">
            <RefreshCw className="w-4 h-4" /> Click to retry
          </div>
        )}
      </div>

      <div className="mt-8 text-center font-mono text-xs text-orange-400/50 uppercase tracking-widest">
        Test your cyber reflexes
      </div>
    </div>
  );
}

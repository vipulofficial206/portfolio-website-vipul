import { useState, useEffect, useCallback, useRef } from 'react';
import { Trophy, RefreshCw, Gamepad2 } from 'lucide-react';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [[10, 10]];
const INITIAL_FOOD = [5, 5];
const INITIAL_DIRECTION = [0, -1];
const SPEED = 120;

export default function Arcade() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const directionRef = useRef(direction);

  const moveSnake = useCallback(() => {
    if (!isPlaying || gameOver) return;

    setSnake((prev) => {
      const newHead = [
        prev[0][0] + directionRef.current[0],
        prev[0][1] + directionRef.current[1]
      ];

      // Wall collision
      if (
        newHead[0] < 0 || newHead[0] >= GRID_SIZE ||
        newHead[1] < 0 || newHead[1] >= GRID_SIZE
      ) {
        setGameOver(true);
        setIsPlaying(false);
        return prev;
      }

      // Self collision
      if (prev.some(segment => segment[0] === newHead[0] && segment[1] === newHead[1])) {
        setGameOver(true);
        setIsPlaying(false);
        return prev;
      }

      const newSnake = [newHead, ...prev];

      // Food collision
      if (newHead[0] === food[0] && newHead[1] === food[1]) {
        setScore(s => {
          const newScore = s + 10;
          if (newScore > highScore) setHighScore(newScore);
          return newScore;
        });
        setFood([
          Math.floor(Math.random() * GRID_SIZE),
          Math.floor(Math.random() * GRID_SIZE)
        ]);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [isPlaying, gameOver, food, highScore]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent scrolling when playing
      if (isPlaying && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          if (directionRef.current[1] !== 1) directionRef.current = [0, -1];
          break;
        case 'ArrowDown':
        case 's':
          if (directionRef.current[1] !== -1) directionRef.current = [0, 1];
          break;
        case 'ArrowLeft':
        case 'a':
          if (directionRef.current[0] !== 1) directionRef.current = [-1, 0];
          break;
        case 'ArrowRight':
        case 'd':
          if (directionRef.current[0] !== -1) directionRef.current = [1, 0];
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  useEffect(() => {
    const gameLoop = setInterval(moveSnake, SPEED);
    return () => clearInterval(gameLoop);
  }, [moveSnake]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    directionRef.current = INITIAL_DIRECTION;
    setFood(INITIAL_FOOD);
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
  };

  return (
    <section id="arcade" className="py-24 md:py-32 border-t border-cyan-900/30 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 font-gaming uppercase hover-glitch text-white">Dev Arcade</h2>
        <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest flex items-center gap-2">
          <Gamepad2 className="w-4 h-4" /> Cyber Snake
        </p>
      </div>

      <div className="max-w-2xl mx-auto glass-panel p-8 rounded-3xl relative group">
        <div className="absolute inset-0 bg-cyan-900/10 rounded-3xl pointer-events-none group-hover:bg-cyan-900/20 transition-colors" />
        
        <div className="flex justify-between items-center mb-6 font-mono">
          <div className="text-cyan-400 flex items-center gap-2">
            <span className="opacity-60">SCORE:</span>
            <span className="text-2xl font-bold neon-text">{score}</span>
          </div>
          <div className="text-fuchsia-400 flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            <span className="opacity-60">HIGH:</span>
            <span className="text-2xl font-bold neon-text">{highScore}</span>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-[400px] mx-auto bg-black/60 border-2 border-cyan-500/30 rounded-xl overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,1)]">
          {/* Game Grid overlay */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#06b6d4_1px,transparent_1px),linear-gradient(90deg,#06b6d4_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          {isPlaying || gameOver ? (
            <>
              {/* Food */}
              <div 
                className="absolute bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.8)] rounded-sm animate-pulse"
                style={{
                  width: `${100 / GRID_SIZE}%`,
                  height: `${100 / GRID_SIZE}%`,
                  left: `${(food[0] / GRID_SIZE) * 100}%`,
                  top: `${(food[1] / GRID_SIZE) * 100}%`
                }}
              />
              {/* Snake */}
              {snake.map((segment, i) => (
                <div 
                  key={i}
                  className={`absolute rounded-sm ${i === 0 ? 'bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)] z-10' : 'bg-cyan-600/80'}`}
                  style={{
                    width: `${100 / GRID_SIZE}%`,
                    height: `${100 / GRID_SIZE}%`,
                    left: `${(segment[0] / GRID_SIZE) * 100}%`,
                    top: `${(segment[1] / GRID_SIZE) * 100}%`,
                    transform: 'scale(0.9)'
                  }}
                />
              ))}
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-20">
              <Gamepad2 className="w-16 h-16 text-cyan-500 mb-4 animate-bounce" />
              <button 
                onClick={resetGame}
                className="px-6 py-3 font-gaming bg-cyan-500 text-black uppercase tracking-widest font-bold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.5)] rounded"
              >
                Insert Coin
              </button>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-950/80 backdrop-blur-sm z-20 text-center p-6">
              <h3 className="font-gaming text-3xl text-red-500 mb-2 uppercase animate-pulse">Game Over</h3>
              <p className="font-mono text-red-300 mb-6 uppercase">Final Score: {score}</p>
              <button 
                onClick={resetGame}
                className="flex items-center gap-2 px-6 py-3 font-gaming bg-red-500 text-black uppercase tracking-widest font-bold hover:bg-red-400 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.5)] rounded"
              >
                <RefreshCw className="w-5 h-5" /> Retry
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 text-center font-mono text-xs text-cyan-400/50 uppercase tracking-widest">
          Use WASD or Arrow Keys to move
        </div>
      </div>
    </section>
  );
}

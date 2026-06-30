import { useState, useEffect } from 'react';
import { RefreshCw, Grid3x3 } from 'lucide-react';

export default function TicTacToeGame() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(square => square !== null);

  useEffect(() => {
    if (!isPlaying || winner || isDraw || isXNext) return;

    // Bot's turn (O)
    const timer = setTimeout(() => {
      const emptyIndices = board.map((sq, i) => sq === null ? i : null).filter(i => i !== null) as number[];
      if (emptyIndices.length > 0) {
        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        const newBoard = [...board];
        newBoard[randomIndex] = 'O';
        setBoard(newBoard);
        setIsXNext(true);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [isXNext, board, isPlaying, winner, isDraw]);

  const handleClick = (index: number) => {
    if (!isPlaying || board[index] || winner || !isXNext) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsXNext(false);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setIsPlaying(true);
  };

  return (
    <div className="max-w-2xl mx-auto glass-panel p-4 sm:p-8 rounded-3xl relative group">
      <div className="absolute inset-0 bg-yellow-900/10 rounded-3xl pointer-events-none group-hover:bg-yellow-900/20 transition-colors" />
      
      <div className="flex justify-between items-center mb-6 font-mono">
        <div className="text-yellow-400 flex items-center gap-2">
          <Grid3x3 className="w-5 h-5" />
          <span className="opacity-60">TURN:</span>
          <span className="text-xl font-bold neon-text">{isXNext ? 'YOUR TURN' : 'BOT THINKING...'}</span>
        </div>
      </div>

      <div className="relative aspect-square w-full max-w-[400px] mx-auto bg-black/60 border-2 border-yellow-500/30 rounded-xl overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,1)] p-4">
        {isPlaying || winner || isDraw ? (
          <div className="grid grid-cols-3 grid-rows-3 gap-2 h-full">
            {board.map((square, index) => (
              <div 
                key={index}
                onClick={() => handleClick(index)}
                className="relative flex items-center justify-center text-5xl md:text-6xl font-gaming rounded-lg cursor-pointer transition-all duration-300 bg-yellow-950/40 border-2 border-yellow-900/50 hover:bg-yellow-900/60"
              >
                <span className={square === 'X' ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]' : 'text-fuchsia-400 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]'}>
                  {square}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-20">
            <Grid3x3 className="w-16 h-16 text-yellow-500 mb-4 animate-pulse" />
            <button 
              onClick={resetGame}
              className="px-6 py-3 font-gaming bg-yellow-500 text-black uppercase tracking-widest font-bold hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.5)] rounded"
            >
              Insert Coin
            </button>
          </div>
        )}

        {(winner || isDraw) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-20 text-center p-6">
            <h3 className={`font-gaming text-3xl mb-2 uppercase animate-pulse ${winner === 'X' ? 'text-cyan-400' : winner === 'O' ? 'text-fuchsia-400' : 'text-yellow-500'}`}>
              {winner === 'X' ? 'You Won!' : winner === 'O' ? 'Bot Wins!' : 'Draw!'}
            </h3>
            <button 
              onClick={resetGame}
              className="mt-6 flex items-center gap-2 px-6 py-3 font-gaming bg-yellow-500 text-black uppercase tracking-widest font-bold hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.5)] rounded"
            >
              <RefreshCw className="w-5 h-5" /> Play Again
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 text-center font-mono text-xs text-yellow-400/50 uppercase tracking-widest">
        Classic Cyber Tic-Tac-Toe
      </div>
    </div>
  );
}

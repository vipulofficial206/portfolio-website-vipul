import { useState } from 'react';
import { RefreshCw, BrainCircuit } from 'lucide-react';

const EMOJIS = ['🚀', '💻', '👾', '🎮', '🔋', '📡', '💾', '🌐'];

export default function MemoryGame() {
  const [cards, setCards] = useState<{ id: number; emoji: string; isFlipped: boolean; isMatched: boolean }[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const initGame = () => {
    const shuffledCards = [...EMOJIS, ...EMOJIS]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji, isFlipped: false, isMatched: false }));
    
    setCards(shuffledCards);
    setFlippedIndices([]);
    setMoves(0);
    setIsWon(false);
    setIsPlaying(true);
  };

  const handleCardClick = (index: number) => {
    if (!isPlaying || isWon) return;
    if (cards[index].isFlipped || cards[index].isMatched) return;
    if (flippedIndices.length === 2) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      setMoves(m => m + 1);
      const [firstIndex, secondIndex] = newFlippedIndices;
      
      if (newCards[firstIndex].emoji === newCards[secondIndex].emoji) {
        // Match found
        newCards[firstIndex].isMatched = true;
        newCards[secondIndex].isMatched = true;
        setCards(newCards);
        setFlippedIndices([]);
        
        // Check win
        if (newCards.every(c => c.isMatched)) {
          setIsWon(true);
          setIsPlaying(false);
        }
      } else {
        // No match, flip back after delay
        setTimeout(() => {
          setCards(prev => {
            const resetCards = [...prev];
            resetCards[firstIndex].isFlipped = false;
            resetCards[secondIndex].isFlipped = false;
            return resetCards;
          });
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto glass-panel p-8 rounded-3xl relative group">
      <div className="absolute inset-0 bg-fuchsia-900/10 rounded-3xl pointer-events-none group-hover:bg-fuchsia-900/20 transition-colors" />
      
      <div className="flex justify-between items-center mb-6 font-mono">
        <div className="text-fuchsia-400 flex items-center gap-2">
          <BrainCircuit className="w-5 h-5" />
          <span className="opacity-60">MOVES:</span>
          <span className="text-2xl font-bold neon-text">{moves}</span>
        </div>
      </div>

      <div className="relative aspect-square w-full max-w-[400px] mx-auto bg-black/60 border-2 border-fuchsia-500/30 rounded-xl overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,1)] p-4">
        {isPlaying || isWon ? (
          <div className="grid grid-cols-4 gap-2 h-full">
            {cards.map((card, index) => (
              <div 
                key={card.id}
                onClick={() => handleCardClick(index)}
                className={`relative flex items-center justify-center text-3xl md:text-4xl rounded-lg cursor-pointer transition-all duration-300 transform ${card.isFlipped || card.isMatched ? 'bg-fuchsia-500/20 border-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.3)]' : 'bg-fuchsia-950/40 border-fuchsia-900/50 hover:bg-fuchsia-900/60'} border-2`}
              >
                <div className={`transition-all duration-300 ${card.isFlipped || card.isMatched ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                  {card.emoji}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-20">
            <BrainCircuit className="w-16 h-16 text-fuchsia-500 mb-4 animate-pulse" />
            <button 
              onClick={initGame}
              className="px-6 py-3 font-gaming bg-fuchsia-500 text-black uppercase tracking-widest font-bold hover:bg-fuchsia-400 transition-colors shadow-[0_0_20px_rgba(217,70,239,0.5)] rounded"
            >
              Insert Coin
            </button>
          </div>
        )}

        {isWon && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-950/80 backdrop-blur-sm z-20 text-center p-6">
            <h3 className="font-gaming text-3xl text-green-500 mb-2 uppercase animate-pulse">Memory Restored</h3>
            <p className="font-mono text-green-300 mb-6 uppercase">Completed in {moves} moves</p>
            <button 
              onClick={initGame}
              className="flex items-center gap-2 px-6 py-3 font-gaming bg-green-500 text-black uppercase tracking-widest font-bold hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.5)] rounded"
            >
              <RefreshCw className="w-5 h-5" /> Play Again
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 text-center font-mono text-xs text-fuchsia-400/50 uppercase tracking-widest">
        Match the cyber pairs
      </div>
    </div>
  );
}

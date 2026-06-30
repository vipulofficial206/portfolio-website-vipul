import { useState } from 'react';
import { Gamepad2, BrainCircuit } from 'lucide-react';
import SnakeGame from './SnakeGame';
import MemoryGame from './MemoryGame';

export default function Arcade() {
  const [activeGame, setActiveGame] = useState<'snake' | 'memory'>('snake');

  return (
    <section id="arcade" className="py-24 md:py-32 border-t border-cyan-900/30 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 font-gaming uppercase hover-glitch text-white">Dev Arcade</h2>
        <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest flex items-center gap-2">
          Select Your Game
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <button 
          onClick={() => setActiveGame('snake')}
          className={`flex items-center gap-2 px-6 py-3 font-gaming uppercase font-bold transition-all border ${activeGame === 'snake' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]' : 'border-cyan-900/50 text-white/50 hover:border-cyan-500/50 hover:text-white'} rounded`}
        >
          <Gamepad2 className="w-5 h-5" /> Cyber Snake
        </button>
        <button 
          onClick={() => setActiveGame('memory')}
          className={`flex items-center gap-2 px-6 py-3 font-gaming uppercase font-bold transition-all border ${activeGame === 'memory' ? 'bg-fuchsia-500/20 border-fuchsia-400 text-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.4)]' : 'border-fuchsia-900/50 text-white/50 hover:border-fuchsia-500/50 hover:text-white'} rounded`}
        >
          <BrainCircuit className="w-5 h-5" /> Memory Match
        </button>
      </div>

      <div>
        {activeGame === 'snake' ? <SnakeGame /> : <MemoryGame />}
      </div>
    </section>
  );
}

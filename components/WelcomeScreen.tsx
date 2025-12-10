import React from 'react';
import { Hexagon, Sparkles } from 'lucide-react';

interface Props {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center animate-fade-in relative overflow-hidden bg-darkbg">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-darkbg to-darkbg opacity-40 -z-10"></div>
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black via-transparent to-transparent -z-10"></div>

      <div className="flex flex-col flex-1 justify-center items-center w-full max-w-2xl mx-auto z-10">
        
        <div className="mb-12 relative animate-fade-in-up">
           <div className="absolute inset-0 bg-gold blur-3xl opacity-10 animate-pulse-slow"></div>
           <Hexagon className="w-24 h-24 text-gold stroke-[0.5] fill-gold/5" />
        </div>

        <h1 className="font-display text-5xl md:text-7xl text-white mb-6 tracking-widest animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          ALQUIMISTA
        </h1>
        
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mb-8"></div>

        <p className="font-serif text-xl md:text-2xl text-gray-300 max-w-lg mb-16 leading-relaxed italic animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          "Transformamos ingredientes ordinarios en experiencias extraordinarias. Déjame diseñar tu elixir perfecto."
        </p>

        <button
          onClick={onStart}
          className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-display font-bold tracking-[0.2em] text-gold border border-gold/30 hover:text-black transition-all duration-500 ease-out hover:border-gold animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <span className="absolute inset-0 w-full h-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
          <span className="relative flex items-center">
            COMENZAR RITUAL
            <Sparkles className="w-4 h-4 ml-3 group-hover:rotate-180 transition-transform duration-700" />
          </span>
        </button>
      </div>

      <div className="absolute bottom-8 w-full flex justify-center gap-12 text-[10px] uppercase tracking-[0.3em] text-gold/30 font-display animate-fade-in" style={{ animationDelay: '1s' }}>
        <span>Ron</span>
        <span>Agave</span>
        <span>Pisco</span>
        <span>Esencias</span>
      </div>
    </div>
  );
};
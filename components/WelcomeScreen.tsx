import React from 'react';
import { Hexagon, Sparkles, BookOpen, Zap, Wind, Anchor } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface Props {
  onStart: () => void;
  onFastTrack: () => void;
  onOpenHistory: () => void;
  language: Language;
}

export const WelcomeScreen: React.FC<Props> = ({ onStart, onFastTrack, onOpenHistory, language }) => {
  const t = TRANSLATIONS[language].welcome;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6 text-center animate-fade-in relative overflow-hidden bg-void transition-colors duration-700">
      
      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-caribbean-night opacity-80 transition-all duration-700"></div>
        {/* Dynamic Theme Pattern */}
        <div className="absolute inset-0 bg-theme-pattern opacity-10 mix-blend-overlay"></div>

        {/* Bioluminescent Waves / Dynamic Animation */}
        <div className="absolute -top-[30%] -left-[10%] w-[120vw] h-[120vw] bg-aqua-bio/10 rounded-full blur-[100px] animate-theme mix-blend-screen transition-colors duration-700"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[120vw] h-[120vw] bg-deep-purple/20 rounded-full blur-[100px] animate-theme mix-blend-screen transition-colors duration-700" style={{ animationDelay: '5s' }}></div>
        
        {/* Sacred Geometry */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] md:w-[900px] md:h-[900px] border border-aqua-bio/10 rounded-full animate-spin-slow opacity-30 transition-colors duration-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[110vw] md:w-[700px] md:h-[700px] border border-solar-coral/10 rotate-45 animate-spin-reverse opacity-30 dashed-border transition-colors duration-700"></div>
      </div>

      <div className="flex flex-col flex-1 justify-center items-center w-full max-w-3xl mx-auto z-10 py-12">
        
        {/* Floating Logo - Caribbean Chrome */}
        <div className="mb-8 md:mb-12 relative animate-float">
           <div className="absolute inset-0 bg-aqua-bio/20 blur-[60px] opacity-40 animate-pulse-slow transition-colors duration-700"></div>
           <div className="relative group cursor-pointer transition-transform duration-500 hover:scale-110">
              <Hexagon className="w-24 h-24 md:w-32 md:h-32 text-aqua-bio stroke-[0.5] fill-white/5 drop-shadow-[0_0_25px_rgba(var(--color-aqua-bio)/0.6)] transition-all duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-solar-coral/50 rounded-full animate-spin-slow transition-colors duration-700"></div>
                <div className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_15px_#ffffff]"></div>
              </div>
           </div>
        </div>

        <h1 className="font-display font-black text-5xl sm:text-6xl md:text-8xl tropical-gradient-text mb-6 tracking-tight animate-fade-in-up drop-shadow-2xl transition-all duration-700">
          {t.title}
        </h1>
        
        <div className="h-[2px] w-24 md:w-32 bg-gradient-to-r from-transparent via-aqua-bio to-transparent mb-8 md:mb-10 opacity-80 transition-colors duration-700"></div>

        <p className="font-sans font-light text-lg md:text-2xl text-gray-300 max-w-xs md:max-w-xl mb-10 md:mb-14 leading-relaxed animate-fade-in-up px-4 drop-shadow-lg">
          "{t.quote}"
        </p>

        <div className="flex flex-col gap-4 animate-fade-in-up w-full max-w-sm md:max-w-lg px-2" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              
              {/* PRIMARY ACTION: START RITUAL - Caribbean Gradient */}
              <button
                onClick={onStart}
                className="group relative flex-1 h-16 overflow-hidden rounded-2xl shadow-glow-aqua transition-all duration-300 hover:scale-105 active:scale-95"
              >
                 <div className="absolute inset-0 bg-gradient-to-r from-aqua-bio to-deep-purple opacity-90 group-hover:opacity-100 transition-all duration-700"></div>
                 {/* Water Ripple Effect */}
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/water.png')] animate-theme"></div>
                 
                 <div className="absolute inset-0 flex items-center justify-center gap-3 font-display font-bold tracking-[0.15em] text-black text-sm z-10">
                    {t.start}
                    <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                 </div>
              </button>

              {/* SECONDARY ACTION: FAST TRACK - Solar Gradient Border */}
              <button
                onClick={onFastTrack}
                className="group relative flex-1 h-16 overflow-hidden rounded-2xl bg-black/40 backdrop-blur-md border border-solar-coral/50 hover:border-solar-coral hover:shadow-glow-solar transition-all duration-300 hover:scale-105 active:scale-95"
              >
                 <div className="absolute inset-0 flex items-center justify-center gap-3 font-display font-bold tracking-[0.15em] text-solar-coral group-hover:text-white transition-colors text-sm z-10">
                    {t.quick}
                    <Zap className="w-4 h-4 group-hover:fill-current" />
                 </div>
              </button>
            </div>

            <button
              onClick={onOpenHistory}
              className="group flex items-center justify-center gap-2 py-4 font-tech text-xs tracking-[0.3em] text-aqua-bio/70 hover:text-aqua-bio transition-colors uppercase hover:tracking-[0.4em] duration-300"
            >
              <BookOpen className="w-3 h-3" />
              <span>{t.archive}</span>
            </button>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-8 w-full flex justify-center gap-8 md:gap-16 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/30 font-tech animate-fade-in select-none" style={{ animationDelay: '1s' }}>
        <span className="flex items-center gap-2"><Zap className="w-3 h-3 text-solar-coral" /> {t.energy}</span>
        <span className="flex items-center gap-2"><Anchor className="w-3 h-3 text-aqua-bio" /> {t.matter}</span>
        <span className="flex items-center gap-2"><Hexagon className="w-3 h-3 text-palm-neon" /> {t.spirit}</span>
      </div>
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import { Hexagon, Stars } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface Props {
  language: Language;
}

const LOADING_MESSAGES_KEY = [
  "Consultando el Grimorio Maestro...",
  "Infusionando extractos lunares...",
  "Calculando densidades de fluidos...",
  "Decantando sueños líquidos...",
  "Armonizando los cuatro elementos...",
  "Destilando la esencia de la noche...",
  "Transmutando ingredientes...",
  "Equilibrando el Yin y el Yang del sabor...",
  "Invocando al espíritu del agave..."
];

export const LoadingScreen: React.FC<Props> = ({ language }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const t = TRANSLATIONS[language].loading;

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES_KEY.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center animate-fade-in bg-void relative overflow-hidden">
      
      {/* Background with fluid liquid animation */}
      <div className="absolute inset-0 bg-caribbean-night"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aqua-bio/10 rounded-full blur-[80px] animate-liquid mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-deep-purple/20 to-transparent opacity-50"></div>
      
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/water.png')] animate-ocean-flow"></div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Alchemical Circle Animation */}
        <div className="relative w-48 h-48 flex items-center justify-center mb-12">
            {/* Outer Ring */}
            <div className="absolute inset-0 border border-aqua-bio/30 rounded-full animate-spin-slow border-dashed"></div>
            <div className="absolute -inset-4 border border-solar-coral/10 rounded-full animate-spin-reverse"></div>
            
            {/* Middle Geometric Shapes */}
            <div className="absolute inset-6 border border-white/20 rotate-45 animate-spin-reverse opacity-60 rounded-xl"></div>
            
            {/* Inner Glowing Core */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-24 h-24 bg-aqua-bio/20 rounded-full blur-xl animate-pulse-slow"></div>
               <Hexagon className="w-16 h-16 text-white animate-float drop-shadow-[0_0_20px_rgba(0,242,255,0.8)]" strokeWidth={0.5} />
            </div>
            
            {/* Orbiting Particles */}
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-solar-coral rounded-full blur-[2px] animate-ping"></div>
        </div>
        
        <h2 className="text-4xl font-display text-white tracking-[0.2em] mb-8 animate-pulse text-shadow-lg chrome-text">
          {t.title}
        </h2>
        
        {/* Loading Bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-aqua-bio to-solar-coral animate-shimmer w-full blur-[1px]"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-50"></div>
        </div>
        
        <div className="h-8 overflow-hidden relative w-full max-w-lg">
            {/* Note: In a real multi-lang setup, these specific creative messages should also be in the translation file. 
                For now we keep them artistic/hardcoded or basic translation for the title. */}
            <p key={messageIndex} className="text-aqua-bio/80 font-serif italic text-xl animate-fade-in-up absolute w-full left-0">
              {LOADING_MESSAGES_KEY[messageIndex]}
            </p>
        </div>
      </div>
      
      <div className="absolute bottom-6 flex gap-2 text-[10px] text-gray-500 uppercase tracking-widest font-display opacity-70">
        <Stars className="w-3 h-3 text-solar-coral" />
        <span>{t.ars}</span>
        <Stars className="w-3 h-3 text-solar-coral" />
      </div>
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import { Hexagon, BrainCircuit, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface Props {
  language: Language;
}

const LOADING_MESSAGES_KEY = [
  "Conectando con Gemini 3 Pro...",
  "Analizando vectores de sabor...",
  "Optimizando márgenes de rentabilidad...",
  "Simulando física de fluidos...",
  "Generando geometría molecular...",
  "Renderizando fotones en tiempo real...",
  "Aplicando filtros de alquimia...",
];

export const LoadingScreen: React.FC<Props> = ({ language }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const t = TRANSLATIONS[language].loading;

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES_KEY.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center animate-fade-in bg-void relative overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-caribbean-night"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 animate-pulse-slow"></div>
      
      {/* Central Neural Network Visual */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
         
         <div className="relative w-64 h-64 flex items-center justify-center mb-12">
            {/* Outer Rotating Rings */}
            <div className="absolute inset-0 border border-aqua-bio/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-deep-purple/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
            
            {/* Pulsing Core */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-aqua-bio/5 rounded-full blur-2xl animate-pulse"></div>
            </div>

            {/* Center Icon */}
            <div className="relative z-10">
               <BrainCircuit className="w-16 h-16 text-aqua-bio animate-pulse stroke-[1]" />
            </div>

            {/* Orbiting Particles */}
            <div className="absolute w-full h-full animate-[spin_4s_linear_infinite]">
               <div className="absolute top-0 left-1/2 w-2 h-2 bg-solar-coral rounded-full shadow-[0_0_10px_rgba(255,94,87,0.8)]"></div>
            </div>
            <div className="absolute w-2/3 h-2/3 animate-[spin_6s_linear_infinite_reverse]">
               <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-aqua-bio rounded-full shadow-[0_0_10px_rgba(0,242,255,0.8)]"></div>
            </div>
         </div>

         <h2 className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-aqua-bio to-white animate-shimmer bg-[length:200%_auto] mb-8 tracking-tight">
            {t.title}
         </h2>

         {/* Tech Loading Bar */}
         <div className="w-72 h-1 bg-white/10 rounded-full overflow-hidden mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-aqua-bio to-transparent w-1/2 animate-[translateX_1.5s_ease-in-out_infinite]"></div>
         </div>

         {/* Changing Text */}
         <div className="h-8 flex items-center justify-center">
            <p key={messageIndex} className="font-tech text-aqua-bio/80 uppercase tracking-[0.2em] text-xs animate-fade-in-up">
               {LOADING_MESSAGES_KEY[messageIndex]}
            </p>
         </div>

      </div>

      <div className="absolute bottom-8 flex gap-3 text-[9px] text-gray-600 font-tech uppercase tracking-[0.3em] opacity-60">
         <Sparkles className="w-3 h-3 text-deep-purple" />
         <span>Neural Link Active</span>
         <Sparkles className="w-3 h-3 text-deep-purple" />
      </div>

    </div>
  );
};
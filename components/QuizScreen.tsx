import React, { useState } from 'react';
import { SCENARIO_QUESTIONS } from '../constants';
import { ChevronRight, Hexagon, Waves } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface Props {
  onComplete: (answers: string[]) => void;
  language: Language;
}

export const QuizScreen: React.FC<Props> = ({ onComplete, language }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = SCENARIO_QUESTIONS[currentStep];
  const t = TRANSLATIONS[language].quiz;

  const handleOptionSelect = (value: string) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Fluid transition
    setTimeout(() => {
      const newAnswers = [...answers, value];
      setAnswers(newAnswers);

      if (currentStep < SCENARIO_QUESTIONS.length - 1) {
        setCurrentStep(prev => prev + 1);
        setIsTransitioning(false);
      } else {
        onComplete(newAnswers);
      }
    }, 400);
  };

  const progress = ((currentStep + 1) / SCENARIO_QUESTIONS.length) * 100;

  // Vibrant gradients for the cards
  const getGradient = (idx: number) => {
    const gradients = [
      'from-aqua-bio/10 to-blue-600/10 hover:from-aqua-bio/30 hover:to-blue-600/30 border-aqua-bio/30',
      'from-solar-coral/10 to-pink-600/10 hover:from-solar-coral/30 hover:to-pink-600/30 border-solar-coral/30',
      'from-palm-neon/10 to-emerald-600/10 hover:from-palm-neon/30 hover:to-emerald-600/30 border-palm-neon/30',
      'from-deep-purple/10 to-indigo-600/10 hover:from-deep-purple/30 hover:to-indigo-600/30 border-deep-purple/30',
    ];
    return gradients[idx % gradients.length];
  };

  return (
    <div className="min-h-screen flex flex-col max-w-5xl mx-auto p-4 md:p-8 animate-fade-in bg-void relative overflow-y-auto">
      
      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 bg-caribbean-night"></div>
         <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-aqua-bio/5 rounded-full blur-[120px] animate-ocean-flow"></div>
         <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-solar-coral/5 rounded-full blur-[120px] animate-ocean-flow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* HEADER & PROGRESS */}
      <div className="relative z-10 flex items-center justify-between mb-8 md:mb-12 pt-4">
         <div className="flex items-center gap-3 group">
            <div className="p-2 bg-aqua-bio/10 rounded-lg border border-aqua-bio/30 group-hover:rotate-180 transition-transform duration-700">
               <Hexagon className="w-5 h-5 text-aqua-bio" />
            </div>
            <span className="font-display font-bold text-white tracking-wider">{t.alchemy}</span>
         </div>
         <div className="flex items-center gap-2 font-tech">
            <span className="text-aqua-bio">{t.phase}</span>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-md border border-white/10">
                <span className="text-sm text-white font-bold">{currentStep + 1}</span>
            </div>
            <span className="text-gray-500 text-xs"> {t.of} {SCENARIO_QUESTIONS.length}</span>
         </div>
      </div>

      {/* LIQUID PROGRESS BAR */}
      <div className="relative z-10 w-full h-2 bg-black/40 rounded-full overflow-hidden mb-10 border border-white/5">
        <div 
            className="h-full bg-gradient-to-r from-aqua-bio via-palm-neon to-solar-coral shadow-glow-aqua transition-all duration-700 ease-out relative"
            style={{ width: `${progress}%` }}
        >
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/water.png')] opacity-30 animate-ocean-flow"></div>
        </div>
      </div>

      <div className={`relative z-10 flex-1 flex flex-col justify-center transition-all duration-500 ease-out pb-10 ${isTransitioning ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
        
        <div className="text-center mb-12">
             <h2 className="text-3xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 leading-tight tracking-tight drop-shadow-md">
              {currentQuestion.question}
            </h2>
            <div className="flex justify-center mb-4">
               <Waves className="w-6 h-6 text-aqua-bio opacity-50" />
            </div>
            <p className="text-gray-300 text-lg md:text-xl font-light font-sans max-w-2xl mx-auto italic">
              "{currentQuestion.scenario}"
            </p>
        </div>

        {/* FLOATING CARDS GRID */}
        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto w-full pb-8">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.value)}
              className={`group relative flex items-center p-6 md:p-8 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-aqua bg-gradient-to-br ${getGradient(idx)} overflow-hidden`}
            >
              {/* Liquid Noise Effect */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity mix-blend-overlay">
                   <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              </div>

              {/* Icon Container */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 flex items-center justify-center mr-6 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 shrink-0 shadow-lg">
                  <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                    {option.emoji}
                  </span>
              </div>
              
              <div className="relative z-10 text-left flex-1">
                  <h3 className="font-sans font-bold text-white text-lg md:text-xl mb-1 group-hover:text-aqua-bio transition-colors">
                    {option.text}
                  </h3>
                  {/* Animated Underline */}
                  <div className="h-0.5 w-8 bg-white/20 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-aqua-bio group-hover:to-transparent transition-all duration-500"></div>
              </div>

              <div className="relative z-10 p-2 rounded-full border border-white/10 group-hover:border-aqua-bio group-hover:bg-aqua-bio group-hover:text-black transition-all">
                  <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
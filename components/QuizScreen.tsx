import React, { useState } from 'react';
import { SCENARIO_QUESTIONS } from '../constants';
import { ArrowRight } from 'lucide-react';

interface Props {
  onComplete: (answers: string[]) => void;
}

export const QuizScreen: React.FC<Props> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = SCENARIO_QUESTIONS[currentStep];

  const handleOptionSelect = (value: string) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Smooth transition delay
    setTimeout(() => {
      const newAnswers = [...answers, value];
      setAnswers(newAnswers);

      if (currentStep < SCENARIO_QUESTIONS.length - 1) {
        setCurrentStep(prev => prev + 1);
        setIsTransitioning(false);
      } else {
        onComplete(newAnswers);
      }
    }, 500);
  };

  const progress = ((currentStep + 1) / SCENARIO_QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen flex flex-col max-w-3xl mx-auto p-6 md:p-12 animate-fade-in bg-darkbg">
      {/* Elegant Progress Line */}
      <div className="w-full h-[1px] bg-gray-800 mb-12 mt-4 relative">
        <div 
          className="absolute top-0 left-0 h-full bg-gold transition-all duration-700 ease-out shadow-[0_0_10px_rgba(212,175,55,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className={`flex-1 flex flex-col justify-center transition-opacity duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <span className="text-gold font-display text-xs tracking-[0.2em] uppercase mb-4 block">
          Fase {currentStep + 1} / {SCENARIO_QUESTIONS.length}
        </span>
        
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 leading-tight">
          {currentQuestion.question}
        </h2>
        
        <p className="text-gray-400 mb-12 text-lg md:text-xl font-light font-serif italic border-l-2 border-gold/30 pl-4">
          {currentQuestion.scenario}
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.value)}
              className="group relative flex flex-col p-6 border border-white/5 bg-white/5 hover:bg-gold/10 hover:border-gold/30 transition-all duration-300 text-left overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-gold -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              
              <span className="text-4xl mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 origin-left">
                {option.emoji}
              </span>
              
              <h3 className="font-display font-bold text-white tracking-wide group-hover:text-gold transition-colors mb-1">
                {option.text}
              </h3>
              
              <span className="text-xs text-gray-500 font-serif uppercase tracking-widest group-hover:text-gold-dim">
                 {option.value.split(',')[0]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { GeneratedRecipe, Language } from '../types';
import { ArrowRight, Wine, Zap } from 'lucide-react';
import { TRANSLATIONS } from '../translations';

interface Props {
  options: GeneratedRecipe[];
  onSelect: (recipe: GeneratedRecipe) => void;
  onBack: () => void;
  language: Language;
}

export const QuickSelectionScreen: React.FC<Props> = ({ options, onSelect, onBack, language }) => {
  const t = TRANSLATIONS[language].quick;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 animate-fade-in bg-void relative overflow-x-hidden">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-caribbean-night"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-solar-coral/5 rounded-full blur-[120px] animate-ocean-flow"></div>
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-aqua-bio/5 to-transparent"></div>
      </div>

      <div className="max-w-6xl w-full z-10 flex flex-col items-center py-8 md:py-0">
        
        <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4 text-solar-coral animate-pulse-slow">
                <Zap className="w-5 h-5" />
                <span className="font-tech text-xs tracking-[0.4em] uppercase">{t.subtitle}</span>
                <Zap className="w-5 h-5" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight chrome-text mb-6">
              {t.title}
            </h2>
            <p className="text-gray-400 font-sans font-light text-lg md:text-xl max-w-xl mx-auto px-4">
              {t.desc}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {options.map((recipe, index) => (
            <button
              key={recipe.id}
              onClick={() => onSelect(recipe)}
              className="group relative flex flex-col h-full bg-white/5 border border-white/10 hover:border-aqua-bio/50 transition-all duration-500 overflow-hidden text-left p-6 md:p-8 rounded-3xl hover:-translate-y-2 hover:shadow-glow-aqua backdrop-blur-xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-aqua-bio/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-6 flex justify-between items-start">
                    <div className="p-4 bg-black/30 rounded-2xl border border-white/10 group-hover:border-aqua-bio group-hover:bg-aqua-bio group-hover:text-black text-aqua-bio transition-all duration-300 shadow-lg">
                        <Wine className="w-8 h-8" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 border border-white/10 px-3 py-1 rounded-full bg-black/20 font-tech">
                        {t.option} {index + 1}
                    </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-aqua-bio transition-colors leading-none">
                  {recipe.name}
                </h3>
                
                <div className="w-12 h-[2px] bg-white/10 mb-6 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-aqua-bio group-hover:to-transparent transition-all duration-500"></div>

                <p className="text-gray-400 font-sans font-light text-sm leading-relaxed mb-6 line-clamp-3">
                  "{recipe.description}"
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-8">
                        {recipe.flavorProfile.split(',').slice(0, 2).map((tag, i) => (
                            <span key={i} className="text-[9px] uppercase tracking-wider text-gray-500 bg-white/5 px-2 py-1 rounded font-tech">
                                {tag}
                            </span>
                        ))}
                    </div>
                    
                    <div className="flex items-center text-aqua-bio text-xs font-bold tracking-[0.2em] uppercase md:opacity-0 group-hover:opacity-100 transform md:translate-y-2 group-hover:translate-y-0 transition-all duration-300 font-tech">
                        <span>{t.start}</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button 
            onClick={onBack}
            className="mt-16 text-gray-500 hover:text-white font-tech text-xs tracking-[0.3em] uppercase transition-colors border-b border-transparent hover:border-white pb-1"
        >
            {t.cancel}
        </button>

      </div>
    </div>
  );
};
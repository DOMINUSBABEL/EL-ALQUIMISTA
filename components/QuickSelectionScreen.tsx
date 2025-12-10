import React from 'react';
import { GeneratedRecipe } from '../types';
import { Sparkles, ArrowRight, Wine, Zap } from 'lucide-react';

interface Props {
  options: GeneratedRecipe[];
  onSelect: (recipe: GeneratedRecipe) => void;
  onBack: () => void;
}

export const QuickSelectionScreen: React.FC<Props> = ({ options, onSelect, onBack }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 animate-fade-in bg-darkbg relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gold/10 via-darkbg to-black pointer-events-none"></div>

      <div className="max-w-6xl w-full z-10 flex flex-col items-center">
        
        <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2 text-gold animate-pulse-slow">
                <Zap className="w-5 h-5" />
                <span className="font-display text-xs tracking-[0.3em] uppercase">Destilación Rápida</span>
                <Zap className="w-5 h-5" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display text-white tracking-widest text-shadow-lg">
              LA TRIADA DEL DESTINO
            </h2>
            <p className="text-gray-400 font-serif italic mt-4 text-lg">
              El universo ha seleccionado tres caminos para ti. Elige tu elixir.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {options.map((recipe, index) => (
            <button
              key={recipe.id}
              onClick={() => onSelect(recipe)}
              className="group relative flex flex-col h-full bg-cardbg border border-white/5 hover:border-gold/50 transition-all duration-500 overflow-hidden text-left p-8 rounded-sm hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon / Visual Placeholder */}
                <div className="mb-6 flex justify-between items-start">
                    <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover:border-gold group-hover:bg-gold text-gold group-hover:text-black transition-all duration-300">
                        <Wine className="w-8 h-8" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-600 border border-gray-800 px-2 py-1 rounded group-hover:border-gold/30 group-hover:text-gold transition-colors">
                        Opción {index + 1}
                    </span>
                </div>

                <h3 className="text-2xl font-display text-white mb-3 group-hover:text-gold transition-colors leading-none">
                  {recipe.name}
                </h3>
                
                <div className="w-12 h-[1px] bg-white/10 mb-4 group-hover:w-full group-hover:bg-gold/30 transition-all duration-500"></div>

                <p className="text-gray-400 font-serif text-sm italic leading-relaxed mb-6 line-clamp-3">
                  "{recipe.description}"
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {recipe.flavorProfile.split(',').slice(0, 2).map((tag, i) => (
                            <span key={i} className="text-[9px] uppercase tracking-wider text-gray-500 bg-white/5 px-2 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                    
                    <div className="flex items-center text-gold text-xs font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span>Materializar</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button 
            onClick={onBack}
            className="mt-12 text-gray-500 hover:text-white font-display text-xs tracking-[0.2em] uppercase transition-colors"
        >
            Volver al Inicio
        </button>

      </div>
    </div>
  );
};
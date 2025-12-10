import React from 'react';
import { GeneratedRecipe, Language } from '../types';
import { RefreshCw, Share2, Sparkles, Loader2, Beaker, Wine, Snowflake, Activity } from 'lucide-react';
import { TRANSLATIONS } from '../translations';

interface Props {
  recipe: GeneratedRecipe;
  onReset: () => void;
  language: Language;
}

export const ResultScreen: React.FC<Props> = ({ recipe, onReset, language }) => {
  const t = TRANSLATIONS[language].result;

  return (
    <div className="min-h-screen flex flex-col items-center p-0 md:p-8 animate-fade-in bg-void relative overflow-x-hidden">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 bg-caribbean-night"></div>
         <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-aqua-bio/10 rounded-full blur-[120px] animate-ocean-flow"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl glass-panel md:rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-screen md:min-h-0 border-aqua-bio/20">
        
        {/* --- LEFT COLUMN: THE HOOK --- */}
        <div className="w-full md:w-5/12 relative h-[45vh] md:h-auto bg-black flex flex-col">
          
          {/* Image Container */}
          <div className="relative h-full w-full overflow-hidden group">
             {recipe.imageUrl ? (
                <>
                  <img 
                    src={recipe.imageUrl} 
                    alt={recipe.name} 
                    className="absolute inset-0 w-full h-full object-cover animate-reveal duration-1000 group-hover:scale-110 transition-transform duration-[20s]"
                  />
                  {/* Tech/Tropical Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                  <div className="absolute inset-0 bg-aqua-bio/5 mix-blend-overlay"></div>
                  
                  {/* Neon Border Frame */}
                  <div className="absolute inset-4 border border-aqua-bio/30 opacity-50 rounded-lg pointer-events-none"></div>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
                   <div className="relative">
                      <div className="absolute inset-0 bg-aqua-bio blur-xl opacity-30 animate-pulse"></div>
                      <Loader2 className="w-10 h-10 text-aqua-bio animate-spin relative z-10" />
                   </div>
                   <p className="text-aqua-bio/70 font-tech text-xs tracking-widest uppercase mt-4 animate-pulse">{t.generating}</p>
                </div>
              )}
              
              {/* Mobile Title Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:hidden z-20">
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <h1 className="text-4xl font-display font-bold text-white mb-2 leading-none drop-shadow-lg chrome-text">
                       {recipe.name}
                    </h1>
                    <div className="flex gap-2 flex-wrap">
                        {recipe.flavorProfile.split(',').slice(0, 2).map((tag, i) => (
                            <span key={i} className="px-2 py-1 border border-aqua-bio/30 text-[10px] text-aqua-bio font-tech uppercase tracking-wider rounded bg-black/60 backdrop-blur-md">
                                {tag.trim()}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
          </div>
          
          {/* Desktop Title Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-10 hidden md:block z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
             <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-solar-coral animate-pulse"></div>
                <span className="text-solar-coral font-tech text-xs tracking-[0.2em] uppercase">{t.success}</span>
             </div>
             <h1 className="text-5xl font-display font-bold text-white mb-4 leading-none chrome-text drop-shadow-[0_0_15px_rgba(0,242,255,0.3)]">
                {recipe.name}
             </h1>
             <p className="text-gray-300 font-sans font-light leading-relaxed mb-6 italic border-l-2 border-aqua-bio pl-4">
                "{recipe.description}"
             </p>
             <div className="flex gap-2 flex-wrap">
                {recipe.flavorProfile.split(',').map((tag, i) => (
                    <span key={i} className="px-3 py-1 border border-white/10 text-[10px] text-white/90 font-tech uppercase tracking-wider rounded-full hover:border-aqua-bio hover:text-aqua-bio hover:bg-aqua-bio/10 transition-all bg-white/5 cursor-default">
                        {tag.trim()}
                    </span>
                ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: THE SPECS --- */}
        <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col relative bg-black/40 backdrop-blur-md">
          
          {/* Mobile Description */}
          <p className="text-sm text-gray-400 font-sans font-light mb-6 md:hidden border-l-2 border-aqua-bio pl-3">
              "{recipe.description}"
          </p>

          {/* Header Specs - Holographic Pills */}
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
             <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/10 hover:border-deep-purple/50 transition-colors">
                <Wine className="w-4 h-4 text-deep-purple" />
                <div className="flex flex-col">
                    <span className="text-[9px] text-gray-500 font-tech uppercase">{t.glassware}</span>
                    <span className="text-white font-sans text-xs font-bold tracking-wide">{recipe.glassType}</span>
                </div>
             </div>
             <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/10 hover:border-aqua-bio/50 transition-colors">
                <Snowflake className="w-4 h-4 text-aqua-bio" />
                <div className="flex flex-col">
                    <span className="text-[9px] text-gray-500 font-tech uppercase">{t.garnish}</span>
                    <span className="text-white font-sans text-xs font-bold tracking-wide">{recipe.garnish}</span>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
            
            {/* Ingredients */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-aqua-bio font-tech font-bold text-xs tracking-[0.2em] mb-4 flex items-center gap-2">
                 <Sparkles className="w-3 h-3" /> {t.elements}
              </h3>
              <ul className="space-y-3">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex justify-between items-center group p-3 rounded-xl bg-white/5 border border-white/5 hover:border-aqua-bio/30 hover:bg-aqua-bio/5 transition-all cursor-default">
                    <span className="text-gray-200 font-sans text-sm font-medium">{ing.item}</span>
                    <div className="text-right">
                      <span className="text-white font-mono text-sm block font-bold text-shadow">{ing.amount}</span>
                      {ing.notes && <span className="text-[9px] text-gray-500 uppercase font-tech">{ing.notes}</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
               <h3 className="text-solar-coral font-tech font-bold text-xs tracking-[0.2em] mb-4 flex items-center gap-2">
                 <Beaker className="w-3 h-3" /> {t.algorithm}
              </h3>
               <div className="space-y-4">
                 {recipe.instructions.map((step, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-6 h-6 rounded-lg bg-solar-coral/10 border border-solar-coral/30 flex items-center justify-center shrink-0 group-hover:bg-solar-coral group-hover:text-black transition-colors duration-300">
                        <span className="text-[10px] text-solar-coral font-mono font-bold group-hover:text-black">{i + 1}</span>
                    </div>
                    <div>
                        <p className="text-gray-300 text-sm font-sans leading-relaxed group-hover:text-white transition-colors">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Science/Why it works */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-deep-purple/20 to-transparent border border-deep-purple/30 mb-8 animate-fade-in-up hover:shadow-glow-aqua transition-shadow duration-500">
             <div className="flex items-center gap-2 mb-2">
                <Activity className="w-3 h-3 text-aqua-bio" />
                <p className="text-xs text-aqua-bio font-tech font-bold uppercase">{t.analysis}</p>
             </div>
             <p className="text-sm text-gray-200 font-sans italic leading-relaxed">"{recipe.whyItWorks}"</p>
          </div>

          {/* Action Bar */}
          <div className="mt-auto flex flex-col md:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={onReset}
              className="flex-1 px-6 py-4 border border-white/10 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-all font-tech font-bold text-xs tracking-wider uppercase flex items-center justify-center hover:border-white/30"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              {t.restart}
            </button>
            <button 
              onClick={() => alert("Archivado en la red neuronal.")}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-aqua-bio to-blue-500 text-black rounded-xl hover:scale-[1.02] transition-all font-tech font-bold text-xs tracking-wider uppercase flex items-center justify-center shadow-glow-aqua"
            >
              <Share2 className="w-4 h-4 mr-2" />
              {t.archive}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
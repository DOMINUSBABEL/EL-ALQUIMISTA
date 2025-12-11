import React, { useRef, useState } from 'react';
import { GeneratedRecipe, Language } from '../types';
import { RefreshCw, Sparkles, Loader2, Beaker, Wine, Snowflake, Activity, Save } from 'lucide-react';
import { TRANSLATIONS } from '../translations';

interface Props {
  recipe: GeneratedRecipe;
  onReset: () => void;
  language: Language;
}

export const ResultScreen: React.FC<Props> = ({ recipe, onReset, language }) => {
  const t = TRANSLATIONS[language].result;
  const [isSaved, setIsSaved] = useState(false);
  
  // 3D Tilt Logic
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; // Invert tilt for natural feel
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const handleSaveAnimation = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 animate-fade-in bg-void relative overflow-hidden">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 bg-caribbean-night"></div>
         <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-aqua-bio/10 rounded-full blur-[120px] animate-ocean-flow"></div>
         {/* Grid Background */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row gap-8 items-start h-full md:h-[85vh]">
        
        {/* --- LEFT COLUMN: THE HOLO-CARD --- */}
        <div className="w-full md:w-5/12 h-[50vh] md:h-full flex items-center justify-center perspective-1000">
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-transform duration-200 ease-out group"
            style={{ 
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
             {/* Holographic Sheen */}
             <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-40 z-30 pointer-events-none transition-opacity duration-300 mix-blend-overlay"></div>
             
             {/* Main Image */}
             {recipe.imageUrl ? (
                <div className="absolute inset-0 bg-black">
                  <img 
                    src={recipe.imageUrl} 
                    alt={recipe.name} 
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[10s]"
                  />
                  {/* Vignette */}
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/80"></div>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 border border-aqua-bio/20 rounded-3xl">
                   <div className="relative">
                      <div className="absolute inset-0 bg-aqua-bio blur-2xl opacity-20 animate-pulse"></div>
                      <Loader2 className="w-12 h-12 text-aqua-bio animate-spin relative z-10" />
                   </div>
                   <p className="text-aqua-bio/70 font-tech text-xs tracking-[0.3em] uppercase mt-6 animate-pulse">{t.generating}</p>
                </div>
              )}

              {/* Overlay Content on Card */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black via-black/60 to-transparent translate-z-10">
                 <div className="flex items-center gap-2 mb-2 opacity-80">
                    <div className="w-1.5 h-1.5 rounded-full bg-solar-coral animate-ping"></div>
                    <span className="text-solar-coral font-tech text-[10px] tracking-[0.2em] uppercase">Gemini 3 Generated</span>
                 </div>
                 <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-none chrome-text drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                    {recipe.name}
                 </h1>
                 <div className="mt-4 flex flex-wrap gap-2">
                    {recipe.flavorProfile.split(',').map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded text-[9px] text-white font-tech uppercase tracking-wider">
                            {tag.trim()}
                        </span>
                    ))}
                 </div>
              </div>
              
              {/* Border Glow */}
              <div className="absolute inset-0 border border-white/10 rounded-3xl z-40 pointer-events-none"></div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: THE DATA STREAM --- */}
        <div className="w-full md:w-7/12 h-full glass-panel rounded-3xl p-6 md:p-10 flex flex-col overflow-y-auto custom-scrollbar border-t border-white/10 md:border-t-0 md:border-l relative">
          
          {/* Decorative Lines */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-aqua-bio/10 to-transparent rounded-bl-full pointer-events-none"></div>

          <div className="mb-8">
             <h2 className="text-sm font-tech text-aqua-bio uppercase tracking-[0.2em] mb-4 opacity-70 flex items-center gap-2">
               <Activity className="w-4 h-4" /> {t.analysis}
             </h2>
             <p className="text-lg md:text-xl text-white font-sans font-light leading-relaxed border-l-2 border-aqua-bio pl-4 italic">
                "{recipe.description}"
             </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
             <div className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-deep-purple/40 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-deep-purple">
                   <Wine className="w-4 h-4" />
                   <span className="text-[10px] font-tech uppercase tracking-widest">{t.glassware}</span>
                </div>
                <span className="text-white font-bold">{recipe.glassType}</span>
             </div>
             <div className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-solar-coral/40 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-solar-coral">
                   <Snowflake className="w-4 h-4" />
                   <span className="text-[10px] font-tech uppercase tracking-widest">{t.garnish}</span>
                </div>
                <span className="text-white font-bold">{recipe.garnish}</span>
             </div>
          </div>

          <div className="flex-1 grid md:grid-cols-2 gap-8 md:gap-12 mb-8">
             {/* Ingredients List */}
             <div>
                <h3 className="text-xs font-tech text-gray-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                   <Sparkles className="w-3 h-3 text-aqua-bio" /> {t.elements}
                </h3>
                <ul className="space-y-3">
                   {recipe.ingredients.map((ing, i) => (
                      <li key={i} className="flex justify-between items-baseline text-sm group">
                         <span className="text-gray-300 group-hover:text-white transition-colors">{ing.item}</span>
                         <div className="relative">
                            <span className="text-aqua-bio font-mono font-bold">{ing.amount}</span>
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-aqua-bio/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></div>
                         </div>
                      </li>
                   ))}
                </ul>
             </div>

             {/* Instructions */}
             <div>
                <h3 className="text-xs font-tech text-gray-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                   <Beaker className="w-3 h-3 text-solar-coral" /> {t.algorithm}
                </h3>
                <div className="space-y-4 relative">
                   {/* Vertical Line */}
                   <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-white/10"></div>
                   
                   {recipe.instructions.map((step, i) => (
                      <div key={i} className="flex gap-4 relative">
                         <div className="w-6 h-6 rounded-full bg-void border border-white/20 flex items-center justify-center shrink-0 z-10 text-[10px] font-mono text-gray-400">
                            {i + 1}
                         </div>
                         <p className="text-sm text-gray-300 leading-relaxed">{step}</p>
                      </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="mt-auto flex gap-4 pt-6 border-t border-white/10">
             <button
                onClick={onReset}
                className="flex-1 py-4 rounded-xl border border-white/10 hover:bg-white/5 text-gray-400 hover:text-white font-tech text-xs tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2"
             >
                <RefreshCw className="w-4 h-4" />
                {t.restart}
             </button>
             
             <button
                onClick={handleSaveAnimation}
                disabled={isSaved}
                className={`flex-1 py-4 rounded-xl font-tech text-xs tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 shadow-lg ${
                   isSaved 
                   ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                   : 'bg-gradient-to-r from-aqua-bio to-deep-purple text-black font-bold hover:scale-[1.02] hover:shadow-glow-aqua'
                }`}
             >
                {isSaved ? (
                   <>Saved to Core</>
                ) : (
                   <>
                     <Save className="w-4 h-4" /> {t.archive}
                   </>
                )}
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};
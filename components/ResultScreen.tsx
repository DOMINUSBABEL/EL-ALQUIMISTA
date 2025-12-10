import React from 'react';
import { GeneratedRecipe } from '../types';
import { RefreshCw, Share2, Sparkles, Loader2, Beaker, Wine, Snowflake, CheckCircle } from 'lucide-react';

interface Props {
  recipe: GeneratedRecipe;
  onReset: () => void;
}

export const ResultScreen: React.FC<Props> = ({ recipe, onReset }) => {
  return (
    <div className="min-h-screen flex flex-col items-center p-0 md:p-8 animate-fade-in bg-darkbg relative">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>

      <div className="w-full max-w-6xl bg-cardbg md:border border-white/5 md:rounded-sm overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative flex flex-col md:flex-row min-h-[90vh] md:min-h-0">
        
        {/* --- LEFT COLUMN: THE HOOK (CONSUMER FACING) --- */}
        <div className="w-full md:w-4/12 relative h-[35vh] md:h-auto bg-black flex flex-col border-b md:border-b-0 md:border-r border-white/5">
          
          {/* Image Container */}
          <div className="relative h-2/3 w-full overflow-hidden">
             {recipe.imageUrl ? (
                <img 
                  src={recipe.imageUrl} 
                  alt={recipe.name} 
                  className="absolute inset-0 w-full h-full object-cover animate-reveal"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
                   <Loader2 className="w-8 h-8 text-gold animate-spin mb-2" />
                   <p className="text-gold/50 font-display text-[10px] tracking-widest uppercase">Ilustrando...</p>
                </div>
              )}
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-cardbg via-transparent to-transparent opacity-80"></div>
          </div>

          {/* The Pitch */}
          <div className="relative p-8 -mt-12 z-10">
            <div className="flex items-center gap-2 mb-2">
               <Sparkles className="w-4 h-4 text-gold" />
               <span className="text-gold font-display text-[10px] tracking-widest uppercase">Signature Serve</span>
            </div>
            <h1 className="text-4xl font-display text-white mb-4 leading-none text-shadow-lg">
               {recipe.name}
            </h1>
            <p className="text-lg text-gray-300 font-serif italic leading-relaxed">
               "{recipe.description}"
            </p>
          </div>
          
          {/* Consumer Tags */}
          <div className="mt-auto p-8 pt-0 flex gap-2 flex-wrap">
            {recipe.flavorProfile.split(',').map((tag, i) => (
                <span key={i} className="px-3 py-1 border border-white/10 text-[10px] text-gray-400 uppercase tracking-wider rounded-sm">
                    {tag.trim()}
                </span>
            ))}
          </div>
        </div>

        {/* --- RIGHT COLUMN: THE SPECS (BARTENDER FACING) --- */}
        <div className="w-full md:w-8/12 p-8 md:p-12 flex flex-col relative bg-cardbg/95">
          
          {/* Header Specs */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-6 mb-8 gap-6">
             <div className="flex items-center gap-3">
                <div className="p-3 bg-white/5 rounded-full border border-white/10">
                    <Wine className="w-5 h-5 text-gold" />
                </div>
                <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Cristalería</p>
                    <p className="text-white font-display text-sm">{recipe.glassType}</p>
                </div>
             </div>
             
             <div className="flex items-center gap-3">
                <div className="p-3 bg-white/5 rounded-full border border-white/10">
                    <Snowflake className="w-5 h-5 text-gold" />
                </div>
                <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Garnish</p>
                    <p className="text-white font-display text-sm">{recipe.garnish}</p>
                </div>
             </div>

             <div className="flex items-center gap-3">
                <div className="p-3 bg-white/5 rounded-full border border-white/10">
                    <Beaker className="w-5 h-5 text-gold" />
                </div>
                <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Método</p>
                    {/* Infer method from instructions usually, or hardcode generic */}
                    <p className="text-white font-display text-sm">Standard Pour</p>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            
            {/* Ingredients List (The Bill) */}
            <div className="bg-white/[0.02] p-6 rounded-sm border border-white/5">
              <h3 className="text-gold font-display text-xs tracking-[0.2em] mb-6 flex items-center gap-2">
                 <span>01.</span> INGREDIENTES
              </h3>
              <ul className="space-y-4">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex justify-between items-center group border-b border-dashed border-white/5 pb-2 last:border-0">
                    <span className="text-gray-200 font-serif text-lg group-hover:text-gold transition-colors">{ing.item}</span>
                    <div className="text-right">
                      <span className="text-gold font-bold font-mono text-base block">{ing.amount}</span>
                      {ing.notes && <span className="text-[9px] text-gray-500 uppercase tracking-wide">{ing.notes}</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions (The Method) */}
            <div>
               <h3 className="text-gold font-display text-xs tracking-[0.2em] mb-6 flex items-center gap-2">
                 <span>02.</span> PREPARACIÓN
              </h3>
               <div className="space-y-6 relative">
                 <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-white/10"></div>
                 {recipe.instructions.map((step, i) => (
                  <div key={i} className="flex gap-4 relative">
                    <div className="w-6 h-6 rounded-full bg-darkbg border border-gold/50 flex items-center justify-center z-10 shrink-0">
                        <span className="text-[10px] text-gold font-bold">{i + 1}</span>
                    </div>
                    <div>
                        <p className="text-gray-300 text-sm font-sans font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Why It Works (The Science) */}
          <div className="bg-gold/5 border border-gold/10 p-4 mb-8">
             <p className="text-xs text-gold-dim font-serif italic text-center">
                <span className="font-bold uppercase not-italic mr-2 text-[9px] tracking-widest">Nota del Alquimista:</span>
                {recipe.whyItWorks}
             </p>
          </div>

          {/* Action Bar */}
          <div className="mt-auto pt-6 border-t border-white/5 flex justify-end gap-4">
            <button
              onClick={onReset}
              className="px-6 py-3 border border-white/10 hover:border-gold hover:bg-gold/5 text-gray-300 hover:text-gold transition-all duration-300 font-display text-xs tracking-widest uppercase flex items-center"
            >
              <RefreshCw className="w-3 h-3 mr-2" />
              Nueva Creación
            </button>
            <button 
              onClick={() => alert("Receta guardada en Grimorio")}
              className="px-6 py-3 bg-gold hover:bg-white text-black transition-all duration-300 font-display text-xs tracking-widest uppercase flex items-center shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              <Share2 className="w-3 h-3 mr-2" />
              Guardar Ficha
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
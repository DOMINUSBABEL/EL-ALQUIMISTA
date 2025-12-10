import React from 'react';
import { GeneratedRecipe } from '../types';
import { RefreshCw, Share2, Sparkles, Loader2 } from 'lucide-react';

interface Props {
  recipe: GeneratedRecipe;
  onReset: () => void;
}

export const ResultScreen: React.FC<Props> = ({ recipe, onReset }) => {
  return (
    <div className="min-h-screen flex flex-col items-center p-0 md:p-8 animate-fade-in bg-darkbg relative">
      
      {/* Background with noise texture overlay if possible, using CSS patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>

      <div className="w-full max-w-5xl bg-cardbg md:border border-white/5 md:rounded-sm overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative flex flex-col md:flex-row min-h-[90vh] md:min-h-0">
        
        {/* Left Column: Image Area */}
        <div className="w-full md:w-5/12 relative h-[40vh] md:h-auto bg-black flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
          {recipe.imageUrl ? (
            <img 
              src={recipe.imageUrl} 
              alt={recipe.name} 
              className="absolute inset-0 w-full h-full object-cover animate-reveal"
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center z-10">
               <Loader2 className="w-10 h-10 text-gold animate-spin mb-4" />
               <p className="text-gold/50 font-display text-xs tracking-widest uppercase">Ilustrando tu creación...</p>
            </div>
          )}
          
          {/* Overlay gradient for text readability if needed on mobile bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-cardbg via-transparent to-transparent md:hidden"></div>
          
          {/* Badge */}
          <div className="absolute top-6 left-6 border border-gold/30 bg-black/60 backdrop-blur-md px-4 py-2">
            <span className="text-gold font-display text-xs tracking-[0.2em]">ALQUIMISTA ®</span>
          </div>
        </div>

        {/* Right Column: Recipe Details */}
        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col relative bg-cardbg">
          
          <div className="mb-10">
             <div className="flex items-center gap-3 mb-2">
               <div className="h-[1px] w-12 bg-gold"></div>
               <span className="text-gold font-display text-xs tracking-widest uppercase">Tu Elixir Personal</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-display text-white mb-4 leading-none">
               {recipe.name}
             </h1>
             <p className="text-xl text-gray-400 font-serif italic leading-relaxed border-l-2 border-gold/20 pl-6">
               "{recipe.description}"
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="text-white font-display text-sm tracking-widest border-b border-white/10 pb-3 mb-4 uppercase">Composición</h3>
              <ul className="space-y-4">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex justify-between items-baseline group">
                    <span className="text-gray-300 font-serif text-lg group-hover:text-gold transition-colors">{ing.item}</span>
                    <div className="flex flex-col items-end">
                      <span className="text-gold font-display text-sm">{ing.amount}</span>
                      {ing.notes && <span className="text-[10px] text-gray-600 uppercase tracking-wide">{ing.notes}</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
               <h3 className="text-white font-display text-sm tracking-widest border-b border-white/10 pb-3 mb-4 uppercase">Ritual</h3>
               <ol className="space-y-4">
                {recipe.instructions.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-gold/40 font-display text-sm">0{i + 1}</span>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="flex gap-6 text-xs font-display tracking-widest text-gray-500 uppercase">
                <div className="flex flex-col">
                   <span className="text-gold-dim mb-1">Copa</span>
                   <span>{recipe.glassType}</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-gold-dim mb-1">Perfil</span>
                   <span>{recipe.flavorProfile}</span>
                </div>
             </div>

             <div className="flex gap-4">
                <button
                  onClick={onReset}
                  className="px-6 py-3 border border-white/10 hover:border-gold hover:bg-gold/5 text-gray-300 hover:text-gold transition-all duration-300 font-display text-xs tracking-widest uppercase flex items-center"
                >
                  <RefreshCw className="w-3 h-3 mr-2" />
                  Reiniciar
                </button>
                <button 
                  onClick={() => alert("Receta copiada al portapapeles")}
                  className="px-6 py-3 bg-gold hover:bg-white text-black transition-all duration-300 font-display text-xs tracking-widest uppercase flex items-center hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                >
                  <Share2 className="w-3 h-3 mr-2" />
                  Guardar
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
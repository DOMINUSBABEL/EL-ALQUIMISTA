import React from 'react';
import { GeneratedRecipe } from '../types';
import { ArrowLeft, Clock, Scroll, ChevronRight, Book } from 'lucide-react';

interface Props {
  history: GeneratedRecipe[];
  baseRecipes: GeneratedRecipe[];
  onSelectRecipe: (recipe: GeneratedRecipe) => void;
  onBack: () => void;
}

export const HistoryScreen: React.FC<Props> = ({ history, baseRecipes, onSelectRecipe, onBack }) => {
  
  const RecipeCard = ({ recipe, isBase = false }: { recipe: GeneratedRecipe, isBase?: boolean }) => (
    <button
      onClick={() => onSelectRecipe(recipe)}
      className={`group relative border p-6 transition-all duration-300 text-left overflow-hidden flex flex-col h-full ${
        isBase 
          ? 'bg-darkbg border-gold/20 hover:border-gold/60 hover:bg-gold/5' 
          : 'bg-cardbg border-white/5 hover:border-gold/30 hover:bg-white/5'
      }`}
    >
      <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight className="w-4 h-4 text-gold" />
      </div>

      <div className="mb-4">
        <span className={`text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 mb-2 ${isBase ? 'text-gold' : 'text-gold-dim'}`}>
          {isBase ? <Book className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
          {isBase ? 'GRIMORIO MAESTRO' : new Date(recipe.createdAt).toLocaleDateString()}
        </span>
        <h3 className={`font-display text-xl transition-colors leading-tight ${isBase ? 'text-gold group-hover:text-white' : 'text-white group-hover:text-gold'}`}>
          {recipe.name}
        </h3>
      </div>
      
      <div className="mt-auto">
        <div className={`w-full h-[1px] mb-3 transition-colors ${isBase ? 'bg-gold/20 group-hover:bg-gold/40' : 'bg-white/10 group-hover:bg-gold/20'}`}></div>
        <p className="font-serif text-sm text-gray-400 italic line-clamp-2 mb-2">
          {recipe.description}
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-[10px] border border-white/10 px-2 py-1 rounded-sm text-gray-500 uppercase tracking-wide">
            {recipe.glassType}
          </span>
            <span className="text-[10px] border border-white/10 px-2 py-1 rounded-sm text-gray-500 uppercase tracking-wide">
            {recipe.flavorProfile.split(',')[0]}
          </span>
        </div>
      </div>
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col p-6 animate-fade-in bg-darkbg relative max-w-6xl mx-auto">
      
      <div className="flex items-center mb-8 pt-4">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-white/10 rounded-full transition-colors mr-4 group"
        >
          <ArrowLeft className="w-6 h-6 text-gold group-hover:-translate-x-1 transition-transform" />
        </button>
        <div>
          <h1 className="font-display text-3xl text-white tracking-widest">LIBRO DE POCIONES</h1>
          <p className="font-serif text-gold-dim italic text-sm">Archivo de conocimiento alquímico</p>
        </div>
      </div>

      {/* User History Section */}
      <div className="mb-12">
        <h2 className="font-display text-white text-lg tracking-widest mb-6 border-b border-white/10 pb-2 flex items-center gap-2">
          <Scroll className="w-4 h-4 text-gold" />
          MIS DESCUBRIMIENTOS
        </h2>
        
        {history.length === 0 ? (
          <div className="p-8 border border-dashed border-white/10 rounded-sm text-center">
            <p className="font-serif text-gray-500 italic">Aún no has creado pociones propias.</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {history.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>

      {/* Base Grimoire Section */}
      <div>
        <h2 className="font-display text-white text-lg tracking-widest mb-6 border-b border-white/10 pb-2 flex items-center gap-2">
           <Book className="w-4 h-4 text-gold" />
           EL GRIMORIO MAESTRO (15 BASES)
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {baseRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} isBase={true} />
          ))}
        </div>
      </div>

    </div>
  );
};
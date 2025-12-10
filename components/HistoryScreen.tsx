import React from 'react';
import { GeneratedRecipe, Language } from '../types';
import { ArrowLeft, Clock, Scroll, ChevronRight, Book, Database } from 'lucide-react';
import { TRANSLATIONS } from '../translations';

interface Props {
  history: GeneratedRecipe[];
  baseRecipes: GeneratedRecipe[];
  onSelectRecipe: (recipe: GeneratedRecipe) => void;
  onBack: () => void;
  language: Language;
}

export const HistoryScreen: React.FC<Props> = ({ history, baseRecipes, onSelectRecipe, onBack, language }) => {
  const t = TRANSLATIONS[language].history;

  const RecipeCard = ({ recipe, isBase = false }: { recipe: GeneratedRecipe, isBase?: boolean }) => (
    <button
      onClick={() => onSelectRecipe(recipe)}
      className={`group relative p-6 rounded-2xl transition-all duration-300 text-left overflow-hidden flex flex-col h-full border hover:scale-[1.02] hover:shadow-lg ${
        isBase 
          ? 'bg-black/40 border-deep-purple/30 hover:border-deep-purple hover:shadow-glow-aqua/20' 
          : 'bg-white/5 border-white/10 hover:border-aqua-bio/50 hover:bg-white/10 hover:shadow-glow-aqua/10'
      }`}
    >
      <div className="absolute top-0 right-0 p-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight className={`w-4 h-4 ${isBase ? 'text-deep-purple' : 'text-aqua-bio'}`} />
      </div>

      <div className="mb-4">
        <span className={`text-[10px] font-tech uppercase tracking-wider flex items-center gap-2 mb-2 ${isBase ? 'text-deep-purple' : 'text-gray-400'}`}>
          {isBase ? <Database className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
          {isBase ? t.db : new Date(recipe.createdAt).toLocaleDateString()}
        </span>
        <h3 className={`font-display font-bold text-xl transition-colors leading-tight ${isBase ? 'text-white group-hover:text-deep-purple' : 'text-white group-hover:text-aqua-bio'}`}>
          {recipe.name}
        </h3>
      </div>
      
      <div className="mt-auto">
        <div className={`w-full h-[1px] mb-4 transition-colors ${isBase ? 'bg-deep-purple/20' : 'bg-white/10'}`}></div>
        <p className="font-sans text-sm text-gray-400 line-clamp-2 mb-4 font-light italic">
          "{recipe.description}"
        </p>
        <div className="flex flex-wrap gap-2">
            <span className={`text-[9px] border px-2 py-1 rounded bg-black/20 font-tech uppercase ${isBase ? 'border-deep-purple/30 text-deep-purple' : 'border-white/10 text-gray-400'}`}>
            {recipe.flavorProfile.split(',')[0]}
          </span>
        </div>
      </div>
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 animate-fade-in bg-void relative max-w-7xl mx-auto">
      
      {/* --- BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
         <div className="absolute inset-0 bg-caribbean-night"></div>
         <div className="absolute top-[-20%] left-[-20%] w-[100vw] h-[100vw] bg-aqua-bio/5 rounded-full blur-[100px] animate-ocean-flow"></div>
         <div className="absolute bottom-[-20%] right-[-20%] w-[100vw] h-[100vw] bg-deep-purple/10 rounded-full blur-[100px] animate-ocean-flow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="flex items-center mb-8 md:mb-12 pt-4 border-b border-white/10 pb-6 sticky top-0 bg-void/90 backdrop-blur-md z-20 -mx-4 px-4 md:static md:bg-transparent md:mx-0 md:px-0">
        <button 
          onClick={onBack}
          className="p-3 border border-white/10 hover:border-aqua-bio hover:bg-aqua-bio/10 rounded-full transition-all mr-6 group active:scale-95"
        >
          <ArrowLeft className="w-5 h-5 text-white group-hover:-translate-x-1 transition-transform group-hover:text-aqua-bio" />
        </button>
        <div>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight mb-1 tropical-gradient-text">{t.title}</h1>
          <p className="font-tech text-xs text-aqua-bio uppercase tracking-[0.2em]">{t.subtitle}</p>
        </div>
      </div>

      {/* User History Section */}
      <div className="mb-12">
        <h2 className="font-tech text-gray-400 text-xs tracking-[0.2em] mb-6 flex items-center gap-3">
          <Scroll className="w-4 h-4 text-solar-coral" />
          {t.recent}
        </h2>
        
        {history.length === 0 ? (
          <div className="p-10 border border-dashed border-white/10 rounded-3xl text-center bg-white/5 flex flex-col items-center justify-center">
            <Database className="w-8 h-8 text-gray-600 mb-2" />
            <p className="font-sans text-gray-500">{t.empty}</p>
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {history.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>

      {/* Base Grimoire Section */}
      <div className="pb-12">
        <h2 className="font-tech text-gray-400 text-xs tracking-[0.2em] mb-6 flex items-center gap-3">
           <Book className="w-4 h-4 text-aqua-bio" />
           {t.master}
        </h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {baseRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} isBase={true} />
          ))}
        </div>
      </div>

    </div>
  );
};
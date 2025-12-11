import React, { useState } from 'react';
import { Hexagon, Sparkles, Database, Eye, Book, X, Menu, FlaskConical, Beaker, Star } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';
import { INVENTORY } from '../constants';

interface Props {
  onStart: () => void;
  onFastTrack: () => void;
  onOpenHistory: () => void;
  language: Language;
}

export const WelcomeScreen: React.FC<Props> = ({ onStart, onFastTrack, onOpenHistory, language }) => {
  const t = TRANSLATIONS[language].welcome;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showInventory, setShowInventory] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // --- Handlers ---
  const handleBehindScenes = () => {
    setIsMenuOpen(false);
    setToastMessage('Próximamente: Descubre los secretos de la IA Alquimista');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleOpenGrimoire = () => {
    setIsMenuOpen(false);
    onOpenHistory();
  };

  const handleOpenInventory = () => {
    setIsMenuOpen(false);
    setShowInventory(true);
  };

  // --- Particle Generation ---
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 3 + 1}px`,
    duration: `${Math.random() * 3 + 2}s`,
    delay: `${Math.random() * 2}s`
  }));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6 text-center animate-fade-in relative overflow-hidden bg-void transition-colors duration-700">
      
      {/* --- EXPONENTIAL BACKGROUND UPGRADE --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Base Gradient Layer */}
        <div className="absolute inset-0 bg-caribbean-night opacity-90 transition-all duration-700"></div>
        
        {/* Texture Layer */}
        <div className="absolute inset-0 bg-theme-pattern opacity-10 mix-blend-overlay"></div>

        {/* Dynamic Nebulas (Large slow moving blobs) */}
        <div className="absolute -top-[40%] -left-[20%] w-[150vw] h-[150vw] bg-aqua-bio/10 rounded-full blur-[150px] animate-nebula-drift mix-blend-screen transition-colors duration-700"></div>
        <div className="absolute -bottom-[40%] -right-[20%] w-[150vw] h-[150vw] bg-deep-purple/15 rounded-full blur-[150px] animate-nebula-drift mix-blend-screen transition-colors duration-700" style={{ animationDelay: '5s', animationDirection: 'alternate-reverse' }}></div>
        <div className="absolute top-[20%] right-[10%] w-[50vw] h-[50vw] bg-solar-coral/5 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen transition-colors duration-700"></div>

        {/* Stardust Particle System */}
        <div className="stardust-container">
          {particles.map((p, i) => (
            <div 
              key={i} 
              className="star-particle bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                '--duration': p.duration,
                '--delay': p.delay
              } as React.CSSProperties}
            ></div>
          ))}
        </div>
        
        {/* Sacred Geometry / Tech Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] md:w-[900px] md:h-[900px] border border-aqua-bio/10 rounded-full animate-spin-slow opacity-30 transition-colors duration-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[110vw] md:w-[700px] md:h-[700px] border border-solar-coral/10 rotate-45 animate-spin-reverse opacity-30 dashed-border transition-colors duration-700"></div>
      </div>

      {/* --- TOAST NOTIFICATION --- */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] animate-fade-in-up w-max max-w-[90vw]">
           <div className="bg-black/80 backdrop-blur-xl border border-aqua-bio/50 text-white px-6 py-4 rounded-full shadow-glow-aqua flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-aqua-bio animate-pulse" />
              <span className="font-tech text-xs md:text-sm tracking-widest uppercase">{toastMessage}</span>
           </div>
        </div>
      )}

      {/* --- INVENTORY MODAL --- */}
      {showInventory && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[85vh] bg-void/90 glass-panel rounded-3xl overflow-hidden flex flex-col border border-aqua-bio/30 shadow-2xl animate-pop">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5 relative overflow-hidden">
               <div className="absolute inset-0 bg-aqua-bio/5"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-2 bg-aqua-bio/20 rounded-lg">
                   <Database className="w-5 h-5 text-aqua-bio" />
                </div>
                <h2 className="font-display font-bold text-xl text-white tracking-wide">Inventario del Alquimista</h2>
              </div>
              <button 
                onClick={() => setShowInventory(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white relative z-10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 custom-scrollbar relative">
              <div className="grid gap-6">
                {INVENTORY.map((category, idx) => (
                  <div key={idx} className="bg-black/40 rounded-xl p-5 border border-white/5 hover:border-aqua-bio/30 transition-colors group">
                    <h3 className="font-tech text-xs uppercase tracking-[0.2em] text-solar-coral mb-4 border-b border-white/5 pb-2 flex items-center gap-2">
                       <Beaker className="w-3 h-3 opacity-50" />
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs md:text-sm text-gray-300 font-sans border border-white/5 group-hover:border-white/10 transition-colors flex items-center gap-1.5">
                           <div className="w-1 h-1 rounded-full bg-aqua-bio/50"></div>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-black/40 text-center flex justify-between items-center px-8">
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="font-tech text-[10px] text-gray-400 uppercase tracking-widest">Sistema Online</span>
              </div>
              <p className="font-tech text-[10px] text-gray-500 uppercase tracking-widest">
                V.3.0.1
              </p>
            </div>
          </div>
        </div>
      )}

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* LOGO AREA WITH MENU */}
        <div className="mb-12 relative">
            {/* The Logo */}
            <div className="relative group cursor-default">
                <div className="absolute inset-0 bg-aqua-bio/20 blur-[50px] rounded-full animate-pulse-slow transition-colors duration-700"></div>
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-aqua-bio/30 rounded-full animate-spin-slow transition-colors duration-700" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }}></div>
                    <div className="absolute inset-0 border-2 border-solar-coral/30 rounded-full animate-spin-reverse transition-colors duration-700" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(60deg)' }}></div>
                    <Hexagon className="w-20 h-20 text-white stroke-[1.5] drop-shadow-[0_0_20px_rgba(var(--color-aqua-bio)/0.8)] fill-white/5 transition-all duration-700" />
                </div>
            </div>

            {/* THE DROPDOWN MENU BUTTON */}
            <div className="absolute -right-16 top-1/2 -translate-y-1/2">
                <div className="relative">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`p-3 rounded-full border border-white/10 bg-black/20 backdrop-blur-md hover:bg-aqua-bio/10 hover:border-aqua-bio/50 hover:text-aqua-bio transition-all duration-300 shadow-glass ${isMenuOpen ? 'text-aqua-bio border-aqua-bio' : 'text-gray-400'}`}
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>

                    {/* MENU DROPDOWN */}
                    {isMenuOpen && (
                        <div className="absolute left-full top-0 ml-4 w-56 bg-void/95 border border-aqua-bio/30 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden animate-fade-in backdrop-blur-xl z-50">
                            <div className="p-1">
                                <button onClick={handleOpenInventory} className="w-full text-left px-4 py-3 hover:bg-white/10 rounded-xl flex items-center gap-3 text-sm text-gray-200 hover:text-white transition-colors group">
                                    <Database className="w-4 h-4 text-aqua-bio group-hover:scale-110 transition-transform" />
                                    <span className="font-tech uppercase tracking-wider text-xs">Ver Inventario</span>
                                </button>
                                <button onClick={handleOpenGrimoire} className="w-full text-left px-4 py-3 hover:bg-white/10 rounded-xl flex items-center gap-3 text-sm text-gray-200 hover:text-white transition-colors group">
                                    <Book className="w-4 h-4 text-solar-coral group-hover:scale-110 transition-transform" />
                                    <span className="font-tech uppercase tracking-wider text-xs">Recetas Clásicas</span>
                                </button>
                                <div className="h-[1px] bg-white/10 my-1"></div>
                                <button onClick={handleBehindScenes} className="w-full text-left px-4 py-3 hover:bg-white/10 rounded-xl flex items-center gap-3 text-sm text-gray-200 hover:text-white transition-colors group">
                                    <Eye className="w-4 h-4 text-deep-purple group-hover:scale-110 transition-transform" />
                                    <span className="font-tech uppercase tracking-wider text-xs">Detrás de Cámaras</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 tracking-tight chrome-text animate-fade-in-up drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          {t.title}
        </h1>
        
        <p className="text-sm md:text-base font-tech text-aqua-bio uppercase tracking-[0.4em] mb-12 animate-fade-in-up opacity-80" style={{ animationDelay: '0.1s' }}>
          {t.quote}
        </p>

        {/* --- MAIN ACTION BUTTONS --- */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          
          {/* PRIMARY START BUTTON */}
          <button 
            onClick={onStart}
            className="group relative flex-1 h-16 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-glow-aqua"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-aqua-bio via-deep-purple to-solar-coral opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-[1px] bg-black/80 rounded-xl backdrop-blur-sm group-hover:bg-black/60 transition-colors"></div>
            
            <div className="relative z-10 h-full flex items-center justify-center gap-3">
              <FlaskConical className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
              <span className="font-display font-bold text-white tracking-[0.2em] text-sm md:text-base">
                {t.start}
              </span>
            </div>
          </button>

          {/* SECONDARY FAST TRACK BUTTON */}
          <button 
            onClick={onFastTrack}
            className="group relative flex-1 h-16 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] border border-white/20 hover:border-solar-coral/50 shadow-glass"
          >
             <div className="absolute inset-0 bg-white/5 group-hover:bg-solar-coral/10 transition-colors"></div>
             
             <div className="relative z-10 h-full flex items-center justify-center gap-3">
               <Sparkles className="w-5 h-5 text-solar-coral group-hover:scale-125 transition-transform" />
               <span className="font-tech font-bold text-gray-300 group-hover:text-white tracking-[0.2em] text-xs md:text-sm uppercase">
                 {t.quick}
               </span>
             </div>
          </button>
        </div>

        {/* --- FOOTER METRICS --- */}
        <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
           <div className="flex flex-col items-center gap-2 group cursor-help">
              <div className="p-2 bg-aqua-bio/10 rounded-full group-hover:bg-aqua-bio/20 transition-colors">
                <Star className="w-4 h-4 text-aqua-bio" />
              </div>
              <span className="text-[10px] font-tech uppercase tracking-widest text-gray-500 group-hover:text-aqua-bio transition-colors">{t.energy}</span>
           </div>
           <div className="flex flex-col items-center gap-2 group cursor-help">
              <div className="p-2 bg-solar-coral/10 rounded-full group-hover:bg-solar-coral/20 transition-colors">
                <Database className="w-4 h-4 text-solar-coral" />
              </div>
              <span className="text-[10px] font-tech uppercase tracking-widest text-gray-500 group-hover:text-solar-coral transition-colors">{t.matter}</span>
           </div>
           <div className="flex flex-col items-center gap-2 group cursor-help">
              <div className="p-2 bg-deep-purple/10 rounded-full group-hover:bg-deep-purple/20 transition-colors">
                <Eye className="w-4 h-4 text-deep-purple" />
              </div>
              <span className="text-[10px] font-tech uppercase tracking-widest text-gray-500 group-hover:text-deep-purple transition-colors">{t.spirit}</span>
           </div>
        </div>

      </div>
    </div>
  );
};
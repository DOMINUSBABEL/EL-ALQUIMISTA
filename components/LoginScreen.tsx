import React, { useState } from 'react';
import { Sparkles, Lock, User, ArrowRight, Hexagon } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface Props {
  onLoginSuccess: () => void;
  language: Language;
}

export const LoginScreen: React.FC<Props> = ({ onLoginSuccess, language }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = TRANSLATIONS[language].login;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular delay de red
    setTimeout(() => {
      // Usuario demo: ALQUIMISTA / ALQUIMISTA
      if (username.toUpperCase().trim() === 'ALQUIMISTA' && password.toUpperCase().trim() === 'ALQUIMISTA') {
        onLoginSuccess();
      } else {
        setError(true);
        setIsSubmitting(false);
        setTimeout(() => setError(false), 2000);
      }
    }, 800);
  };

  // --- Particle Generation (Reduced for Login for better focus) ---
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    duration: `${Math.random() * 4 + 3}s`,
    delay: `${Math.random() * 2}s`
  }));

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-void transition-colors duration-700">
      
      {/* --- BACKGROUND ATMOSPHERE (Consistent with Welcome) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-caribbean-night opacity-90 transition-all duration-700"></div>
        
        {/* Dynamic Nebulas */}
        <div className="absolute top-[-20%] right-[-10%] w-[100vw] h-[100vw] bg-aqua-bio/10 rounded-full blur-[120px] animate-nebula-drift mix-blend-screen transition-colors duration-700"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[100vw] h-[100vw] bg-solar-coral/10 rounded-full blur-[120px] animate-nebula-drift mix-blend-screen" style={{ animationDelay: '2s', animationDirection: 'alternate-reverse' }}></div>
        
        {/* Texture */}
        <div className="absolute inset-0 bg-theme-pattern opacity-10 mix-blend-overlay"></div>
        
        {/* Stardust */}
        <div className="stardust-container">
          {particles.map((p, i) => (
            <div 
              key={i} 
              className="star-particle bg-white/40 shadow-[0_0_5px_rgba(255,255,255,0.4)]"
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
        
        {/* Sacred Geometry */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-spin-slow dashed-border opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rotate-45 animate-spin-reverse opacity-50"></div>
      </div>
      
      <div className="w-full max-w-[420px] animate-fade-in relative z-10 flex flex-col items-center">
        
        {/* METALLIC LOGO */}
        <div className="mb-10 relative group">
            <div className="absolute inset-0 bg-aqua-bio/20 blur-[30px] rounded-full animate-pulse-slow transition-colors duration-700"></div>
            <div className="relative w-28 h-28 flex items-center justify-center">
                {/* 3D Structure Effect */}
                <div className="absolute inset-0 border-2 border-aqua-bio/30 rounded-full animate-spin-slow transition-colors duration-700" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }}></div>
                <div className="absolute inset-0 border-2 border-solar-coral/30 rounded-full animate-spin-reverse transition-colors duration-700" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(60deg)' }}></div>
                
                <Hexagon className="w-16 h-16 text-white stroke-[1.5] drop-shadow-[0_0_15px_rgba(var(--color-aqua-bio)/0.8)] fill-white/5 transition-all duration-700" />
            </div>
        </div>

        {/* TITLE */}
        <div className="text-center mb-10">
            <h1 className="font-display font-bold text-4xl text-white mb-2 tracking-tight tropical-gradient-text transition-all duration-700 drop-shadow-md">
              Alquimista
            </h1>
            <p className="font-tech text-xs tracking-[0.4em] text-aqua-bio/80 uppercase transition-colors duration-700">
              {t.tagline}
            </p>
        </div>

        {/* GLASS CARD FORM */}
        <div className="w-full glass-panel rounded-3xl p-8 relative overflow-hidden group-form border-aqua-bio/20 shadow-glow-aqua/10 transition-all duration-700 backdrop-blur-xl">
            
            {/* Top Shine */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-aqua-bio/50 to-transparent transition-all duration-700"></div>

            <form onSubmit={handleLogin} className="space-y-6">
                
                {/* INPUT: IDENTITY */}
                <div className="group relative">
                    <label className="block text-[10px] font-tech font-bold text-gray-400 mb-2 uppercase tracking-wider">
                        {t.identity}
                    </label>
                    <div className="relative flex items-center bg-black/40 rounded-xl border border-white/10 group-focus-within:border-aqua-bio/50 group-focus-within:shadow-glow-aqua/20 transition-all duration-300">
                        <input 
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-transparent text-base text-white placeholder-gray-600 font-sans focus:outline-none px-4 py-3"
                            placeholder="ALQUIMISTA"
                        />
                        <User className="w-5 h-5 text-gray-500 mr-4 group-focus-within:text-aqua-bio transition-colors" />
                    </div>
                </div>

                {/* INPUT: PASSWORD */}
                <div className="group relative">
                    <label className="block text-[10px] font-tech font-bold text-gray-400 mb-2 uppercase tracking-wider">
                        {t.secret}
                    </label>
                    <div className="relative flex items-center bg-black/40 rounded-xl border border-white/10 group-focus-within:border-solar-coral/50 group-focus-within:shadow-glow-solar/20 transition-all duration-300">
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-transparent text-base text-white placeholder-gray-600 font-sans focus:outline-none px-4 py-3 tracking-widest"
                            placeholder="........"
                        />
                        <Lock className="w-5 h-5 text-gray-500 mr-4 group-focus-within:text-solar-coral transition-colors" />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button type="button" className="text-[10px] text-gray-400 hover:text-white transition-colors font-tech tracking-wide">
                        {t.forgot}
                    </button>
                </div>

                {error && (
                    <div className="text-solar-coral text-[10px] text-center font-tech tracking-wider animate-fade-in border border-solar-coral/30 p-2 bg-solar-coral/10 rounded">
                        {t.error}
                    </div>
                )}

                {/* NEON BUTTON */}
                <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full group overflow-hidden rounded-xl mt-4 shadow-glow-aqua transition-shadow duration-700"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-aqua-bio via-deep-purple to-solar-coral opacity-80 group-hover:opacity-100 transition-opacity duration-300 blur-[5px]"></div>
                    <div className="absolute inset-[1px] bg-black/90 rounded-xl z-10"></div>
                    
                    <div className="relative z-20 flex items-center justify-center py-4 bg-transparent group-hover:bg-white/5 transition-colors">
                        {isSubmitting ? (
                            <Sparkles className="w-5 h-5 text-aqua-bio animate-spin" />
                        ) : (
                            <span className="font-display font-bold text-white tracking-[0.2em] text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                                {t.enter} <ArrowRight className="w-4 h-4 text-aqua-bio" />
                            </span>
                        )}
                    </div>
                </button>

            </form>
        </div>
        
        <div className="mt-8 flex justify-center space-x-8 text-[10px] text-gray-600 uppercase tracking-widest font-tech">
           <button className="hover:text-aqua-bio transition-colors">{t.privacy}</button>
           <button className="hover:text-aqua-bio transition-colors">{t.terms}</button>
           <button className="hover:text-aqua-bio transition-colors">{t.help}</button>
        </div>
      </div>
    </div>
  );
};
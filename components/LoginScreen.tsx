import React, { useState } from 'react';
import { ArrowRight, Hexagon } from 'lucide-react';

interface Props {
  onLoginSuccess: () => void;
}

export const LoginScreen: React.FC<Props> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a brief secure check
    setTimeout(() => {
      // Case insensitive check for better UX
      if (username.toUpperCase().trim() === 'ALQUIMISTA' && password.toUpperCase().trim() === 'ALQUIMISTA') {
        onLoginSuccess();
      } else {
        setError(true);
        setIsSubmitting(false);
        setTimeout(() => setError(false), 2000);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-darkbg">
      {/* Mystical Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-darkbg to-darkbg opacity-60"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="w-full max-w-md animate-fade-in relative z-10">
        <div className="text-center mb-12">
            <div className="relative inline-flex items-center justify-center mb-6 group">
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
                <Hexagon className="w-16 h-16 text-gold stroke-[1.5] animate-pulse-slow" />
                <span className="absolute text-2xl font-display text-gold font-bold">A</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-white tracking-[0.2em] mb-2">ALQUIMISTA</h1>
            <p className="font-serif text-gold-dim italic text-lg tracking-wide">La ciencia de lo sublime</p>
        </div>

        <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-sm shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
            
            <form onSubmit={handleLogin} className="space-y-8">
                <div className="space-y-6">
                  <div className="group relative">
                      <input 
                          type="text" 
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="peer w-full bg-transparent border-b border-gray-700 text-white py-2 focus:outline-none focus:border-gold transition-colors placeholder-transparent text-lg tracking-wide uppercase"
                          id="username"
                          placeholder="Identificación"
                          autoComplete="off"
                          autoFocus
                      />
                      <label htmlFor="username" className="absolute left-0 -top-3.5 text-xs text-gold-dim transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold uppercase tracking-widest">
                        Identidad
                      </label>
                  </div>

                  <div className="group relative">
                      <input 
                          type="password" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="peer w-full bg-transparent border-b border-gray-700 text-white py-2 focus:outline-none focus:border-gold transition-colors placeholder-transparent text-lg tracking-wide"
                          id="password"
                          placeholder="Clave"
                      />
                      <label htmlFor="password" className="absolute left-0 -top-3.5 text-xs text-gold-dim transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold uppercase tracking-widest">
                        Clave Secreta
                      </label>
                  </div>
                </div>

                {error && (
                    <div className="text-red-400 text-xs text-center font-serif tracking-widest animate-pulse border border-red-900/30 p-2 bg-red-900/10 uppercase">
                        Acceso Denegado: Credenciales Inválidas
                    </div>
                )}

                <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold/90 hover:bg-white text-black font-display font-bold py-4 px-4 transition-all duration-500 flex items-center justify-center group uppercase tracking-[0.15em] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                      <span className="animate-pulse">Verificando...</span>
                    ) : (
                      <>
                        <span>Ingresar</span>
                        <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                </button>
            </form>
        </div>
        
        <div className="mt-8 flex justify-center space-x-4 opacity-30">
          <div className="w-1 h-1 bg-gold rounded-full"></div>
          <div className="w-1 h-1 bg-gold rounded-full"></div>
          <div className="w-1 h-1 bg-gold rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
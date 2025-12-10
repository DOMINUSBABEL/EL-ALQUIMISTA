import React from 'react';
import { Hexagon } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center animate-fade-in bg-darkbg relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-darkbg to-black"></div>

      <div className="relative z-10">
        <div className="relative w-24 h-24 flex items-center justify-center mb-8">
            <div className="absolute inset-0 border border-gold/20 rotate-45 animate-spin duration-[10s] linear"></div>
            <div className="absolute inset-2 border border-gold/40 -rotate-12 animate-spin duration-[15s] linear"></div>
            <Hexagon className="w-12 h-12 text-gold animate-pulse-slow" />
        </div>
        
        <h2 className="text-2xl font-display text-white tracking-[0.2em] mb-3">DESTILANDO ESENCIA</h2>
        <p className="text-gold-dim font-serif italic text-lg animate-pulse">Consultando los archivos del alquimista...</p>
      </div>
      
      {/* Progress Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-900">
         <div className="h-full bg-gold animate-shimmer w-1/2 mx-auto blur-sm"></div>
      </div>
    </div>
  );
};
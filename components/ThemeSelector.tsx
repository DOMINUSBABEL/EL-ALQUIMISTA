import React, { useState } from 'react';
import { Palette, ChevronDown, Check, Beaker, Skull, Zap, Scroll } from 'lucide-react';
import { ThemeId } from '../types';
import { THEMES } from '../themes';

interface Props {
  currentTheme: ThemeId;
  onThemeChange: (theme: ThemeId) => void;
}

export const ThemeSelector: React.FC<Props> = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (id: ThemeId) => {
    onThemeChange(id);
    setIsOpen(false);
  };

  const getIcon = (id: ThemeId) => {
    switch (id) {
      case 'alchemist': return <Scroll className="w-3 h-3" />;
      case 'pirate': return <Skull className="w-3 h-3" />;
      case 'cyberpunk': return <Zap className="w-3 h-3" />;
      case 'chemical': return <Beaker className="w-3 h-3" />;
      default: return <Palette className="w-3 h-3" />;
    }
  };

  return (
    <div className="relative z-50">
      <button 
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/40 border border-white/10 hover:border-aqua-bio/50 transition-all backdrop-blur-md text-white/80 hover:text-white"
        title="Change Theme"
      >
        <Palette className="w-4 h-4 text-solar-coral" />
        <span className="font-tech text-xs tracking-wider uppercase hidden sm:inline">{THEMES[currentTheme].name.split(' ')[0]}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-[#0a0a0c] border border-white/10 rounded-lg overflow-hidden shadow-glow-solar animate-fade-in flex flex-col">
          {Object.values(THEMES).map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleSelect(theme.id)}
              className={`px-4 py-3 text-left font-tech text-xs tracking-wider hover:bg-white/10 transition-colors flex items-center justify-between group ${
                currentTheme === theme.id ? 'text-aqua-bio bg-white/5' : 'text-gray-400'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`${currentTheme === theme.id ? 'text-aqua-bio' : 'text-gray-500 group-hover:text-white'}`}>
                    {getIcon(theme.id)}
                </span>
                {theme.name}
              </div>
              {currentTheme === theme.id && <Check className="w-3 h-3" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { Language } from '../types';

interface Props {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

const LANGUAGES: { code: Language; name: string }[] = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'ru', name: 'Русский' },
  { code: 'zh', name: '中文' },
  { code: 'pt', name: 'Português' },
  { code: 'ar', name: 'العربية' },
];

export const LanguageSelector: React.FC<Props> = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (code: Language) => {
    onLanguageChange(code);
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      <button 
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/40 border border-white/10 hover:border-neon-blue/50 transition-all backdrop-blur-md text-white/80 hover:text-white"
      >
        <Globe className="w-4 h-4 text-neon-blue" />
        <span className="font-tech text-xs tracking-wider uppercase">{currentLanguage.toUpperCase()}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-32 bg-[#0a0a0c] border border-white/10 rounded-lg overflow-hidden shadow-neon-blue animate-fade-in flex flex-col">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`px-4 py-2 text-left font-tech text-xs tracking-wider hover:bg-white/10 transition-colors ${
                currentLanguage === lang.code ? 'text-neon-blue bg-white/5' : 'text-gray-400'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

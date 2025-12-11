import React, { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { LoadingScreen } from './components/LoadingScreen';
import { ResultScreen } from './components/ResultScreen';
import { LoginScreen } from './components/LoginScreen';
import { HistoryScreen } from './components/HistoryScreen';
import { QuickSelectionScreen } from './components/QuickSelectionScreen';
import { LanguageSelector } from './components/LanguageSelector';
import { ThemeSelector } from './components/ThemeSelector';
import { AppState, GeneratedRecipe, Language, ThemeId } from './types';
import { INVENTORY, BASE_GRIMOIRE_RECIPES } from './constants';
import { generateCocktailRecipe, generateCocktailImage } from './services/geminiService';
import { saveHistorySafe, loadHistory } from './services/storageService';
import { THEMES } from './themes';
import { Zap, ExternalLink } from 'lucide-react';

// Local interface definition to avoid global namespace conflicts
interface AIStudio {
  hasSelectedApiKey: () => Promise<boolean>;
  openSelectKey: () => Promise<void>;
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('login');
  const [recipe, setRecipe] = useState<GeneratedRecipe | null>(null);
  const [history, setHistory] = useState<GeneratedRecipe[]>([]);
  const [quickOptions, setQuickOptions] = useState<GeneratedRecipe[]>([]);
  const [language, setLanguage] = useState<Language>('es');
  const [theme, setTheme] = useState<ThemeId>('alchemist');
  const [hasApiKey, setHasApiKey] = useState<boolean>(false);
  const [checkingKey, setCheckingKey] = useState<boolean>(true);

  // Check for API Key on mount (Required for Gemini 3)
  useEffect(() => {
    const checkKey = async () => {
      try {
        const aistudio = (window as any).aistudio as AIStudio | undefined;
        if (aistudio) {
          const has = await aistudio.hasSelectedApiKey();
          setHasApiKey(has);
        } else {
          // Fallback for dev environments without the wrapper (assumes .env key is present)
          setHasApiKey(true);
        }
      } catch (e) {
        console.error("Error checking API key", e);
        setHasApiKey(false);
      } finally {
        setCheckingKey(false);
      }
    };
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    const aistudio = (window as any).aistudio as AIStudio | undefined;
    if (aistudio) {
      try {
        await aistudio.openSelectKey();
        setHasApiKey(true);
      } catch (e) {
        console.error("Key selection failed", e);
      }
    }
  };

  // Load history on mount
  useEffect(() => {
    setHistory(loadHistory());
  }, []);

  // Update document direction for Arabic
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  // Apply Theme CSS Variables
  useEffect(() => {
    const selectedTheme = THEMES[theme];
    if (selectedTheme) {
      const root = document.documentElement;
      root.style.setProperty('--color-void', selectedTheme.colors.void);
      root.style.setProperty('--color-aqua-bio', selectedTheme.colors.aquaBio);
      root.style.setProperty('--color-solar-coral', selectedTheme.colors.solarCoral);
      root.style.setProperty('--color-palm-neon', selectedTheme.colors.palmNeon);
      root.style.setProperty('--color-deep-purple', selectedTheme.colors.deepPurple);
      root.style.setProperty('--font-display', selectedTheme.fontDisplay);
      root.style.setProperty('--font-sans', selectedTheme.fontSans);
      root.style.setProperty('--bg-pattern', selectedTheme.bgPattern);
      root.style.setProperty('--bg-anim', selectedTheme.bgAnim);
    }
  }, [theme]);

  // Use the safe storage service
  const saveToHistory = (newRecipe: GeneratedRecipe) => {
    const updatedHistory = saveHistorySafe(newRecipe, history);
    setHistory(updatedHistory);
  };

  const handleLoginSuccess = () => {
    setAppState('welcome');
  };

  const startQuiz = () => {
    setAppState('quiz');
  };

  const handleOpenHistory = () => {
    setAppState('history');
  };

  const handleSelectHistoryRecipe = (selectedRecipe: GeneratedRecipe) => {
    setRecipe(selectedRecipe);
    setAppState('result');
  };

  const generateRecipeFlow = async (inputs: string[]) => {
    setAppState('generating');
    try {
      // Step 1: Generate the recipe text (Fast)
      const recipeData = await generateCocktailRecipe(INVENTORY, inputs, language);
      
      setRecipe(recipeData);
      setAppState('result');
      
      // Initial save without image
      saveToHistory(recipeData);

      // Step 2: Generate the image in the background (Slower)
      generateCocktailImage(recipeData).then((imageUrl) => {
        if (imageUrl) {
          const recipeWithImage = { ...recipeData, imageUrl };
          setRecipe(prev => (prev && prev.id === recipeData.id) ? recipeWithImage : prev);
          // Update history with the image
          saveToHistory(recipeWithImage);
        }
      });

    } catch (error) {
      console.error("Failed to generate", error);
      setAppState('welcome');
    }
  };

  const handleQuizComplete = (answers: string[]) => {
    generateRecipeFlow(answers);
  };

  const handleFastTrack = () => {
    const shuffled = [...BASE_GRIMOIRE_RECIPES].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    
    setQuickOptions(selected);
    setAppState('quickSelection');
  };

  const handleQuickSelection = (selectedRecipe: GeneratedRecipe) => {
    // For quick selection, we treat it as a new generation to save it to history
    const newInstance = { 
        ...selectedRecipe, 
        id: crypto.randomUUID(), 
        createdAt: Date.now() 
    };
    
    setRecipe(newInstance);
    setAppState('result');
    saveToHistory(newInstance);

    // If base recipe has image, keep it, otherwise generate (though base usually has url)
    if (!newInstance.imageUrl) {
        generateCocktailImage(newInstance).then((imageUrl) => {
            if (imageUrl) {
              const updated = { ...newInstance, imageUrl };
              setRecipe(prev => (prev && prev.id === newInstance.id) ? updated : prev);
              saveToHistory(updated);
            }
        });
    }
  };

  const resetApp = () => {
    setRecipe(null);
    setAppState('welcome');
  };

  // API KEY BLOCKING SCREEN (Gemini 3 Requirement)
  if (!checkingKey && !hasApiKey) {
    return (
      <div className="min-h-screen bg-void flex items-center justify-center p-6 text-center transition-colors duration-700">
         <div className="absolute inset-0 bg-caribbean-night opacity-80"></div>
         <div className="relative z-10 max-w-md w-full glass-panel rounded-3xl p-8 border border-aqua-bio/30 shadow-glow-aqua/20">
             <div className="flex justify-center mb-6">
                <div className="p-4 bg-aqua-bio/10 rounded-full border border-aqua-bio/50 animate-pulse-slow">
                   <Zap className="w-10 h-10 text-aqua-bio" />
                </div>
             </div>
             <h1 className="text-3xl font-display font-bold text-white mb-4 tracking-tight">Gemini 3.0</h1>
             <p className="text-gray-300 font-sans mb-8">
               Para invocar los modelos Gemini 3 Pro e Image 3, se requiere una configuración de energía avanzada (API Key).
             </p>
             <button 
                onClick={handleSelectKey}
                className="w-full py-4 bg-aqua-bio text-black font-tech font-bold text-sm tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-colors shadow-glow-aqua"
             >
                Conectar Energía
             </button>
             <div className="mt-6">
               <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[10px] text-gray-500 hover:text-aqua-bio uppercase tracking-widest transition-colors font-tech">
                 Documentación de Facturación <ExternalLink className="w-3 h-3" />
               </a>
             </div>
         </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-void text-white font-sans selection:bg-aqua-bio selection:text-black transition-colors duration-700">
      {/* Settings Overlay (Lang + Theme) */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <ThemeSelector currentTheme={theme} onThemeChange={setTheme} />
        <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
      </div>

      {appState === 'login' && <LoginScreen onLoginSuccess={handleLoginSuccess} language={language} />}
      {appState === 'welcome' && <WelcomeScreen onStart={startQuiz} onFastTrack={handleFastTrack} onOpenHistory={handleOpenHistory} language={language} />}
      {appState === 'history' && <HistoryScreen history={history} baseRecipes={BASE_GRIMOIRE_RECIPES} onSelectRecipe={handleSelectHistoryRecipe} onBack={() => setAppState('welcome')} language={language} />}
      {appState === 'quiz' && <QuizScreen onComplete={handleQuizComplete} language={language} />}
      {appState === 'quickSelection' && <QuickSelectionScreen options={quickOptions} onSelect={handleQuickSelection} onBack={() => setAppState('welcome')} language={language} />}
      {appState === 'generating' && <LoadingScreen language={language} />}
      {appState === 'result' && recipe && <ResultScreen recipe={recipe} onReset={resetApp} language={language} />}
    </main>
  );
};

export default App;
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
import { INVENTORY, SCENARIO_QUESTIONS, BASE_GRIMOIRE_RECIPES } from './constants';
import { generateCocktailRecipe, generateCocktailImage } from './services/geminiService';
import { THEMES } from './themes';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('login');
  const [recipe, setRecipe] = useState<GeneratedRecipe | null>(null);
  const [history, setHistory] = useState<GeneratedRecipe[]>([]);
  const [quickOptions, setQuickOptions] = useState<GeneratedRecipe[]>([]);
  const [language, setLanguage] = useState<Language>('es');
  const [theme, setTheme] = useState<ThemeId>('pirate');

  // Load history on mount
  useEffect(() => {
    const saved = localStorage.getItem('alquimista_history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading history", e);
      }
    }
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

  const saveToHistory = (newRecipe: GeneratedRecipe) => {
    const recipeToSave = { ...newRecipe, imageUrl: undefined }; 
    setHistory(prev => {
      const updated = [recipeToSave, ...prev];
      localStorage.setItem('alquimista_history', JSON.stringify(updated));
      return updated;
    });
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
      
      saveToHistory(recipeData);

      // Step 2: Generate the image in the background (Slower)
      generateCocktailImage(recipeData).then((imageUrl) => {
        if (imageUrl) {
          setRecipe(prev => prev ? { ...prev, imageUrl } : null);
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
    setRecipe(selectedRecipe);
    setAppState('result');
    saveToHistory(selectedRecipe);

    if (!selectedRecipe.imageUrl) {
        generateCocktailImage(selectedRecipe).then((imageUrl) => {
            if (imageUrl) {
              setRecipe(prev => prev ? { ...prev, imageUrl } : null);
            }
        });
    }
  };

  const resetApp = () => {
    setRecipe(null);
    setAppState('welcome');
  };

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

import React, { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { LoadingScreen } from './components/LoadingScreen';
import { ResultScreen } from './components/ResultScreen';
import { LoginScreen } from './components/LoginScreen';
import { HistoryScreen } from './components/HistoryScreen';
import { QuickSelectionScreen } from './components/QuickSelectionScreen';
import { AppState, GeneratedRecipe } from './types';
import { INVENTORY, SCENARIO_QUESTIONS, BASE_GRIMOIRE_RECIPES } from './constants';
import { generateCocktailRecipe, generateCocktailImage } from './services/geminiService';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('login');
  const [recipe, setRecipe] = useState<GeneratedRecipe | null>(null);
  const [history, setHistory] = useState<GeneratedRecipe[]>([]);
  const [quickOptions, setQuickOptions] = useState<GeneratedRecipe[]>([]);

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

  const saveToHistory = (newRecipe: GeneratedRecipe) => {
    // We create a copy without the heavy base64 imageURL to save space in localStorage
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
      const recipeData = await generateCocktailRecipe(INVENTORY, inputs);
      
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
    // Select 3 random unique recipes from the Base Grimoire
    const shuffled = [...BASE_GRIMOIRE_RECIPES].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    
    setQuickOptions(selected);
    setAppState('quickSelection');
  };

  const handleQuickSelection = (selectedRecipe: GeneratedRecipe) => {
    // When a user picks a quick option, we treat it like a result
    // We save it to history and try to generate an image for it if it doesn't have one
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
    <main className="min-h-screen bg-darkbg text-white font-sans selection:bg-gold selection:text-black">
      {appState === 'login' && <LoginScreen onLoginSuccess={handleLoginSuccess} />}
      {appState === 'welcome' && <WelcomeScreen onStart={startQuiz} onFastTrack={handleFastTrack} onOpenHistory={handleOpenHistory} />}
      {appState === 'history' && <HistoryScreen history={history} baseRecipes={BASE_GRIMOIRE_RECIPES} onSelectRecipe={handleSelectHistoryRecipe} onBack={() => setAppState('welcome')} />}
      {appState === 'quiz' && <QuizScreen onComplete={handleQuizComplete} />}
      {appState === 'quickSelection' && <QuickSelectionScreen options={quickOptions} onSelect={handleQuickSelection} onBack={() => setAppState('welcome')} />}
      {appState === 'generating' && <LoadingScreen />}
      {appState === 'result' && recipe && <ResultScreen recipe={recipe} onReset={resetApp} />}
    </main>
  );
};

export default App;
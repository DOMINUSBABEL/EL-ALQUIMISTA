import React, { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { LoadingScreen } from './components/LoadingScreen';
import { ResultScreen } from './components/ResultScreen';
import { LoginScreen } from './components/LoginScreen';
import { AppState, GeneratedRecipe } from './types';
import { INVENTORY } from './constants';
import { generateCocktailRecipe, generateCocktailImage } from './services/geminiService';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('login');
  const [recipe, setRecipe] = useState<GeneratedRecipe | null>(null);

  const handleLoginSuccess = () => {
    setAppState('welcome');
  };

  const startQuiz = () => {
    setAppState('quiz');
  };

  const handleQuizComplete = async (answers: string[]) => {
    setAppState('generating');
    try {
      // Step 1: Generate the recipe text (Fast)
      const recipeData = await generateCocktailRecipe(INVENTORY, answers);
      
      // We set the recipe immediately so we can show the result screen.
      // The ResultScreen will handle showing a loader for the image or the image itself once updated.
      setRecipe(recipeData);
      setAppState('result');

      // Step 2: Generate the image in the background (Slower)
      // We start this immediately after setting result state.
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

  const resetApp = () => {
    setRecipe(null);
    setAppState('welcome');
  };

  return (
    <main className="min-h-screen bg-darkbg text-white font-sans selection:bg-gold selection:text-black">
      {appState === 'login' && <LoginScreen onLoginSuccess={handleLoginSuccess} />}
      {appState === 'welcome' && <WelcomeScreen onStart={startQuiz} />}
      {appState === 'quiz' && <QuizScreen onComplete={handleQuizComplete} />}
      {appState === 'generating' && <LoadingScreen />}
      {appState === 'result' && recipe && <ResultScreen recipe={recipe} onReset={resetApp} />}
    </main>
  );
};

export default App;
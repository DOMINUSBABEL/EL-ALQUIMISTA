export interface InventoryItem {
  category: string;
  items: string[];
}

export interface QuizOption {
  id: string;
  text: string;
  value: string; // The "vibe" or flavor profile key
  emoji?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  scenario: string;
  options: QuizOption[];
}

export interface GeneratedRecipe {
  name: string;
  description: string;
  ingredients: {
    amount: string;
    item: string;
    notes?: string;
  }[];
  instructions: string[];
  glassType: string;
  garnish: string;
  flavorProfile: string;
  whyItWorks: string; // Explanation of the chemistry
  imageUrl?: string; // New field for the generated image
}

export type AppState = 'login' | 'welcome' | 'quiz' | 'generating' | 'result';
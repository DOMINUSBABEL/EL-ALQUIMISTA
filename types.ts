
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
  id: string; // Unique ID for history
  createdAt: number; // Timestamp
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

export type AppState = 'login' | 'welcome' | 'quiz' | 'generating' | 'result' | 'history' | 'quickSelection';

export type Language = 'es' | 'en' | 'fr' | 'de' | 'ru' | 'zh' | 'pt' | 'ar';

export type ThemeId = 'alchemist' | 'pirate' | 'cyberpunk' | 'chemical';

export interface ThemeDefinition {
  id: ThemeId;
  name: string;
  colors: {
    void: string;        // Background
    aquaBio: string;     // Primary Highlight
    solarCoral: string;  // Secondary Highlight
    palmNeon: string;    // Accent
    deepPurple: string;  // Tertiary/Shadow
  };
  fontDisplay: string;
  bgPattern: string;
}

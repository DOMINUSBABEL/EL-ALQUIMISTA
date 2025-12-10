
import { ThemeDefinition } from './types';

// NOTE: Colors are defined as "R G B" strings to allow Tailwind opacity modifiers to work
// e.g. "255 255 255" -> rgb(255 255 255 / 0.5)

export const THEMES: Record<string, ThemeDefinition> = {
  alchemist: {
    id: 'alchemist',
    name: 'Classic Alchemist',
    colors: {
      void: '5 10 18',        // Dark Blue/Black
      aquaBio: '255 215 0',   // Gold
      solarCoral: '255 255 255', // Silver/Mercury
      palmNeon: '75 0 130',   // Indigo/Mystic
      deepPurple: '138 43 226', // Blue Violet
    },
    fontDisplay: '"Cinzel", serif',
    fontSans: '"Inter", sans-serif',
    bgPattern: "url('https://www.transparenttextures.com/patterns/stardust.png')",
    bgAnim: 'float 8s ease-in-out infinite'
  },
  pirate: {
    id: 'pirate',
    name: 'Caribbean Pirate',
    colors: {
      void: '11 15 20',       // Dark Deep Water
      aquaBio: '0 242 255',   // Turquoise
      solarCoral: '255 94 87', // Coral Red
      palmNeon: '11 232 129', // Seaweed Green
      deepPurple: '87 95 207', // Ocean Blue
    },
    fontDisplay: '"UnifrakturMaguntia", cursive',
    fontSans: '"Inter", sans-serif', // Clean but classic
    bgPattern: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
    bgAnim: 'oceanFlow 15s ease-in-out infinite'
  },
  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyberpunk 2077',
    colors: {
      void: '5 5 10',          // Near Black
      aquaBio: '0 255 234',   // Neon Cyan
      solarCoral: '255 0 85', // Neon Pink
      palmNeon: '57 255 20',  // Neon Green
      deepPurple: '136 0 255',// Neon Purple
    },
    fontDisplay: '"Orbitron", sans-serif',
    fontSans: '"Rajdhani", sans-serif', // Techy body text
    bgPattern: "url('https://www.transparenttextures.com/patterns/cubes.png')",
    bgAnim: 'glitch 4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite'
  },
  chemical: {
    id: 'chemical',
    name: 'Chemical Lab',
    colors: {
      void: '15 23 42',       // Slate 900
      aquaBio: '56 189 248',  // Sky Blue
      solarCoral: '251 191 36', // Warning Yellow
      palmNeon: '74 222 128', // Acid Green
      deepPurple: '148 163 184', // Sterile Grey
    },
    fontDisplay: '"Rajdhani", sans-serif',
    fontSans: '"Inter", sans-serif',
    bgPattern: "url('https://www.transparenttextures.com/patterns/hexellence.png')",
    bgAnim: 'liquid 10s ease-in-out infinite'
  }
};

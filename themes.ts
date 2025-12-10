
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
    bgPattern: "url('https://www.transparenttextures.com/patterns/stardust.png')"
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
    bgPattern: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')"
  },
  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyberpunk 2077',
    colors: {
      void: '0 0 0',          // Pure Black
      aquaBio: '0 255 234',   // Neon Cyan
      solarCoral: '255 0 85', // Neon Pink
      palmNeon: '57 255 20',  // Neon Green
      deepPurple: '136 0 255',// Neon Purple
    },
    fontDisplay: '"Orbitron", sans-serif',
    bgPattern: "url('https://www.transparenttextures.com/patterns/cubes.png')"
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
    bgPattern: "url('https://www.transparenttextures.com/patterns/hexellence.png')"
  }
};

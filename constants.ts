import { InventoryItem, QuizQuestion } from './types';

export const INVENTORY: InventoryItem[] = [
  {
    category: 'Destilados Base',
    items: [
      'Ron Oscuro (Renova)',
      'Ron Blanco (Bacardí)',
      'Tequila Blanco',
      'Tequila Reposado',
      'Pisco',
      'Amaretto'
    ]
  },
  {
    category: 'Licores y Cremas',
    items: [
      'Licor de Banana',
      'Licor de Menta',
      'Licor de Melón',
      'Licor de Café',
      'Licor de Coco',
      'Triple Sec'
    ]
  },
  {
    category: 'Mezcladores y Jugos',
    items: [
      'Concentrado de Limón',
      'Jugo de Maracuyá',
      'Jugo de Naranja',
      'Jugo de Piña',
      'Mermelada de Coco',
      'Frutos Rojos',
      'Jarabe de Goma / Azúcar Líquida ("La Broma")'
    ]
  },
  {
    category: 'Extras y Decoración',
    items: [
      'Vaso Michelado (Sal/Tajín)',
      'Salsa Tártara (Interpretado como elemento cremoso o salado)',
      'Hielo',
      'Agua',
      'Agua con gas (si disponible)'
    ]
  }
];

export const SCENARIO_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Cuál es el 'Mood' de la noche?",
    scenario: "Imagina que entras al bar. La iluminación es tenue, la música suena...",
    options: [
      { id: 'party', text: "Fiesta y descontrol tropical", value: "Energético, dulce y frutal", emoji: "🌴" },
      { id: 'classy', text: "Sofisticado y conversador", value: "Seco, fuerte y complejo", emoji: "🍸" },
      { id: 'chill', text: "Relax total y desconexión", value: "Refrescante y suave", emoji: "🧊" },
      { id: 'adventurous', text: "Quiero probar algo raro", value: "Exótico y experimental", emoji: "🧪" }
    ]
  },
  {
    id: 2,
    question: "Tu paladar te pide...",
    scenario: "Cierras los ojos y piensas en el primer sorbo perfectos.",
    options: [
      { id: 'sweet', text: "Algo dulcecito como un postre", value: "Dulce y cremoso", emoji: "🍬" },
      { id: 'sour', text: "Cítrico que me despierte", value: "Ácido y vibrante", emoji: "🍋" },
      { id: 'bitter', text: "Amargo o con carácter fuerte", value: "Amargo o herbal", emoji: "☕" },
      { id: 'balanced', text: "Un equilibrio perfecto", value: "Balanceado agridulce", emoji: "⚖️" }
    ]
  },
  {
    id: 3,
    question: "¿Dónde te imaginas bebiendo esto?",
    scenario: "El entorno define el sabor.",
    options: [
      { id: 'beach', text: "Frente al mar caribe", value: "Tropical, hielo, frutas", emoji: "🏖️" },
      { id: 'city', text: "Rooftop en la ciudad", value: "Cosmopolita y elegante", emoji: "🌃" },
      { id: 'home', text: "Sofá de casa viendo pelis", value: "Reconfortante y fácil", emoji: "🛋️" },
      { id: 'dinner', text: "Acompañando una cena", value: "Aperitivo o digestivo", emoji: "🍽️" }
    ]
  },
  {
    id: 4,
    question: "¿Nivel de intensidad alcohólica?",
    scenario: "Sé sincero/a contigo mismo/a.",
    options: [
      { id: 'soft', text: "Suave, que no se sienta tanto", value: "Baja graduación, mucho mixer", emoji: "🍃" },
      { id: 'medium', text: "Punto medio alegre", value: "Graduación media", emoji: "🙂" },
      { id: 'strong', text: "Pegador, hoy se olvida todo", value: "Alta graduación, espirituoso", emoji: "🔥" }
    ]
  },
  {
    id: 5,
    question: "El ingrediente sorpresa...",
    scenario: "Si pudieras elegir una nota dominante.",
    options: [
      { id: 'fruity', text: "Explosión Frutal", value: "Frutos rojos, maracuyá, piña", emoji: "🍍" },
      { id: 'creamy', text: "Textura Cremosa", value: "Coco, banana, lácteo", emoji: "🥥" },
      { id: 'fresh', text: "Frescura Mentolada", value: "Menta, limón, hierbas", emoji: "🌿" },
      { id: 'coffee', text: "Toque de Café/Chocolate", value: "Café, tostado", emoji: "🍫" }
    ]
  }
];
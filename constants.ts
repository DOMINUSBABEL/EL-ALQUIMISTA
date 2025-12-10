import { InventoryItem, QuizQuestion, GeneratedRecipe } from './types';

export const INVENTORY: InventoryItem[] = [
  {
    category: 'Bases de Alta Rentabilidad (Casa)',
    items: [
      'Seco Herrerano (Neutro/Caña)',
      'Ron Añejo (De la Casa)',
      'Ron Blanco (Bacardí)',
      'Vodka (Standard)'
    ]
  },
  {
    category: 'Espirituosos Premium / Específicos',
    items: [
      'Tequila Blanco',
      'Tequila Reposado',
      'Licor de Anís',
      'Amaretto',
      'Triple Sec'
    ]
  },
  {
    category: 'Mezcladores Volumétricos (Bajo Costo)',
    items: [
      'Jugo de Naranja',
      'Jugo de Piña',
      'Concentrado de Limón',
      'Jarabe de Goma ("La Broma")',
      'Agua / Soda'
    ]
  },
  {
    category: 'Saborizantes y Acentos (Usar con Medida)',
    items: [
      'Licor de Banana',
      'Licor de Menta',
      'Licor de Melón',
      'Licor de Café',
      'Licor de Coco',
      'Jugo de Maracuyá',
      'Frutos Rojos',
      'Mermelada de Coco'
    ]
  },
  {
    category: 'Finalizadores',
    items: [
      'Salsa Tabasco',
      'Borde Michelado (Sal/Tajín)',
      'Hielo'
    ]
  }
];

export const BASE_GRIMOIRE_RECIPES: GeneratedRecipe[] = [
  // --- GRUPO 1: CLÁSICOS REINTERPRETADOS (1-10) ---
  {
    id: 'base-1',
    createdAt: 1700000000001,
    name: 'El Clásico Renacido',
    description: 'Una reinterpretación sofisticada del Daiquiri, donde la pureza del Ron Blanco baila con la acidez cítrica.',
    ingredients: [
       { item: 'Ron Blanco (Bacardí)', amount: '2 oz' },
       { item: 'Concentrado de Limón', amount: '1 oz' },
       { item: 'La Broma (Jarabe)', amount: '0.75 oz' },
       { item: 'Frutos Rojos', amount: '3 un', notes: 'Macerados' }
    ],
    instructions: ['Macerar (Muddle) frutos rojos en shaker.', 'Agregar resto de ingredientes y hielo.', 'Agitar vigorosamente (Shake).', 'Doble colado (Double Strain).'],
    glassType: 'Coupé',
    garnish: 'Twist de limón',
    flavorProfile: 'Cítrico, Frutal',
    whyItWorks: 'Equilibrio clásico sour con notas silvestres.',
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-2',
    createdAt: 1700000000002,
    name: 'Sol Azteca',
    description: 'Un amanecer líquido que combina la tierra del agave con la frescura frutal.',
    ingredients: [
       { item: 'Tequila Reposado', amount: '1.5 oz' },
       { item: 'Jugo de Naranja', amount: '2 oz' },
       { item: 'Triple Sec', amount: '0.5 oz' },
       { item: 'Frutos Rojos', amount: 'Toque', notes: 'Macerados al fondo' }
    ],
    instructions: ['Construir (Build) ingredientes sobre hielo.', 'Remover suavemente.', 'Agregar frutos rojos al final para degradado.'],
    glassType: 'Highball',
    garnish: 'Rodaja de Naranja',
    flavorProfile: 'Dulce, Cítrico',
    whyItWorks: 'La naranja complementa las notas de madera del reposado.',
    imageUrl: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-3',
    createdAt: 1700000000003,
    name: 'Elixir Esmeralda',
    description: 'Una joya verde vibrante donde el melón cobra vida con la fuerza del tequila.',
    ingredients: [
       { item: 'Licor de Melón', amount: '1.5 oz' },
       { item: 'Tequila Blanco', amount: '1 oz' },
       { item: 'Concentrado de Limón', amount: '0.5 oz' },
       { item: 'La Broma', amount: '0.25 oz' }
    ],
    instructions: ['Agitar (Shake) enérgicamente con hielo.', 'Colar en copa fría.'],
    glassType: 'Martini',
    garnish: 'Esfera de Melón o Limón',
    flavorProfile: 'Dulce, Neón, Frutal',
    whyItWorks: 'El limón corta el dulzor del melón permitiendo que brille.',
    imageUrl: 'https://images.unsplash.com/photo-1609345265499-2133bbeb6ce5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-4',
    createdAt: 1700000000004,
    name: 'Sueño de Anís',
    description: 'Un sour aromático y potente para paladares exigentes que buscan intensidad.',
    ingredients: [
       { item: 'Licor de Anís', amount: '1.5 oz' },
       { item: 'Concentrado de Limón', amount: '1 oz' },
       { item: 'La Broma', amount: '0.5 oz' },
       { item: 'Clara/Foam (Opcional)', amount: '1 oz' }
    ],
    instructions: ['Dry Shake (sin hielo) para emulsionar.', 'Shake con hielo.', 'Colado simple.'],
    glassType: 'Old Fashioned',
    garnish: 'Anís estrella',
    flavorProfile: 'Herbal, Intenso, Sedoso',
    whyItWorks: 'La acidez del limón doma la potencia del anís.',
    imageUrl: 'https://images.unsplash.com/photo-1549419163-9524e94b2f15?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-5',
    createdAt: 1700000000005,
    name: 'Terciopelo Negro',
    description: 'Un digestivo oscuro y misterioso, perfecto para cerrar la noche.',
    ingredients: [
       { item: 'Ron Oscuro (Renova)', amount: '1.5 oz' },
       { item: 'Licor de Café', amount: '1 oz' },
       { item: 'Amaretto', amount: '0.5 oz' }
    ],
    instructions: ['Refrescar (Stir) en vaso mezclador.', 'Servir sobre hielo cubo grande.'],
    glassType: 'Old Fashioned',
    garnish: 'Piel de Naranja',
    flavorProfile: 'Café, Dulce, Robusto',
    whyItWorks: 'Tres perfiles dulces y tostados que se complementan.',
    imageUrl: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-6',
    createdAt: 1700000000006,
    name: 'Beso Mentolado',
    description: 'Frescura glacial en una copa, ideal para limpiar el paladar.',
    ingredients: [
       { item: 'Ron Blanco', amount: '1.5 oz' },
       { item: 'Licor de Menta', amount: '0.75 oz' },
       { item: 'Concentrado de Limón', amount: '0.5 oz' },
       { item: 'Hielo Frappé', amount: 'Full' }
    ],
    instructions: ['Agitar (Shake) brevemente.', 'Servir sobre hielo picado (Frappé).'],
    glassType: 'Vaso Corto',
    garnish: 'Ramita de hierbabuena',
    flavorProfile: 'Fresco, Herbal',
    whyItWorks: 'La menta y el limón son la pareja refrescante por excelencia.',
    imageUrl: 'https://images.unsplash.com/photo-1596547608883-9b4334c9c7c2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-7',
    createdAt: 1700000000007,
    name: 'Locura de Mono',
    description: 'Un viaje tiki tropical lleno de sabores exóticos y diversión.',
    ingredients: [
       { item: 'Ron Oscuro', amount: '1.5 oz' },
       { item: 'Licor de Banana', amount: '1 oz' },
       { item: 'Jugo de Piña', amount: '2 oz' },
       { item: 'Limón', amount: '0.5 oz' }
    ],
    instructions: ['Agitar (Shake) con mucho hielo.', 'Servir sin colar (Dump).'],
    glassType: 'Tiki Mug / Highball',
    garnish: 'Triángulo de Piña',
    flavorProfile: 'Tropical, Frutal, Complejo',
    whyItWorks: 'Banana y Piña crean la base tropical perfecta.',
    imageUrl: 'https://images.unsplash.com/photo-1592314541703-455b706c6418?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-8',
    createdAt: 1700000000008,
    name: 'Fuego Sagrado',
    description: 'Solo para valientes. Un trago que muerde y despierta los sentidos.',
    ingredients: [
       { item: 'Tequila Blanco', amount: '2 oz' },
       { item: 'Concentrado de Limón', amount: '1 oz' },
       { item: 'La Broma', amount: '0.5 oz' },
       { item: 'Salsa Tabasco', amount: '3 dash' }
    ],
    instructions: ['Escarchar vaso con Sal/Tajín.', 'Agitar (Shake) ingredientes.', 'Servir con hielo nuevo.'],
    glassType: 'Rocas',
    garnish: 'Borde Michelado',
    flavorProfile: 'Picante, Ácido, Salado',
    whyItWorks: 'La capsaicina resalta las notas terrosas del tequila.',
    imageUrl: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-9',
    createdAt: 1700000000009,
    name: 'Carrusel Mágico',
    description: 'Una mezcla inesperada donde el anís juega con cítricos dulces.',
    ingredients: [
       { item: 'Licor de Anís', amount: '1 oz' },
       { item: 'Jugo de Naranja', amount: '3 oz' },
       { item: 'Frutos Rojos', amount: 'Toque' }
    ],
    instructions: ['Construir (Build) en vaso alto con hielo.', 'Remover suavemente.'],
    glassType: 'Highball',
    garnish: 'Media luna de naranja',
    flavorProfile: 'Aromático, Cítrico',
    whyItWorks: 'El anís actúa como especia aromática sobre la naranja.',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-10',
    createdAt: 1700000000010,
    name: 'Piña Colada Deconstruida',
    description: 'La versión moderna y textural del clásico caribeño.',
    ingredients: [
       { item: 'Ron Blanco', amount: '1.5 oz' },
       { item: 'Licor de Coco', amount: '1 oz' },
       { item: 'Mermelada de Coco', amount: '1 barspoon' },
       { item: 'Jugo de Piña', amount: '2 oz' }
    ],
    instructions: ['Agitar (Shake) muy fuerte para disolver la mermelada.', 'Colar sobre hielo fresco.'],
    glassType: 'Copa Huracán',
    garnish: 'Piña',
    flavorProfile: 'Cremoso, Tropical, Dulce',
    whyItWorks: 'La mermelada aporta la textura cremosa sin lácteos.',
    imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80'
  },

  // --- GRUPO 2: RENTABILIDAD MÁXIMA (Seco Herrerano & Ron Añejo) (11-20) ---
  {
    id: 'base-11',
    createdAt: 1700000000011,
    name: 'Orgullo del Valle',
    description: 'La esencia pura de la caña en un formato refrescante y peligroso.',
    ingredients: [
       { item: 'Seco Herrerano', amount: '2 oz' },
       { item: 'Concentrado de Limón', amount: '1 oz' },
       { item: 'La Broma', amount: '0.75 oz' },
       { item: 'Licor de Anís', amount: '1 splash' }
    ],
    instructions: ['Agitar (Shake) vigorosamente.', 'Servir en las rocas.'],
    glassType: 'Rocas',
    garnish: 'Rodaja de Limón',
    flavorProfile: 'Cítrico, Seco, Herbal',
    whyItWorks: 'Sustitución local del Gin Sour, usando Anís para complejidad.',
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-12',
    createdAt: 1700000000012,
    name: 'Atardecer Panameño',
    description: 'Colores cálidos y sabores familiares que invitan a beber otro.',
    ingredients: [
       { item: 'Seco Herrerano', amount: '1.5 oz' },
       { item: 'Jugo de Naranja', amount: '2 oz' },
       { item: 'Jugo de Piña', amount: '1 oz' },
       { item: 'Frutos Rojos', amount: '0.5 oz (Jugo)' }
    ],
    instructions: ['Construir (Build) con hielo.', 'Flotar el jugo de frutos rojos al final.'],
    glassType: 'Highball',
    garnish: 'Naranja',
    flavorProfile: 'Frutal, Dulce, Visual',
    whyItWorks: 'Versión rentable del Sex on the Beach usando Seco.',
    imageUrl: 'https://images.unsplash.com/photo-1536935338788-843bb6303669?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-13',
    createdAt: 1700000000013,
    name: 'Capitán de Bar',
    description: 'Robusto, maderoso y directo. El trago del jefe.',
    ingredients: [
       { item: 'Ron Añejo (Casa)', amount: '2 oz' },
       { item: 'La Broma', amount: '0.25 oz' },
       { item: 'Licor de Café', amount: '0.25 oz' },
       { item: 'Piel de Naranja', amount: '1 un' }
    ],
    instructions: ['Refrescar (Stir) en vaso con hielo.', 'Exprimir aceites de naranja.'],
    glassType: 'Old Fashioned',
    garnish: 'Piel de Naranja',
    flavorProfile: 'Maderoso, Seco',
    whyItWorks: 'Old Fashioned de bajo costo usando Ron Añejo.',
    imageUrl: 'https://images.unsplash.com/photo-1629851759654-754d9c79f323?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-14',
    createdAt: 1700000000014,
    name: 'Fiebre Amarilla',
    description: 'Una explosión tropical dominada por la piña y el carácter del ron.',
    ingredients: [
       { item: 'Ron Añejo (Casa)', amount: '1.5 oz' },
       { item: 'Jugo de Piña', amount: '3 oz' },
       { item: 'Concentrado de Limón', amount: '0.5 oz' },
       { item: 'Licor de Banana', amount: '0.5 oz' }
    ],
    instructions: ['Agitar (Shake) y colar.', 'Servir con hielo abundante.'],
    glassType: 'Highball',
    garnish: 'Hoja de Piña',
    flavorProfile: 'Tropical, Dulce',
    whyItWorks: 'La banana potencia el dulzor natural de la piña.',
    imageUrl: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-15',
    createdAt: 1700000000015,
    name: 'Ruso Tropical',
    description: 'Donde el frío del Vodka se encuentra con la calidez del maracuyá.',
    ingredients: [
       { item: 'Vodka', amount: '1.5 oz' },
       { item: 'Jugo de Maracuyá', amount: '1.5 oz' },
       { item: 'Jugo de Naranja', amount: '1.5 oz' },
       { item: 'La Broma', amount: '0.5 oz' }
    ],
    instructions: ['Construir (Build) en vaso alto.', 'Remover.'],
    glassType: 'Highball',
    garnish: 'Media luna de Naranja',
    flavorProfile: 'Ácido, Frutal',
    whyItWorks: 'Combinación infalible de ácidos y base neutra.',
    imageUrl: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-16',
    createdAt: 1700000000016,
    name: 'Limonada Eléctrica',
    description: 'Vibrante, azul (visual) y extremadamente refrescante.',
    ingredients: [
       { item: 'Vodka', amount: '1.5 oz' },
       { item: 'Concentrado de Limón', amount: '1 oz' },
       { item: 'La Broma', amount: '1 oz' },
       { item: 'Licor de Menta', amount: '0.25 oz (Toque)' }
    ],
    instructions: ['Agitar (Shake).', 'Servir en vaso alto con soda/agua.'],
    glassType: 'Highball',
    garnish: 'Rodaja de Limón',
    flavorProfile: 'Cítrico, Fresco',
    whyItWorks: 'La menta da una frescura oculta a la limonada con piquete.',
    imageUrl: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-17',
    createdAt: 1700000000017,
    name: 'Café del Puerto',
    description: 'Energía líquida con un trasfondo de caña.',
    ingredients: [
       { item: 'Seco Herrerano', amount: '1.5 oz' },
       { item: 'Licor de Café', amount: '1 oz' },
       { item: 'La Broma', amount: '0.5 oz' }
    ],
    instructions: ['Agitar (Shake) fuerte para espumar.', 'Colar.'],
    glassType: 'Coupé / Martini',
    garnish: 'Granos de café',
    flavorProfile: 'Café, Dulce, Fuerte',
    whyItWorks: 'Versión económica del Espresso Martini usando Seco.',
    imageUrl: 'https://images.unsplash.com/photo-1629851759654-754d9c79f323?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-18',
    createdAt: 1700000000018,
    name: 'Banana Republic',
    description: 'Dulzor nostálgico con la seriedad del ron añejo.',
    ingredients: [
       { item: 'Ron Añejo (Casa)', amount: '1.5 oz' },
       { item: 'Licor de Banana', amount: '1 oz' },
       { item: 'Concentrado de Limón', amount: '0.5 oz' }
    ],
    instructions: ['Agitar (Shake) con hielo.', 'Servir en las rocas.'],
    glassType: 'Rocas',
    garnish: 'Sin Garnish',
    flavorProfile: 'Dulce, Tropical',
    whyItWorks: 'El limón corta el exceso de azúcar del licor de banana.',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-19',
    createdAt: 1700000000019,
    name: 'Coco-Loco Highball',
    description: 'Vacaciones instantáneas en un vaso largo.',
    ingredients: [
       { item: 'Seco Herrerano', amount: '1.5 oz' },
       { item: 'Licor de Coco', amount: '1 oz' },
       { item: 'Jugo de Piña', amount: '3 oz' },
       { item: 'Limón', amount: 'Splash' }
    ],
    instructions: ['Construir (Build) con mucho hielo.'],
    glassType: 'Highball',
    garnish: 'Triángulo de Piña',
    flavorProfile: 'Coco, Piña, Refrescante',
    whyItWorks: 'La combinación clásica Piña-Coco usando base económica.',
    imageUrl: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-20',
    createdAt: 1700000000020,
    name: 'Chupito de Fuego',
    description: 'Un shot diseñado para despertar la fiesta.',
    ingredients: [
       { item: 'Tequila Blanco', amount: '1 oz' },
       { item: 'Jugo de Maracuyá', amount: '0.5 oz' },
       { item: 'Tabasco', amount: '2 gotas' }
    ],
    instructions: ['Agitar (Shake) con hielo.', 'Servir en vaso shot.'],
    glassType: 'Shot',
    garnish: 'Borde con sal',
    flavorProfile: 'Picante, Ácido',
    whyItWorks: 'Maracuyá y picante en formato rápido.',
    imageUrl: 'https://images.unsplash.com/photo-1572097316712-4293f0607675?auto=format&fit=crop&w=800&q=80'
  },

  // --- GRUPO 3: EXPERIMENTALES Y COMPLEJOS (21-35) ---
  {
    id: 'base-21',
    createdAt: 1700000000021,
    name: 'Jardín Prohibido',
    description: 'Herbal, floral y cítrico. Un paseo por el bosque.',
    ingredients: [
       { item: 'Ron Blanco', amount: '1.5 oz' },
       { item: 'Licor de Menta', amount: '0.5 oz' },
       { item: 'Concentrado de Limón', amount: '0.75 oz' },
       { item: 'La Broma', amount: '0.5 oz' }
    ],
    instructions: ['Agitar (Shake) bien.', 'Doble colado.'],
    glassType: 'Coupé',
    garnish: 'Hoja de Menta golpeada',
    flavorProfile: 'Fresco, Cítrico',
    whyItWorks: 'Mojito "Up" (sin hielo en copa) y más elegante.',
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-22',
    createdAt: 1700000000022,
    name: 'Amanecer Rojo',
    description: 'La intensidad del vodka suavizada por frutos del bosque.',
    ingredients: [
       { item: 'Vodka', amount: '1.5 oz' },
       { item: 'Frutos Rojos', amount: 'Macerados' },
       { item: 'Concentrado de Limón', amount: '0.5 oz' },
       { item: 'La Broma', amount: '0.5 oz' }
    ],
    instructions: ['Macerar fruta.', 'Agitar (Shake).', 'Servir con hielo roto (Dirty Pour).'],
    glassType: 'Rocas',
    garnish: 'Frutos rojos',
    flavorProfile: 'Frutal, Ácido',
    whyItWorks: 'Caipiroska de frutos rojos clásica.',
    imageUrl: 'https://images.unsplash.com/photo-1582234057945-84725d2c253c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-23',
    createdAt: 1700000000023,
    name: 'Godfather Tropical',
    description: 'Una mezcla de jefes: Almendra y Whisky (o Ron Añejo en este caso).',
    ingredients: [
       { item: 'Ron Añejo (Casa)', amount: '1.5 oz' },
       { item: 'Amaretto', amount: '0.75 oz' },
       { item: 'Jugo de Naranja', amount: 'Splash' }
    ],
    instructions: ['Construir en vaso con hielo.', 'Remover.'],
    glassType: 'Old Fashioned',
    garnish: 'Piel de Naranja',
    flavorProfile: 'Dulce, Nuez, Maderoso',
    whyItWorks: 'El Amaretto suaviza el ron añejo perfectamente.',
    imageUrl: 'https://images.unsplash.com/photo-1629851759654-754d9c79f323?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-24',
    createdAt: 1700000000024,
    name: 'Laguna Mental',
    description: 'No querrás saber qué pasó ayer, pero disfrutarás hoy.',
    ingredients: [
       { item: 'Vodka', amount: '1 oz' },
       { item: 'Seco Herrerano', amount: '1 oz' },
       { item: 'Licor de Melón', amount: '0.5 oz' },
       { item: 'Jugo de Piña', amount: '2 oz' }
    ],
    instructions: ['Agitar (Shake).', 'Servir en vaso alto.'],
    glassType: 'Highball',
    garnish: 'Limón',
    flavorProfile: 'Fuerte, Dulce, Frutal',
    whyItWorks: 'Mezcla de espirituosos blancos "ocultos" por la piña y melón.',
    imageUrl: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-25',
    createdAt: 1700000000025,
    name: 'Margarita de la Casa',
    description: 'Nuestra versión rentable del clásico mexicano.',
    ingredients: [
       { item: 'Tequila Blanco', amount: '1.5 oz' },
       { item: 'Triple Sec', amount: '0.5 oz' },
       { item: 'Concentrado de Limón', amount: '0.75 oz' },
       { item: 'La Broma', amount: '0.25 oz' }
    ],
    instructions: ['Agitar (Shake) con hielo.', 'Borde de sal obligatorio.'],
    glassType: 'Coupé / Rocas',
    garnish: 'Borde Salado',
    flavorProfile: 'Cítrico, Salado',
    whyItWorks: 'Uso de jarabe para equilibrar el ácido sin gastar tanto Triple Sec.',
    imageUrl: 'https://images.unsplash.com/photo-1549419163-9524e94b2f15?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-26',
    createdAt: 1700000000026,
    name: 'El Padrino Caribeño',
    description: 'Ron añejo con el toque distinguido del café.',
    ingredients: [
       { item: 'Ron Añejo (Casa)', amount: '2 oz' },
       { item: 'Licor de Café', amount: '0.5 oz' },
       { item: 'Amaretto', amount: '0.25 oz' }
    ],
    instructions: ['Refrescar (Stir) con hielo.', 'Servir.'],
    glassType: 'Rocas',
    garnish: 'Piel de Naranja',
    flavorProfile: 'Café, Madera, Dulce',
    whyItWorks: 'Revolver sabores oscuros siempre funciona.',
    imageUrl: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-27',
    createdAt: 1700000000027,
    name: 'Tiki Bastardo',
    description: 'Mucho ron, mucha fruta, mucha diversión.',
    ingredients: [
       { item: 'Ron Oscuro', amount: '1 oz' },
       { item: 'Ron Blanco', amount: '1 oz' },
       { item: 'Jugo de Piña', amount: '1.5 oz' },
       { item: 'Jugo de Naranja', amount: '1.5 oz' },
       { item: 'Granadina/Rojos', amount: '0.5 oz' }
    ],
    instructions: ['Agitar (Shake).', 'Servir.'],
    glassType: 'Tiki / Highball',
    garnish: 'Menta y Naranja',
    flavorProfile: 'Frutal, Potente',
    whyItWorks: 'Rum Punch clásico.',
    imageUrl: 'https://images.unsplash.com/photo-1536935338788-843bb6303669?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-28',
    createdAt: 1700000000028,
    name: 'Dulce Veneno',
    description: 'Suave, cremoso y peligrosamente fácil de beber.',
    ingredients: [
       { item: 'Vodka', amount: '1 oz' },
       { item: 'Licor de Coco', amount: '1 oz' },
       { item: 'Mermelada de Coco', amount: '0.5 barspoon' },
       { item: 'Jugo de Piña', amount: '1 oz' }
    ],
    instructions: ['Agitar (Shake) fuerte.', 'Colar.'],
    glassType: 'Martini',
    garnish: 'Coco rallado si hay',
    flavorProfile: 'Dulce, Cremoso',
    whyItWorks: 'Postre líquido.',
    imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-29',
    createdAt: 1700000000029,
    name: 'Spicy Piña',
    description: 'El contraste entre el dulce de la piña y el picante.',
    ingredients: [
       { item: 'Tequila Blanco', amount: '1.5 oz' },
       { item: 'Jugo de Piña', amount: '2 oz' },
       { item: 'Concentrado de Limón', amount: '0.5 oz' },
       { item: 'Tabasco', amount: '2 dashes' }
    ],
    instructions: ['Agitar (Shake).', 'Servir con borde de Tajín.'],
    glassType: 'Rocas',
    garnish: 'Tajín',
    flavorProfile: 'Picante, Dulce',
    whyItWorks: 'Piña y picante son mejores amigos.',
    imageUrl: 'https://images.unsplash.com/photo-1572097316712-4293f0607675?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-30',
    createdAt: 1700000000030,
    name: 'Anís Refresh',
    description: 'Para los amantes del anís, una versión para el calor.',
    ingredients: [
       { item: 'Licor de Anís', amount: '1.5 oz' },
       { item: 'Jugo de Naranja', amount: '2 oz' },
       { item: 'Agua/Soda', amount: 'Top' }
    ],
    instructions: ['Construir en vaso alto.'],
    glassType: 'Highball',
    garnish: 'Rodaja Naranja',
    flavorProfile: 'Herbal, Refrescante',
    whyItWorks: 'El agua abre el anís (efecto ouzo) y la naranja endulza.',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  },

  // --- GRUPO 4: MIXOLOGÍA DE AUTOR CON INVENTARIO LIMITADO (31-45) ---
  {
    id: 'base-31',
    createdAt: 1700000000031,
    name: 'Terciopelo Rojo',
    description: 'Suave como la seda, rojo como el pecado.',
    ingredients: [
       { item: 'Vodka', amount: '1.5 oz' },
       { item: 'Frutos Rojos', amount: 'Macerados' },
       { item: 'Licor de Coco', amount: '0.5 oz' },
       { item: 'La Broma', amount: '0.25 oz' }
    ],
    instructions: ['Macerar.', 'Agitar.', 'Doble colado.'],
    glassType: 'Coupé',
    garnish: 'Pétalo o Fruto rojo',
    flavorProfile: 'Frutal, Sedoso',
    whyItWorks: 'Coco y Frutos rojos crean perfil de "Cheesecake".',
    imageUrl: 'https://images.unsplash.com/photo-1582234057945-84725d2c253c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-32',
    createdAt: 1700000000032,
    name: 'Cítrico Imperial',
    description: 'La unión de todas las frutas ácidas en armonía.',
    ingredients: [
       { item: 'Seco Herrerano', amount: '1.5 oz' },
       { item: 'Triple Sec', amount: '0.5 oz' },
       { item: 'Concentrado de Limón', amount: '0.75 oz' },
       { item: 'Jugo de Naranja', amount: '0.5 oz' }
    ],
    instructions: ['Agitar (Shake).', 'Borde de azúcar.'],
    glassType: 'Martini',
    garnish: 'Borde de Azúcar',
    flavorProfile: 'Cítrico, Seco',
    whyItWorks: 'Lemon Drop panameño.',
    imageUrl: 'https://images.unsplash.com/photo-1639745973950-c63bf1c70ae8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-33',
    createdAt: 1700000000033,
    name: 'Banana Brew',
    description: 'Café y Banana, una combinación subestimada.',
    ingredients: [
       { item: 'Ron Añejo (Casa)', amount: '1.5 oz' },
       { item: 'Licor de Café', amount: '0.75 oz' },
       { item: 'Licor de Banana', amount: '0.5 oz' }
    ],
    instructions: ['Refrescar (Stir) con hielo.'],
    glassType: 'Rocas',
    garnish: 'Piel de Naranja',
    flavorProfile: 'Dulce, Tostado',
    whyItWorks: 'Perfil de postre Bananas Foster.',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-34',
    createdAt: 1700000000034,
    name: 'Melon Ball 2.0',
    description: 'El clásico de discoteca, mejorado.',
    ingredients: [
       { item: 'Vodka', amount: '1 oz' },
       { item: 'Licor de Melón', amount: '1 oz' },
       { item: 'Jugo de Piña', amount: '2 oz' },
       { item: 'Limón', amount: '0.25 oz' }
    ],
    instructions: ['Construir con hielo.'],
    glassType: 'Highball',
    garnish: 'Cereza o Melón',
    flavorProfile: 'Dulce, Neón',
    whyItWorks: 'El toque de limón balancea el exceso de azúcar.',
    imageUrl: 'https://images.unsplash.com/photo-1609345265499-2133bbeb6ce5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-35',
    createdAt: 1700000000035,
    name: 'Menta Fresca',
    description: 'Como un aire acondicionado líquido.',
    ingredients: [
       { item: 'Seco Herrerano', amount: '1.5 oz' },
       { item: 'Licor de Menta', amount: '0.75 oz' },
       { item: 'Agua/Soda', amount: 'Top' }
    ],
    instructions: ['Construir sobre mucho hielo.'],
    glassType: 'Highball',
    garnish: 'Menta',
    flavorProfile: 'Mentolado, Ligero',
    whyItWorks: 'Highball digestivo y refrescante.',
    imageUrl: 'https://images.unsplash.com/photo-1596547608883-9b4334c9c7c2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-36',
    createdAt: 1700000000036,
    name: 'Tequila Sunset',
    description: 'El final perfecto para el día.',
    ingredients: [
       { item: 'Tequila Reposado', amount: '1.5 oz' },
       { item: 'Jugo de Naranja', amount: '2 oz' },
       { item: 'Licor de Café', amount: '0.5 oz (Flotante)' }
    ],
    instructions: ['Construir tequila y naranja.', 'Flotar licor de café.'],
    glassType: 'Rocas',
    garnish: 'Naranja',
    flavorProfile: 'Cítrico, Tostado',
    whyItWorks: 'Naranja y Café es una combinación clásica de desayuno/brunch.',
    imageUrl: 'https://images.unsplash.com/photo-1536935338788-843bb6303669?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-37',
    createdAt: 1700000000037,
    name: 'Isla de la Fantasía',
    description: 'Maracuyá y Coco, el dúo dinámico.',
    ingredients: [
       { item: 'Ron Blanco', amount: '1.5 oz' },
       { item: 'Licor de Coco', amount: '0.75 oz' },
       { item: 'Jugo de Maracuyá', amount: '1.5 oz' },
       { item: 'La Broma', amount: '0.25 oz' }
    ],
    instructions: ['Agitar (Shake).'],
    glassType: 'Coupé',
    garnish: 'Coco',
    flavorProfile: 'Tropical, Ácido',
    whyItWorks: 'Balance perfecto ácido-graso (coco).',
    imageUrl: 'https://images.unsplash.com/photo-1529604278261-8bfcdb00a7b9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-38',
    createdAt: 1700000000038,
    name: 'Long Island del Barrio',
    description: 'Fuerte, barato y efectivo.',
    ingredients: [
       { item: 'Seco Herrerano', amount: '0.5 oz' },
       { item: 'Vodka', amount: '0.5 oz' },
       { item: 'Ron Blanco', amount: '0.5 oz' },
       { item: 'Triple Sec', amount: '0.5 oz' },
       { item: 'Limón y Cola/Té', amount: 'Top' }
    ],
    instructions: ['Construir en vaso grande.'],
    glassType: 'Highball Grande',
    garnish: 'Limón',
    flavorProfile: 'Fuerte, Dulce',
    whyItWorks: 'La mezcla de blancos para potencia.',
    imageUrl: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-39',
    createdAt: 1700000000039,
    name: 'Amaretto Sour (Low Cost)',
    description: 'La elegancia de la almendra accesible.',
    ingredients: [
       { item: 'Amaretto', amount: '1 oz' },
       { item: 'Seco Herrerano', amount: '0.5 oz' },
       { item: 'Limón', amount: '0.75 oz' },
       { item: 'La Broma', amount: '0.25 oz' }
    ],
    instructions: ['Agitar (Shake).'],
    glassType: 'Rocas',
    garnish: 'Cereza',
    flavorProfile: 'Dulce, Ácido',
    whyItWorks: 'El Seco "estira" el Amaretto sin perder perfil.',
    imageUrl: 'https://images.unsplash.com/photo-1639745973950-c63bf1c70ae8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-40',
    createdAt: 1700000000040,
    name: 'Bramble Panameño',
    description: 'Frutos rojos cayendo sobre hielo picado.',
    ingredients: [
       { item: 'Seco Herrerano', amount: '1.5 oz' },
       { item: 'Limón', amount: '0.75 oz' },
       { item: 'La Broma', amount: '0.5 oz' },
       { item: 'Frutos Rojos', amount: 'Top (Macerados)' }
    ],
    instructions: ['Agitar Seco, limón, goma.', 'Servir sobre hielo picado.', 'Coronar con frutos rojos.'],
    glassType: 'Vaso Corto',
    garnish: 'Frutos rojos',
    flavorProfile: 'Frutal, Visual, Ácido',
    whyItWorks: 'Técnica de Bramble clásico.',
    imageUrl: 'https://images.unsplash.com/photo-1599021406649-8041c490f055?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-41',
    createdAt: 1700000000041,
    name: 'Caipiriña de la Casa',
    description: 'El clásico brasileño adoptado.',
    ingredients: [
       { item: 'Seco Herrerano', amount: '2 oz' },
       { item: 'Limón en trozos', amount: '1 unidad' },
       { item: 'La Broma', amount: '0.75 oz' }
    ],
    instructions: ['Macerar limón y azúcar en vaso.', 'Agregar hielo y seco.', 'Batir en vaso (Swizzle).'],
    glassType: 'Rocas',
    garnish: 'Limón',
    flavorProfile: 'Cítrico, Potente',
    whyItWorks: 'Macerado extrae aceites esenciales de la cáscara.',
    imageUrl: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-42',
    createdAt: 1700000000042,
    name: 'Mojito de Coco',
    description: 'Dos mundos tropicales colisionan.',
    ingredients: [
       { item: 'Ron Blanco', amount: '1.5 oz' },
       { item: 'Licor de Coco', amount: '0.5 oz' },
       { item: 'Limón', amount: '0.75 oz' },
       { item: 'Licor de Menta', amount: '0.25 oz' }
    ],
    instructions: ['Construir con hielo picado.', 'Remover.'],
    glassType: 'Highball',
    garnish: 'Menta',
    flavorProfile: 'Coco, Menta, Fresco',
    whyItWorks: 'Coco y Menta funcionan sorprendentemente bien.',
    imageUrl: 'https://images.unsplash.com/photo-1517093157656-b9ecbf90b345?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-43',
    createdAt: 1700000000043,
    name: 'Tequila Passion',
    description: 'La pasión del agave.',
    ingredients: [
       { item: 'Tequila Reposado', amount: '1.5 oz' },
       { item: 'Jugo de Maracuyá', amount: '1 oz' },
       { item: 'La Broma', amount: '0.5 oz' },
       { item: 'Borde Tajín', amount: '-' }
    ],
    instructions: ['Agitar (Shake).'],
    glassType: 'Rocas',
    garnish: 'Tajín',
    flavorProfile: 'Ácido, Maderoso',
    whyItWorks: 'Perfil clásico moderno.',
    imageUrl: 'https://images.unsplash.com/photo-1536935338788-843bb6303669?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-44',
    createdAt: 1700000000044,
    name: 'Kamikaze Tropical',
    description: 'Shot o trago corto intenso.',
    ingredients: [
       { item: 'Vodka', amount: '1 oz' },
       { item: 'Triple Sec', amount: '0.5 oz' },
       { item: 'Limón', amount: '0.5 oz' },
       { item: 'Jugo de Piña', amount: 'Splash' }
    ],
    instructions: ['Agitar muy frío.'],
    glassType: 'Shot / Rocas',
    garnish: 'Limón',
    flavorProfile: 'Cítrico, Fuerte',
    whyItWorks: 'Piña suaviza el golpe del alcohol.',
    imageUrl: 'https://images.unsplash.com/photo-1572097316712-4293f0607675?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-45',
    createdAt: 1700000000045,
    name: 'El Gran Final',
    description: 'Todo o nada.',
    ingredients: [
       { item: 'Ron Añejo', amount: '1 oz' },
       { item: 'Seco Herrerano', amount: '1 oz' },
       { item: 'Jugo de Naranja', amount: '1 oz' },
       { item: 'Jugo de Maracuyá', amount: '1 oz' },
       { item: 'Granadina/Frutos', amount: '0.5 oz' }
    ],
    instructions: ['Agitar (Shake).'],
    glassType: 'Huracán / Copa Grande',
    garnish: 'Naranja y Cereza',
    flavorProfile: 'Frutal, Complejo',
    whyItWorks: 'Hurricane style cocktail.',
    imageUrl: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=800&q=80'
  },
  // --- GRUPO 5: CAPAS Y VISUALES (DENSIDAD) (46-48) ---
  {
    id: 'base-46',
    createdAt: 1700000000046,
    name: 'Arcoíris del Alquimista',
    description: 'Una ilusión óptica de tres colores. Rojo intenso, naranja brillante y azul eléctrico. Mezclar antes de beber.',
    ingredients: [
       { item: 'Granadina', amount: '0.75 oz', notes: 'FONDO (Más denso)' },
       { item: 'Jugo de Naranja', amount: '2 oz', notes: 'MEDIO (Verter suave)' },
       { item: 'Vodka', amount: '1 oz', notes: 'TOPE' },
       { item: 'Blue Curaçao (Toque)', amount: '0.25 oz', notes: 'Mezclar con Vodka' }
    ],
    instructions: [
       'Verter Granadina directamente en el fondo del vaso.',
       'Agregar hielo con cuidado.',
       'Verter Jugo de Naranja suavemente sobre una cuchara (cuerpo).',
       'Mezclar Vodka y Blue Curaçao aparte.',
       'Flotar la mezcla azul suavemente sobre el reverso de la cuchara.'
    ],
    glassType: 'Highball / Huracán',
    garnish: 'Naranja y Cereza',
    flavorProfile: 'Dulce, Visual, Tricolor',
    whyItWorks: 'La densidad del azúcar mantiene la granadina abajo y el alcohol mantiene el azul arriba.',
    imageUrl: 'https://images.unsplash.com/photo-1542849187-5ec6ea5e6a43?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-47',
    createdAt: 1700000000047,
    name: 'Semáforo Tropical',
    description: 'Rojo, Amarillo y Verde. Un trago divertido que entra por los ojos.',
    ingredients: [
       { item: 'Mermelada de Fresa/Roja', amount: '1 oz', notes: 'FONDO' },
       { item: 'Jugo de Piña', amount: '2 oz', notes: 'MEDIO' },
       { item: 'Licor de Melón', amount: '1 oz', notes: 'TOPE' },
       { item: 'Ron Blanco', amount: '0.5 oz', notes: 'Con el melón' }
    ],
    instructions: [
       'Colocar mermelada/coulis rojo al fondo.',
       'Llenar con hielo picado.',
       'Verter jugo de piña suavemente.',
       'Flotar la mezcla de Licor de Melón y Ron al final.'
    ],
    glassType: 'Highball',
    garnish: 'Rodaja de Limón',
    flavorProfile: 'Frutal, Dulce, Neón',
    whyItWorks: 'Juego de densidades creando bloques de color sólidos.',
    imageUrl: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'base-48',
    createdAt: 1700000000048,
    name: 'B-52 Tropical (Shot)',
    description: 'Un shot en capas perfecto para la foto y el brindis.',
    ingredients: [
       { item: 'Licor de Café', amount: '0.5 oz', notes: 'FONDO' },
       { item: 'Licor de Coco', amount: '0.5 oz', notes: 'MEDIO' },
       { item: 'Triple Sec/Seco', amount: '0.5 oz', notes: 'TOPE' }
    ],
    instructions: [
       'Verter Licor de Café.',
       'Verter Licor de Coco sobre cuchara muy suavemente (es cremoso).',
       'Flotar el Triple Sec o Seco Herrerano al final.'
    ],
    glassType: 'Shot (Caballito)',
    garnish: 'Fuego (Opcional/Peligroso)',
    flavorProfile: 'Café, Coco, Fuerte',
    whyItWorks: 'Clásico Pousse-café adaptado al inventario tropical.',
    imageUrl: 'https://images.unsplash.com/photo-1575254163821-4f108253a669?auto=format&fit=crop&w=800&q=80'
  }
];

export const SCENARIO_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Cuál es el 'Mood' de la noche?",
    scenario: "Imagina que entras al bar. La iluminación es tenue, la música suena...",
    options: [
      { id: 'party', text: "Fiesta y descontrol tropical", value: "mood_party", emoji: "🌴" },
      { id: 'classy', text: "Sofisticado y conversador", value: "mood_classy", emoji: "🍸" },
      { id: 'chill', text: "Relax total y desconexión", value: "mood_chill", emoji: "🧊" },
      { id: 'adventurous', text: "Quiero probar algo raro", value: "mood_adventurous", emoji: "🧪" }
    ]
  },
  {
    id: 2,
    question: "Tu paladar te pide...",
    scenario: "Cierras los ojos y piensas en el primer sorbo perfectos.",
    options: [
      { id: 'sweet', text: "Algo dulcecito como un postre", value: "taste_sweet", emoji: "🍬" },
      { id: 'sour', text: "Cítrico que me despierte", value: "taste_sour", emoji: "🍋" },
      { id: 'bitter', text: "Con carácter o herbal", value: "taste_complex", emoji: "☕" },
      { id: 'spicy', text: "Un toque picante o atrevido", value: "taste_spicy", emoji: "🌶️" }
    ]
  },
  {
    id: 3,
    question: "¿Dónde te imaginas bebiendo esto?",
    scenario: "El entorno define el sabor.",
    options: [
      { id: 'beach', text: "Frente al mar caribe", value: "context_beach", emoji: "🏖️" },
      { id: 'city', text: "Rooftop en la ciudad", value: "context_city", emoji: "🌃" },
      { id: 'home', text: "Sofá de casa", value: "context_home", emoji: "🛋️" },
      { id: 'dinner', text: "Acompañando una cena", value: "context_dinner", emoji: "🍽️" }
    ]
  },
  {
    id: 4,
    question: "¿Nivel de intensidad alcohólica?",
    scenario: "Sé sincero/a contigo mismo/a.",
    options: [
      { id: 'soft', text: "Suave, refresco con piquete", value: "strength_low", emoji: "🍃" },
      { id: 'medium', text: "Punto medio alegre", value: "strength_medium", emoji: "🙂" },
      { id: 'strong', text: "Pegador, directo al alma", value: "strength_high", emoji: "🔥" }
    ]
  },
  {
    id: 5,
    question: "El ingrediente sorpresa...",
    scenario: "Si pudieras elegir una nota dominante.",
    options: [
      { id: 'fruity', text: "Explosión Frutal", value: "flavor_fruity", emoji: "🍍" },
      { id: 'creamy', text: "Textura Cremosa", value: "flavor_creamy", emoji: "🥥" },
      { id: 'fresh', text: "Frescura Mentolada/Anisada", value: "flavor_fresh", emoji: "🌿" },
      { id: 'spicy_kick', text: "Fuego (Picante)", value: "flavor_spicy", emoji: "🔥" }
    ]
  },
  {
    id: 6,
    question: "¿Qué sensación buscas en boca?",
    scenario: "La textura es tan importante como el sabor.",
    options: [
      { id: 'sparkling', text: "Burbujeante / Efervescente", value: "texture_sparkling", emoji: "✨" },
      { id: 'silky', text: "Sedoso y Denso", value: "texture_silky", emoji: "🥛" },
      { id: 'ice', text: "Frozen / Frappé", value: "texture_frozen", emoji: "❄️" },
      { id: 'clean', text: "Líquido y Nítido", value: "texture_clean", emoji: "💧" }
    ]
  },
  {
    id: 7,
    question: "¿Estética visual del elixir?",
    scenario: "Todo entra por los ojos.",
    options: [
      { id: 'minimal', text: "Minimalista y Elegante", value: "style_minimal", emoji: "💎" },
      { id: 'tiki', text: "Exótico y Sobrecargado", value: "style_tiki", emoji: "🌺" },
      { id: 'dark', text: "Oscuro y Misterioso", value: "style_dark", emoji: "🌑" },
      { id: 'bright', text: "Radioactivo / Neón", value: "style_bright", emoji: "🟢" }
    ]
  }
];
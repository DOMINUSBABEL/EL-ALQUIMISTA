import { GoogleGenAI, Type, Schema } from "@google/genai";
import { GeneratedRecipe, InventoryItem, Language } from "../types";
import { BASE_GRIMOIRE_RECIPES } from "../constants";

const genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });

const RECIPE_SCHEMA: Schema = {
  type: Type.OBJECT,
  properties: {
    name: { type: Type.STRING, description: "Creative name of the cocktail" },
    description: { type: Type.STRING, description: "Elegant, sensory marketing description" },
    ingredients: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          item: { type: Type.STRING, description: "Name of the ingredient" },
          amount: { type: Type.STRING, description: "Quantity (oz, dashes, units)" },
          notes: { type: Type.STRING, description: "Prep notes (e.g. 'Macerado', 'Flotante')" }
        }
      }
    },
    instructions: {
      type: Type.ARRAY,
      items: { type: Type.STRING, description: "Professional instruction (Verb + Action)" }
    },
    glassType: { type: Type.STRING, description: "Recommended glass type" },
    garnish: { type: Type.STRING, description: "Garnish suggestion" },
    flavorProfile: { type: Type.STRING, description: "3 descriptors (e.g. Ahumado, Cítrico, Sedoso)" },
    whyItWorks: { type: Type.STRING, description: "Scientific/Mixology explanation of the pairing" }
  },
  required: ["name", "description", "ingredients", "instructions", "flavorProfile", "whyItWorks"]
};

// Updated Guide emphasizing Profit Margin and Volume
const FLAVOR_ALCHEMY_GUIDE = `
GUÍA ESTRATÉGICA DE INGREDIENTES (PROFIT & FLAVOR LOGIC):

--- TIER 1: ALTA FRECUENCIA / ALTO MARGEN (PRIORIDAD ABSOLUTA) ---
1.  **Seco Herrerano:** Base neutra de caña, muy económica. Úsalo como sustituto de Vodka, Ron Blanco o en mezclas frutales agresivas. ¡VENDE ESTO!
2.  **Ron Añejo (Casa):** Económico y con sabor. Úsalo para todo lo que requiera cuerpo o notas de madera.
3.  **Concentrado de Limón:** El alma del bar. Úsalo en el 80% de los tragos para balancear.
4.  **Jugo de Naranja / Piña:** Mezcladores de volumen. Úsalos generosamente para tragos largos, Tiki o dulces. Son baratos y llenan el vaso.
5.  **Jarabe de Goma ("La Broma"):** Esencial para textura y dulzor económico.

--- TIER 2: FRECUENCIA MEDIA (ACENTOS) ---
1.  **Ron Blanco (Bacardí):** Para cuando el cliente pide algo más "limpio" que el Seco.
2.  **Vodka:** Neutro, solo si el perfil lo exige.
3.  **Licores de Sabor (Banana/Melón/Café/Menta/Anís):** Úsalos como modificadores (0.5oz - 1oz), no como bases puras (excepto Anís si se pide explícitamente).

--- TIER 3: BAJA FRECUENCIA / PREMIUM / COSTOSO (USAR CON CAUTELA) ---
1.  **Tequila (Blanco/Reposado):** Costoso. Úsalo SOLO si el perfil es 'mood_party' (Margaritas) o 'style_tiki'.
2.  **Mermelada de Coco:** Aporta textura pero es insumo específico. No abusar. Reservar para 'texture_silky'.
3.  **Maracuyá:** Usar para perfiles 'sour' o 'tropical', pero alternar con Naranja/Piña para no repetir.
4.  **Amaretto:** Costoso. Usar solo en perfiles 'mood_classy' o 'taste_complex'.

--- PRINCIPIOS DE DENSIDAD Y FÍSICA (PARA TRAGOS VISUALES / POR CAPAS) ---
Si el usuario pide algo "Visual", "Foto", "Instagrameable" o "Colorido", DEBES aplicar técnica de capas (Layering) basándote en la densidad.
NO USAR SHAKER en estos casos. El método es "Construir (Build)".

Orden de Densidad (De Abajo hacia Arriba):
1.  **FONDO (Más Pesado):** Jarabes (Granadina, Mermeladas, Miel), Licores Crema, Licores muy dulces (Kahlúa/Café).
2.  **MEDIO (Cuerpo):** Jugos de fruta con azúcar natural (Naranja, Piña, Maracuyá).
3.  **TOPE (Más Ligero/Flotante):** Espirituosos de alta graduación (>40% ABV) sin azúcar (Ron, Vodka, Seco, Gin) o mezclas ligeras con agua/soda.
    *   *Truco:* Para hacer el tope de color, mezcla el destilado con un poquito de licor de color (Blue Curaçao/Menta) aparte y viértelo suavemente.

Instrucción Obligatoria para Capas: "Verter [Ingrediente] suavemente sobre el reverso de una cuchara para no mezclar capas."
`;

const getLanguageName = (code: Language): string => {
  const map: Record<Language, string> = {
    es: 'Español',
    en: 'English',
    fr: 'French',
    de: 'German',
    ru: 'Russian',
    zh: 'Chinese (Simplified)',
    pt: 'Portuguese',
    ar: 'Arabic'
  };
  return map[code] || 'Español';
};

const generateGrimoireContext = () => {
  return BASE_GRIMOIRE_RECIPES.map((recipe, index) => {
    const ingredients = recipe.ingredients.map(i => i.item).join(', ');
    return `${index + 1}. **${recipe.name}**: ${ingredients} (${recipe.flavorProfile})`;
  }).join('\n');
};

export const generateCocktailRecipe = async (
  inventory: InventoryItem[],
  userResponses: string[],
  language: Language = 'es'
): Promise<GeneratedRecipe> => {
  
  const inventoryStr = inventory.map(cat => `${cat.category}: ${cat.items.join(', ')}`).join('\n');
  const userVibes = userResponses.join(', ');
  const baseRecipesContext = generateGrimoireContext();
  const targetLanguage = getLanguageName(language);

  const prompt = `
    Actúa como 'El Alquimista', un mixólogo experto enfocado en la RENTABILIDAD DEL BAR, la CREATIVIDAD y la FÍSICA DE FLUIDOS.
    
    IDIOMA DE RESPUESTA: ${targetLanguage}.
    Debes generar TODO el contenido (nombre, descripción, instrucciones, etc.) en ${targetLanguage}.

    TUS OBJETIVOS:
    1. Diseñar un cóctel delicioso.
    2. MAXIMIZAR EL MARGEN DE GANANCIA usando ingredientes del TIER 1.
    3. Si el input sugiere estética visual ('style_bright', 'style_tiki'), prioriza tragos POR CAPAS (Layered) usando los principios de densidad.

    CONTEXTO DE INGREDIENTES Y REGLAS DE NEGOCIO:
    ${FLAVOR_ALCHEMY_GUIDE}

    INVENTARIO REAL:
    ${inventoryStr}

    PERFIL DEL CLIENTE (INPUTS):
    ${userVibes}

    GRIMORIO (INSPIRACIÓN DE RECETAS BASE - 45 ARQUETIPOS):
    ${baseRecipesContext}

    FORMATO DE RESPUESTA (EN ${targetLanguage}):
    - **Instrucciones:** DEBEN SER PROFESIONALES. Usa verbos técnicos.
    - **Descripción:** DEBE SER SEDUCTORA (Marketing). Vende la experiencia, no los ingredientes.

    LÓGICA DE PUNTAJE Y SELECCIÓN:
    - Si el mood es 'Fiesta' o 'Chill' -> OBLIGATORIO usar base TIER 1 (Seco Herrerano o Ron Añejo) + Mezclador TIER 1 (Naranja/Piña).
    - Si el mood es 'Sofisticado' -> Permitido usar TIER 2 o 3 (Anís, Amaretto, Tequila), pero intenta cortar con Limón/Goma para bajar costo.
    - Si pide 'Cítrico' -> Alternar entre Limón y Maracuyá (50/50 probabilidad). No siempre Maracuyá.
    - **FACTOR SORPRESA:** Si la combinación parece obvia, cámbiala.
  `;

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: RECIPE_SCHEMA,
        temperature: 1.3 // Increased temperature for higher creativity/entropy
      }
    });

    if (response.text) {
      const parsed = JSON.parse(response.text);
      return {
        ...parsed,
        id: crypto.randomUUID(),
        createdAt: Date.now()
      } as GeneratedRecipe;
    }
    throw new Error("No response text generated");
  } catch (error) {
    console.error("Error generating recipe:", error);
    // Fallback in Spanish/English depending on context is hard without more logic, 
    // keeping fallback simple for now or potentially could be translated if needed.
    return {
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      name: "El Salvavidas del Barman",
      description: "Cuando la alquimia falla, recurrimos a lo infalible y rentable.",
      ingredients: [
        { item: "Seco Herrerano", amount: "2 oz" },
        { item: "Jugo de Naranja", amount: "3 oz" },
        { item: "Concentrado de Limón", amount: "0.5 oz" },
        { item: "La Broma", amount: "0.5 oz" }
      ],
      instructions: ["Construir (Build) en vaso con hielo.", "Remover suavemente.", "Decorar."],
      glassType: "Highball",
      garnish: "Naranja",
      flavorProfile: "Cítrico, Refrescante, Rentable",
      whyItWorks: "El Seco es neutro y la naranja gusta a todos."
    };
  }
};

export const generateCocktailImage = async (recipe: GeneratedRecipe): Promise<string | null> => {
  try {
    const prompt = `
      Professional food photography of a cocktail named "${recipe.name}".
      Ingredients visible: ${recipe.ingredients.map(i => i.item).join(', ')}.
      Glassware: ${recipe.glassType}.
      Garnish: ${recipe.garnish}.
      Atmosphere: Dark alchemy laboratory, moody lighting, smoke, gold accents, cinematic depth of field, 8k resolution, elegant, liquid motion.
      Style: ${recipe.flavorProfile}.
      Focus on the texture and color of the liquid.
    `;

    const response = await genAI.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      }
    });

    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};

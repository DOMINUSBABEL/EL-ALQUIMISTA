import { GoogleGenAI, Type, Schema } from "@google/genai";
import { GeneratedRecipe, InventoryItem } from "../types";

const genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });

const RECIPE_SCHEMA: Schema = {
  type: Type.OBJECT,
  properties: {
    name: { type: Type.STRING, description: "Creative name of the cocktail (Spanish)" },
    description: { type: Type.STRING, description: "Elegant, sensory marketing description" },
    ingredients: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          item: { type: Type.STRING, description: "Name of the ingredient" },
          amount: { type: Type.STRING, description: "Quantity" },
          notes: { type: Type.STRING, description: "Prep notes" }
        }
      }
    },
    instructions: {
      type: Type.ARRAY,
      items: { type: Type.STRING, description: "Step by step instruction" }
    },
    glassType: { type: Type.STRING, description: "Recommended glass type" },
    garnish: { type: Type.STRING, description: "Garnish suggestion" },
    flavorProfile: { type: Type.STRING, description: "3 descriptors (e.g. Ahumado, Cítrico, Sedoso)" },
    whyItWorks: { type: Type.STRING, description: "Brief mixology explanation" }
  },
  required: ["name", "description", "ingredients", "instructions", "flavorProfile", "whyItWorks"]
};

export const generateCocktailRecipe = async (
  inventory: InventoryItem[],
  userResponses: string[]
): Promise<GeneratedRecipe> => {
  
  const inventoryStr = inventory.map(cat => `${cat.category}: ${cat.items.join(', ')}`).join('\n');
  const userVibes = userResponses.join(', ');

  const prompt = `
    Actúa como 'El Alquimista', un mixólogo legendario y sofisticado.
    Tu misión es diseñar un cóctel de autor ÚNICO utilizando el siguiente inventario y adaptado a las emociones del cliente.

    INVENTARIO:
    ${inventoryStr}

    PERFIL DEL CLIENTE (Vibe):
    ${userVibes}

    REGLAS:
    1. Usa SOLO el inventario provisto (asume hielo/básicos). "La Broma" es jarabe de azúcar.
    2. El nombre debe ser místico, elegante o intrigante (en Español).
    3. La descripción debe ser evocadora, usando lenguaje sensorial.
    4. Crea combinaciones balanceadas pero interesantes.
  `;

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: RECIPE_SCHEMA,
        temperature: 0.9
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as GeneratedRecipe;
    }
    throw new Error("No response text generated");
  } catch (error) {
    console.error("Error generating recipe:", error);
    return {
      name: "El Elixir Fallido",
      description: "La conexión con el éter se ha interrumpido. Un clásico reinventado para tiempos difíciles.",
      ingredients: [
        { item: "Ron Blanco", amount: "2 oz" },
        { item: "Limón", amount: "0.75 oz" },
        { item: "La Broma (Azúcar)", amount: "0.75 oz" }
      ],
      instructions: ["Batir vigorosamente con hielo", "Servir en copa coupé congelada"],
      glassType: "Coupé",
      garnish: "Twist de limón",
      flavorProfile: "Cítrico, Refrescante, Clásico",
      whyItWorks: "Cuando la alquimia falla, el equilibrio clásico del Daiquiri siempre prevalece."
    };
  }
};

export const generateCocktailImage = async (recipe: GeneratedRecipe): Promise<string | null> => {
  try {
    const prompt = `
      Professional digital illustration of a cocktail named "${recipe.name}".
      Visual description: ${recipe.description}.
      Ingredients to feature visually: ${recipe.garnish}, ${recipe.glassType}.
      Style: High-end, moody bar photography style, cinematic lighting, shallow depth of field, elegant, golden accents, dark background, 8k resolution, highly detailed, photorealistic liquid textures.
      No text on image.
    `;

    const response = await genAI.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      }
    });

    // Iterate through parts to find the image
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
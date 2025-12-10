# ALQUIMISTA ⚗️🍸

**Alquimista** es una aplicación web progresiva (PWA) de mixología impulsada por Inteligencia Artificial Generativa (Google Gemini 2.5). Diseñada no solo para crear cócteles deliciosos, sino para optimizar la rentabilidad del bar priorizando ingredientes de alto margen (Tier 1) y gestionando la física de fluidos para presentaciones visuales impactantes.

## 🚀 Características Principales

*   **Generación de Recetas con IA:** Crea cócteles únicos basados en el "vibe", sabor y contexto del usuario, optimizados para el inventario real.
*   **Motor de Rentabilidad:** La lógica interna prioriza ingredientes de bajo costo y alto impacto (Seco Herrerano, Ron Añejo de casa) sobre licores premium costosos.
*   **Sistema de Temas Dinámicos:** Cambia la estética completa de la app en tiempo real con animaciones y tipografías únicas.
    *   🏴‍☠️ **Pirata:** Estilo caribeño, madera, oleaje.
    *   🧪 **Químico:** Laboratorio, hexágonos, fluidos viscosos.
    *   🔮 **Alquimista:** Místico, oro, constelaciones y levitación.
    *   ⚡ **Cyberpunk:** Neón, glitch, futuro distópico.
*   **Multilenguaje:** Soporte completo para Español, Inglés, Francés, Alemán, Ruso, Chino, Portugués y Árabe (con soporte RTL).
*   **Visualización Generativa:** Crea imágenes fotorrealistas de los cócteles sugeridos usando Gemini Imagen en segundo plano.
*   **Grimorio Maestro:** Base de datos de 48 recetas predefinidas (Arquetipos) curadas para velocidad operativa y venta.

## 🛠️ Tecnologías

*   **Frontend:** React 19, TypeScript.
*   **Estilos:** Tailwind CSS (Arquitectura basada en variables CSS para el cambio instantáneo de temas).
*   **AI Core:** Google GenAI SDK (`@google/genai`).
    *   `gemini-2.5-flash`: Lógica de mixología y generación de JSON.
    *   `gemini-2.5-flash-image` (o Imagen 3): Generación visual de los cócteles.
*   **UI/UX:** Lucide React para iconografía, Transiciones CSS fluidas, Efectos de vidrio (Glassmorphism).
*   **Tipografía:** Google Fonts (Cinzel, UnifrakturMaguntia, Orbitron, Rajdhani, Inter, Cairo).

## 🔮 Cómo Funciona

1.  **Quiz Sensorial:** El usuario responde preguntas sobre su estado de ánimo, paladar y entorno a través de una interfaz inmersiva.
2.  **Alquimia (Prompt Engineering):** Se construye un prompt complejo que incluye el inventario disponible, reglas de densidad de fluidos (para tragos por capas) y objetivos de margen de ganancia.
3.  **Transmutación:** Gemini devuelve una receta estructurada (JSON) con instrucciones precisas y el "por qué funciona" químicamente.
4.  **Materialización:** Se genera una imagen del cóctel y se guarda en el historial local (`localStorage`).

---
*"La materia no se crea ni se destruye, solo se transmuta en perfección líquida."*
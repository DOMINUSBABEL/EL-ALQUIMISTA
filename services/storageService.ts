import { GeneratedRecipe } from "../types";

const STORAGE_KEY = 'alquimista_history';

/**
 * Safely saves the recipe history to localStorage.
 * If the quota is exceeded (common with Base64 images),
 * it iteratively removes the images from the oldest recipes
 * (keeping the text data) until the new item fits.
 */
export const saveHistorySafe = (newRecipe: GeneratedRecipe, currentHistory: GeneratedRecipe[]): GeneratedRecipe[] => {
  // 1. Create the new proposed history array
  let updatedHistory = [newRecipe, ...currentHistory];

  try {
    // 2. Try to save directly
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
    return updatedHistory;
  } catch (e: any) {
    // 3. Check if error is QuotaExceededError
    if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
      console.warn("Storage quota exceeded. Pruning old images...");
      
      // 4. Iterative pruning: Find oldest recipes with images and remove the image data
      // We start from the end of the array (oldest)
      let saved = false;
      const historyClone = [...updatedHistory];

      for (let i = historyClone.length - 1; i >= 0; i--) {
        if (historyClone[i].imageUrl) {
          // Remove image data to free up space
          historyClone[i] = { ...historyClone[i], imageUrl: undefined };
          
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(historyClone));
            saved = true;
            break; // Stop if we successfully saved
          } catch (retryError) {
            continue; // Continue pruning if it still doesn't fit
          }
        }
      }

      if (saved) {
        return historyClone;
      } else {
        // If we stripped all images and it still doesn't fit (unlikely for text),
        // we might need to truncate the list itself.
        const truncated = historyClone.slice(0, 50); // Keep max 50 recipes
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(truncated));
            return truncated;
        } catch(finalErr) {
            console.error("Critical storage failure", finalErr);
            return currentHistory; // Fail safe
        }
      }
    }
    console.error("Unknown storage error", e);
    return currentHistory;
  }
};

export const loadHistory = (): GeneratedRecipe[] => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return [];
  try {
    return JSON.parse(saved);
  } catch (e) {
    console.error("Corrupt history data", e);
    return [];
  }
};

export const clearHistory = () => {
    localStorage.removeItem(STORAGE_KEY);
};
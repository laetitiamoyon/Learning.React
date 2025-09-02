export type LocalStorageKey = 'cats' | 'votesCount';;

export function getLocalStorage<T>(key: LocalStorageKey): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch (error) {
      console.error(`Error getting ${key} from localStorage`, error);
      return null;
    }
  }
  
  export function setLocalStorage<T>(key: LocalStorageKey, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting ${key} in localStorage`, error);
    }
  }
  
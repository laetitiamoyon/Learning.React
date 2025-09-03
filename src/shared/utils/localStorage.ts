export type LocalStorageKey = 'cats' | 'votesCount';

export function getLocalStorage<T>(key: LocalStorageKey, defaultValue: T): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : defaultValue;
    } catch (error) {
      console.error(`Error getting ${key} from localStorage`, error);
      return defaultValue;
    }
}
  
export function setLocalStorage<T>(key: LocalStorageKey, value: T): void {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error setting ${key} in localStorage`, error);
    }
}
  
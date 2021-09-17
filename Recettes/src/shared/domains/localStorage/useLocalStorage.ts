import { getOrDefaultDataFromLocalStorage, setLocalStorageData } from './localStorage.utils';

export const useLocalStorage = <T>(key : string, initialValue : T) =>
{
  const get = () => getOrDefaultDataFromLocalStorage(key, initialValue)
  const set = (value : T) => setLocalStorageData(key, value)

  return [get, set]
}
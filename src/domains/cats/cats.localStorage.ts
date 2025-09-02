import { getLocalStorage, setLocalStorage } from "../../shared/utils/localStorage";
import type { Cat } from "./cats.model";

export const getCatsFromLocalStorage = () : Cat[] => getLocalStorage('cats') || [];

export const resetCatsVoteFromLocalStorageIfNotDefined = (cats: Cat[] | undefined = []) : Cat[]=> {
  if (getCatsFromLocalStorage()?.length) return getCatsFromLocalStorage();

  setLocalStorage('cats', cats)

  return cats
}
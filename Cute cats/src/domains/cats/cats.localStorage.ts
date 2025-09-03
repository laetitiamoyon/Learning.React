import { getLocalStorage, setLocalStorage } from "../../shared/utils/localStorage";
import type { CatWithVotes } from "./cats.model";

export const getCatsFromLocalStorage = (): CatWithVotes[] => {
  const cats = getLocalStorage('cats', []);
  return cats ?? [];
};

export const resetCatsVoteFromLocalStorageIfNotDefined = (cats: CatWithVotes[] | undefined = []) : CatWithVotes[]=> {
  if (getCatsFromLocalStorage()?.length) return getCatsFromLocalStorage();

  setLocalStorage('cats', cats)

  return cats
}

export const voteToCatFromLocalStorage = (catId: string) => {
  const cats = getCatsFromLocalStorage();
  const updatedCats = cats.map((cat) =>
    cat.id === catId ? { ...cat, votes: cat.votes + 1 } : cat
  );
  setLocalStorage("cats", updatedCats);
  return updatedCats;
};

export const getVoteCountFromLocalStorage = (): number =>
  getLocalStorage("votesCount", 0) ?? 0;

export const incrementVoteCountFromLocalStorage = (): number => {
  const newCount = getVoteCountFromLocalStorage() + 1;
  setLocalStorage("votesCount", newCount);
  return newCount;
};
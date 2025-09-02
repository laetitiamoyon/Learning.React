import { shuffle } from "../../shared/utils/array/suffle";
import type { Cat } from "./cats.model";

export const sorted = (cats: Cat[]) => [...cats].sort((a, b) => b.votes - a.votes);

export const sortedCatsByVotes = (cats: Cat[]) => {
    const sortedCats = sorted(cats);
    const top3 = sortedCats.slice(0, 3);
    const others = sortedCats.slice(3);
    
    return { top3, others };
}

export const getTwoFirstCats = (cats: Cat[]) => {
    return shuffle(cats).slice(0, 2);
};


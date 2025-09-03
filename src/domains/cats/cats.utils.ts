import type { CatWithVotes } from "./cats.model";

export const sortedCatsByVotes = (cats: CatWithVotes[]) => [...cats].sort((a, b) => b.votes - a.votes);



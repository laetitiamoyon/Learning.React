import type { CatWithVotes, Cat } from "./cats.model";

export const fetchCats = (): Promise<CatWithVotes[]> =>
  fetch("https://conseil.latelier.co/data/cats.json") 
  .then((res) => res.json() as Promise<{ images: Cat[] }>)
  .then(({ images }) =>
    images.map(({ id, url }) => ({
      id,
      name: id,
      url,
      votes: 0,
    }))
  );
import type { ApiCat, Cat } from "../types/cat";

export const fetchCats = async (): Promise<Cat[]> => {
  const response = await fetch("https://conseil.latelier.co/data/cats.json");
  const data: { images: ApiCat[] } = await response.json();

  return data.images.map((cat, index) => ({
    id: index,
    name: cat.id,
    url: cat.url,
    votes: 0,
  }));
};

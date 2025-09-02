import type { Cat, ApiCat } from "../domains/cats/cats.model";


export const fetchCats = async (): Promise<Cat[]> => {
  const response = await fetch("https://conseil.latelier.co/data/cats.json");
  const data: { images: ApiCat[] } = await response.json();

  return data.images.map((cat) => ({
    id: cat.id,
    name: cat.id,
    url: cat.url,
    votes: 0,
  }));
};

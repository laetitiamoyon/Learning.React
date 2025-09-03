import { useQuery } from "@tanstack/react-query";
import type { CatWithVotes } from "../cats.model";
import { fetchCats } from "../cats.api";

export const useCats = (): {
  cats: CatWithVotes[] | undefined;
  isLoading: boolean;
  isError: boolean;
} => {
  const { data: cats, isLoading, isError } = useQuery<CatWithVotes[]>({
    queryKey: ["cats"],
    queryFn: fetchCats,
  });

  return { cats, isLoading, isError };
};
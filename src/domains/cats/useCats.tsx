import { useQuery } from "@tanstack/react-query";
import type { Cat } from "./cats.model";
import { fetchCats } from "../../api/fetchCats";

// export const useCats = () => {
//   const { data: cats, isLoading } = useQuery<Cat[]>({
//     queryKey: ["cats"],
//     queryFn: fetchCats,
//   });

//   return { cats, isLoading };
// };

export const useCats = () => {
  const { data: cats, isLoading, isError } = useQuery<Cat[]>({
    queryKey: ["cats"],
    queryFn: fetchCats,
  });

  return { cats, isLoading, isError };
};
import { useEffect, useState } from "react";
import type { Category } from "../types";
import { fetchUniverse } from "../api";

export function useUniverse() {
  const [data, setData] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetchUniverse()
      .then(categories => {
        if (mounted) setData(categories);
      })
      .catch(err => {
        console.error(err);
        if (mounted) setError("Nous n'avons pas pu récupérer les prestations");
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return { data, loading, error };
}

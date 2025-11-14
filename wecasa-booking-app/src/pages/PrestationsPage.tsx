import { useFetchPrestation } from "../hooks/useFetchPrestation";
import { PrestationItem } from "../components/PrestationItem";
import type { JSX } from "react";
import { useBookingDispatch } from "../hooks/useBooking";
import type { Prestation } from "../types";

export default function PrestationsPage(): JSX.Element | null {
  const { data, loading, error } = useFetchPrestation();
  const dispatch = useBookingDispatch();
  const handleAdd = (prestation: Prestation) => dispatch({ type: "ADD_PRESTATION", prestation });

  if (loading) return <div>Chargement des prestations...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return null;

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <main className="col-span-2">
        {data.map(cat => (
          <section key={cat.reference} className="mb-6">
            <div className="grid grid-cols-1 gap-4">
              <PrestationItem
                  key={cat.reference}
                  title={cat.title}
                  prestations={cat.prestations}
                  onAdd={handleAdd}
                />
              </div>
            </section>
          ))}
      </main>
    </div>
  );
}


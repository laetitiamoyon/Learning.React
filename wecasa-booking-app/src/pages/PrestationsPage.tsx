import { useUniverse } from "../hooks/useUniverse";
import { useBookingDispatch } from "../store/BookingProvider";
import { PrestationItem } from "../components/PrestationItem";

export default function PrestationsPage() {
  const { data, loading, error } = useUniverse();
  const dispatch = useBookingDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAdd = (p: any) => {
        dispatch({ type: "ADD_PRESTATION", prestation: p });
  };

  if (loading) return <div>Chargement...</div>;
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


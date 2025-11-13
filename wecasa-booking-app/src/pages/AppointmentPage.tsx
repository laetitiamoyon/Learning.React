import { useEffect, useState } from "react";
import { useBookingState, useBookingDispatch } from "../store/BookingProvider";
import { isAfter } from "date-fns";

export default function AppointmentPage() {
  const state = useBookingState();
  const dispatch = useBookingDispatch();
  const [datetime, setDatetime] = useState(state.appointment ?? "");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!datetime) return;
    const dt = new Date(datetime);
    if (isAfter(dt, new Date())) {
      dispatch({ type: "SET_APPOINTMENT", appointment: datetime });
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setError("La date doit être ultérieure à celle d'aujourd'hui");
    }
  }, [datetime, dispatch]);

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <main className="col-span-2">
        <h1 className="text-xl font-bold mb-4">Choisir un créneau</h1>
        <label className="block mb-2">Date et heure</label>
        <input
          type="datetime-local"
          value={datetime}
          onChange={e => setDatetime(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {error && <div className="text-red-500 mt-3">{error}</div>}
        <div className="text-sm text-gray-500 mt-3">
          Les créneaux disponibles sont tous les jours entre 07:00 et 22:00.
        </div>
      </main>
    </div> 
  );
}

import { useState, type JSX } from "react";
import { isAfter } from "date-fns";
import { useBookingState, useBookingDispatch } from "../hooks/useBooking";

export default function AppointmentPage(): JSX.Element {
  const state = useBookingState();
  const dispatch = useBookingDispatch();
  const [datetime, setDatetime] = useState(state.appointment ?? "");
  const [error, setError] = useState<string | null>(null);

  const handleDateChange = (value: string): void => {
    setDatetime(value);
  
    const selectedDate = new Date(value);
    const currentDate = new Date();
  
    if (isAfter(selectedDate, currentDate)) {
      dispatch({ type: "SET_APPOINTMENT", appointment: value });
      setError(null);
    } else {
      setError("Nous n'avons pas pu enregistrer ce créneau. Veuillez en choisir un autre.");
    }
  };  

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <main className="col-span-2">
        <label className="block mb-2">Date et heure</label>
        <input
          type="datetime-local"
          value={datetime}
          onChange={(e) => handleDateChange(e.target.value)}
          className="w-full p-2 border rounded"
          min={new Date().toISOString().slice(0, 16)} 
        />

        {error && <div className="text-red-500 mt-3">{error}</div>}
        <div className="text-sm text-gray-500 mt-3">
          Les créneaux disponibles sont tous les jours entre 07:00 et 22:00.
        </div>
      </main>
    </div> 
  );
}

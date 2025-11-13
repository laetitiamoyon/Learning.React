import { useEffect, useState } from "react";
import { useBookingState, useBookingDispatch } from "../store/BookingProvider";

export default function AddressPage() {
  const state = useBookingState();
  const dispatch = useBookingDispatch();
  const [address, setAddress] = useState(state.address ?? "");

  useEffect(() => {
    dispatch({ type: "SET_ADDRESS", address: address.trim() });
  }, [address, dispatch]);

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <main className="col-span-2">
        <input
          value={address}
          onChange={e => setAddress(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="46 Rue René Clair, 75018 Paris"
        />
        <p className="mt-2 text-gray-500 text-sm">
          Veuillez renseigner votre adresse pour continuer.
        </p>
      </main>
    </div>
  );
}

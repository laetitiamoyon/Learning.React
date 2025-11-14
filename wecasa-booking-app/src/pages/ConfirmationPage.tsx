import { Link, useNavigate } from "react-router-dom";
import { formatDuration, formatPrice } from "../utils/formats";
import type { JSX } from "react";
import { computeCartTotals } from "../utils/cart";
import { useBookingState, useBookingDispatch } from "../hooks/useBooking";

export default function ConfirmationPage(): JSX.Element {
  const state = useBookingState();
  const dispatch = useBookingDispatch();
  const navigate = useNavigate();
  const { totalPrice, totalDuration } = computeCartTotals(state.items);

  return (
    <div className="p-6 max-w-2xl mx-auto text-center">
      <p className="text-gray-700">Merci — votre rendez-vous est enregistré.</p>

      <div className="mt-6 p-4 border rounded">
        <div><strong>Adresse :</strong> {state.address}</div>
        <div><strong>Rendez-vous :</strong> {state.appointment ? new Date(state.appointment).toLocaleString() : "—"}</div>
        <div><strong>Prix :</strong> {formatPrice(totalPrice)}</div>
        <div><strong>Durée :</strong> {formatDuration(totalDuration)}</div>
      </div>

      <div className="mt-6">
        <button
          onClick={() => {
            dispatch({ type: "RESET" });
            navigate("/"); 
          }}
          className="w-full max-w-md px-6 py-3 rounded-full text-white text-lg font-semibold bg-gradient-to-r from-orange-500 to-purple-600 hover:opacity-90 transition cursor-pointer"
        >
          Nouvelle réservation
        </button>
      </div>

      <div className="mt-4">
        <Link to="/">Retour à l&lsquo;accueil</Link>
      </div>
    </div>
  );
}
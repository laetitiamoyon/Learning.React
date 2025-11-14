
import { PrestationCartItem } from "./PrestationCartItem";
import { formatPrice, formatDuration } from "../utils/formats";
import type { CartItem } from "../types";
import { usePrestationCartTotals } from "../hooks/usePrestationCartTotals";
import { useBookingState } from "../hooks/useBooking";
import type { JSX } from "react";

export function PrestationCart(): JSX.Element {
  const { items } = useBookingState() as { items: CartItem[] };
  const { totalPrice, totalDuration } = usePrestationCartTotals();

  return (
    <aside className="p-4 bg-white shadow rounded max-w-sm">
      <h3 className="font-semibold mb-2">Mon panier de prestations</h3>
      <div className="space-y-2">
        {items.length === 0 ? (
          <div className="text-sm text-gray-500">Aucune prestation ajoutée</div>
        ) : (
          items.map((item) => (
            <PrestationCartItem key={item.prestation.reference} item={item} />
          ))
        )}
      </div>

      <div className="mt-4 border-t pt-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Total</span>
          <span className="font-semibold">{formatPrice(totalPrice)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>Durée totale</span>
          <span>{formatDuration(totalDuration)}</span>
        </div>
      </div>
    </aside>
  );
}


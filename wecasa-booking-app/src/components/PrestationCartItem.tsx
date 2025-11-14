
import type { JSX } from "react";
import { useBookingDispatch } from "../hooks/useBooking";
import type { CartItem } from "../types";
import { formatPrice } from "../utils/formats";

interface PrestationCartItemProps {
  item: CartItem;
}

export function PrestationCartItem({ item }: PrestationCartItemProps): JSX.Element {
  const dispatch = useBookingDispatch();
  const { prestation, quantity } = item;

  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="font-medium">{prestation.title}</div>
        <div className="text-xs text-gray-500">
          {formatPrice(prestation.price)} • {prestation.duration}min
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="px-2 text-lg"
          onClick={() =>
            dispatch({
              type: "REMOVE_PRESTATION",
              reference: prestation.reference,
            })
          }
        >
          −
        </button>

        <div>{quantity}</div>

        <button
          className="px-2 text-lg"
          onClick={() =>
            dispatch({
              type: "ADD_PRESTATION",
              prestation,
            })
          }
        >
          +
        </button>
      </div>
    </div>
  );
}

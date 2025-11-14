import { useBookingState } from "./useBooking";

interface PrestationCartTotals {
  totalPrice: number;
  totalDuration: number;
}

export function usePrestationCartTotals(): PrestationCartTotals {
  const state = useBookingState();
  const totalPrice = state.items.reduce((state, item) => state + item.prestation.price * item.quantity, 0);
  const totalDuration = state.items.reduce((state, item) => state + item.prestation.duration * item.quantity, 0);
  return { totalPrice, totalDuration };
}

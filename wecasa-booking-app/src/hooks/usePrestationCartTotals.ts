import { useBookingState } from "../store/BookingProvider";

export function usePrestationCartTotals() {
  const state = useBookingState();
  const totalPrice = state.items.reduce((s, i) => s + i.prestation.price * i.quantity, 0);
  const totalDuration = state.items.reduce((s, i) => s + i.prestation.duration * i.quantity, 0);
  return { totalPrice, totalDuration };
}

import { useContext } from 'react'
import { BookingStateContext, BookingDispatchContext } from '../store/BookingProvider'
import type { State, Action } from '../store/booking.types'

export function useBookingState(): State {
  const context = useContext(BookingStateContext)
  if (!context) throw new Error('useBookingState must be used within BookingProvider')
  return context
}

export function useBookingDispatch(): React.Dispatch<Action> {
  const context = useContext(BookingDispatchContext)
  if (!context) throw new Error('useBookingDispatch must be used within BookingProvider')
  return context
}

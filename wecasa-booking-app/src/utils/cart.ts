import type { CartItem } from '../types'

interface CartTotals {
  totalPrice: number
  totalDuration: number
}

export function computeCartTotals(items: CartItem[]): CartTotals {
  return items.reduce(
    (acc, item) => {
      acc.totalPrice += item.prestation.price * item.quantity
      acc.totalDuration += item.prestation.duration * item.quantity
      return acc
    },
    { totalPrice: 0, totalDuration: 0 },
  )
}

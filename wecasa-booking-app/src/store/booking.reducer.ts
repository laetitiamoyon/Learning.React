import type { Action, State } from './booking.types'

export const initialState: State = {
  items: [],
  address: null,
  appointment: null,
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_PRESTATION': {
      const existing = state.items.find(
        (i) => i.prestation.reference === action.prestation.reference,
      )

      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.prestation.reference === action.prestation.reference
              ? { ...i, quantity: i.quantity + 1 }
              : i,
          ),
        }
      }

      return {
        ...state,
        items: [...state.items, { prestation: action.prestation, quantity: 1 }],
      }
    }

    case 'REMOVE_PRESTATION': {
      const existing = state.items.find((i) => i.prestation.reference === action.reference)

      if (!existing) return state

      if (existing.quantity > 1) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.prestation.reference === action.reference ? { ...i, quantity: i.quantity - 1 } : i,
          ),
        }
      }

      return {
        ...state,
        items: state.items.filter((i) => i.prestation.reference !== action.reference),
      }
    }

    case 'REMOVE_ALL_PRESTATION':
      return {
        ...state,
        items: state.items.filter((i) => i.prestation.reference !== action.reference),
      }

    case 'SET_ADDRESS':
      return { ...state, address: action.address }

    case 'SET_APPOINTMENT':
      return { ...state, appointment: action.appointment }

    case 'RESET':
      return initialState

    default:
      return state
  }
}

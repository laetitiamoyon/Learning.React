import React, { createContext, useContext, useReducer, type ReactNode } from "react";
import type { Prestation } from "../types";

type SelectedItem = {
  prestation: Prestation;
  quantity: number;
};

type State = {
  items: SelectedItem[];
  address: string | null;
  appointment: string | null; 
};

type Action =
  | { type: "ADD_PRESTATION"; prestation: Prestation }
  | { type: "REMOVE_PRESTATION"; reference: string } 
  | { type: "REMOVE_ALL_PRESTATION"; reference: string } 
  | { type: "SET_ADDRESS"; address: string }
  | { type: "SET_APPOINTMENT"; appointment: string }
  | { type: "RESET" };

const initialState: State = {
  items: [],
  address: null,
  appointment: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_PRESTATION": {
      const existing = state.items.find(i => i.prestation.reference === action.prestation.reference);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.prestation.reference === action.prestation.reference ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { prestation: action.prestation, quantity: 1 }] };
    }
    case "REMOVE_PRESTATION": {
      const existing = state.items.find(i => i.prestation.reference === action.reference);
      if (!existing) return state;
      if (existing.quantity > 1) {
        return {
          ...state,
          items: state.items.map(i =>
            i.prestation.reference === action.reference ? { ...i, quantity: i.quantity - 1 } : i
          ),
        };
      } else {
        return { ...state, items: state.items.filter(i => i.prestation.reference !== action.reference) };
      }
    }
    case "REMOVE_ALL_PRESTATION":
      return { ...state, items: state.items.filter(i => i.prestation.reference !== action.reference) };
    case "SET_ADDRESS":
      return { ...state, address: action.address };
    case "SET_APPOINTMENT":
      return { ...state, appointment: action.appointment };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const BookingStateContext = createContext<State | undefined>(undefined);
const BookingDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BookingStateContext.Provider value={state}>
      <BookingDispatchContext.Provider value={dispatch}>{children}</BookingDispatchContext.Provider>
    </BookingStateContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBookingState() {
  const ctx = useContext(BookingStateContext);
  if (!ctx) throw new Error("useBookingState must be used within BookingProvider");
  return ctx;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBookingDispatch() {
  const ctx = useContext(BookingDispatchContext);
  if (!ctx) throw new Error("useBookingDispatch must be used within BookingProvider");
  return ctx;
}

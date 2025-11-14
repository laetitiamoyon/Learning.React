import React, { createContext, useReducer, type JSX, type ReactNode } from "react";
import { reducer, initialState } from "./booking.reducer";
import type { State, Action } from "./booking.types";

const BookingStateContext = createContext<State | undefined>(undefined);
const BookingDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BookingStateContext.Provider value={state}>
      <BookingDispatchContext.Provider value={dispatch}>
        {children}
      </BookingDispatchContext.Provider>
    </BookingStateContext.Provider>
  );
}

export { BookingStateContext, BookingDispatchContext };

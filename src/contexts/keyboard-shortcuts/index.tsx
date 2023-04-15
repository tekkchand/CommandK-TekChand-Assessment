import React, { createContext, Dispatch, useReducer } from "react";
import { KeyboardShortcutActions } from "./actions";
import { reducer } from "./reducer";
import { KeyboardShortcutType } from "./types";

export type InitialStateType = {
  shortcuts: KeyboardShortcutType[];
};

export const initialState = {
  shortcuts: [],
};

export const KeyboardShortcutsContext = createContext<
  | {
      state: InitialStateType;
      dispatch: Dispatch<KeyboardShortcutActions>;
    }
  | undefined
>(undefined);

function KeyboardShortcutsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <KeyboardShortcutsContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </KeyboardShortcutsContext.Provider>
  );
}

function useKeyboardShortcutsContext() {
  const context = React.useContext(KeyboardShortcutsContext);
  if (context === undefined) {
    throw new Error(
      "useKeyboardShortcutsContext must be used within a KeyboardShortcutsContextProvider"
    );
  }
  return context;
}

export { KeyboardShortcutsContextProvider, useKeyboardShortcutsContext };

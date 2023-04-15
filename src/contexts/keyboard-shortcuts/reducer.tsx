import { InitialStateType } from ".";
import { KeyboardShortcutActionType, KeyboardShortcutActions } from "./actions";

export const reducer = (
  state: InitialStateType,
  action: KeyboardShortcutActions
): InitialStateType => {
  switch (action.type) {
    case KeyboardShortcutActionType.AddShortcut:
      return {
        ...state,
        shortcuts: [...state.shortcuts, action.payload.shortcut],
      };
    case KeyboardShortcutActionType.RemoveShortcut:
      return {
        ...state,
        shortcuts: state.shortcuts.filter(
          (shortcut) => shortcut.id !== action.payload.shortcut.id
        ),
      };
    case KeyboardShortcutActionType.RemoveAllShortcuts:
      return { ...state, shortcuts: [] };
    default:
      return state;
  }
};

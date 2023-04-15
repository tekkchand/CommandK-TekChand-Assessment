import { KeyboardShortcutType } from "./types";

export enum KeyboardShortcutActionType {
  AddShortcut = "ADD_SHORTCUT",
  RemoveShortcut = "REMOVE_SHORTCUT",
  RemoveAllShortcuts = "REMOVE_ALL_SHORTCUTS",
}

export interface AddShortcut {
  type: KeyboardShortcutActionType.AddShortcut;
  payload: { shortcut: KeyboardShortcutType };
}

export interface RemoveShortcut {
  type: KeyboardShortcutActionType.RemoveShortcut;
  payload: { shortcut: KeyboardShortcutType };
}

export interface RemoveAllShortcuts {
  type: KeyboardShortcutActionType.RemoveAllShortcuts;
}

export type KeyboardShortcutActions =
  | AddShortcut
  | RemoveShortcut
  | RemoveAllShortcuts;

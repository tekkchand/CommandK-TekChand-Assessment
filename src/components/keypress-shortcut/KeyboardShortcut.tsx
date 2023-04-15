import { useEffect, useId, useMemo } from "react";
import * as keypress from "keypress.js";
import { useKeyboardShortcutsContext } from "../../contexts/keyboard-shortcuts";
import { KeyboardShortcutActionType } from "../../contexts/keyboard-shortcuts/actions";

type Props = {
  combo: string;
  callback: () => void;
  description: string;
  componentName: string;
};

function KeyboardShortcut({
  combo,
  callback,
  description,
  componentName,
}: Props) {
  const { dispatch } = useKeyboardShortcutsContext();
  const id = useId();
  useEffect(() => {
    dispatch({
      type: KeyboardShortcutActionType.AddShortcut,
      payload: {
        shortcut: {
          key: combo,
          description: description,
          componentName,
          id,
        },
      },
    });
  }, [combo, description, componentName, id, dispatch]);

  var listener = useMemo(() => {
    return new keypress.Listener();
  }, []);

  listener.simple_combo(combo, function () {
    callback();
  });

  useEffect(() => {
    return () => {
      // listener.unregister_combo("shift s");
      // listener.unregister_many(my_registered_combos);
      // remove ALL combos that have been registered
      listener.reset();
      dispatch({ type: KeyboardShortcutActionType.RemoveAllShortcuts });
    };
  }, [listener, dispatch]);

  return null;
}

export default KeyboardShortcut;

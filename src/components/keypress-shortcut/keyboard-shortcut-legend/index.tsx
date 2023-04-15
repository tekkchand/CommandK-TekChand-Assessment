import { useKeyboardShortcutsContext } from "../../../contexts/keyboard-shortcuts";
import { ShortcutDescription, ShortcutLabel } from "./styles";

function KeyboardShortcutLegend() {
  const { state } = useKeyboardShortcutsContext();
  return (
    <div>
      {state.shortcuts.map((shortcut) => (
        <ShortcutLabel key={shortcut.id}>
          <h2>{shortcut.componentName}</h2>
          <ShortcutDescription>{`"${shortcut.key}": ${shortcut.description}`}</ShortcutDescription>
        </ShortcutLabel>
      ))}
    </div>
  );
}

export default KeyboardShortcutLegend;

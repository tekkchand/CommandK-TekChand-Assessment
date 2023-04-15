import { useCallback, useState } from "react";
import KeyboardShortcut from "../keypress-shortcut/KeyboardShortcut";
import { Card } from "./styles";
import { generateRandomColor } from "../../utility/utility-functions";

function ComponentA() {
  const [randomColor, setRandomColor] = useState<string>();

  const turnSomeColor = useCallback((): void => {
    setRandomColor(generateRandomColor());
  }, []);

  return (
    <Card color={randomColor}>
      <h1>{ComponentA.displayName}</h1>
      <KeyboardShortcut
        combo="shift a"
        callback={turnSomeColor}
        description="Turns to some colour"
        componentName={ComponentA.displayName}
      ></KeyboardShortcut>
      <KeyboardShortcut
        combo="ctrl a"
        callback={turnSomeColor}
        description="Turns to some colour"
        componentName={ComponentA.displayName}
      ></KeyboardShortcut>
      <KeyboardShortcut
        combo="esc"
        callback={turnSomeColor}
        description="Turns to some colour"
        componentName={ComponentA.displayName}
      ></KeyboardShortcut>
      <KeyboardShortcut
        combo="alt ctrl c"
        callback={turnSomeColor}
        description="Turns to some colour"
        componentName={ComponentA.displayName}
      ></KeyboardShortcut>
    </Card>
  );
}

export default ComponentA;
ComponentA.displayName = "Component A";

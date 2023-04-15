import { useCallback, useState } from "react";
import KeyboardShortcut from "./keypress-shortcut/KeyboardShortcut";
import { Card } from "./component-a/styles";
import { generateRandomColor } from "../utility/utility-functions";

function ComponentB() {
  const [randomColor, setRandomColor] = useState<string>();

  const turnSomeColor = useCallback((): void => {
    setRandomColor(generateRandomColor());
  }, []);

  return (
    <Card color={randomColor}>
      <h1>{ComponentB.displayName}</h1>
      <KeyboardShortcut
        combo="shift a"
        callback={turnSomeColor}
        description="Turns to some colour"
        componentName={ComponentB.displayName}
      ></KeyboardShortcut>
    </Card>
  );
}

export default ComponentB;
ComponentB.displayName = "Component B";

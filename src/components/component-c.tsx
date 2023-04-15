import React, { useCallback, useState } from "react";
import KeyboardShortcut from "./keypress-shortcut/KeyboardShortcut";
import { Card } from "./component-a/styles";
import { generateRandomColor } from "../utility/utility-functions";

function ComponentC() {
  const [randomColor, setRandomColor] = useState<string>();

  const turnSomeColor = useCallback((): void => {
    setRandomColor(generateRandomColor());
  }, []);

  return (
    <Card color={randomColor}>
      <h1>{ComponentC.displayName}</h1>
      <KeyboardShortcut
        combo="ctrl v"
        callback={turnSomeColor}
        description="Turns to some colour"
        componentName={ComponentC.displayName}
      ></KeyboardShortcut>
    </Card>
  );
}

export default ComponentC;
ComponentC.displayName = "Component C";

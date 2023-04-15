import React, { useCallback, useState } from "react";
import KeyboardShortcut from "../keypress-shortcut/KeyboardShortcut";
import { Card } from "../component-a/styles";

function ComponentB() {
  const [randomColor, setRandomColor] = useState<string>();

  const turnSomeColor = useCallback((): void => {
    let maxVal = 0xffffff;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    let randColor = randomNumber.toString(16);
    setRandomColor(randColor);
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

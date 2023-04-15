import React from "react";
import "./App.css";
import ComponentA from "./components/component-a";
import ComponentB from "./components/component-b";
import ComponentC from "./components/component-c";
import { StyledWrapperDiv } from "./styles";
import KeyboardShortcutLegend from "./components/keypress-shortcut/keyboard-shortcut-legend";

function App() {
  return (
    <div className="App" style={{ marginTop: "100px" }}>
      <StyledWrapperDiv>
        <ComponentA />
        <ComponentB />
        <ComponentC />
        <KeyboardShortcutLegend />
      </StyledWrapperDiv>
    </div>
  );
}

export default App;

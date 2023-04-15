import React from "react";
import "./App.css";
import ComponentA from "./components/component-a";
import ComponentB from "./components/component-b";
import { ComponentWrapper } from "./styles";
import KeyboardShortcutLegend from "./components/keypress-shortcut/keyboard-shortcut-legend";

function App() {
  return (
    <div className="App" style={{ marginTop: "100px" }}>
      <ComponentWrapper>
        <ComponentA />
        <ComponentB />
        <KeyboardShortcutLegend />
      </ComponentWrapper>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Draggable from "./components/Draggable";
function App() {
  const items = [
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
    "item 6",
    "item 7",
  ];
  return (
    <div className="App">
      <Draggable items={items} />
    </div>
  );
}

export default App;

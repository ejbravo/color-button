import React, { useState } from "react";
import "./App.css";

import { Color } from "./types";

function App() {
  const [buttonColor, setButtonColor] = useState<Color>("red");
  const newButtonColor: Color = buttonColor === "blue" ? "red" : "blue";

  const toggleButtonColor = () => {
    setButtonColor((prev) => (prev === "blue" ? "red" : "blue"));
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={toggleButtonColor}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;

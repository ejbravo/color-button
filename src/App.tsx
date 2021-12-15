import React, { useState } from "react";
import "./App.css";

import { Color } from "./types";
import { replaceCameWithSpaces } from "./utils";

function App() {
  const [buttonColor, setButtonColor] = useState<Color>("red");
  const [isDisabled, setDisabled] = useState<boolean>(false);

  const newButtonColor = (prevColor: Color) =>
    prevColor === "blue" ? "red" : "blue";

  const toggleButtonColor = () =>
    setButtonColor((prev) => newButtonColor(prev));

  return (
    <div>
      <button
        style={{ backgroundColor: isDisabled ? "gray" : buttonColor }}
        disabled={isDisabled}
        onClick={toggleButtonColor}
      >
        Change to {newButtonColor(buttonColor)}
      </button>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        onChange={() => setDisabled(!isDisabled)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;

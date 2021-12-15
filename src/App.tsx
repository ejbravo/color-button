import React, { useState } from "react";
import "./App.css";

import { Colors } from "./types";
import { replaceCameWithSpaces } from "./utils";

function App() {
  const [buttonColor, setButtonColor] = useState<Colors>(Colors.RED);
  const [isDisabled, setDisabled] = useState<boolean>(false);

  const newButtonColor = (prevColor: Colors) =>
    prevColor === Colors.BLUE ? Colors.RED : Colors.BLUE;

  const toggleButtonColor = () =>
    setButtonColor((prev) => newButtonColor(prev));

  return (
    <div>
      <button
        style={{
          backgroundColor: isDisabled ? Colors.GRAY : buttonColor,
          color: Colors.WHITE,
        }}
        disabled={isDisabled}
        onClick={toggleButtonColor}
      >
        Change to {replaceCameWithSpaces(newButtonColor(buttonColor))}
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

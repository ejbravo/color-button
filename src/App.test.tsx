import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

import { Colors } from "./types";
import { replaceCameWithSpaces } from "./utils";

test("Button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of "change to blue"
  const colorButton = screen.getByRole("button", {
    name: `Change to ${replaceCameWithSpaces(Colors.BLUE)}`,
  });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: Colors.RED });
});

test("Button turns blue when clicked", () => {
  render(<App />);

  // expect the background color to red
  const colorButton = screen.getByRole("button", {
    name: `Change to ${replaceCameWithSpaces(Colors.BLUE)}`,
  });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: Colors.BLUE });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe(
    `Change to ${replaceCameWithSpaces(Colors.RED)}`
  );
});

test("initial conditions", () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: `Change to ${replaceCameWithSpaces(Colors.BLUE)}`,
  });

  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("buttons is disabled when the checkbox is checked", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: `Change to ${replaceCameWithSpaces(Colors.BLUE)}`,
  });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkBox);

  expect(checkBox).toBeChecked();
  expect(colorButton).toBeDisabled();
});

test("Disabled button has gray background and reverts to red", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: `Change to ${replaceCameWithSpaces(Colors.BLUE)}`,
  });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  // disable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: Colors.GRAY });

  // re-enable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: Colors.RED });
});

test("Clicked Disabled button has gray background and reverts to blue", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: `Change to ${replaceCameWithSpaces(Colors.BLUE)}`,
  });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  // change button to blue
  fireEvent.click(colorButton);

  // disabled button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: Colors.GRAY });

  // re-enable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: Colors.BLUE });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCameWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCameWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCameWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});

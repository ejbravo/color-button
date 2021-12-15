import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of "change to blue"
  const colorButton = screen.getByRole("button", { name: /change to blue/i });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("Button turns blue when clicked", () => {
  render(<App />);

  // expect the background color to red
  const colorButton = screen.getByRole("button", { name: /change to blue/i });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("buttons is disabled when the checkbox is checked", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkBox);

  expect(checkBox).toBeChecked();
  expect(colorButton).toBeDisabled();
});

test("Disabled button has gray background and reverts to red", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  // disable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  // re-enable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("Clicked Disabled button has gray background and reverts to blue", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  // change button to blue
  fireEvent.click(colorButton);

  // disabled button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  // re-enable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of "change to blue"
  const colorButton = screen.getByRole('button', {name: /change to blue/i});

  // expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});

});

test('Button turns blue when clicked', () => {
  render(<App />);

  // expect the background color to red
  const colorButton = screen.getByRole('button', {name: /change to blue/i});

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
  
  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');


})
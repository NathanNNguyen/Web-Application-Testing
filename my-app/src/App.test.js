import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Dashboard, { strikeHandle, ballHandle } from './Components/Dashboard';

test('render without crashing', () => {
  const container = render(<App />);
  console.log(container)
});

test('Is strikeHandle button adding 1'), () => {
  expect(strikeHandle(1)).toBe(2)
}

test('ballHandler adds one strike', () => {
  expect(ballHandle(0)).toBe(1);
});

test('are the buttons available', () => {
  const { getByText } = render(<Dashboard />);
  getByText("Strike");
  getByText("Ball");
});
import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

it("renders without crashing", () => {
  const appTree = renderer.create(<App />);
  expect(appTree).toMatchSnapshot();
})

it("converts to °C to °F", () => {
  render(<App />);
  const cInput = screen.getByLabelText("Temperature (°C)");
  userEvent.type(cInput, "100");

  const fInput = screen.getByLabelText("Temperature (°F)");
  expect(fInput.value).toBe("212");
})
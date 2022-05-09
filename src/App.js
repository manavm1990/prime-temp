import React from 'react';
import Input from "./components/Input";
import { tryConvert } from './utils';

export default function App() {
  const [tempC, setTempC] = React.useState(0);
  const [tempF, setTempF] = React.useState(0);

  const handleChange = (e) => {
    const { value, id } = e.target;

    if (id === "temp-c") {
      setTempC(value);
      setTempF(tryConvert(value, "toFahrenheit"));
    } else{
      setTempF(value);
      setTempC(tryConvert(value, "toCelsius"));
    }
  };

  return (
    <main>
      <Input id="temp-f" label="Temperature (°F)" changeHandler={handleChange} value={tempF}/>
      <Input id="temp-c" label="Temperature (°C)" changeHandler={handleChange} value={tempC}/>
    </main>
  );
}

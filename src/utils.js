const converters = {
  toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  },
  toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  },
};

export function tryConvert(temperature, conversion) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }

  const output = converters[conversion](input);
  return Math.round(output * 1000) / 1000;
}

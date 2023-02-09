var grados = require("celsius-fahrenheit-converter");
console.log(grados.celsiusToFahrenheit(50));
console.log(Math.trunc(grados.fahrenheitToCelcius(150)));

console.log(`La temperatura es ${grados.celsiusToFahrenheit(100)}`);

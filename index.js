const celsius = [0, 20, 30, 40];

let fahrenheit = celsius.map(temp => (temp * 9/5) + 32);

console.log(`Celsius: ${celsius} \n Farenheit: ${fahrenheit}`);

module.exports = fahrenheit;

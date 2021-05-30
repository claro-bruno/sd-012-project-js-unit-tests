const calculator = {
  add: (a, b) => Math.floor(a + b),
  mult: (a, b) => Math.floor(a * b),
  div: (a, b) => Math.floor(a / b),
  sub: (a, b) => Math.floor(a - b),
};
console.log(calculator.div(3, 2));
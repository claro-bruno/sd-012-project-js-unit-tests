/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
  add: (numInt1, numInt2) => numInt1 + numInt2,
  mult: (numInt1, numInt2) => numInt1 * numInt2,
  div: (numInt1, numInt2) => Math.floor(numInt1 / numInt2),
  sub: (numInt1, numInt2) => numInt1 - numInt2,
};

console.log(calculator.add(1, 3), 4);
console.log(calculator.mult(10, 3), 30);
console.log(calculator.div(5, 2), 2);
console.log(calculator.sub(1, 3), -2);

module.exports = calculator;

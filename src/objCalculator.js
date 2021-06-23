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

// Consultei o site http://speakingjs.com/es5/ch07.html para estudar sintaxe

const calculator = { // Cria constante pra envolver as funcoes
  add: (number1, number2) => number1 + number2, // Funcao de adicao usando object literals/arrow function que soma o primeiro parametro com o segundo.
  mult: (number1, number2) => number1 * number2, // Funcao de multiplicacao usando object literals/arrow function que multiplica o primeiro parametro com o segundo.
  // 'Math.floor https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor -- Retorna o menor numero inteiro
  div: (number1, number2) => Math.floor(number1 / number2), // Funcao de divisao usando object literals/arrow function que divide o primeiro parametro com o segundo e retorna o menor numero inteiro (Math.floor), ja que o teste usa um valor inteiro.
  sub: (number1, number2) => number1 - number2, // Funcao de subtracao usando object literals/arrow function que subtrai o primeiro parametro com o segundo.
};

module.exports = calculator; // exporta o Component

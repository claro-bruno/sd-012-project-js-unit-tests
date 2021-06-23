/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => { // Cria arrow function 'myCounter'
  let myArray = []; // Cria variavel 'myArrray' para receber array de valores das repeticoes 'for'
  for (let counter = 0; counter <= 3; counter += 1) { // Primeira repeticao para adiconar valores na variavel 'myArray'. Comecando com a variavel 'counter' sendo '0' e repetindo ate o valor '3'
    myArray.push(counter); // 'myArray.push' para adicionar o valor da variavel 'counter' na variavel 'myArray'
    for (let counter2 = 2; counter2 <= 3; counter2 += 1) { // Segunda repeticao para adiconar valores na variavel 'myArray'. Comecando com a variavel 'counter2' sendo '2' e repetindo ate o valor '3'
      myArray.push(counter2); // 'myArray.push' para adicionar o valor da variavel 'counter2' na variavel 'myArray'
      // Assim toda vez que a repeticao da varivale 'counter' for reproduzida, a repeticao de 'counter2' vai percorrer do inicio ao fim, adicionando seus valores logo apos o valor de 'counter'
    }
  }
  return myArray; // retorna a variavel 'myArray' preenchida com o 'array' de numeros
};

module.exports = myCounter; // exporta o Component

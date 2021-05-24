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

const myCounter = () => {
  var myArray = [];
  for (let primaryCounter = 0; primaryCounter <= 3; primaryCounter += 1) {
    myArray.push(primaryCounter);
    for (let secondaryCounter = 2; secondaryCounter <= 3; secondaryCounter += 1) {
      myArray.push(secondaryCounter);
    }
  }
  return myArray;
};

module.exports = myCounter;

const assert = require('assert');
const productDetails = require('../src/productDetails');
/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

const verifyProducts = (productsArray) => {
  if (productsArray[0].name === productsArray[1].name) {
    return true;
  } else {
    return false;
  }
};

const verifyId = (productsArray) => {
 let finalId123 = false;
 for (let index = 0; index < productsArray.length; index += 1) {
   let finalId = productsArray[index].details.productId.substr(-3);
   if (finalId === '123') {
     finalId123 = true;
   } else {
     return false;
   }
 }
 return finalId123;
};

console.log(verifyId(productDetails('Alcool gel', 'Máscara')))

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(
      typeof productDetails('Alcool gel', 'Máscara'),
      'object'
    );
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(
      typeof productDetails('Alcool gel', 'Máscara')[0],
      'object'
    );
    assert.strictEqual(
      typeof productDetails('Alcool gel', 'Máscara')[1],
      'object'
    );
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(
      verifyProducts(productDetails('Alcool gel', 'Máscara')),
      false
    );
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(
     verifyId(productDetails('Alcool gel', 'Máscara')),
     true
   );
  });
});

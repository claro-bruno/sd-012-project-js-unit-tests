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

//Utilizei o seguinte site como referencia para resolver o ultimo teste: https://www.w3schools.com/jsref/jsref_endswith.asp

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    assert.strictEqual(Array.isArray(productDetails()), true);
    assert.strictEqual(productDetails().length, 2);
    assert.strictEqual(typeof productDetails(), 'object');
    assert.notStrictEqual(productDetails()[0], productDetails()[1]);
    assert.strictEqual(productDetails()[0].details.productId.endsWith('123'), productDetails()[1].details.productId.endsWith('123'));
  });
});

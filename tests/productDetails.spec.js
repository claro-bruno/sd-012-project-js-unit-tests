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

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const productTest = productDetails('Álcool gel', 'Máscara');
    assert.strictEqual(typeof (productTest), 'object');
    assert.strictEqual(Object.values(productTest).length, 2);
    assert.strictEqual(typeof (productTest[0].details), 'object');
    assert.strictEqual(typeof (productTest[1].details), 'object');
    assert.deepStrictEqual(Object.values(productTest[0].details) !== Object.values(productTest[1].details), true);
    assert.deepStrictEqual(((Object.values(productTest[0].details)).join()).slice(-3), '123');
    assert.deepStrictEqual(((Object.values(productTest[1].details)).join()).slice(-3), '123');
  });
});

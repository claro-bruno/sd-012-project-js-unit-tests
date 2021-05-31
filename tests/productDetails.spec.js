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
    assert.strictEqual(Array.isArray(productDetails('a', 'b')), true);
    assert.strictEqual(productDetails('a', 'b').length, 2);
    for (let product of productDetails('a', 'b')) {
      assert.strictEqual(typeof product, 'object');
    }
    assert.strictEqual(productDetails('a', 'b')[0] !== productDetails('a', 'b')[1], true);
    for (let product of productDetails('a', 'b')) {
      assert.strictEqual(product.details.productId.substr(-3) === '123', true);
    }
  });
});

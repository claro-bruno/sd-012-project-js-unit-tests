const assert = require('assert');
const productDetails = require('../src/productDetails');
const product = productDetails('a', 'b');

const checkIfObj = (obj) => {
  const isObj = [];
  obj.forEach(element => {
    if (typeof element === 'object') {
      isObj.push(true);
    }
  })
  return isObj;
}


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
    assert.strictEqual(typeof (productDetails('a', 'b').values()), 'object');
    assert.strictEqual(product[0] === product[1], false);
    assert.strictEqual(product[0].details.productId.substr(-3) === product[0].details.productId.substr(-3), true);
  });
});

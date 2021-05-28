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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // Teste que os dois productIds terminam com 123.
    assert.strictEqual(Array.isArray(productDetails('array1', 'array2')), true);
    assert.strictEqual(productDetails('array1', 'array2').length, 2);
    assert.strictEqual(typeof productDetails('array1', 'array2')[0] && typeof productDetails('array1', 'array2')[1], 'object');
    assert.strictEqual(productDetails('array1', 'array2')[0] === productDetails('array1', 'array2')[1], false);
    assert.strictEqual(productDetails('array1', 'array2')[0].details.productId.endsWith('123') && productDetails('array1', 'array2')[1].details.productId.endsWith('123'), true);
  });
});

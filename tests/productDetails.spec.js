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
// requisito feito com suporte da Caroline

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
       // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof productDetails('a', 'b'), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('a', 'b').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('a', 'b')[0], 'object');
    assert.strictEqual(typeof productDetails('a', 'b')[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    const objeto1 = productDetails('a', 'b')[0];
    const objeto2 = productDetails('a', 'b')[1];
    assert.notDeepStrictEqual(objeto1, objeto2);
    // Teste que os dois productIds terminam com 123.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
    assert.strictEqual(objeto1.details.productId.endsWith('123'), true);
    assert.strictEqual(objeto2.details.productId.endsWith('123'), true);
  });
});

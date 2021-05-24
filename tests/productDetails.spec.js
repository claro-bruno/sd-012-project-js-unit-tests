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
    const result = productDetails('Alcool gel', 'Máscara');
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof (result), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(result.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof (result[0]) === 'object' && typeof (result[1]) === 'object', true);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(result[0], result[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(result[0].details.productId.slice(-3) == 123 && result[1].details.productId.slice(-3) == 123, true );
  });
});

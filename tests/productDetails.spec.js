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
    const teste = productDetails('Maçã', 'Ovo');
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(teste), true)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(teste.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const isObject = (typeof teste[0] === 'object') && (typeof teste[1] === 'object');
    assert.strictEqual(isObject, true)
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(teste[0], teste[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    // Fonte: https://stackoverflow.com/questions/2601087/javascript-regex-to-match-a-string-that-ends-with-some-characters-but-not-with-a
    const re = /123$/;
    const endsWith123 = (re.test(teste[0].details.productId) && re.test(teste[1].details.productId));
    assert.strictEqual(endsWith123, true);
  });
});

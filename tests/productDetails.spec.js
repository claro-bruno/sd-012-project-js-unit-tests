const assert = require('assert');
const { type } = require('os');
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
    assert.strictEqual(Array.isArray(productDetails('GTA', 'Resident Evil')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('GTA', 'Resident Evil').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(productDetails('Tomb Raider', 'Bloons TD 6').map((j) => typeof j), ['object', 'object']);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('Hellblade', 'Total War')[0], productDetails('Hellblade', 'Total War')[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(productDetails('Lara Croft', 'Resident Evil - Code: Veronica').map((j) => parseFloat(j.details.productId.substr(j.details.productId.length - 3, j.details.productId.length))), [123, 123]);
  });
});

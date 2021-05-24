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
    assert.deepStrictEqual(productDetails('Mascara', 'Alcool gel').length, 2); //se acessamos .lenght entao é array.
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('Mascara', 'Alcool gel').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails('Mascara', 'Alcool gel')[0] && typeof productDetails('Mascara', 'Alcool gel')[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.deepStrictEqual(productDetails('Mascara', 'Alcool gel')[0] !== productDetails('Mascara', 'Alcool gel')[1], true);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.ok(productDetails('Mascara', 'Alcool gel')[0].details.productId.match(/123$/) && productDetails('Mascara', 'Alcool gel')[1].details.productId.match(/123$/), ['123']);
  });
});

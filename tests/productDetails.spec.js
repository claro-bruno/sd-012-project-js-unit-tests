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
    
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof productDetails('Alcool gel', 'Máscara'), 'object', 'A função deve retornar um objeto');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2, 'A função deve conter dois parâmetros');
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('Alcool gel', 'Máscara')[0], 'object', 'Primeiro parâmetro deve retornar um objeto');
    assert.strictEqual(typeof productDetails('Alcool gel', 'Máscara')[1], 'object', 'Segundo parâmetro deve retornar um objeto');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(productDetails('Alcool gel'), productDetails('Máscara'), 'Objetos diferentes')
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(productDetails('Alcool gel', 'Máscara)')[0].details.productId.endsWith('123'), true, 'Deve conter 123 ao final do valor contido na key productId');
    assert.strictEqual(productDetails('Alcool gel', 'Máscara')[1].details.productId.endsWith('123'), true, 'Deve conter 123 ao final do valor contido na key productId');
  });
});

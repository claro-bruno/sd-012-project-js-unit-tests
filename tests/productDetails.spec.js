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
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual( typeof productDetails('Alcool gel','Máscara'), 'object', 'Esta função não retorna um array');
    assert.deepStrictEqual( productDetails('Alcool gel','Máscara').length, 2, 'Esta função não retorna um array com 2 itens dentro dele');
    assert.deepStrictEqual( typeof productDetails('Alcool gel','Máscara')[0], 'object', 'Esta função não retorna um array que tem um objeto na chave 0');
    assert.deepStrictEqual( typeof productDetails('Alcool gel','Máscara')[1], 'object', 'Esta função não retorna um array que tem um objeto na chave 1');
    assert.notDeepStrictEqual( productDetails('Alcool gel','Máscara')[0], productDetails('Alcool gel','Máscara')[1], 'Esta função retorna um array que tem um objeto na chave 0 que é igual ao objeto da chave 1');
  });
});

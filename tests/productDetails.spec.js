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
   
    // ESCREVA SEUS TESTES ABAIXO:
      let produtos = Array.isArray(productDetails('um','dois'))
      let produtos2 = typeof(productDetails('um','dois'))
      let contem = productDetails('um','dois').length
      let contem1 = productDetails('um','dois')
      let contem2 = contem1[0]
      let contem3 = contem1[1]
      let complicado = productDetails('um','dois')[0].details.productId.endsWith('123')
      let complicado1 = productDetails('um','dois')[1].details.productId.endsWith('123')
      assert.strictEqual(produtos, true)
      assert.strictEqual(contem, 2)
      assert.deepStrictEqual(produtos2, 'object')
      assert.notDeepStrictEqual(contem2, contem3)
      assert.deepStrictEqual(complicado, complicado1)

    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});

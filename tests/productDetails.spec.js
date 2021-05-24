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
    // PARA QUEM CONSULTAR, fica a dica, um array é um objeto...gastei muito tempo tentando algo que comparasse o retorno com um "array".
    assert.strictEqual(typeof(productDetails()),'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof(productDetails([0, 1])), 'object')
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(productDetails([0]), productDetails([1]));
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual((productDetails('Alcool gel', 'Máscara')[0, 1].details.productId.slice(-3)), '123');
    /* REFERENCIA - depois de muito quebrar a cabeça, encontrei a propriedade SLICE, no repósitorio do meu amigo Ryan, cujo código é sempre impecável e me ajuda demais a entender o jeito de pensar para chegar ao resultado. (https://github.com/tryber/sd-012-project-js-unit-tests/pull/72)*/
  });
});

const { strictEqual } = require('assert');
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

const verifyFinal = (funcao, position) => {
  const id = funcao[position].details.productId;
  id.split('');
  let finalLetters = new String;
  for (const letters of id) {
    if (id.indexOf(letters) >= id.length - 4) {
      finalLetters += letters;
    }
  }
  if (finalLetters === '123') {
    return true;
  }
  return false;
};

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    const chamadaDaFuncao = productDetails('Alcool', 'Máscara');
    assert.strictEqual(Array.isArray(chamadaDaFuncao), true);
    // Teste que o retorno da função é um array.
    assert.strictEqual(chamadaDaFuncao.length, 2);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(typeof (chamadaDaFuncao[0]), 'object');
    assert.deepStrictEqual(typeof (chamadaDaFuncao[1]), 'object');
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.notDeepStrictEqual((chamadaDaFuncao[0]), (chamadaDaFuncao[1]));
    // Teste que os dois objetos são diferentes entre si.
    assert,strictEqual(verifyFinal(chamadaDaFuncao, 0), true);
    assert,strictEqual(verifyFinal(chamadaDaFuncao, 1), true);
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});

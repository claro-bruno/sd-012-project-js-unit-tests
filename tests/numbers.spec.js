/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert'); // define 'assert' para utilizar no test
const numbers = require('../src/numbers'); // importa a funcao para os testes

/*
  A função numbers recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers`retorna um array e se o array retornado contém somente números', () => {
//O metodo 'assert.stricEqual' exige que o valor de resposta seja exatamente igual ao fornecido para o test. 
    assert.strictEqual(numbers([1, 2, 3, 4, 5]), true); // O parametro passado para a funcao 'numbers' (array com numeros), deve gerara um retorno booleano 'true'
    assert.strictEqual(numbers([1, 2, '3', 4, 5]), false); // O parametro passado para a funcao 'numbers' (contendo um index sendo uma 'string' de numero), deve gerara um retorno booleano 'false'
    assert.strictEqual(numbers([1, 'a', 3]), false); // O parametro passado para a funcao 'numbers' (contendo um index sendo uma 'string' letra, nao numero), deve gerara um retorno booleano 'false'
    assert.strictEqual(numbers([' ']), false); // O parametro passado para a funcao 'numbers' (contendo um index sendo uma 'string' vazia), deve gerara um retorno booleano 'false'
  });
});

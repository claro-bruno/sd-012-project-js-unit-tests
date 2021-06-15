/* eslint-disable max-len */

const assert = require('assert');
const average = require('../src/average.js');
// const { test } = require('@jest/globals');
/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/
describe('testar a funão ', () => {
  test('1 - implementa a função `average`', () => {
    expect(average([3, 4, 5])).toBe(4);
    expect(average([1, 2, 3, '4', 5])).toBeUndefined();
    expect(average([0, 0, 0, 0, 0, 0, 0])).toBe(0);
    expect(average([1, 2, '3'])).toBeUndefined();
    expect(average([1, 2, 3])).toBe(2);
    expect(average([0, 0, 0, 0, 0, 0, 1])).toBe(0);
  });
  test('teste de saida 2 ', () => {
    expect(average([])).toBeUndefined();
    expect(average([' '])).toBeUndefined();
    expect(average(['um', 'dois', 'tres'])).toBeUndefined();
    expect(average([47, 63, 122])).toBe(77);
    expect(average([-11, 2, 5])).toBe(-1);
    expect(average([-11, -5, 2])).toBe(-5);
  })
})

/*  describe('1 - Implemente a função `average`', () => {
  it('Verifica se o comportamento da função "average" está correto', () => {
    assert.strictEqual(average([3, 4, 5]), 4);
    assert.strictEqual(average([1, 2, 3, '4', 5]), undefined);
    assert.strictEqual(average([0, 0, 0, 0, 0, 0, 0]), 0);
    assert.strictEqual(average([1, 2, '3']), undefined);
    assert.strictEqual(average([1, 2, 3]), 2);
    assert.strictEqual(average([0, 0, 0, 0, 0, 0, 1]), 0);

    assert.strictEqual(average([]), undefined);
    assert.strictEqual(average([' ']), undefined);
    assert.strictEqual(average(['um', 'dois', 'tres']), undefined);
    assert.strictEqual(average([47, 63, 122]), 77);

    assert.strictEqual(average([-11, 2, 5]), -1);

    assert.strictEqual(average([-11, -5, 2]), -5);
  });
});

*/
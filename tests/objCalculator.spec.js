const assert = require('assert');
const calculator = require('../src/objCalculator');

describe('7 - Implemente a função `objCalculator`', () => {
  it('Verifica se a função `objCalculator` retorna os valores esperados', () => {
    assert.strictEqual(calculator.add(1, 3), 4);
    assert.strictEqual(calculator.mult(10, 3), 30);
    assert.strictEqual(calculator.div(5, 2), 2);
    assert.strictEqual(calculator.sub(1, 3), -2);
  });
});

const assert = require('assert');
const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    assert.strictEqual(typeof circle, 'function');
    assert.strictEqual(typeof circle(1), 'object');
    assert.strictEqual(Object.keys(circle(1)).length, 3);
    assert.strictEqual(circle(), undefined);

    const calculator = (radius, areaOrCirc) => parseFloat((circle(radius)[areaOrCirc]).toPrecision(4));
    assert.strictEqual(calculator(2, 'circumference'), 12.56);
    assert.strictEqual(calculator(3, 'area'), 28.26);
    const threeObj = circle(3);
    threeObj.circumference = calculator(3, 'circumference');
    threeObj.area = calculator(3, 'area');

    assert.deepStrictEqual(threeObj, {
      radius: 3,
      area: 28.26,
      circumference: 18.84
    });
  });
});

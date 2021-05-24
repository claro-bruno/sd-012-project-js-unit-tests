const assert = require('assert');
const createStudent = require('../src/createStudent');

const goodPerson = 'Eita pessoa boa!';

describe('5 - Implemente a função `createStudent`', () => {
  it('Verifica se a função `createStudent` retorna o objeto esperado', () => {
    const estudante = createStudent('Leandrão, o Lobo Solitário');
    assert.strictEqual(typeof estudante, 'object');
    assert.strictEqual(typeof estudante.feedback, 'function');
    assert.strictEqual(estudante.name, 'Leandrão, o Lobo Solitário');
    assert.strictEqual(estudante.feedback(), goodPerson);

    const estudante2 = createStudent('Nobre');
    assert.strictEqual(typeof estudante2, 'object');
    assert.strictEqual(typeof estudante2.feedback, 'function');
    assert.strictEqual(estudante2.name, 'Nobre');
    assert.strictEqual(estudante2.feedback(), goodPerson);

    const estudante3 = createStudent('Inácio');
    assert.strictEqual(typeof estudante3, 'object');
    assert.strictEqual(typeof estudante3.feedback, 'function');
    assert.strictEqual(estudante3.name, 'Inácio');
    assert.strictEqual(estudante3.feedback(), goodPerson);
  });
});

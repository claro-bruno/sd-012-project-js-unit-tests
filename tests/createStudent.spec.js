/* eslint-disable max-len */

const assert = require('assert');
const createStudent = require('../src/createStudent');

/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome, retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/
const goodPerson = 'Eita pessoa boa!';

/*describe('5 - Implemente a função `createStudent`', () => {
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
*/

describe('5 - Implemente a função `createStudent`', () => {
  it('Verifica se a função `createStudent` retorna o objeto esperado', () => {
    const estudante = createStudent('Leandrão, o Lobo Solitário');
    expect(typeof estudante).toBe('object');
    expect(typeof estudante.feedback).toBe('function');
    expect(estudante.name).toMatch('Leandrão, o Lobo Solitário');
    expect(estudante.feedback()).toBe(goodPerson)
  });
  test('test faze 2',() => {
    const estudante2 = createStudent('Nobre');
    expect(typeof estudante2).toBe('object');
    expect(typeof estudante2.feedback).toBe('function');
    expect(estudante2.name).toMatch('Nobre');
    expect(estudante2.feedback()).toBe(goodPerson)
  });
  test('test faze 3', () => {
    const estudante3 = createStudent('Inácio');
    expect(typeof estudante3).toBe('object');
    expect(typeof estudante3.feedback).toBe('function');
    expect(estudante3.name).toMatch('Inácio');
    expect(estudante3.feedback()).toBe(goodPerson)
  });
});

/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/
const createStudent = (nome) => {
   let student = {
      name: nome,
      feedback: () => 'Eita pessoa boa!'
   };
   return student;
};
const assert = require('assert');
const goodPerson = 'Eita pessoa boa!';
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

module.exports = createStudent;
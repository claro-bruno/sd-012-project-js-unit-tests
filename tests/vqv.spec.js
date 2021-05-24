const assert = require('assert');
const vqv = require('../src/vqv.js');

describe('3 - Implemente a função `vqv`', () => {
  it('Verifica se a função `vqv` retorna a frase esperada com nome e idade', () => {
    assert.strictEqual(typeof vqv, 'function');
    assert.strictEqual(typeof vqv('Tunico', 30), 'string');
    assert.strictEqual(
      vqv('Tunico', 29),
      'Oi, meu nome é Tunico!\n' +
        'Tenho 29 anos,\n' +
        'trabalho na Trybe e mando muito em programação!\n' +
        '#VQV!',
    );
    assert.strictEqual(
      vqv('Alberto', 30),
      'Oi, meu nome é Alberto!\n' +
        'Tenho 30 anos,\n' +
        'trabalho na Trybe e mando muito em programação!\n' +
        '#VQV!',
    );
    assert.strictEqual(
      vqv('Hamaji', 29),
      'Oi, meu nome é Hamaji!\n' +
        'Tenho 29 anos,\n' +
        'trabalho na Trybe e mando muito em programação!\n' +
        '#VQV!',
    );
    assert.strictEqual(vqv(), undefined);
  });
});

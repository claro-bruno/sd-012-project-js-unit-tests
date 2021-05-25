/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (nome, idade) => {
  const name = `Oi, meu nome é ${nome}!\n`;
  const age = `Tenho ${idade} anos,\n`;
  const work = 'trabalho na Trybe e mando muito em programação!\n';
  const vq = '#VQV!';
  const header = `${name}${age}${work}${vq}`;
  return typeof nome === 'string' && typeof idade === 'number' ? header : undefined;
};

module.exports = vqv;

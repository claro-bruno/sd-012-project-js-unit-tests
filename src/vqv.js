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
  if (!nome || !idade) { // checando se a variável é true/false, source https://www.ti-enxame.com/pt/javascript/o-que-um-ponto-de-exclamacao-antes-de-uma-variavel-significa-em-javascript/1041635275/. No caso se alguma delas n estiver como parâmetro, eu retorno undefined.
    return undefined;
  }
return (`Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`);
};

module.exports = vqv;

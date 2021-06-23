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

const vqv = (nome, idade) => { // Cria a arrow function 'vqv' com parametros 'nome' e 'idade'
  if (nome === undefined || idade === undefined) {
    return undefined; // Se o parametro 'nome' ou 'idade' forem de tipo 'undefined', retorna 'undefined'
  }
  return `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`; // Se nao, retona a frase construida. Ps: '${}' serve para voce adicionar valores de variaveis ou parametros dentro de uma string de forma mais dinamica com a utilizacao de crases ao inves de aspas.
};
module.exports = vqv; // Exporta o component

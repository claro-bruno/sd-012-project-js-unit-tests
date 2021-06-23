/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert'); // define 'assert' para utilizar no test
const circle = require('../src/circle'); // importa a funcao para os testes

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    //O metodo 'assert.stricEqual' exige que o valor de resposta seja exatamente igual ao fornecido para o test. 
    assert.strictEqual(typeof (circle(1)), 'object'); // Verifica se o 'typeof' (tipo) do 'return' da funcao 'circle', colocando o parametro da funcao como 1, seja um Objeto. Resultado tem que ter o tipo como Objeto.
    assert.strictEqual(Object.keys(circle(1)).length, 3); // Verifica se o numero de 'chaves' dentro do 'objeto', do 'return' da funcao, e igual a '3' ('radius', 'area' e 'circumference')
    assert.strictEqual(circle(), undefined); // Verifica se ao colocar um parametro sem valor. o 'return' da funcao e 'undefined'
    assert.strictEqual(circle(2).circumference, 12.56); // Verifica se ao colocar o valor do parametro da funcao como '2', a 'chave' 'circumference' dentro do 'Objeto' do 'return' e igual a '12.56'
    assert.strictEqual(circle(3).area, 28.259999999999998); // Verifica se ao colocar o valor do parametro da funcao como '3', a 'chave' 'area' dentro do 'Objeto' do 'return' e igual a '28.259999999999998'
    //O metodo 'assert.deepstricEqual' exige que o valor de resposta para as chaves do objeto, sejam exatamente igual ao fornecido para o test. 
    assert.deepStrictEqual(circle(3), {radius: 3, area: 28.259999999999998, circumference: 18.84}); // Verifica se ao colocar o valor do parametro da funcao como '3', a 'chave' 'radius' dentro do 'Objeto' do 'return' e igual a '3'; A 'chave' 'area' dentro do 'Objeto' do 'return' e igual a '28.259999999999998'; A 'chave' 'circumference' dentro do 'Objeto' do 'return' e igual a '18.84';
    });
});

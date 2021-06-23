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

const createStudent = (name) => ({ // Cria arrow function 'createStudent' com parametro 'nome'
  name, // Cria um chave para o objeto da funcao que retorna o parametro 'nome'
  feedback: () => 'Eita pessoa boa!', // Cria uma chave sendo uma arrow function 'feedback' que retorna uma 'string'
});

module.exports = createStudent; // exporta o Component

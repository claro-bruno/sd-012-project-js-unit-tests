const vqv = (nome, idade) => {
  if (nome === '' || typeof (idade) !== 'number') {
    return undefined;
  }
  return (`Oi, meu nome é ${nome}!
  Tenho ${idade} anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!`);
};
console.log(vqv('felipe', 23));
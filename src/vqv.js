const vqv = (nome, idade) => {
  if (nome === undefined || idade === undefined) {
    return undefined;
  }
    return `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
};
console.log(vqv('Tunico', 29));

module.exports = vqv;

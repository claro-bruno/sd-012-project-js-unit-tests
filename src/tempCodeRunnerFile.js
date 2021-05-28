const createStudent = (nome) => {
  const estudante = {
    name: nome,
    feedback: () => 'Eita pessoa boa!',
  };
  
  return estudante;
};
console.log(createStudent('felipe'));
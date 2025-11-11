const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
];

const liberados = participantes.filter( (item) => {
    if (item.idade > 18) {
        console.log(`Acesso liberado para: ${item.nome}`)
    }
    return item.idade > 18;
});

const nomesLiberados = liberados.map(item => item.nome);

console.log(nomesLiberados);
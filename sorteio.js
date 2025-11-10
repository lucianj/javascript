const participantes = [
  { nome: "Laura", pontuacao: 92 },
  { nome: "Pedro", pontuacao: 67 },
  { nome: "Clara", pontuacao: 44 }
];

function sorteiaNome(listaParticipantes){
    return Math.floor(Math.random() * listaParticipantes.length);
}

function exibeSorteado(indexSorteado, listaParticipantes){
    let sorteado = listaParticipantes[indexSorteado];
    setTimeout(() => {
     console.log(`Participante sorteado: ${sorteado['nome']}`);
     console.log(`Pontuação: ${sorteado['pontuacao']}`);
     avaliaPontuacaoSorteado(indexSorteado, listaParticipantes);
   }, 2000);
}

function avaliaPontuacaoSorteado(indexSorteado, listaParticipantes){
    if (listaParticipantes[indexSorteado]['pontuacao'] > 80){
        console.log("Parabéns, você foi premiado!");
    }else if(listaParticipantes[indexSorteado]['pontuacao'] >= 50){
        console.log("Você quase conseguiu! Fique de olho nos próximos sorteios.");
    }else{
        console.log("Infelizmente, não foi dessa vez.");
    }
}

function realizarSorteio(listaParticipantes){
    //Uma função para sortear um nome aleatoriamente.
    let indexNome = sorteiaNome(listaParticipantes);
    //Uma função para exibir o nome sorteado com 2 segundos de atraso
    exibeSorteado(indexNome, listaParticipantes);
    
}

realizarSorteio(participantes);
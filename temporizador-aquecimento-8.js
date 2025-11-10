const tempoMinimo = 5;
const temperaturaIdealAlcancadaEm = 3;
let countTempo = 0;

do{
    countTempo++;
    console.log(`Aquecendo... segundo ${countTempo}`);

    if (countTempo === temperaturaIdealAlcancadaEm) {
        console.log('Temperatura ideal atingida.');
    }

}while(countTempo < tempoMinimo);

console.log(`Tempo total de aquecimento: ${countTempo} segundos`);

/**
  while (countTempo <= tempoMinimo) {
    console.log(`Aquecendo... segundo ${countTempo}`);

    if (countTempo === temperaturaIdealAlcancadaEm) {
        console.log('Temperatura ideal atingida.');
    }

    if (countTempo === tempoMinimo) {
        console.log(`Tempo total de aquecimento: ${countTempo} segundos`);
    }

    countTempo++;
}*/

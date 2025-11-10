const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);

function calcularConsumo(potencia, horasPorDia){
    return (potencia * horasPorDia * 30) / 1000
}

function classificarConsumo(consumo){
    if (consumo < 50){
        return "Baixo consumo";
    }else if(consumo < 199){
        return "Consumo moderado";
    }else{
        return "Alto consumo";
    }
}

function exibirResumo(nomeAparelho, consumo, classificacao){
    console.log(`${nomeAparelho} tem consumo de ${consumo} kWh/mês e é classificada como ${classificacao}.`);
}

exibirResumo(nomeAparelho, consumo, classificacao);
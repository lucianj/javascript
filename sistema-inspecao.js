const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30
};

let categoriasAvaliadas = Object.keys(relatorio)
let valoresRegistrados = Object.values(relatorio)

console.log(categoriasAvaliadas)
console.log(valoresRegistrados)

//function inspecionarDados(dados){
//    for (let key in dados){
        //console.log(dados[key]);
//        categoriasAvaliadas.push(key);
//        valoresRegistrados.push(dados[key])
//    }

//    console.log(categoriasAvaliadas)
//    console.log(valoresRegistrados)
//    console.log(" ")
//}

let entradas = Object.entries(relatorio);

function alerta(number){
    return number > 50 ? '(alerta)' : '(ok)'
}

function mostrarDetalhamento(){
    console.log("              ");
    console.log("Detalhamento: ");
    console.log("              ");
    for (let [chave, valor] of entradas){
        console.log(`${chave}: ${valor} ${alerta(valor)}` );
    }
}

mostrarDetalhamento()

//inspecionarDados(relatorio);
//mostrarDetalhamento(categoriasAvaliadas, valoresRegistrados);

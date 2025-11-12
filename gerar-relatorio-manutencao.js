const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7
};

let diasTotais = 0;
let mesesManutencao = 0;

for (let key in manutencao){
   if(manutencao[key] > 0){
        diasTotais += manutencao[key];
        mesesManutencao++
   }
 
}

console.log(`Total de dias parados: ${diasTotais}`);
console.log(`Total de dias parados: ${mesesManutencao}`);

if(diasTotais > 20){
    console.log("Status: Fora do limite normal.");
}else{
    console.log("Status: Dentro do limite anual.");
}
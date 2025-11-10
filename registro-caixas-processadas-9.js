const caixas = [12, -1, 8, 0, -5, 3, 7, 14];
const caixasValidas = 5;

let countCaixasValidas = 0;

let tamArray = caixas.length;

for(let i=0; i<tamArray; i++){
    let valorCaixa = caixas[i];
    
    if (valorCaixa < 0){
        console.log("Caixa danificada, ignorada.");
        continue;
    }else{
        console.log(`Caixa processada: ${valorCaixa}`);
        countCaixasValidas++;            
    }
    
    if(countCaixasValidas === caixasValidas){
        console.log("Limite de caixas processadas atingido!");
        break;
    }
}
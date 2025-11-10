const totalDias = 10;
let somaEconomia = 0;

for (let i=1; i<=totalDias; i++){
    somaEconomia += i;
    console.log("Dia", i + ":","R$" + somaEconomia);
}
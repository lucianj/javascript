const totalDias = 10;
let economia = 0;
let dia = 1;

do {
  economia += dia;
  dia++;
} while (dia <= totalDias);
 
console.log(`Total economizado: R$ ${economia}`);

//for (let i=1; i<=totalDias; i++){
//    somaEconomia += i;
//    console.log("Dia", i + ":","R$" + somaEconomia);
//}
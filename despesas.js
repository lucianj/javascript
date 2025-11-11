const despesas = [120, 80, 45.5, 200, 60];
let total = 0.0;

for (element of despesas){
    total += element;
}

console.log("Total despesas: R$", total);
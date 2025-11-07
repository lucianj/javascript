const num1 = 2;
const num2 = 4;
const operacao = 'divisão';

if (operacao === 'soma'){
    console.log(num1 + num2);
}else if (operacao === 'multiplicação'){
    console.log(num1 * num2);
}else{
    console.log("operação não identificada");
}

const salario = 12000
if (salario >= 11000){
    console.log('3% de bonus');
}else if(salario >= 7000 && salario < 11000){
    console.log('5% de bonus');
}else if(salario >= 4000 && salario < 7000){
    console.log('7% de bonus');
}else {
    console.log('9% de bonus');
}

const ano = 2005;

if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)){
    console.log(`${ano} é bissexto`);
}else{
    console.log(`${ano} não é bissexto`);
}

const nome = "Roberta"
const notas = 8;
const faltas = 3;

const recebeBonus = (notas >= 8) && (faltas <= 2) 
    ? `${nome} recebe bônus` 
    : `${nome} não recebe bônus`;

console.log(recebeBonus);

const user = 'premium';
switch(user){
    case 'free':
        console.log("acesso limitado");
        break;
    case 'premium':
        console.log('acesso total ao app');
        break;
    case 'super premium':
        console.log('Tipo de user desconhecido');
        break;
}
let frase = 'Luz Azul';
let fraseInvertida = '';

frase = frase.replaceAll(' ', '');

for (let i = frase.length -1; i >= 0; i--){
    fraseInvertida += frase[i];
}

if (frase.toLocaleLowerCase() == fraseInvertida.toLocaleLowerCase()){
    console.log("É palíndromo!");
}else{
    console.log("Não é palíndromo!");
}
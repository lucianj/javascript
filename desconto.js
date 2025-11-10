

console.log(calcularDesconto(100, 80));

function calcularDesconto(precoOriginal, desconto){
    let fracaoDesconto = desconto/100;
    let valorDesconto = precoOriginal * fracaoDesconto;
    let valorFinal = precoOriginal - valorDesconto;
    return valorFinal;
}


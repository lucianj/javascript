function avaliarDesempenho(nota, callback){
    let status = "";

    if (nota >= 70){
        status = "aprovado";
    }else if (nota >= 50){
        status = "reforço";
    }else{
        status = "Foi reprovado!";
    }
    
    callback(nota, status);
}

function gerarMensagem(nota, status){
    console.log(`Pontuação: ${nota}`);
    
    if(status === "aprovado"){
        console.log("Parabéns! Você foi aprovado!");
    }else if(status === "reforço"){
        console.log("Atenção! Você precisa de reforço.");
    }else{
        console.log("Infelizmente, você foi reprovado. Tente novamente.");
    }
}

console.log(avaliarDesempenho(82, gerarMensagem));
console.log(avaliarDesempenho(60, gerarMensagem));
console.log(avaliarDesempenho(20, gerarMensagem));
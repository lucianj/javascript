function responderUsuario(nome, callback){
    console.log("Processando sua pergunta...");
    //setTimeout(callback, 3000, nome);
    setTimeout(()=>{
        callback(nome);
    }, 3000);
}

function mostrarResposta(nome){
    console.log(`Olá, ${nome} Aqui está a resposta para sua dúvida.`);
}

console.log(responderUsuario("Camila", mostrarResposta));
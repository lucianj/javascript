
console.log(processarPedido("Lucas", "vip", mensagemPersonalizada));
console.log(processarPedido("Fernanda", "novo", mensagemPersonalizada));
console.log(processarPedido("João", "comum", mensagemPersonalizada));

function processarPedido(nome, tipo, mensagem){
    console.log(`Processando o pedido de ${nome} ...`);
    return mensagem(nome, tipo);
}

function mensagemPersonalizada(nome, tipoCliente){
    let msgPersonalizada = "";
    if (tipoCliente === "vip"){
        msgPersonalizada = `Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`;
    }else if (tipoCliente === "novo"){
        msgPersonalizada = `Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`;
    }else{
        msgPersonalizada =  `Obrigado pela sua compra, ${nome}!`;
    }
    return msgPersonalizada;
}
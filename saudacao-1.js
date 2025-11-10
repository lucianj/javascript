
saudacao("Lucas")
saudacao()

function saudacao(nome = ""){
    if (nome){
        console.log(`Olá! ${nome}! Bem-vindo(a)!`);
    }else{
        console.log(`Olá! Bem-vindo(a)!`);
    }
}


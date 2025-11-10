const tentativas = ["1234", "admin", "admin", "secreto"];
const senhaCorreta = "secreto";

const tentativasValidas = 3;

let i = 0;
let acessoOk = false;

while ( i<=tentativas.length && i < tentativasValidas){

    if (tentativas[i] === senhaCorreta){
         console.log('Acesso permitido!');
         acessoOk = true;
         break;
    } else {
        console.log(`Tentativa ${(i+1)} inválida.`);
    }

    i++;
}

if (!acessoOk){
     console.log('Acesso bloqueado. Número máximo de tentativas atingido.');
}

//for (let i=0; i<=tentativas.length; i++){
//    if ((tentativas[i] === senhaCorreta) && (i+1) <= tentativasValidas){
//        console.log('Acesso permitido!');
//        break;
//    }else if ((tentativas[i] !== senhaCorreta) && (i+1) <= tentativasValidas){
//        console.log(`Tentativa ${(i+1)} inválida.`);
//    }else{
//        console.log('Acesso bloqueado. Número máximo de tentativas atingido.');
//        break;
//    }
//}
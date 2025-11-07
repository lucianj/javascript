const usuario = "admin";
//const usuario = "guest";

let mensagem = (usuario === "admin") ? "Login bem-sucedido" : "Usuário inválido";

console.log(mensagem);
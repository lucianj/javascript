const statusAnalise = "reprovado"

switch(statusAnalise){
    case "pendente":
        console.log("Pagamento pendente")
        break;
    case "aprovado":
        console.log("Pagamento aprovado")
        break;
    case "reprovado":
        console.log("Pagamento reprovado")
        break;
    default:
        console.log("Status inválido")
        break;
}
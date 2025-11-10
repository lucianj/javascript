const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];
let i = 0;

//for (let i=0; i<entradas.length; i++){
//    if (entradas[i] == "fim"){
//        break;
//    }

//    console.log("Nome: " + entradas[i]);
//}

while(entradas[i] !== "fim"){
    console.log("Nome: ", entradas[i]);
    i++
}
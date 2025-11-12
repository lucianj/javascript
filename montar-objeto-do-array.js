
function montarObjeto(array){
    const objeto = {};

    for (let [item, valor] of array){
        objeto[item] = valor;
    }

    return objeto;
}

listaDeArrays = [
  ['nome', 'João'],
  ['idade', 30],
  ['cidade', 'Curitiba']
]

console.log(montarObjeto(listaDeArrays));
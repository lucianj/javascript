const precos = [100, 80, 50, 120];

const descontos = precos.map((num) => {
    let desconto = num * 0.10;
    return num - desconto;
})

console.log(descontos);
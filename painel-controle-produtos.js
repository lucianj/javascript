const produtos = [
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 },
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 }
];

// Mostrar todos os produtos (nome, preço, quantidade).
console.log("Relatório de produtos vendidos: ");
console.log(" ");
produtos.forEach( p => {
    console.log(`Nome: ${p.nome} |  preço: ${p.preco} | quantidade vendida: ${p.quantidadeVendida}`);
} );
console.log(" ");
// Filtrar os que venderam mais de 100 unidades e exibir seus nomes.
console.log("Produtos com alto volume de vendas: ");
produtos.filter( (produto) => produto.quantidadeVendida > 100 ? console.log(produto.nome) : false );

console.log(" ");
// Calcular os totais de venda de cada produto e Descobrir o mais lucrativo.
console.log("Total de vendas por produto: ");

let maisLucrativo = {'nome': '', 'totalVendas': 0};

produtos.forEach( p => {
    let totalVendas = p.preco*p.quantidadeVendida;
    console.log(`${p.nome} R$ ${totalVendas}`);
    
    if (totalVendas > maisLucrativo.totalVendas) {
        maisLucrativo.nome = p.nome;
        maisLucrativo.totalVendas = totalVendas;
    }
} );
// 
console.log(`Produto mais lucrativo: ${maisLucrativo.nome} com ${maisLucrativo.totalVendas} `);
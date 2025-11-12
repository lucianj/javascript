const dispositivos = [ 
    {nome: "Impressora", status: "ativo"},
    {nome: "Scanner", status: "inativo"},
    {nome: "Projetor", status: "ativo"}
];

for (let dispositivo of dispositivos){
    console.log(`Dispositivo: ${dispositivo.nome} | Status: ${dispositivo.status}`);
}
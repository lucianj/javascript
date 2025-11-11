const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const livroProcurado = 'O Cortiço'; 

let result = livros.includes(livroProcurado) 
                 ? `O livro "${livroProcurado}" está disponível.` 
                 : `O livro "${livroProcurado}" não foi encontrado.`;

console.log(result);
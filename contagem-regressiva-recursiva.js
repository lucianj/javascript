
function contagem(num){
    if (num === 0){
        return 'Lançamento!';
    } 
    else if (num >= 1) {
        console.log(num);
        return contagem(num-1);
    } 
}

console.log(contagem(5));
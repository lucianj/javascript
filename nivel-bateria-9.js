const bateria = 85;

const resultado = (bateria < 20) 
                ? 'Crítica' 
                  : (bateria <= 80) 
                    ? 'Moderada' 
                    : 'Cheia';

console.log(resultado);
const readline = require('readline-sync');

var expoente = (readline.question('Digite um número inteiro para o expoente: '));
var base = (readline.question('Digite um número inteiro para a base: '));
const calculo = base ** expoente

if (expoente < 0) {
    console.log('Número Inválido');
}else if (expoente = 0) {
    console.log('O resultado da Potencia é 1');
} else {
    console.log(`O resultado é ${calculo}`);
}








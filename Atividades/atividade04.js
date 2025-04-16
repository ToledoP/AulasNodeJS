const readline = require('readline-sync');

var numero = (readline.question('Digite um número positivo: '));

const euler = (1 + 1 / numero) ** numero

if (euler >= 2.71) {
    console.log(`O resultado é ${euler.toFixed(2)}`);
} else {
    console.log('O resultado é menor que 2.71!!!');
}
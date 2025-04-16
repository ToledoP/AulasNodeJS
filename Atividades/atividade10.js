
const readline = require('readline-sync');


function verificarPrimo(numero) {
    if (numero <= 1) return false;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }

    return true;
}

var numero = (readline.question('Digite um número inteiro maior que 1: ',));

const resultado = verificarPrimo(numero) ? "é primo." : "não é primo.";
console.log(`${numero} ${resultado}`);




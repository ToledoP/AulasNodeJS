const readline = require('readline-sync');

var num = (readline.question('Digite um número inteiro positivo: '));
let fat = 1;


if (num == 0 || num == 1) {
    console.log('O fatorial é igual a 1');
} else if (num < 0) {
    console.log('Número Inválido')
} else {
    for (i = 2; i <= num; i++ ) {
        fat = fat * i;
        console.log(`O fatorial é igual a ${fat}`);
    }
}



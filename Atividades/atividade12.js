const readline = require('readline-sync');

var numero = (readline.question('Digite um número inteiro maior que 1: ',));
var primo = true
if (numero <= 1) {
    console.log('Número Inválido');
} else {
    for (i = 2; i < numero; i++) {
        if (numero % i === 0) {
            console.log('Não Primo, pois é divisível por:', i);
            primo = false;
        }
    }
    if (primo) {
        console.log('Esse é um número primo');
    }
}
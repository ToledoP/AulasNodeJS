const readline = require('readline-sync');

var num = (readline.question('Digite um número de casas da sequencia de Fibonacci: '));
var num2 = 1
contador = 1

for (i = 0; contador <= num; contador++) {
    var novoValor = i + num2;
    console.log(`O valor de Fibonnaci é: ${novoValor}`);
    console.log(`O valor de phi é: ${novoValor/num2}\n`);
    num2 = novoValor
    i = novoValor - i
}
const readline = require('readline-sync');

var num = (readline.question('Digite um número de casas da sequencia de Fibonacci: '));
var num2 = 1
contador = 1

for (i = -1; contador <= num; contador++) {
    var novoValor = i + num2;
    console.log(novoValor);
    num2 = novoValor
    i = novoValor - i
}

const readline = require('readline-sync');

var numero = (readline.question('Digite um número positivo: '));
var rep = (readline.question('Digite o numero de repetições: '));

for(var i = 1; i <= rep; i++) {
    const euler = (1 + 1 / numero) ** numero
    console.log(euler);
    numero++
}
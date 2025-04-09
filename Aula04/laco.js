
 for(let i = -1; i <= 11; i += 3 ) {
     console.log(i)
 }

const readline = require('readline-sync');

let num;

while (true) {
     num = Number(readline.question('Nº >= 0: '));
     if (num >= 0) {
        break
     } 
}

console.log(num ** 2);
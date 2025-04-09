// const readline = require('readline-sync');

// let num = Number(readline.question('Digite um numero: '));

// console.log(num**2);

 const readline = require('readline-sync');

 let idade = Number (readline.question('Qual a sua idade?: '));
 
 if (!(idade <= 120 && idade >= 1)) {
     console.log('Idade Inválida'); 
 } else {
    if (idade >= 18) {
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }
 }






//  if (idade >= 18 & idade <= 120) {
//      console.log('Você é um adulto');
//      } else {
//         if (idade >= 1 & idade <= 17) {
//          console.log('Você é menor de idade');
//      } else {
//          console.log('Idade Inválida');
//      }}
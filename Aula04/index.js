const readline = require('readline-sync');

const peso = Number(readline.question('Digite seu peso: '));
const altura = Number(readline.question('Digite sua altura: '));

const imc = (!isNaN(peso) && !isNaN(altura)) ? peso / altura ** 2 : 'Peso ou Altura inválido';

console.log(`${(isNaN(imc)) ? imc: imc.toFixed(2) }`);

const estado = (imc < 17) 
? 'Muito abaixo do Peso' 
: (imc >= 17 && imc < 18.5) 
? 'Abaixo do Peso' 
: (imc >= 18.5 && imc < 25) 
? 'Peso Normal' 
: (imc >= 25 && imc < 30) 
? 'Acima do Peso' 
: (imc >= 30 && imc < 35) 
? 'Obesidade I' 
: (imc >= 35 && imc < 40) 
? 'Obesidade II' 
: (imc >= 40 ) 
? 'Obesidade Mórbida' 
: 'Estado Inválido';

if (estado != 'Estado Inválido')
    console.log('Estado: ', estado);

// console.log(typeof peso);
// console.log(peso ** 2);
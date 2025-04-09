const readline = require('readline-sync')

const altura = Number(readline.question('Qual a sua altura?: '));
let peso = Number(readline.question('Qual o seu peso?: '));
let imc = (peso / altura ** 2)
console.log(`\nO IMC é: ${imc.toFixed(1)}`);

if (imc < 17) {
    console.log('Muito Abaixo do Peso')
} else if (imc >= 17 && imc <= 18.49) {
    console.log('Abaixo do Peso')
} else if (imc >= 18.50 && imc <= 24.99) {
    console.log('Peso Normal')
} else if (imc >= 25 && imc <= 29.99) {
    console.log('Acima do Peso')
} else if (imc >= 30 && imc <= 34.99) {
    console.log('Obesidade I')
} else if (imc >= 35 && imc <= 39.99) {
    console.log('Obesidade II')
} else if (imc >= 40) {
    console.log('Obesidade III')
}







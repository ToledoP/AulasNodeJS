
/* 1. Elabore um programa em JavaScript que calcule e exiba a média entre duas notas. */
let nota1 = 6.3;
let nota2 = 6.8;
let media = (nota1 + nota2) / 2
console.log(`\nA Média é: ${media}`);

/* 2. Elabore um programa em JavaScript que calcule e exiba o IMC. */
let peso = 76;
let altura = 1.80;
let imc = peso / altura ** 2
console.log(`\nO IMC é: ${imc.toFixed(1)}`);

/* 3. Elabore um programa em JavaScript que calcule e exiba a temperatura em graus farenheit. Entrada => Celsius | Saída => Farenheit */
let celsius = 0;
let farenheit = celsius * 1.8 + 32
console.log(`\nA temperatura em celsius é de ${celsius}°C. Em farenheit é de ${farenheit}°F`);

/* 4. Elabore um programa em JavaScript que exiba na tela o preço final de uma compra com percentual de desconto sendo informado na entrada, bem como o preço do produto */
let desconto = 30/100;
let preco = 400;
let descontoFinal = preco * desconto
let precoFinal = preco - descontoFinal
console.log(`\nO preço do produto é de R$${preco},00. Após o desconto de ${desconto * 100}%, o preço final do produto é de R$${precoFinal},00`);

























// {
//     var nome = 'tux';
//     var idade = 20;
//     console.log(`Nome: ${nome}`);
//     console.log(`Idade: ${idade}`);
// }

// console.log(`Idade: ${idade}`);
// console.log(`Nome: ${nome}`);

// console.log(`Hello, World!` );


// * Variáveis javascript

// Algumas linguagens são fortemente tipadas, ex: int num = 10
// Javascript possue tipagem dinâmica.
// Interpretador infere o tipo da variável.

// const -> local [imutável] ----- Constante
// let -> local [mutável] ----- Permite

// var -> global [mutável] ----- Váriavel

// let altura = 1.78 ;
// console.log(`Sua altura é: ${altura}`);
// console.log(typeof altura)

// altura = 1.80
// console.log(`Sua altura é: ${altura}`);


// let idade = 10;
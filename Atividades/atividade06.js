const frase = "Exemplo de laço for...";
const caracter = '█';
const texto = frase.length;

function Moldura() {
    for ( let i = 0; i < texto +4; i++) {
        process.stdout.write(caracter);
    }
}

console.log();
Moldura();
console.log();
console.log(caracter, frase, caracter);
Moldura();
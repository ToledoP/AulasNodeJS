function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}

function listPrimes(n) {
    let primes = [];
    let num = 2; 

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num); 
        }
        num++; 
    }
    
    return primes;
}

const readline = require('readline-sync');


const n = parseInt(readline.question("Informe um número: "), 10);


if (isNaN(n) || n <= 0) {
    console.log("Por favor, insira um número inteiro positivo.");
} else {
    const primes = listPrimes(n); 
    console.log(primes.join(", ")); 
}

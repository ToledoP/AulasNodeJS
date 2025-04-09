const readline = require('readline-sync');

function verificacao() {

    let numero = Number(readline.question('Digite um número inteiro: '));

    if (numero % 2 == 0) {
        console.log('Esse número é par!!\n===============================');
    } else {
        console.log('Esse número é impar!!\n============================');
    }

    const opcao = (readline.question('Deseja continuar?:'));

    if (opcao == "s") {
        verificacao()
    } else if (opcao == "n") {
        console.log('Adeus!!');
    } else {
        console.log('Resposta Inválida');
    }

}
verificacao()


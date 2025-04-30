const readline = require('readline-sync');

function verificacao() {

    let contato = [];

    var nome = (readline.question('Digite um nome: '));
    contato.push(nome);

    var telefone = (readline.question('Digite um telefone: '));
    contato.push(telefone);

    var cidade = (readline.question('Digite um cidade: '));
    contato.push(cidade);

    contatos.push(contato);

    const opcao = (readline.question('Deseja Continuar?(s/N):'));

    if (opcao == "s") {
        verificacao();
    } else if (opcao == "N" || opcao == "n") {
        contatos.forEach(element => {
            console.log(` Nome: ${element[0]}\n Telefone: ${element[1]}\n Cidade: ${element[2]}\n`);
        });
    } else {
        console.log('Resposta Inválida');
    }
}

const contatos = [];

verificacao();






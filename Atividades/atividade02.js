const readline = require('readline-sync');

var login = 'Lucas'
var senha = '1234'
var chance = 0


function Simulacao() {
    
    if (chance == 3) {
        console.log('Número limites de chances indisponíveis!!');
    } else {
        var user = (readline.question('Digite o seu login: '));
        var pass = (readline.question('=====================\nDigite a sua senha: '));
        
        if (user == login && pass == senha) {
            console.log(`Seja muito bem-vindo ${user}`);
        } else {
            console.log('=====================\nSenha ou login incorretos\n=====================');
            chance++
            Simulacao()
        }
    }
}
Simulacao()




/*
* 01. Calculo de média
*
* a. Solicitar Nome do ALuno, Nota p1, Nota p2. Trabalho 1
* b.Exibir as seguintes mensagens
* i. O aluno {nome do Aluno} obteve médioa {media calculada} - {multiplicar nota 1 por 2 multiplicar nota 2 por 2 e dividir por 4, por fim somar nota trabalho com as médias das provas e dividir por 2 }
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome do aluno: ', (nome) => {
    rl.question('Digite a nota 1: ', (nota1) => {
        rl.question('Digite a nota 2: ', (nota2) => {
            rl.question('Digite a nota do trabalho: ', (trabalho) => {
                nota1 = parseFloat(nota1);
                nota2 = parseFloat(nota2);
                trabalho = parseFloat(trabalho);
                const media = (((nota1 * 2 + nota2 * 2) / 4) + trabalho) / 2;

                console.log("O aluno " + nome + " obteve média " + media);
                rl.close();
            });
        });
    });
});

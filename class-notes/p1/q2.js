/*
* 02. Escreva uma função em JavaScript que conte quantas vezes um caracteres aparece em uma string.
* Tanto o caractere quanto a string devem ser fornecidos pelo usuário
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma frase: ', (frase) => {
    rl.question('Digite um caractere: ', (caractere) => {
        let contador = countCharacter(frase, caractere);

        console.log(`O caractere "${caractere}" aparece ${contador} vezes na frase "${frase}"`);
        rl.close();
    });
});

function countCharacter(str, char) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            contador++;
        }
    }
    return contador;
}

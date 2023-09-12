/*
4. Dadas duas sequências de n e m valores inteiros, onde n  m, escreva um programa que
verifica quantas vezes a primeira sequência ocorre na segunda.
Exemplo:
primeira sequência: 1 0 1
segunda sequência: 1 1 0 1 0 1 0 0 1 1 0 1 0
Resultado: 3
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countOccurrences(sequence1, sequence2) {
    let count = 0;

    for (let i = 0; i < sequence2.length - sequence1.length + 1; i++) {
        let match = true;

        for (let j = 0; j < sequence1.length; j++) {
            if (sequence1[j] !== sequence2[i + j]) {
                match = false;
                break;
            }
        }

        if (match) {
            count++;
        }
    }

    return count;
}

rl.question('Digite a primeira sequência: ', (sequence1) => {
    rl.question('Digite a segunda sequência: ', (sequence2) => {
        console.log(`A primeira sequência ocorre ${countOccurrences(sequence1, sequence2)} vezes na segunda sequência`);
        rl.close();
    });
});


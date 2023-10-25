/*
* 03. Calcular a soma dos números pares maiores que 10 e menores que 307
*/
let soma = 0;
for (let i = 11; i < 307; i++) {
    if (i % 2 === 0) {
        soma += i;
    }
}

console.log(`A soma dos números pares maiores que 10 e menores que 307 é ${soma}`);
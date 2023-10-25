/*
* 05. Dado o array chamado bairro, com o contúdo JAMBEIRO, faça co mque ele fique com ORIEBMAJ
*/

const bairro = ['J', 'A', 'M', 'B', 'E', 'I', 'R', 'O'];
let bairroInvertido = [];

for (let i = bairro.length - 1; i >= 0; i--) {
    bairroInvertido.push(bairro[i]);
}

console.log(bairroInvertido.join(''));
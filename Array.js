let nomes = ["Alice", "Bob", "Carol"];
let numeros = [1, 2, 3, 4, 5];
let misturado = [1, "dois", true];

let primeiroNome = nomes[0]; // "Alice"
let segundoNumero = numeros[1]; // 2
let terceiroMisturado = misturado[2]; // true

console.log(primeiroNome)
console.log(segundoNumero)
console.log(terceiroMisturado)

let tamanho = nomes.length; // 3
console.log(tamanho)

nomes.push("David"); // Adiciona "David" ao final
let ultimoNome = nomes.pop(); // Remove o último elemento ("David") e o armazena em 'ultimoNome'
console.log(ultimoNome)

for (let nome of nomes) {
    console.log(nome);
}

let matriz = [[1, 2, 3], [4, 5, 6]];
for (let linha of matriz) {
    for (let elemento of linha) {
        console.log(elemento);
    }
}
let objetos = [{ nome: "Alice" }, { nome: "Bob" }];
for (let objeto of objetos) {
    console.log(objeto.nome);
}

let valor = matriz[0][1];
console.log(valor)


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function imprimirMatriz(matriz) {
    const largura = Math.max(...matriz.flat().map(num => num.toString().length));

    for (let i = 0; i < matriz.length; i++) {
        const linha = matriz[i].map(num => num.toString().padStart(largura)).join(" ");
        console.log(`[${linha}]`);
    }
}

imprimirMatriz(matrix);

let numbers = [1,3,5,8,23];
console.log(numbers.length);

let nome = "Matheus"
let tam = nome.length
console.log(tam)
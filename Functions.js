const saudacao = function (nome) {
    if (nome === "Vinícius") {
        console.log("Olá, Vinícius!");
    }
}

saudacao("Vinícius");

function soma(a, b) {
    return a + b;
}

let somar = soma(1, 2);
console.log(somar);

const multiplicacao = function (a, b) {
    return a * b;
};

let multiplicar = multiplicacao(2, 3);
console.log(multiplicar);

const subtracao = (a, b) => a - b;
let subtrair = subtracao(5, 3);
console.log(subtrair);

setTimeout(function () {
    console.log('Isso é uma função anônima executada após um tempo.');
}, 1000);


function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const pessoa1 = new Pessoa('Alice', 30);
console.log(pessoa1.idade);
console.log(pessoa1.nome);

let y = 5;

const multiply = function (numero) {
    let y = numero * 2;
    console.log(y);
    if (y === 10) {
        let y = 55;
        console.log(y);
    }
}
multiply(y)
console.log(y);

function nomeComIdade(nome, idade) {
    if(idade === undefined) {
        console.log("Olá, " + nome + "!");
    }else{
        console.log("Olá, " + nome + "! Você tem " + idade + " anos.");
    }
}

nomeComIdade("Vinícius");
nomeComIdade("Vinícius", 20);


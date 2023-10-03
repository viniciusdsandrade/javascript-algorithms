const pessoa1 = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
}
console.log(pessoa1.nome);

function Pessoa2(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
}

const pessoa2 = new Pessoa2("João", 30, "São Paulo");
console.log(pessoa2.idade);

class Pessoa3 {
    constructor(nome, idade, cidade) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }
}

const pessoa3 = new Pessoa3("João", 30, "São Paulo");
console.log(pessoa3.cidade);

console.log("====================================");
console.log(typeof(pessoa1));
console.log(typeof(pessoa2));
console.log(typeof(pessoa3));

let objetoA = {
    prop1: "prop1",
    prop2: "prop2",
}

let objetoB = {
    prop3: "Valor B-03",
}

console.log(Object.assign(objetoA, objetoB));
console.log(Object.keys(objetoA));
console.log(Object.values(objetoA));
console.log(Object.entries(objetoA));

console.log("====================================");

let arrayExemplo = ["F" , "C", "A", "I"];
let arrayControle = ["F", "A", "T", "E", "C"];

for (let i = 0; i < arrayControle.length ; i++) {
    if(arrayExemplo[i] !== arrayControle[i]){
        arrayExemplo[i] = arrayControle[i];
    }
}

console.log(arrayExemplo);
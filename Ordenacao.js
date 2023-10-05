let frutas = ['morango', 'abacaxi', 'uva', 'banana', 'melancia'];
frutas.sort();

let coisas = ['word', 'Word', '2 Words', '1 Words'];
coisas.sort();

console.log(frutas);
console.log(coisas);

let numeros = [3, 2, 1, 10,30,20];
console.log(numeros);

numeros.sort();
console.log(numeros);

let numeros3 = [3, 2, 1, 10,30,20];
numeros3.sort(function(a,b){
    return a-b;
});
console.log(numeros3);

function bubbleSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let swapped = false;
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arr;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Exemplo de uso:
const numeros6 = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(numeros6);
console.log(numeros6); // Saída: [11, 12, 22, 25, 34, 64, 90]



numerosOrdenados = bubbleSort(numeros6);
console.log(numerosOrdenados);

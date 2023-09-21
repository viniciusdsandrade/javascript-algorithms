/**
 * 1 - Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C).Dica: para converter uma temperatura em F para C, subtraia 32 da temperatura e multiplique o resultado por 0,5556 (ou 5/9).
 * 2 - Escreva uma função que mos-tre na tela um número fornecido pelo usuário, porém invertido. Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578.
 * 3 - Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário. Por exemplo, o usuário informa a string “Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra). Obs. Ignore vogais acentuadas, para simplificar Utilizar a função charAt(x) para testar cada caracter da palavra Texto = “palavra” Texto.charAt(2) = l
 * 4 - Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em uma string. Tanto o caractere quanto a string devem ser fornecidos pelo usuário.
 * 5 - Escreva uma função que verifica se um número fornecido pelo usuário em um prompt é primo ou não.
 * 6 - Calcular a soma dos números impares maiores que 10  menores que 30
 */

/**
 * Converte uma temperatura em Fahrenheit para Celsius.
 *
 * @param {number} fahrenheit - A temperatura em graus Fahrenheit.
 * @returns {number} A temperatura equivalente em graus Celsius.
 */
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

/**
 * Inverte um número inteiro.
 *
 * @param {number} number - O número a ser invertido.
 * @returns {number} O número invertido.
 */
function reverseNumber(number) {
    return parseInt(
        number
            .toString()
            .split('')
            .reverse()
            .join(''));
}

/**
 * Conta o número de vogais em uma string, ignorando maiúsculas e minúsculas.
 *
 * @param {string} text - A string na qual as vogais serão contadas.
 * @returns {number} O número de vogais na string.
 */
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

function countVowels(text) {
    text = text.toLowerCase(); // Converte para minúsculas
    let count = 0;
    for (const char of text) {
        if (vowels.has(char)) {
            count++;
        }
    }
    return count;
}

/**
 * Conta o número de ocorrências de um caractere em uma string.
 *
 * @param {string} text - A string na qual as ocorrências serão contadas.
 * @param {string} char - O caractere a ser contado.
 * @returns {number} O número de ocorrências do caractere na string.
 */
function countChar(text, char) {
    return text.split(char).length - 1;
}

/**
 * Verifica se um número é primo.
 *
 * @param {number} number - O número a ser verificado.
 * @returns {boolean} `true` se o número for primo, caso contrário `false`.
 */
function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let divisor = 5; divisor * divisor <= number; divisor += 6) {
        if (number % divisor === 0 || number % (divisor + 2) === 0) {
            return false;
        }
    }
    return true;
}

/**
 * Calcula a soma de todos os números ímpares no intervalo entre 'start' e 'end'.
 *
 * @param {number} start - O número inicial do intervalo.
 * @param {number} end - O número final do intervalo.
 * @returns {number} A soma dos números ímpares no intervalo.
 */
function sumOddNumbers(start, end) {
    if (start % 2 === 0) {
        start++; // Garantir que começamos com um número ímpar
    }

    let sum = 0;
    for (let i = start; i <= end; i += 2) {
        sum += i;
    }

    return sum;
}

/**
 * Inverte o texto especificado e substitui 'a' e 'A' por '4' e 'e' e 'E' por '3'.
 *
 * @param {string} text - O texto a ser invertido e processado.
 * @returns {string} O texto invertido com as substituições.
 */
function reverseText(text) {
    return text.replace(/[aeAE]/g, char => (char.toLowerCase() === 'a') ? '4' : '3')
        .split('')
        .reverse()
        .join('');
}


// Teste da função para inverter uma string
const reverse = reverseText("Matheus");
console.log(reverse);

// Teste da função de conversão de Fahrenheit para Celsius
const fahrenheitTemp = 68; // 20°C em Fahrenheit
console.log(`20°C em Fahrenheit é ${fahrenheitTemp}°F.`);
console.log(`Convertido para Celsius: ${fahrenheitToCelsius(fahrenheitTemp)}°C`);

// Teste da função para inverter um número
const numberToReverse = 875;
console.log(`Número original: ${numberToReverse}`);
console.log(`Número invertido: ${reverseNumber(numberToReverse)}`);

// Teste da função para contar vogais em uma string
const sampleText = "Beterraba";
console.log(`A palavra "${sampleText}" tem ${countVowels(sampleText)} vogais.`);

// Teste da função para contar a ocorrência de um caractere em uma string
const sampleString = "Hello, world!";
const charToCount = "l";
console.log(`A letra "${charToCount}" aparece ${countChar(sampleString, charToCount)} vezes na frase.`);

// Teste da função para verificar se um número é primo
const primeNumber = 17;
console.log(`O número ${primeNumber} é primo? ${isPrime(primeNumber) ? "Sim" : "Não"}`);

// Teste da função para calcular a soma de números ímpares entre 10 e 30
console.log(`A soma dos números ímpares entre 10 e 30 é: ${sumOddNumbers(11, 29)}`);
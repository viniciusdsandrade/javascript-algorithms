/*
* 04. Escolher um cálculo
*  a. Solicitar um valor1 e valor2
*  b. Solicitar um número com a seguinte mensagem: 1=soma 2=subtração 3=multiplicação 4=divisão
*       i. Se for 1 exibir na tela "A soma de "{valor1} + {valor2} é : {valor1+valor2}"
*      ii. Se for 2 exibir na tela "A subtração de "{valor1} - {valor2} é : {valor1-valor2}"
*    iii. Se for 3 exibir na tela "A multiplicação de "{valor1} * {valor2} é : {valor1*valor2}"
*    iv. Se for 4 exibir na tela "A divisão de "{valor1} / {valor2} é : {valor1/valor2}"
*    v. Se for qualquer outro número exibir "Cálculo incorreto"
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o valor 1: ', (valor1) => {

    rl.question('Digite o valor 2: ', (valor2) => {

        console.log('1 = Soma');
        console.log('2 = Subtração');
        console.log('3 = Multiplicação');
        console.log('4 = Divisão');

        rl.question('Digite a operação: ', (operacao) => {
            // Processamento
            valor1 = parseFloat(valor1);
            valor2 = parseFloat(valor2);
            operacao = parseInt(operacao);
            let resultado = 0;

            switch (operacao) {
                case 1:
                    resultado = valor1 + valor2;
                    console.log(`A soma de ${valor1} + ${valor2} é : ${resultado}`);
                    break;
                case 2:
                    resultado = valor1 - valor2;
                    console.log(`A subtração de ${valor1} - ${valor2} é : ${resultado}`);
                    break;
                case 3:
                    resultado = valor1 * valor2;
                    console.log(`A multiplicação de ${valor1} * ${valor2} é : ${resultado}`);
                    break;
                case 4:
                    resultado = valor1 / valor2;
                    console.log(`A divisão de ${valor1} / ${valor2} é : ${resultado}`);
                    break;
                default:
                    console.log('Calculo incorreto');
            }
            rl.close();
        });
    });
});
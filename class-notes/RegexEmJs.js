const reg1 = new RegExp('bola');
console.log(reg1.test('Tem bola!'));
console.log(reg1.test('Não tem'));
let texto = 'Tem bola na cesta';
console.log(reg1.test(texto));

console.log(/TESTE/.test("TTTTTESTEEEEEEEE"));
console.log(/TESTE/.test('TTTTTTTESTTEE'));

const ano = /\d\d\d\d/;

console.log(ano.test("2018"));
console.log(ano.test("18"));
console.log(ano.test("0516"));

const diaMesAno = /\d\d\/\d\d\/\d\d\d\d/;
console.log(diaMesAno.test("05/16/2018"));
console.log(diaMesAno.test("05/16/18"));

let data;
data = /\d{1,2}\/\d{1,2}\/\d{4}/;
console.log(data.test("05/16/2018"));
console.log(data.test("05/16/18"));

const palavras = /\w\w\w/;
console.log(palavras.test("teste"));
console.log(palavras.test("s3nh@fort$$"));
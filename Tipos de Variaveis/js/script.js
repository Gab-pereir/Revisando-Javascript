let carro = 'gol'; //string
let anoCarro = 2011; //Number
let carroVendido = true; //Boolean
let qtdRodas; //Undefined
let carroAutomatico; //Null
let Simbolo = Symbol(); //Symbol
let ObjetoCarro = {}; //Object

//String 
let texto = "Olá, mundo!";
let textoComAspasSimples = 'JavaScript é divertido!';
console.log(texto); // "Olá, mundo!"
console.log(textoComAspasSimples); // "JavaScript é divertido!"
console.log(typeof texto); // "string"
console.log(typeof textoComAspasSimples); // "string"

//Number
let inteiro = 42;
let pontoFlutuante = 3.14;
console.log(inteiro); // 42
console.log(pontoFlutuante); // 3.14
console.log(typeof inteiro); // "number"
console.log(typeof pontoFlutuante); // "number"

//Boolean 
let verdadeiro = true;
let falso = false;
console.log(verdadeiro); // true
console.log(falso); // false
console.log(typeof verdadeiro); // "boolean"
console.log(typeof falso); // "boolean"

//Undefined
let indefinido;
console.log(indefinido); // undefined
console.log(typeof indefinido); // "undefined"

//Null
let nulo = null;
console.log(nulo); // null
console.log(typeof nulo); // "object" (isso é um bug em JavaScript)

//Symboll
let simbolo1 = Symbol('descricao');
let simbolo2 = Symbol('descricao');
console.log(simbolo1); // Symbol(descricao)
console.log(simbolo2); // Symbol(descricao)
console.log(simbolo1 === simbolo2); // false
console.log(typeof simbolo1); // "symbol"

//Object
let pessoa = {
    nome: "Alice",
    idade: 30
};
console.log(pessoa); // { nome: "Alice", idade: 30 }
console.log(typeof pessoa); // "object"






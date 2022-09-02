"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// let & const
var seraQuePode = '?'; // var é usado para declarar variavél global e let variaveis locais.
console.log(seraQuePode);
let isfrio = true;
if (isfrio) {
    let acao = 'colocar casaco';
    console.log(acao);
}
// atraves do var consigo declarar uma variavel global, com let é local.
const cpf = '123.456.000-99';
// cpf = '789.101.132-78' -- const constante
console.log(cpf);
var segredo = 'externo';
function revelar() {
    const segredo = 'interno'; // obs: variaveis dentro de funcções só serão visualizadas com a propia função for chamada!!
    console.log(segredo);
}
revelar(); // tipo assim !
console.log(segredo);
// ex:
{
    const jamal = 'def';
    console.log(jamal);
}
for (let i = 0; i <= 10; i++) { // quando um let declarado dentro de um bloco de codigo(metodos ou funções) ele sera visivel apenas no mesmo
    console.log(i);
}
// console.log(i) ex.
//arrow function
const somar3 = function (n1, n2) {
    return n1 + n2;
};
console.log(somar3(2, 4));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(4, 2)); // funcao reduzida arrow function
let funcaoCalcular = (n1, n2) => {
    return n1 * n2;
};
let semParametro = () => console.log('olá');
const falarComPessoa = (pessoa) => console.log(`falar com ${pessoa}`);
falarComPessoa('Jessica');
//this
function nomeComThis() {
    console.log(this);
}
let nomeComThisEspecial = nomeComThis.bind({ nome: "Matheus", idade: 22 });
nomeComThisEspecial();
const arrowFunction = () => console.log(this);
arrowFunction();
// Parâmetros padrão
function contagemReegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio >= fim) {
        inicio--;
        console.log(inicio);
    }
    console.log('fim!');
}
contagemReegressiva();
contagemReegressiva(5);
// Spread && Rest
const numbers = [1, 20, 34, 29, 456];
console.log(Math.max(...numbers)); //...spred usado para leitura de dados
const turmaA = ['Matheus', 'Larissa', 'Bia', 'Leticia'];
const turmaB = ['Erika', 'Fernanda', ...turmaA, 'Daniela', 'Jessica'];
console.log(...turmaB);
function retornarArray(a, ...args) {
    console.log(a);
    return [...args];
}
const mostrarArray = retornarArray;
console.log(mostrarArray(1, 3, 4, 7000, 945, 750));
console.log(retornarArray(5, 542, 725, 9045, ...numbers));
//Rest & Spreed (tupla)
const tupla = [1, 'abc', true];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
const tupla2 = ['Matheus', 16, '07786052135'];
function tuplaParam2(...params) {
    console.log(`2) ${params[0]}, ${params[1]}, ${params[2]}`);
}
tuplaParam2(...tupla2);
// Destructuring (array)
const caracter = ['Motor 1.8', 2020];
//const motor = caracter[0]
//const ano = caracter[1]
const [motor, ano] = caracter;
console.log(motor);
console.log(ano);
// Destructuring (objeto)
const item = {
    nome: 'SSD 480gb',
    preco: 425,
    caracteristicas: {
        w: 'Importado'
    }
};
const nomeItem = item.nome;
const precoItem = item.preco;
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n, `R$ ${p}`, w);
console.log(nomeItem);
console.log(precoItem);
//Template String =  interpolação com crazy
const usuarioID = ' SuporteCod3r ';
const notificacoes = ' 9 ';
//const boasVindas = 'Boas Vindas ' + usuarioID + ' Notificações: ' + notificacoes
const boasVindas = ` Boas vindas ${usuarioID}` + `Notificações ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}`;
console.log(boasVindas);
console.log(`${(1 + 1) * 30}`);
console.log(`${caracter}`);
//exercicíos
const dobro = function (val) {
    return val * 2;
};
console.log(10);
const dizerOla = function (nome) {
    if (nome === null) {
        nome = 'Pessoa';
        console.log(`Ola, ${nome} !`);
    }
    else {
        console.log(`Ola, ${nome} !`);
    }
};
dizerOla(null);
dizerOla("Ana");
let nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
let nums2 = [-3, 33, 38, 5];
let array = [55, 20, ...nums2];
console.log(array);
let notas = [8.5, 6.3, 9.4];
const [...todasNotas] = notas;
console.log(todasNotas);
let cientista = { primeiroNome: 'Will', experiencia: 12 };
const dadoss = __rest(cientista, []);
console.log(dadoss);
//# sourceMappingURL=ecmascript.js.map
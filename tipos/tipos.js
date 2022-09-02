"use strict";
//string
let nome1 = 'Matheus';
console.log(nome1);
//numbers
let idade = 27;
idade = 27.5;
console.log(idade);
//boolean
let possuiHobies = false;
//possuiHobies = 1
console.log(possuiHobies);
//tipos explicítos
let minhaIdade; // any é para tipos dinamicos. 
minhaIdade = 27;
console.log(typeof minhaIdade); // inferência de tipos typeof
minhaIdade = 27.5;
console.log(typeof minhaIdade);
//arrays - any é para tipos dinamicos ou seja, recebe strings numbers boolean etc...
let esporte = ["futebol", "basquete", "volei"];
esporte = ["natação"];
console.log(esporte);
esporte = [100, 2200, 400];
console.log(esporte);
esporte = ["ginastica"];
console.log(typeof esporte);
//tuplas
let endereco = ["Matheus", 99, "boloco b"]; // verifica qtd, tipos e ordem
console.log(endereco);
endereco = ["rua Importante", 1260, "Bloco A"];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 13] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Azul;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
//any
let monitor = 'Cinza';
console.log(monitor);
monitor = { polegadas: 24.5, marca: 'Samsung' };
console.log(monitor);
//funções 
function retornaMeuNome() {
    // return minhaIdade
    return nome1;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('oi');
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(4.8, 3.4));
function somar(numA, numB) {
    return numA + numB;
}
function dividir(numA, numB) {
    return numA / numB;
}
//tipo função
const teste = function (number1, number2) {
    return number1 / number2;
};
let calculo;
calculo = multiplicar;
console.log(calculo(5, 2));
let calculo2;
calculo = somar;
console.log(calculo(5, 4));
let calculo3;
calculo3 = dividir;
console.log(calculo3(4, 2));
const endereco2 = ["engenheiro orlando de oliveira", 165, "bloco a"];
console.log(endereco2);
// objetos -- ordem de parametros não importa igual nas funções
let usuario = {
    nome: 'Matheus',
    idade: 27
};
console.log(usuario);
let usuario2 = {
    nome: 'João',
    idade: 27
};
console.log(usuario2);
// desafio
let funcionario = {
    nomes: ['Matheus', 'José', 'Fernando'],
    baterPonto(horas) {
        if (horas <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do Horario';
        }
    }
};
console.log(funcionario.nomes);
console.log(funcionario.baterPonto(8));
let funcionario2 = {
    nomes: ['Bia', 'Gui', 'Ana', 'Fer'],
    baterPonto(horas) {
        if (horas <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do horario';
        }
    }
};
console.log(funcionario.nomes);
console.log(funcionario.baterPonto(8));
// Union types -- mais de um tipo dentro da variavél
let nota1;
nota1 = 9.5;
console.log(`a nota do aluno é ${nota1}`);
nota1 = '9.5';
console.log(`a nota do aluno é ${nota1}`);
let nota;
nota = 10;
console.log(`minha nota é ${nota}!`); // para interpolação é necessário usar `crazy`
nota = '10';
console.log(`minha nota é ${nota}!`);
// Checando tipos
let valor = 10;
if (typeof valor == "number") {
    console.log("é um number");
}
else {
    console.log(valor);
}
// never -- nunca irá chegar no final -- usada para error.
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "sabão",
    preco: 8,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('precisa ter um nome!');
        }
        if (this.preco <= 0) {
            falha('preço invalido');
        }
    }
};
produto.validarProduto();
let altura = 12;
//altura = null
let alto = 12;
alto = null;
const contato1 = {
    nome: 'fulano',
    tel1: '991344-3588',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let podeSerNulo = null; // por padrão valor null vale any 
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        return this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map
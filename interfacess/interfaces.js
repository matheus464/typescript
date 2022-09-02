"use strict";
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome);
    },
};
function saudarPessoa(pessoa) {
    console.log('Olá, ' + pessoa.nome + ' com idade ' + pessoa.idade);
}
function alterarNome(pessoa) {
    pessoa.nome = 'Jessica';
}
saudarPessoa(pessoa);
alterarNome(pessoa);
saudarPessoa(pessoa);
console.log(pessoa.saudar('Silva'));
pessoa.saudar('Monteiro');
// Usando Classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome + ' e minha ultima compra foi ' + this.ultimaCompra);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Fernanda';
meuCliente.saudar('Ribeiro');
let potencia;
potencia = function (base, expo) {
    return Array(expo).fill(base).reduce((ac, n) => ac * n);
};
console.log(potencia(4, 2));
class RealA {
    a() { }
}
class RealB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class RealABD {
    a() { } // no ts é obrigatório implementar os metódos quando for implementar uma interface na classe abstrata
    b() { }
}
Object.prototype.log = function () {
    console.log(toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
const cli = {
    nome: 'Pedro',
    idade: 27
};
//# sourceMappingURL=interfaces.js.map
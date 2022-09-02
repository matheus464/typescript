"use strict";
// exercício 01 - Classes
class Moto {
    constructor(nome, velocidade = 0) {
        this.velocidade = 0;
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        const velocidadeAtuall = this.velocidade = +delta;
        console.log(velocidadeAtuall);
    }
}
let moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
//exercício 02 - Herança
class Objeto2D {
    constructor() {
        this.base = 0;
        this.altura = 0;
    }
}
class Retangulo extends Objeto2D {
    constructor() {
        super(...arguments);
        this.base = 5;
        this.altura = 7;
    }
    area() {
        return this.altura * this.base;
    }
}
const retangulo = new Retangulo;
console.log(retangulo.area());
//exercicío 03 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(nome) {
        if (nome.length >= 3) {
            this._primeiroNome = nome;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const primeiroNome = new Estagiario();
primeiroNome.primeiroNome = 'Le';
console.log(primeiroNome);
primeiroNome.primeiroNome = 'Leonardo';
console.log(primeiroNome);
//# sourceMappingURL=desafio.js.map
"use strict";
// exercício 01 - Classes
class Moto {
    constructor(nome, velocidade) {
        this.velocidade = 0;
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        const velocidadeAtuall = this.velocidade + delta;
        console.log(velocidadeAtuall);
    }
}
let moto = new Moto('Ducati', 0);
moto.buzinar();
//# sourceMappingURL=desfio.js.map
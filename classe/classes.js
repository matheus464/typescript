"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(0, 0, 2002);
aniversario.dia = 10;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data; // posso omitir os "()"
casamento.ano = 2017; // alterando um atributo da classe Data
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(0, 0, 2002);
aniversarioEsperto.dia = 10;
console.log(aniversario.dia);
console.log(aniversario);
const casamentoEsperto = new Data; // posso omitir os "()"
casamentoEsperto.ano = 2017; // alterando um atributo da classe Data
console.log(casamentoEsperto);
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = this.velocidadeAtual >= 0 && this.velocidadeAtual <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    freiar() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'ka', 185);
console.log(carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.freiar());
class Ferrari extends Carro {
    constructor(modelo, velocidadeMax) {
        super('Ferrari', modelo, velocidadeMax);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    freiar() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('f40', 250);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.freiar());
// Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 30;
console.log(pessoa1);
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);
// Atributos e metódos estáticos
class Matematica {
    static areaCirc(raio) {
        return (raio * raio) * Matematica.PI;
    }
}
Matematica.PI = 3.1416;
//const m1 = new Matematica()
//m1.PI = 4.2
Matematica.PI = 4.2;
console.log(Matematica.areaCirc(4));
//const m2 = new Matematica()
//m2.PI = 3.1416
Matematica.PI = 3.1416;
console.log(Matematica.areaCirc(4));
// classe Abstrata -  n pode ser instanciada, usada apenas para herdar
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...valores) {
        this.resultado = valores.reduce((ac, n) => ac + n);
    }
}
class Multiplicar extends Calculo {
    executar(...valores) {
        this.resultado = valores.reduce((ac, n) => ac * n);
    }
}
let c1 = new Soma(); // polimorfismo =  tipo mais generico associado
c1.executar(2, 4, 10);
console.log(c1.getResultado());
c1 = new Multiplicar();
c1.executar(4, 2);
console.log(c1.getResultado());
//construtor private & singleton
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
//const errado = new Unico()
console.log(Unico.getInstance().agora());
// Somente Leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
        this.prefixo = prefixo;
    }
}
const turboHelice = new Aviao('KKK', 'IRINEU');
//turboHelice.modelo = '1234' 
//turboHelice.prefixo = '15646'
//# sourceMappingURL=classes.js.map
"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27));
console.log(echo({ nome: 'João', idade: 72, bo: true }));
//usando generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27)); // ex param number e retorno number
console.log(echoMelhorado({ nome: 'João', idade: 72, bo: true }));
// Generics disponiveis na API ts
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5')
console.log(avaliacoes);
//Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    { nome: 'Josue', idade: 31 },
    { nome: 'Herick', idade: 14 },
    { nome: 'Vinicius', idade: 41 },
    { nome: 'Jessica silas', idade: 42 }
]);
console.log('-------------');
imprimir([
    { id: 1, nome: 'Jessica Avila', idade: 22, matriculado: true },
    { id: 2, nome: 'Joana', idade: 27, matriculado: true },
    { id: 3, nome: 'Jaqueline', idade: 32, matriculado: false },
    { id: 4, nome: 'Carla Fabiana', idade: 25, matriculado: false }
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
console.log();
// class com Generics
class OperacaoBinaria {
    constructor(operador1, operador2) {
        this.operador1 = operador1;
        this.operador2 = operador2;
    }
}
//console.log(new OpercaoBinaria('Bom ', 'Dia').executar())
//console.log(new OpercaoBinaria(3, 7).executar())
//console.log(new OpercaoBinaria({}, {}).executar())
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operador1 + this.operador2;
    }
}
console.log(new SomaBinaria(3, 7).executar());
console.log(new SomaBinaria(300, 164).executar());
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operador1);
        const t2 = this.getTime(this.operador2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data(5, 1, 2020);
const d2 = new Data(10, 1, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar());
// Desafio Classe fila
// Atributo: fila (Array)
// Metódos: entrar, proximo, imprimir
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        const primeiro = this.fila[0];
        this.fila.splice(0, 1);
        return primeiro;
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('Matheus', 'Jessica', 'Fernanda', 'Larissa');
fila.entrar('Manoela');
fila.proximo();
fila.imprimir();
class Mapa {
    constructor() {
        this.lista = new Array();
    }
    obter(obj) {
        const resultado = this.lista.filter(elemento => elemento.chave == obj);
        return resultado ? resultado[0] : null;
    }
    colocar(par) {
        const encontrado = this.obter(par.chave);
        if (encontrado) {
            encontrado.valor = par.valor;
        }
        else {
            this.lista.push(par);
        }
    }
    limpar() {
        this.lista = new Array();
    }
    imprimir() {
        console.log(this.lista);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Matheus' });
mapa.colocar({ chave: 2, valor: 'Ana' });
mapa.colocar({ chave: 3, valor: 'Bia' });
mapa.imprimir();
mapa.obter(1);
//# sourceMappingURL=generics.js.map
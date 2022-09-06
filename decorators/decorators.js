"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logarSistema(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) { }
function logarSistemaSe(valor) {
    return valor ? logarSistema : decoratorVazio; // anotação de um decorator factory
}
function decorator(obj) {
    return function (construtor) {
        console.log(obj.a + ' ' + obj.b);
    };
}
function logarObjeto(construtor) {
    console.log('Carregando');
    return class extends construtor {
        constructor(...args) {
            console.log('Antes...');
            super(...args);
            console.log('Depois');
        }
    };
}
//@logarSistema
//@logarSistemaSe(false)
//@decorator({a:'Teste', b: 123})
//@logarObjeto
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('Novo...');
    }
};
Eletrodomestico = __decorate([
    imprimivel
], Eletrodomestico);
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
//Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo critico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
const user = new MudancaAdministrativa();
user.critico();
function perfilAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão!');
            }
        }
    };
}
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(5000);
cc.sacar(3000);
cc.sacar(2000);
//cc.sacar(0.4)
console.log(cc.getSaldo());
//cc.getSaldo = function(){
//    return  this['saldo']+ 7000
//}
//console.log(cc.getSaldo())
//Object.freeze() -- decorator de metodo
function congelar(alvo, nomeMetodo, descritor) {
    console.log(alvo);
    console.log(nomeMetodo);
    descritor.writable = false;
}
function naoNegativo(alvo, nomePropriedade) {
    delete alvo["_" + nomePropriedade]; //excluiu a propriedade da classe e cria outra com get e set com validações
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo['_' + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Saldo invalido!');
            }
            else {
                alvo["_" + nomePropriedade] = valor;
            }
        }
    });
}
// decorator para definir parametros para metódos
function paramInfo(alvo, nomeMetodo, quantidadeParam) {
    console.log(`classe: ${alvo}`);
    console.log(`nome do metodo: ${nomeMetodo}`);
    console.log(`quantidade de parametros: ${quantidadeParam}`);
}
//# sourceMappingURL=decorators.js.map
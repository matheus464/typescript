

function logarSistema(construtor: Function){ //anotação de um decorator
    console.log(construtor)
}

function decoratorVazio(_ : Function){}

function logarSistemaSe(valor: boolean){
    return valor ? logarSistema : decoratorVazio // anotação de um decorator factory
}

function decorator(obj: {a: string, b: number}){
    return function(construtor: Function){ // anotação de um decorator factory
        console.log(obj.a + ' ' +obj.b)
    }
}

type Construtor = {new (...args: any[]): {}}

function logarObjeto(construtor: Construtor){
    console.log('Carregando')
    return class extends construtor{
        constructor(...args: any[]){
            console.log('Antes...')
            super(...args)
            console.log('Depois')
        }
    }
}

//new Eletrodomestico()

 
interface Eletrodomestico{
    imprimir():void
}

//@logarSistema
//@logarSistemaSe(false)
//@decorator({a:'Teste', b: 123})
//@logarObjeto
@imprimivel
class Eletrodomestico{
    constructor(){
        console.log('Novo...')
    }
}

function imprimivel(construtor: Function){
    construtor.prototype.imprimir = function(){
        console.log(this)
    }
}

const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()

//Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

@perfilAdmin
class MudancaAdministrativa {
    critico(){
        console.log('Algo critico foi alterado!')
    }
}

const user = new MudancaAdministrativa()
user.critico()

function perfilAdmin<T extends Construtor>(construtor: T){
    return class extends construtor{
    constructor(...args: any[]){
        super(...args)
        if(!usuarioLogado || !usuarioLogado.admin){
            throw new Error('Sem permissão!')
        }
    }       
}

}

class ContaCorrente{

    @naoNegativo
    private saldo: number

    constructor(saldo: number){
        this.saldo = saldo
    }

    @congelar
    sacar(@paramInfo valor: number): boolean{
        if(valor <= this.saldo){
            this.saldo -= valor
            return true           
        } else {
            return false
        }

    
    }
    @congelar
    getSaldo(){
     return this.saldo   
    }
}

const cc = new ContaCorrente(5000)
cc.sacar(3000)
cc.sacar(2000)
//cc.sacar(0.4)
console.log(cc.getSaldo())


//cc.getSaldo = function(){
//    return  this['saldo']+ 7000
//}
//console.log(cc.getSaldo())

//Object.freeze() -- decorator de metodo
function congelar(alvo: any, nomeMetodo: string, descritor: PropertyDescriptor){ // alvo =  nome da classe recebida
        console.log(alvo)
        console.log(nomeMetodo)
        descritor.writable = false
}

function naoNegativo(alvo: any, nomePropriedade: string){ // alvo = nome da classe recebida
        delete alvo["_"+nomePropriedade] //excluiu a propriedade da classe e cria outra com get e set com validações
        Object.defineProperty(alvo, nomePropriedade, {
            get: function(): any{
                return alvo['_'+nomePropriedade]
            },
            set: function(valor: number): void{
                if(valor < 0){
                    throw new Error('Saldo invalido!')
                }else {
                    alvo["_"+nomePropriedade] = valor
                }
            }
        })
}

// decorator para definir parametros para metódos
function paramInfo(alvo: any, nomeMetodo: string, quantidadeParam: number){
    console.log(`classe: ${alvo}`)
    console.log(`nome do metodo: ${nomeMetodo}`)
    console.log(`quantidade de parametros: ${quantidadeParam}`)
}
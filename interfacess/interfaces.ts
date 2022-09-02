interface Humano {
    nome: string
    idade?: number // atributo opcional ?
    [prop: string]: any // atributo dinamico, recebe todos os tipos
    saudar(sobrenome: string): void
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string): void {
        console.log('Olá meu nome é ' + this.nome+ ' ' + sobrenome)
    },
}

function saudarPessoa(pessoa: Humano): void{
    console.log('Olá, ' + pessoa.nome + ' com idade ' + pessoa.idade) 
}

function alterarNome(pessoa: Humano): void {
    pessoa.nome = 'Jessica'
}

saudarPessoa(pessoa)
alterarNome(pessoa)
saudarPessoa(pessoa)
console.log(pessoa.saudar('Silva'))
pessoa.saudar('Monteiro')

// Usando Classes...

class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date()
    saudar(sobrenome: string): void{
        console.log('Olá meu nome é '+ this.nome + ' ' + sobrenome + ' e minha ultima compra foi '+ this.ultimaCompra)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Fernanda'
meuCliente.saudar('Ribeiro')

// interface função 
interface FuncaoCalculo {
    (n1: number, n2: number): number
}

let potencia: FuncaoCalculo
potencia = function(base: number, expo: number): number{
    return Array(expo).fill(base).reduce((ac, n) => ac * n)
}

console.log(potencia(4 , 2))

//Herança com interface
interface A {
    a(): void
}

interface B{
    b(): void
}

interface ABC extends A,B {
    c(): void
}

class RealA implements A {
    a(): void{}
}

class RealB implements A,B {
    a(): void{}
    b(): void{}
}

class RealABC implements ABC{
    a():void{}
    b():void{}
    c():void {}
}

abstract class RealABD implements A, B{
    a():void{} // no ts é obrigatório implementar os metódos quando for implementar uma interface na classe abstrata
    b():void{}
    abstract d(): void
}


interface Object {
    log(): void
}

Object.prototype.log = function(){
    console.log(toString())
}
    
   
const x: Object = 2
const y: Object = 3
const z: Object = 4

x.log()
y.log()
z.log()


const cli : Object = {
    nome: 'Pedro',
    idade: 27
}

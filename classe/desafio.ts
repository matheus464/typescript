// exercício 01 - Classes
class Moto {
    public nome: string
    public velocidade: number = 0

    constructor(nome: string, velocidade: number = 0){
        this.nome = nome
        this.velocidade = velocidade
    }

    public buzinar() {
        console.log('Toooooooooot!')
    }

    public acelerar(delta: number) {
        const velocidadeAtuall = this.velocidade =+ delta
        console.log(velocidadeAtuall)
    }
}

let moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

//exercício 02 - Herança
abstract class Objeto2D {
    protected base: number = 0
    protected altura: number = 0

    abstract area(): number
}

class Retangulo extends Objeto2D {
    base = 5
    altura = 7

    area(): number {
        return this.altura * this.base
    }
}

const retangulo: Objeto2D = new Retangulo
console.log(retangulo.area())

//exercicío 03 - Getters & Setters
class Estagiario {
    private _primeiroNome: string = ''

    constructor(){}

    get primeiroNome(): string{
        return this._primeiroNome
    }
    set primeiroNome(nome: string) {
        if(nome.length >= 3){
            this._primeiroNome = nome
        } else{
            this._primeiroNome = ''
        }
    }
}

const primeiroNome = new Estagiario()
primeiroNome.primeiroNome = 'Le'
console.log(primeiroNome)
primeiroNome.primeiroNome = 'Leonardo'
console.log(primeiroNome)
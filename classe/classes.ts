class Data {
    // Público por padrão
    dia: number
    public mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(0 , 0, 2002)
aniversario.dia = 10
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data// posso omitir os "()"
casamento.ano = 2017 // alterando um atributo da classe Data
console.log(casamento)


class DataEsperta {
  
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970){
        
    }
}

const aniversarioEsperto = new DataEsperta(0 , 0, 2002)
aniversarioEsperto.dia = 10
console.log(aniversario.dia)
console.log(aniversario)

const casamentoEsperto = new Data// posso omitir os "()"
casamentoEsperto.ano = 2017 // alterando um atributo da classe Data
console.log(casamentoEsperto)



class Carro {
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string,  private velocidadeMaxima: number = 200){

    }

   protected alterarVelocidade(delta: number): number{
    const novaVelocidade = this.velocidadeAtual + delta
    const velocidadeValida = this.velocidadeAtual >= 0 && this.velocidadeAtual <= this.velocidadeMaxima
    
    if (velocidadeValida){
        this.velocidadeAtual = novaVelocidade
    } else {
        this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
    }

    return this.velocidadeAtual
   }
   
   public acelerar(): number{
    return this.alterarVelocidade(5)
   }

   public freiar(): number{
    return this.alterarVelocidade(-5)
   }
}

const carro1 = new Carro('Ford', 'ka', 185)
console.log(carro1.acelerar())
console.log(carro1.acelerar())
console.log(carro1.freiar())

class Ferrari extends Carro {

    constructor(modelo: string, velocidadeMax: number){
        super('Ferrari', modelo, velocidadeMax)
    }

    public acelerar(): number{
      return this.alterarVelocidade(20)
    }
    
    public freiar(): number{
      return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('f40', 250)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.freiar())

// Getters & Setters
class Pessoa {
    private _idade: number = 0

    get idade(): number{
        return this._idade
    }

    set idade(valor:number) {
        if(valor >= 0 && valor <= 120){
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 30
console.log(pessoa1)
console.log(pessoa1.idade)

pessoa1.idade = -3
console.log(pessoa1.idade)

// Atributos e metódos estáticos
class Matematica {
   static PI: number = 3.1416

    static areaCirc(raio: number): number{
        return (raio * raio) * Matematica.PI
    }
}
//const m1 = new Matematica()
//m1.PI = 4.2
Matematica.PI = 4.2
console.log(Matematica.areaCirc(4))

//const m2 = new Matematica()
//m2.PI = 3.1416
Matematica.PI = 3.1416
console.log(Matematica.areaCirc(4))


// classe Abstrata -  n pode ser instanciada, usada apenas para herdar
abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...valores: number[]): void

    getResultado(): number{
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...valores: number[]): void {
        this.resultado = valores.reduce((ac, n) => ac + n)
    }
}

class Multiplicar extends Calculo {
    executar(...valores: number[]): void {
        this.resultado = valores.reduce((ac, n) => ac * n)
    }
}

let c1: Calculo = new Soma() // polimorfismo =  tipo mais generico associado
c1.executar(2,4,10)
console.log(c1.getResultado())

c1 = new Multiplicar()
c1.executar(4,2)
console.log(c1.getResultado())

//construtor private & singleton
class Unico {
    private static instance: Unico = new Unico
    private constructor(){}

    static getInstance(): Unico {
        return Unico.instance
    }

    agora() {
        return new Date
    }
}

//const errado = new Unico()
console.log(Unico.getInstance().agora())

// Somente Leitura
class Aviao {
    public readonly modelo: string
    
    constructor(modelo: string, public readonly prefixo: string){
        this.modelo = modelo
        this.prefixo = prefixo
    }
}

const turboHelice = new Aviao('KKK', 'IRINEU')
//turboHelice.modelo = '1234' 
//turboHelice.prefixo = '15646'
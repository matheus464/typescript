
function echo(objeto: any){
    return objeto
}

console.log(echo('João').length)
console.log(echo(27))
console.log(echo({nome: 'João', idade: 72, bo: true}))

//usando generics
function echoMelhorado<T>(objeto: T): T{ //personaliza os parametros e retorno generico
    return objeto
}

console.log(echoMelhorado('João').length)
console.log(echoMelhorado<number>(27)) // ex param number e retorno number
console.log(echoMelhorado({nome: 'João', idade: 72, bo: true}))


// Generics disponiveis na API ts
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5')
console.log(avaliacoes)

//Array
function imprimir<T>(args: T[]): void{
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['Ana', 'Bia', 'Carlos'])
imprimir<{nome: string, idade: number}>([
    {nome: 'Josue', idade: 31},
    {nome: 'Herick', idade: 14},
    {nome: 'Vinicius', idade: 41},
    {nome: 'Jessica silas', idade: 42}
])


console.log('-------------')

type Aluno = {
    id: number,
    nome: string,
    idade: number,
    matriculado: boolean
}
imprimir<Aluno>([
   {id: 1, nome: 'Jessica Avila', idade: 22, matriculado: true},
   {id: 2, nome: 'Joana', idade: 27, matriculado: true},
   {id: 3, nome: 'Jaqueline', idade: 32, matriculado: false},
   {id: 4, nome: 'Carla Fabiana', idade: 25, matriculado: false}
])

// Tipo Genérico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho('Alguma coisa'))

console.log()

// class com Generics
abstract class OperacaoBinaria<T, N>{
    constructor(public operador1: T, public operador2: T){}

    abstract executar(): N
}

//console.log(new OpercaoBinaria('Bom ', 'Dia').executar())
//console.log(new OpercaoBinaria(3, 7).executar())
//console.log(new OpercaoBinaria({}, {}).executar())

class SomaBinaria extends OperacaoBinaria<number, number>{
      
    executar(): number{
        return this.operador1 + this.operador2
    }
}

console.log(new SomaBinaria(3, 7).executar())
console.log(new SomaBinaria(300, 164).executar())

class DiferencaEntreDatas extends OperacaoBinaria<Data, string>{

    getTime(data: Data): number{
        let {dia, mes, ano} = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar(): string{
        const t1 = this.getTime(this.operador1)
        const t2 = this.getTime(this.operador2)
        const diferenca = Math.abs(t1-t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca / dia )} dia(s)` 
    }
}

const d1 = new Data(5, 1, 2020)
const d2 = new Data(10, 1, 2020)
console.log(new DiferencaEntreDatas(d1, d2).executar())

// Desafio Classe fila
// Atributo: fila (Array)
// Metódos: entrar, proximo, imprimir

class Fila<T extends number | string>{

    private fila: Array<T>

    constructor(...args: T[]){
        this.fila = args
    }

    entrar(elemento: T): void{
        this.fila.push(elemento)
    }

    proximo(): T | null{
        const primeiro = this.fila[0]
        this.fila.splice(0, 1)
        return primeiro
    }

    imprimir(): void{
        console.log(this.fila)
    }
}

const fila = new Fila<string>('Matheus', 'Jessica', 'Fernanda', 'Larissa')
fila.entrar('Manoela')
fila.proximo()
fila.imprimir()

//Desafio Mapa
type Par<C,V>= {chave: C, valor: V}

class Mapa<C,V>{

    lista: Array<Par<C,V>> = new Array<Par<C,V>>()

    obter (obj: C): Par<C,V> |null{
        const resultado = this.lista.filter(elemento => elemento.chave == obj)
        return resultado ? resultado[0] : null
    }

    colocar(par: Par<C,V>){
        const encontrado = this.obter(par.chave)
        if(encontrado){
            encontrado.valor = par.valor
        } else {
            this.lista.push(par)
        }
    }

    limpar(){
        this.lista = new Array<Par<C,V>>()
    }

    imprimir(){
        console.log(this.lista)
    }
}

const mapa = new Mapa<number, string>()
mapa.colocar({chave: 1, valor: 'Matheus'})
mapa.colocar({chave: 2, valor: 'Ana'})
mapa.colocar({chave: 3, valor: 'Bia'})
mapa.imprimir()
mapa.obter(1)


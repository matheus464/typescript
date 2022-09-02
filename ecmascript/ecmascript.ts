// let & const
var seraQuePode ='?' // var é usado para declarar variavél global e let variaveis locais.
console.log(seraQuePode) 

let isfrio = true
if (isfrio){
    let acao = 'colocar casaco'
    console.log(acao)
}

 // atraves do var consigo declarar uma variavel global, com let é local.

 const cpf: string = '123.456.000-99'
// cpf = '789.101.132-78' -- const constante
 console.log(cpf)

 var segredo = 'externo'
 function revelar() {
    const segredo = 'interno' // obs: variaveis dentro de funcções só serão visualizadas com a propia função for chamada!!
    console.log(segredo)
 }

 revelar() // tipo assim !
 console.log(segredo)
// ex:
 {
    const jamal ='def'
    console.log(jamal)
 }
 
 for(let i = 0; i <= 10; i++){ // quando um let declarado dentro de um bloco de codigo(metodos ou funções) ele sera visivel apenas no mesmo
    console.log(i)
 }

 // console.log(i) ex.

 //arrow function
 const somar3 = function(n1: number, n2: number): number {
    return n1 +n2
 }
 console.log(somar3(2,4))

 const subtrair = (n1: number, n2: number) => n1 - n2
 console.log(subtrair(4, 2)) // funcao reduzida arrow function

 let funcaoCalcular = (n1: number, n2: number):number => {
   return n1 * n2
 }

let semParametro = () => console.log('olá')

const falarComPessoa = (pessoa: string) => console.log(`falar com ${pessoa}`)
falarComPessoa('Jessica')

//this
function nomeComThis(){
console.log(this)
}

let nomeComThisEspecial = nomeComThis.bind({nome: "Matheus", idade: 22})
nomeComThisEspecial()

const arrowFunction = () => console.log(this)
arrowFunction()


// Parâmetros padrão
function contagemReegressiva(inicio: number = 5, fim: number = inicio - 5): void{
   console.log(inicio)
   while(inicio >= fim){
     inicio--
     console.log(inicio)
   }
     console.log('fim!')
}
contagemReegressiva()
contagemReegressiva(5)

// Spread && Rest
const numbers = [1, 20, 34, 29, 456]
console.log(Math.max(...numbers)) //...spred usado para leitura de dados

const turmaA : string[] = ['Matheus', 'Larissa', 'Bia', 'Leticia']
const turmaB : string[] = ['Erika', 'Fernanda', ...turmaA,'Daniela', 'Jessica']

console.log(...turmaB)


function retornarArray(a: number, ...args: number[]): number[] {
   console.log(a)
   return [...args]
}
const mostrarArray = retornarArray
console.log(mostrarArray(1, 3, 4, 7000, 945, 750))
console.log(retornarArray(5, 542, 725, 9045, ...numbers))

//Rest & Spreed (tupla)
const tupla: [number, string, boolean] = [1, 'abc', true]

function tuplaParam1(a: number,b: string, c: boolean): void{
   console.log(`1) ${a} ${b} ${c}`)
}
tuplaParam1(...tupla)

const tupla2: [string, number, string] = ['Matheus', 16, '07786052135']

function tuplaParam2(...params: [string, number, string]): void{
   console.log(`2) ${params[0]}, ${params[1]}, ${params[2]}`)
}

tuplaParam2(...tupla2)

// Destructuring (array)
const caracter = ['Motor 1.8', 2020]
//const motor = caracter[0]
//const ano = caracter[1]

const [motor, ano] = caracter
console.log(motor)
console.log(ano)

// Destructuring (objeto)
const item = {
   nome: 'SSD 480gb',
   preco: 425, 
   caracteristicas: {  // exemplo de um atibuto aninhado 
      w: 'Importado'
   }}

const nomeItem = item.nome
const precoItem = item.preco
const {nome: n, preco: p, caracteristicas: {w}} = item

console.log(n, `R$ ${p}`, w)
console.log(nomeItem)
console.log(precoItem)

//Template String =  interpolação com crazy
const usuarioID: string = ' SuporteCod3r '
const notificacoes: string = ' 9 '
//const boasVindas = 'Boas Vindas ' + usuarioID + ' Notificações: ' + notificacoes

const boasVindas = ` Boas vindas ${usuarioID}` + `Notificações ${parseInt(notificacoes)  > 9 ? '+9' : notificacoes}` 
console.log(boasVindas)
console.log(`${(1+1) * 30}`)
console.log(`${caracter}`)

//exercicíos
const dobro = function(val: number): number {
   return val * 2
}
console.log(10)


const dizerOla = function (nome: string | null): void{
   if (nome === null) {
      nome = 'Pessoa'
      console.log(`Ola, ${nome} !`)
   } else{
      console.log(`Ola, ${nome} !`)
   }
   
}
dizerOla(null)
dizerOla("Ana")

let nums: number[] = [-3, 33, 38, 5]
console.log(Math.min(...nums))

let nums2 = [-3, 33, 38, 5]
let array = [55, 20, ...nums2]
console.log(array) 

let notas = [8.5, 6.3, 9.4]
const [...todasNotas] = notas
console.log(todasNotas)

let cientista = {primeiroNome: 'Will', experiencia: 12}
const {...dadoss} = cientista
console.log(dadoss)


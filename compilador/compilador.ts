let canal: string = 'Gaveta'
let inscritos:number = 610234

//canal = inscritos
console.log(`Canal = ${canal}`)

// let nome = 'Pedro'

let notaDoaluno = function (n1: number, n2: number): number {
    return (n1 + n2) / 2
}

let resultadoFinal = notaDoaluno
console.log(`A nota final do Aluno é ${resultadoFinal(4.5, 7.5)}`)

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = '12'

function saudar(isManha:boolean): string{
    let saudacao: string
    if (isManha === true){
        saudacao = 'Bom dia'
    }else{
        saudacao = 'Boa tarde!'
    }
    return saudacao
}



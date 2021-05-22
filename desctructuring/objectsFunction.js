const pessoa = {
    nome: 'Michi',
    idade: 33
}

function imprimeDados({nome, idade}){
    console.log(nome, idade)
}

imprimeDados(pessoa)
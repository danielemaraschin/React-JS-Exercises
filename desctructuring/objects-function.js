const pessoa = {
    nome: 'Michi',
    idade: 33
}

function imprimeDados(dados){
    const {nome, idade} = dados
    console.log(nome, idade)
}

imprimeDados(pessoa)
/*const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]


const numeros = [numerosPares, numerosImpares]

console.log(numeros)

const numeros1 = [...numerosPares, ...numerosImpares]

console.log(numeros1)

const num1 = 1
const num2 = 2
console.log(num1, num2)

const [nume1, nume2] = [1,2]
console.log(nume1, nume2)

const [numer1, numer2] = [1, 2, 3, 4, 5]
console.log(numer1, numer2)

const [numero1, numero2, outros] = [1, 2, 3, 4, 5]
console.log(numero1, numero2, outros)


const [numb1, numb2, ...outrosnumb] = [1, 2, 3, 4, 5]
console.log(numb1, numb2, outrosnumb)

//VALOR PADRÃO. SE O ARRAY ESTIVER VAZIO É JU, SE FOR = [algo] , A CONST NOME1 será esse [algo] (como é o 1 no caso)
const [ nome1 = 'Ju'] = [1] //usando valor padrão
console.log(nome1)
const[nome2 = 'Ju'] = []
console.log(nome2)

*/
const person = {
    nome: 'Dani',
    idade: 30
}

const personphone =
{...person, phone: 123456 }

console.log(personphone)

const personCellphone =
{person, cellphone: 123456 }

console.log(personCellphone)

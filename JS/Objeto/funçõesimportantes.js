const pessoa = {
    nome: "João",
    idade: 20,
    peso: 130
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2000'
}) 

pessoa.dataDeNascimento = '02/02/2000'
console.log(pessoa.dataDeNascimento)
console.log(Object.keys(pessoa))

//object assing
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 'algum numero'
console.log(obj)


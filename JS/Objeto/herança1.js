const Ferrari = {
    modelo: 'F40',
    velMax: 324,
}

const Volvo = {
    modelo: 'V40',
    velMax: 200,
}

console.log(Ferrari.prototype)
console.log(Ferrari.__proto__)
console.log(Ferrari.__proto__ === Object.prototype)
console.log(Volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto () {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
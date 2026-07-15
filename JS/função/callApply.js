function getPreço(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preço * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preço: 4589,
    desconto: 0.15,
    getPreço
}
globalThis.preço = 20
global.desconto = 0.1
console.log(getPreço())
console.log(produto.getPreço())

const carro = {preço: 49990, desconto: 0.20}

console.log(getPreço.call(carro))
console.log(getPreço.apply(carro))

console.log(getPreço.call(carro, 0.17, '$')) // params colocados diretos
console.log(getPreço.apply(global, [0.17, '$'])) // params precisam ser colocados num array
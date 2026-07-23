// minha tentativa
function criarProduto(nome, preço, desconto = 0.05) {
    return {
        nome: nome,
        preço: preço,
        desconto: `${desconto * 100}%`,
        preçoFinal: preço - preço * desconto 
    }
}

console.log(criarProduto('iphone', 3000))
console.log(criarProduto('xiome', 2000))
console.log(criarProduto('nokia', 500, .50))

// versão do professor
function criarProduto (nome, preco) {
    return {
        nome,
        preço,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))

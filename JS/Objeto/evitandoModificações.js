// Object.preventExtensivons
const produto = Object.preventExtensions({
    nome: 'Qualquer', preço: 1.99, tag: "promoção"
})

console.log('É extensivel:', Object.isExtensible(produto))

produto.nome = 'Bala'
produto.desconto = 0.5
delete produto.tag
console.log(produto) // valores podem ser auterados ou deletados, mas não adicionados

// Object.seal
const pessoa = {nome: 'João', idade: 55}
Object.seal(pessoa)
console.log('está selado:', Object.isSealed(pessoa))

pessoa.sobrenome ='Melão'
delete pessoa.idade
pessoa.idade = 45
console.log(pessoa) // atributos podem ser alterados, mas não adicionados nem deletados

// Object.freeze = slado + valores constantes 

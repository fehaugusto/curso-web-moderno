let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando variavel maluca: sem var e let!
abc = 3 // não fazer isso
console.log(global.abc) // variavel maluca esta no estopo global

// module.extorts = { e: 456, f: false, g: 'teste' }
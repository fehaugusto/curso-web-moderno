// meu exemplo
const meuArray = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
let função = function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
}

function meuForEach (array, função) {
    for (let i = 0; i < array.length; i++) {
        função(array[i], i, array)
    }
}

meuForEach(meuArray, função)

// professor
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) { 
    console.log(`${indice + 1}) ${nome}`)
})
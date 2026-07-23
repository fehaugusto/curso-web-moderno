const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop // massa quebrou o carro!
console.log(pilotos) // pop = remove ultimo elemento

pilotos.push('verstappen') // push = adiciona no final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('hamilton') // unshift = adiciona no começo do array
console.log(pilotos)

// splice pode adcionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou dnv :(
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array a partir do indice 2 
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // novo array do indice 1 ao 4 sem contar o 4
console.log(algunsPilotos2)
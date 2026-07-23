function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) - min
  return Math.floor(valor)
}

let opção 

do {
  opção = getInteiroAleatorioEntre(-1, 10)
  console.log(`O numero escolhido foi ${opção}`)
} while (opção != -1)

console.log('até a proxima!')
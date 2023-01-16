// par nome/valor
const saudaçao = 'opa' // contexto léxico 1

function exec() {
  const saudaçao = "falaaa" // contexto léxico 2
  return saudaçao
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'pedro',
  idade: 32,
  peso: 90,
  endereço: {
    logradouro: 'Rua Muito Legal',
    numero: 123
  }
}

console.log(saudaçao)
console.log(exec())
console.log(cliente)


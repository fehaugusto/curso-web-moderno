function soma() {
  let soma = 0
  for (i in arguments) 
  // ARGUMENTS = array interno que pode ser acessado pela função, prenchido com os parametros da função
  {soma += arguments[i]}
  return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, " teste"))
console.log(soma('a', 'b', "c"))

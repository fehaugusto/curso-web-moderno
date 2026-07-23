Number.prototype.entre = function (inicio, fim) {
 return this >= inicio && this <= fim 
}

const imprimirRresultado = function (nota) {
 if (nota.entre(9, 10)) {
    console.log('Quadro de Honra')
  } else if (nota.entre(7, 8.99)) {
    console.log('aprovado')
  } else if (nota.entre(4, 6.99)) {
    console.log('Recuperação')
  } else if (nota.entre(0, 3.99)) {
    console.log('Reprovado')
  } else {
    console.log('Nota inválida')
  }
}

imprimirRresultado(10)
imprimirRresultado(8.9)
imprimirRresultado(6.5)
imprimirRresultado(2.3)
imprimirRresultado(-1)
imprimirRresultado(11)



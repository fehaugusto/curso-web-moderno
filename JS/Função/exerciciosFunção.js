function ehNumero(valor) {
    return typeof valor === "number" && !Number.isNaN(valor);
}

// exercicio 1
function calculos(a, b) {
    console.log(a + b, a - b, a * b, a / b)
}

calculos(10, 5)
calculos(3, 2)
console.log('===============')

// exercicio 2
function definirTriangulo(lado1, lado2, lado3) {
    if (!ehNumero(lado1) || !ehNumero(lado2) || !ehNumero(lado3)){
        console.log('Use apenas numeros!!!')
    } else if (lado1 === lado2 && lado2 === lado3) {
        console.log("Esse triângulo é Equilátero");
    } else if (
        lado1 === lado2 ||
        lado1 === lado3 ||
        lado2 === lado3
    ) {
        console.log("Esse triângulo é Isósceles");
    } else {
        console.log("Esse triângulo é Escaleno");
    }

}

definirTriangulo(1, 2, 3)
definirTriangulo(2, 3, 3)
definirTriangulo(3, 3, 3)
console.log('===============')

// exercicio 3
function potenciação(base, expoente) {
    if (!ehNumero(base) || !ehNumero(expoente)){
        console.log('Use apenas numeros!!!')
    } else {
        console.log(base ** expoente)
    }
}

potenciação(2, 2)
potenciação(2, 3)
potenciação(5, 2)
console.log('===============')

// exercicio 4
function restoDivisão(dividendo, divisor) {
    console.log(dividendo % divisor)
}

restoDivisão(55, 10)
restoDivisão(100, 3)
restoDivisão(10, 3)
console.log('===============')

// exercicio 5
function corrigirValor(valor) {
    let novoValor = Math.floor(valor * 100) / 100  
    console.log(`R$${novoValor.toFixed(2).replace(".", ",")}`)
}

corrigirValor((0.1 + 0.2))
console.log('===============')

// exercicio 6
function jurosSimples(capital, taxaDeJuros, tempo) {
    let montanteFinal = capital * (1 + taxaDeJuros / 100 * tempo) 
    if (Number.isNaN(montanteFinal)) {
         console.log('Use apenas numeros!!!')
    } else {
        console.log(montanteFinal)
    }
}

function jurosCompostos(capital, taxaDeJuros, tempo) {
    let montanteFinal = capital * (1 + taxaDeJuros / 100) ** tempo 
    if (Number.isNaN(montanteFinal)) {
         console.log('Use apenas numeros!!!')
    } else {
        console.log(montanteFinal.toFixed(0))
  }
}

jurosSimples(1000, 10, 2);
jurosSimples(5000, 5, 3);
jurosSimples(250, 8, 6);
jurosCompostos(1000, 10, 2);
jurosCompostos(5000, 5, 3);
jurosCompostos(250, 8, 6);
console.log('===============')

// exercicio 7
function calcularBhaskara(a, b, c) {
    let delta = (b * b) -4 * a * c 
    if (delta < 0) { return "delta é negativo"} 
   
    let raizDeDelta = Math.sqrt(delta)
    let x1 = (-b + raizDeDelta) / (2 * a)
    let x2 = (-b - raizDeDelta) / (2 * a)

    return [x1, x2]
}

console.log(calcularBhaskara(3, -5, 12))
console.log(calcularBhaskara(1, -5, 6))
console.log(calcularBhaskara(1, -4, 4))
console.log('===============')

// exercicio 8
function calcularDesempenho(pontuações) {
pontuações = pontuações.split(" ").map(Number)
let melhor = pontuações[0]
let pior = pontuações[0]
let recordes = 0
let pipocada = 1

    for (let i = 1; i < pontuações.length; i++) {
    let pontuaçãoAtual = pontuações[i]

        if (pontuaçãoAtual > melhor ) {
        melhor = pontuaçãoAtual
        recordes++
    } else if (pontuaçãoAtual < pior) {
        pior = pontuaçãoAtual
        pipocada = i + 1
     } 

    }

    return [recordes, pipocada]

}  

let pontuaçõesMarço = ("10 20 20 8 25 3 0 30 1")
console.log(calcularDesempenho(pontuaçõesMarço))
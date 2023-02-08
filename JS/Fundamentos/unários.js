let num1 = 1
let num2 = 2

num1++ // precedencia menor
console.log(num1)
--num1 // precendencia maior
console.log(num1)

console.log(++num1 === num2--) // true, num2-- só é feita depois da comparação
console.log (num1 === num2)
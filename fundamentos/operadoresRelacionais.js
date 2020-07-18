//resultados sempre verdadeiros ou falsos
// == compara
// = atribui
// === compara tipos

console.log('01', '1' == 1)
console.log('01', '1' === 1)
console.log('03', '3' != 3)
console.log('03', '3' !==3)

console.log('05', 3 < 2)
console.log('06', 3 > 2)
console.log('07', 3 <= 2)
console.log('08', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('9', d1 === d2)
console.log('10', d1 == d2)
console.log('11', d1.getTime() === d2.getTime() )
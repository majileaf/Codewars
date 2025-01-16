/* BRL currency format
Format a number as BRL money, i.e. R$ 10,00

More examples
currencyBRL(10) => 'R$ 10,00'
currencyBRL(10.5) => 'R$ 10,50'
currencyBRL(10.05) => 'R$ 10,05'
currencyBRL(.5) => 'R$ 0,50'

The values must be rounded to the nearest value, like:
currencyBRL(10.505) => 'R$ 10,51'
currencyBRL(10.504) => 'R$ 10,50'
currencyBRL(10.502) => 'R$ 10,50'
currencyBRL(10.509) => 'R$ 10,51'
*/

const currencyBRL = (number = 0) => 'R$ ' + number.toFixed(2).replace('.', ',');

console.log(currencyBRL()      ) // 'R$ 0,00'
console.log(currencyBRL(10)    ) // 'R$ 10,00'
console.log(currencyBRL(10.5)  ) // 'R$ 10,50'
console.log(currencyBRL(10.05) ) // 'R$ 10,05'
console.log(currencyBRL(.5)    ) // 'R$ 0,50'
console.log(currencyBRL(10.505)) // 'R$ 10,51'
console.log(currencyBRL(10.504)) // 'R$ 10,50'
console.log(currencyBRL(10.502)) // 'R$ 10,50'
console.log(currencyBRL(10.509)) // 'R$ 10,51'
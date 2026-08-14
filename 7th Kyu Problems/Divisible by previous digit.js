/* Divisible by previous digit?
Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

The booleans should always start with false becase there is no digit before the first one.
Examples

73312        => [false, false, true, false, true]
2026         => [false, true, false, true]
635          => [false, false, false]

*** Remember 0 is evenly divisible by all integers but not the other way around ***
*/

const divisibleByLast = n => [...String(n)].map((_, i, arr) => arr[i] % arr[i - 1] === 0);

console.log(divisibleByLast(73312)) // [false, false, true, false, true]
console.log(divisibleByLast(2026)) // [false, true, false, true]
console.log(divisibleByLast(635)) // [false, false, false]
console.log(divisibleByLast(1337)) // [false, true, true, false]
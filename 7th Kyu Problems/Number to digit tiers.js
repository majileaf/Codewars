/* Number to digit tiers
Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

Examples
420 should return ["4", "42", "420"]
2017 should return ["2", "20", "201", "2017"]
2010 should return ["2", "20", "201", "2010"]
4020 should return ["4", "40", "402", "4020"]
80200 should return ["8", "80", "802", "8020", "80200"]

PS: The input is guaranteed to be an integer in the range [0, 1000000]
*/

const createArrayOfTiers = num => [...Array(Math.max(Math.ceil(Math.log10(num + 1)) , 1))].map((_, i) => num.toString().slice(0, i + 1));

console.log(createArrayOfTiers(420)) // ["4", "42", "420"]
console.log(createArrayOfTiers(2017)) // ["2", "20", "201", "2017"]
console.log(createArrayOfTiers(2010)) // ["2", "20", "201", "2010"]
console.log(createArrayOfTiers(4020)) // ["4", "40", "402", "4020"]
console.log(createArrayOfTiers(80200)) // ["8", "80", "802", "8020", "80200"]
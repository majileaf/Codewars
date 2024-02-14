/* Sum Array with different bases
You get an array of different numbers to sum up. But there is one problem, those numbers all have different bases. 

For example:
You get an array of numbers with their base as an input:
[["101",16],["7640",8],["1",9]]

The output should be the sum as an integer value with a base of 10, so according to the example this would be:
4258

A few more examples:
[["101",2], ["10",8]] --> 13
[["ABC",16], ["11",2]] --> 2751
Bases can be between 2 and 36 (2<=base<=36)
*/

const sumItUp = numbersWithBases => numbersWithBases.reduce((sum, [n, base]) => sum + parseInt(n, base), 0);

// alternatively:
// const sumItUp = numbersWithBases => numbersWithBases.reduce((sum, n) => sum + parseInt(...n), 0);

console.log(sumItUp([["101",2], ["10",8]])) // 13
console.log(sumItUp([["ABC",16], ["11",2]])) // 2751
console.log(sumItUp([["101",16],["7640",8],["1",9]])) // 4258
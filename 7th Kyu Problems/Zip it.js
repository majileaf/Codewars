/* Zip it!
Write
Array.prototype.zip = function (arr, fn) {}

that merges the corresponding elements of two sequences using a specified selector function fn (a block in Ruby)

For example:
var a = [1, 2, 3, 4, 5];
var b = ['a','b'];
a.zip(b, (a, b) => a + b) === ['1a', '2b']

var a = [1, 2, 3, 4, 5];
var b = ['a','b','c','d','e'];
a.zip(b, (a, b) => a + b.charCodeAt(0)) === [98, 100, 102, 104, 106]

if arrays have different lengths, go up to the minimum length and then stop.
*/

Array.prototype.zip = function (arr, fn) {
    return this.map((e, i) => fn(e, arr[i])).slice(0, Math.min(this.length, arr.length));
}

const a = [1, 2, 3, 4, 5];
const b = ['a','b','c','d','e'];

console.log(a.zip(b, (a, b) => a + b)) // ["1a", "2b", "3c", "4d", "5e"]
console.log(b.zip(a, (a, b) => a + b)) // ["a1", "b2", "c3", "d4", "e5"]
console.log(b.zip(a.zip(b,(a,b)=>a*b.charCodeAt(0)), (a, b) => a + b)) //["a97", "b196", "c297", "d400", "e505"

const c = [1, 2, 3, 4, 5];
const d = ['c','d'];
console.log(c.zip(d, (c, d) => c + d)) // ['1c', '2d']
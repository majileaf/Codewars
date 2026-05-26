/* Hamming Distance
The Hamming Distance is a measure of similarity between two strings of equal length. 
Complete the function so that it returns the number of positions where the input strings do not match.

Examples:
a = "I like turtles"
b = "I like turkeys"
Result: 3

a = "Hello World"
b = "Hello World"
Result: 0

a = "espresso"
b = "Expresso"
Result: 2

You can assume that the two inputs are ASCII strings of equal length.
*/

const hamming = (a, b) => [...a].reduce((sum, _, i) => sum + (a[i] !== b[i]), 0);

console.log(hamming("","")) // 0
console.log(hamming("a","a")) // 0
console.log(hamming("a","b")) // 1
console.log(hamming("I like turtles","I like turkeys")) // 3
console.log(hamming("Hello World","Hello World")) // 0
console.log(hamming("hello world","hello tokyo")) // 4
console.log(hamming("a man a plan a canal","a man a plan sobanal")) // 3
console.log(hamming("hamming and cheese","Hamming and Cheese")) // 2
console.log(hamming("espresso","Expresso")) // 2
console.log(hamming("old father, old artificer","of my soul the uncreated ")) // 24
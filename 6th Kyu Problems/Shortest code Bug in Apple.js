/* Shortest code: Bug in Apple
shortest code: Bug in Apple
(Code length limit: 80 chars)

This is the challenge version of coding 3min series. If you feel difficult, please complete the simple version
Task

Find out "B" (Bug) in a lot of "A" (Apple).

There will always be exactly one bug the apple.

input: apple: matrix of characters

output: [row, column]: Location of "B" 
*/

sc=apple=>[r=apple.findIndex(e=>e.includes("B")),apple[r].indexOf("B")]

let apple=[
["B","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
]

console.log(sc(apple)) // 0,0]

apple=[
["A","A","A","A","A"],
["A","B","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
]

console.log(sc(apple)) // [1,1]

apple=[
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","B","A","A","A"]
]

console.log(sc(apple)) // [4,1]
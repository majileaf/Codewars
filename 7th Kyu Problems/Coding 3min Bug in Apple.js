/* Coding 3min: Bug in Apple
Task:

Find out "B"(Bug) in a lot of "A"(Apple).

There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

input: string Array apple

output: Location of "B", [x,y]
*/

const sc = apple => {
    for (let i = 0; i < apple.length; i++) {
        for (let j = 0; j < apple[i].length; j++) {
            if (apple[i][j] === 'B') return [i, j];
        }
    }
}

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
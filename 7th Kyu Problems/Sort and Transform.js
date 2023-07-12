/* Sort and Transform
Given an array of numbers, return a string made up of four parts:

a four character 'word', made up of the characters derived from the first two and 
last two numbers in the array. order should be as read left to right (first, second, 
second last, last),

the same as above, post sorting the array into ascending order,
the same as above, post sorting the array into descending order,
the same as above, post converting the array into ASCII characters and sorting alphabetically.
The four parts should form a single string, each part separated by a hyphen (-).

Example format of solution: "asdf-tyui-ujng-wedg"

Examples
[111, 112, 113, 114, 115, 113, 114, 110]  -->  "oprn-nors-sron-nors"
[66, 101, 55, 111, 113]                   -->  "Beoq-7Boq-qoB7-7Boq"
[99, 98, 97, 96, 81, 82, 82]              -->  "cbRR-QRbc-cbRQ-QRbc"
*/

const sortTransform = a => {
    const asc = a.slice().sort((a, b) => a - b);
    const desc = a.slice().sort((a, b) => b - a);
    return [createWord(a), createWord(asc), createWord(desc), createWord(asc)].join('-');
}

const createWord = arr => String.fromCharCode(...[arr[0], arr[1], arr[arr.length - 2], arr[arr.length - 1]]);

console.log(sortTransform([111, 112, 113, 114, 115, 113, 114, 110])) // "oprn-nors-sron-nors"
console.log(sortTransform([66, 101, 55, 111, 113])) // "Beoq-7Boq-qoB7-7Boq"
console.log(sortTransform([99, 98, 97, 96, 81, 82, 82])) // "cbRR-QRbc-cbRQ-QRbc"
console.log(sortTransform([121, 122, 123, 124, 125, 120, 122, 132])) // 'yzz-xy}-}yx-xy}'
console.log(sortTransform([111, 112, 113, 114, 115, 113, 114, 110])) // 'oprn-nors-sron-nors'
console.log(sortTransform([51, 62, 73, 84, 95, 100, 99, 126])) // '3>c~-3>d~-~d>3-3>d~'
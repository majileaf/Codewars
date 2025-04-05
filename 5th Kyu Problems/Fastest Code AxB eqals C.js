/* Fastest Code : A*B=C
This is the Performance version of coding 3min series. If your code runs more than 6000ms, 
please optimize your code or try the simple version

Task
You are given an integer array numbers and an integer c.

Find out a pair of numbers(let's say number a and number b) from the array numbers, let a * b = c, 
result format is an array [a,b]

The array numbers is a sorted array, value range: -1000 to 1000(both inclusive)

The result will be the first pair of numbers(from the left to the right). 
For example,findAB([1,2,3,4,5,6],6) should return [1,6], instead of [2,3]
*/

const findAB = (numbers, c) => {
    const count = {};
    let compl = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        count[numbers[i]] = count[numbers[i]] < i ? count[numbers[i]] : i;
    }

    for (let i = 0; i < numbers.length; i++) {
        compl = numbers[i] === 0 ? 0 : c / numbers[i] + 0;
        if (count[compl] !== undefined && count[compl] !== i && numbers[i] * compl === c) return [numbers[i], compl].sort((a, b) => count[a] - count[b]);
    }

    return null;
}

console.log(findAB([1,2,3], 3)) // [1,3]
console.log(findAB([1,2,3], 6)) // [2,3]
console.log(findAB([1,2,3], 7)) // null
console.log(findAB([1,2,3,6], 6)) // [1,6]
console.log(findAB([1,2,3,4,5,6], 15)) // [3,5]
console.log(findAB([0,0,2], 4)) // null
console.log(findAB([0,0,2,2], 4)) // [2,2]
console.log(findAB([-3,-2,-2,-1,0,1,2,3,4], 4)) // [-2,-2]
console.log(findAB([-3,-2,-2,-1,0,1,2,3,4], 0)) // [-3,0]
console.log(findAB([-3,-2,-1,0,1,2,3,4], 4)) // [1,4]
console.log(findAB([0,1,2,3], 0)) // [0,1]
console.log(findAB([0,0,2,3], 0)) // [0,0]
/* Counter of neighbor ones
Task
Tranform of input array of zeros and ones to array in which counts number of continuous ones. 
If there is none, return an empty array

Example
[1, 1, 1, 0, 1] -> [3,1]
[1, 1, 1, 1, 1] -> [5]
[0, 0, 0, 0, 0] -> []
*/

const onesCounter = input => {
    const arr = [];
    let count = 0;

    for (let i = 0; i <= input.length; i++) {
        if (input[i] === 1) count++;
        else {
            arr.push(count) 
            count = 0;
        }
    }
    return arr.filter(e => e);
}

console.log(onesCounter([0, 0, 0, 0, 0, 0, 0, 0])) // []
console.log(onesCounter([1,1,1,1,1])) // [5]
console.log(onesCounter([1, 1, 1, 0, 0, 1, 0, 1, 1, 0])) // [3, 1, 2]
console.log(onesCounter([0, 0, 0, 1, 0, 0, 1, 1])) // [1, 2]
console.log(onesCounter([1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1])) // [1, 2, 4, 1]
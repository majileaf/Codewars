/* Find missing numbers
You will get an array of numbers.

Every preceding number is smaller than the one following it.

Some numbers will be missing, for instance:

[-3,-2,1,5] //missing numbers are: -1,0,2,3,4
Your task is to return an array of those missing numbers:

[-1,0,2,3,4]
*/

const findMissingNumbers = arr => {
    const num = [];
    let i = arr[0];

    while (i <= arr[arr.length - 1]) {
        if (!arr.includes(i)) num.push(i);
        i++;
    }
    return num;
}

// alternative:
// const findMissingNumbers = arr => {
//     const num = [];
//     let i = arr[0];
//     let j = 0;

//     while (i <= arr[arr.length - 1]) {
//         if (i < arr[j]) {
//             num.push(i);
//             j--;
//         }
//         i++;
//         j++;
//     }
//     return num;
// }

console.log(findMissingNumbers([-3,-2,1,4])) // [-1,0,2,3]
console.log(findMissingNumbers([-1,0,1,2,3,4])) // []
console.log(findMissingNumbers([])) // []
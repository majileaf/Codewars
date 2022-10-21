/* +1 Array
Given an array of integers of any length, return an array that 
has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would 
return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]
*/

const upArray = arr => {
    if (arr.every(e => e >= 0 && e <= 9) && arr.length !== 0) {
        if (arr[arr.length - 1] === 9) { 
            let i = 1;
            do {
                arr[arr.length - i] = 0;
                i++;
                if (arr.length - i < 0) {
                    arr.unshift(0);
                    break;
                }
            } while(arr[arr.length - i] === 9)
            arr[arr.length - i] += 1;
        } else {
            arr[arr.length - 1] += 1;
        }
        return arr;
    } else {
      return null;  
    }
}

console.log(upArray([2,3,9])) // [2,4,0]
console.log(upArray([4,3,2,5])) // [4,3,2,6]
console.log(upArray([1,-9])) // null
console.log(upArray([ 9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7 ])) 
// [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8]
console.log(upArray([ 9, 9, 9 ])) // [1, 0, 0, 0]
console.log(upArray([])) // null
console.log(upArray([ 1, 9, 9, 9 ])) // [2, 0, 0, 0]
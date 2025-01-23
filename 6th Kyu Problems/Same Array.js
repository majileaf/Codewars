/* Same Array?
Given two arrays, the purpose of this Kata is to check if these two arrays are the same. 
"The same" in this Kata means the two arrays contains arrays of 2 numbers which are same and not necessarily sorted the same way. 
i.e. [[2,5], [3,6]] is same as [[5,2], [3,6]] or [[6,3], [5,2]] or [[6,3], [2,5]] etc

    1. [[2,5], [3,6]] is NOT the same as [[2,3], [5,6]]
    2. Two empty arrays [] are the same
    3. [[2,5], [5,2]] is the same as [[2,5], [2,5]] but NOT the same as [[2,5]]
    4. [[2,5], [3,5], [6,2]] is the same as [[2,6], [5,3], [2,5]] or [[3,5], [6,2], [5,2]], etc
    5. An array can be empty or contain a minimun of one array of 2 integers and up to 100 array of 2 integers

Note:
    1. [[]] is not applicable because if the array of array are to contain anything, there have to be two numbers.
    2. 100 randomly generated tests that can contains either "same" or "not same" arrays.
*/

const sortSame = arr => arr.sort((a, b) => a - b);
const same = (aArr, bArr) => {
    const aArrSorted = aArr.map(e => sortSame(e)).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const bArrSorted = bArr.map(e => sortSame(e)).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    return aArrSorted.join('') === bArrSorted.join('');
}

// alternatively:
// const same = (aArr, bArr) => {
//   const aArrSorted = aArr.map(e => e.sort()).sort();
//   const bArrSorted = bArr.map(e => e.sort()).sort();
//   return aArrSorted.join('') === bArrSorted.join('');
// }

// 'Simple 2x2 arrays'
console.log(same([[2,5], [3,6]], [[5,2], [3,6]])) // true
console.log(same([[2,5], [3,6]], [[6,3], [5,2]])) // true
console.log(same([[2,5], [3,6]], [[6,3], [2,5]])) // true

// 'Simple 3x3 arrays'
console.log(same([[2,5], [3,5], [6,2]], [[2,6], [5,3], [2,5]])) // true
console.log(same([[2,5], [3,5], [6,2]], [[3,5], [6,2], [5,2]])) // true

// 'Empty arrays'
console.log(same([], [])) // true

// 'Unequal arrays'
console.log(same([[2,3], [3,4]], [[4,3], [2, 4]])) // false
console.log(same([[2,3], [3,2]], [[2,3]])) // false
/* N-centered Array
An array is called centered-N if some consecutive sequence of elements of the array sum to N and 
this sequence is preceded and followed by the same number of elements.

Example:
[3,2,10,4,1,6,9] is centered-15
because the sequence 10,4,1 sums to 15 and the sequence 
is preceded by two elements [3,2] and followed by two elements [6,9]

Write a method called isCenteredN that returns :
    true if its array argument is not empty and centered-N or empty and centered-0
    otherwise returns false.
*/

const isCenteredN = (arr, n) => {
    if (!arr.length) return false;
    const mid = arr.length / 2;
    const first = arr.slice(0, mid).reverse();
    const middle = arr.slice(mid, -mid);
    const last = arr.slice(-mid);
    
    let sum = arr.length === 1 ? arr[0] : middle[0] || 0;
    if (sum === n) return true;

    for (let i = 0; i < first.length; i++) {
        sum += first[i] + last[i];
        if (sum === n) return true;
    }
    return false;
}

console.log(isCenteredN([3,2,10,4,1,6,9],15)) // true
console.log(isCenteredN([2,10,4,1,6,9],15)) // false
console.log(isCenteredN([3,2,10,4,1,6],15)) // false
console.log(isCenteredN([1,1,8,3,1,1],15)) // true
console.log(isCenteredN([1,1,8,3,1,1],11)) // true
console.log(isCenteredN([1,1,8,3,1,1],13)) // true
console.log(isCenteredN([9,0,6],0)) // true
console.log(isCenteredN([],25)) // false
console.log(isCenteredN([25],25)) // true
console.log(isCenteredN([25,24,34,32],0)) // true
console.log(isCenteredN([2,1,2],0)) // false
console.log(isCenteredN([0,0,0],0)) // true

console.log(isCenteredN([1,1,15,-1,-1],15)) // true
console.log(isCenteredN([1,1,15,-1,-1],6)) // false
console.log(isCenteredN([0,0,0,0,0,0,0,0,0,0],0)) // true
console.log(isCenteredN([0,0,0,-1,1,1,-1,0,0,0],0)) // true
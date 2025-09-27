/* Swap the head and the tail
You need to swap the head and the tail of the specified array:

the head (the first half) of array moves to the end, the tail (the second half) moves to the start. 
The middle element (if it exists) leaves on the same position.

Return new array.

For example:
   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
    \----/   \----/         
     head     tail 

   [ -1, 2 ]  => [ 2, -1 ] 
   [ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]  
*/

const swapHeadAndTail = arr => arr.length % 2
    ? [...arr.slice(arr.length / 2 + 1), ...arr.slice(arr.length / 2, arr.length / 2 + 1), ...arr.slice(0, arr.length / 2)]
    : [...arr.slice(arr.length / 2), ...arr.slice(0, arr.length / 2)];

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ] )) // [ 4, 5, 3, 1, 2 ]
console.log(swapHeadAndTail([ -1, 2 ])) // [ 2, -1 ]
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ])) // [ 5, 6, -7, 8, 1, 2, -3, 4 ]
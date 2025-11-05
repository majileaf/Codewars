/* Maxed Out
For this task you will be given an array of numbers, each number in turn has to be cubed and once all numbers 
have been cubed all of them have to be added to get a final sum.

If the final sum is less than or equal to the maximum value allowed for an Integer return the sum otherwise 
return "You've pushed me to the max!".

You can assume that you will receive a valid array of numbers.
*/

const maxedOut = arr => {
    const res = arr.reduce((sum, n) => sum + n ** 3, 0);
    return res < Number.MAX_SAFE_INTEGER ? res : "You've pushed me to the max!";
}

console.log(maxedOut([34433,7676,5432,9645,3245,6664,4223,1122357])) // "You've pushed me to the max!"
console.log(maxedOut([434,653,323,5645,322354,6534,323,556,23122,324])) // "You've pushed me to the max!"
console.log(maxedOut([0,0,0,0])) // 0
console.log(maxedOut([208063.830683574,6.19992349116331])) // 9007199254740990
console.log(maxedOut([1,2])) // 9
console.log(maxedOut([-530,230,5600,40,5,7200])) // 548727354125
console.log(maxedOut([7600,32300,66700,22200,4554,323000,5555])) // "You've pushed me to the max!"
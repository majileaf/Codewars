/* Difference between biggest 2 numbers
You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and 
the 2nd biggest number of the array.

You can assume that the input array has 2 or more elements.

The input array has the sort method disabled, so you will have to solve it in another way.

Example
[10, 5, 2]

In this case, the 1st biggest number is 10 and the 2nd biggest number is 5. So, the function returns 5, the result of 10 - 5.
*/

const diffBig2 = arr => {
    let [max, secondMax] = [-Infinity, -Infinity];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        }
        else if (arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }
    return max - secondMax;
}

console.log(diffBig2([2, 1])) // 1
console.log(diffBig2([8, 3, 1])) // 5
console.log(diffBig2([1, 8, 3])) // 5
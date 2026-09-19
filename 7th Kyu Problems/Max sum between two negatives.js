/* Max sum between two negatives
Task

You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements. 
No negative element should be present in the sum. If there is no such sum: -1 for Python, C++, JavaScript, Java, CoffeeScript and COBOL, 
Nothing for Haskell, None for Rust.

Example 1
[4, -1, 6, -2, 3, 5, -7, 7] -> 8
     ^      ^         ^

Sum between -1 and -2 is 6, between -2 and -7 is 3 + 5 = 8. It's also not 14 (between -1 and -7), 
because this includes a negative number (-2).

Example 2
[4, -1, -2] -> 0
     ^   ^

There is nothing between -1 and -2, so return 0.
*/

const maxSumBetweenTwoNegatives = a => {
    let sum = -1;
    let cur = 0;
    let start = false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0 && !start) start = !start;
        else if (a[i] < 0 && start) {
            sum = Math.max(cur, sum);
            cur = 0;
        }
        else if (a[i] > 0 && start) cur += a[i];
    }
    return sum;
}

console.log(maxSumBetweenTwoNegatives([-1,6,-2,3,5,-7])) // 8
console.log(maxSumBetweenTwoNegatives([5,-1,-2])) // 0
console.log(maxSumBetweenTwoNegatives([1,-2])) // -1
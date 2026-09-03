/* Simple Fun #5: Knapsack Light
Task
You found two items in a treasure chest! The first item weighs weight1 and is worth value1, 
and the second item weighs weight2 and is worth value2. What is the total maximum value of 
the items you can take with you, assuming that your max weight capacity is maxW/max_w and 
you can't come back for the items later?

Example
For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 8, the output should be 10.
You can only carry the first item.

For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 9, the output should be 16.
You're strong enough to take both of the items with you.

For value1 = 10, weight1 = 10, value2 = 6, weight2 = 10 and maxW = 9, the output should be 0.
Unfortunately, you're not strong enough to take any one :(

Input/Output
Arguments
    integer value1
    integer weight1
    integer value1
    integer weight1
    integer maxW/max_w

Contraints
    2≤valueN≤502 \leq valueN \leq 502≤valueN≤50
    2≤weightN≤302 \leq weightN \leq 302≤weightN≤30
    1≤maxW≤501 \leq maxW \leq 501≤maxW≤50

Output
    integer representing the maximum value of the items that can be carried
*/

const knapsackLight = (value1, weight1, value2, weight2, maxW) => {
    switch(true) {
        case (weight1 + weight2 <= maxW):          return value1 + value2;
        case (weight1 <= maxW && weight2 <= maxW): return Math.max(value1, value2);
        case (weight1 <= maxW):                    return value1;
        case (weight2 <= maxW):                    return value2;
        default: return 0;
    }
}

console.log(knapsackLight(10,5,6,4,8)) // 10
console.log(knapsackLight(10,5,6,4,9)) // 16
console.log(knapsackLight(10,2,11,3,1)) // 0
console.log(knapsackLight(15,2,20,3,2)) // 15
console.log(knapsackLight(2,5,3,4,5)) // 3
console.log(knapsackLight(4,3,3,4,4)) // 4
console.log(knapsackLight(3,5,3,8,10)) // 3
console.log(knapsackLight(15,3,20,2,2)) // 20
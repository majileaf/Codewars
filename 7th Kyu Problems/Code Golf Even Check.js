/* [Code Golf] Even Check
Create a function that accepts a number n, 1 <= n <= 1000, as a parameter and 
returns true if the number is even and false if the number is odd.

    The length of your code must be less than or equal to 19 characters
    You are not allowed to use the % operator
*/

evenCheck=n=>!(n&1)

console.log(evenCheck(5)) // false
console.log(evenCheck(8)) // true
console.log(evenCheck(7)) // false
console.log(evenCheck(100)) // true
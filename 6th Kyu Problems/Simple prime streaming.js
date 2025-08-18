/* Simple prime streaming
Consider a sequence made up of the consecutive prime numbers. This infinite sequence would start with:

"2357111317192329313741434753596167717379..."

You will be given two numbers: a and b, and your task will be to return b elements starting from index a in this sequence.

For example:
solve(10,5) == `19232` Because these are 5 elements from index 10 in the sequence.

Tests go up to about index 20000.

More examples in test cases. Good luck!
*/

const isPrime = n => {
    if (n === 2) return true;
    else if (n < 2 || n % 2 == 0) return false;

    for (let i = 3; i * i <= n; i+= 2) {
        if (n % i === 0) return false;
    }
    return true;
}

const solve = (a, b) => {
    let str = '';
    let i = 2;

    while (str.length < a + b) {
        if (isPrime(i)) str += i;
        i++;
    }
    return str.slice(a, a + b);
}

console.log(solve(2,2)) // '57'
console.log(solve(10,3)) // '192'
console.log(solve(20,9)) // '414347535'
console.log(solve(30,12)) // '616771737983'
console.log(solve(40,8)) // '83899710'
console.log(solve(50,6)) // '031071'
console.log(solve(10000,5)) // '02192'
console.log(solve(20000,5)) // '09334'
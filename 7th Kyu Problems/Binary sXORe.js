/* Binary sXORe
Given a number n, define its sXORe to be 0 XOR 1 XOR 2 ... XOR n where XOR is the bitwise XOR operator.

Write a function that takes n and finds its sXORe.

        n |   sXORe n
----------|----------
        0 |         0
        1 |         1
       50 |        51
1 000 000 | 1 000 000
*/

const sxore = n => {
    switch (n % 4) {
        case 0: return n;
        case 1: return 1;
        case 2: return (n + 1);
        case 3: return 0;
    }
}

console.log(sxore(0)) // 0
console.log(sxore(1)) // 1
console.log(sxore(2)) // 3
console.log(sxore(50)) // 51
console.log(sxore(1000000)) // 1000000
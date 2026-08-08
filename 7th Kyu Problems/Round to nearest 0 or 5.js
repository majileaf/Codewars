/* Round to nearest 0 or 5
Given an array of numbers, return an array, with each member of input array rounded to a nearest number, divisible by 5.

For example, given the following array:
[34.5, 56.2, 11, 13]

should return
[35, 55, 10, 15]
*/

// return the list with all numbers rounded to nearest 0 or 5
const findNextFive = n => {
    let i = 0;
    n = Math.round(n);
    if (n % 5 === 0) return n;

    while (true) {
        if ((n + i) % 5 === 0) return n + i;
        if ((n - i) % 5 === 0) return n - i;
        i++;
    }
}

console.log(roundToFive([34.5, 56.2, 11, 13])) // [35, 55, 10, 15]
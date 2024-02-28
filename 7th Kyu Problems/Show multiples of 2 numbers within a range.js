/* Show multiples of 2 numbers within a range
Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.
Python, Javascript, Java, Ruby versions: return results in a list/array

NOTICE:
Do NOT worry about checking zeros or negative values.
To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, 
it differs in each translation
*/

// Javascript: return multiples into an array
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const lcm = (a, b) => (a * b) / gcd(a, b);

const multiples = (s1, s2, s3) => {
    const arr = [];
    const start = lcm(s1, s2);

    for (let i = 1; start * i < s3; i++) {
        arr.push(start * i);
    }
    return arr;
}

console.log(multiples(2, 4, 40)) // [4, 8, 12, 16, 20, 24, 28, 32, 36]
console.log(multiples(13, 5, 800)) // [65, 130, 195, 260, 325, 390, 455, 520, 585, 650, 715, 780]
console.log(multiples(13, 15, 800)) // [195, 390, 585, 780]
console.log(multiples(17, 15, 800)) // [255, 510, 765]
console.log(multiples(27, 29, 2000)) // [783, 1566]
console.log(multiples(30, 27, 3393)) // [810, 1620, 2430, 3240]
/* Number , number ... wait LETTER !
Your task is to write a function that receives as its single argument a string that contains numbers delimited by single spaces. 
Each number has a single alphabet letter somewhere within it.

Example : "24z6 1x23 y369 89a 900b"

As shown above, this alphabet letter can appear anywhere within the number. You have to extract the letters and sort the numbers 
according to their corresponding letters.

Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246 (ordered according to the alphabet letter)

Here comes the difficult part, now you have to do a series of computations on the numbers you have extracted.

    The sequence of computations are + - * /. Basic math rules do NOT apply, you have to do each computation in exactly this order.
    This has to work for any size of numbers sent in (after division, go back to addition, etc).
    In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared first in the 
    input string.
    Remember to also round the final answer to the nearest integer.

Examples :
"24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
"24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
"10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60

Good luck and may the CODE be with you!
*/

const doMath = string => {
    const sign = ['+', '-', '*', '/'];
    const op = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => b ? a / b : null
    }

    const numbers = string
        .split(' ')
        .map(e => [+e.match(/\d/g).join(''), e.match(/[a-z]/g).join('')])
        .sort((a, b) => a[1].localeCompare(b[1]))
        .map(e => e[0]);

    return Math.round(numbers.slice(1).reduce((sum, n, i) => op[sign[i % 4]](sum, n), numbers[0]));
}

console.log(doMath("24z6 1z23 y369 89z 900b")) // 1414
console.log(doMath("24z6 1x23 y369 89a 900b")) // 1299
console.log(doMath("10a 90x 14b 78u 45a 7b 34y")) // 60
console.log(doMath("111a 222c 444y 777u 999a 888p")) // 1459
console.log(doMath("1z 2t 3q 5x 6u 8a 7b")) // 8
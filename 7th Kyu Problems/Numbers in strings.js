/* Numbers in strings
In this Kata, you will be given a string that has lowercase letters and numbers. 
Your task is to compare the number groupings and return the largest number. 
Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all 
number groupings.
*/

const solve3 = s => {
    let arr = [];
    let str = '';

    for (let i = 0; i < s.length; i++) {
        if (Number(s[i]) >= 0 && Number(s[i]) <= 9) str += s[i];

        if (!(Number(s[i + 1]) >= 0 && Number(s[i + 1]) <= 9) && str !== '') {
            arr.push(Number(str));
            str = '';
        }
    }
    return Math.max(...arr);
}

console.log(solve('gh12cdy695m1')) // 695
console.log(solve('2ti9iei7qhr5')) // 9
console.log(solve('vih61w8oohj5')) // 61
console.log(solve('f7g42g16hcu5')) // 42
console.log(solve('lu1j8qbbb85')) // 85
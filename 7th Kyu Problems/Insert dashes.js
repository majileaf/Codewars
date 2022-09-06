/* Insert dashes
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) 
that will insert dashes ('-') between each two odd digits in num. 

For example: if num is 454793 the output should be 4547-9-3. 
Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

const insertDash = num => {
    num = String(num);
    let str = num[0];

    for (let i = 1; i < num.length; i++) {
        (num[i - 1] % 2 !== 0 && num[i] % 2 !== 0) ? str += -num[i] : str += num[i];
    }
    return str;
}

console.log(insertDash(454793)) // '4547-9-3'
console.log(insertDash(123456)) // '123456'
console.log(insertDash(1003567)) // '1003-567'
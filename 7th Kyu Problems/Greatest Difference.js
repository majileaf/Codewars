/* Greatest Difference
Task: Find the number couple with the greatest difference from a list of number-couples.

Input: A list of number-couples, where each couple is represented as a string containing 
two positive integers separated by a hyphen ("-").

Output: The number couple with the greatest difference, or False if there is no difference 
among any of the couples or in case of an empty list.

Additional Information:
All number couples will be given as strings.
All numbers in the couples are positive integers.
If multiple couples have the same greatest difference, return the first one encountered in the input list.
If there is no difference (both numbers in a couple are equal), return False.
*/

const diff = str => {
    let arr = str.map(e => getDiff(e));
    let max = Math.max(...arr);
    let idx = arr.findIndex(e => e === max && max !== 0);
    return str[idx] || false;
}

const getDiff = str => {
    let [n1, n2] = [...str.split('-')];
    return Math.abs(n1 - n2);
}

console.log(diff(['23-32','32-23','2-6','98-98','100-101'])) // '23-32'
console.log(diff(['22-22','56-56'])) // false
console.log(diff(['52542-522','0-1000000'])) //'0-1000000'
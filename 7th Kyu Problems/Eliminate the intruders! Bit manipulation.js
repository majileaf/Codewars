/* Eliminate the intruders! Bit manipulation
You are given a string representing a number in binary. 
Your task is to delete all the unset bits in this string and 
return the corresponding number (after keeping only the '1's).

In practice, you should implement this function:
function eliminateUnsetBits(number);

Examples
eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
eliminateUnsetBits("111") ->  7
eliminateUnsetBits("1000000") -> 1
eliminateUnsetBits("000") -> 0
*/

const eliminateUnsetBits = number => parseInt(number.replace(/0/g, '') || 0, 2);

console.log(eliminateUnsetBits("11010101010101")) // 255
console.log(eliminateUnsetBits("111")) // 7
console.log(eliminateUnsetBits("1000000")) // 1
console.log(eliminateUnsetBits("000")) // 0
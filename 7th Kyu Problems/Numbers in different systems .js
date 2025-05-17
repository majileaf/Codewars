/* Numbers in different systems 
Translate number to the selected number system. 
If the number consists just of digits - return number, else - return string.

  SysNums(5,2) // 101
  SysNums(5,8) // 5
  SysNums(250,2) // 11111010
  SysNums(250,16) // "fa"

#####Hint: System can be 2, 8, 10, 16.
*/

const sysNums = (n, sys) => {
    const res = (n).toString(sys);
    return /[a-z]/.test(res) ? res : +res;
}

console.log(sysNums(5, 2)) // 101
console.log(sysNums(5, 8)) // 5
console.log(sysNums(250, 2)) // 11111010
console.log(sysNums(250, 16)) // "fa"
console.log(sysNums(135, 2)) // 10000111
console.log(sysNums(879, 8)) // 1557
console.log(sysNums(3894, 16)) // "f36"
console.log(sysNums(0, 2)) // 0
console.log(sysNums(0, 8)) // 0
console.log(sysNums(0, 10)) // 0
console.log(sysNums(0, 16)) // 0
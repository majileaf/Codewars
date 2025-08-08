/* Next bigger number with the same digits
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. 
For example:
  12 ==> 21
 513 ==> 531
2017 ==> 2071

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):
  9 ==> -1
111 ==> -1
531 ==> -1
*/

const nextBigger = n => {
    n = [...String(n)].map(Number);
    for (let i = n.length; i >= 0; i--) {
        if (n[i] > n[i - 1]) {
            const arr = n.slice(i).sort((a, b) => a - b);
            const swap = arr.find(e => e > n[i - 1]);
            const temp  = n[i - 1];
            n[i - 1] = swap;
            n[n.lastIndexOf(swap)] = temp;
            arr.splice(arr.indexOf(swap), 1, temp);
            return +[...n.slice(0, i), ...arr].join('');
        }
    }
    return -1;
}

console.log(nextBigger(12)) // 21
console.log(nextBigger(513)) // 531
console.log(nextBigger(2017)) // 2071
console.log(nextBigger(414)) // 441
console.log(nextBigger(144)) // 414

console.log(nextBigger(9)) // -1
console.log(nextBigger(111)) // -1
console.log(nextBigger(531)) // -1
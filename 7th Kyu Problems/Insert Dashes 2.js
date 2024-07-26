/* Insert Dashes 2
This is a follow up from my kata Insert Dashes.
Write a function insertDashII(num) that will insert dashes ('-') between each two odd numbers and 
asterisk ('*') between each even numbers in num

For example:
insertDashII(454793) --> 4547-9-3
insertDashII(1012356895) --> 10123-56*89-5

Zero shouldn't be considered even or odd.
*/

const insertDashII = num => {
   num = String(num);
   let str = num[0];

   for (let i = 1; i < num.length; i++) {
       (num[i - 1] % 2 !== 0 && num[i] % 2 !== 0) ? str += -num[i] :
       (num[i - 1] % 2 === 0 && num[i] % 2 === 0 && num[i] != 0 && num[i - 1] != 0) ? str += `*${num[i]}` 
       : str += num[i];
   }
   return str;
}

console.log(insertDashII(454793)) // '4547-9-3'
console.log(insertDashII(123456)) // '123456'
console.log(insertDashII(40546793)) // '4054*67-9-3'
console.log(insertDashII(1012356895)) // '10123-56*89-5'
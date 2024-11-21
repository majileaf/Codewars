/* Even and Odd !
Given a number N, can you fabricate the two numbers NE and NO such that NE is formed by even digits of N and NO 
is formed by odd digits of N? 

Examples:
input	NE	NO
126453	264	153
3012	2	31
4628	4628	0
0 is considered as an even number.

In C and JavaScript you should return an array of two elements such as the first is NE and the second is NO.
*/

const evenAndOdd = num => {
  let [NE, NO] = ['', ''];
  num = String(num);
  for (let i = 0; i < num.length; i++) {
      (num[i] % 2 === 0) ? NE += num[i] : NO += num[i];
  }
  return [+NE, +NO];
}

console.log(evenAndOdd(126453)) // [264, 153]
console.log(evenAndOdd(3012)) // [2, 31]
console.log(evenAndOdd(4628)) // [4628, 0]
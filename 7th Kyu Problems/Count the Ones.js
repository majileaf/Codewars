/* Count the Ones
The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. 
There are several algorithms for efficient computing of the Hamming weight for numbers. 

In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number. Thus,
hammingWeight(10) // 1010  => 2
hammingWeight(21) // 10101 => 3

The interesting part of this task is that you have to do it without string operation (hey, it's not really interesting otherwise)
;)
*/

const convertToBin = n => {
    let str = '';
    let shift = n;
    let i = 0;
    
    while (i < 32) {
        str += String(shift >>> 31);
        shift <<= 1;
        i++;
    }
    return str;
}

const hammingWeight = x => [...convertToBin(x)].filter(e => e == 1).length;

console.log(hammingWeight(-1)) // 32
console.log(hammingWeight(10)) // 1010  => 2
console.log(hammingWeight(21)) // 10101 => 3
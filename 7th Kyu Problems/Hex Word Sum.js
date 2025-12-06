/* Hex Word Sum
Description
As hex values can include letters A through to F, certain English words can be spelled out, such as CAFE, BEEF, or FACADE. 
This vocabulary can be extended by using numbers to represent other letters, such as 5EAF00D, or DEC0DE5.

Given a string, your task is to return the decimal sum of all words in the string that can be interpreted as such hex values.
Example

Working with the string "BAG OF BEES":
"BAG"  =  0, as it is not a valid hex value  
"OF"   =  0F   =  15
"BEES" =  BEE5 =  48869

So the result is the sum of these: 48884 (0 + 15 + 48869)

Notes
    Inputs are all uppercase and contain no punctuation
    0 can be substituted for O
    5 can be substituted for S
*/

const hexWordSum = string => string
    .replace(/[OS]/g, char => ({O: 0, S: 5})[char])
    .split(' ')
    .map(word => /^[A-F0-9]+$/.test(word) ? parseInt(word, 16) : 0)
    .reduce((sum, n) => sum + n, 0);

console.log(hexWordSum('BAG OF BEES')) // 48884
console.log(hexWordSum('DEFACE')) // 14613198, 'Should convert hex to decimal correctly'
console.log(hexWordSum('SAFE')) // 23294, 'Should be able to interpret "S" as "5"'
console.log(hexWordSum('CODE')) // 49374, 'Should be able to interpret "O" as "0"'
console.log(hexWordSum('BUGS')) // 0, 'A word that cannot be converted to hex has value of 0'
console.log(hexWordSum('')) // 0, 'Empty string returns 0'
console.log(hexWordSum('DO YOU SEE THAT BEE DRINKING DECAF COFFEE')) // 13565769, 'Should work with multiple words'
console.log(hexWordSum('ASSESS ANY BAD CODE AND TRY AGAIN')) // 10889952, 'Should work with multiple words'
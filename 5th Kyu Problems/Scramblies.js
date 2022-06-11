/*
Complete the function scramble(str1, str2) that returns true if a portion of 
str1 characters can be rearranged to match str2, otherwise returns false.

Notes:
Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.

Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

const scramble = (str1, str2) => {
    const obj1 = [...str1].reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    const obj2 = [...str2].reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    
    return Object.entries(obj2).every(([key, value]) => obj1[key] && value <= obj1[key]);
}

console.log(scramble('rkqodlw','world')) // true
console.log(scramble('cedewaraaossoqqyt','codewars')) // true
console.log(scramble('katas','steak')) // false
console.log(scramble('scriptjavx','javascript')) // false
console.log(scramble('scriptingjava','javascript')) // true
console.log(scramble('scriptsjava','javascripts')) // true
console.log(scramble('javscripts','javascript')) // false
console.log(scramble('jscripts','javascript')) // false
console.log(scramble('aabbcamaomsccdd','commas')) // true
console.log(scramble('commas','commas')) // true
console.log(scramble('sammoc','commas')) // tru
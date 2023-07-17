/* Order of weight
Given an array of strings, sort the array into order of weight from light to heavy.

Weight units are grams(G), kilo-grams(KG) and tonnes(T).

Arrays will always contain correct and positive values aswell as uppercase letters.
*/

// intial solution:
// const arrange = arr => {
//     const unit = arr.reduce((sum, n) => (sum[n] = convert(n), sum), {});
//     return Object.keys(unit).sort((a, b) => unit[a] - unit[b]);
// }
// const convert = str => 
//     str.includes('T')  ? +str.split('T')[0] * 10e6 :
//     str.includes('KG') ? +str.split('KG')[0] * 10e3  
//     : +str.split('G')[0];

// improving #1
// const arrange = arr => arr.sort((a, b) => convert(a) - convert(b));
// const convert = str => 
//     str.includes('T')  ? +str.split('T')[0] * 10e6 :
//     str.includes('KG') ? +str.split('KG')[0] * 10e3  
//     : +str.split('G')[0];

// improving #2
const arrange = arr => arr.sort((a, b) => convert(a) - convert(b));
const convert = str => +str.replace(/T|KG|G/g, char => ({'T': '000000', 'KG': '000', 'G': ''})[char]);

console.log(arrange(["200G","300G","150G","100KG"])) // ["150G","200G","300G","100KG"]
console.log(arrange(["400G","100T","150KG","100G"])) // ["100G","400G","150KG","100T"]
console.log(arrange(["4T","300G","450G","900KG"])) // ["300G","450G","900KG","4T"]
console.log(arrange(["400T","100T","1T","100G"])) // ["100G","1T","100T","400T"]
console.log(arrange(["1G","2KG","3T","100KG"])) // ["1G","2KG","100KG","3T"]
console.log(arrange(["100KG","100G","150T","150KG"])) // ["100G","100KG","150KG","150T"]
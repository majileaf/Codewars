/* PopShift
You will be given a string.
You need to return an array of three strings by gradually pulling apart the string.
You should repeat the following steps until the string length is 1:

a) remove the final character from the original string, add to solution string 1.
b) remove the first character from the original string, add to solution string 2.

The final solution string value is made up of the remaining character from the original string, 
once originalstring.length == 1.

Example:
"exampletesthere" becomes: ["erehtse","example","t"]

The Kata title gives a hint of one technique to solve.
*/

// initial solution:
// const popShift = s => {
//     const str1 = [...s.slice(Math.ceil(s.length / 2))].reverse().join('');
//     const str2 = s.slice(0, Math.floor(s.length / 2));
//     const str3 = s.length % 2 ? s[Math.floor(s.length / 2)] : ''; 

//     return [str1 , str2, str3];
// }

const popShift = s => {
   let [str1, str2, str3] =  [[], [], [...s]];

    while (str3.length > 1) {
        str1.push(str3.pop());
        str2.push(str3.shift());
    }

    return [str1.join('') , str2.join(''), str3.join('')];
}

console.log(popShift("reusetestcasesbitcointakeovertheworldmaybewhoknowsperhaps")) // ["spahrepswonkohwebyamdlroweht","reusetestcasesbitcointakeove", "r"]
console.log(popShift("turnsoutrandomtestcasesareeasierthanwritingoutbasicones")) // ["senocisabtuognitirwnahtreis","turnsoutrandomtestcasesaree", "a"]
console.log(popShift("exampletesthere")) // ["erehtse","example","t"]
/* Simple string characters
In this Kata, you will be given a string and your task will be to return 
a list of ints detailing the count of uppercase letters, lowercase, numbers 
and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
*/

// initial
// const solve10 = s => {
//     let [upperCase, lowerCase, number, special] = [0, 0, 0, 0];

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] >= 'A' && s[i] <= 'Z') upperCase++;
//         else if (s[i] >= 'a' && s[i] <= 'z') lowerCase++;
//         else if (s[i] >= 0 && s[i] <= 9) number++;
//         else special++;
//     }
    
//     return [upperCase, lowerCase, number, special];
// }

const solve10 = s => {
    return [...s].reduce(([upperCase, lowerCase, number, special], n) => (
        n >= 'A' && n <= 'Z' ? upperCase++ :
        n >= 'a' && n <= 'z' ? lowerCase++ :
        n >= '0' && n <= '9' ? number++ :
        special++, [upperCase, lowerCase, number, special])
    , [0, 0, 0, 0])
}

console.log(solve("")) // [0,0,0,0]
console.log(solve("aAbBcC")) // [3,3,0,0]
console.log(solve("Codewars@codewars123.com")) // [1,18,3,2]
console.log(solve("bgA5<1d-tOwUZTS8yQ")) // [7,6,3,2]
console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H")) // [9,9,6,9]
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD")) // [15,8,6,9]
console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe")) //  [10,7,3,6
console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft")) //  [7,13,4,10]
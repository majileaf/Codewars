/*
Count the number of Duplicates
Write a function that will return the count of distinct 
case-insensitive alphabetic characters and numeric digits 
that occur more than once in the input string. 

The input string can be assumed to contain only alphabets 
(both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// initital solution:
// const duplicateCount = text => {
//     const itext = text.toLowerCase();
//     let obj = {};

//     for (let i = 0; i < itext.length; i++) {
//         obj[itext[i]] ? obj[itext[i]]++ : obj[itext[i]] = 1;
//     }

//     Object.filter = (obj, predicate) => 
//         Object.keys(obj)
//             .filter( key => predicate(obj[key]) )
//             .reduce( (res, key) => (res[key] = obj[key], res), {} );

//     const filtered = Object.filter(obj, value => value > 1); 

//     return Object.keys(filtered).length;
// }

const duplicateCount = text => {
    const itext = text.toLowerCase();
    let obj = {};
    for (let i = 0; i < itext.length; i++) {
        obj[itext[i]] ? obj[itext[i]]++ : obj[itext[i]] = 1;
    }

    let count = 0;
    for (key in obj) {
        if (obj[key] > 1) count++
    }
    return count;
}

console.log(duplicateCount("")) // 0
console.log(duplicateCount("abcde")) // 0
console.log(duplicateCount("aabbcde")) // 2
console.log(duplicateCount("aabBcde")) // 2,"should ignore case"
console.log(duplicateCount("Indivisibility")) // 1
console.log(duplicateCount("Indivisibilities")) // 2, "characters may not be adjacent"
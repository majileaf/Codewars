/*
An anagram is the result of rearranging the letters of 
a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments 
given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"
*/

// initial solution:
// const sortString = str => str.toLowerCase().split('').sort().join('');
// const isAnagram = (test, original) => sortString(test) === sortString(original);

// alternative #2:
// const isAnagram = (test, original) => {
//     if (test.length !== original.length) return false;
//     const obj = {};
//     const fusion = test.toLowerCase() + original.toLowerCase();

//     for (let i = 0; i < fusion.length; i++) {
//         if (obj[fusion[i]]) delete obj[fusion[i]];
//         else obj[fusion[i]] = true;
//     }
//     return Object.keys(obj).length === 0;
// }

const isAnagram = (test, original) => {
    if (test.length !== original.length) return false;
    const obj = {};
    const lcTest = test.toLowerCase();
    const lcOriginal = original.toLowerCase();

    for (let i = 0; i < lcOriginal.length; i++) {
        (obj[lcOriginal[i]]) ? obj[lcOriginal[i]]++ : obj[lcOriginal[i]] = 1;
    }

    for (let i = 0; i < lcTest.length; i++) {
        (obj[lcTest[i]]) ? obj[lcTest[i]]-- : obj[lcTest[i]] = 1;
    }

    return Object.keys(obj).every(key => obj[key] === 0);
}

console.log(isAnagram("foefet", "toffee")) // true, 'The word foefet is an anagram of toffee'
console.log(isAnagram("Buckethead", "DeathCubeK")) // true, 'The word Buckethead is an anagram of DeathCubeK'
console.log(isAnagram("Twoo", "WooT")) // true, 'The word Twoo is an anagram of WooT'

console.log(isAnagram("dumble", "bumble")) // false, 'Characters do not match for test case dumble, bumble'
console.log(isAnagram("ound", "round")) // false, 'Missing characters for test case ound, round'
console.log(isAnagram("apple", "pale")) // false, 'Same letters, but different count'
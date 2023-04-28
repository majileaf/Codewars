/* Ch4113ng3
Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 
e.g. "Fundamentals" --> "Fund4m3nt41s"
*/

// initial solution:
// const nerdify = txt => txt
//     .replace(/[ae]/gi, char => ({'a': '4','e': '3'})[char.toLowerCase()])
//     .replace(/l/g, '1');

const nerdify = txt => txt
    .replace(/[aAeEl]/g, char => ({'a': '4','e': '3', 'l': '1'})[char.toLowerCase()])

console.log(nerdify("Fund4m3nt41s")) // "Fund4m3nt41s"
console.log(nerdify("Seven")) // "S3v3n"
console.log(nerdify("Los Angeles")) // "Los 4ng313s"
console.log(nerdify("Seoijselawuue")) // "S3oijs314wuu3"
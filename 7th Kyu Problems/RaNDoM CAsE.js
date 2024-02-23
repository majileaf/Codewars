/* RaNDoM CAsE
Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

A few examples:
randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == "lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"
randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"

Notes:
This function will work within the basic ASCII character set to make this kata easier - so no need to make the function multibyte safe.
The letters MUST be selected randomly - filters are set to make sure there is no cheating!
*/

// initial solution:
// const randomCase = x => [...x].map(e => Math.random() < 0.5 ? e.toUpperCase() : e.toLowerCase()).join('');

const randomCase = x => x.replace(/[a-z]/gi, e => Math.random() < 0.5 ? e.toUpperCase() : e.toLowerCase());

console.log(randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit")) //
console.log(randomCase("Donec eleifend cursus lobortis")) //
console.log(randomCase("THIS IS AN ALL CAPS STRING")) //
console.log(randomCase("this is an all lower string")) //
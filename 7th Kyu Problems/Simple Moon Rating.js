/* Simple Moon Rating
When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes. 
While it is very informative, it's not very visually appealing. That's what stars, or in our case- moons, are created for.

Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale. 
Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.

Write a function which returns valid rating represented as moons ('o','c','x') in single string.

You are given the following values preloaded (the moons in brackets are here just to improve your imagination):

More examples in test cases.
*/

const moonRating = rating => {
    const fullMoon = Math.floor(Math.round(rating) / 2);
    const halfMoon = Math.round(rating) % 2;
    const newMoon = 5 - fullMoon - halfMoon;
    return 'o'.repeat(fullMoon) + 'c'.repeat(halfMoon) + 'x'.repeat(newMoon);
}

console.log(moonRating(  0)) // 'xxxxx'
console.log(moonRating(0.6)) // 'cxxxx'
console.log(moonRating(1.5)) // 'oxxxx'
console.log(moonRating(3.9)) // 'ooxxx'
console.log(moonRating(  5)) // 'oocxx'
console.log(moonRating(  6)) // 'oooxx'
console.log(moonRating(7.2)) // 'ooocx'
console.log(moonRating(8.7)) // 'ooooc'
console.log(moonRating( 10)) // 'ooooo'
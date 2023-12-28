/* Capitals first!
Create a function that takes an input String and returns a String, where all the uppercase words 
of the input String are in front and all the lowercase words at the end. 
The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.
Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"
*/

const capitalsFirst = str => {
    const [upper, lower] = str
        .split(' ')
        .reduce(([up, low], n) => (
            /[A-Z]/.test(n[0]) ? up.push(n) :
            /[a-z]/.test(n[0]) ? low.push(n) 
            : [up, low]
        , [up, low]), [[], []]);
    return [...upper, ...lower].join(' ');
}

console.log(capitalsFirst("hey You, Sort me Already!")) // "You, Sort Already! hey me"
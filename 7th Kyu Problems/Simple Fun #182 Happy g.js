/* Simple Fun #182: Happy "g"
Task
Let's say that "g" is happy in the given string, if there is another "g" immediately to the right or to the left of it.

Find out if all "g"s in the given string are happy.

Example
For str = "gg0gg3gg0gg", the output should be true.
For str = "gog", the output should be false.

Input/Output
    [input] string str

A random string of lower case letters, numbers and spaces.
    [output] a boolean value

true if all "g"s are happy, false otherwise.
*/

const gHappy = str => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'g' && str[i + 1] !== 'g' && str[i - 1] !== 'g') return false;
    }
    return true;
}

console.log(gHappy("")) // true
console.log(gHappy("gg0gg3gg0gg")) // true
console.log(gHappy("gog")) // false
console.log(gHappy("ggg ggg g ggg")) // false
console.log(gHappy("A half of a half is a quarter.")) // true
console.log(gHappy("good grief")) // false
console.log(gHappy("bigger is ggooder")) // true
console.log(gHappy("gggggggggg")) // true
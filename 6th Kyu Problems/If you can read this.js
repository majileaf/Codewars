/* If you can read this...
The idea for this kata came from 9gag today: (http://9gag.com/gag/amrb4r9)
The lyrics to "Never gonna give you up" by Rick Astley encoded in the NATO phonetic alphabet

Task
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:
If, you can read?

Output:
India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:
    There is a preloaded dictionary that you can use, named NATO. It uses uppercase keys, e.g. NATO['A'] is "Alfa". 
      See comments in the initial code to see how to access it in your language.
    The set of used punctuation is ,.!?.
    Punctuation should be kept in your return string, but spaces should not.
    Xray should not have a dash within.
    Every word and punctuation mark should be seperated by a space ' '.
    There should be no trailing whitespace
*/

const NATO = { A: 'Alfa', N: 'November', B: 'Bravo', O: 'Oscar', C: 'Charlie', P: 'Papa', D: 'Delta', Q: 'Quebec', E: 'Echo', R: 'Romeo', F: 'Foxtrot', S: 'Sierra', G: 'Golf', T: 'Tango', H: 'Hotel', U: 'Uniform', I: 'India', V: 'Victor', J: 'Juliett', W: 'Whiskey', K: 'Kilo', X: 'Xray', L: 'Lima', Y: 'Yankee', M: 'Mike', Z: 'Zulu' }

const toNato = words => words ? words
    .match(/[a-z,.!?]+/gi)
    .join('')
    .split('')
    .map(e => NATO[e.toUpperCase()] || e)
    .join(' ') : '';

// alternatively:
// const toNato = words => words ? words
//     .replace(/\s/g, '')
//     .split('')
//     .map(e => NATO[e.toUpperCase()] || e).join(' ') : '';

console.log(toNato('If you can read')) // 'India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta'
console.log(toNato('Did not see that coming')) // 'Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf'
console.log(toNato('go for it!')) // 'Golf Oscar Foxtrot Oscar Romeo India Tango !'
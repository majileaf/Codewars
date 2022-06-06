/*
You are given a secret message you need to decipher. 
Here are the things you need to know to decipher it:

For each word:
the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples
decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

// initial solution:
// const checkCode = n => n >= 65 && n <= 90 || n >= 97 && n <= 122;

// const decipherThis = text => text
//     .split(' ')
//     .map(e =>
//         checkCode(e)
//             ? String.fromCharCode(e) 
//         : checkCode(e.slice(0, -1))
//             ? String.fromCharCode(e.slice(0, -1)) + e.slice(-1)
//         : checkCode(e.slice(0, 2)) && e.slice(2).length === 2
//             ? String.fromCharCode(e.slice(0, 2)) + e.slice(-1) + e.slice(2, -2) + e.slice(2, 3)
//         : checkCode(e.slice(0, 3)) && e.slice(3).length === 2
//             ? String.fromCharCode(e.slice(0, 3)) + e.slice(-1) + e.slice(3, -3) + e.slice(3, 4)
//         : checkCode(e.slice(0, 2)) && e.slice(2).length > 2
//             ? String.fromCharCode(e.slice(0, 2)) + e.slice(-1) + e.slice(3, -1) + e.slice(2, 3)
//             : String.fromCharCode(e.slice(0, 3)) + e.slice(-1) + e.slice(4, -1) + e.slice(3, 4))
//     .join(' ');

const decipherThis = text => text
    .split(' ')
    .map(e => {
        const num = parseFloat(e) || '';
        const word = e.split(num)[1];

        if (word.length === 1) return String.fromCharCode(num) + word;
        return String.fromCharCode(num) + word.slice(-1) + word.slice(1, -1) + word.slice(0, 1);
    })
    .join(' ') 

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')) // 'Have a go at this and see how you do'
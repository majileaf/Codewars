/* The rarest pepe
The pepe market is on the verge of collapse. In a last-ditch attempt to make some quick cash, 
you decide to sift through the thousands of pepes on the internet to identify the rarest ones, 
which are worth more. Since doing this by hand would be tedious, you decide to use your 
programming skills to streamline the process.

Your task in this kata is to implement a function that, given a non-empty list of pepes (pepes), 
returns the rarest pepe in the list.

    If two or more pepes are equally rare, return a sorted list of these pepes.
    If the rarest pepe (or pepes) has a frequency of 5 or more, then there are no truly rare pepes, 
    so your function should return "No rare pepes!".

More info on rare pepes here.
*/

const findRarestPepe = pepes => {
    const count = pepes.reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    const min = Math.min(...Object.values(count));
    if (min > 4) return 'No rare pepes!';
    const res = Object.keys(count).filter(e => count[e] === min);
    return res.length === 1 ? res[0] : res.sort();
}

// Single rare pepe
let pepes = [
    'Filler Pepe', 'Fillera Pepe',
    'Clown Pepe', 'Clown Pepe', 'Filler Pepe'
];
console.log(findRarestPepe(pepes)) // 'Fillera Pepe'

// Multiple rare pepes
pepes = [
    'Go Pepe', 'Deep Learning Pepe', 'Machine Learning Pepe',
    'Machine Learning Pepe', 'Machine Learning Pepe'
];
console.log(findRarestPepe(pepes)) // ['Deep Learning Pepe', 'Go Pepe']

// No rare pepes
pepes = [
    'Codewars Pepe', 'Codewars Pepe', 'Codewars Pepe',
    'Codewars Pepe', 'Codewars Pepe'
];
console.log(findRarestPepe(pepes)) // 'No rare pepes!'
/* The Baby Years III - First Tooth
Baby is getting his frst tooth. This means more sleepless nights, but with the fun of 
feeling round his gums and trying to guess which will be first out!

Probably best have a sweepstake with your friends - because you have the best chance 
of knowing. You can feel the gums and see where the raised bits are - most raised, 
most likely tooth to come through first!

Given an array of numbers (t) to represent baby's gums, you need to return the index 
of the lump that is most pronounced.

The most pronounced lump is the one that has the biggest differential to its surrounding 
values. e.g.:

[1, 2, 4] = 2
index 0 has a differential of -1 to its right (it is lower so the figure is negative)
index 1 has a differential of +1 to its left, and -2 to its right. Total is -1.
index 2 has a differential of +2 to its left, and nothing to its right, 

If there is no distinct highest value (more than one occurence of the largest differential), 
return -1.
*/

const firstTooth = t => {
    if (t.length === 1) return 0;
    const diff = t.map((_, i) => ((t[i] - t[i - 1]) || 0) + ((t[i] - t[i + 1]) || 0));
    const maxDiff = Math.max(...diff);
    return diff.indexOf(maxDiff) === diff.lastIndexOf(maxDiff) ? diff.indexOf(maxDiff) : -1;
}

// alternatively:
// const firstTooth = t => {
//     const diff = t.map((_, i) => ((t[i] - t[i - 1]) || 0) + ((t[i] - t[i + 1]) || 0));
//     const maxDiff = Math.max(...diff);
//     return diff.indexOf(maxDiff) === diff.lastIndexOf(maxDiff) ? diff.indexOf(maxDiff) : -1;
// }

console.log(firstTooth([1, 2, 3, 4])) // 3
console.log(firstTooth([1, 2, 6, 4])) // 2
console.log(firstTooth([1, 2, 5, 7, 1, 0, 9])) // 6
console.log(firstTooth([9, 2, 8, 1])) // 2
console.log(firstTooth([1, 1, 1, 1])) // -1
console.log(firstTooth([20,9,16,19])) // 0
console.log(firstTooth([15])) // 0
/* Mean vs. Median
Your goal is to implement the method meanVsMedian which accepts an odd-length 
array of integers and returns one of the following:

'mean' - in case mean value is larger than median value
'median' - in case median value is larger than mean value
'same' - in case both mean and median share the same value

Reminder: Median (https://en.wikipedia.org/wiki/Median)
Array will always be valid (odd-length >= 3)
*/

const meanVsMedian = numbers => {
    numbers = numbers.sort((a, b) => a - b);
    const mean = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
    const median = numbers[(numbers.length - 1) / 2];
    return mean > median ? 'mean' : 
           mean < median ? 'median' :
           'same';
}

console.log(meanVsMedian([1, 1, 1])) // 'same'
console.log(meanVsMedian([1, 2, 37])) // 'mean'
console.log(meanVsMedian([7, 14, -70])) // 'median'
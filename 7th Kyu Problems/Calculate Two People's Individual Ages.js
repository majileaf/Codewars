/* Calculate Two People's Individual Ages
Create a function that takes in the sum and age difference of two people, 
calculates their individual ages, and returns a pair of values 
(oldest age first) if those exist or null/None if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative
*/

const getAges = (sum, difference) => {
    if (sum < 0 || difference < 0 || difference > sum) return null;
    const mid = (sum - difference) / 2;
    return [mid + difference, mid];
}

console.log(getAges(24,4)) // [14,10]
console.log(getAges(63,-14)) // null
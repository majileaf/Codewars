/* Simple Fun #144: Distinct Digit Year
Task
The year of 2013 is the first year after the old 1987 with only distinct digits.

Now your task is to solve the following problem: given a year number, find the minimum year number 
which is strictly larger than the given one and has only distinct digits.

Input/Output
    [input] integer year

1000 ≤ year ≤ 9000
    [output] an integer

the minimum year number that is strictly larger than the input number year and all its digits are distinct.
*/

const isDistinct = n => {
    const count = [...String(n)].reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    return Object.values(count).every(e => e === 1);
}

const distinctDigitYear = year => {
    while (true) {
        if (isDistinct(++year)) return year;
    }
}

console.log(distinctDigitYear(1987)) // 2013
console.log(distinctDigitYear(2013)) // 2014
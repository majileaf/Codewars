/*
Complete the method which returns the number which is most frequent 
in the given input array. If there is a tie for most frequent number, 
return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

const highestRank = arr => {
    const count = arr.reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    const maxfreq = Math.max(...Object.values(count));
    return Math.max(...Object.keys(count).filter(value => count[value] === maxfreq));
}

const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])) // 12
console.log(highestRank([12, 10, 8, 12, 7, 7, 7, 10, 12])) // 12
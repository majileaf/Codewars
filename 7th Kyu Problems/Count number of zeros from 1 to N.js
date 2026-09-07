/* Count number of zeros from 1 to N
Create an algorithm to count the number of zeros that appear between 1 and N.

Examples
 10  -->   1  // 10
 20  -->   2  // 10, 20
100  -->  11  // 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
200  -->  31
*/

const countZeros = n => {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        count += (String(i).match(/0/g) || []).length;
    }
    return count;
}

console.log(countZeros(10)) // 1
console.log(countZeros(100)) // 11
console.log(countZeros(200)) // 31
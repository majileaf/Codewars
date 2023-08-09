/* Always perfect
While surfing in web I found interesting math problem called "Always perfect". 
That means if you add 1 to the product of four consecutive numbers the answer 
is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will 
be 1X2X3X4=24. 

If we add 1 to the product that would become 25, since the result number is a 
perfect square the square root of 25 would be 5.

So now lets write a function which takes numbers separated by commas in string 
format and returns the number which is a perfect square and the square root of 
that number.

If string contains other characters than number or it has more or less than 
4 numbers separated by comma function returns "incorrect input".

If string contains 4 numbers but not consecutive it returns "not consecutive".
*/

const checkRoot = string => {
    const arr = string.split(',');
    let count = 0;
    let prod = 1;

    if (arr.length !== 4) return 'incorrect input';
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(+arr[i]) && arr[i] != 0) {
            prod *= Number(arr[i]);
            count++;
        } else {
            return 'incorrect input';
        }
        if (i > 0 && arr[i] - arr[i - 1] !== 1) return 'not consecutive';
    }

    return `${prod + 1}, ${Math.sqrt(prod + 1)}`;
}

console.log(checkRoot('4,5,6,7')) // '841, 29'
console.log(checkRoot('3,s,5,6')) // 'incorrect input'
console.log(checkRoot('11,13,14,15')) // 'not consecutive'
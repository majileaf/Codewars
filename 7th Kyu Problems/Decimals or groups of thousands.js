/* Decimals or groups of thousands??
Countries such as the U.S. and China use a dot to represent a decimal point, 
they also use a comma to seperate groups of thousands e.g. 4,353.56

Other countries (mostly in Europe) instead use a comma to represent a decimal point, 
they also use a dot to seperate groups of thousands e.g. 4.353,56

Your task is to sum up an array of string repensentation of numbers being in one of 
the two formats mentioned above with AT MOST two decimal places. 

The resulted sum should be a string with the format of xx,xxx.xx (keep two decimal places, 
seperate groups of thousands with comma if necessary)

This Kata is inspired by one of the bugs that almost happened due to the differences in number formatting ( •̀ω•́ )σ
*/

const convertToNum = str => str.replace(/,(\d{3})$/, '$1.00').replace(/[^\d]/g, '.').replace(/[.](?=.*[.])/g, '');
const sumUpNumbers = arr => {
    const n = arr.map(e => +convertToNum(e)).reduce((sum, n) => sum + n, 0).toFixed(2);
    return n % 1 === 0 ? n : (+n).toLocaleString();
}

console.log(sumUpNumbers(["1,234.34", "1.324,2", "14"])) // "2,572.54"
console.log(sumUpNumbers(["27"])) // "27.00"
console.log(sumUpNumbers(["27.123"])) // "27.12"
console.log(sumUpNumbers([ '4,444,999', '8.234,1', '14,56' ])) // '4,453,247.66'
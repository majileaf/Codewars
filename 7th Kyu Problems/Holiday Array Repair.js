/* Holiday Array Repair
The Problem
A colleague has been working on a program that returns the number of days of holiday that people in your coding company 
can take in the remainder of the year.

The colleague’s program outputs the number of holidays each employee has left as an integer within an array. 
However, the program is not working properly. Alongside the element that specifies the number of holidays are 
several other useless elements. These other elements are of a variety of data types and none are integers.

Your colleague boasts that he has more days of holiday left than you.

Your Task
Array1 contains one integer that specifies the number of days of holiday that your colleague has left. 
Array2 contains one integer with the number of days of holiday that you have left. 
Each of the two arrays will never contain more than a single integer.

If your colleague is telling the truth, the function should return the string "Right". 
If your colleague is wrong, the function should return the string "Wrong". 
If you both have the same number of days of holiday, the function should return the string "same". 
If your colleague's program is beyond repair and does not produce an integer in either arrays, 
the function should return a string "Not possible".
*/

const holidayCount = (a1, a2) => {
    const col = a1.filter(e => Number.isInteger(e));
    const me  = a2.filter(e => Number.isInteger(e));
    if (!col.length || !me.length) return 'Not possible';
    return col[0] > me[0]   ? 'Right' : 
           col[0] < me[0]   ? 'Wrong' :
           'Same';
}

console.log(holidayCount(["g", 3, "a"], ["j", 2, "r"])) // "Right"
console.log(holidayCount(["code", "is", "good", "I", "hope", 35], [102, "and", "hopefully", "also", "this", "passes"])) // "Wrong"
console.log(holidayCount([null, 156, "h",], [156])) // "Same"
console.log(holidayCount(['a'], ['b'])) // "Not possible"
console.log(holidayCount(['a'], ['b', 1])) // "Not possible"
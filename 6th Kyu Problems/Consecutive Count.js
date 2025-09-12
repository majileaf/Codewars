/* Consecutive Count
I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. 
Return the length of the longest segment of consecutive keys in the given items.

Notes:
    The items and the key will be either an integer or a string (consisting of letters only)
    If the key does not appear in the items, return 0

Examples
90000, 0           -->  4
"abcdaaadse", "a"  -->  3
"abcdaaadse", "z"  -->  0
*/

const getConsectiveItems = (items, key) => {
    if (!(String(items).includes(key))) return 0;
    return String(items).match(new RegExp(`${key}+`, 'g')).sort((a, b) => b.length - a.length)[0].length;
}

console.log(getConsectiveItems(90000, 0)) // 4
console.log(getConsectiveItems(90000, 1)) // 0
console.log(getConsectiveItems('ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii', 'i')) // 11
console.log(getConsectiveItems('ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii', 'z')) // 0
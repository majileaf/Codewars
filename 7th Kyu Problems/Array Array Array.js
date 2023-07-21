/* Array Array Array
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, 
the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same 
as (x) and the number of sub arrays should be equal to the score.

For example:
if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/

const explode = ([x, y]) => {
    const checkX = typeof x === 'number';
    const checkY = typeof y === 'number';

    if (!checkX && !checkY) return  'Void!';
    const score = checkX && checkY ? x + y : checkX ? x : y;

    return [...Array(score)].fill([x, y]);
}

console.log(explode([9, 3])) // [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
console.log(explode(['a', 3])) // [['a', 3], ['a', 3], ['a', 3]]
console.log(explode([6, 'c'])) // [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]
console.log(explode(['a', 'b'])) // 'Void!'
console.log(explode(["a", 0])) // []
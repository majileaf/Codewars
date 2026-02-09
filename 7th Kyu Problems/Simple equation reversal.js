/* Simple equation reversal
Given a mathematical equation that has *,+,-,/, reverse it as follows:

solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"
*/

const solve = eq => {
    const nums = eq.match(/\d+|\w/g).reverse();
    const ops = eq.match(/[^\d\w]/g).reverse();;
    return [...Array(nums.length)].map((_, i) => nums[i] + (ops[i] || '')).join('');
}

console.log(solve("100*b/y")) // "y/b*100"
console.log(solve("a+b-c/d*30")) // "30*d/c-b+a"
console.log(solve("a*b/c+50")) // "50+c/b*a"
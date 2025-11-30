/* The most common letter
Find the most common letter (not a space) in the given string (comprised of at least 3 lowercase words) and 
replace it with the given letter.

If such letters are two or more, choose the one that appears earliest in the string.

For example:
('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'
*/

const replaceCommon = (string, letter) => {
    const count = [...string].reduce((sum, n) => (/[a-z]/gi.test(n) ? sum[n] = (sum[n] || 0) + 1 : sum, sum), {});
    const max = Math.max(...Object.values(count));
    const replacedLetter = Object.keys(count).filter(e => count[e] === max)[0];
    return string.replace(new RegExp(`${replacedLetter}`, 'g'), letter);
}

console.log(replaceCommon('my mom loves me as never did', 't')) // 'ty tot loves te as never did'
console.log(replaceCommon('real talk bro', 'n')) // 'neal talk bno'
console.log(replaceCommon('great job go ahead', 'k')) // 'grekt job go khekd'
console.log(replaceCommon('yyyaaa twwww ttt uuu ccca', 'p')) // 'yyyppp twwww ttt uuu cccp'
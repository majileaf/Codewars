/* Counting Valleys
You need count how many valleys you will pass.

Start is always from zero level.

Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts 
as an exit of a valley.

One passed valley is equal one entry and one exit of a valley.

s='FUFFDDFDUDFUFUF'
U=UP
F=FORWARD
D=DOWN

To represent string above

(level 1)  __
(level 0)_/  \         _(exit we are again on level 0)
(entry-1)     \_     _/
(level-2)       \/\_/

So here we passed one valley
*/

const countingValleys = s => {
    let count = 0;
    let level = 0;
    let flag = false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'U') level++
        else if (s[i] === 'D') level--
        if (level < 0 && flag === false) flag = true;
        if (flag && level === 0) {
            count++
            flag = false;
        }
    }
    return count;
}

console.log(counting('UFFDDFDUDFUFU')) // 1
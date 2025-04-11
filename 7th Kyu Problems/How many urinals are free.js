/* How many urinals are free?

In men's public toilets with urinals, there is this unwritten rule that you leave at least one urinal free between you and 
the next person peeing. For example if there are 3 urinals and one person is already peeing in the left one, you will choose 
the urinal on the right and not the one in the middle. That means that a maximum of 3 people can pee at the same time on 
public toilets with 5 urinals when following this rule (Only 2 if the first person pees into urinal 2 or 4).

Your task:
You need to write a function that returns the maximum of free urinals as an integer according to the unwritten rule.

Input
A String containing 1s and 0s (Example: 10001) (1 <= Length <= 20)
A one stands for a taken urinal and a zero for a free one.

Examples
10001 returns 1 (10101)
1001 returns 0 (1001)
00000 returns 3 (10101)
0000 returns 2 (1001)
01000 returns 1 (01010 or 01001)

Note
When there is already a mistake in the input string (for example 011), then return -1
*/

const getFreeUrinals = urinals => {
    const arr = [...urinals];
    let count = 0;

    for (let i = 0; i < urinals.length; i++) {
        if (arr[i] === '1' && arr[i + 1] === '1') return -1;
        else if (arr[i] === '0' && arr[i + 1] !== '1' && arr[i - 1] !== '1') {
            arr[i] = "1";
            count++;
        }
    }
    return count;
}

console.log(getFreeUrinals("10001")) // 1
console.log(getFreeUrinals("1001")) // 0
console.log(getFreeUrinals("00000")) // 3
console.log(getFreeUrinals("0000")) // 2
console.log(getFreeUrinals("01000")) // 1
console.log(getFreeUrinals("00010")) // 1
console.log(getFreeUrinals("10000")) // 2
console.log(getFreeUrinals("1")) // 0
console.log(getFreeUrinals("0")) // 1
console.log(getFreeUrinals("10")) // 0

console.log(getFreeUrinals("110"),) //-1
console.log(getFreeUrinals("101100001"),) //-1
console.log(getFreeUrinals("0000100000101010011"),) //-1

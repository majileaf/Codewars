/* Simple Fun #332: Catch Thief
Task
Some people have long queues in front of the cash machine. Some people need to withdraw money. 
They are ordinary people; Some people want to steal other people's money, yes, they are thieves ;-) 
Some people are policemen. They are looking for thieves.

Given a queue in string format, like this: "X1X#2X#XX". # represents the ordinary people; "X" represents the thief; 
digit 1-9 represents the policeman. The numerical value represents the police's watching range. 
For example, 1 means the police could see 1 people in front of him and 1 people in the back.

All the thieves in the line of sight of the police will be caught!

Your task is to calculate the number of thieves who have been caught.

Example
For queue = "X1X#2X#XX", the output should be 3.

X1X#2X#XX
^ ^  ^  <--- These 3 thieves will be caught!

For queue = "X5X#3X###XXXX##1#X1X", the output should be 5.

X5X#3X###XXXX##1#X1X
^ ^  ^           ^ ^ <--- These 5 thieves will be caught!

For queue = "X#X1#X9XX", the output should be 5.

X#X1#X9XX
^ ^  ^ ^^ <--- All thieves will be caught!
*/

const catchThief = queue => {
    queue = queue.split('');
    let count = 0;

    for (let i = 0; i < queue.length; i++) {
        if (/\d/.test(queue[i])) {
            let digit = Number(queue[i]);
            for (let j = Math.max(0, i - digit); j <= Math.min(queue.length, i + digit); j++) {
                if (queue[j] === 'X') {
                    queue[j] = 'Caught';
                    count++;
                }
            }
        }
    }
    return count;
}

console.log(catchThief("X1X#2X#XX")) // 3
console.log(catchThief("X5X#3X###XXXX##1#X1X")) // 5
console.log(catchThief("X#X1#X9XX")) // 5
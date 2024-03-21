/* Mutate My Strings
I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

Example:

stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham
*/

const mutateMyStrings = (stringOne, stringTwo) => {
    const arr = [stringOne + '\n'];
    let temp = [...stringOne];

    for (let i = 0; i < stringOne.length; i++) {
        if (stringOne[i] !== stringTwo[i]) {
            temp[i] = stringTwo[i];
            arr.push(temp.join('') + '\n');
        }
    }
    return arr.join('');
}

console.log(mutateMyStrings('bubble gum', 'turtle ham')) // 'bubble gum\ntubble gum\nturble gum\nturtle gum\nturtle hum\nturtle ham\n'
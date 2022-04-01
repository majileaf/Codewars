/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr(n, s) {
    const add = s;
    for (let i = 1; i < n; i++) {
        s += add;
    }
    return s;
}

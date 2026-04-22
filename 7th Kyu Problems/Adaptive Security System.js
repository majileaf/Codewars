/* Adaptive Security System
A security system protects a network from intrusion attempts.
Hackers try to breach the system one by one, in the order given.
Each hacker has a skill level.
The system starts with a given security level.

Rules:
For each hacker:
    If the hacker's skill is strictly greater than the current security level, the hacker successfully breaches the system.
    Otherwise, the system blocks the attack and learns from it, increasing its security level.

Each blocked attack increases the security level by a fixed amount.
Your task is to return the number of successful breaches.
If there are no hackers, return 0.

Example
Initial values:
Hackers: [7, 6, 8, 9]
securityLevel: 6
increase: 2

Step-by-step:
Hacker 7 vs security 6 → breach → security stays 6
Hacker 6 vs security 6 → blocked → security becomes 8
Hacker 8 vs security 8 → blocked → security becomes 10
Hacker 9 vs security 10 → blocked

Result:
1
*/

const breachAttempts = (hackers, securityLevel, increase) => hackers.reduce((breached, hacker) => breached + (hacker > securityLevel ? 1 : (securityLevel += increase, 0)), 0);

console.log(breachAttempts([7, 6, 8, 9], 6, 2)) // 1
console.log(breachAttempts([10, 11, 12], 5, 3)) // 3
console.log(breachAttempts([5, 5, 5], 5, 1)) // 0
console.log(breachAttempts([], 4, 2)) // 0
/* Brute Force Detector
You're analyzing authentication logs. Each log entry is a string like:

192.168.1.1 LOGIN_FAIL user=admin
192.168.1.1 LOGIN_SUCCESS user=admin
10.0.0.5 LOGIN_FAIL user=root

An IP is suspicious if it has 3 or more consecutive failures without a success in between. Return a list of suspicious IPs, sorted alphabetically.

logs = [
    "192.168.1.1 LOGIN_FAIL user=admin",
    "192.168.1.1 LOGIN_FAIL user=admin",
    "192.168.1.1 LOGIN_FAIL user=root",
    "10.0.0.5 LOGIN_FAIL user=test",
    "10.0.0.5 LOGIN_SUCCESS user=test"
]
detect_brute_force(logs)  # ["192.168.1.1"]

The 10.0.0.5 IP had a failure then a success, so its streak reset. The 192.168.1.1 IP hit 3 failures in a row - busted. Only respond with a list of the suspicious IPs.

A success resets that IP's failure count to zero. Empty list returns empty list.

PS. You do not need to validate the IP addresses.
*/

const detectBruteForce = logs => {
    const count = logs
        .map(e => e.split(' '))
        .reduce((sum, [ip, login]) => 
            (login === 'LOGIN_FAIL' 
                ? sum[ip] = (sum[ip] || 0) + 1 
                : sum[ip] < 3 ? sum[ip] = 0 : null, sum), {});
    return Object.keys(count).filter(ip => count[ip] > 2).sort();
}

// catches IP with 3 consecutive failures
let logs = ["192.168.1.1 LOGIN_FAIL user=admin", "192.168.1.1 LOGIN_FAIL user=admin", "192.168.1.1 LOGIN_FAIL user=admin"];
console.log(detectBruteForce(logs)) // ["192.168.1.1"]
// success resets the counter
logs = ["10.0.0.5 LOGIN_FAIL user=x", "10.0.0.5 LOGIN_FAIL user=x", "10.0.0.5 LOGIN_SUCCESS user=x", "10.0.0.5 LOGIN_FAIL user=x"];
console.log(detectBruteForce(logs)) // []
// mixed traffic, only some IPs flagged
logs = ["1.1.1.1 LOGIN_FAIL user=a", "2.2.2.2 LOGIN_FAIL user=b", "1.1.1.1 LOGIN_FAIL user=a", "2.2.2.2 LOGIN_SUCCESS user=b", "1.1.1.1 LOGIN_FAIL user=a", "2.2.2.2 LOGIN_FAIL user=b"];
console.log(detectBruteForce(logs)) // ["1.1.1.1"]
// IP with multiple streaks only appears once
logs = ["5.5.5.5 LOGIN_FAIL user=x", "5.5.5.5 LOGIN_FAIL user=x", "5.5.5.5 LOGIN_FAIL user=x", "5.5.5.5 LOGIN_SUCCESS user=x", "5.5.5.5 LOGIN_FAIL user=x", "5.5.5.5 LOGIN_FAIL user=x", "5.5.5.5 LOGIN_FAIL user=x"];
console.log(detectBruteForce(logs)) // ["5.5.5.5"]
// empty list returns empty list
console.log(detectBruteForce([])) // []
// results are sorted alphabetically
logs = ["9.9.9.9 LOGIN_FAIL user=a", "1.1.1.1 LOGIN_FAIL user=b", "9.9.9.9 LOGIN_FAIL user=a", "1.1.1.1 LOGIN_FAIL user=b", "9.9.9.9 LOGIN_FAIL user=a", "1.1.1.1 LOGIN_FAIL user=b"];
console.log(detectBruteForce(logs)) // ["1.1.1.1", "9.9.9.9"]

// success after 2 fails resets count
logs = ["1.1.1.1 LOGIN_FAIL user=x","1.1.1.1 LOGIN_FAIL user=x","1.1.1.1 LOGIN_SUCCESS user=x","1.1.1.1 LOGIN_FAIL user=x","1.1.1.1 LOGIN_FAIL user=x"];
console.log(detectBruteForce(logs)) // []
// success doesn't save you if already caught
logs = ["9.9.9.9 LOGIN_FAIL user=x","9.9.9.9 LOGIN_FAIL user=x","9.9.9.9 LOGIN_FAIL user=x","9.9.9.9 LOGIN_SUCCESS user=x"];
console.log(detectBruteForce(logs)) // ['9.9.9.9']

logs = [
"141.56.239.159 LOGIN_FAIL user=user",
"255.116.168.195 LOGIN_FAIL user=guest",
"141.56.239.159 LOGIN_FAIL user=root",
"141.56.239.159 LOGIN_SUCCESS user=guest",
"255.116.168.195 LOGIN_FAIL user=test",
"141.56.239.159 LOGIN_FAIL user=user",
"255.116.168.195 LOGIN_FAIL user=user",
"23.205.168.247 LOGIN_FAIL user=test",
"23.205.168.247 LOGIN_FAIL user=user",
"141.56.239.159 LOGIN_SUCCESS user=guest",
"23.205.168.247 LOGIN_FAIL user=test",
"255.116.168.195 LOGIN_SUCCESS user=root",
"23.205.168.247 LOGIN_FAIL user=admin"]
console.log(detectBruteForce(logs)) // ['23.205.168.247', '255.116.168.195']
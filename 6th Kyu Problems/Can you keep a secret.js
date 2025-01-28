/* Can you keep a secret?
There's no such thing as private properties on a coffeescript object! But, maybe there are?

Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

    getSecret() which returns the secret
    setSecret() which sets the secret

obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2
*/

function createSecretHolder(secret) {
    return {
        mySecret: secret,
        setSecret: function(secret) {
            this.mySecret = secret;
        },
        getSecret: function() {
            return this.mySecret;
        }
    }
}

let obj = createSecretHolder(5)
console.log(obj.getSecret())  // returns 5
obj.setSecret(2)
console.log(obj.getSecret())  // returns 2
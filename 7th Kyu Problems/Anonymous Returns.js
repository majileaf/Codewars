/* Anonymous Returns.
When a function is called by itself it is bound to the global context; the this variable of the function 
will be bound to the global object.

When the getNameFunc function is called on the alpha object the value of the name variable outside 
of the object is returned: "The Window".

We do not want this, we want the value of the name property inside the alpha object to be returned.

Fix getNameFunc so the right value is returned.

For more information: Binding (https://alistapart.com/article/getoutbindingsituations/)
*/

name = 'The Window';

// let alpha = {
//     name : 'My Alpha',
//     getNameFunc : function() {
//         return function() {
//             return this.name;
//         };
//     }
// };

let alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
        let that = this;
        return function() {
            return that.name;
        };
    }
};

console.log(alpha.getNameFunc()()) // 'My Alpha'
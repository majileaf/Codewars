/* FIXME: Hello
The code provided has a method hello which is supposed to show only those attributes 
which have been explicitly set. Furthermore, it is supposed to say them in the same order 
they were set.

But it's not working properly.

Notes
There are 3 attributes
    name
    age
    sex ('M' or 'F')

When the same attribute is assigned multiple times the hello method shows it only once. 
If this happens the order depends on the first assignment of that attribute, 
but the value is from the last assignment.

Examples
    Hello.
    Hello. My name is Bob. I am 27. I am male.
    Hello. I am 27. I am male. My name is Bob.
    Hello. My name is Alice. I am female.
    Hello. My name is Batman.

Task
Fix the code so we can all go home early.
*/

// #important: preloading
/*
class Dinglemouse {
    constructor() {
        this.name = this.age = this.sex = 0
    }

    setAge(age) {
        this.age = age
        return this
    }

    setSex(sex) {
        this.sex = sex
        return this
    }

    setName(name) {
        this.name = name
        return this
    }

    hello() {
        return `Hello. My name is ${this.name}. I am ${this.age}. I am ${this.sex == 'M' ? "male" : "female"}.`
    }
}
*/

class Dinglemouse {
    constructor() {
        this.name = this.age = this.sex = 0;
        this.order = new Set();
    }

    setAge(age) {
        this.age = age;
        this.order.add('age');
        return this;
    }

    setSex(sex) {
        this.sex = sex;
        this.order.add('sex');
        return this;
    }

    setName(name) {
        this.name = name;
        this.order.add('name');
        return this;
    }

    hello() {
        let str = '';
        for (const item of this.order) {
            switch (item) {
                case 'age':  str += ` I am ${this.age}.`; break;
                case 'sex':  str += ` I am ${this.sex == 'M' ? "male" : "female"}.`; break;
                case 'name': str += ` My name is ${this.name}.`; break;
            }
        }
        return 'Hello.' + str;
    }
}

console.log('---')

let dm = new Dinglemouse().setName("Bob").setAge(27).setSex('M')
// "Hello. My name is Bob. I am 27. I am male."
console.log(dm.hello())

dm = new Dinglemouse().setAge(27).setSex('M').setName("Bob")
// "Hello. I am 27. I am male. My name is Bob."
console.log(dm.hello())

dm = new Dinglemouse().setName("Alice").setSex('F')
// "Hello. My name is Alice. I am female."
console.log(dm.hello())

dm = new Dinglemouse().setName("Batman")
// "Hello. My name is Batman."
console.log(dm.hello())
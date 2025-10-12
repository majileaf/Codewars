/* Simple template
Implement function createTemplate which takes string with tags wrapped in {{brackets}} as input and returns closure, 
which can fill string with data (flat object, where keys are tag names).

let personTmpl = createTemplate("{{name}} likes {{animalType}}");
personTmpl({ name: "John", animalType: "dogs" }); // John likes dogs

When key doesn't exist in the map, put there empty string.
*/

const createTemplate = template => arr => {
    const reg = new RegExp(`${Object.keys(arr).map(e => `{{${e}}}`).join('|')}`, 'g');
    return template.replace(reg, char => arr[char.slice(2, -2)]).replace(/{{.*}}/g, '');
}

let personStore = [{
    firstName: "John",
    lastName: "Smith",
    interests: "sport"
}, {
    firstName: "Albert",
    lastName: "Einstein",
    occupation: "physicist"
}];
let tmpl = "{{firstName}} {{lastName}} likes {{interests}}";

console.log(createTemplate(tmpl)(personStore[0])) // "John Smith likes sport"
console.log(createTemplate(tmpl)(personStore[1])) // "Albert Einstein likes "
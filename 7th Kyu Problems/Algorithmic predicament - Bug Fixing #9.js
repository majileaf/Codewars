/* Algorithmic predicament - Bug Fixing #9
Oh no! Timmy's algorithm has gone wrong! Help Timmy fix his algorithm!

Task
Your task is to fix Timmy's algorithm so it returns the group name with the highest total age.

You will receive two groups of `people` objects, with two properties `name` and `age`. 
The name property is a string, and the age property is a number.

Your goal is to calculate the total age of all people with the same name in both groups and 
return the name of the person with the highest total age. 

If two names have the same total age, return the first alphabetical name. 
*/

/*
function highestAge(group1, group2){
  var highestName = {name:'',age:-1},
  newGroup = [],
  combGroup = group1.concat(group2);
    
  for(var i=0;i<=combGroup.length;i++)
    if(newGroup.indexOfProp('name',combGroup[i].name)!=-1)
      newGroup.push(combGroup[i])
    else  
      newGroup[newGroup.indexOfProp('name',combGroup[i].name)].age = combGroup[i].age;
  
  newGroup = newGroup.sort((p,c) => p.name > c.name ? -1 : p.name < c.name ? 1 : 0)

  for(var i=0;i<=newGroup.length;i++){
    if(newGroup[i].age < highestName.age || newGroup[i].name < highestName.name)
      highestName = newGroup[i];
  }
  
  return highestName.name;
}

Array.prototype.indexOfProp = function(prop, value){
  for(var i=0;i<=this.length;i++){
    if(this[i][prop] == value)
      return i;
  }
  return 0
}
*/

function highestAge(group1, group2){
  var highestName = {name:'',age:-1},
  newGroup = [],
  combGroup = group1.concat(group2);
    
  for(var i=0;i<combGroup.length;i++) {
    if(newGroup.indexOfProp('name',combGroup[i].name)===-1)
      newGroup.push(combGroup[i]);
    else  
      newGroup[newGroup.indexOfProp('name',combGroup[i].name)].age += combGroup[i].age;
  }
  
  newGroup = newGroup.sort((p,c) => p.name.localeCompare(c.name));

  for(var i=0;i<newGroup.length;i++){
    if(newGroup[i].age > highestName.age) {
      highestName = newGroup[i];
    }
  }
  
  return highestName.name;
}

Array.prototype.indexOfProp = function(prop, value){
  for(var i=0;i<this.length;i++){
    if(this[i][prop] == value)
      return i;
  }
  return -1;
}

console.log(highestAge([{name:'kay',age:1},{name:'john',age:13},{name:'kay',age:76}],[{name:'john',age:1},{name:'alice',age:77}])) // 'alice'
console.log(highestAge([{name:'kay',age:1},{name:'john',age:13},{name:'kay',age:76}],[{name:'john',age:1},{name:'alice',age:76}])) // 'kay'
console.log(highestAge([{name:'kay',age:1},{name:'john',age:130},{name:'kay',age:76}],[{name:'john',age:1},{name:'alice',age:76}])) // 'john'
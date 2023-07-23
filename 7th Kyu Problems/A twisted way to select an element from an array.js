/* A twisted way to select an element from an array
You have two arrays: arrSearch and arrTake. arrSearch has to be sorted in reverse alphabetical order. 
Now, from arrSearch extract the third element, and from that element select the third letter. 

If the letter you selected matches the first letter of one or more elements of arrTake, return 
the first element that starts with the respective letter. 
If there is no element to match in the second array then return 'Nothing here'.
*/

const select = (arrSearch, arrTake) => {
    const letter = arrSearch.slice().sort().reverse()[2][2];
    return arrTake.find(first => letter === first[0]) || 'Nothing here';
}

console.log(select(['banana','rose','orange','apple'], ['carrot','nectarines','cucumber','ananas'])) // 'nectarines'
console.log(select(['attack','defense','fight','retreat'], ['fist','punch','break'])) // 'fist'
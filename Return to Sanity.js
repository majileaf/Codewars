/* Return to Sanity
This function should return an object, but it's not doing what's intended. What's wrong?
*/

/*
function mystery() {
  var results =
    {sanity: 'Hello'};
  return
    results;
}
*/

function mystery() {
  var results =
    {sanity: 'Hello'};
  return results;
}

// alternatively
// const mystery = () => ({sanity: 'Hello'});

console.log(mystery()) // {sanity: 'Hello'}
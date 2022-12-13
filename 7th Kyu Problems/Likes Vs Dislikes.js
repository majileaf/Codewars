/* Likes Vs Dislikes
Story
YouTube had a like and a dislike button, which allowed users to express 
their opinions about particular content. It was set up in such a way that 
you cannot like and dislike a video at the same time. There are two other 
interesting rules to be noted about the interface: Pressing a button, which 
is already active, will undo your press. If you press the like button after 
pressing the dislike button, the like button overwrites the previous 
"Dislike" state. The same is true for the other way round.

Task
Create a function that takes in a list of button inputs and returns the final state.

Examples
likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing
Notes
If no button is currently active, return Nothing.
If the list is empty, return Nothing.
*/

// Like, Dislike, Nothing come from Preloaded

const likeOrDislike = buttons => {
  if (buttons.length === 0) return 'Nothing';
  
  return buttons.reduce((sum, n) => {
      if (sum === 'Nothing' && n === 'Like') sum = 'Like';
          else if (sum === 'Nothing' && n === 'Dislike') sum = 'Dislike';
          else if (sum === 'Like' && n === 'Like') sum = 'Nothing';
          else if (sum === 'Dislike' && n === 'Dislike') sum = 'Nothing';
          else if (sum === 'Like' && n === 'Dislike') sum = 'Dislike';
          else if (sum === 'Dislike' && n === 'Like') sum = 'Like';
      return sum;
  }, 'Nothing')
}

console.log(likeOrDislike(['Dislike'])) // Dislike 
console.log(likeOrDislike(['Like','Like'])) // Nothing 
console.log(likeOrDislike(['Dislike','Like'])) // Like 
console.log(likeOrDislike(['Like','Dislike','Dislike'])) // Nothing 
console.log(likeOrDislike(['Dislike','Dislike'])) // Nothing 
console.log(likeOrDislike(['Like','Like','Like'])) // Like 
console.log(likeOrDislike(['Like','Dislike'])) // Dislike 
console.log(likeOrDislike(['Dislike','Like','Dislike'])) // Dislike 
console.log(likeOrDislike(['Like','Like','Dislike','Like','Like','Like','Like','Dislike'])) // Dislike 
console.log(likeOrDislike([])) // Nothing 
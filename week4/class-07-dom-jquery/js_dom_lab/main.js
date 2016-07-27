/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed
  into the input box and add it to the list (hint: appendChild)

- Also, when a new item is added to the list, clear the input box.

*/

function addToList(list, newThing) {

}

window.onload = function() {
  // YOUR CODE HERE!
  document.getElementById('new-thing-button').onclick = function(e) {
  	e.preventDefault();
  	
  	var myList = document.getElementById('fav-list');
  	var myNewThing = document.getElementById('new-thing').value;

  	var newListItem = '<li>' + myNewThing + '</li>'
  	mylist.innerHTML = newListItem
  }
};

/*

Bonus:

When they click submit without typing anything, alert the user
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/



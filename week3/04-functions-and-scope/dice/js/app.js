/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* The following should be contained inside a function, rollDice
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the class for the first die element, and store to a variable firstDie (hint: recall string concatenation)
* combine 'dice-' and random1 to form the class for the second die element, and store to a variable secondDie (hint: recall string concatenation)
* apply firstDie and secondDie to their respective HTML elements using the .className attribute (hint: use document.getElementById)
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint: document.getElementById)

3) Attach an onclick event handler to the the element 'roll-dice' - when this button is clicked, it should trigger the above rollDice function

*/

// 1. Attach a click handler to 'roll dice' hint: onclick event
//    When this button is clicked, run the roll dice function

// Inside the roll dice 
// 2. generate two random numbers
// 3. concatenate random numbers with 'dice-'
//  4. Apply the CSS classes to the dice elements: first die, second-die


document.getElementById("roll-dice").onclick = rollDice;

function rollDice () {
	var random1 = Math.floor((Math.random() * 6) + 1);
	var random2 = Math.floor((Math.random() * 6) + 1);

	var firstClass = "dice dice-".concat(random1);
	var secondClass = "dice dice-".concat(random2);

	document.getElementById("first-die").className = firstClass
	document.getElementById("second-die").className = secondClass
}















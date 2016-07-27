/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

// CONSTRUCTOR
var Monkey = function(name,species) {
	this.name = name;
	this.species = species;
	this.foodsEaten = [];
	this.eatSomething = function (food) {
		this.foodsEaten.push(this.food)
	}
	this.introduce = function() {
		console.log('Hello my name is ' + this.name + '. I am a ' + this.species + '. I have eaten' + this.foodsEaten + '.')
	}
}

var george = new Monkey('George', 'Chimp');
var kong = new Monkey('King Kong', 'Gorilla');
var koko = new Monkey('KoKo', 'Gorilla');

george.eatSomething('Banana');
george.introduce();
kong.introduce();
koko.introduce();

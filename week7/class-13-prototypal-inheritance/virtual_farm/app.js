/*

Virtual Farm

Goal: You'll be creating a virtual farm whose animals can be clicked on to get an alert displaying their name and what sound they make

Instructions:

1) Create a top-level "FarmAnimal" object that all the other farm animals will inherit from
2) FarmAnimal must have "name", "sound", and "image" instance props, and a "talk" instance method (talk should alert the animal's name and its sound)
3) Create at least three different animals for your farm (remember to inherit from "FarmAnimal" by changing the "prototype" of your animals)

	- Give each animal a name, a sound, and an image (use the web and copy an image path)

4) Once you build your animal constructors, create an instance of each animal and push that instance into the "farmAnimals" array

	ex:

	new rooter = new Rooster('Roger');
	farmAnimals.push(rooster);

5) Lastly, iterate over the "farmAnimals" array and append each of your animals to the DOM
	- You will have to create a new DOM element (a <div> is recommended)
	- This new <div> needs to have the CSS class "animal"
	- Assign this <div> random "bottom" and "left" attributes (this is so animals do not overlap each other in the DOM)

		Hint: use %-based values (bottom: 50%; left: 25%)

	- This <div>'s background should be the animal's image

		Hint: background-image: url('http://some-url-here.com')

	- Each <div> should have a click event that alerts the name of the animal and the sound that it makes
	- Append each new <div> to the body

		Hint: $('body').append(yourElement)
*/


$(document).ready(function () {

	// push all animal instances here
	var farmAnimals = [];

	// Create a top-level "FarmAnimal" object that all the other farm animals will inherit from
	function FarmAnimal(name, image, sound) {
		this.name = name;
		this.image = image;
		this.sound = sound;
		this.talk = function() {
			console.log(this.sound);
		}
	}

	// Creating a goat animal which will inherit from FarmAnimal
	function Goat(name, image, sound, trueOrFalse) {
		FarmAnimal.call(this, name, image, sound);
		this.hasPajamas = trueOrFalse;
	}
	Goat.prototype = new FarmAnimal();


	// Creating a squid animal which will inherit from FarmAnimal
	function Squid(name, image, sound, eats) {
		FarmAnimal.call(this, name, image, sound, eats);
		this.eats = ets
	}
	Goat.prototype = new FarmAnimal();


	var bill = new Goat('Bill', 'http://i.imgur.com/T7EWj1b.jpg', 'Baaaaa', true);
	var derek = new Squid('Derek', 'https://67.media.tumblr.com/edc7268671cce3704ca71cc2ff6ee491/tumblr_mqg2uroqcj1r3erevo1_400.jpg', 'Bloop Bloop Bloop', 'Barnacles')
	console.log(bill)




})

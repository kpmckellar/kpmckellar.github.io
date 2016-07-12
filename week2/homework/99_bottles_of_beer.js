// 99 BOTTLES OF BEER
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal
// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer")
// Hint: you will want to use a for loop that starts at 99 and counts down to 0


// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

for (var i = 99; i > 0; i--) {
	if ( i > 1 ) {
		var x = i - 1
		console.log(
			i + ' bottles of beer on the wall. ' + i + ' bottles of beer.' + '\n' + 
			'Take one down and pass it around, ' + x + ' bottles of beer on the wall.' + '\n' )
	} else {
		console.log(
			i + ' bottle of beer on the wall. ' + i + ' bottle of beer.' + '\n' + 
			'Take one down and pass it around, no more bottles of beer on the wall.' + '\n \n' + 

			'No more bottles of beer on the wall, no more bottles of beer. ' + '\n' + 
			'Go to the store and buy some more, 99 bottles of beer on the wall.'
			)
	}
}
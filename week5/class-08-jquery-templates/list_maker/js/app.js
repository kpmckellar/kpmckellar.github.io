// Users should be able to:
// 1. Enter an item into #new-item
// 2. Submit the form #item-form (remember to prevent the form's default behavior!)
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #new-item should clear


// Bonus: Focus on #new-item after the item is added
// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user
// Legendary Bonus: Remove individual <li> elements when they are clicked

// similar to window.onload
$(document).ready(function () {
	// YOUR CODE HERE

	// INIT TEMPLATES APPEND

	var initTodos = {
		todos: [
			'Data Types',
			'Array',
			'Object',
			'Functions',
		]
	}

	var todosSource = $('#init-template').html();
	var todosCompiled = Handlebars.compile(todosSource)
	var todosTemplate = todosCompiled(initTodos)

	$('#list').append(todosTemplate)






	// remove li when clicked
	$('#list').on('click', 'li', function () {
		$(this).remove()
	})


	$('#item-form').submit( function(e) {
		e.preventDefault();

		// Capture user input
		var userInput = $('#new-item').val();
		// if (userInput === '') {
		// 	return alert('no input!')
		// } else {
		// 	var newItem = '<li>' + userInput + '</li>';

		// 	// add list item to the list
		// 	$('#list').append(newItem);

		// 	// reset input field
		// 	$('#new-item').val('');

		// 	// put the cursor back in the input
		// 	$('#new-item').focus()
		// }
	})

})

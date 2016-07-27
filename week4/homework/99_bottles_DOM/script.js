for (var i = 99; i > 0; i--) {
	if (i > 1) {
		var lyric = i + ' bottles of beer on the wall, ' + i + ' bottles of beer. Take one down and pass it around, ' + (i - 1) + ' bottles of beer on the wall.'
	} else {
		var lyric = i + ' bottle of beer on the wall, ' + i + ' bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.'
	}

	$('#list').append('<li>' + lyric + '</li>')
}
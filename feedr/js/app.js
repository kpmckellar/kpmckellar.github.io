/*
  Please add all Javascript code to this file.
*/
var sources = ['Mashable', 'Reddit', 'Digg']

var mashable = 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json'
var redit = 'https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/top.json'
var digg = 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json'


$.each(sources, function(i, val) {
	$('#sourceMenu').append('<li><a href="#">' + val + '</li>')
	console.log('testttting')
})


//sample helper function
var help = models
help.hello("world")

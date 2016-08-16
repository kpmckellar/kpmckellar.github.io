function sortByDate(arr) {
	arr.sort( function(a,b){
	  return a.date - b.date
	});
}




// search the objects in the sources array for a 

function articleLoader() {
    for (i = 0; i < sources.length; i++) {
    	if (sources[i].name === sourceChoice) {
		    
		    var articlesTemplate = articlesCompiled(sources[i].articles);
		    $('#main').append(articlesTemplate)
    	}
    }
}
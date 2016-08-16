function sortByDate(arr) {
	arr.sort( function(a,b){
	  return a.date - b.date
	});
}
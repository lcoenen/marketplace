/*
	I need a function that takes 
	
		-	A literal of type T 	(1)
		-	An array of time T	([2,3,4])
		- 	More than one literal of type T (1,2,3)
		- 	A combinaison of literals and arrays of type T ([1,2,3], 4), [[5], 6]
		
	And return 
		-	A flat array of N 
*/
_flat = function(array) {

	
	return array.reduce(function(a,b) {
			
			return a.concat(b instanceof Array? _flat(b): b)
					
	}, []);
	
}

flat = function () {
	
	return _flat(Array.from(arguments))
	
}

module.exports = flat

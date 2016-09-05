
var flat = require('../utils/flat.js'),
	expect = require('chai').expect

describe('flat', function() {
	
	it('should accept litteral', function() {
		
		var _out = [1];
		expect(flat(1)).to.deep.equal(_out);
		
	})
	
	it('should accept arrays', function() {
		
		var _out = [1,2,3];
		expect(flat([1,2,3])).to.deep.equal(_out);
		
	})
	
	it('should accept more than one litteral', function() {
		
		var _out = [1,2,3];
		expect(flat(1,2,3)).to.deep.equal(_out);
		
	})
	
	it('should accept a combinaison of literals and arrays', function() {
		
		var _out = [1,2,3,4,5,6];
		expect(flat(1,[2,3],[[4],5],6)).to.deep.equal(_out);
		
	})
	
})

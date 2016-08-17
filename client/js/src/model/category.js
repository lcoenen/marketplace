var chai	=	require('chai'),
	expect	=	chai.expect,
	Immutable = require('immutable');

var Item	=	require('./item.js')

Category = function(name_cat, picture, description){

	props = ['name', 'picture', 'description']

	expect(name_cat).to.be.ok
	
	if(picture == undefined && description == undefined){
		
		cat = name_cat
		
		expect(cat).to.contain.keys(props)
		
		i = props.length
		
		while(i--){
		
			key = props[i]
			
			this[key] = cat[key]
			
		}
	
	}
	else {
	
		expect(name_cat).to.be.a('string')
		expect(picture).to.be.a('string')
		expect(description).to.be.a('string')
	
		this.name 		= name_cat
		this.picture 	= picture
		this.description	= description
	
	}
	
	this._members 	=	new Immutable.Set
	
	Object.defineProperty(this, 'members', {
	
		get: function(){
		
			return this._members.toArray()
		
		}
		
	})
	
}

// 	Link the item to this category

Category.prototype.link = function() {

	input = arguments.length - 1? Array.from(arguments): [arguments[1]]

	expect(input).to.be.an('Array')
	
	if(input.length - 1){
	
		while(i--){
		
			item = input[i]
		
			this.link(item)
			
		}

	}
	
	else{
	
			expect(item).to.be.an.instanceOf(Item)
			
			this._members = this._members.add(item)
		
	}

}

//	Unlink the item from from category

Category.prototype.unlink = function() {

	input = arguments.length - 1? Array.from(arguments): [arguments[1]]

	expect(input).to.be.an('Array')
	
	if(input.length - 1){
	
		while(i--){
		
			item = input[i]
		
			this.unlink(item)
		
		}
		
	}
	
	else{
	
			expect(item).to.be.an.instanceOf(Item)
			
			this._members = this._members.remove(item)
		
	}

}

module.exports = Category

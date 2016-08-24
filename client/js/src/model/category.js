var chai	=	require('chai'),
	expect	=	chai.expect,
	Immutable = require('immutable');

var Item	=	require('./item.js')

/*

	Category class
	
	Represent a category of items

*/
Category = function(name_cat, picture, description){

	expect(name_cat).to.be.ok
	
	if(picture == undefined && description == undefined){
		
		cat = name_cat
		
		expect(cat).to.contain.keys(Category._props)
		
		i = Category._props.length
		
		while(i--){
		
			key = Category._props[i]
			
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

	items = arguments.length - 1? Array.from(arguments): [arguments[0]]

	expect(items).to.be.an('Array')
	
	if(items.length - 1){
	
		i = items.length
	
		while(i--){
		
			item = items[i]
		
			this.link(item)
			
		}

	}
	
	else{
	
		item = items[0]
	
		expect(item).to.contain.keys(Item._props)
	
		this._members = this._members.add(item)
		
	}

}

//	Unlink the item from from category

Category.prototype.unlink = function() {

	items = arguments.length - 1? Array.from(arguments): [arguments[0]]

	expect(items).to.be.an('Array')
	
	if(items.length - 1){
	
		i = items.length
	
		while(i--){
		
			item = items[i]
		
			this.unlink(item)
		
		}
		
	}
	
	else{

		item = items[0]
	
		expect(item).to.contain.keys(Item._props)
			
		this._members = this._members.remove(item)
		
	}

}

Category._props = ['name', 'picture', 'description']


module.exports = Category

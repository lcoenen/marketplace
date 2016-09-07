var chai	=	require('chai'),
	expect	=	chai.expect,
	Immutable = require('immutable');
	
var Item	=	require('./item.js'),
	Category = require('./category.js');

class Marketplace {

	constructor(categories){
	
		this._categories = new Immutable.Set,
		this._bask = new Immutable.Set;

		for (let category of categories){
		
			this._categories = this._categories.add(((new Category(category))
				.link(...category.items)));
		
		}
		
		for(item of this.items){
		
			item._marketplace = this;
		
		}
	
	}
	
	get categories(){
	
		return this._categories.toArray();
	
	}
	
	get items(){
	
		var items = []
		
		let i = this.categories.length
		
		while(i--){
		
			let category = this.categories[i]
			
			items = items.concat(category.items)
			
		}
		
		return items
		
	}
	
	get featured(){
	
		return this.items.filter((element) => element.featured )
	
	}
	
	get bask(){
	
		return this._bask.toArray()
	
	}

}

module.exports = Marketplace

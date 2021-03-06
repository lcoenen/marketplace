var chai	=	require('chai'),
	expect	=	chai.expect

Item = function(name_item, picture, description, price){

	expect(name_item).to.be.ok
	
	if(picture == undefined && description == undefined && price == undefined){
		
		item = name_item
		
		expect(item).to.contain.keys(Item._props)
		
		i = Item._props.length
		
		while(i--){
		
			key = Item._props[i]
			
			this[key] = item[key]
			
		}
	
	}
	else {
	
		expect(name_item).to.be.a('string')
		expect(picture).to.be.a('string')
		expect(description).to.be.a('string')
		expect(price).to.be.a('number')
	
		this.name 		= name_item
		this.picture 	= picture
		this.price		= price
		this.description 	= description
	
	}
}

Item._props = ['name', 'picture', 'description', 'price']


module.exports = Item

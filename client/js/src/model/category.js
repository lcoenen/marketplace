var chai	=	require('chai'),
	expect	=	chai.expect

Category = function(name_cat, picture, description){

	props = ['name', 'picture', 'description']

	expect(name_cat).to.be.ok
	
	if(picture == undefined && description == undefined){
		
		item = name_item
		
		expect(item).to.contain.keys(props)
		
		i = props.length
		
		while(i--){
		
			key = props[i]
			
			this[key] = item[key]
			
		}
	
	}
	else {
	
		expect(name_item).to.be.a('string')
		expect(picture).to.be.a('string')
		expect(description).to.be.a('string')
	
		this.name 		= name_item
		this.picture 	= picture
		this.price		= price
	
	}
}

module.exports = Category

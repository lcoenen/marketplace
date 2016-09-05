var chai	=	require('chai'),
	expect	=	chai.expect
	
const MODEL_PATH = '../client/js/src/model/'

var Item		= require(MODEL_PATH + 'item.js')
var Category	= require(MODEL_PATH + 'category.js')

describe('item', function() {
	
	it('should have a name, a description, a price and a picture', function() {
		
		item 	= new Item('Piece of chocolate', 'img/chocolate.png', 'description', 22.8)
		item2 	= new Item('Piece of meat', 'img/meat.png', 'description', 10)
		
		expect(item.name).to.equal('Piece of chocolate')
		expect(item.price).to.equal(22.8)
		expect(item.description).to.equal('description')
		
		expect(item2.picture).to.equal('img/meat.png')
		expect(item2).to.have.keys('name', 'picture', 'price', 'description')
		
	})
	
	it('should be constructed from another item', function() {
		
		item1 = new Item('Piece of chocolate', 'img/chocolate.png', 'description', 22.8)
		item2 = new Item(item1)
		
		expect(item2.name).to.equal('Piece of chocolate')
		expect(item2.price).to.equal(22.8)
		
		expect(item2).to.have.keys('name', 'picture', 'price', 'description')
		
	})
	
	it('should acception object construction', function() {
		
		item1 = {
			name: 'Piece of chocolate',
			picture: 'img/chocolate.png',
			description: 'description', 
			price: 22.8
		}
		
		item2 = new Item(item1)
		
		expect(item2.name).to.equal('Piece of chocolate')
		expect(item2.price).to.equal(22.8)
		
		expect(item2).to.have.keys('name', 'picture', 'price', 'description')
		
	})
	
	it('should throw if the constructor recieve bad values', function() {
		
		expect(function() {
			
			item = new Item()
			
		}).to.throw(chai.AssertionError)
		
		expect(function() {
			
			item = new Item(22)
			
		}).to.throw(chai.AssertionError)

		expect(function() {
			
			item = new Item('Piece of chocolate', 'img/chocolate', '22.4')
			
		}).to.throw(chai.AssertionError)
		
	})	
	
	it('should register and delete himself correctly')
	it('should ping the correct RESTAPI adress')

})

describe('category', function() {

	it('should have a name, a description and a picture', function() {
		
		category 	= new Category('Chocolates', 'img/chocolate.png', 'description')
		category2	= new Category('Meats', 'img/meat.png', 'description')
		
		expect(category.name).to.equal('Chocolates')
		expect(category.description).to.equal('description')
		
		expect(category2.picture).to.equal('img/meat.png')
		expect(category2).to.contain.keys('name', 'picture', 'description')
		
	})
	
	it('should be constructed from another category', function() {
		
		category 	= new Category('Chocolates', 'img/chocolate.png', 'description')
		category2	= new Category(category)
		
		expect(category2.name).to.equal('Chocolates')
		
		expect(category2).to.contain.keys('name', 'picture', 'description')
		
	})
	
	it('should accept object construction', function() {
		
		category1 = {
			name: 'Chocolates',
			picture: 'img/chocolate.png',
			description: 'description',
			other_property: 'Lorem Ipsum'
		}
		
		category2 = new Category(category1)
		
		expect(category2.name).to.equal('Chocolates')
		expect(category2.picture).to.equal('img/chocolate.png')
		
		expect(category2).to.contain.keys('name', 'picture', 'description')
		
	})
	
	it('should throw if the constructor recieve bad values', function() {
		
		expect(function() {
			
			category = new Category()
			
		}).to.throw(chai.AssertionError)
		
		expect(function() {
			
			category = new Category(22)
			
		}).to.throw(chai.AssertionError)

		expect(function() {
			
			category = new Category('Chocolates', 22.4)
			
		}).to.throw(chai.AssertionError)
		
	})
	
	it('should link and unlink to items', function() {
		
		item1 = new Item('Piece of chocolate', 'img/chocolate.png', 'Description of the chocolate', 22.8);
		item2 = new Item('Bigger piece of chocolate', 'img/chocolate_bigger.png', 'Description of the biggerchocolate', 40);
		
		meat = item3 = new Item('Piece of meat', 'img/meat.png', 'Description of the meat', 10);
		jam = item4 = new Item('Piece of jam', 'img/jam.png', 'Description of the jam', 20);
		
		chocolates	= new Category('Chocolates', 'img/chocolate.png', 'description');
		
		chocolates.link(item1, item2);
		
		(meats	= new Category('Meats', 'img/meat.png', 'description'))
			.link(...([item3]))
			
		meats.link(item4)
				
		expect(meats.members).to.be.an('array')
		expect(meats.members).to.have.a.lengthOf(2)

		expect(chocolates.members).to.be.an('array')
		expect(chocolates.members).to.have.a.lengthOf(2)
		
		meats.unlink(item3)
		
		expect(meats.members).to.have.a.lengthOf(1)
		expect(meats.members[0]).to.equal(item4)
		
		chocolates.unlink(...([item1, item2]))
		
		expect(meats.members).to.deep.equal([jam])
		
	})
	
	it('should have a readonly list of member', function() {
		
		item1 = new Item('Piece of chocolate', 'img/chocolate.png', 'Description of the chocolate', 22.8)
		item2 = new Item('Bigger piece of chocolate', 'img/chocolate_bigger.png', 'Description of the biggerchocolate', 40)
		
		chocolates	= new Category('Chocolates', 'img/chocolate.png', 'description')
		
		expect(function() {

			chocolates.members = [item1, item2]

		}).to.throw(Error)
		
	})

	it('should ping the correct RESTAPI adress')
	
})

var marketplace = undefined

describe('marketplace', function() {

	beforeEach(function() {
		
		marketplace = new Marketplace({
		
			meats: [
			
				{
					
					name: 'piece of meats',
					picture: 'img/meats.png',
					description: 'A delicious piece of beef',
					price: 22.8
					
				}
			
			],
			
			chocolate:[
			
				{
				
					name: 'Finest Belgian chocolate',
					picture: 'img/cote_d_or.png',
					description: 'The finest belgian chocolate from the chocolate country',
					price: 299
				
				},
				{
				
					name: 'Easter chocolate egg',
					picture: 'img/easter_egg.png',
					description: 'Heavy easter egg made from regular milk chocolate',
					price: 3.99,
					featured: true
				
				}
			
			]
		
		})
		
	})
	
	it('should be constructed with a map of categories', function() {
		
		expect(marketplace.items).to.be.an('array')
		expect(marketplace.items).to.have.a.lengthOf(3)
		
	})
	
	it('should provide a list of featured item and a list of categories', function() {
		
		expect(marketplace.featured).to.be.an('array')
		expect(marketplace.featured).to.have.a.lengthOf(1)
		expect(marketplace.featured[0]).to.be.an.instanceof(Item)
		expect(marketplace.featured[0].name).to.equal('Easter chocolate egg')
		
		expect(marketplace.categories).to.be.an('array')
		expect(marketplace.categories).to.have.a.lenghtOf(2)
		expect(marketplace.categories[0]).to.be.an.instanceof(Category)
		
	})
	
	it('should have a bask', function() {
		
		expect(marketplace.bask).to.be.ok
		expect(marketplace.bask).to.be.an.instanceof(object)
		
	})
	
})

describe('bask', function() {
	
	it('should have a list of item and their quantities', function() {

		marketplace.category[0].members[0].addToBask()
		marketplace.category[1].members[0].addToBask()
		
		expect(marketplace.bask).to.have.a.lenghtOf(2)

		i = marketplace.bask.length
		
		while(i--){
		
			itemInBask = marketplace.bask[i]
			
			expect(itemInBask).to.contain.keys('quantity', 'item')
			expect(itemInBask.item).to.be.an.instanceof(Item)
			
		}
		
	})
	
	it('should update bask when needed', function() {
		
		marketplace.category[0].members[0].addToBask()
		marketplace.category[1].members[0].addToBask()
		
		marketplace.updateBaskQuantity(marketplace.category[1].members[0], 3)
		marketplace.updateBaskQuantity(marketplace.category[0].members[0], 0)

		expect(marketplace.bask).to.have.a.lengthOf(1)
		expect(marketplace.bask[0].item).to.equal(marketplace.category[1].members[0])
		
	})
	
	it('should checkout in marketplace and empty the bask if it went right')
	
})

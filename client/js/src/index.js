window.$ 		= window.jQuery = require('jquery');
var bootstrap 	= require('bootstrap');
var angular		= require('angular');	

(function(){

	angular.module('marketplaceApp', [])
		.controller('mainCtrl', [function(){
			self = this
			
			self.featured = [
				{
					price: '22,23',
					description: 'A beautiful swiss watch',
					picture: 'img/itemexample1.png'
				},
				{
					price: '400,23',
					description: 'This wonderful mobile phone will fulfil your everyday need',
					picture: 'img/itemexample2.png'
				}
			]
			
			self.categories = [
				
				{

					name: 'Computer & IT',
					count: 22
					
				},
				{
				
					name: 'Jewelry',
					count: 13
				
				},
				{
				
					name: 'Edible', 
					count: 133
				
				},
				{
				
					name: 'Clothes and accessories',
					count: 3
				
				},
				{
				
					name: 'Other',
					count: 287
				
				}
			]
			
		}])

})()

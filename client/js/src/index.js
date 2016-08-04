window.$ 		= window.jQuery = require('jquery');

var bootstrap 	= require('bootstrap');
var angular		= require('angular');	

(function(){

	angular.module('marketplaceApp', [require('angular-route')])
		.config(['$routeProvider', function($routeProvider){

			$routeProvider.when('/home', {
				templateUrl: 	'include/home.html',
				controller: 	require('./home.js'),
				controllerAs:	'ctrl'
			}).when('/categories', {
				templateUrl: 	'include/categories.html',
				controller: 	require('./categories.js'),
				controllerAs:	'ctrl'
			}).otherwise({
				redirectTo: '/home'			
			})
		
		}])
		.controller('navCtrl', require('./nav.js'))
//		.controller('mainCtrl', [function(){
//		
//			self = this
//			
//			self.state = 'index'
//			
//			self.featured = [
//				{
//					price: '22,23',
//					description: 'A beautiful swiss watch',
//					picture: 'img/itemexample1.png'
//				},
//				{
//					price: '400,23',
//					description: 'This wonderful mobile phone will fulfil your everyday need',
//					picture: 'img/itemexample2.png'
//				}
//			]
//			
//			self.categories = [
//				
//				{

//					name: 'Computer & IT',
//					count: 22,
//					img: 'img/categories/computer.png'
//					
//				},
//				{
//				
//					name: 'Jewelry',
//					count: 13,
//					img: 'img/categories/jewelry.png'
//				
//				},
//				{
//				
//					name: 'Edible', 
//					count: 133,
//					img: 'img/categories/edibles.png'
//				
//				},
//				{
//				
//					name: 'Clothes and accessories',
//					count: 3,
//					img: 'img/categories/clothes.png'
//				
//				},
//				{
//				
//					name: 'Other',
//					count: 287,
//					img: 'img/categories/other.png'
//					
//				}
//			]
//			
//		}])

})()

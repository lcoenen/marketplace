var http 	= require('http')
var extend  = require('extend')
var express = require('express');

marketplaceServer = function(http, config){

	original_config = {
	
		port: process.env.PORT || 8080
	
	}

	this._config 	= extend(original_config, config)
	this._app		= express()
	
	this._app.use(express.static(__dirname + '/../client'))
	
	console.log(__dirname + '/../client')
	

}

marketplaceServer.prototype.serve = function () {
	
	self = this
	
	this._app.listen(this._config.port);
	
}

marketplaceServer.prototype.request = function(request, response) {
	
}

(function(){

	_server = new marketplaceServer()
	_server.serve()


}())



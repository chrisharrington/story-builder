var config = require("../../../config");

module.exports = function(verb, collection) {
	this.execute = function(params) {
		return qwest[verb](config.service + collection, params).then(function(response) {
			console.log(response);	
		});
	};
	
	this.subscribe = function(key) {
		
	};
	
	this.subscribeAndNotify = function(key) {
		
	};
	
	this.unsubscribe = function(key) {
		
	};
};
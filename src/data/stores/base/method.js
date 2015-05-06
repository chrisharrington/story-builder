var config = require("../../../config"),
    react = require("react"),
    qwest = require("qwest");

module.exports = function(verb, collection) {
	this.execute = function(params) {
        var url = "fixtures/" + collection + ".json";
		return qwest[verb](url, params).then(function(response) {
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
var config = require("../../../config"),
    react = require("react"),
    qwest = require("qwest");

module.exports = function(verb, collection) {
	var _subscribers = {}, _result;
	
	this.execute = function(params) {
        var url = "fixtures/" + collection + ".json";
		return qwest[verb](url, params).then(function(response) {
			_result = response;
			_notify();
		});
	};
	
	this.subscribe = function(key, callback) {
		_subscribe(key, callback);
	};
	
	this.subscribeAndNotify = function(key, callback) {
		_subscribe(key, callback);
	};
	
	this.unsubscribe = function(key) {
		delete _subscribers[key];
	};
	
	function _subscribe(key, callback) {
		_subscribers[key] = callback;
	};
	
	function _notify() {
		if (!_result)
			return;
		
		for (var key in _subscribers)
			_subscribers[key](_result);
	};
};
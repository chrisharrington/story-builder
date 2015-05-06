var Method = require("./method");

module.exports = function(collection) {
	this.collection = collection;
	
	this.filter = new Method("get", collection);
};
"use strict";

var React = require("react"),
	Module = require("module");

require("./example-style.less");

module.exports = React.createClass({
	render: function() {
		return <div className="example">
			<Module>An example React class for Webpack and LESS.</Module>
		</div>;
	}
});
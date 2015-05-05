"use strict";

var React = require("react");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div className="four columns">
			<div className="tile">
				quarter tile!
			</div>
		</div>;
	}
});
"use strict";

var React = require("react");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div className="one-third column">
			<div className="tile">
				third tile!
			</div>
		</div>;
	}
});
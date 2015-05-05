"use strict";

var React = require("react");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div className="eight columns">
			<div className="tile">
				half tile!
			</div>
		</div>;
	}
});
"use strict";

var React = require("react");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div className="tile">
			{this.props.children}
		</div>;
	}
});
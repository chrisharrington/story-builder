"use strict";

var React = require("react");

require("./tag.less");

module.exports = React.createClass({
	render: function() {
		return <div className="tag">
			{this.props.tag}
		</div>;
	}
});
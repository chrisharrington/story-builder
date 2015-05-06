"use strict";

var React = require("react");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div className="icon-label">
			<i className={"fa " + this.props.icon}></i>
			<span>{this.props.children}</span>
		</div>;
	}
});
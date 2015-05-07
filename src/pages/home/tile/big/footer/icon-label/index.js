"use strict";

var React = require("react"),
    TooltipMixin = require("mixins/tooltip");

require("./style.less");

module.exports = React.createClass({
    mixins: [TooltipMixin],
    
	tooltip: function() {
		return this.props.tooltip;
	},
	
	render: function() {
		return <div className="icon-label">
			<i className={"fa " + this.props.icon}></i>
			<span>{this.props.children}</span>
		</div>;
	}
});
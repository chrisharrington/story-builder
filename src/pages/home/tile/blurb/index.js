"use strict";

var React = require("react");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		var blurb = this.props.story.blurb;
		return <div className="blurb">
			{this.props.size === "big" ? blurb : (blurb.substring(0, 200) + "...")}
		</div>;
	}
});
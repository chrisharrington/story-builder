"use strict";

var React = require("react");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		var story = this.props.story;
		return <div className="story-header">
			<span className="title">{story.title}</span>
		</div>;
	}
});
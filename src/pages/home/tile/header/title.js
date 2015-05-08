"use strict";

var React = require("react");

module.exports = React.createClass({
	render: function() {
		var story = this.props.story;
		return <div>
			<div className="title-container">
				<div className="title">{story.title}</div>
				<div className="authour">By <a href="#">{story.authour.name}</a></div>
			</div>
			<div className="clearfix"></div>
		</div>;
	}
});
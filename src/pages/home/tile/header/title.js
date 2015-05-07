"use strict";

var React = require("react");

module.exports = React.createClass({
	render: function() {
		var story = this.props.story;
		return <div>
			<div className="title-container">
				<span className="title">{story.title}</span>
				<br />
				<span className="authour">By <a href="#">{story.authour.name}</a></span>
			</div>
			<div className="clearfix"></div>
		</div>;
	}
});
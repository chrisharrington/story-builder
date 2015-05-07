"use strict";

var React = require("react"),
	Gravatar = require("components/gravatar"),
	Title = require("./title"),
	Favourite = require("./favourite");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		var story = this.props.story;
		return <div className="header">
			<div className="image-container">
				<Gravatar email={story.authour.email} size={52} />
			</div>
			<div className="pull-left">
				<Title story={story} />
			</div>
			<Favourite story={story} />
		</div>;
	}
});


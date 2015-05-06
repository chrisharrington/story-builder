"use strict";

var React = require("react"),
	Tags = require("./tags"),
	IconLabel = require("./icon-label");

module.exports = React.createClass({
	render: function() {
		var story = this.props.story;
		return <div className="footer">
			<div className="pull-left">
				<Tags story={story} />
			</div>
			<div className="pull-right">
				<IconLabel icon="fa-eye">{story.views}</IconLabel>
			</div>
			<div className="pull-right">
				<IconLabel icon="fa-star">{story.favourites}</IconLabel>
			</div>
			<div className="clearfix"></div>
		</div>;
	}
});
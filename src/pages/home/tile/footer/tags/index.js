"use strict";

var React = require("react"),
	_ = require("lodash"),

    IconLabel = require("../icon-label"),
	Tag = require("./tag");

module.exports = React.createClass({
	render: function() {
		var tags = this.props.story.tags;
		return <div className="pull-left">
			<IconLabel tooltip="Tags" icon="fa-tags">{tags.length}</IconLabel>
		</div>;
	}
});
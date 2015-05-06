"use strict";

var React = require("react"),
	_ = require("lodash"),
	
	Tag = require("./tag");

module.exports = React.createClass({
	render: function() {
		var tags = this.props.story.tags;
		return <div>
			{_.map(tags, function(tag) {
			 	return <Tag tag={tag} />;
			})}
			<div className="clearfix"></div>
		</div>;
	}
});
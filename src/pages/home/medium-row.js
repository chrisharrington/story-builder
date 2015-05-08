"use strict";

var React = require("react"),
	Tile = require("./tile"),
	
	_ = require("lodash");

module.exports = React.createClass({
	render: function() {
		return <div className="row">
			{_.map(this.props.stories, function(story) {
				return <Tile size="medium" story={story} />;
			})}
		</div>;
	}
});
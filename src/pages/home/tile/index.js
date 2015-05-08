"use strict";

var React = require("react"),
	Header = require("./header"),
	Blurb = require("./blurb"),
	Footer = require("./footer");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		var story = this.props.story;
		return <div className="six columns">
			<div className="tile">
				<Header story={story} />
				<Blurb story={story} />
				<Footer story={story} />
			</div>
		</div>;
	}
});
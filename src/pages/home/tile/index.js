"use strict";

var React = require("react"),
	Header = require("./header"),
	Blurb = require("./blurb"),
	Footer = require("./footer"),
	Tile = require("components/tile"),
	
	emitter = require("emitter");

module.exports = React.createClass({
	render: function() {
		var story = this.props.story;
		return <div className={"col-md-" + (this.props.size === "big" ? "6" : "4")}>
			<Tile>
				<Header story={story} />
				<Blurb size={this.props.size} story={story} />
				<Footer story={story} />
			</Tile>		
		</div>;
	}
});
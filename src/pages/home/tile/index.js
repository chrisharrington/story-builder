"use strict";

var React = require("react"),
	Header = require("./header"),
	Blurb = require("./blurb"),
	Footer = require("./footer"),
	
	emitter = require("emitter");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		var story = this.props.story;
		return <div className={"col-md-" + (this.props.size === "big" ? "6" : "4")}>
			<div className="tile">
				<Header story={story} />
				<Blurb size={this.props.size} story={story} />
				<Footer story={story} />
			</div>		
		</div>;
	}
});
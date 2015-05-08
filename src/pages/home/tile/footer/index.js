"use strict";

var React = require("react"),
	Tags = require("./tags"),
	IconLabel = require("./icon-label"),
	
	emitter = require("emitter");

require("./style.less");

module.exports = React.createClass({
	readMore: function() {
		emitter.emit("read-more", this.props.story);
	},
	
	render: function() {
		var story = this.props.story;
		return <div className="footer">
			<div className="pull-left">
				<Tags story={story} />
			</div>
			<div className="pull-left spacing-left">
				<IconLabel tooltip="Views" icon="fa-eye">{story.views}</IconLabel>
			</div>
			<div className="pull-left spacing-left">
				<IconLabel tooltip="Favourites" icon="fa-star">{story.favourites}</IconLabel>
			</div>
            <div className="pull-left spacing-left">
                <IconLabel tooltip="Entries" icon="fa-files-o">{story.entries}</IconLabel>
            </div>
            <a className="pull-right read-more" onClick={this.readMore}>
                <span>Read more</span>
                <i className="fa fa-angle-double-right"></i>
            </a>
			<div className="clearfix"></div>
		</div>;
	}
});
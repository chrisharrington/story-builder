"use strict";

var React = require("react"),
	Tags = require("./tags"),
	IconLabel = require("./icon-label");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		var story = this.props.story;
		return <div className="footer">
			<div className="pull-left">
				<Tags story={story} />
			</div>
			<div className="pull-left spacing-left">
				<IconLabel icon="fa-eye">{story.views}</IconLabel>
			</div>
			<div className="pull-left spacing-left">
				<IconLabel icon="fa-star">{story.favourites}</IconLabel>
			</div>
            <div className="pull-left spacing-left">
                <IconLabel icon="fa-files-o">{story.entries}</IconLabel>
            </div>
            <a className="pull-right read-more">
                <span>Read more</span>
                <i className="fa fa-angle-double-right"></i>
            </a>
			<div className="clearfix"></div>
		</div>;
	}
});
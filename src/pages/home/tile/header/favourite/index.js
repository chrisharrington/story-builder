"use strict";

var React = require("react");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		var story = this.props.story;
		return <div className="favourite">
			<i className={"fa fa-star " + (story.isFavourite ? "favourite" : "")} onClick={this.toggle}></i>
		</div>;
	},
	
	toggle: function() {
		var story = this.props.story,
			isFavourite = story.isFavourite;
		
		story.favourites = story.favourites + (isFavourite ? -1 : 1);
		story.isFavourite = !isFavourite;
		
		this.forceUpdate();
	}
});
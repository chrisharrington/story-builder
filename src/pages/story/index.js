"use strict";

var React = require("react"),
	_ = require("lodash"),
	
	Tile = require("components/tile"),
	Header = require("./header"),
	
	Stories = require("data/stores/stories");
	
require("./style.less");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			story: {}
		};
	},
	
	componentWillMount: function() {
        Stories.filter.subscribeAndNotify("story-details", function(stories) {
            this.setState({ story: stories[0] });
        }.bind(this));
        
		Stories.filter.execute({ slug: this.props.params.slug });
	},
	
	render: function() {
		var story = this.state.story;
		return <div className="container spacing-top">
			<div className="row">
				<div className="col-xs-12">
					<Tile>
						<Header story={story} />
					</Tile>
				</div>
			</div>
		</div>;
	}
});
"use strict";

var React = require("react"),
	_ = require("lodash"),
	
	BigTile = require("./tile/big"),
	ThirdTile = require("./tile/third-tile"),
	QuarterTile = require("./tile/quarter-tile"),
	
	Stories = require("../../data/stores/stories");

require("./style.less");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			bigStories: []	
		};
	},
	
	componentWillMount: function() {
        Stories.filter.subscribeAndNotify("home-stories", function(stories) {
            this.setState({ bigStories: stories });
        }.bind(this));
        
		Stories.filter.execute();
	},
    
    componentWillUnmount: function() {
        Stories.filter.unsubscribe("home-stories");
    },
	
	render: function() {
		return <div className="container spacing-top-15">
			<div className="row">
				{_.map(this.state.bigStories, function(story) {
				 	return <BigTile story={story} />;
				})}
			</div>
		</div>;
	}
});
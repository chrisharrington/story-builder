"use strict";

var React = require("react"),
	
	HalfTile = require("./tile/half-tile"),
	ThirdTile = require("./tile/third-tile"),
	QuarterTile = require("./tile/quarter-tile"),
	
	Stories = require("../../data/stores/stories");

require("./style.less");

module.exports = React.createClass({
	componentWillMount: function() {
        Stories.filter.subscribeAndNotify(function(stories) {
            this.setState({ stories: stories });
        }.bind(this));
        
		Stories.filter.execute();
	},
    
    componentWillUnmount: function() {
        Stories.filter.unsubscribe();
    },
	
	render: function() {
		return <div className="container spacing-top-15">
			<div className="row">
				<HalfTile />
				<HalfTile />
			</div>
			<div className="row">
				<ThirdTile />
				<ThirdTile />
				<ThirdTile />
			</div>
			<div className="row">
				<QuarterTile />
				<QuarterTile />
				<QuarterTile />
				<QuarterTile />
			</div>
		</div>;
	}
});
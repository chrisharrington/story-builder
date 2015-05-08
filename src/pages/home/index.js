"use strict";

var React = require("react"),
	_ = require("lodash"),
	
	BigRow = require("./big-row"),
	MediumRow = require("./medium-row"),
	
	Stories = require("../../data/stores/stories");

require("./style.less");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			stories: []
		};
	},
	
	componentWillMount: function() {
        Stories.filter.subscribeAndNotify("home-stories", function(stories) {
            this.setState({ stories: stories });
        }.bind(this));
        
		Stories.filter.execute();
	},
    
    componentWillUnmount: function() {
        Stories.filter.unsubscribe("home-stories");
    },
	
	render: function() {
		return <div className="container spacing-top">
			<BigRow stories={_.take(this.state.stories, 2)} />
			<MediumRow stories={_.slice(this.state.stories, 2, 5)} />
		</div>;
	}
});
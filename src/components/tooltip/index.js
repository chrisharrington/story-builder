"use strict";

var React = require("react"),
    
    emitter = require("emitter");

require("./style.less");

module.exports = React.createClass({
    getInitialState: function() {
        return {
            left: -10000,
			top: 0,
            value: ""
        };
    },
    
    componentDidMount: function() {
        emitter.on("tooltip-on", this.on);
		emitter.on("tooltip-off", this.off);
    },
	
	on: function(data) {
		this.setState({
			value: data.value
		});

		var target = data.element.getBoundingClientRect(),
			tooltip = this.getDOMNode().getBoundingClientRect();

		this.setState({
			left: target.left + target.width/2 - tooltip.width/2,
			top: target.top - tooltip.height - 10,
		});
	},
	
	off: function() {
		this.setState({
			left: -10000
		});
	},
    
	render: function() {
		return <div className="tooltip" style={{ left: this.state.left, top: this.state.top }}>
			<div className="arrow">
				<div></div>
			</div>
            <span>{this.state.value}</span>
        </div>;
	}
});
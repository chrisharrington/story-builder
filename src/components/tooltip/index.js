"use strict";

var React = require("react"),
    
    emitter = require("emitter");

require("./style.less");

module.exports = React.createClass({
    getInitialState: function() {
        return {
            x: 0,
            y: 0,
            value: ""
        };
    },
    
    componentDidMount: function() {
        emitter.on("tooltip-on", function(data) {
            
        });
    },
    
	render: function() {
		return <div className="tooltip">
            {this.state.value}
        </div>;
	}
});
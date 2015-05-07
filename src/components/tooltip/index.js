"use strict";

var React = require("react"),
    
    emitter = require("emitter");

require("./style.less");

module.exports = React.createClass({
    getInitialState: function() {
        return {
            left: -10000,
			bottom: 0,
            value: ""
        };
    },
    
    componentDidMount: function() {
        emitter.on("tooltip-on", function(data) {
            this.setState({
				value: data.value
			});
			
			var target = data.element.getBoundingClientRect(),
				tooltip = this.getDOMNode().getBoundingClientRect();
			
			this.setState({
				left: target.left + target.width/2 - tooltip.width/2,
				bottom: target.bottom - 8,
			});
        }.bind(this));
		
		emitter.on("tooltip-off", function() {
			this.setState({
				left: -10000
			});
		}.bind(this));
    },
    
	render: function() {
		return <div className="tooltip" style={{ left: this.state.left, bottom: this.state.bottom }}>
			<div className="arrow">
				<div></div>
			</div>
            <span>{this.state.value}</span>
        </div>;
	}
});

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
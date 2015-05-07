var React = require("react"),
    TooltipData = require("components/tooltip/data"),
    emitter = require("emitter");

module.exports = {
    componentDidMount: function() {
        var el = this.getDOMNode();
        
        el.addEventListener("mouseenter", this.mouseEnter);
		el.addEventListener("mouseleave", this.mouseLeave);
    },
    
    mouseEnter: function() {
        emitter.emit("tooltip-on", new TooltipData(this.getDOMNode(), this.tooltip()));
    },
	
	mouseLeave: function() {
		emitter.emit("tooltip-off");	
	}
};
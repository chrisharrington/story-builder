var React = require("react"),
    TooltipData = require("components/tooltip/data"),
    emitter = require("emitter");

module.exports = {
    componentDidMount: function() {
        var el = this.getDOMNode();
        
        el.addEventListener("mouseEnter", this.mouseEnter);
    },
    
    mouseEnter: function() {
        emitter.emit("tooltip-on", new TooltipData(1, 2, "the data"));
    }
};
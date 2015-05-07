var React = require("react");

module.exports = {
    componentDidMount: function() {
        var el = this.getDOMNode();
        
        el.addEventListener("click", function() { alert("blah"); });
    }
};

var Tooltip = React.createClass({
    render: function() {
        return <div className="tooltip">blah</div>;  
    }
});

React.render(<Tooltip />, document.body);
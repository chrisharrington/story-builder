var React = require("react"),
	Router = require("react-router"),
	RouteHandler = Router.RouteHandler,
	Header = require("components/header"),
    Tooltip = require("components/tooltip");

require("../style/app.less");

module.exports = React.createClass({
	render: function() {
		return <div>
            <Tooltip />
			<Header />
			<RouteHandler />
		</div>;
	}
});
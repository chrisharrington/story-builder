var React = require("react"),
	Router = require("react-router"),
	RouteHandler = Router.RouteHandler,
	Header = require("../components/header");

require("../style/app.less");

module.exports = React.createClass({
	render: function() {
		return <div>
			<Header />
			<RouteHandler />
		</div>;
	}
});
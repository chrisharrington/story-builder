var React = require("react"),
	Router = require("react-router"),
	Route = Router.Route,
	DefaultRoute = Router.DefaultRoute,
	
	Base = require("./pages/base"),
	Home = require("./pages/home");

var blah = "

var routes = (
	<Route handler={Base} path="/">
		<DefaultRoute handler={Home} />
	</Route>
);

Router.run(routes, function(Handler) {
	React.render(<Handler />, document.body);
});
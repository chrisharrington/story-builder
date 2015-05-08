var React = require("react"),
	Router = require("react-router"),
	Route = Router.Route,
	DefaultRoute = Router.DefaultRoute,
	
	Base = require("./pages/base"),
	Home = require("./pages/home"),
	Story = require("./pages/story");

var routes = (
	<Route handler={Base} path="/">
		<DefaultRoute handler={Home} />
		<Route name="story" path="story/:slug" handler={Story} />
	</Route>
);

Router.run(routes, function(Handler, state) {
	React.render(<Handler params={state.params} />, document.body);
});
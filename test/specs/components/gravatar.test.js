var Gravatar = require("components/gravatar"),
	
	React = require("react"),
	TestUtils = React.addons.TestUtils,
	
	md5 = require("blueimp-md5");

describe("components - gravatar - ", function() {
	it("should set image source with hashed email address", function() {
		var email = "chrisharrington99@gmail.com",
			gravatar = TestUtils.renderIntoDocument(<Gravatar email={email} />),
			dom = TestUtils.findRenderedDOMComponentWithTag(gravatar, "div").getDOMNode();
		
		expect(dom.querySelector("img").getAttribute("src") === "http://www.gravatar.com/avatar/" + md5(email)).toBe(true);
	});
});
var gulp = require("gulp"),
	webpack = require("gulp-webpack"),
	wp = require("webpack"),
	path = require("path"),
    gutil = require("gulp-util"),
    moment = require("moment");

gulp.task("test", function() {
	return gulp.src("../test/init.js")
		.pipe(webpack({
			entry: {
				test: "./test/init.js"
			},
			output: {
				filename: "./bundle.js"
			},
			module: {
				loaders: [
					{ test: /\.js$/, loader: "jsx-loader" },
					{ test: /\.less$/, loader: "style!css!less" }
				]
			},
			plugins: [
				new wp.ResolverPlugin([
					new wp.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
				])
			],
			resolve: {
				root: [path.join(__dirname, "../bower_components"), path.join(__dirname, "../src")]
			}
		}))
		.pipe(gulp.dest("test/"));
});
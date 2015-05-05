var gulp = require("gulp"),
	gutil = require("gutil"),
	webpack = require("gulp-webpack"),
	path = require("path");

gulp.task("script", function() {
    return _buildTask(false);
});

gulp.task("watch-script", function() {
	return _buildTask(true);
});

function _buildTask(watch) {
	return gulp.src("src/index.js")
        .pipe(webpack(_buildConfig(watch)))
        .pipe(gulp.dest("dist/"));
}

function _buildConfig(watch) {
	return {
		watch: watch || false,
		output: {
			filename: "bundle.js"
		},
		module: {
			loaders: [
				{ test: /\.js$/, loader: "jsx-loader" },
				{ test: /\.less$/, loader: "style!css!less" }
			]
		}
	};
}
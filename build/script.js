var gulp = require("gulp"),
	webpack = require("gulp-webpack-build"),
	path = require("path"),
    gutil = require("gulp-util"),
    moment = require("moment");

gulp.task("script", function() {
    return _buildTask(false);
});

gulp.task("watch-script", function() {
	return _buildTask(true);
});

function _buildTask(watch) {
    return gulp.src(webpack.config.CONFIG_FILENAME)
        .pipe(watch ? webpack.watch(_after) : webpack.compile(_after))
        .pipe(gulp.dest("dist/"));
}

function _after(err, stats) {
	if (err) {
		gutil.beep();
		_logErrors([err]);
	} else if (stats.compilation.errors.length > 0) {
		gutil.beep();
		_logErrors(stats.compilation.errors);
	} else
		gutil.log("Scripts recompiled. Time elapsed: " + moment.duration(stats.endTime - stats.startTime).asSeconds() + "s");
}

function _logErrors(errors) {
	for (var i = 0; i < errors.length; i++)
		gutil.log(gutil.colors.red(errors[i]));
}
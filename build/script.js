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
        .pipe(watch ? webpack.watch(_watchFired) : webpack.compile())
        .pipe(webpack.failAfter({
            errors: true
        }))
        .pipe(gulp.dest("dist/"));
}

function _watchFired(err, stats) {
    //gutil.log(webpack.format(stats));
    if (err)
        gutil.log(err);
    else
        gutil.log("Scripts recompiled. Time elapsed: " + moment.duration(stats.endTime - stats.startTime).asSeconds() + "s");
}
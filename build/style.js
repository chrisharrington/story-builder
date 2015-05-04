var gulp = require("gulp"),
	concat = require("gulp-concat-css"),
	watch = require("gulp-watch"),
	gutil = require("gulp-util");

gulp.task("style", function() {
	return _buildTask();
});

gulp.task("watch-style", ["style"], function() {
	watch(["assets/**/*.css", "bower_components/**/*.css"], function() {
		gutil.log("Asset styles updated.");
		_buildTask();
	});
});

function _buildTask() {
	return gulp.src(["assets/**/*.css", "bower_components/**/*.css"])
		.pipe(concat("bundle.css"))
		.pipe(gulp.dest("dist/"));
}
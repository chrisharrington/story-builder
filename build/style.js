var gulp = require("gulp"),
	concat = require("gulp-concat-css"),
	watch = require("gulp-watch"),
	gutil = require("gulp-util"),
	less = require("gulp-less");

gulp.task("style", function() {
	return _buildTask();
});

gulp.task("watch-style", ["style"], function() {
	watch(["assets/**/*.css", "src/style/**/*.less"], function() {
		gutil.log("Styles updated.");
		_buildTask();
	});
});

function _buildTask() {
	return gulp.src(["assets/**/*.css", "src/style/**/*.less"])
		.pipe(less())
		.pipe(concat("bundle.css"))
		.pipe(gulp.dest("dist/"));
}
var gulp = require("gulp"),
	runSequence = require("gulp-run-sequence");

gulp.task("watch", ["clean"], function() {
	runSequence(["watch-script", "assets", "watch-style", "watch-html"]);
});
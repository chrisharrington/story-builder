var gulp = require("gulp"),
	watch = require("gulp-watch"),
	rename = require("gulp-rename"),
	gutil = require("gulp-util");

gulp.task("html", function() {
	gulp.src("src/index.html")
		.pipe(gulp.dest("dist/"));
});

gulp.task("watch-html", ["html"], function() {
	watch("./src/*.html", function() {
		gutil.log("Index.html updated.");
		gulp.src("./src/index.html")
			.pipe(rename("index.html"))
			.pipe(gulp.dest("dist/"));
	});
});
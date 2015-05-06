var gulp = require("gulp"),
	webpack = require("gulp-webpack-build"),
	path = require("path");

gulp.task("script", function() {
    return _buildTask(false);
});

gulp.task("watch-script", function() {
	return _buildTask(true);
});

function _buildTask(watch) {
//	return gulp.src("src/index.js")
//        .pipe(gulpWebpack(_buildConfig(watch)))
//        .pipe(gulp.dest("dist/"));
    //gulp.src(path.join(src, '**', CONFIG_FILENAME), { base: path.resolve(src) })
    return gulp.src(webpack.config.CONFIG_FILENAME)
        .pipe(webpack.compile())
        .pipe(gulp.dest("dist/"));
}

function _buildConfig(watch) {
	return {
        output: {
            filename: "bundle.js"
        },
        module: {
            loaders: [
                { test: /\.js$/, loader: "jsx-loader" },
                { test: /\.less$/, loader: "style!css!less" }
            ]
        },
        plugins: [
            new webpack.ResolverPlugin([
                new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
            ])
        ],
        resolve: {
            root: [path.join(__dirname, "bower_components")]
        },
    };
}
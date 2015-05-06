var path = require("path"),
    webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "dist/bundle.js"
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
        root: [path.join(__dirname, "bower_components"), path.join(__dirname, "./src")]
    }
};
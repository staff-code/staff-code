const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const IgnoreNotFoundExportPlugin = require("ignore-not-found-export-webpack-plugin")
const common = require("./webpack.common.config")

module.exports = {
    ...common,
    mode: "production",
    entry: "./app/index.ts",
    output: {
        path: path.resolve(__dirname, "dist/app"),
        chunkFilename: "[name].[contenthash].js",
        filename: "main.[contenthash].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "StaffCode",
            meta: {viewport: "width=device-width, height=device-height, initial-scale=1, maximum-scale=1"},
        }),
        new FaviconsWebpackPlugin("./assets/favicon.png"),
        new webpack.ProvidePlugin({process: "process/browser"}),
        new IgnoreNotFoundExportPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                // TODO: FEATURE IMPROVE, READY TO GO: CONTENT HASH TO BUST CACHE FOR ALL ASSETS
                //  Can we hash these as well?
                //  {from: "assets/fonts/*", to: "assets/fonts/[name][contenthash]"},
                //  That almost works except it can't find the hashed files because they're not imported by webpack
                //  And I tried with file-loader and otf/woff extensions
                //  But it (new FontFace) didn't like that as a 2nd argument
                //  Even though it seems to take either a string or a data thing
                /*
                {
                    test: /\.(otf|woff)$/,
                    loader: "file-loader",
                }
                */
                {from: "assets/fonts", to: "assets/fonts"},
            ],
        }),
    ],
}

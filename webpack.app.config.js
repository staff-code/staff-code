const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const IgnoreNotFoundExportPlugin = require("ignore-not-found-export-webpack-plugin")
const common = require("./webpack.common.config")

// TODO: There may be some issue where GitHub pages is running a mix of new and old code
//  Maybe it started upon extracting from the Sagittal app
//  Maybe the chunks aren't getting hashed properly?

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
            meta: {viewport: "width=device-width, height=device-height, initial-scale=1"},
        }),
        new FaviconsWebpackPlugin("./assets/favicon.png"),
        new webpack.ProvidePlugin({process: "process/browser"}),
        new IgnoreNotFoundExportPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {from: "assets/fonts", to: "assets/fonts"},
            ],
        }),
    ],
}

const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")
const common = require("./webpack.common.config")
const IgnoreNotFoundExportPlugin = require("ignore-not-found-export-webpack-plugin")

module.exports = {
    ...common,
    mode: "production",
    entry: "./app/index.ts",
    output: {
        path: path.resolve(__dirname, "dist/app"),
        chunkFilename: "[name].bundle.js",
        filename: "main.[contenthash].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "StaffCode",
            meta: {viewport: "width=device-width, initial-scale=1"},
        }),
        new FaviconsWebpackPlugin("./assets/favicon.png"),
        new webpack.ProvidePlugin({process: "process/browser"}),
        new IgnoreNotFoundExportPlugin(),
    ],
}

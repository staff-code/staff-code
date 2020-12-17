const HtmlWebpackPlugin = require("html-webpack-plugin")
const IgnoreNotFoundExportPlugin = require('ignore-not-found-export-webpack-plugin')
const common = require("./webpack.common.config")

module.exports = {
    ...common,
    mode: "development",
    entry: "./qa/index.ts",
    devtool: "inline-source-map",
    devServer: {
        watchContentBase: true,
        contentBase: "dist",
    },
    plugins: [
        new HtmlWebpackPlugin({title: "StaffCode QA"}),
        new IgnoreNotFoundExportPlugin(),
    ],
}

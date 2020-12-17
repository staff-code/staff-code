const HtmlWebpackPlugin = require("html-webpack-plugin")
const IgnoreNotFoundExportPlugin = require('ignore-not-found-export-webpack-plugin')

// TODO: should DRY these two webpacks up

module.exports = {
    mode: "development",
    entry: "./qa/index.ts",
    resolve: {
        extensions: [".ts", ".scss", ".js"],
        alias: {
            buffer: "buffer",
        },
    },
    devtool: "inline-source-map",
    devServer: {
        watchContentBase: true,
        contentBase: "dist",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    compilerOptions: {
                        module: "esnext",
                    },
                    transpileOnly: true,
                },
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(otf|woff)$/,
                loader: "url-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({title: "StaffCode QA"}),
        new IgnoreNotFoundExportPlugin(),
    ],
}

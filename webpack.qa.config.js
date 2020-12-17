const HtmlWebpackPlugin = require("html-webpack-plugin")

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
    // TODO: Oh, do I still need all these externals now that I achieved tree-shaking? try remove them everywhere
    externals: {
        "fs": "{}",
        "jasmine-spec-reporter": "{}",
        "child_process": "{}",
        "perf_hooks": "{}",
        "path": "{}",
        "os": "{}",
        "util": "{}",
        "colors": "{}",
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
    ],
}

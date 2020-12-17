const path = require("path")
const IgnoreNotFoundExportPlugin = require('ignore-not-found-export-webpack-plugin');

module.exports = {
    entry: "./src/bbCode/index.ts",
    mode: "production",
    // TODO: and i can still look into the hyperoptimization of within a module excluding stuff i don't need
    optimization: {
        minimize: false,
    },
    output: {
        path: path.resolve(__dirname, "dist/bbCode"),
        filename: "staffCode.js",
    },
    resolve: {
        extensions: [".ts", ".scss", ".js"],
        alias: {
            buffer: "buffer",
        },
    },
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
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        },
                    },
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
        // The alternative is to switch all types, besides enums, to use `export type {}` and `import type {}`
        // instead of `export {}` and `import {}`. This might ignore some things I want. But I just don't feel like
        // doing all that work right now. And I feel like I should be able to just use `import {}` and `export {}`.
        // Maybe it's just an issue that `webpack` will fix eventually.
        new IgnoreNotFoundExportPlugin(),
    ],
}

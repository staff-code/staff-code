const path = require("path")
const IgnoreNotFoundExportPlugin = require('ignore-not-found-export-webpack-plugin')
const common = require("./webpack.common.config")

module.exports = {
    ...common,
    mode: "production",
    entry: "./src/bbCode/index.ts",
    optimization: {
        minimize: false,
    },
    output: {
        path: path.resolve(__dirname, "dist/bbCode"),
        filename: "staffCode.js",
    },
    plugins: [
        // The alternative is to switch all types, besides enums, to use `export type {}` and `import type {}`
        // instead of `export {}` and `import {}`. This might ignore some things I want. But I just don't feel like
        // doing all that work right now. And I feel like I should be able to just use `import {}` and `export {}`.
        // Maybe it's just an issue that `webpack` will fix eventually.
        new IgnoreNotFoundExportPlugin(),
    ],
}

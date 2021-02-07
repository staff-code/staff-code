const app = require("./webpack.app.config")

module.exports = {
    ...app,
    mode: "development",
    entry: "./app/index.ts",
    devtool: "inline-source-map",
    devServer: {
        watchContentBase: true,
        contentBase: "dist",
        watchOptions: {
            ignored: ["node_modules", "spec"],
        },
    },
}

const app = require("./webpack.app.config")

module.exports = {
    ...app,
    mode: "development",
    entry: "./app/index.ts",
    devtool: "inline-source-map",
    devServer: {
        // TODO: it watches node_modules but doesn't recompile them
        //  Maybe this helps? https://webpack.js.org/configuration/watch/
        watchContentBase: true,
        contentBase: "dist",
    },
}

const app = require("./webpack.app.config")

module.exports = {
    ...app,
    mode: "development",
    entry: "./app/index.ts",
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: 'dist',
            watch: true
        },
    },
    watchOptions: {
        ignored: ["node_modules", "spec"],
    },
}

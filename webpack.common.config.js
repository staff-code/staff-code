module.exports = {
    resolve: {
        extensions: [".ts", ".scss", ".js", ".json"],
        alias: {
            buffer: "buffer",
            path: "path-browserify",
        },
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
        ],
    },
}

module.exports = {
    resolve: {
        extensions: [".ts", ".scss", ".js", ".json"],
        alias: {
            buffer: "buffer",
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

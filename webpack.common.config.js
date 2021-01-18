module.exports = {
    resolve: {
        extensions: [".ts", ".scss", ".js", ".json"],
        alias: {
            buffer: "buffer",
            path: "path-browserify", // TODO: not great that this is a @sagittal/general text-to-svg thing for Node which is causing this problem; it should be the one to take care of it, not me
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

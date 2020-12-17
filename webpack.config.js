const path = require("path")

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
                loader: "awesome-typescript-loader",
                options: {
                    // TODO: solve export 'Unicode' (reexported as 'Unicode') was not found in './types' (possible exports: Code)
                    //  I'm pretty sure it's related to actually switching to esnext modules, not to ts-loader or awesome-ts-loader
                    //  which might mean you should switch back to ts-loader, if it's the one that's actually maintained
                    module: "esnext",
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
}

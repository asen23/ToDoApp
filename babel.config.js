module.exports = function (api) {
    api.cache(true)
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    extensions: [".tsx", ".js", ".ts"],
                    alias: {
                        screens: ["./screens"],
                        tailwind: ["./tailwind"],
                        type: ["./type"],
                        store: ["./store"],
                        hooks: ["./hooks"],
                        reduxSlice: ["./reduxSlice"],
                    },
                },
            ],
        ],
    }
}

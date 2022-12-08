import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export var buildCssLoader = function (options) {
    return {
        test: /\.css$/i,
        use: [
            options.isDev
                ? 'style-loader'
                : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\.module.?/,
                        localIdentName: options.isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [
                            [
                                'autoprefixer',
                            ],
                        ],
                    },
                },
            },
        ],
    };
};
//# sourceMappingURL=buildCssLoader.js.map
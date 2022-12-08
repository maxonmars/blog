export var buildBabelLoader = function (options) {
    return {
        test: /\.([jt])sx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        },
    };
};
//# sourceMappingURL=buildBabelLoader.js.map
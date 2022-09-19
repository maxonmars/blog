import webpack from "webpack";
import {BuildOptions} from "./types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
        ],
    };

    return [
        typescriptLoader,
        cssLoader,
    ]
}
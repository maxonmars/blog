import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildPath} from "./types";

export function buildPlugins(path: BuildPath): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: path.html,
        }),
        new webpack.ProgressPlugin(),
    ]
}
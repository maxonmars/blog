import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolve} from "./buildResolve";
import {BuildOptions} from "./types";

export function buildWebpackConfig({mode, path, isDev}: BuildOptions): webpack.Configuration {
    return {
        mode,
        entry: path.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: path.build,
            clean: true,
        },
        plugins: buildPlugins(path),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolve(),
    }
}
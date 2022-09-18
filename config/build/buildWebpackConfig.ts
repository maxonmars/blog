import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolve} from "./buildResolve";
import {BuildOptions} from "./types";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, path, isDev} = options;

    return {
        mode,
        entry: path.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: path.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolve(),
        devtool: isDev ? 'inline-source-map' : void 0,
        devServer: isDev ? buildDevServer(options) : void 0,
    }
}
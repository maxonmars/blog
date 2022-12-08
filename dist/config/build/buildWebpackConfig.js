import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { buildDevServer } from './buildDevServer';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
export function buildWebpackConfig(options) {
    var mode = options.mode, path = options.path, isDev = options.isDev;
    return {
        mode: mode,
        entry: path.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: path.build,
            clean: true,
            publicPath: '/',
        },
        optimization: {
            minimizer: [
                new CssMinimizerPlugin(),
            ],
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolve(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
//# sourceMappingURL=buildWebpackConfig.js.map
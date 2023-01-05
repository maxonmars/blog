import type webpack from 'webpack';
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildResolve} from './buildResolve';
import type {BuildOptions} from './types';
import {buildDevServer} from './buildDevServer';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {mode, path, isDev} = options;

	return {
		mode,
		entry: path.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: path.build,
			clean: true,
			publicPath: '/',
		},
		optimization: {
			minimize: true,
			minimizer: [
				new CssMinimizerPlugin(),
				new TerserPlugin(),
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

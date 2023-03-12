import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type {BuildOptions} from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export function buildPlugins({path, isDev, isHotRefresh, apiUrl, project}: BuildOptions): webpack.WebpackPluginInstance[] {
	const defaultMemoryLimit = 2048;
	const availableMemoryLimit = defaultMemoryLimit * 3;

	return [
		new HtmlWebpackPlugin({
			template: path.html,
		}),
		new webpack.ProgressPlugin(),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__API__: JSON.stringify(apiUrl),
			__PROJECT__: JSON.stringify(project),
		}),
		new CircularDependencyPlugin({
			exclude: /node_modules/,
			failOnError: true,
		}),
		new ForkTsCheckerWebpackPlugin({
			typescript: {
				diagnosticOptions: {
					semantic: true,
					syntactic: true,
				},
				mode: 'write-references',
				memoryLimit: availableMemoryLimit,
			},
		}),
		!isDev && new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		!isDev && new CopyPlugin({
			patterns: [
				{from: path.locales, to: path.buildLocales},
			],
		}),
		isDev && new BundleAnalyzerPlugin({
			openAnalyzer: false,
		}),
		isDev && isHotRefresh && new ReactRefreshPlugin(),
	].filter(Boolean) as webpack.WebpackPluginInstance[];
}

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type {BuildOptions} from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

export function buildPlugins({path, isDev, isHotRefresh}: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: path.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
		isDev && isHotRefresh && new ReactRefreshPlugin(),
		new BundleAnalyzerPlugin({
			openAnalyzer: false,
		}),
	].filter(Boolean);
}

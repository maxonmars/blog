import type webpack from 'webpack';
import type {BuildOptions} from './types';
import {buildBabelLoader} from './loaders/buildBabelLoader';
import {buildCssLoader} from './loaders/buildCssLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const svgLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: ['@svgr/webpack'],
	};

	const babelLoader = buildBabelLoader(options);

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const cssLoader = buildCssLoader(options);

	return [
		fileLoader,
		svgLoader,
		babelLoader,
		typescriptLoader,
		cssLoader,
	];
}

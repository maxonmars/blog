import type webpack from 'webpack';
import type {BuildOptions} from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

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

	const babelLoader = {
		test: /\.([jt])sx?$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
		},
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const cssLoader = {
		test: /\.css$/i,
		use: [
			options.isDev
				? 'style-loader'
				: MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: /\.module.?/,
						localIdentName: options.isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]',
					},
				},
			},
			{
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						plugins: [
							[
								'postcss-preset-env',
							],
						],
					},
				},
			},
		],
	};

	return [
		fileLoader,
		svgLoader,
		babelLoader,
		typescriptLoader,
		cssLoader,
	];
}

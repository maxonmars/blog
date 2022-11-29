import type {BuildOptions} from '../types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (options: BuildOptions) => {
	return {
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
								'autoprefixer',
							],
						],
					},
				},
			},
		],
	};
};

import type {BuildOptions} from '../types';
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

export const buildBabelLoader = (options: BuildOptions) => {
	return {
		test: /\.([jt])sx?$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				cacheDirectory: true,
				presets: [
					'@babel/preset-env',
					[
						'@babel/preset-react',
						{runtime: 'automatic'},
					],
					'@babel/preset-typescript',
				],
				plugins: [
					'@babel/plugin-transform-runtime',
					!options.isDev && [
						babelRemovePropsPlugin,
						{forbiddenNodeNames: ['data-testid']},
					],
				].filter(Boolean),
			},
		},
	};
};

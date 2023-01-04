import type {BuildOptions} from '../types';

export const buildBabelLoader = (options: BuildOptions) => {
	return {
		test: /\.([jt])sx?$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
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
				],
			},
		},
	};
};

import type {BuildOptions} from '../types';

export const buildBabelLoader = (options: BuildOptions) => {
	return {
		test: /\.([jt])sx?$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
		},
	};
};

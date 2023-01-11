import type webpack from 'webpack';
import type {BuildOptions} from './types';

export function buildResolve(options: BuildOptions): webpack.ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [options.path.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {
			'@': options.path.src,
		},
	};
}

import path from 'path';
import type {BuildPath} from '../build/types';
import type {RuleSetRule, Configuration} from 'webpack';
import {DefinePlugin} from 'webpack';

const buildPath: BuildPath = {
	entry: '',
	build: '',
	html: '',
	src: path.resolve(__dirname, '..', '..', 'src'),
};

export default ({config}: {config: Configuration}) => {
	// disable whatever is already set to load SVGs
	// add SVGR instead
	// resolve absolute path
	return {
		...config,
		module: {
			rules: config.module.rules.map((rule: RuleSetRule) => {
				if (RegExp(rule.test as RegExp).test('.svg')) {
					return {...rule, exclude: /\.svg$/i};
				}

				return rule;
			}).concat({
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ['@svgr/webpack'],
			}),
		},
		plugins: [
			...config.plugins,
			new DefinePlugin({
				__IS_DEV__: true,
				__API__: '',
			}),
		],
		resolve: {
			...config.resolve,
			modules: [buildPath.src, ...config.resolve.modules],
			extensions: [...config.resolve.extensions, '.tsx', '.ts'],
		},
	} as Configuration;
};

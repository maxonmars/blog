import path from 'path';
import type {BuildPath} from '../build/types';
import type {RuleSetRule, Configuration} from 'webpack';

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
	console.log(config);
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
		resolve: {
			...config.resolve,
			modules: [...config.resolve.modules, buildPath.src],
			extensions: [...config.resolve.extensions, '.tsx', '.ts'],
		},
	} as Configuration;
};

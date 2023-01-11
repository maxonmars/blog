import path from 'path';
import type {BuildPath} from '../build/types';
import type {RuleSetRule, Configuration, WebpackPluginInstance} from 'webpack';
import {DefinePlugin} from 'webpack';

const buildPath: BuildPath = {
	entry: '',
	build: '',
	html: '',
	locales: '',
	buildLocales: '',
	src: path.resolve(__dirname, '..', '..', 'src'),
};

interface Resolve {
	modules: string[];
	extensions: string[];
}

interface Module {
	rules: RuleSetRule[];
}

interface Config extends Configuration {
	plugins: WebpackPluginInstance[];
	resolve: Resolve;
	module: Module;
}

export default ({config}: {config: Config}) => {
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
				__IS_DEV__: JSON.stringify(true),
				__API__: JSON.stringify(''),
				__PROJECT__: JSON.stringify('storybook'),
			}),
		],
		resolve: {
			...config.resolve,
			modules: [buildPath.src, ...config.resolve.modules],
			extensions: [...config.resolve.extensions, '.tsx', '.ts'],
			alias: {
				'@': buildPath.src,
			},
		},
	} as Configuration;
};

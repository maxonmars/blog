module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
		'plugin:react/jsx-runtime',
		'plugin:storybook/recommended',
	],
	overrides: [{
		extends: ['xo-typescript'],
		files: ['*.ts', '*.tsx'],
		rules: {
			'@typescript-eslint/consistent-type-assertions': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
			'@typescript-eslint/naming-convention': ['error', {
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
				types: ['boolean'],
				prefix: ['is', 'has'],
			}, {
				selector: ['interface', 'enum'],
				format: ['PascalCase'],
			}, {
				selector: 'typeParameter',
				format: ['PascalCase'],
				prefix: ['T'],
			}],
		},
	}],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'i18next',
		'react-hooks',
	],
	rules: {
		'i18next/no-literal-string': 1,
		'capitalized-comments': 'off',
		'arrow-body-style': 'off',
		'spaced-comment': 'off',
		'jsx-quotes': ['error', 'prefer-double'],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
	},
	globals: {
		__IS_DEV__: true,
	},
};

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
		'plugin:react/jsx-runtime',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
			rules: {
				'@typescript-eslint/ban-ts-comment': 'off',
				'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'variable',
						format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
						types: ['boolean'],
						prefix: ['is'],
					},
					{
						selector: ['interface', 'enum'],
						format: ['PascalCase'],
					},
					{
						selector: 'typeParameter',
						format: ['PascalCase'],
						prefix: ['T'],
					},
				],
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'capitalized-comments': 'off',
	},
	globals: {
		__IS_DEV__: true,
	},
};

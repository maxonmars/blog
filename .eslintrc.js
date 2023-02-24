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
	overrides: [
		{
			extends: ['xo-typescript'],
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/indent': 'off',
				'@typescript-eslint/parameter-properties': 'off',
				'@typescript-eslint/consistent-type-assertions': 'off',
				'@typescript-eslint/ban-ts-comment': 'off',
				'@typescript-eslint/consistent-type-definitions': [
					'error',
					'interface',
				],
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'variable',
						format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
						types: ['boolean'],
						prefix: ['is', 'has'],
					},
					{
						selector: ['interface', 'enum'],
						format: ['PascalCase'],
					},
					{
						selector: 'typeParameter',
						format: ['PascalCase'],
					},
				],
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'i18next', 'react-hooks', 'fsd-strict', 'unused-imports'],
	rules: {
		'unused-imports/no-unused-imports': 'error',
		'i18next/no-literal-string': 1,
		'capitalized-comments': 'off',
		'arrow-body-style': 'off',
		'spaced-comment': 'off',
		'jsx-quotes': ['error', 'prefer-double'],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'fsd-strict/path-checker': ['error', {alias: '@'}],
		'fsd-strict/public-api-imports': [
			'error',
			{
				alias: '@',
				testFilesPatterns: [
					'**/*.test.ts',
					'**/*.test.ts',
					'**/StoreDecorator.tsx',
					'**/*.mock.ts',
				],
			},
		],
		'fsd-strict/layer-imports': [
			'error',
			{
				alias: '@',
				ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
			},
		],
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true,
	},
};

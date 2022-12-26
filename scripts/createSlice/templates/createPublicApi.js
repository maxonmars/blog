const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');

const getTemplate = (componentName, schemaName) => (
	`export {${componentName}} from './ui/${componentName}/${componentName}';
export type {${firstCharUpperCase(schemaName)}} from './model/types/${schemaName}';
`);

module.exports = async (layer, sliceName) => {
	const componentName = firstCharUpperCase(sliceName);
	const schemaName = `${sliceName}Schema`;

	try {
		await fs.writeFile(
			resolveRoot('src', layer, sliceName, 'index.ts'),
			getTemplate(componentName, schemaName),
		);
	} catch {
		console.log('Не удалось создать PUBLIC API');
	}
};

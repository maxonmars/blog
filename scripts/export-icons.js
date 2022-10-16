const path = require('path');
const fs = require('fs');

const camelSentence = str => {
	return (' ' + str)
		.toLowerCase()
		.replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
};

const iconsPath = path.resolve(__dirname, '..', 'src', 'shared', 'assets', 'icons');
const svgPath = `${iconsPath}/svg`;
const publicApi = `${iconsPath}/index.ts`;
const filterRegex = /\.svg$/;

fs.readdir(svgPath, (err, files) => {
	if (!files) {
		console.error('Files not found');
	}

	const icons = files
		.filter(file => file.match(filterRegex))
		.map(file => {
			const componentName = `Ico${camelSentence(file.replace(/\.svg/, ''))}`;
			return `export {default as ${componentName}} from './svg/${file}';`;
		});

	fs.writeFileSync(publicApi, [...icons, ''].join('\n'));

	console.log('DONE!');
});

const firstCharToLowerCase = require('../firstCharLowerCase');

module.exports = componentName => (
	`.${firstCharToLowerCase(componentName)} {}
`);

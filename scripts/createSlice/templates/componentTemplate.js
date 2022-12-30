const firstCharToLowerCase = require('../firstCharLowerCase');
const interfaceConst = 'interface';

module.exports = componentName => (
	`import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import module from './${componentName}.module.css';
import {memo} from 'react';

${interfaceConst} ${componentName}Props {
	className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
	const {className} = props;
	const {t} = useTranslation();

	return (
		<div className={classNames([module.${firstCharToLowerCase(componentName)}, className])}>
			${componentName}
		</div>
	);
});

${componentName}.displayName = '${componentName}';
`);

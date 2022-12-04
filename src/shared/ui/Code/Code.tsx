import module from './Code.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonSize, ButtonVariant} from 'shared/ui/Button/Button';
import {IcoThinCopy} from 'shared/assets/icons/index';

interface CodeProps {
	className?: string;
	children: string;
}

export const Code = ({className, children}: CodeProps) => {
	const handleCopy = () => {
		void navigator.clipboard.writeText(children);
	};

	return (
		<pre className={classNames([module.codeWrapper, className])}>
			<code className={module.codeBlock}>
				{children}
			</code>
			<Button onClick={handleCopy} className={module.copyBtn} square variant={ButtonVariant.SUBTLE} size={ButtonSize.SM}>
				<IcoThinCopy className={module.copyIcon}/>
			</Button>
		</pre>
	);
};

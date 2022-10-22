import type React from 'react';
import {useState} from 'react';
import module from './Navbar.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Modal} from 'shared/ui/Modal/Modal';
import {Button, ButtonSize, ButtonVariant} from 'shared/ui/Button/Button';

const activeStyle = ({isActive}: {isActive: boolean}): React.CSSProperties =>
	isActive
		? {color: 'var(--secondary-color-inverted)'}
		: {color: 'var(--primary-color-inverted)'};

interface NavbarProps {
	className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
	const {t} = useTranslation('translation');
	const [isOpened, setIsOpened] = useState(false);

	return (
		<div className={classNames([module.navbar, className])}>
			<div className={module.logo}>LOGO</div>
			<div className={module.links}>
				<Button size={ButtonSize.SM} variant={ButtonVariant.FILLED} onClick={() => {
					setIsOpened(true);
				}}>
					{t('Войти')}
				</Button>
				<Modal
					title="MODAL HEADER"
					isOpened={isOpened}
					onClose={() => {
						setIsOpened(false);
					}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, maiores!
				</Modal>
			</div>
		</div>
	);
};

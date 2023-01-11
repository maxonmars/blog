import module from './Drawer.module.css';
import {CSSTransition} from 'react-transition-group';
import {Overlay} from '../Overlay/Overlay';
import type {TitleOrder} from '../Title/Title';
import {Title} from '../Title/Title';
import {Button, ButtonSize, ButtonVariant} from '../Button/Button';
import {IcoThinXmark} from '@/shared/assets/icons';
import {Portal} from '../Portal/Portal';
import type {ReactNode} from 'react';
import {useEffect, useState} from 'react';

type DrawerChildren =
	| ReactNode
	| ((onClose: () => void) => ReactNode);

interface DrawerProps {
	children: DrawerChildren;
	isOpened: boolean;
	onClose: () => void;
	title: string | ReactNode;
	titleOrder?: TitleOrder;
}

const overlayAnimation = {
	appear: module.overlayEnterStart,
	appearActive: module.overlayEnterDone,
	exit: module.overlayExitStart,
	exitActive: module.overlayExitDone,
};

const contentAnimation = {
	appear: module.contentAppear,
	appearActive: module.contentAppearActive,
	exit: module.contentExit,
	exitActive: module.contentExitActive,
};

const ANIMATION_TIME = 300;

export const Drawer = (props: DrawerProps) => {
	const {isOpened, children, onClose, title, titleOrder} = props;

	const [isClose, setIsClose] = useState(false);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setIsClose(true);
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	if (!isOpened) {
		return null;
	}

	const handleClose = () => {
		setIsClose(true);
	};

	const handleExited = () => {
		onClose();
		setIsClose(false);
	};

	return (
		<Portal>
			<div className={module.portalLayer}>
				<CSSTransition
					appear
					in={!isClose}
					timeout={ANIMATION_TIME}
					classNames={overlayAnimation}
				>
					<Overlay onClose={handleClose}/>
				</CSSTransition>
				<CSSTransition
					appear
					in={!isClose}
					timeout={ANIMATION_TIME}
					classNames={contentAnimation}
					onExited={handleExited}
				>
					<div className={module.drawer}>
						<div className={module.header}>
							<Title order={titleOrder}>{title}</Title>
							<Button
								onClick={handleClose}
								variant={ButtonVariant.SUBTLE}
								size={ButtonSize.SM}
								square>
								<IcoThinXmark/>
							</Button>
						</div>
						{typeof children === 'function'
							? children(handleClose)
							: children
						}
					</div>
				</CSSTransition>
			</div>
		</Portal>
	);
};

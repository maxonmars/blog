import module from './Modal.module.css';
import type {ReactNode} from 'react';
import {useCallback, useEffect, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import {Portal} from 'shared/ui/Portal/Portal';
import {Overlay} from 'shared/ui/Overlay/Overlay';
import {Button, ButtonSize, ButtonVariant} from 'shared/ui/Button/Button';
import {IcoThinXmark} from 'shared/assets/icons';

interface ModalProps {
	children: ReactNode;
	isOpened: boolean;
	onClose: () => void;
	title: string | ReactNode;
}

const overlayAnimation = {
	appearActive: module.overlayAppearActive,
	exitActive: module.overlayExitActive,
};

const contentAnimation = {
	appear: module.contentAppear,
	appearActive: module.contentAppearActive,
	exit: module.contentExit,
	exitActive: module.contentExitActive,
};

const ANIMATION_TIME = 1000;

export const Modal = ({isOpened, children, onClose, title}: ModalProps) => {
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
					onExited={() => {
						onClose();
						setIsClose(false);
					}}
				>
					<div className={module.modal}>
						<div className={module.header}>
							<div>{title}</div>
							<Button
								onClick={handleClose}
								variant={ButtonVariant.SUBTLE}
								size={ButtonSize.SM}
								square>
								<IcoThinXmark/>
							</Button>
						</div>
						{children}
					</div>
				</CSSTransition>
			</div>
		</Portal>
	);
};


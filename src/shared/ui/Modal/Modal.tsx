import {IcoThinXmark} from '@/shared/assets/icons';
import type {ReactNode} from 'react';
import {useEffect, useRef, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import {Button, ButtonSize, ButtonVariant} from '../Button/Button';
import {Overlay} from '../Overlay/Overlay';
import {Portal} from '../Portal/Portal';
import type {TitleOrder} from '../Title/Title';
import {Title} from '../Title/Title';
import module from './Modal.module.css';

type ModalChildren =
	| ReactNode
	| ((onClose: (onExtraClose?: () => void) => () => void) => ReactNode);

interface ModalProps {
	children: ModalChildren;
	isOpened: boolean;
	onClose: () => void;
	title: string | ReactNode;
	titleOrder?: TitleOrder;
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

export const Modal = ({isOpened, children, onClose, title, titleOrder}: ModalProps) => {
	const onExtraCloseRef = useRef<(() => void) | undefined>(undefined);
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

	const handleClose = (onExtraClose?: () => void) => () => {
		onExtraCloseRef.current = onExtraClose;
		setIsClose(true);
	};

	const handleExited = () => {
		if (onExtraCloseRef.current) {
			onExtraCloseRef.current?.();
		} else {
			onClose();
		}

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
					<Overlay onClose={handleClose()}/>
				</CSSTransition>
				<CSSTransition
					appear
					in={!isClose}
					timeout={ANIMATION_TIME}
					classNames={contentAnimation}
					onExited={handleExited}
				>
					<div className={module.modal}>
						<div className={module.header}>
							<Title order={titleOrder}>{title}</Title>
							<Button
								onClick={handleClose()}
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


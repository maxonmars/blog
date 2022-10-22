import module from './Overlay.module.css';
import {classNames} from 'shared/lib/classNames/classNames';

interface OverlayProps {
	className?: string;
	onClose: () => void;
}

export const Overlay = ({className, onClose}: OverlayProps) => {
	return (
		<div onClick={onClose} className={classNames([module.overlay, className])}/>
	);
};

import module from './Loader.module.css';
import {classNames} from '@/shared/lib/classNames/classNames';

interface LoaderProps {
	className?: string;
}

export const Loader = ({className}: LoaderProps) => {
	return (
		<div className={classNames([module.loader, className])}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

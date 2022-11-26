import module from './Select.module.css';
import {classNames} from 'shared/lib/classNames/classNames';

interface SelectProps {
	className?: string;
}

export const Select = ({className}: SelectProps) => {
	return (
		<div className={classNames([module.select, className])}>

		</div>
	);
};

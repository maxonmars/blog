import module from './Avatar.module.css';
import {classNames} from 'shared/lib/classNames/classNames';

interface AvatarProps {
	className?: string;
}

export const Avatar = ({className}: AvatarProps) => {
	return (
		<div className={classNames([module.avatar, className])}>

		</div>
	);
};

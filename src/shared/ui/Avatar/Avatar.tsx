import module from './Avatar.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ImgHTMLAttributes} from 'react';

export enum AvatarSize {
	SM = '50px',
	MD = '100px',
	LG = '150px',
}

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
	size?: AvatarSize;
}

export const Avatar = ({className, size = AvatarSize.SM, ...restProps}: AvatarProps) => {
	return <img {...restProps} width={size} alt="avatar" className={classNames([module.avatar, className])}/>;
};

import module from './Avatar.module.css';
import {classNames} from '@/shared/lib/classNames/classNames';
import type {ImgHTMLAttributes} from 'react';
import {memo} from 'react';
import {AppImage} from '../AppImage';
import {IcoThinCircleUser} from '@/shared/assets/icons';
import {Skeleton} from '../Skeleton';

export enum AvatarSize {
	SM = '50px',
	MD = '100px',
	LG = '200px',
}

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
	size?: AvatarSize;
}

export const Avatar = memo(({className, size = AvatarSize.SM, alt = 'аватар', ...restProps}: AvatarProps) => {
	const errorFallback = <IcoThinCircleUser width={size}/>;
	const fallback = <Skeleton width={size} height={size} borderRadius="50%"/>;

	return (
		<AppImage
			{...restProps}
			width={size}
			height={size}
			className={classNames([module.avatar, className])}
			alt={alt}
			fallback={fallback}
			errorFallback={errorFallback}/>);
});

Avatar.displayName = 'Avatar';

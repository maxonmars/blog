import module from './PageLoader.module.css';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Loader} from '@/shared/ui/Loader';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader = ({className}: PageLoaderProps) => {
	return (
		<div className={classNames([module.pageLoader, className])}>
			<Loader/>
		</div>
	);
};

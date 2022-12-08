import module from './CommentList.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {Text} from 'shared/ui/Text/Text';
import {useTranslation} from 'react-i18next';
import {CommentCard} from '../CommentCard/CommentCard';
import type {Comment} from '../../model/types/comment';

interface CommentListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}

export const CommentList = ({className, comments, isLoading}: CommentListProps) => {
	const {t} = useTranslation();

	if (isLoading) {
		return (
			<div className={classNames([module.commentList, className])}>
				<CommentCard isLoading/>
				<CommentCard isLoading/>
				<CommentCard isLoading/>
			</div>
		);
	}

	return (
		<div className={classNames([module.commentList, className])}>
			{comments?.length
				? comments.map(comment => {
					return <CommentCard isLoading={isLoading} key={comment.id} comment={comment}/>;
				})
				: <Text>{t('Комментарии отсутствуют')}</Text>}
		</div>
	);
};

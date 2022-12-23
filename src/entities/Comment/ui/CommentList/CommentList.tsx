import {classNames} from 'shared/lib/classNames/classNames';
import {Text} from 'shared/ui/Text/Text';
import {useTranslation} from 'react-i18next';
import {CommentCard} from '../CommentCard/CommentCard';
import type {Comment} from '../../model/types/comment';
import {VStack} from 'shared/ui/Stack';

interface CommentListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}

export const CommentList = ({className, comments, isLoading}: CommentListProps) => {
	const {t} = useTranslation();

	if (isLoading) {
		return (
			<VStack gap="1" isMax className={classNames([className])}>
				<CommentCard isLoading/>
				<CommentCard isLoading/>
				<CommentCard isLoading/>
			</VStack>
		);
	}

	return (
		<VStack gap="1" isMax className={classNames([className])}>
			{comments?.length
				? comments.map(comment => {
					return <CommentCard key={comment.id} comment={comment}/>;
				})
				: <Text>{t('Комментарии отсутствуют')}</Text>}
		</VStack>
	);
};

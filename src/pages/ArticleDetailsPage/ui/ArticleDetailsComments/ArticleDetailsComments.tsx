import {selectArticleDetailsError} from '@/entities/Article';
import {CommentList} from '@/entities/Comment';
import {AddCommentForm} from '@/features/addCommentForm';
import {useAppDispatch} from '@/shared/hooks';
import {useInitialEffect} from '@/shared/hooks/useInitialEffect/useInitialEffect';
import {classNames} from '@/shared/lib/classNames/classNames';
import {VStack} from '@/shared/ui/Stack';
import {Title} from '@/shared/ui/Title';
import {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {selectArticleDetailsCommentsIsLoading} from '../../model/selectors/comments';
import {fetchCommentsByArticleId} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {sendComment} from '../../model/services/sendComment/sendComment';
import {selectArticleComments} from '../../model/slice/articleDetailsCommentsSlice';
import module from './ArticleDetailsComments.module.css';

interface ArticleDetailsCommentsProps {
	className?: string;
	articleId?: string;
}

export const ArticleDetailsComments = ({className, articleId}: ArticleDetailsCommentsProps) => {
	const {t} = useTranslation('articleDetailsPage');
	const dispatch = useAppDispatch();

	const isLoading = useSelector(selectArticleDetailsCommentsIsLoading);
	const error = useSelector(selectArticleDetailsError);
	const comments = useSelector(selectArticleComments.selectAll);

	useInitialEffect(useCallback(() => {
		void dispatch(fetchCommentsByArticleId(articleId));
	}, [dispatch, articleId]));

	const handleCommentSend = useCallback((text: string) => {
		void dispatch(sendComment(text));
	}, [dispatch]);

	return (
		<VStack gap="2" className={classNames([module.ArticleDetailsComments, className])}>
			<Title order={3}>{t('Комментарии')}</Title>
			<AddCommentForm onCommentSend={handleCommentSend}/>
			<CommentList isLoading={isLoading} comments={comments}/>
		</VStack>
	);
};

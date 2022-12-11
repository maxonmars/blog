import module from './ArticleDetailsPage.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {useNavigate, useParams} from 'react-router-dom';
import {Text} from 'shared/ui/Text/Text';
import {CommentList} from 'entities/Comment';
import type {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articleDetailsCommentsReducer, selectArticleComments} from '../../model/slice/articleDetailsCommentsSlice';
import {useSelector} from 'react-redux';
import {selectArticleDetailsError} from 'entities/Article/model/selectors/selectArticleDetails';
import {useInitialEffect} from 'shared/hooks/useInitialEffect/useInitialEffect';
import {useAppDispatch} from 'shared/hooks';
import {useCallback} from 'react';
import {fetchCommentsByArticleId} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {ArticleDetails} from 'entities/Article';
import {AddCommentForm} from 'features/addCommentForm';
import {sendComment} from '../../model/services/sendComment/sendComment';
import {selectArticleDetailsCommentsIsLoading} from '../../model/selectors/comments';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import {ROUTE_PATH} from 'app/providers/router';

interface ArticleDetailsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
	const {t} = useTranslation('articleDetailsPage');
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {id} = useParams<{id: string}>();

	const isLoading = useSelector(selectArticleDetailsCommentsIsLoading);
	const error = useSelector(selectArticleDetailsError);
	const comments = useSelector(selectArticleComments.selectAll);

	useInitialEffect(useCallback(() => {
		void dispatch(fetchCommentsByArticleId(id));
	}, [dispatch, id]));

	const handleCommentSend = useCallback((text: string) => {
		void dispatch(sendComment(text));
	}, [dispatch]);

	const handleArticleListBack = useCallback(() => {
		navigate(ROUTE_PATH.ARTICLES);
	}, [navigate]);

	if (!id) {
		return (
			<div className={classNames([module.articleDetailsPage, className])}>
				{t('Статья не найдена')}
			</div>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
			<div className={classNames([module.articleDetailsPage, className])}>
				<Button
					onClick={handleArticleListBack}
					variant={ButtonVariant.OUTLINE}>
					{t('Назад к списку')}
				</Button>
				<ArticleDetails id={id}/>
				<Text>{t('Комментарии')}</Text>
				<AddCommentForm onCommentSend={handleCommentSend}/>
				<CommentList isLoading={isLoading} comments={comments}/>
			</div>
		</DynamicModuleLoader>
	);
};

export default ArticleDetailsPage;

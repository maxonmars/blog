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
import {ArticleDetails, ArticleList} from 'entities/Article';
import {AddCommentForm} from 'features/addCommentForm';
import {sendComment} from '../../model/services/sendComment/sendComment';
import {selectArticleDetailsCommentsIsLoading} from '../../model/selectors/comments';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import {ROUTE_PATH} from 'app/providers/router';
import {
	articleDetailsRecommendationsReducer, selectArticleRecommendations,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsRecommendationsSlice';
import {
	selectArticleDetailsRecommendationsError,
	selectArticleDetailsRecommendationsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/recommendations';
import {
	fetchArticleRecommendations,
} from 'pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import {Title} from 'shared/ui/Title/Title';
import {articleDetailsPageReducer} from 'pages/ArticleDetailsPage/model/slice';

interface ArticleDetailsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
	const {t} = useTranslation('articleDetailsPage');
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {id} = useParams<{id: string}>();

	const isLoading = useSelector(selectArticleDetailsCommentsIsLoading);
	const error = useSelector(selectArticleDetailsError);
	const comments = useSelector(selectArticleComments.selectAll);
	const recommendations = useSelector(selectArticleRecommendations.selectAll);
	const isLoadingRecommendations = useSelector(selectArticleDetailsRecommendationsIsLoading);
	const errorRecommendations = useSelector(selectArticleDetailsRecommendationsError);

	useInitialEffect(useCallback(() => {
		void dispatch(fetchCommentsByArticleId(id));
		void dispatch(fetchArticleRecommendations());
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
				<Title order={3}>{t('Рекомендуем')}</Title>
				<ArticleList articles={recommendations} target="_blank" isLoading={isLoadingRecommendations}/>
				<Title order={3}>{t('Комментарии')}</Title>
				<AddCommentForm onCommentSend={handleCommentSend}/>
				<CommentList isLoading={isLoading} comments={comments}/>
			</div>
		</DynamicModuleLoader>
	);
};

export default ArticleDetailsPage;

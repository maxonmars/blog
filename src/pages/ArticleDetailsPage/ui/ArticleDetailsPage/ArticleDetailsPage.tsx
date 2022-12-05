import module from './ArticleDetailsPage.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {useParams} from 'react-router-dom';
import {Text} from 'shared/ui/Text/Text';
import {CommentList} from 'entities/Comment';
import type {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
	articleDetailsCommentsReducer,
	selectArticleComments,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import {useSelector} from 'react-redux';
import {
	selectArticleDetailsError,
	selectArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/selectArticleDetails';
import {useInitialEffect} from 'shared/hooks/useInitialEffect/useInitialEffect';
import {useAppDispatch} from 'shared/hooks';
import {useCallback} from 'react';
import {
	fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {ArticleDetails} from 'entities/Article';

interface ArticleDetailsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
	const {t} = useTranslation('articleDetailsPage');
	const dispatch = useAppDispatch();
	const {id} = useParams<{id: string}>();

	const isLoading = useSelector(selectArticleDetailsIsLoading);
	const error = useSelector(selectArticleDetailsError);
	const comments = useSelector(selectArticleComments.selectAll);

	useInitialEffect(useCallback(() => {
		void dispatch(fetchCommentsByArticleId(id));
	}, [dispatch, id]));

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
				<ArticleDetails id={id}/>
				<Text>{t('Комментарии')}</Text>
				<CommentList isLoading={isLoading} comments={comments}/>
			</div>
		</DynamicModuleLoader>
	);
};

export default ArticleDetailsPage;

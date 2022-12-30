import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {useParams} from 'react-router-dom';
import type {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {ArticleDetails} from 'entities/Article';
import {articleDetailsPageReducer} from '../../model/slice';
import {ArticleDetailsPageHeader} from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {VStack} from 'shared/ui/Stack';
import {ArticleRecommendationsList} from 'features/articleRecommendationsList';
import {ArticleDetailsComments} from '../ArticleDetailsComments/ArticleDetailsComments';

interface ArticleDetailsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
	const {t} = useTranslation('articleDetailsPage');
	const {id} = useParams<{id: string}>();

	if (!id) {
		return (
			<div className={classNames([className])}>
				{t('Статья не найдена')}
			</div>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
			<VStack gap="2" isMax>
				<ArticleDetailsPageHeader/>
				<ArticleDetails id={id}/>
				<ArticleRecommendationsList/>
				<ArticleDetailsComments articleId={id}/>
			</VStack>
		</DynamicModuleLoader>
	);
};

export default ArticleDetailsPage;

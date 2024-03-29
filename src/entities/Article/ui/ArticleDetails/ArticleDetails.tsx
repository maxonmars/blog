import {IcoThinCalendarDays, IcoThinEyeEvil, IcoThinImageSlash} from '@/shared/assets/icons/index';
import {useAppDispatch} from '@/shared/hooks';
import {classNames} from '@/shared/lib/classNames/classNames';
import type {ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {DynamicModuleLoader} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {AppImage} from '@/shared/ui/AppImage';
import {Skeleton} from '@/shared/ui/Skeleton';
import {HStack, VStack} from '@/shared/ui/Stack';
import {Text, TextVariant} from '@/shared/ui/Text';
import {Title} from '@/shared/ui/Title';
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {ArticleBlockType} from '../../model/consts/article';
import {
	selectArticleDetailsData,
	selectArticleDetailsError,
	selectArticleDetailsIsLoading,
} from '../../model/selectors/selectArticleDetails';
import {fetchArticleById} from '../../model/services/fetchArticleById/fetchArticleById';
import {articleDetailsReducer} from '../../model/slice/articleDetailsSlice';
import type {ArticleBlock} from '../../model/types/article';
import {ArticleCodeBlockComponent} from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {ArticleImageBlockComponent} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import {ArticleTextBlockComponent} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import module from './ArticleDetails.module.css';

interface ArticleDetailsProps {
	className?: string;
	id?: string;
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
};

const renderBlock = (block: ArticleBlock) => {
	switch (block.type) {
		case ArticleBlockType.CODE: {
			return <ArticleCodeBlockComponent key={block.id} block={block}/>;
		}

		case ArticleBlockType.IMAGE: {
			return <ArticleImageBlockComponent key={block.id} block={block}/>;
		}

		case ArticleBlockType.TEXT: {
			return <ArticleTextBlockComponent key={block.id} block={block}/>;
		}

		default: {
			return null;
		}
	}
};

const errorFallback = <IcoThinImageSlash width={200}/>;

const fallback = <Skeleton height={200} width={200} borderRadius="50%" className={module.coverImage}/>;

export const ArticleDetails = ({className, id}: ArticleDetailsProps) => {
	const {t} = useTranslation();
	const dispatch = useAppDispatch();
	const article = useSelector(selectArticleDetailsData);
	const isLoading = useSelector(selectArticleDetailsIsLoading);
	const error = useSelector(selectArticleDetailsError);

	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			void dispatch(fetchArticleById(id));
		}
	}, [dispatch, id]);

	let content;
	if (isLoading) {
		content = (
			<>
				<HStack justify="center" isMax>
					<Skeleton width={200} height={200} borderRadius={'50%'}/>
				</HStack>
				<Skeleton width={300} height={32}/>
				<Skeleton width={600} height={24}/>
				<Skeleton width="100%" height={200}/>
				<Skeleton width="100%" height={200}/>
			</>);
	} else if (error) {
		content = <Text variant={TextVariant.RED}>{t('Произошла ошибка при загрузке статьи.')}</Text>;
	} else {
		content = (
			<>
				<HStack justify="center" isMax>
					<AppImage
						className={module.articleDetailsCover}
						src={article?.img}
						width={200}
						height={200}
						errorFallback={errorFallback}
						fallback={fallback}/>
				</HStack>
				<Title order={1}>{article?.title}</Title>
				<Title order={2}>{article?.subtitle}</Title>
				<VStack gap="0.5" data-testid="ArticleDetails.Info">
					<HStack gap="1">
						<IcoThinEyeEvil width="20"/>
						<Text>{article?.views}</Text>
					</HStack>
					<HStack gap="1">
						<IcoThinCalendarDays width="20"/>
						<Text>{article?.createdAt}</Text>
					</HStack>
				</VStack>
				{article?.blocks.map(renderBlock)}
			</>);
	}

	return (
		<DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
			<VStack role="article" gap="1.5" isMax className={classNames([className])}>
				{content}
			</VStack>
		</DynamicModuleLoader>
	);
};

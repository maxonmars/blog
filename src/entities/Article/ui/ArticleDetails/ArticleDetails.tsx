import {classNames} from 'shared/lib/classNames/classNames';
import type {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articleDetailsReducer} from '../../model/slice/articleDetailsSlice';
import {useAppDispatch} from 'shared/hooks';
import {useEffect} from 'react';
import {fetchArticleById} from '../../model/services/fetchArticleById/fetchArticleById';
import {useSelector} from 'react-redux';
import {
	selectArticleDetailsData,
	selectArticleDetailsError,
	selectArticleDetailsIsLoading,
} from '../../model/selectors/selectArticleDetails';
import {Text, TextVariant} from 'shared/ui/Text/Text';
import {useTranslation} from 'react-i18next';
import {Skeleton} from 'shared/ui/Skeleton/Skeleton';
import {Avatar, AvatarSize} from 'shared/ui/Avatar/Avatar';
import {Title} from 'shared/ui/Title/Title';
import {IcoThinCalendarDays, IcoThinEyeEvil} from 'shared/assets/icons/index';
import type {ArticleBlock} from '../../model/types/article';
import {ArticleBlockType} from '../../model/types/article';
import {ArticleCodeBlockComponent} from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {ArticleImageBlockComponent} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import {ArticleTextBlockComponent} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {HStack, VStack} from 'shared/ui/Stack';

interface ArticleDetailsProps {
	className?: string;
	id: string;
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
					<Avatar src={article?.img} size={AvatarSize.LG}/>
				</HStack>
				<Title order={1}>{article?.title}</Title>
				<Title order={2}>{article?.subtitle}</Title>
				<VStack gap="0.5">
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
			<VStack gap="1.5" isMax className={classNames([className])}>
				{content}
			</VStack>
		</DynamicModuleLoader>
	);
};

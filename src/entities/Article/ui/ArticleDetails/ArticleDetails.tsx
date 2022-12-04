import module from './ArticleDetails.module.css';
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
			<div className={module.skeletons}>
				<Skeleton width={200} height={200} borderRadius={'50%'}/>
				<Skeleton width={300} height={32}/>
				<Skeleton width={600} height={24}/>
				<Skeleton width="100%" height={200}/>
				<Skeleton width="100%" height={200}/>
			</div>);
	} else if (error) {
		content = <Text variant={TextVariant.RED}>{t('Произошла ошибка при загрузке статьи.')}</Text>;
	} else {
		content = (
			<>
				<Avatar className={module.articleAvatar} src={article?.img} size={AvatarSize.LG}/>
				<Title order={1}>{article?.title}</Title>
				<Title order={2}>{article?.subtitle}</Title>
				<div className={module.articleInfos}>
					<div className={module.infoItem}>
						<IcoThinEyeEvil/>
						<Text>{article?.views}</Text>
					</div>
					<div className={module.infoItem}>
						<IcoThinCalendarDays/>
						<Text>{article?.createdAt}</Text>
					</div>
				</div>
				{article?.blocks.map(renderBlock)}
			</>);
	}

	return (
		<DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
			<div className={classNames([module.articleDetails, className])}>
				{content}
			</div>
		</DynamicModuleLoader>
	);
};

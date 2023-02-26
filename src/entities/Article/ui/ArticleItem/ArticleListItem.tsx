import {IcoThinEyeEvil, IcoThinImageSlash} from '@/shared/assets/icons';
import {getRouteArticleDetails} from '@/shared/const/router';
import {classNames} from '@/shared/lib/classNames/classNames';
import {AppLink} from '@/shared/ui/AppLink';
import {Avatar} from '@/shared/ui/Avatar';
import {Button, ButtonVariant} from '@/shared/ui/Button';
import {Card} from '@/shared/ui/Card';
import {Text} from '@/shared/ui/Text';
import {Title} from '@/shared/ui/Title';
import type {HTMLAttributeAnchorTarget} from 'react';
import {useTranslation} from 'react-i18next';
import {ArticleBlockType, ArticleView} from '../../model/consts/article';
import type {Article, ArticleTextBlock} from '../../model/types/article';
import {ArticleTextBlockComponent} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import module from './ArticleListItem.module.css';
import {AppImage} from '@/shared/ui/AppImage';
import {Skeleton} from '@/shared/ui/Skeleton';

interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleView;
	target?: HTMLAttributeAnchorTarget;
	setVirtualIndex?: () => void;
}

interface ErrorFallbackProps {
	width?: string | number;
	height?: string | number;
}

const errorFallback = <IcoThinImageSlash width={80}/>;

const Fallback = ({width, height}: ErrorFallbackProps) => {
	return <Skeleton height={height} width={width} className={module.coverImage}/>;
};

export const ArticleListItem = ({className, article, view, target, setVirtualIndex}: ArticleListItemProps) => {
	const {t} = useTranslation();
	const handleClickReadMore = () => {
		setVirtualIndex?.();
	};

	if (view === ArticleView.LIST) {
		const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

		return (
			<Card className={classNames([module.articleListItem, className, module[view]])}>
				<div className={module.userInfo}>
					<Avatar src={article.user.avatar}/>
					<Text>{article.user.username}</Text>
				</div>
				<Text className={module.coverDate}>{article.createdAt}</Text>
				<Title order={2} className={module.articleTitle}>{article.title}</Title>
				<Text className={module.articleTypes}>{article.type.join(', ')}</Text>
				<AppImage
					className={module.coverImage}
					src={article.img}
					alt={article.title}
					height={250}
					width="100%"
					fallback={<Fallback width={'100%'} height={250}/>}
					errorFallback={errorFallback}/>
				{textBlock
					&& <ArticleTextBlockComponent block={textBlock} className={module.textBlock}/>
				}
				<AppLink className={module.readMoreLink} to={getRouteArticleDetails(article.id)}>
					<Button
						onClick={handleClickReadMore}
						variant={ButtonVariant.OUTLINE}
						className={module.readBtn}>
						{t('Читать далее...')}
					</Button>
				</AppLink>
				<div className={module.viewsCounter}>
					<Text>{article.views}</Text>
					<IcoThinEyeEvil width={20}/>
				</div>
			</Card>
		);
	}

	return (
		<AppLink
			target={target}
			to={getRouteArticleDetails(article.id)}
			className={module.appLinkCardWrapper}>
			<Card
				className={classNames([module.articleListItem, className, module[view]])}
				onClick={handleClickReadMore}>
				<div className={module.cover}>
					<AppImage
						className={module.coverImage}
						src={article.img}
						alt={article.title}
						width={200}
						height={200}
						fallback={<Fallback width={200} height={200}/>}
						errorFallback={errorFallback}/>
					<Text className={module.coverDate}>{article.createdAt}</Text>
				</div>
				<Text className={module.articleTypes}>{article.type.join(', ')}</Text>
				<div className={module.viewsCounter}>
					<Text>{article.views}</Text>
					<IcoThinEyeEvil width={20}/>
				</div>
				<Title order={3} className={module.articleTitle}>{article.title}</Title>
			</Card>
		</AppLink>
	);
};

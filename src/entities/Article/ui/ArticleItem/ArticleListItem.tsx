import module from './ArticleListItem.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {Article, ArticleTextBlock} from '../../model/types/article';
import {ArticleBlockType, ArticleView} from '../../model/types/article';
import {Text} from 'shared/ui/Text/Text';
import {IcoThinEyeEvil} from 'shared/assets/icons';
import {Card} from 'shared/ui/Card/Card';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';
import {Title} from 'shared/ui/Title/Title';
import {ArticleTextBlockComponent} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {useNavigate} from 'react-router-dom';
import {ROUTE_PATH} from 'app/providers/router';

interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleView;
}

export const ArticleListItem = ({className, article, view}: ArticleListItemProps) => {
	const {t} = useTranslation();
	const navigate = useNavigate();

	const handleArticleDetailsNavigate = () => {
		navigate(`${ROUTE_PATH.ARTICLE_DETAILS_PAGE}${article.id}`);
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
				<img
					className={module.coverImage}
					height={250}
					src={article.img}
					alt={article.title}/>
				{textBlock
					&& <ArticleTextBlockComponent block={textBlock} className={module.textBlock}/>
				}
				<Button
					onClick={handleArticleDetailsNavigate}
					variant={ButtonVariant.OUTLINE}
					className={module.readBtn}>
					{t('Читать далее...')}
				</Button>
				<div className={module.viewsCounter}>
					<Text>{article.views}</Text>
					<IcoThinEyeEvil width={20}/>
				</div>
			</Card>
		);
	}

	return (
		<Card
			className={classNames([module.articleListItem, className, module[view]])}
			onClick={handleArticleDetailsNavigate}>
			<div className={module.cover}>
				<img
					className={module.coverImage}
					src={article.img}
					width={200}
					height={200}
					alt={article.title}/>
				<Text className={module.coverDate}>{article.createdAt}</Text>
			</div>
			<Text className={module.articleTypes}>{article.type.join(', ')}</Text>
			<div className={module.viewsCounter}>
				<Text>{article.views}</Text>
				<IcoThinEyeEvil width={20}/>
			</div>
			<Title order={3} className={module.articleTitle}>{article.title}</Title>
		</Card>
	);
};
